const path = require('path');
const fs = require('fs');

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

const DATABASE_URL = process.env.DATABASE_URL;

let isPg = Boolean(DATABASE_URL);
let pgPool = null;
let sqliteDb = null;

const DEFAULT_SEEDS = [
  {
    id: 'inverno',
    title: 'Inverno // Lofi Chill',
    artist: 'JC_MORAL',
    bpm: 82,
    type: 'audio',
    src: '/inverno.mp3',
    tags: 'lo-fi, chill, autoral',
    loop_start: 0,
    loop_end: 0,
    loop_enabled: 1,
    max_loops: 0,
    likes: 42,
    scenery: 'street',
    palette: 'hybrid',
    accessory: 'none',
    sketch: 'devil',
    intensity: 0.75,
    sort_order: 1
  },
  {
    id: 'moral-drill',
    title: 'Moral Densidade // Cyber Drill',
    artist: 'JC_MORAL',
    bpm: 88,
    type: 'audio',
    src: '/untitled-46.mp3',
    tags: 'drill, cyber, autoral',
    loop_start: 0,
    loop_end: 0,
    loop_enabled: 1,
    max_loops: 0,
    likes: 58,
    scenery: 'cybercode',
    palette: 'cytro',
    accessory: 'cap',
    sketch: 'waves',
    intensity: 0.90,
    sort_order: 2
  },
  {
    id: 'voz1-session',
    title: 'Voz Sessions // Boombap 84',
    artist: 'JC_MORAL',
    bpm: 84,
    type: 'audio',
    src: '/voz1.mp3',
    tags: 'boombap, analog, autoral',
    loop_start: 0,
    loop_end: 0,
    loop_enabled: 1,
    max_loops: 0,
    likes: 64,
    scenery: 'valley3d',
    palette: 'kvrc',
    accessory: 'cowboy',
    sketch: 'earcups',
    intensity: 0.85,
    sort_order: 3
  }
];

function formatRow(row) {
  if (!row) return null;
  const tagsArr = typeof row.tags === 'string'
    ? row.tags.split(',').map((t) => t.trim()).filter(Boolean)
    : (Array.isArray(row.tags) ? row.tags : []);

  return {
    id: row.id,
    title: row.title,
    artist: row.artist || 'JC_MORAL',
    bpm: Number(row.bpm) || 82,
    type: row.type || 'audio',
    src: row.src,
    tags: tagsArr,
    loopStart: Number(row.loop_start) || 0,
    loopEnd: Number(row.loop_end) || 0,
    loopEnabled: Boolean(row.loop_enabled === 1 || row.loop_enabled === true),
    maxLoops: Number(row.max_loops) || 0,
    likes: Number(row.likes) || 0,
    sortOrder: Number(row.sort_order) || 0,
    preset: {
      scenery: row.scenery || 'street',
      palette: row.palette || 'hybrid',
      accessory: row.accessory || 'none',
      sketch: row.sketch || 'devil',
      intensity: typeof row.intensity === 'number' ? row.intensity : 0.75
    }
  };
}

async function initDb() {
  if (isPg) {
    const { Pool } = require('pg');
    pgPool = new Pool({ connectionString: DATABASE_URL });

    await pgPool.query(`
      CREATE TABLE IF NOT EXISTS tracks (
        id VARCHAR(100) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        artist VARCHAR(100) NOT NULL DEFAULT 'JC_MORAL',
        bpm INTEGER NOT NULL DEFAULT 82,
        type VARCHAR(50) NOT NULL DEFAULT 'audio',
        src VARCHAR(500) NOT NULL,
        tags TEXT DEFAULT '',
        loop_start REAL DEFAULT 0,
        loop_end REAL DEFAULT 0,
        loop_enabled BOOLEAN DEFAULT TRUE,
        max_loops INTEGER DEFAULT 0,
        likes INTEGER DEFAULT 0,
        scenery VARCHAR(100) DEFAULT 'street',
        palette VARCHAR(100) DEFAULT 'hybrid',
        accessory VARCHAR(100) DEFAULT 'none',
        sketch VARCHAR(100) DEFAULT 'devil',
        intensity REAL DEFAULT 0.75,
        sort_order INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    const { rows } = await pgPool.query('SELECT COUNT(*) as count FROM tracks');
    if (parseInt(rows[0].count, 10) === 0) {
      console.log('⚡ Seeding PostgreSQL database with default JC_MORAL beats...');
      for (const t of DEFAULT_SEEDS) {
        await pgPool.query(
          `INSERT INTO tracks (id, title, artist, bpm, type, src, tags, loop_start, loop_end, loop_enabled, max_loops, likes, scenery, palette, accessory, sketch, intensity, sort_order)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
           ON CONFLICT (id) DO NOTHING`,
          [t.id, t.title, t.artist, t.bpm, t.type, t.src, t.tags, t.loop_start, t.loop_end, t.loop_enabled === 1, t.max_loops, t.likes, t.scenery, t.palette, t.accessory, t.sketch, t.intensity, t.sort_order]
        );
      }
    }
    console.log('✅ Connected to PostgreSQL database.');
  } else {
    // Native SQLite in Node.js 22+
    const { DatabaseSync } = require('node:sqlite');
    const dbPath = path.join(DATA_DIR, 'beats.db');
    sqliteDb = new DatabaseSync(dbPath);

    sqliteDb.exec(`
      CREATE TABLE IF NOT EXISTS tracks (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        artist TEXT NOT NULL DEFAULT 'JC_MORAL',
        bpm INTEGER NOT NULL DEFAULT 82,
        type TEXT NOT NULL DEFAULT 'audio',
        src TEXT NOT NULL,
        tags TEXT DEFAULT '',
        loop_start REAL DEFAULT 0,
        loop_end REAL DEFAULT 0,
        loop_enabled INTEGER DEFAULT 1,
        max_loops INTEGER DEFAULT 0,
        likes INTEGER DEFAULT 0,
        scenery TEXT DEFAULT 'street',
        palette TEXT DEFAULT 'hybrid',
        accessory TEXT DEFAULT 'none',
        sketch TEXT DEFAULT 'devil',
        intensity REAL DEFAULT 0.75,
        sort_order INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    const countRow = sqliteDb.prepare('SELECT COUNT(*) as count FROM tracks').get();
    if (!countRow || countRow.count === 0) {
      console.log('⚡ Seeding SQLite database (beats.db) with default JC_MORAL beats...');
      const insert = sqliteDb.prepare(`
        INSERT INTO tracks (id, title, artist, bpm, type, src, tags, loop_start, loop_end, loop_enabled, max_loops, likes, scenery, palette, accessory, sketch, intensity, sort_order)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);
      for (const t of DEFAULT_SEEDS) {
        insert.run(t.id, t.title, t.artist, t.bpm, t.type, t.src, t.tags, t.loop_start, t.loop_end, t.loop_enabled, t.max_loops, t.likes, t.scenery, t.palette, t.accessory, t.sketch, t.intensity, t.sort_order);
      }
    }
    console.log(`✅ SQLite database active at: ${dbPath}`);
  }
}

async function getAllTracks() {
  if (isPg) {
    const { rows } = await pgPool.query('SELECT * FROM tracks ORDER BY sort_order ASC, created_at ASC');
    return rows.map(formatRow);
  } else {
    const rows = sqliteDb.prepare('SELECT * FROM tracks ORDER BY sort_order ASC, created_at ASC').all();
    return rows.map(formatRow);
  }
}

async function getTrackById(id) {
  if (isPg) {
    const { rows } = await pgPool.query('SELECT * FROM tracks WHERE id = $1', [id]);
    return formatRow(rows[0]);
  } else {
    const row = sqliteDb.prepare('SELECT * FROM tracks WHERE id = ?').get(id);
    return formatRow(row);
  }
}

async function saveTrack(t) {
  const p = t.preset || {};
  const tagsStr = Array.isArray(t.tags) ? t.tags.join(', ') : (t.tags || '');

  if (isPg) {
    await pgPool.query(`
      INSERT INTO tracks (id, title, artist, bpm, type, src, tags, loop_start, loop_end, loop_enabled, max_loops, likes, scenery, palette, accessory, sketch, intensity, sort_order)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
      ON CONFLICT (id) DO UPDATE SET
        title = EXCLUDED.title,
        artist = EXCLUDED.artist,
        bpm = EXCLUDED.bpm,
        type = EXCLUDED.type,
        src = EXCLUDED.src,
        tags = EXCLUDED.tags,
        loop_start = EXCLUDED.loop_start,
        loop_end = EXCLUDED.loop_end,
        loop_enabled = EXCLUDED.loop_enabled,
        max_loops = EXCLUDED.max_loops,
        scenery = EXCLUDED.scenery,
        palette = EXCLUDED.palette,
        accessory = EXCLUDED.accessory,
        sketch = EXCLUDED.sketch,
        intensity = EXCLUDED.intensity,
        sort_order = EXCLUDED.sort_order;
    `, [
      t.id,
      t.title,
      t.artist || 'JC_MORAL',
      Number(t.bpm) || 82,
      t.type || 'audio',
      t.src || '/inverno.mp3',
      tagsStr,
      Number(t.loopStart) || 0,
      Number(t.loopEnd) || 0,
      t.loopEnabled !== false,
      Number(t.maxLoops) || 0,
      Number(t.likes) || 0,
      p.scenery || 'street',
      p.palette || 'hybrid',
      p.accessory || 'none',
      p.sketch || 'devil',
      typeof p.intensity === 'number' ? p.intensity : 0.75,
      Number(t.sortOrder) || 0
    ]);
  } else {
    const stmt = sqliteDb.prepare(`
      INSERT INTO tracks (id, title, artist, bpm, type, src, tags, loop_start, loop_end, loop_enabled, max_loops, likes, scenery, palette, accessory, sketch, intensity, sort_order)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT (id) DO UPDATE SET
        title = excluded.title,
        artist = excluded.artist,
        bpm = excluded.bpm,
        type = excluded.type,
        src = excluded.src,
        tags = excluded.tags,
        loop_start = excluded.loop_start,
        loop_end = excluded.loop_end,
        loop_enabled = excluded.loop_enabled,
        max_loops = excluded.max_loops,
        scenery = excluded.scenery,
        palette = excluded.palette,
        accessory = excluded.accessory,
        sketch = excluded.sketch,
        intensity = excluded.intensity,
        sort_order = excluded.sort_order
    `);
    stmt.run(
      t.id,
      t.title,
      t.artist || 'JC_MORAL',
      Number(t.bpm) || 82,
      t.type || 'audio',
      t.src || '/inverno.mp3',
      tagsStr,
      Number(t.loopStart) || 0,
      Number(t.loopEnd) || 0,
      t.loopEnabled !== false ? 1 : 0,
      Number(t.maxLoops) || 0,
      Number(t.likes) || 0,
      p.scenery || 'street',
      p.palette || 'hybrid',
      p.accessory || 'none',
      p.sketch || 'devil',
      typeof p.intensity === 'number' ? p.intensity : 0.75,
      Number(t.sortOrder) || 0
    );
  }
}

async function saveAllTracks(tracks) {
  if (!Array.isArray(tracks)) return;
  for (let i = 0; i < tracks.length; i++) {
    const t = tracks[i];
    t.sortOrder = i + 1;
    await saveTrack(t);
  }
}

async function likeTrack(id) {
  if (isPg) {
    const res = await pgPool.query('UPDATE tracks SET likes = likes + 1 WHERE id = $1 RETURNING likes', [id]);
    return res.rows[0] ? res.rows[0].likes : 0;
  } else {
    sqliteDb.prepare('UPDATE tracks SET likes = likes + 1 WHERE id = ?').run(id);
    const row = sqliteDb.prepare('SELECT likes FROM tracks WHERE id = ?').get(id);
    return row ? row.likes : 0;
  }
}

async function deleteTrack(id) {
  if (isPg) {
    await pgPool.query('DELETE FROM tracks WHERE id = $1', [id]);
  } else {
    sqliteDb.prepare('DELETE FROM tracks WHERE id = ?').run(id);
  }
}

module.exports = {
  initDb,
  getAllTracks,
  getTrackById,
  saveTrack,
  saveAllTracks,
  likeTrack,
  deleteTrack
};
