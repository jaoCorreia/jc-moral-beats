const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 4321;
const DATA_DIR = path.join(__dirname, 'data');
const UPLOADS_DIR = path.join(__dirname, 'uploads');
const CATALOG_PATH = path.join(DATA_DIR, 'catalog.json');

// Ensure directories exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

// Producer master key verification (SHA-256 hash fallback)
const MASTER_HASH = 'c75c2d251a14cf2f2fd2dc936d461044c82e5c8ca16ae287627af9c523c947b4';

function verifyAuth(req) {
  const authHeader = req.headers['authorization'] || '';
  const token = authHeader.replace(/^Bearer\s+/i, '') || req.headers['x-producer-key'] || '';
  if (!token) return false;

  if (process.env.PRODUCER_MASTER_KEY && token === process.env.PRODUCER_MASTER_KEY) {
    return true;
  }

  const hash = crypto.createHash('sha256').update(token).digest('hex');
  return hash === MASTER_HASH;
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-producer-key, x-filename');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const cleanUrl = req.url.split('?')[0];

  // =========================================================================
  // API: GET /api/catalog
  // =========================================================================
  if (req.method === 'GET' && cleanUrl === '/api/catalog') {
    if (!fs.existsSync(CATALOG_PATH)) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Catálogo não inicializado' }));
      return;
    }
    const data = fs.readFileSync(CATALOG_PATH, 'utf8');
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate'
    });
    res.end(data);
    return;
  }

  // =========================================================================
  // API: POST /api/catalog (Admin only - updates catalog for all users)
  // =========================================================================
  if (req.method === 'POST' && cleanUrl === '/api/catalog') {
    if (!verifyAuth(req)) {
      res.writeHead(401, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ error: 'Acesso negado: chave mestra necessária.' }));
      return;
    }

    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => {
      try {
        const catalog = JSON.parse(body);
        if (!Array.isArray(catalog) || catalog.length === 0) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Catálogo inválido (precisa ser uma lista de beats)' }));
          return;
        }
        fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2), 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: true, count: catalog.length, message: 'Catálogo salvo globalmente para todos os usuários.' }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'JSON malformado' }));
      }
    });
    return;
  }

  // =========================================================================
  // API: POST /api/upload (Admin only - uploads audio file directly to server)
  // =========================================================================
  if (req.method === 'POST' && cleanUrl === '/api/upload') {
    if (!verifyAuth(req)) {
      res.writeHead(401, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ error: 'Acesso negado: chave mestra necessária.' }));
      return;
    }

    const rawName = req.headers['x-filename'] || ('beat_' + Date.now() + '.mp3');
    const safeBase = path.basename(decodeURIComponent(rawName)).replace(/[^a-zA-Z0-9._-]/g, '_');
    const ext = path.extname(safeBase).toLowerCase() || '.mp3';
    const baseName = path.basename(safeBase, ext);
    const uniqueName = `${baseName}_${Date.now()}${ext}`;
    const targetPath = path.join(UPLOADS_DIR, uniqueName);

    const outStream = fs.createWriteStream(targetPath);
    req.pipe(outStream);

    outStream.on('finish', () => {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({
        success: true,
        src: `/uploads/${uniqueName}`,
        filename: uniqueName,
        title: baseName.replace(/_/g, ' ')
      }));
    });

    outStream.on('error', (err) => {
      console.error('Erro no upload de áudio:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Falha ao gravar arquivo de áudio no servidor' }));
    });
    return;
  }

  // =========================================================================
  // API: POST /api/like (Public - registers like for a beat in catalog.json)
  // =========================================================================
  if (req.method === 'POST' && cleanUrl === '/api/like') {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => {
      try {
        const { trackId } = JSON.parse(body);
        if (!trackId || !fs.existsSync(CATALOG_PATH)) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'ID inválido' }));
          return;
        }
        const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
        const track = catalog.find((t) => t.id === trackId);
        if (track) {
          track.likes = (track.likes || 0) + 1;
          fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2), 'utf8');
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, likes: track.likes }));
          return;
        }
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Faixa não encontrada' }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Erro ao processar like' }));
      }
    });
    return;
  }

  // =========================================================================
  // STATIC FILES (including persistent /uploads/ audio files with Range support)
  // =========================================================================
  let filePath;
  if (cleanUrl.startsWith('/uploads/')) {
    const uploadFile = path.basename(cleanUrl.replace(/^\/uploads\//, ''));
    filePath = path.join(UPLOADS_DIR, uploadFile);
  } else {
    const relativePath = cleanUrl === '/' ? 'index.html' : cleanUrl.replace(/^\/+/, '');
    filePath = path.join(__dirname, relativePath);
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const totalSize = stats.size;

    // Handle HTTP Range Requests (Essential for Chrome & Safari audio playback)
    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;

      if (start >= totalSize || end >= totalSize || start > end) {
        res.writeHead(416, {
          'Content-Range': `bytes */${totalSize}`,
          'Content-Type': 'text/plain'
        });
        res.end('Requested range not satisfiable');
        return;
      }

      const chunkSize = (end - start) + 1;
      const fileStream = fs.createReadStream(filePath, { start, end });

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${totalSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });

      fileStream.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': totalSize,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-store, no-cache, must-revalidate'
      });

      fs.createReadStream(filePath).pipe(res);
    }
  });
});

// Listen on all network interfaces (IPv4 and IPv6)
server.listen(PORT, '0.0.0.0', () => {
  console.log(`JC_MORAL Server running at http://0.0.0.0:${PORT}`);
});
