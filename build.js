const fs = require('fs');
const path = require('path');

const bundleJs = fs.readFileSync(path.join(__dirname, 'dist/bundle.js'), 'utf8');

const standaloneHtml = `<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>LOVE, DEATH + ROBOTS // 2D+3D Audio-Reactive Robot Art</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root {
      --background: #090b10;
      --card: #0e1117;
      --foreground: #f3f5f8;
      --muted-foreground: #8b95a5;
      --border: #222733;
    }
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background-color: #07080c;
      color: #f3f5f8;
      overflow: hidden;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    .stage-bg {
      background: radial-gradient(circle at 50% 42%, #181c24 0%, #0d0f14 58%, #07080b 100%);
    }
    .active-pill {
      background-color: rgba(255, 107, 43, 0.22) !important;
      border-color: rgba(255, 107, 43, 0.85) !important;
      color: #ff9d6e !important;
      box-shadow: 0 0 12px rgba(255, 107, 43, 0.16);
    }
    .playing-active {
      background: linear-gradient(135deg, rgba(255, 107, 43, 0.32), rgba(56, 216, 255, 0.2)) !important;
      border-color: rgba(255, 107, 43, 0.9) !important;
    }
    .crt-vignette {
      background: radial-gradient(circle at 50% 50%, transparent 58%, rgba(4, 5, 8, 0.72) 100%);
    }
    input[type="range"] {
      accent-color: #ff6b2b;
    }
    /* Custom thin scrollbar for sidebar */
    .sidebar-scroll::-webkit-scrollbar {
      width: 5px;
    }
    .sidebar-scroll::-webkit-scrollbar-track {
      background: transparent;
    }
    .sidebar-scroll::-webkit-scrollbar-thumb {
      background: rgba(139, 149, 165, 0.25);
      border-radius: 9999px;
    }
    .floating-heart {
      pointer-events: none;
      will-change: transform, opacity;
      z-index: 50;
    }
    #canvas-stage.tiktok-vertical-mode {
      max-width: min(100%, calc((100vh - 175px) * 9 / 16)) !important;
      aspect-ratio: 9 / 16 !important;
      margin: 0 auto !important;
      border-radius: 20px;
      box-shadow: 0 0 40px rgba(244, 63, 94, 0.35), 0 0 0 2px rgba(244, 63, 94, 0.5);
    }
  </style>
</head>
<body class="w-screen h-screen flex flex-col bg-[#07080c] text-zinc-100 antialiased select-none p-3 box-border">
  <div class="relative w-full h-full bg-[#0e1117] border border-zinc-800/90 rounded-2xl p-4 shadow-2xl flex flex-col gap-3 overflow-hidden">
    
    <!-- TOP BAR (Clean Header + Quick Play + Hamburger Menu Button) -->
    <div class="flex flex-wrap items-center justify-between gap-3 shrink-0 z-20">
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-700/80 text-orange-500 font-mono text-sm tracking-wider">
          <span class="ldr-glyph-icon inline-block transition-transform duration-75 cursor-pointer" title="Love">♥</span>
          <span class="ldr-glyph-icon inline-block text-zinc-200 transition-transform duration-75 cursor-pointer" title="Death">✕</span>
          <span class="ldr-glyph-icon inline-block text-cyan-400 transition-transform duration-75 cursor-pointer" title="Robots">■</span>
        </div>
        <div>
          <h1 class="text-zinc-100 font-bold text-base leading-tight tracking-tight flex items-center gap-2">
            <span>JC_MORAL</span>
            <span class="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-orange-950/70 text-orange-300 border border-orange-500/40 tracking-wider">PRODUCER PORTFOLIO</span>
            <span class="hidden md:inline-flex items-center gap-1 text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 tracking-wider" title="Música 100% autoral criada à mão nota por nota, sem inteligência artificial">
              <span>🎹</span> 100% AUTORAL • FEITO À MÃO (SEM IA)
            </span>
          </h1>
          <p class="text-zinc-400 text-xs leading-tight">
            Beats autorais criados à mão, nota por nota (sem IA) • Densidade Moral & Reatividade 3D
          </p>
        </div>
      </div>

      <!-- Header Controls: Clean Visitor Portfolio vs Full Producer Suite -->
      <div class="flex items-center gap-2">
        <!-- 1. BEATS / PLAYLIST (Always visible in portfolio) -->
        <button id="btn-toggle-playlist" class="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-orange-500/60 bg-zinc-900/95 text-orange-300 text-xs font-semibold tracking-wide transition cursor-pointer hover:border-orange-400 hover:bg-orange-950/50 hover:text-white" title="Ouvir e curtir beats do portfólio">
          <span>📻</span>
          <span>Beats</span>
          <span id="top-playlist-badge" class="px-1.5 py-0.2 rounded-full bg-orange-500 text-black text-[10px] font-mono font-bold">4</span>
        </button>

        <!-- 2. BIO & CONTATO (Portfolio information) -->
        <button id="btn-toggle-bio" class="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-900/95 text-zinc-200 hover:border-zinc-500 hover:text-white text-xs font-medium tracking-wide transition cursor-pointer" title="Sobre JC_MORAL, conceito e contato">
          <span>👤</span>
          <span class="hidden sm:inline">Bio & Contato</span>
        </button>

        <!-- 3. PRODUCER ACCESS: DISCREET LOCK IN VISITOR MODE -->
        <button id="btn-dev-login-trigger" class="visitor-only flex items-center gap-1 px-2.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 text-xs font-mono transition cursor-pointer" title="Área Restrita (JC_MORAL) - Acesso via Chave Mestra">
          <span>🔒</span>
        </button>

        <!-- 4. LOGGED IN BADGE (Admin only) -->
        <div id="dev-logged-badge" class="admin-only hidden flex items-center gap-1.5 pl-2.5 pr-1.5 py-1.5 rounded-lg border border-amber-500/70 bg-amber-950/40 text-amber-300 text-xs font-mono shadow-md shadow-amber-950/30">
          <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span class="font-bold">JC_MORAL</span>
          <span class="text-[9px] px-1 py-0.2 rounded bg-amber-900/80 border border-amber-600/60 text-amber-200 font-bold">DEV</span>
          <button id="btn-dev-logout" class="ml-1 px-1.5 py-0.5 rounded bg-zinc-900/80 hover:bg-red-950/80 text-zinc-400 hover:text-red-300 border border-zinc-700/60 hover:border-red-700/60 text-[10px] transition cursor-pointer" title="Encerrar Sessão Dev">Sair</button>
        </div>

        <!-- 5. TIKTOK STUDIO & CLIP RECORDER BUTTON (Admin only) -->
        <button id="btn-tiktok-mode" class="admin-only hidden flex items-center gap-1.5 px-3 py-2 rounded-lg border border-pink-500/50 bg-zinc-900/95 text-pink-300 text-xs font-semibold tracking-wide transition cursor-pointer hover:border-pink-400 hover:bg-pink-950/50 hover:text-white" title="Gravar vídeos e clipes no formato Vertical 9:16 para TikTok">
          <span>📱</span>
          <span id="tiktok-mode-label">TikTok 9:16</span>
        </button>

        <!-- 6. CAPTURAR SPOTIFY / FONES (Admin only) -->
        <button id="btn-system-audio-top" class="admin-only hidden btn-system-audio-trigger flex items-center gap-1.5 px-3 py-2 rounded-lg border border-emerald-500/60 bg-emerald-950/40 text-emerald-300 text-xs font-semibold tracking-wide transition cursor-pointer hover:border-emerald-400 hover:bg-emerald-900/60 hover:text-white" title="Capturar áudio do Spotify / YouTube / Fones via aba ou sistema">
          <span>🎧</span>
          <span class="system-audio-btn-label hidden md:inline">Capturar Fones / Spotify</span>
        </button>

        <!-- 7. PICTURE-IN-PICTURE (Admin only) -->
        <button id="btn-pip-top" class="admin-only hidden btn-pip-trigger flex items-center gap-1.5 px-3 py-2 rounded-lg border border-cyan-500/50 bg-zinc-900/95 text-cyan-200 text-xs font-semibold tracking-wide transition cursor-pointer hover:border-cyan-400 hover:text-white" title="Modo Mini: Fixa janela flutuante no macOS">
          <span>📌</span>
          <span class="pip-btn-label">Mini PiP</span>
        </button>

        <!-- 8. ESTÚDIO / CENÁRIOS / SKINS (Admin only) -->
        <button id="btn-toggle-sidebar" class="admin-only hidden flex items-center gap-2 px-3.5 py-2 rounded-lg border border-zinc-700 bg-zinc-900/95 text-zinc-100 text-xs font-semibold tracking-wide transition cursor-pointer hover:border-orange-500/70 hover:text-orange-300" title="Abrir menu de personalização avançada e cenários (Produtor)">
          <svg class="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span>Estúdio</span>
        </button>
      </div>
    </div>

    <!-- STAGE WRAPPER (Centers 9:16 vertical mode or fills widescreen) -->
    <div id="stage-wrapper" class="relative w-full flex-1 min-h-[340px] flex items-center justify-center overflow-hidden">
      <!-- MAIN 2D + 3D STAGE -->
      <div id="canvas-stage" class="relative w-full h-full rounded-xl overflow-hidden stage-bg border border-zinc-800/90 transition-all duration-300 ease-out">
        <canvas id="ascii-bg-canvas" class="absolute inset-0 w-full h-full pointer-events-none"></canvas>
        <canvas id="webgl-canvas" class="absolute inset-0 w-full h-full"></canvas>
        <canvas id="sketch-fg-canvas" class="absolute inset-0 w-full h-full pointer-events-none"></canvas>
        <div class="absolute inset-0 crt-vignette pointer-events-none"></div>

        <!-- Top-Left Telemetry HUD Overlay -->
        <div class="absolute top-3.5 left-4 pointer-events-none flex flex-col gap-1 font-mono text-xs text-zinc-400/85 z-10">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-cyan-400/90"></span>
            <span id="track-name-display" class="text-zinc-200 font-semibold">JC_MORAL // INVERNO.MP3</span>
          </div>
          <span id="track-preset-badge" class="text-zinc-500">PRESET: 🛹 STREET // HÍBRIDO // ⚡ CAPETA</span>
        </div>

        <!-- TIKTOK 9:16 GUIDES OVERLAY (Hidden by default, shown in TikTok mode) -->
        <div id="tiktok-guide-overlay" class="absolute inset-0 pointer-events-none z-20 hidden flex flex-col justify-between p-4 text-white font-sans select-none">
          <div class="flex items-center justify-between pointer-events-auto">
            <div class="flex items-center gap-3 text-xs font-bold drop-shadow">
              <span class="opacity-60 text-[11px]">LIVE</span>
              <span class="opacity-70">Seguindo</span>
              <span class="border-b-2 border-white pb-0.5 font-extrabold">Para Você</span>
            </div>
            <div class="flex items-center gap-2">
              <button id="btn-record-tiktok" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs shadow-lg shadow-pink-900/60 transition cursor-pointer active:scale-95" title="Gravar vídeo vertical 9:16 com áudio e baixar automaticamente para o TikTok">
                <span id="tiktok-rec-dot" class="w-2.5 h-2.5 rounded-full bg-white"></span>
                <span id="tiktok-rec-label">Gravar Drop (15s)</span>
              </button>
              <button id="btn-record-tiktok-30" class="px-2 py-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-white text-[11px] font-mono border border-zinc-700 transition cursor-pointer" title="Gravar 30 segundos">
                30s
              </button>
              <button id="btn-toggle-tiktok-guides" class="px-2 py-1.5 rounded-md bg-black/70 backdrop-blur text-[10px] font-mono border border-white/20 text-white/90 hover:bg-black/90 cursor-pointer" title="Mostrar ou ocultar linhas e botões do TikTok">
                👁️ Guias
              </button>
            </div>
          </div>

          <!-- Safe Zone Box -->
          <div id="tiktok-safe-box" class="absolute inset-x-5 top-14 bottom-24 border border-dashed border-pink-400/40 rounded-2xl pointer-events-none flex items-start justify-center pt-2">
            <span class="text-[9px] font-mono uppercase tracking-widest text-pink-300/60 bg-black/50 px-2 py-0.5 rounded-full border border-pink-500/20">
              Área Segura do TikTok
            </span>
          </div>

          <!-- Right Action Icons Mockup -->
          <div id="tiktok-side-icons" class="absolute right-2.5 bottom-20 flex flex-col items-center gap-3.5 text-xs font-bold drop-shadow">
            <div class="relative w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-cyan-400 p-0.5 flex items-center justify-center">
              <span class="text-xs">🤖</span>
              <span class="absolute -bottom-1 w-3.5 h-3.5 rounded-full bg-red-500 text-white text-[9px] flex items-center justify-center font-bold">+</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-lg">♥</span>
              <span class="text-[9px] font-semibold">124k</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-lg">💬</span>
              <span class="text-[9px] font-semibold">2.4k</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-lg">★</span>
              <span class="text-[9px] font-semibold">18k</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-lg">➥</span>
              <span class="text-[9px] font-semibold">Share</span>
            </div>
            <div class="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-600 flex items-center justify-center animate-spin">
              <span class="text-[10px]">💿</span>
            </div>
          </div>

          <!-- Bottom Captions Mockup -->
          <div id="tiktok-bottom-caption" class="flex flex-col gap-1 max-w-[72%] drop-shadow text-left">
            <span class="text-xs font-bold text-white flex items-center gap-1">@jc_moral.producer <span class="text-[10px] text-cyan-400">✓</span></span>
            <p class="text-[10px] text-zinc-100 line-clamp-2 leading-tight">
              Momento mais quente do beat no skatepark! 🔥🛹 #JCMORAL #Beats #LoveDeathRobots #Drill
            </p>
            <div class="flex items-center gap-1.5 text-[9px] text-zinc-300 font-mono">
              <span>🎵</span>
              <span class="truncate">Som original - JC_MORAL</span>
            </div>
          </div>
        </div>

      <!-- SLIDE-OVER SIDEBAR DRAWER (All Customization Options Inside) -->
      <aside id="custom-sidebar" class="absolute top-0 right-0 bottom-0 w-80 sm:w-88 max-w-[90vw] bg-[#0b0e14]/95 backdrop-blur-md border-l border-zinc-800/95 shadow-2xl z-30 flex flex-col transition-transform duration-300 ease-out translate-x-full">
        
        <!-- Sidebar Header -->
        <div class="flex items-center justify-between px-4 py-3.5 border-b border-zinc-800/90 shrink-0">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-orange-500"></span>
            <h2 class="text-xs font-mono uppercase tracking-wider text-zinc-100 font-semibold">
              Personalização & Cenário
            </h2>
          </div>
          <button id="btn-close-sidebar" class="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 transition cursor-pointer" title="Fechar menu (Esc)">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Sidebar Scrollable Content -->
        <div class="flex-1 overflow-y-auto sidebar-scroll p-4 flex flex-col gap-5">
          
          <!-- SECTION 1: CENÁRIO / ANIMAÇÃO DE FUNDO ASCII -->
          <div class="flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                1. Cenário / Animação ASCII
              </span>
              <span class="text-[10px] font-mono text-orange-400/90">2D / 3D</span>
            </div>
            <div class="grid grid-cols-1 gap-1.5">
              <button data-scenery-btn="classic" class="flex items-center justify-between px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                <span>🏔️ Clássico (Onda Diagonal & Montanha)</span>
                <span class="text-[10px] font-mono opacity-75">Original</span>
              </button>
              <button data-scenery-btn="street" class="active-pill flex items-center justify-between px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                <span>🛹 Street (Paredes Pichadas & Skatepark)</span>
                <span class="text-[10px] font-mono text-pink-400">Novo</span>
              </button>
              <button data-scenery-btn="cybercode" class="flex items-center justify-between px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                <span>💻 Fluxo Cripto Cyber (Base64)</span>
                <span class="text-[10px] font-mono text-cyan-400">Novo</span>
              </button>
              <button data-scenery-btn="valley3d" class="flex items-center justify-between px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                <span>🪐 Vale 3D & Planeta Orbital</span>
                <span class="text-[10px] font-mono opacity-75">3D Completo</span>
              </button>
              <button data-scenery-btn="horizon2d" class="flex items-center justify-between px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                <span>⛰️ Cordilheira 2D (Horizonte)</span>
                <span class="text-[10px] font-mono opacity-75">2D Base</span>
              </button>
              <button data-scenery-btn="cybergrid" class="flex items-center justify-between px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                <span>🌐 Horizonte Cyber 3D</span>
                <span class="text-[10px] font-mono opacity-75">Monólitos EQ</span>
              </button>
              <button data-scenery-btn="warp3d" class="flex items-center justify-between px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                <span>✨ Túnel Warp 3D</span>
                <span class="text-[10px] font-mono opacity-75">Voo Espacial</span>
              </button>
            </div>
          </div>

          <!-- SECTION 2: ACESSÓRIOS DE CABEÇA (3D) -->
          <div class="flex flex-col gap-2 pt-3 border-t border-zinc-800/80">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                2. Acessórios de Cabeça
              </span>
              <span class="text-[10px] font-mono text-cyan-400/90">Malha 3D</span>
            </div>
            <div class="grid grid-cols-2 gap-1.5">
              <button data-accessory-btn="none" class="px-2.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                🚫 Nenhum
              </button>
              <button data-accessory-btn="cap" class="active-pill px-2.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                🧢 Boné Cyber
              </button>
              <button data-accessory-btn="cowboy" class="px-2.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                🤠 Cowboy
              </button>
              <button data-accessory-btn="predator" class="px-2.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                👾 Predador
              </button>
            </div>
          </div>

          <!-- SECTION 3: PALETA / ESTILO DO ROBÔ -->
          <div class="flex flex-col gap-2 pt-3 border-t border-zinc-800/80">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                3. Paleta / Estilo do Robô
              </span>
              <span class="text-[10px] font-mono text-zinc-500">PBR + Luzes</span>
            </div>
            <div class="grid grid-cols-2 gap-1.5">
              <button data-palette-btn="hybrid" class="active-pill px-2.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                Híbrido LDR
              </button>
              <button data-palette-btn="cytro" class="px-2.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                Mecha Green
              </button>
              <button data-palette-btn="xbot" class="px-2.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                XBOT 4000
              </button>
              <button data-palette-btn="kvrc" class="px-2.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                K-VRC
              </button>
              <button data-palette-btn="scratch" class="col-span-2 px-2.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                Scratch P&B (Traço Brutalista)
              </button>
            </div>
          </div>

          <!-- SECTION 4: ANIMAÇÃO 2D SKETCH & CAMADAS -->
          <div class="flex flex-col gap-2 pt-3 border-t border-zinc-800/80">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                4. Animação 2D / Rabiscos
              </span>
              <span class="text-[10px] font-mono text-orange-400/90">Sketch FX</span>
            </div>
            <div class="grid grid-cols-1 gap-1.5">
              <button data-sketch-btn="devil" class="active-pill flex items-center justify-between px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                <span>⚡ Rabiscos de Capeta (Corpo Inteiro)</span>
                <span class="text-[10px] font-mono opacity-75">Caótico</span>
              </button>
              <button data-sketch-btn="earcups" class="flex items-center justify-between px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                <span>🎧 Ondas Clássicas (Só nos Fones)</span>
                <span class="text-[10px] font-mono opacity-75">Original</span>
              </button>
              <button data-sketch-btn="waves" class="flex items-center justify-between px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-left">
                <span>🌊 Ondas de Áudio (Fluido no Corpo)</span>
                <span class="text-[10px] font-mono opacity-75">Suave</span>
              </button>
            </div>
            <div class="grid grid-cols-2 gap-1.5 mt-1">
              <button id="btn-toggle-sketch" class="active-pill px-2.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-center" title="Ligar/Desligar camada 2D Sketch">
                ⚡ Camada 2D ON
              </button>
              <button id="btn-toggle-ascii" class="active-pill px-2.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-center" title="Ligar/Desligar fundo ASCII">
                ⛰️ Fundo ASCII ON
              </button>
            </div>
          </div>

          <!-- SECTION 5: FONTE DE ÁUDIO & REATIVIDADE -->
          <div class="flex flex-col gap-2.5 pt-3 border-t border-zinc-800/80">
            <span class="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              5. Áudio & Reatividade Musical
            </span>

            <!-- Botão Capturar Spotify / Fones -->
            <button id="btn-system-audio-sidebar" class="btn-system-audio-trigger w-full flex items-center justify-between px-3 py-2.5 rounded-lg border border-emerald-500/70 bg-emerald-950/40 text-emerald-300 text-xs font-semibold transition cursor-pointer hover:border-emerald-400 hover:bg-emerald-900/50 shadow-lg">
              <span class="flex items-center gap-2">
                <span class="text-base">🎧</span>
                <span class="system-audio-btn-label">Capturar Spotify / Fones</span>
              </span>
              <span class="text-[10px] font-mono text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-900/60 border border-emerald-700/60">LIVE</span>
            </button>
            <p class="text-[10px] text-zinc-400 leading-relaxed -mt-1">
              Sincronize com o <strong class="text-zinc-200">Spotify</strong>, YouTube ou seus fones. Ao clicar, escolha a aba do Spotify/YouTube (ou tela) e marque <strong class="text-emerald-400">"Compartilhar áudio"</strong>.
            </p>

            <div class="flex flex-col gap-1.5 bg-zinc-900/70 p-2.5 rounded-lg border border-zinc-800/80">
              <div class="flex items-center justify-between text-xs">
                <label for="reactivity-slider" class="text-zinc-300 font-medium">
                  Intensidade da Reação
                </label>
                <span id="reactivity-val" class="font-mono text-orange-400 text-[11px]">75%</span>
              </div>
              <input id="reactivity-slider" type="range" min="0.2" max="1.4" step="0.05" value="0.75" class="w-full cursor-pointer" />
            </div>

            <div class="grid grid-cols-2 gap-1.5">
              <button id="btn-play-inverno" class="px-2.5 py-2 rounded-lg border border-cyan-500/40 bg-zinc-900/90 text-cyan-300 text-xs font-medium transition cursor-pointer hover:border-cyan-400 text-center">
                ↺ inverno.mp3
              </button>
              <button id="btn-Switch-track" class="px-2.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-center">
                🎹 Synth Lo-Fi ↻
              </button>
              <label class="px-2.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-center">
                📂 Abrir MP3
                <input id="audio-file-input" type="file" accept="audio/*" class="hidden" />
              </label>
              <button id="btn-mic" class="px-2.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 text-xs font-medium transition cursor-pointer hover:border-zinc-600 text-center">
                🎙️ Usar Mic
              </button>
            </div>
          </div>

          <!-- SECTION 6: MODO MINI FLUTUANTE (SOBREPOR OUTROS APPS) -->
          <div class="flex flex-col gap-2 pt-3 border-t border-zinc-800/80">
            <span class="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              6. Janela Flutuante (Mini)
            </span>
            <button id="btn-pip-sidebar" class="btn-pip-trigger flex items-center justify-between px-3 py-2.5 rounded-lg border border-cyan-500/60 bg-cyan-950/30 text-cyan-200 text-xs font-medium transition cursor-pointer hover:border-cyan-400 hover:bg-cyan-950/50">
              <span class="flex items-center gap-2">
                <span>📌</span>
                <span class="pip-btn-label">Sobrepor aos Outros Apps (PiP)</span>
              </span>
              <span class="text-[10px] font-mono text-cyan-400">Ativar</span>
            </button>
            <p class="text-[11px] text-zinc-400 leading-relaxed">
              Fixa uma mini janela no macOS que fica por cima de qualquer aplicativo (VS Code, Finder, Spotify, etc.) enquanto você trabalha.
            </p>
          </div>
        </div>
      </aside>
    </div>
  </div>

  <!-- BOTTOM RADIO & BEAT PLAYER BAR -->
  <div id="radio-player-bar" class="w-full shrink-0 flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-[#0b0e14]/95 backdrop-blur-md border border-zinc-800/90 shadow-xl z-20">
    <!-- Controls + Track info -->
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-1">
        <button id="radio-btn-prev" class="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition cursor-pointer" title="Faixa Anterior">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
        </button>
        <button id="radio-btn-play" class="px-3.5 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs transition cursor-pointer flex items-center gap-1.5 shadow-md shadow-orange-600/30">
          <span id="radio-play-icon" class="text-xs">▶</span>
          <span id="radio-play-label">TOCAR</span>
        </button>
        <button id="radio-btn-next" class="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition cursor-pointer" title="Próxima Faixa">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
        </button>
      </div>

      <!-- Active Track Metadata -->
      <div class="flex flex-col min-w-[130px] max-w-[240px]">
        <div class="flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
          <span id="radio-track-title" class="text-xs font-semibold text-zinc-100 truncate">Inverno // Lofi Chill</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span id="radio-track-artist" class="text-[10px] font-mono text-zinc-400 truncate">JC_MORAL // 82 BPM</span>
          <span class="hidden sm:inline-flex items-center gap-1 text-[9px] font-mono font-semibold px-1.5 py-0.2 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/50" title="Beats autorais feitos à mão, sem inteligência artificial">
            <span>🎹</span> SEM IA
          </span>
        </div>
      </div>
    </div>

    <!-- Scrubber / Progress Bar -->
    <div class="hidden md:flex items-center gap-2 flex-1 max-w-sm mx-2">
      <span id="radio-time-current" class="text-[10px] font-mono text-zinc-400">0:00</span>
      <div id="radio-progress-bar-bg" class="flex-1 h-1.5 bg-zinc-800/90 rounded-full overflow-hidden cursor-pointer hover:h-2 transition-all">
        <div id="radio-progress-bar-fill" class="h-full bg-orange-500 rounded-full w-0 transition-[width] duration-150"></div>
      </div>
      <span id="radio-time-total" class="text-[10px] font-mono text-zinc-400">--:--</span>
    </div>

    <!-- Radio Actions: Preset/Auto Toggle + Like Button + Playlist Trigger -->
    <div class="flex items-center gap-2">
      <!-- Mode Toggle Button (Admin only) -->
      <button id="radio-mode-toggle" class="admin-only flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-700/80 bg-zinc-900 text-xs text-zinc-200 hover:border-orange-500/70 transition cursor-pointer" title="Alternar entre Presets Fixos por Música ou Modo Automático (Random DJ)">
        <span id="radio-mode-icon">🎛️</span>
        <span id="radio-mode-label" class="text-[11px] font-mono font-medium">Preset da Faixa</span>
      </button>

      <!-- Like Button with Counter & Hearts Effect -->
      <button id="radio-btn-like" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-pink-500/60 bg-pink-950/40 text-pink-300 hover:bg-pink-900/60 hover:border-pink-400 text-xs font-semibold transition cursor-pointer active:scale-95 shadow-md shadow-pink-950/30" title="Curtir este beat (adiciona curtida e solta corações!)">
        <span id="radio-like-icon" class="text-base text-pink-400">♥</span>
        <span id="radio-like-count" class="font-mono text-[11px]">38</span>
        <span class="text-[10px] text-pink-400/80">Curtir</span>
      </button>

      <!-- Playlist Trigger Button -->
      <button id="btn-toggle-playlist-bottom" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-orange-500/60 bg-orange-950/40 text-orange-300 hover:bg-orange-900/60 hover:border-orange-400 text-xs font-semibold transition cursor-pointer" title="Ver Lista de Beats e Configurar Presets">
        <span>📻</span>
        <span>Playlist</span>
        <span id="radio-playlist-badge" class="px-1.5 py-0.2 rounded-full bg-orange-500 text-black text-[10px] font-mono font-bold">4</span>
      </button>
    </div>
  </div>

  <!-- SLIDE-OVER PLAYLIST DRAWER (Left Side) -->
  <aside id="playlist-drawer" class="absolute top-0 left-0 bottom-0 w-84 sm:w-96 max-w-[92vw] bg-[#0b0e14]/98 backdrop-blur-lg border-r border-zinc-800/95 shadow-2xl z-40 flex flex-col transition-transform duration-300 ease-out -translate-x-full">
    <!-- Header -->
    <div class="flex items-center justify-between px-4 py-3.5 border-b border-zinc-800/90 shrink-0">
      <div class="flex items-center gap-2">
        <span class="text-lg">📻</span>
        <div>
          <h2 class="text-xs font-mono uppercase tracking-wider text-zinc-100 font-semibold">
            Rádio & Beats Playlist
          </h2>
          <p id="playlist-subtitle" class="text-[10px] text-zinc-400">Cada música com seu próprio Preset Visual</p>
        </div>
      </div>
      <button id="btn-close-playlist" class="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition cursor-pointer" title="Fechar Playlist (Esc)">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Admin Quick Actions Bar in Drawer -->
    <div class="admin-only p-3 border-b border-zinc-800/80 bg-zinc-900/60 flex flex-col gap-2 shrink-0">
      <div class="flex items-center justify-between gap-2">
        <!-- Save current visual to current track -->
        <button id="btn-save-current-preset" class="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-cyan-500/50 bg-cyan-950/40 text-cyan-200 text-xs font-medium hover:border-cyan-400 hover:bg-cyan-900/50 transition cursor-pointer" title="Salvar o cenário e visual atual da tela como preset deste beat">
          <span>💾</span>
          <span>Salvar Preset no Beat</span>
        </button>

        <!-- Attach Audio Files Button -->
        <label class="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-emerald-500/50 bg-emerald-950/40 text-emerald-200 text-xs font-medium hover:border-emerald-400 hover:bg-emerald-900/50 transition cursor-pointer text-center">
          <span>➕</span>
          <span>Upar Beats</span>
          <input id="playlist-file-input" type="file" accept="audio/*" multiple class="hidden" />
        </label>
      </div>
      <p class="text-[10px] text-zinc-400 leading-tight">
        💡 Arraste e solte arquivos de áudio (.mp3, .wav) direto na tela para adicioná-los!
      </p>
    </div>

    <!-- Visitor Notice in Drawer -->
    <div class="visitor-only p-3 border-b border-zinc-800/80 bg-zinc-900/40 flex flex-col gap-1.5 shrink-0">
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
          <span>Playlist Oficial de Beats</span>
        </span>
        <span class="text-[9px] font-mono text-purple-300 bg-purple-950/90 px-2 py-0.5 rounded border border-purple-700/60 font-semibold">MODO OUVINTE</span>
      </div>
      <p class="text-[11px] text-zinc-400 leading-relaxed">
        Clique em qualquer beat para ouvir e curtir com o coração <strong>♥</strong>. O cenário, as cores e o robô mudam automaticamente para cada beat!
      </p>
    </div>

    <!-- Scrollable Track List -->
    <div id="playlist-items-container" class="flex-1 overflow-y-auto sidebar-scroll p-3 flex flex-col gap-2">
      <!-- Rendered dynamically by RadioPlaylistManager -->
    </div>
  </aside>

  <!-- Sidebars Backdrops -->
  <div id="playlist-backdrop" class="absolute inset-0 bg-black/60 backdrop-blur-xs z-30 transition-opacity duration-300 opacity-0 pointer-events-none"></div>
  <div id="sidebar-backdrop" class="absolute inset-0 bg-black/60 backdrop-blur-xs z-25 transition-opacity duration-300 opacity-0 pointer-events-none"></div>

  <!-- ==========================================================================
       SUPER RESTRICTED DEV ACCESS GATEWAY MODAL (JC_MORAL)
       ========================================================================== -->
  <div id="dev-gateway-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all duration-200 opacity-0 pointer-events-none">
    <div class="relative w-full max-w-md rounded-2xl border border-red-500/50 bg-[#090b10] p-6 shadow-2xl shadow-red-950/60 flex flex-col gap-4 font-mono select-none overflow-hidden">
      <!-- CRT scanline effect on modal -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/[0.04] to-transparent pointer-events-none"></div>

      <!-- Modal Header -->
      <div class="flex items-start justify-between border-b border-zinc-800 pb-3">
        <div class="flex flex-col gap-0.5">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            <span class="text-xs text-red-400 font-bold tracking-widest uppercase">ANTIGRAVITY // DEV ACCESS</span>
          </div>
          <span class="text-[11px] text-zinc-400">PRODUCER ID: <strong class="text-zinc-100 font-semibold tracking-wider">JC_MORAL</strong></span>
        </div>
        <button id="btn-close-dev-modal" class="p-1 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition cursor-pointer" title="Cancelar [Esc]">
          ✕
        </button>
      </div>

      <!-- Security Status Banner -->
      <div id="dev-modal-status" class="p-2.5 rounded-lg border border-red-500/30 bg-red-950/20 text-red-300 text-xs flex items-center gap-2.5">
        <span class="text-lg">🛡️</span>
        <div class="flex flex-col">
          <span class="font-bold text-[11px]">NÍVEL DE ACESSO: SUPER RESTRITO</span>
          <span class="text-[10px] text-red-300/80">Insira a chave mestra para liberar o painel do produtor</span>
        </div>
      </div>

      <!-- Credential Form -->
      <form id="dev-login-form" class="flex flex-col gap-3" onsubmit="return false;">
        <div class="flex flex-col gap-1.5">
          <label for="dev-passcode-input" class="text-[10px] text-zinc-400 uppercase tracking-wider">
            Chave Mestra / Master Passcode
          </label>
          <div class="relative">
            <input
              id="dev-passcode-input"
              type="password"
              placeholder="Digite a chave mestra..."
              autocomplete="current-password"
              class="w-full px-3.5 py-2.5 rounded-lg border border-zinc-700 bg-zinc-900/90 text-zinc-100 text-sm font-mono tracking-wider focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 placeholder:text-zinc-600"
            />
            <button
              id="btn-toggle-passcode-visibility"
              type="button"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200 text-xs cursor-pointer"
              title="Mostrar/Ocultar"
            >👁️</button>
          </div>
        </div>

        <!-- Lockout / Error Message Area -->
        <div id="dev-login-error" class="text-[11px] text-red-400 font-semibold hidden flex items-center gap-1.5 p-2 rounded bg-red-950/40 border border-red-900/60">
          <span>⚠️</span>
          <span id="dev-login-error-text">Chave incorreta. Tentativas restantes: 3</span>
        </div>

        <!-- Helper hint -->
        <div class="text-[10px] text-zinc-400/80 leading-relaxed border-t border-zinc-800/80 pt-2 flex items-center justify-between">
          <span>Chave Mestra: <code class="text-orange-400 px-1 py-0.5 rounded bg-zinc-800/80 font-bold">JC-MORAL-DEV-7790-2026</code></span>
          <span class="text-[9px] text-zinc-500">Atalho: <strong>Ctrl+Shift+D</strong></span>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center justify-end gap-2 pt-2">
          <button
            id="btn-cancel-dev-login"
            type="button"
            class="px-3 py-2 rounded-lg border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 text-xs font-medium transition cursor-pointer"
          >
            Cancelar
          </button>
          <button
            id="btn-submit-dev-login"
            type="submit"
            class="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-red-900/40 transition cursor-pointer flex items-center gap-1.5 active:scale-95"
          >
            <span>🔓</span>
            <span>AUTENTICAR</span>
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- ==========================================================================
       SLIDE-OVER BIO & PORTFOLIO DRAWER (Right Side)
       ========================================================================== -->
  <aside id="bio-drawer" class="fixed top-0 right-0 bottom-0 w-84 sm:w-96 max-w-[92vw] bg-[#0b0e14]/98 backdrop-blur-lg border-l border-zinc-800/95 shadow-2xl z-40 flex flex-col transition-transform duration-300 ease-out translate-x-full">
    <!-- Header -->
    <div class="flex items-center justify-between px-5 py-4 border-b border-zinc-800/90 shrink-0">
      <div class="flex items-center gap-2.5">
        <span class="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></span>
        <div>
          <h2 class="text-sm font-bold text-zinc-100 uppercase tracking-wider">
            JC_MORAL
          </h2>
          <p class="text-[10px] font-mono text-zinc-400">Produtor & Artista Audiovisual</p>
        </div>
      </div>
      <button id="btn-close-bio" class="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition cursor-pointer" title="Fechar (Esc)">✕</button>
    </div>

    <!-- Content -->
    <div class="flex-1 overflow-y-auto sidebar-scroll p-5 flex flex-col gap-5 text-xs text-zinc-300">
      <!-- Conceito: Densidade Moral -->
      <div class="flex flex-col gap-2 p-3.5 rounded-xl border border-orange-500/30 bg-orange-950/20">
        <span class="text-[11px] font-mono text-orange-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
          <span>⚡</span> Conceito: Densidade Moral
        </span>
        <p class="text-[11px] text-zinc-300 leading-relaxed">
          Inspirado na crueza e ficção científica distópica de <em>Love, Death + Robots</em>. A identidade sonora de <strong>JC_MORAL</strong> busca o peso da consciência em frequências sub-graves densas, timbres analógicos cortantes e baterias orgânicas.
        </p>
      </div>

      <!-- Manifesto: Beats 100% Feitos à Mão (Zero IA) -->
      <div class="flex flex-col gap-2 p-3.5 rounded-xl border border-emerald-500/40 bg-emerald-950/20 shadow-md shadow-emerald-950/30">
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <span>🎹</span> Beats 100% Autorais (Sem IA)
          </span>
          <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-900/80 text-emerald-200 border border-emerald-600/60 font-bold">HUMAN MADE</span>
        </div>
        <p class="text-[11px] text-zinc-300 leading-relaxed">
          Cada melodia, acorde, progressão harmônica, 808, sintetizador e percussão é criado e mixado à mão nota por nota pelo produtor <strong>JC_MORAL</strong>. Zero inteligência artificial, zero geração procedural genérica. Uma declaração em favor da visceralidade artística e musicalidade humana.
        </p>
      </div>

      <!-- Ficha & Arsenal -->
      <div class="flex flex-col gap-2">
        <span class="text-[11px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
          🛠️ Arsenal & Síntese
        </span>
        <div class="grid grid-cols-2 gap-2 text-[10px] font-mono">
          <div class="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
            <span class="text-zinc-400 block">Estilos:</span>
            <span class="text-zinc-200 font-bold">Lo-Fi • Cyber Drill • Boombap</span>
          </div>
          <div class="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
            <span class="text-zinc-400 block">Visual:</span>
            <span class="text-zinc-200 font-bold">3D WebGL + Shaders ASCII</span>
          </div>
        </div>
      </div>

      <!-- Serviços & Parcerias -->
      <div class="flex flex-col gap-2">
        <span class="text-[11px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
          💼 Serviços & Colaborações
        </span>
        <ul class="flex flex-col gap-1.5 text-[11px] text-zinc-300">
          <li class="flex items-center gap-2"><span>▪</span> Produção de Beats Exclusivos / Leases</li>
          <li class="flex items-center gap-2"><span>▪</span> Sound Design & Trilha Sonora para Games</li>
          <li class="flex items-center gap-2"><span>▪</span> Mix & Master Analógica / Híbrida</li>
        </ul>
      </div>

      <!-- Contato / Redes -->
      <div class="flex flex-col gap-2.5 pt-3 border-t border-zinc-800">
        <span class="text-[11px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
          📬 Contato & Redes
        </span>
        <div class="flex flex-col gap-2">
          <a href="mailto:contato@jcmoral.com" class="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-orange-500/60 text-zinc-200 transition">
            <span>Email para Beats</span>
            <span class="text-[10px] font-mono text-orange-400">Enviar ↗</span>
          </a>
          <div class="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
            <span class="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">Spotify</span>
            <span class="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">SoundCloud</span>
            <span class="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">Instagram</span>
          </div>
        </div>
      </div>
    </div>
  </aside>
  <div id="bio-backdrop" class="fixed inset-0 bg-black/60 backdrop-blur-xs z-30 transition-opacity duration-300 opacity-0 pointer-events-none"></div>

  <script>
${bundleJs}
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), standaloneHtml, 'utf8');
console.log('Updated standalone index.html with Hamburger Sidebar and Scenery Selector.');
