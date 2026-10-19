const fs = require('fs');
const path = require('path');

const bundleJs = fs.readFileSync(path.join(__dirname, 'dist/bundle.js'), 'utf8');

const standaloneHtml = `<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JC_MORAL — Beats</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root {
      --bg: #0b0b0a;
      --panel: #111110;
      --panel-2: #171715;
      --line: #232321;
      --line-2: #34332f;
      --text: #ebe9e3;
      --muted: #8f8d85;
      --dim: #5f5d57;
      --accent: #ff5a1f;
      --accent-hover: #ff7442;
      --accent-ink: #0b0b0a;
      --danger: #e5484d;
      --sans: "Archivo", ui-sans-serif, system-ui, -apple-system, sans-serif;
      --mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
    }

    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background: var(--bg);
      color: var(--text);
      overflow: hidden;
      font-family: var(--sans);
      font-size: 13px;
      -webkit-font-smoothing: antialiased;
    }
    body { display: flex; flex-direction: column; user-select: none; -webkit-user-select: none; }
    input, textarea { user-select: text; -webkit-user-select: text; }
    .hidden { display: none !important; }
    .mono { font-family: var(--mono); }
    .sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
    svg { display: block; }

    /* ---------- Type ---------- */
    .wordmark {
      margin: 0;
      font-weight: 850;
      font-variation-settings: "wdth" 68;
      font-size: 26px;
      line-height: 0.9;
      letter-spacing: 0.005em;
      text-transform: uppercase;
    }
    .tagline { margin: 4px 0 0; color: var(--muted); font-size: 12px; }
    .label {
      font: 500 10px/1 var(--mono);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--dim);
    }
    .heading {
      margin: 0;
      font-weight: 800;
      font-variation-settings: "wdth" 72;
      font-size: 22px;
      line-height: 1;
      text-transform: uppercase;
    }
    .count { font: 500 11px/1 var(--mono); color: var(--dim); }

    /* ---------- Buttons ---------- */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      height: 30px;
      padding: 0 11px;
      border: 1px solid var(--line-2);
      border-radius: 2px;
      background: transparent;
      color: var(--text);
      font: 500 12px/1 var(--sans);
      white-space: nowrap;
      cursor: pointer;
      transition: border-color .15s, color .15s, background-color .15s;
    }
    .btn:hover { border-color: var(--muted); }
    .btn-ghost { border-color: transparent; color: var(--muted); }
    .btn-ghost:hover { border-color: transparent; color: var(--text); }
    .btn-icon { width: 30px; padding: 0; justify-content: center; }
    .btn-accent { background: var(--accent); border-color: var(--accent); color: var(--accent-ink); font-weight: 600; }
    .btn-accent:hover { background: var(--accent-hover); border-color: var(--accent-hover); }
    .btn-dark { background: rgba(11, 11, 10, .78); border-color: rgba(235, 233, 227, .18); }
    .btn-block { width: 100%; justify-content: space-between; height: 34px; }
    .btn.is-active,
    .active-pill {
      border-color: var(--accent) !important;
      color: var(--accent) !important;
      background: rgba(255, 90, 31, .06) !important;
    }
    .link {
      background: none; border: 0; padding: 0; cursor: pointer;
      color: var(--muted); font: 500 12px var(--sans);
      text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--line-2);
    }
    .link:hover { color: var(--text); text-decoration-color: var(--muted); }
    .link-danger:hover { color: var(--danger); }

    /* ---------- Chips / tags ---------- */
    .chip {
      display: inline-flex; align-items: center; gap: 5px;
      height: 20px; padding: 0 7px;
      border: 1px solid var(--line-2); border-radius: 2px;
      font: 500 11px/1 var(--mono); color: var(--muted);
      background: transparent; white-space: nowrap;
    }
    button.chip { cursor: pointer; transition: color .15s, border-color .15s; }
    button.chip:hover { color: var(--text); border-color: var(--muted); }
    .chip.is-on { color: var(--accent); border-color: var(--accent); }
    .chip-x { color: var(--dim); cursor: pointer; font-size: 13px; line-height: 1; }
    .chip-x:hover { color: var(--danger); }

    /* ---------- Form fields ---------- */
    .field {
      width: 100%; height: 34px; padding: 0 10px;
      background: var(--bg); color: var(--text);
      border: 1px solid var(--line-2); border-radius: 2px;
      font: 400 13px var(--sans); outline: none;
    }
    .field:focus { border-color: var(--accent); }
    .field::placeholder { color: var(--dim); }
    .tag-input {
      display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
      min-height: 34px; padding: 6px;
      background: var(--bg); border: 1px solid var(--line-2); border-radius: 2px;
      cursor: text;
    }
    .tag-input:focus-within { border-color: var(--accent); }
    .tag-input input {
      flex: 1; min-width: 90px; height: 20px;
      background: transparent; border: 0; outline: 0;
      color: var(--text); font: 400 12px var(--mono);
    }
    .tag-input input::placeholder { color: var(--dim); }
    input[type="range"] { accent-color: var(--accent); width: 100%; }

    /* ---------- Top bar ---------- */
    .topbar {
      flex-shrink: 0;
      display: flex; align-items: center; justify-content: space-between; gap: 16px;
      padding: 12px 18px;
      border-bottom: 1px solid var(--line);
      z-index: 20;
    }
    .brand { display: flex; align-items: center; gap: 14px; min-width: 0; }
    .ldr-mark { display: flex; gap: 6px; font: 500 13px/1 var(--mono); color: var(--muted); }
    .ldr-mark .ldr-glyph-icon { display: inline-block; cursor: pointer; transition: transform 75ms; }
    .ldr-mark .ldr-glyph-icon:first-child { color: var(--accent); }
    .topnav { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; justify-content: flex-end; }
    .admin-tools { display: flex; align-items: center; gap: 6px; }
    .vdivider { width: 1px; height: 18px; background: var(--line-2); margin: 0 8px; }
    .session {
      display: flex; align-items: center; gap: 8px;
      height: 30px; padding: 0 4px 0 10px; margin-left: 4px;
      border-left: 1px solid var(--line-2);
      font: 500 12px var(--sans); color: var(--text);
    }
    .session-dot { width: 6px; height: 6px; background: var(--accent); }

    /* ---------- Stage ---------- */
    #stage-wrapper {
      position: relative; flex: 1; min-height: 0;
      display: flex; justify-content: center; align-items: stretch;
      overflow: hidden;
    }
    #stage-wrapper:has(.tiktok-vertical-mode) { padding: 16px 0; }
    #canvas-stage {
      position: relative; width: 100%; height: 100%; overflow: hidden;
      transition: box-shadow .2s;
    }
    #canvas-stage.tiktok-vertical-mode {
      width: auto !important;
      height: 100%;
      max-width: 100%;
      aspect-ratio: 9 / 16;
      outline: 1px solid var(--line-2);
    }
    .stage-bg { background: radial-gradient(circle at 50% 42%, #1a1a18 0%, #0f0f0e 60%, #0b0b0a 100%); }
    .crt-vignette { background: radial-gradient(circle at 50% 50%, transparent 60%, rgba(5, 5, 4, .7) 100%); }
    .hud {
      position: absolute; top: 14px; left: 18px; z-index: 10; pointer-events: none;
      display: flex; flex-direction: column; gap: 4px;
      font: 400 11px/1.3 var(--mono); color: var(--dim);
    }
    #track-name-display { color: var(--muted); }

    /* TikTok guides */
    .safe-box {
      position: absolute; left: 20px; right: 20px; top: 56px; bottom: 96px;
      border: 1px dashed rgba(235, 233, 227, .22);
      display: flex; justify-content: center; padding-top: 8px; pointer-events: none;
    }
    .side-icons {
      position: absolute; right: 12px; bottom: 96px;
      display: flex; flex-direction: column; align-items: center; gap: 16px;
    }
    .side-icons span { width: 30px; height: 30px; border: 1px solid rgba(235, 233, 227, .35); border-radius: 50%; }
    .rec-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent-ink); }
    .rec-dot.is-rec { animation: blink 1s steps(2, start) infinite; }
    @keyframes blink { to { visibility: hidden; } }

    /* ---------- Player bar ---------- */
    .player {
      flex-shrink: 0;
      display: grid;
      grid-template-columns: auto minmax(160px, 1fr) minmax(220px, 1.3fr) auto;
      align-items: center; gap: 24px;
      padding: 10px 18px;
      border-top: 1px solid var(--line);
      background: var(--bg);
      z-index: 20;
    }
    .transport { display: flex; align-items: center; gap: 2px; }
    .play-btn {
      width: 38px; height: 38px; margin: 0 4px;
      display: inline-flex; align-items: center; justify-content: center;
      background: var(--accent); color: var(--accent-ink);
      border: 0; border-radius: 2px; cursor: pointer;
      transition: background-color .15s;
    }
    .play-btn:hover { background: var(--accent-hover); }
    .now { min-width: 0; display: flex; flex-direction: column; gap: 5px; }
    .now-title {
      font-weight: 700; font-size: 15px; line-height: 1.1;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .now-meta { display: flex; align-items: center; gap: 8px; min-width: 0; font: 400 11px/1 var(--mono); color: var(--muted); }
    .now-tags { display: flex; gap: 4px; overflow: hidden; }
    .scrub { display: flex; align-items: center; gap: 10px; }
    .time { font: 400 11px/1 var(--mono); color: var(--dim); min-width: 34px; }
    .time:last-child { text-align: right; }
    .progress { position: relative; flex: 1; height: 2px; background: var(--line-2); cursor: pointer; }
    .progress::before { content: ""; position: absolute; left: 0; right: 0; top: -9px; bottom: -9px; }
    .progress-fill { height: 100%; width: 0; background: var(--text); transition: width .15s linear; }
    .progress:hover .progress-fill { background: var(--accent); }
    .player-actions { display: flex; align-items: center; gap: 6px; }
    #radio-like-icon { color: var(--accent); }
    @media (max-width: 900px) {
      .player { grid-template-columns: auto 1fr auto; }
      .scrub { display: none; }
    }
    @media (max-width: 640px) {
      .tagline, .ldr-mark { display: none; }
      .admin-tools .btn span.opt-label { display: none; }
    }

    /* ---------- Drawers ---------- */
    .drawer {
      position: fixed; top: 0; bottom: 0; z-index: 40;
      width: min(400px, 92vw);
      display: flex; flex-direction: column;
      background: var(--panel);
    }
    .drawer-left { left: 0; border-right: 1px solid var(--line); }
    .drawer-right { right: 0; border-left: 1px solid var(--line); }
    .drawer-head {
      flex-shrink: 0;
      display: flex; align-items: flex-end; justify-content: space-between; gap: 12px;
      padding: 20px 18px 16px;
      border-bottom: 1px solid var(--line);
    }
    .drawer-head p { margin: 6px 0 0; color: var(--muted); font-size: 12px; line-height: 1.4; }
    .drawer-body { flex: 1; overflow-y: auto; }
    .drawer-body::-webkit-scrollbar { width: 6px; }
    .drawer-body::-webkit-scrollbar-thumb { background: var(--line-2); }
    .backdrop { position: fixed; inset: 0; z-index: 30; background: rgba(0, 0, 0, .55); }
    .section { padding: 18px; border-bottom: 1px solid var(--line); display: flex; flex-direction: column; gap: 10px; }
    .section-head { display: flex; justify-content: space-between; align-items: baseline; }
    .section p { margin: 0; color: var(--muted); font-size: 12px; line-height: 1.55; }
    .section p strong { color: var(--text); font-weight: 600; }

    .opt-list { display: flex; flex-direction: column; gap: 4px; }
    .opt-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; }
    .opt {
      display: flex; align-items: center; justify-content: space-between; gap: 8px;
      width: 100%; min-height: 34px; padding: 0 10px;
      background: transparent; color: var(--text);
      border: 1px solid var(--line); border-radius: 2px;
      font: 500 12px/1.2 var(--sans); text-align: left; cursor: pointer;
      transition: border-color .15s, color .15s;
    }
    .opt:hover { border-color: var(--line-2); }
    .opt small { font: 400 10px/1 var(--mono); color: var(--dim); }
    .opt.active-pill small { color: inherit; opacity: .7; }

    /* ---------- Playlist ---------- */
    .tag-filter { display: flex; flex-wrap: wrap; gap: 4px; padding: 12px 18px; border-bottom: 1px solid var(--line); }
    .track {
      position: relative;
      display: grid; grid-template-columns: 26px 1fr auto; column-gap: 10px; row-gap: 6px;
      padding: 13px 18px 13px 16px;
      border-bottom: 1px solid var(--line);
      cursor: pointer;
    }
    .track:hover { background: var(--panel-2); }
    .track.is-active::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--accent); }
    .track-num {
      position: relative; width: 26px; height: 18px;
      display: flex; align-items: center;
      background: none; border: 0; padding: 0; cursor: pointer;
      font: 500 11px/1 var(--mono); color: var(--dim);
    }
    .track-num .n { transition: opacity .1s; }
    .track-num .ico { position: absolute; left: 0; top: 50%; transform: translateY(-50%); opacity: 0; color: var(--text); }
    .track:hover .track-num .n { opacity: 0; }
    .track:hover .track-num .ico { opacity: 1; }
    .track.is-active .track-num { color: var(--accent); }
    .track-title {
      min-width: 0; align-self: center;
      font-weight: 600; font-size: 14px; line-height: 1.2;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .track.is-active .track-title { color: var(--accent); }
    .track-like {
      display: inline-flex; align-items: center; gap: 5px; align-self: center;
      background: none; border: 0; padding: 0; cursor: pointer;
      font: 500 11px/1 var(--mono); color: var(--dim);
    }
    .track-like:hover { color: var(--accent); }
    .track-meta { grid-column: 2 / 4; display: flex; flex-wrap: wrap; align-items: center; gap: 4px; font: 400 11px/1 var(--mono); color: var(--muted); }
    .track-meta .sep { color: var(--line-2); margin: 0 2px; }
    .track-preset { grid-column: 2 / 4; font: 400 10px/1.3 var(--mono); color: var(--dim); }
    .track-actions { grid-column: 2 / 4; display: flex; gap: 14px; }
    .track-edit { grid-column: 1 / 4; display: flex; flex-direction: column; gap: 8px; padding: 2px 0 2px 36px; cursor: default; }
    .track-edit .row-actions { display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-top: 4px; }
    .loop-box {
      display: flex; flex-direction: column; gap: 6px; padding: 8px 10px;
      border: 1px dashed var(--line-2); border-radius: 2px; background: rgba(0,0,0,.25);
    }
    .loop-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .time-field { display: flex; align-items: center; gap: 4px; }
    .time-field input { font-family: var(--mono); font-size: 11px; padding: 0 6px; height: 26px; }
    .loop-tag { font: 500 10px/1 var(--mono); color: var(--accent); border: 1px solid rgba(255, 90, 31, .35); padding: 1px 4px; border-radius: 2px; }
    .suggest { display: flex; flex-wrap: wrap; gap: 4px; align-items: center; }
    .empty { padding: 28px 18px; color: var(--dim); font: 400 12px var(--mono); }

    .eq { display: inline-flex; align-items: flex-end; gap: 2px; height: 10px; }
    .eq i { width: 2px; background: var(--accent); animation: eq .9s ease-in-out infinite; }
    .eq i:nth-child(2) { animation-delay: -.3s; }
    .eq i:nth-child(3) { animation-delay: -.6s; }
    @keyframes eq { 0%, 100% { height: 3px; } 50% { height: 10px; } }

    /* ---------- Modal ---------- */
    .modal { position: fixed; inset: 0; z-index: 50; display: flex; align-items: center; justify-content: center; padding: 16px; background: rgba(0, 0, 0, .75); }
    .modal-card { width: 100%; max-width: 400px; background: var(--panel); border: 1px solid var(--line-2); }
    .modal-card form { display: flex; flex-direction: column; gap: 10px; padding: 18px; }
    .form-error { padding: 8px 10px; border: 1px solid rgba(229, 72, 77, .4); color: var(--danger); font: 500 11px var(--mono); }
    .hint { margin: 0; color: var(--dim); font: 400 11px/1.5 var(--mono); }
    .hint code { color: var(--muted); }

    /* ---------- Bio ---------- */
    .bio-list { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; }
    .bio-list li { display: flex; justify-content: space-between; gap: 12px; padding: 9px 0; border-bottom: 1px solid var(--line); font-size: 12px; }
    .bio-list li:last-child { border-bottom: 0; }
    .bio-list li span:first-child { color: var(--muted); }
    .bio-link { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--line); color: var(--text); text-decoration: none; font-size: 13px; }
    .bio-link:hover { color: var(--accent); }
    .bio-link span:last-child { font: 400 11px var(--mono); color: var(--dim); }

    /* ---------- Misc ---------- */
    .toast {
      position: fixed; left: 50%; bottom: 84px; transform: translateX(-50%); z-index: 60;
      padding: 10px 14px; background: var(--text); color: var(--bg);
      font: 500 12px var(--sans); border-radius: 2px;
      transition: opacity .3s;
    }
    .floating-heart { pointer-events: none; will-change: transform, opacity; z-index: 50; }
  </style>
</head>
<body>

  <!-- ======================================================================
       TOP BAR
       ====================================================================== -->
  <header class="topbar">
    <div class="brand">
      <div class="ldr-mark" aria-hidden="true">
        <span class="ldr-glyph-icon" title="Love">&#9829;</span>
        <span class="ldr-glyph-icon" title="Death">&#10005;</span>
        <span class="ldr-glyph-icon" title="Robots">&#9632;</span>
      </div>
      <div>
        <h1 class="wordmark">JC_MORAL</h1>
        <p class="tagline">Beats feitos à mão, nota por nota. Sem IA.</p>
      </div>
    </div>

    <nav class="topnav">
      <!-- Producer tools -->
      <div class="admin-only hidden admin-tools">
        <button id="btn-watermark-top" class="btn" title="Marca d'água de voz (ElevenLabs) periódica com voz distorcida">
          <span id="watermark-top-label">Tag: Off</span>
        </button>
        <button id="btn-tiktok-mode" class="btn" title="Formato vertical 9:16 para TikTok / Reels">
          <span id="tiktok-mode-label">Vertical 9:16</span>
        </button>
        <button id="btn-system-audio-top" class="btn btn-system-audio-trigger" title="Capturar áudio de uma aba (Spotify, YouTube) ou do sistema">
          <span class="system-audio-btn-label">Capturar áudio</span>
        </button>
        <button id="btn-pip-top" class="btn btn-pip-trigger" title="Janela flutuante sobre outros apps">
          <span class="pip-btn-label">PiP</span>
        </button>
        <button id="btn-toggle-sidebar" class="btn" title="Cenário, robô, camadas e áudio">Estúdio</button>
        <span class="vdivider"></span>
      </div>

      <button id="btn-toggle-playlist" class="btn btn-ghost" title="Lista de beats">
        Beats <span id="top-playlist-badge" class="count">4</span>
      </button>
      <button id="btn-toggle-bio" class="btn btn-ghost">Sobre</button>

      <button id="btn-dev-login-trigger" class="visitor-only btn btn-ghost btn-icon" title="Área do produtor">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="1"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
      </button>

      <div id="dev-logged-badge" class="admin-only hidden session">
        <span class="session-dot"></span>
        <span>Produtor</span>
        <button id="btn-dev-logout" class="link" title="Encerrar sessão">Sair</button>
      </div>
    </nav>
  </header>

  <!-- ======================================================================
       STAGE
       ====================================================================== -->
  <main id="stage-wrapper">
    <div id="canvas-stage" class="stage-bg">
      <canvas id="ascii-bg-canvas" class="absolute inset-0 w-full h-full pointer-events-none"></canvas>
      <canvas id="webgl-canvas" class="absolute inset-0 w-full h-full"></canvas>
      <canvas id="sketch-fg-canvas" class="absolute inset-0 w-full h-full pointer-events-none"></canvas>
      <div class="absolute inset-0 crt-vignette pointer-events-none"></div>

      <div class="hud">
        <span id="track-name-display">JC_MORAL // INVERNO.MP3</span>
        <span id="track-preset-badge">PRESET: STREET // HYBRID // DEVIL</span>
      </div>

      <!-- TikTok 9:16 guides -->
      <div id="tiktok-guide-overlay" class="absolute inset-0 z-20 hidden pointer-events-none">
        <div class="absolute top-0 left-0 right-0 flex items-center justify-between gap-2 p-3 pointer-events-auto">
          <span class="label" style="color: rgba(235,233,227,.55)">Seguindo · Para você</span>
          <div class="flex items-center gap-1.5">
            <button id="btn-record-tiktok" class="btn btn-accent" title="Gravar 15s em 9:16 com áudio e baixar">
              <span id="tiktok-rec-dot" class="rec-dot"></span>
              <span id="tiktok-rec-label">Gravar 15s</span>
            </button>
            <button id="btn-record-tiktok-30" class="btn btn-dark" title="Gravar 30 segundos">30s</button>
            <button id="btn-toggle-tiktok-guides" class="btn btn-dark" title="Mostrar ou ocultar guias">Guias</button>
          </div>
        </div>

        <div id="tiktok-safe-box" class="safe-box">
          <span class="label" style="color: rgba(235,233,227,.4)">Área segura</span>
        </div>

        <div id="tiktok-side-icons" class="side-icons">
          <span></span><span></span><span></span><span></span><span></span>
        </div>

        <div id="tiktok-bottom-caption" class="absolute left-4 bottom-4 flex flex-col gap-1 max-w-[70%]" style="text-shadow: 0 1px 4px rgba(0,0,0,.6)">
          <span style="font-weight:700; font-size:12px">@jc_moral.producer</span>
          <span style="font-size:11px; color: rgba(235,233,227,.8)">Legenda do vídeo #JCMORAL #beats</span>
          <span class="mono" style="font-size:10px; color: rgba(235,233,227,.6)">Som original — JC_MORAL</span>
        </div>
      </div>
    </div>
  </main>

  <!-- ======================================================================
       PLAYER BAR
       ====================================================================== -->
  <footer id="radio-player-bar" class="player">
    <div class="transport">
      <button id="radio-btn-prev" class="btn btn-ghost btn-icon" title="Anterior">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h2v14H6zM20 5v14L9 12z"/></svg>
      </button>
      <button id="radio-btn-play" class="play-btn" title="Tocar / pausar">
        <span id="radio-play-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4v16l13-8z"/></svg></span>
        <span id="radio-play-label" class="sr-only">Tocar</span>
      </button>
      <button id="radio-btn-next" class="btn btn-ghost btn-icon" title="Próxima">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 5h2v14h-2zM4 5v14l11-7z"/></svg>
      </button>
    </div>

    <div class="now">
      <div id="radio-track-title" class="now-title">Inverno // Lofi Chill</div>
      <div class="now-meta">
        <span id="radio-track-artist" class="shrink-0">JC_MORAL · 82 BPM</span>
        <span id="radio-track-tags" class="now-tags"></span>
      </div>
    </div>

    <div class="scrub">
      <span id="radio-time-current" class="time">0:00</span>
      <div id="radio-progress-bar-bg" class="progress">
        <div id="radio-progress-bar-fill" class="progress-fill"></div>
      </div>
      <span id="radio-time-total" class="time">--:--</span>
    </div>

    <div class="player-actions">
      <button id="radio-mode-toggle" class="admin-only btn" title="Preset fixo por faixa ou visual aleatório">
        <span id="radio-mode-label">Preset da faixa</span>
      </button>
      <button id="radio-btn-like" class="btn" title="Curtir este beat">
        <span id="radio-like-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.2 0 3.6 1.2 5.2 3 1.6-1.8 3-3 5.2-3 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21z"/></svg></span>
        <span id="radio-like-count" class="mono" style="font-size:11px">38</span>
      </button>
      <button id="btn-toggle-playlist-bottom" class="btn" title="Lista de beats">
        Lista <span id="radio-playlist-badge" class="count">4</span>
      </button>
    </div>
  </footer>

  <!-- ======================================================================
       PLAYLIST DRAWER (left)
       ====================================================================== -->
  <aside id="playlist-drawer" class="drawer drawer-left transition-transform duration-300 ease-out -translate-x-full">
    <div class="drawer-head">
      <div>
        <span class="label">Catálogo</span>
        <h2 class="heading" style="margin-top:8px">Beats</h2>
        <p id="playlist-subtitle">Cada beat tem seu próprio visual.</p>
      </div>
      <button id="btn-close-playlist" class="btn btn-ghost btn-icon" title="Fechar (Esc)">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
    </div>

    <div class="visitor-only section" style="padding:10px 18px; border-bottom:1px solid var(--line); font-size:11px; color:var(--muted); display:flex; justify-content:space-between; align-items:center;">
      <span>Modo ouvinte</span>
      <button type="button" class="link btn-open-dev-from-playlist" style="color:var(--accent)">Entrar como Produtor</button>
    </div>

    <div class="admin-only hidden section" style="padding-top:14px; padding-bottom:14px">
      <div class="flex gap-1.5">
        <button id="btn-save-current-preset" class="btn flex-1 justify-center" title="Gravar o visual atual da tela no beat que está tocando">
          Gravar visual no beat atual
        </button>
        <label class="btn flex-1 justify-center">
          Adicionar beats
          <input id="playlist-file-input" type="file" accept="audio/*" multiple class="hidden" />
        </label>
      </div>
      <div class="flex items-center justify-between" style="margin-top:8px">
        <span style="font-size:11px; color:var(--dim)">Clique em Editar ou Remover para gerenciar faixas.</span>
        <button id="btn-restore-default-beats" type="button" class="link hidden" style="font-size:11px; color:var(--accent)" title="Restaurar faixas originais">Restaurar originais</button>
      </div>
    </div>

    <div id="playlist-tag-filter" class="tag-filter hidden"></div>

    <div id="playlist-items-container" class="drawer-body">
      <!-- Rendered by RadioPlaylistManager -->
    </div>
  </aside>
  <div id="playlist-backdrop" class="backdrop transition-opacity duration-300 opacity-0 pointer-events-none"></div>

  <!-- ======================================================================
       STUDIO DRAWER (right, producer only)
       ====================================================================== -->
  <aside id="custom-sidebar" class="drawer drawer-right transition-transform duration-300 ease-out translate-x-full">
    <div class="drawer-head">
      <div>
        <span class="label">Produtor</span>
        <h2 class="heading" style="margin-top:8px">Estúdio</h2>
      </div>
      <button id="btn-close-sidebar" class="btn btn-ghost btn-icon" title="Fechar (Esc)">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
    </div>

    <div class="drawer-body">
      <div class="section">
        <div class="section-head"><span class="label">01 — Cenário</span></div>
        <div class="opt-list">
          <button data-scenery-btn="classic" class="opt">Clássico <small>onda + montanha</small></button>
          <button data-scenery-btn="street" class="opt active-pill">Street <small>skatepark</small></button>
          <button data-scenery-btn="cybercode" class="opt">Fluxo cripto <small>base64</small></button>
          <button data-scenery-btn="valley3d" class="opt">Vale 3D <small>planeta orbital</small></button>
          <button data-scenery-btn="horizon2d" class="opt">Cordilheira <small>2D</small></button>
          <button data-scenery-btn="cybergrid" class="opt">Horizonte cyber <small>monólitos EQ</small></button>
          <button data-scenery-btn="warp3d" class="opt">Túnel warp <small>3D</small></button>
        </div>
      </div>

      <div class="section">
        <div class="section-head"><span class="label">02 — Robô</span></div>
        <div class="opt-grid">
          <button data-palette-btn="hybrid" class="opt active-pill">Híbrido LDR</button>
          <button data-palette-btn="cytro" class="opt">Mecha green</button>
          <button data-palette-btn="xbot" class="opt">XBOT 4000</button>
          <button data-palette-btn="kvrc" class="opt">K-VRC</button>
          <button data-palette-btn="scratch" class="opt" style="grid-column: span 2">Scratch P&amp;B</button>
        </div>
        <span class="label" style="margin-top:6px">Acessório</span>
        <div class="opt-grid">
          <button data-accessory-btn="none" class="opt">Nenhum</button>
          <button data-accessory-btn="cap" class="opt active-pill">Boné</button>
          <button data-accessory-btn="cowboy" class="opt">Cowboy</button>
          <button data-accessory-btn="predator" class="opt">Predador</button>
        </div>
      </div>

      <div class="section">
        <div class="section-head"><span class="label">03 — Camadas</span></div>
        <div class="opt-list">
          <button data-sketch-btn="devil" class="opt active-pill">Rabiscos de capeta <small>caótico</small></button>
          <button data-sketch-btn="earcups" class="opt">Ondas nos fones <small>original</small></button>
          <button data-sketch-btn="waves" class="opt">Ondas no corpo <small>suave</small></button>
        </div>
        <div class="opt-grid">
          <button id="btn-toggle-sketch" class="opt active-pill" title="Ligar/desligar camada 2D">Camada 2D</button>
          <button id="btn-toggle-ascii" class="opt active-pill" title="Ligar/desligar fundo ASCII">Fundo ASCII</button>
        </div>
      </div>

      <div class="section">
        <div class="section-head"><span class="label">04 — Áudio</span></div>
        <button id="btn-system-audio-sidebar" class="btn btn-block btn-system-audio-trigger">
          <span class="system-audio-btn-label">Capturar áudio</span>
          <span class="count">LIVE</span>
        </button>
        <p>Escolha a aba do Spotify/YouTube (ou a tela) e marque <strong>Compartilhar áudio</strong>.</p>

        <div class="flex items-center justify-between" style="margin-top:4px">
          <label for="reactivity-slider" style="font-size:12px">Intensidade da reação</label>
          <span id="reactivity-val" class="count" style="color: var(--text)">75%</span>
        </div>
        <input id="reactivity-slider" type="range" min="0.2" max="1.4" step="0.05" value="0.75" class="cursor-pointer" />

        <div class="opt-grid" style="margin-top:4px">
          <button id="btn-play-inverno" class="opt">inverno.mp3</button>
          <button id="btn-Switch-track" class="opt">Synth lo-fi</button>
          <label class="opt">
            Abrir arquivo
            <input id="audio-file-input" type="file" accept="audio/*" class="hidden" />
          </label>
          <button id="btn-mic" class="opt">Microfone</button>
        </div>
      </div>

      <div class="section">
        <div class="section-head"><span class="label">05 — Marca d'Água (ElevenLabs Tag)</span></div>
        <div class="flex items-center justify-between">
          <span style="font-size:12px">Tag JC_MORAL periódica</span>
          <button id="btn-toggle-watermark" class="btn" title="Ativar/desativar marca d'água de voz">
            <span id="watermark-status-label">Desativada</span>
          </button>
        </div>
        <p>Voz gerada via ElevenLabs dizendo <em>"JC Moral. Moral Beats."</em> com efeito sonoro aplicado.</p>

        <span class="label" style="margin-top:4px">Intervalo</span>
        <div class="opt-grid">
          <button data-watermark-interval="15" class="opt">A cada 15s</button>
          <button data-watermark-interval="30" class="opt active-pill">A cada 30s</button>
          <button data-watermark-interval="45" class="opt">A cada 45s</button>
          <button data-watermark-interval="60" class="opt">A cada 60s</button>
        </div>

        <span class="label" style="margin-top:4px">Efeito sonoro</span>
        <div class="opt-grid">
          <button data-watermark-effect="distorted" class="opt active-pill">Distorcido <small>cyber</small></button>
          <button data-watermark-effect="robot" class="opt">Robô <small>resonador</small></button>
          <button data-watermark-effect="radio" class="opt">Rádio <small>lo-fi</small></button>
          <button data-watermark-effect="clean" class="opt">Limpo <small>natural</small></button>
        </div>

        <button id="btn-test-watermark" class="btn btn-block justify-center" style="margin-top:4px">
          <span>🔊 Ouvir tag agora (Testar)</span>
        </button>
      </div>

      <div class="section" style="border-bottom:0">
        <div class="section-head"><span class="label">06 — Janela flutuante</span></div>
        <button id="btn-pip-sidebar" class="btn btn-block btn-pip-trigger">
          <span class="pip-btn-label">PiP</span>
          <span class="count">macOS</span>
        </button>
        <p>Mantém uma mini janela por cima de qualquer app enquanto você trabalha.</p>
      </div>
    </div>
  </aside>
  <div id="sidebar-backdrop" class="backdrop transition-opacity duration-300 opacity-0 pointer-events-none"></div>

  <!-- ======================================================================
       BIO DRAWER (right)
       ====================================================================== -->
  <aside id="bio-drawer" class="drawer drawer-right transition-transform duration-300 ease-out translate-x-full">
    <div class="drawer-head">
      <div>
        <span class="label">Produtor &amp; artista audiovisual</span>
        <h2 class="heading" style="margin-top:8px">JC_MORAL</h2>
      </div>
      <button id="btn-close-bio" class="btn btn-ghost btn-icon" title="Fechar (Esc)">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
    </div>

    <div class="drawer-body">
      <div class="section">
        <span class="label">Densidade moral</span>
        <p>Inspirado na crueza e na ficção científica distópica de <em>Love, Death + Robots</em>. A identidade sonora de <strong>JC_MORAL</strong> busca o peso da consciência em sub-graves densos, timbres analógicos cortantes e baterias orgânicas.</p>
      </div>

      <div class="section">
        <span class="label">Feito à mão</span>
        <p>Cada melodia, acorde, 808, sintetizador e percussão é composto e mixado à mão, nota por nota. Nenhuma IA generativa entra no processo.</p>
      </div>

      <div class="section">
        <span class="label">Arsenal</span>
        <ul class="bio-list">
          <li><span>Estilos</span><span>Lo-fi, cyber drill, boombap</span></li>
          <li><span>Visual</span><span>WebGL 3D + shaders ASCII</span></li>
        </ul>
      </div>

      <div class="section">
        <span class="label">Serviços</span>
        <ul class="bio-list">
          <li><span>Beats exclusivos / leases</span><span></span></li>
          <li><span>Sound design &amp; trilha para games</span><span></span></li>
          <li><span>Mix &amp; master analógica / híbrida</span><span></span></li>
        </ul>
      </div>

      <div class="section" style="border-bottom:0">
        <span class="label">Contato</span>
        <div>
          <a href="mailto:contato@jcmoral.com" class="bio-link"><span>contato@jcmoral.com</span><span>email</span></a>
          <a href="#" class="bio-link"><span>Spotify</span><span>&#8599;</span></a>
          <a href="#" class="bio-link"><span>SoundCloud</span><span>&#8599;</span></a>
          <a href="#" class="bio-link"><span>Instagram</span><span>&#8599;</span></a>
        </div>
      </div>
    </div>
  </aside>
  <div id="bio-backdrop" class="backdrop transition-opacity duration-300 opacity-0 pointer-events-none"></div>

  <!-- ======================================================================
       PRODUCER ACCESS MODAL
       ====================================================================== -->
  <div id="dev-gateway-modal" class="modal transition-opacity duration-200 opacity-0 pointer-events-none">
    <div class="modal-card">
      <div class="drawer-head">
        <div>
          <span class="label">Área restrita</span>
          <h2 class="heading" style="margin-top:8px">Acesso do produtor</h2>
        </div>
        <button id="btn-close-dev-modal" class="btn btn-ghost btn-icon" title="Cancelar (Esc)">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>

      <form id="dev-login-form" onsubmit="return false;">
        <label for="dev-passcode-input" class="label">Chave mestra</label>
        <div class="relative">
          <input id="dev-passcode-input" type="password" placeholder="Digite a chave" autocomplete="current-password" class="field mono" style="padding-right:72px" />
          <button id="btn-toggle-passcode-visibility" type="button" class="link absolute right-3 top-1/2 -translate-y-1/2" style="font-size:11px" title="Mostrar/ocultar">mostrar</button>
        </div>

        <div id="dev-login-error" class="form-error hidden">
          <span id="dev-login-error-text">Chave incorreta.</span>
        </div>

        <p class="hint">Acesso exclusivo do produtor · Atalho: Ctrl+Shift+D</p>

        <div class="flex justify-end gap-1.5" style="margin-top:6px">
          <button id="btn-cancel-dev-login" type="button" class="btn btn-ghost">Cancelar</button>
          <button id="btn-submit-dev-login" type="submit" class="btn btn-accent">Entrar</button>
        </div>
      </form>
    </div>
  </div>

  <script>
${bundleJs}
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), standaloneHtml, 'utf8');
console.log('Built standalone index.html');
