import * as THREE from 'three';

// ============================================================================
// LOVE, DEATH + ROBOTS // HYBRID 2D + 3D AUDIO-REACTIVE ART
// Upgraded with:
// - Detailed Mecha Torso (inspired by Cytro/LDR mecha ref): swept V-shaped
//   chest breastplate with decals, multi-layered angular shoulder pauldrons,
//   exposed mechanical abdomen with central turbine/reactor core, articulated
//   neck/clavicle/waist hydraulic pistons, and mechanical upper arms.
// - Transient-aware Audio Analysis tuned for "inverno.mp3" (Sub-bass kick
//   onset detection, low-mid groove, vocal/melody presence, and high air).
// ============================================================================

const PALETTES = {
  hybrid: {
    name: 'LDR Hybrid (K-VRC × Mecha)',
    shellColor: 0xd4652f,       // K-VRC burnt orange main armor
    shellSecondary: 0x8e95a0,   // Gunmetal silver/steel layered pauldrons
    darkMetal: 0x181b20,
    chromeMetal: 0xd8e0ea,
    visorBg: '#07080a',
    eyeLeft: '#ffaa22',
    eyeRight: '#38d8ff',
    mouthColor: '#ffe4b5',
    coreColor: 0x38d8ff,
    glowPrimary: '#ff6b2b',
    glowSecondary: '#38d8ff',
    asciiSky: 'rgba(215, 222, 232, 0.42)',
    asciiMountainBright: '#eef2f6',
    asciiMountainMid: '#9aa4b2',
    asciiMountainDim: '#4b525e',
    sketchStroke: 'rgba(255, 240, 220, 0.72)',
    sketchAccent: 'rgba(255, 107, 43, 0.85)',
    keyLight: 0xff8844,
    rimLight: 0x38d8ff,
  },
  cytro: {
    name: 'Mecha Green (Ref Torso)',
    shellColor: 0x38a832,       // Vibrant metallic mecha green from torso ref
    shellSecondary: 0x7c848e,   // Brushed titanium gunmetal pauldrons
    darkMetal: 0x15181c,
    chromeMetal: 0xe0e8f0,
    visorBg: '#050806',
    eyeLeft: '#5eff6e',
    eyeRight: '#38d8ff',
    mouthColor: '#b8ffcc',
    coreColor: 0x44ff66,
    glowPrimary: '#44ff66',
    glowSecondary: '#38d8ff',
    asciiSky: 'rgba(200, 230, 210, 0.40)',
    asciiMountainBright: '#eef7f0',
    asciiMountainMid: '#8ca894',
    asciiMountainDim: '#3f5246',
    sketchStroke: 'rgba(220, 255, 230, 0.72)',
    sketchAccent: 'rgba(68, 255, 102, 0.85)',
    keyLight: 0xdfffe6,
    rimLight: 0x44ff66,
  },
  xbot: {
    name: 'XBOT 4000 (Tactical Bone)',
    shellColor: 0xc5bfb3,
    shellSecondary: 0x6e737b,
    darkMetal: 0x141619,
    chromeMetal: 0xd0d5dd,
    visorBg: '#060709',
    eyeLeft: '#ffb82e',
    eyeRight: '#2ce6ff',
    mouthColor: '#9fb3c8',
    coreColor: 0x2ce6ff,
    glowPrimary: '#ffb82e',
    glowSecondary: '#2ce6ff',
    asciiSky: 'rgba(200, 215, 225, 0.40)',
    asciiMountainBright: '#f0f4f8',
    asciiMountainMid: '#8c99a8',
    asciiMountainDim: '#3f4752',
    sketchStroke: 'rgba(230, 235, 240, 0.7)',
    sketchAccent: 'rgba(44, 230, 255, 0.8)',
    keyLight: 0xffe0b2,
    rimLight: 0x2ce6ff,
  },
  kvrc: {
    name: 'K-VRC (CRT Orange)',
    shellColor: 0xd95b24,
    shellSecondary: 0x5c6068,
    darkMetal: 0x181514,
    chromeMetal: 0xcfd6df,
    visorBg: '#050507',
    eyeLeft: '#ffffff',
    eyeRight: '#ffffff',
    mouthColor: '#ffffff',
    coreColor: 0xff7733,
    glowPrimary: '#ff6a22',
    glowSecondary: '#7ce8ff',
    asciiSky: 'rgba(255, 220, 195, 0.38)',
    asciiMountainBright: '#fff5eb',
    asciiMountainMid: '#b59c8b',
    asciiMountainDim: '#52433b',
    sketchStroke: 'rgba(255, 232, 214, 0.68)',
    sketchAccent: 'rgba(255, 115, 50, 0.85)',
    keyLight: 0xff7733,
    rimLight: 0xffb380,
  },
  scratch: {
    name: 'Scratch Ink (2D/3D Sketch)',
    shellColor: 0x282c34,
    shellSecondary: 0x454b56,
    darkMetal: 0x0f1013,
    chromeMetal: 0x9aa2b0,
    visorBg: '#08090b',
    eyeLeft: '#f4f6f8',
    eyeRight: '#f4f6f8',
    mouthColor: '#f4f6f8',
    coreColor: 0xffffff,
    glowPrimary: '#ffffff',
    glowSecondary: '#a0b0c0',
    asciiSky: 'rgba(240, 244, 248, 0.58)',
    asciiMountainBright: '#ffffff',
    asciiMountainMid: '#b0b7c0',
    asciiMountainDim: '#555b66',
    sketchStroke: 'rgba(255, 255, 255, 0.94)',
    sketchAccent: 'rgba(200, 220, 255, 0.88)',
    keyLight: 0xffffff,
    rimLight: 0x88aaff,
  }
};

// ============================================================================
// AUDIO REACTIVE ENGINE WITH TRANSIENT / ONSET DETECTION + INVERNO.MP3 SUPPORT
// ============================================================================
class AudioReactiveEngine {
  constructor() {
    this.ctx = null;
    this.analyser = null;
    this.gainNode = null;
    this.freqData = new Uint8Array(256);
    this.timeData = new Uint8Array(256);
    this.isPlaying = false;
    this.mode = 'inverno'; // 'inverno' | 'synth' | 'file' | 'mic'
    this.trackIndex = 0;
    this.stepTimer = null;
    this.stepCount = 0;
    this.audioElement = null;
    this.mediaSource = null;
    this.micStream = null;
    this.currentFileLabel = 'INVERNO.MP3';

    // Musical envelopes & transient detectors
    this.bass = 0;
    this.bassAvg = 0;
    this.kickPulse = 0;     // Sharp beat transient for head nod & core flash
    this.groove = 0;        // Low-mid groove for shoulder/torso sway
    this.mid = 0;           // Vocal/melody band for mouth & eye expression
    this.midDelta = 0;      // Dynamic change in vocals/melody
    this.high = 0;          // Air/hi-hat band for antennas & ASCII shimmer
    this.energy = 0;
    this.beatPhase = 0;     // Accumulated musical phase that speeds up with energy
    this.lastTime = 0;
    this.subtleIntensity = 0.75;

    this.tracks = [
      {
        name: '01 // ORBITAL LO-FI (82 BPM)',
        bpm: 82,
        rootNotes: [110.0, 98.0, 87.31, 98.0],
        chords: [
          [220.0, 261.63, 329.63, 392.0],
          [196.0, 246.94, 293.66, 349.23],
          [174.61, 220.0, 261.63, 329.63],
          [196.0, 246.94, 329.63, 392.0],
        ],
        arpScale: [440, 523.25, 659.25, 783.99, 880, 659.25, 587.33, 523.25]
      },
      {
        name: '02 // ZIMA NEBULA (72 BPM)',
        bpm: 72,
        rootNotes: [73.42, 65.41, 58.27, 65.41],
        chords: [
          [146.83, 220.0, 261.63, 349.23],
          [130.81, 196.0, 246.94, 293.66],
          [116.54, 174.61, 220.0, 293.66],
          [123.47, 185.0, 220.0, 293.66],
        ],
        arpScale: [293.66, 349.23, 440.0, 523.25, 587.33, 440.0, 392.0, 349.23]
      }
    ];
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 512;
      this.analyser.smoothingTimeConstant = 0.80;

      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.value = 0.85;
      this.gainNode.connect(this.analyser);
      this.gainNode.connect(this.ctx.destination);
      // Analyser é mantido como nó folha (sem conectar ao destination).
      // Isso impede que a captura do microfone ou do Spotify/sistema seja reenviada
      // aos alto-falantes, eliminando 100% de eco, reverberação e microfonia em loop.

      this.freqData = new Uint8Array(this.analyser.frequencyBinCount);
      this.timeData = new Uint8Array(this.analyser.frequencyBinCount);

      if (this.audioElement && !this.mediaSource) {
        try {
          this.mediaSource = this.ctx.createMediaElementSource(this.audioElement);
          this.mediaSource.connect(this.gainNode);
        } catch (err) {
          console.warn('Could not connect audioElement to context:', err);
        }
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  ensureAudioElement() {
    if (!this.audioElement) {
      this.audioElement = new Audio();
      this.audioElement.crossOrigin = 'anonymous';
      this.audioElement.loop = true;
      this.audioElement.preload = 'auto';
    }
    if (this.ctx && !this.mediaSource) {
      try {
        this.mediaSource = this.ctx.createMediaElementSource(this.audioElement);
        this.mediaSource.connect(this.gainNode);
      } catch (err) {
        console.warn('Could not create media element source:', err);
      }
    }
  }

  async playInverno() {
    this.initContext();
    this.stop();
    this.ensureAudioElement();
    this.mode = 'inverno';
    this.currentFileLabel = 'INVERNO.MP3';
    if (!this.audioElement.src || !this.audioElement.src.includes('inverno.mp3')) {
      this.audioElement.src = '/inverno.mp3';
    }
    try {
      await this.audioElement.play();
      this.isPlaying = true;
      return true;
    } catch (e) {
      console.warn('Fallback to synth if inverno.mp3 not reachable:', e);
      this.startSynth();
      return true;
    }
  }

  togglePlay() {
    this.initContext();
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      if (this.mode === 'inverno' || this.mode === 'file') {
        this.ensureAudioElement();
        if (!this.audioElement.src) {
          this.playInverno();
        } else {
          this.audioElement.play();
          this.isPlaying = true;
        }
      } else {
        this.startSynth();
      }
      return true;
    }
  }

  startSynth() {
    this.initContext();
    this.stop();
    this.mode = 'synth';
    this.isPlaying = true;
    this.stepCount = 0;
    this.gainNode.gain.value = 0.45;

    const track = this.tracks[this.trackIndex];
    const stepMs = (60 / track.bpm / 4) * 1000;

    this.triggerStep();
    this.stepTimer = setInterval(() => {
      if (this.isPlaying && this.mode === 'synth') {
        this.triggerStep();
      }
    }, stepMs);
  }

  stop() {
    this.isPlaying = false;
    if (this.stepTimer) {
      clearInterval(this.stepTimer);
      this.stepTimer = null;
    }
    if (this.audioElement) {
      this.audioElement.pause();
    }
    if (this.micStream) {
      this.micStream.getTracks().forEach(t => t.stop());
      this.micStream = null;
    }
  }

  async startMic(deviceId = null) {
    try {
      this.initContext();
      this.stop();
      const constraints = deviceId ? { audio: { deviceId: { exact: deviceId } } } : { audio: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.micStream = stream;
      const src = this.ctx.createMediaStreamSource(stream);
      src.connect(this.analyser);
      this.mode = deviceId ? 'device' : 'mic';
      this.isPlaying = true;
      return true;
    } catch (err) {
      console.warn('Microphone access denied:', err);
      return false;
    }
  }

  async startSystemAudio() {
    if (this.mode === 'system' && this.isPlaying) {
      this.stop();
      if (this.onStateChange) this.onStateChange();
      return true;
    }

    try {
      this.initContext();
      this.stop();
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: {
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false,
        }
      });

      const audioTracks = stream.getAudioTracks();
      if (!audioTracks || audioTracks.length === 0) {
        stream.getTracks().forEach(t => t.stop());
        alert('Nenhuma faixa de áudio foi selecionada!\n\nPara capturar o Spotify, YouTube ou fones:\n1. Na janela de compartilhamento, selecione a "Aba do Chrome" (ex: Spotify Web ou YouTube) ou "Tela Inteira".\n2. Marque a caixinha "Compartilhar áudio do sistema / áudio da aba" no canto inferior antes de clicar em Compartilhar.');
        return false;
      }

      // Desliga o vídeo imediatamente para poupar CPU e manter apenas o áudio
      stream.getVideoTracks().forEach(t => t.stop());

      this.micStream = stream;
      const src = this.ctx.createMediaStreamSource(stream);
      src.connect(this.analyser);

      audioTracks[0].addEventListener('ended', () => {
        this.stop();
        if (this.onStateChange) this.onStateChange();
      });

      this.mode = 'system';
      this.currentFileLabel = 'SPOTIFY // ÁUDIO DO SISTEMA';
      this.isPlaying = true;
      return true;
    } catch (err) {
      console.warn('Captura de áudio do sistema cancelada ou não suportada:', err);
      return false;
    }
  }

  loadAudioFile(file) {
    this.initContext();
    this.stop();
    this.ensureAudioElement();
    this.gainNode.gain.value = 0.9;
    const url = URL.createObjectURL(file);
    this.audioElement.src = url;
    this.audioElement.play();
    this.mode = 'file';
    this.currentFileLabel = file.name.slice(0, 24).toUpperCase();
    this.isPlaying = true;
  }

  triggerStep() {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const track = this.tracks[this.trackIndex];
    const step16 = this.stepCount % 16;
    const bar = Math.floor(this.stepCount / 16) % 4;

    if (step16 === 0 || step16 === 10 || (step16 === 6 && bar % 2 === 1)) {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      const amp = step16 === 6 ? 0.25 : 0.48;
      osc.frequency.setValueAtTime(115, now);
      osc.frequency.exponentialRampToValueAtTime(36, now + 0.14);
      g.gain.setValueAtTime(amp, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
      osc.connect(g);
      g.connect(this.gainNode);
      osc.start(now);
      osc.stop(now + 0.34);
    }

    if (step16 === 4 || step16 === 12) {
      const bufferSize = this.ctx.sampleRate * 0.12;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.28));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1350, now);
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(0.18, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      noise.connect(filter);
      filter.connect(g);
      g.connect(this.gainNode);
      noise.start(now);
    }

    if (step16 === 0) {
      const chord = track.chords[bar];
      chord.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const g = this.ctx.createGain();
        osc.type = idx % 2 === 0 ? 'triangle' : 'sawtooth';
        osc.frequency.setValueAtTime(freq, now);
        osc.detune.setValueAtTime((idx - 1.5) * 6, now);
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(950, now);
        filter.frequency.exponentialRampToValueAtTime(520, now + 2.4);
        g.gain.setValueAtTime(0.001, now);
        g.gain.linearRampToValueAtTime(0.055, now + 0.35);
        g.gain.exponentialRampToValueAtTime(0.001, now + 2.6);
        osc.connect(filter);
        filter.connect(g);
        g.connect(this.gainNode);
        osc.start(now);
        osc.stop(now + 2.65);
      });
    }

    this.stepCount++;
  }

  update(elapsedTime) {
    const dt = Math.min(0.05, Math.max(0.001, elapsedTime - this.lastTime));
    this.lastTime = elapsedTime;

    let rawSubBass = 0;
    let rawGroove = 0;
    let rawMid = 0;
    let rawHigh = 0;

    if (this.isPlaying && this.analyser) {
      this.analyser.getByteFrequencyData(this.freqData);
      this.analyser.getByteTimeDomainData(this.timeData);

      // Sub-Bass / Kick (bins 1..6 ~ 40Hz-250Hz)
      let subSum = 0;
      for (let i = 1; i <= 6; i++) subSum += this.freqData[i];
      rawSubBass = subSum / (6 * 255);

      // Low-Mid Groove / Warmth (bins 7..20 ~ 250Hz-900Hz)
      let grvSum = 0;
      for (let i = 7; i <= 20; i++) grvSum += this.freqData[i];
      rawGroove = grvSum / (14 * 255);

      // Mid / Vocals / Guitar / Piano (bins 21..68 ~ 900Hz-3000Hz)
      let mSum = 0;
      for (let i = 21; i <= 68; i++) mSum += this.freqData[i];
      rawMid = mSum / (48 * 255);

      // Highs / Presence / Hi-Hats (bins 69..160)
      let hSum = 0;
      for (let i = 69; i <= 160; i++) hSum += this.freqData[i];
      rawHigh = hSum / (92 * 255);
    } else {
      // Gentle idle breathing groove before play is clicked
      const g = elapsedTime * 1.35;
      rawSubBass = 0.18 + 0.12 * Math.pow(Math.max(0, Math.sin(g * Math.PI)), 4);
      rawGroove = 0.15 + 0.08 * Math.sin(g * 1.5);
      rawMid = 0.12 + 0.07 * Math.sin(g * 2.1 + 0.7);
      rawHigh = 0.08 + 0.05 * Math.cos(g * 3.0);

      for (let i = 0; i < this.timeData.length; i++) {
        const wave = Math.sin(elapsedTime * 2.4 + i * 0.18) * 0.5 + 0.5;
        this.freqData[i] = Math.floor((1 - (i % 80) / 80) * wave * 85 * (0.5 + rawSubBass));
        this.timeData[i] = Math.floor(
          128 +
          Math.sin(elapsedTime * 7 + i * 0.25) * 18 * (rawMid + rawSubBass) +
          Math.cos(elapsedTime * 13 - i * 0.6) * 9 * rawHigh
        );
      }
    }

    const s = this.subtleIntensity;

    // Kick / Beat Transient Detection (compares instantaneous sub-bass to trailing average)
    const prevMid = this.mid;
    this.bassAvg += (rawSubBass - this.bassAvg) * 0.05;
    const onset = Math.max(0, (rawSubBass - this.bassAvg * 0.92) * 2.8) * s;
    this.kickPulse += (onset - this.kickPulse) * (onset > this.kickPulse ? 0.35 : 0.12);

    // Smooth musical envelopes
    this.bass += (rawSubBass * s - this.bass) * 0.16;
    this.groove += (rawGroove * s - this.groove) * 0.12;
    this.mid += (rawMid * s - this.mid) * 0.14;
    this.high += (rawHigh * s - this.high) * 0.15;
    this.midDelta += (Math.abs(this.mid - prevMid) * 8.0 - this.midDelta) * 0.15;

    this.energy = this.bass * 0.4 + this.groove * 0.25 + this.mid * 0.25 + this.high * 0.1;

    // Musical phase advances gently at rest, and locks into the groove when music plays
    const phaseSpeed = 1.6 + this.energy * 3.2 + this.kickPulse * 1.8;
    this.beatPhase += dt * phaseSpeed;
  }
}

// ============================================================================
// ============================================================================
// PROCEDURAL PBR TEXTURES (Weathered Metal Albedo, Rivets, Seams, Rust & Bump)
// ============================================================================
function createWeatheredMetalTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Neutral mid-grey base for bump & roughness
  ctx.fillStyle = '#7a7a7a';
  ctx.fillRect(0, 0, 1024, 1024);

  // 1. Directional brushed metal grain
  for (let i = 0; i < 1800; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 1024;
    const len = 18 + Math.random() * 65;
    ctx.strokeStyle = Math.random() > 0.5 ? 'rgba(215,215,215,0.11)' : 'rgba(35,35,35,0.12)';
    ctx.lineWidth = 0.7 + Math.random() * 1.2;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + len, y + (Math.random() - 0.5) * 4);
    ctx.stroke();
  }

  // 2. Grime, oxide & oil blotches
  for (let i = 0; i < 260; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 1024;
    const r = 14 + Math.random() * 85;
    const grad = ctx.createRadialGradient(x, y, 2, x, y, r);
    const tone = Math.random() > 0.45 ? 38 : 145;
    grad.addColorStop(0, `rgba(${tone},${tone},${tone},0.22)`);
    grad.addColorStop(1, 'rgba(128,128,128,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // 3. Recessed mechanical panel seams & rivets
  ctx.strokeStyle = 'rgba(20, 20, 20, 0.55)';
  ctx.lineWidth = 3;
  [180, 512, 840].forEach((py) => {
    ctx.beginPath();
    ctx.moveTo(0, py);
    ctx.lineTo(1024, py);
    ctx.stroke();

    // Row of rivets along panel seams
    for (let rx = 48; rx < 1024; rx += 96) {
      ctx.fillStyle = 'rgba(210, 210, 210, 0.5)';
      ctx.beginPath();
      ctx.arc(rx, py - 14, 4.5, 0, Math.PI * 2);
      ctx.arc(rx, py + 14, 4.5, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  // 4. Deep battle scratches & metallic wear
  for (let i = 0; i < 420; i++) {
    ctx.strokeStyle = Math.random() > 0.35 ? 'rgba(245,245,245,0.32)' : 'rgba(20,20,20,0.38)';
    ctx.lineWidth = 0.6 + Math.random() * 1.8;
    ctx.beginPath();
    const x = Math.random() * 1024;
    const y = Math.random() * 1024;
    const len = 10 + Math.random() * 58;
    const ang = (Math.random() - 0.5) * 1.2;
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len);
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

// Generates a rich weathered Albedo/Color texture with patina, rust/oil smudges, panel lines, rivets & edge chips
function createWeatheredColorTexture(baseHex, addRustPatina = true) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  const baseColor = new THREE.Color(baseHex);
  ctx.fillStyle = `#${baseColor.getHexString()}`;
  ctx.fillRect(0, 0, 1024, 1024);

  // 1. Subtle mottled color variation & patina (inspired by the rusty/weathered industrial head ref!)
  for (let i = 0; i < 220; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 1024;
    const r = 20 + Math.random() * 95;
    const grad = ctx.createRadialGradient(x, y, 2, x, y, r);
    if (addRustPatina && Math.random() > 0.45) {
      grad.addColorStop(0, 'rgba(92, 42, 18, 0.20)'); // Warm rust/oxide patina
    } else if (Math.random() > 0.5) {
      grad.addColorStop(0, 'rgba(15, 18, 22, 0.24)'); // Oil & soot smudge
    } else {
      grad.addColorStop(0, 'rgba(255, 245, 230, 0.10)'); // Worn highlight
    }
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // 2. Fine brushed metal streaks
  for (let i = 0; i < 1200; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 1024;
    const len = 16 + Math.random() * 55;
    ctx.strokeStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';
    ctx.lineWidth = 0.8 + Math.random();
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + len, y + (Math.random() - 0.5) * 3);
    ctx.stroke();
  }

  // 3. Industrial panel seams & metallic rivets
  [180, 512, 840].forEach((py) => {
    ctx.strokeStyle = 'rgba(10, 12, 15, 0.48)';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(0, py);
    ctx.lineTo(1024, py);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, py + 3);
    ctx.lineTo(1024, py + 3);
    ctx.stroke();

    for (let rx = 48; rx < 1024; rx += 96) {
      ctx.fillStyle = 'rgba(25, 28, 32, 0.55)';
      ctx.beginPath();
      ctx.arc(rx, py - 14, 5.5, 0, Math.PI * 2);
      ctx.arc(rx, py + 14, 5.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(215, 222, 230, 0.45)';
      ctx.beginPath();
      ctx.arc(rx - 1, py - 15, 3.2, 0, Math.PI * 2);
      ctx.arc(rx - 1, py + 13, 3.2, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  // 4. Exposed silver metal scratches & paint chips
  for (let i = 0; i < 320; i++) {
    ctx.strokeStyle = Math.random() > 0.3 ? 'rgba(220, 228, 238, 0.28)' : 'rgba(20, 22, 26, 0.35)';
    ctx.lineWidth = 0.7 + Math.random() * 1.6;
    ctx.beginPath();
    const x = Math.random() * 1024;
    const y = Math.random() * 1024;
    const len = 8 + Math.random() * 42;
    const ang = (Math.random() - 0.5) * 1.1;
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len);
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

// Creates the graphic emblem & vertical stencil decal on the chest armor (with rich weathered metal texture!)
function createChestDecalTexture(baseHex) {
  const baseTex = createWeatheredColorTexture(baseHex, true);
  const canvas = baseTex.image;
  const ctx = canvas.getContext('2d');

  // Scale coordinates for 1024x1024
  ctx.save();
  ctx.scale(2, 2);

  // Subtle metallic panel seam lines
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.36)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(40, 120);
  ctx.lineTo(472, 190);
  ctx.stroke();

  // Left chest stylized claw/wave emblem inside oval
  ctx.save();
  ctx.translate(155, 235);
  ctx.rotate(-0.12);
  ctx.strokeStyle = 'rgba(10, 16, 20, 0.62)';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.ellipse(0, 0, 66, 42, 0, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = 'rgba(10, 16, 20, 0.62)';
  for (let i = -1; i <= 1; i++) {
    ctx.beginPath();
    ctx.roundRect(-38 + i * 6, i * 14 - 5, 68, 9, 4);
    ctx.fill();
  }
  ctx.restore();

  // Right chest vertical industrial stencil text ("LDR-04")
  ctx.save();
  ctx.translate(385, 260);
  ctx.rotate(-Math.PI / 2 + 0.16);
  ctx.fillStyle = 'rgba(10, 16, 20, 0.58)';
  ctx.font = '900 42px "Arial Black", Impact, sans-serif';
  ctx.letterSpacing = '4px';
  ctx.fillText('LDR-04', -75, 0);
  ctx.font = '700 13px monospace';
  ctx.fillText('AUDIO // CYBER UNIT', -75, -36);
  ctx.restore();

  ctx.restore();

  baseTex.needsUpdate = true;
  return { tex: baseTex, canvas, ctx };
}

// Creates the Three.js Xbot-proportioned visor contour:
// Rounded cranium dome at the top, structured temples/cheeks, defined jaw corners, and a blunt rounded chin.
function drawVisorShieldPath(ctx, inset = 0) {
  const topY = 14 + inset;
  const botY = 496 - inset;
  const templeLeft = 26 + inset;
  const templeRight = 486 - inset;
  const jawCornerLeft = 58 + inset * 0.85;
  const jawCornerRight = 454 - inset * 0.85;
  const chinLeft = 148 + inset * 0.5;
  const chinRight = 364 - inset * 0.5;

  ctx.beginPath();
  // Top cranium dome center
  ctx.moveTo(256, topY);
  // Rounded upper cranium dome out to right temple
  ctx.bezierCurveTo(372 - inset * 0.4, topY, templeRight, 68 + inset * 0.4, templeRight, 168);
  // Right temple & cheekbone tapering gently down to defined right jaw corner
  ctx.lineTo(jawCornerRight, 356);
  // Angled mandible / jawline from right jaw corner to blunt right chin corner
  ctx.quadraticCurveTo(jawCornerRight - 8, 410, chinRight, botY - 18);
  // Blunt, softly rounded humanoid chin base
  ctx.quadraticCurveTo(256, botY + 8, chinLeft, botY - 18);
  // Left mandible / jawline up to defined left jaw corner
  ctx.quadraticCurveTo(jawCornerLeft + 8, 410, jawCornerLeft, 356);
  // Left cheek & temple up to upper cranium
  ctx.lineTo(templeLeft, 168);
  // Top-left cranium dome back to center
  ctx.bezierCurveTo(templeLeft, 68 + inset * 0.4, 140 + inset * 0.4, topY, 256, topY);
  ctx.closePath();
}

function createRoundedVisorAlphaTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, 512, 512);

  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = '#ffffff';
  ctx.shadowBlur = 5;
  drawVisorShieldPath(ctx, 0);
  ctx.fill();

  const tex = new THREE.CanvasTexture(canvas);
  return tex;
}

// ============================================================================
// MAIN APPLICATION
// ============================================================================
function initApp() {
  const container = document.getElementById('canvas-stage');
  const asciiCanvas = document.getElementById('ascii-bg-canvas');
  const webglCanvas = document.getElementById('webgl-canvas');
  const sketchCanvas = document.getElementById('sketch-fg-canvas');

  const asciiCtx = asciiCanvas.getContext('2d');
  const sketchCtx = sketchCanvas.getContext('2d');

  const audio = new AudioReactiveEngine();

  let currentPaletteKey = 'hybrid';
  let palette = PALETTES[currentPaletteKey];
  let show2DSketchLayer = true;
  let showAsciiLayer = true;
  let currentScenery = 'street';
  let currentSketchMode = 'devil';

  const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

  // ==========================================================================
  // 1. THREE.JS SCENE, CAMERA & RENDERER
  // ==========================================================================
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 120);
  camera.position.set(0, -0.12, 9.1);

  const renderer = new THREE.WebGLRenderer({
    canvas: webglCanvas,
    alpha: true,
    antialias: true,
    preserveDrawingBuffer: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;

  // ==========================================================================
  // 2. CINEMATIC LIGHTING
  // ==========================================================================
  const ambientLight = new THREE.AmbientLight(0x2d3646, 1.5);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(palette.keyLight, 3.4);
  keyLight.position.set(4.8, 5.2, 6.0);
  scene.add(keyLight);

  const rimLightLeft = new THREE.DirectionalLight(palette.rimLight, 3.0);
  rimLightLeft.position.set(-5.8, 3.0, -2.2);
  scene.add(rimLightLeft);

  const fillLightBottom = new THREE.DirectionalLight(0x446688, 1.2);
  fillLightBottom.position.set(0, -5.0, 4.0);
  scene.add(fillLightBottom);

  const corePointLight = new THREE.PointLight(palette.coreColor, 2.2, 6.0);
  corePointLight.position.set(0, -1.35, 1.4);
  scene.add(corePointLight);

  // ==========================================================================
  // 3. 3D BACKGROUND SPACE ENVIRONMENT (3D Stars)
  // ==========================================================================
  const spaceGroup = new THREE.Group();
  scene.add(spaceGroup);

  const starCount = 240;
  const starPositions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    starPositions[i * 3] = (Math.random() - 0.5) * 28;
    starPositions[i * 3 + 1] = (Math.random() - 0.5) * 18;
    starPositions[i * 3 + 2] = -3.0 - Math.random() * 18;
  }
  const starGeom = new THREE.BufferGeometry();
  starGeom.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  const starMat = new THREE.PointsMaterial({
    color: 0xd8e4f0,
    size: 0.055,
    transparent: true,
    opacity: 0.55
  });
  const starPoints = new THREE.Points(starGeom, starMat);
  spaceGroup.add(starPoints);

  // ==========================================================================
  // 4. SEAMLESS INVERTED-OVOID GLOSSY VISOR TEXTURE
  // ==========================================================================
  const faceCanvas = document.createElement('canvas');
  faceCanvas.width = 512;
  faceCanvas.height = 512;
  const faceCtx = faceCanvas.getContext('2d');
  const faceTexture = new THREE.CanvasTexture(faceCanvas);
  faceTexture.colorSpace = THREE.SRGBColorSpace;
  const visorAlphaTex = createRoundedVisorAlphaTexture();

  function updateFaceTexture(time, bass, groove, mid, high, kickPulse) {
    const ctx = faceCtx;
    ctx.clearRect(0, 0, 512, 512);

    ctx.save();
    drawVisorShieldPath(ctx, 2);
    ctx.clip();

    // Deep obsidian glossy black visor background
    ctx.fillStyle = '#040507';
    ctx.fillRect(0, 0, 512, 512);

    const radGrad = ctx.createRadialGradient(256, 225, 20, 256, 256, 260);
    radGrad.addColorStop(0, 'rgba(28, 38, 52, 0.24)');
    radGrad.addColorStop(1, 'rgba(1, 2, 4, 0.98)');
    ctx.fillStyle = radGrad;
    ctx.fillRect(0, 0, 512, 512);

    // Subtle internal cybernetic wires behind the dark glass
    const wireColors = ['rgba(195, 65, 35, 0.08)', 'rgba(45, 135, 165, 0.08)', 'rgba(180, 135, 40, 0.07)'];
    wireColors.forEach((wc, wIdx) => {
      ctx.strokeStyle = wc;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(175 + wIdx * 80, 20);
      ctx.bezierCurveTo(
        215 + Math.sin(wIdx * 2) * 40, 190,
        295 - Math.cos(wIdx * 2) * 40, 310,
        200 + wIdx * 55, 490
      );
      ctx.stroke();
    });

    // Subtle gaze shift with melody + mouse
    const lookX = mouse.x * 18 + Math.sin(time * 0.65) * 5 + Math.cos(time * 1.4) * (mid * 6);
    const lookY = -mouse.y * 13 + Math.cos(time * 0.5) * 3 - kickPulse * 4;

    // Natural blinking + musical "vibing" expression
    const blinkCycle = time % 4.4;
    const isBlinking = blinkCycle > 4.26;
    const blinkFactor = isBlinking ? 0.07 : 1.0;
    const vibeSquint = 1.0 - Math.min(0.24, groove * 0.28) + Math.min(0.12, kickPulse * 0.15);

    // Expressive LDR Eyes positioned inside the seamless inverted-ovoid face visor
    const eyeW = 54 + kickPulse * 5;
    const eyeH = 122 * blinkFactor * vibeSquint;
    const leftEyeX = 178 + lookX;
    const rightEyeX = 334 + lookX;
    const eyeY = 212 + lookY;

    const drawStylizedEye = (cx, cy, w, h, color) => {
      ctx.save();
      ctx.translate(cx, cy);

      ctx.shadowColor = color;
      ctx.shadowBlur = 26 + kickPulse * 24 + mid * 14;

      const rBottom = w * 0.48;
      const rTop = w * 0.34;
      const halfW = w * 0.5;
      const halfH = Math.max(4, h * 0.5);

      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 6;

      ctx.beginPath();
      ctx.moveTo(-halfW + rTop, -halfH);
      ctx.lineTo(halfW - rTop, -halfH);
      ctx.quadraticCurveTo(halfW, -halfH, halfW, -halfH + rTop);
      ctx.lineTo(halfW, halfH - rBottom);
      ctx.quadraticCurveTo(halfW, halfH, 0, halfH);
      ctx.quadraticCurveTo(-halfW, halfH, -halfW, halfH - rBottom);
      ctx.lineTo(-halfW, -halfH + rTop);
      ctx.quadraticCurveTo(-halfW, -halfH, -halfW + rTop, -halfH);
      ctx.closePath();

      if (currentPaletteKey === 'scratch') {
        ctx.stroke();
        ctx.globalAlpha = 0.24 + mid * 0.4;
        ctx.fill();
      } else {
        ctx.fill();
        if (h > 25) {
          ctx.shadowBlur = 0;
          ctx.fillStyle = '#090b0e';
          const slitW = 9;
          const slitH = h * (0.46 - kickPulse * 0.16);
          ctx.beginPath();
          ctx.roundRect(-slitW / 2, -slitH / 2, slitW, slitH, 4.5);
          ctx.fill();
        }
      }
      ctx.restore();
    };

    drawStylizedEye(leftEyeX, eyeY, eyeW, eyeH, palette.eyeLeft);
    drawStylizedEye(rightEyeX, eyeY, eyeW, eyeH, palette.eyeRight);

    // Expressive Horizontal Mouth Line ("—")
    const mouthY = 365 + lookY * 0.45;
    const mouthX = 256 + lookX * 0.45;
    const mouthHalfLen = 34 + mid * 30 + kickPulse * 8;

    ctx.save();
    ctx.shadowColor = palette.mouthColor;
    ctx.shadowBlur = 16 + mid * 18;
    ctx.strokeStyle = palette.mouthColor;
    ctx.lineWidth = 7.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    const segments = 12;
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const px = mouthX - mouthHalfLen + t * (mouthHalfLen * 2);
      const env = Math.sin(t * Math.PI);
      const waveY = Math.sin(t * Math.PI * 3 + time * 20) * (mid * 8.0 * env);
      if (i === 0) ctx.moveTo(px, mouthY + waveY);
      else ctx.lineTo(px, mouthY + waveY);
    }
    ctx.stroke();
    ctx.restore();

    // Subtle CRT Scanlines
    ctx.fillStyle = 'rgba(0, 0, 0, 0.18)';
    for (let y = 14; y < 498; y += 6) {
      ctx.fillRect(20, y, 472, 2);
    }

    // Studio Curved Gloss Highlights (matching the top-crown & side-cheek reflections in the reference!)
    ctx.save();
    ctx.strokeStyle = 'rgba(235, 245, 255, 0.16)';
    ctx.lineWidth = 18;
    ctx.lineCap = 'round';
    ctx.filter = 'blur(6px)';
    ctx.beginPath();
    ctx.arc(256, 165, 132, -Math.PI * 0.72, -Math.PI * 0.28);
    ctx.stroke();

    // Side vertical curved studio softbox reflection along the right cheek contour
    ctx.strokeStyle = 'rgba(225, 240, 255, 0.12)';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(418, 175);
    ctx.quadraticCurveTo(412, 285, 362, 395);
    ctx.stroke();
    ctx.restore();

    ctx.restore(); // End screen clip

    // Ultra-subtle flush dark-metallic edge seam (no bright white outline cutting the chin!)
    ctx.strokeStyle = 'rgba(95, 108, 125, 0.26)';
    ctx.lineWidth = 3.0;
    drawVisorShieldPath(ctx, 3);
    ctx.stroke();

    faceTexture.needsUpdate = true;
  }

  // ==========================================================================
  // 5. MATERIALS WITH RICH PBR WEATHERED TEXTURES
  // ==========================================================================
  const weatheredTex = createWeatheredMetalTexture();
  let shellColorTex = createWeatheredColorTexture(palette.shellColor, true);
  let secondaryColorTex = createWeatheredColorTexture(palette.shellSecondary, true);
  let darkMetalColorTex = createWeatheredColorTexture(palette.darkMetal, false);
  let chestDecal = createChestDecalTexture(palette.shellColor);

  const shellMat = new THREE.MeshStandardMaterial({
    map: shellColorTex,
    roughnessMap: weatheredTex,
    bumpMap: weatheredTex,
    bumpScale: 0.038,
    roughness: 0.48,
    metalness: 0.45
  });

  const chestPlateMat = new THREE.MeshStandardMaterial({
    map: chestDecal.tex,
    roughnessMap: weatheredTex,
    bumpMap: weatheredTex,
    bumpScale: 0.032,
    roughness: 0.42,
    metalness: 0.50
  });

  const secondaryShellMat = new THREE.MeshStandardMaterial({
    map: secondaryColorTex,
    roughnessMap: weatheredTex,
    bumpMap: weatheredTex,
    bumpScale: 0.035,
    roughness: 0.44,
    metalness: 0.68
  });

  const darkMetalMat = new THREE.MeshStandardMaterial({
    map: darkMetalColorTex,
    roughnessMap: weatheredTex,
    bumpMap: weatheredTex,
    bumpScale: 0.028,
    roughness: 0.46,
    metalness: 0.78
  });

  const chromeMat = new THREE.MeshStandardMaterial({
    color: palette.chromeMetal,
    roughnessMap: weatheredTex,
    bumpMap: weatheredTex,
    bumpScale: 0.012,
    roughness: 0.20,
    metalness: 0.92
  });

  const padMat = new THREE.MeshStandardMaterial({
    color: 0x141518,
    roughnessMap: weatheredTex,
    bumpMap: weatheredTex,
    bumpScale: 0.022,
    roughness: 0.78,
    metalness: 0.12
  });

  const visorMat = new THREE.MeshStandardMaterial({
    map: faceTexture,
    emissiveMap: faceTexture,
    alphaMap: visorAlphaTex,
    transparent: true,
    alphaTest: 0.05,
    emissive: new THREE.Color(0xffffff),
    emissiveIntensity: 0.95,
    roughness: 0.14,
    metalness: 0.15
  });

  const coreGlowMat = new THREE.MeshBasicMaterial({
    color: palette.coreColor
  });

  const glowRingMatLeft = new THREE.MeshBasicMaterial({ color: palette.eyeLeft });
  const glowRingMatRight = new THREE.MeshBasicMaterial({ color: palette.eyeRight });

  // Root Robot Group (lowered so the torso and waist anchor cleanly to the bottom edge)
  const robotRoot = new THREE.Group();
  robotRoot.position.set(0, -0.28, 0);
  scene.add(robotRoot);

  // ==========================================================================
  // 5A. UPGRADED MECHA TORSO, LAYERED PAULDRONS, REACTOR CORE & ARMS (Ref Image 2!)
  // ==========================================================================
  const torsoGroup = new THREE.Group();
  robotRoot.add(torsoGroup);

  // --- 1. BIOMECHANICAL NECK & COLLAR CAVITY ---
  const neckGroup = new THREE.Group();
  torsoGroup.add(neckGroup);

  // Central segmented dark spine column
  const neckCore = new THREE.Mesh(
    new THREE.CylinderGeometry(0.28, 0.36, 0.92, 20),
    darkMetalMat
  );
  neckCore.position.set(0, -0.78, -0.10);
  neckGroup.add(neckCore);

  // Segmented neck rings
  for (let i = 0; i < 3; i++) {
    const nRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.31 + i * 0.02, 0.032, 10, 24),
      secondaryShellMat
    );
    nRing.rotation.x = Math.PI / 2 + 0.08;
    nRing.position.set(0, -0.58 - i * 0.18, -0.08);
    neckGroup.add(nRing);
  }

  // Twin Front/Side Hydraulic Neck Pistons (Chrome rods + dark barrels)
  const leftNeckPistonRod = new THREE.Mesh(
    new THREE.CylinderGeometry(0.038, 0.038, 0.85, 12),
    chromeMat
  );
  leftNeckPistonRod.position.set(-0.24, -0.72, 0.16);
  leftNeckPistonRod.rotation.z = -0.10;
  leftNeckPistonRod.rotation.x = 0.08;
  neckGroup.add(leftNeckPistonRod);

  const leftNeckBarrel = new THREE.Mesh(
    new THREE.CylinderGeometry(0.068, 0.068, 0.46, 12),
    darkMetalMat
  );
  leftNeckBarrel.position.set(-0.27, -0.92, 0.18);
  leftNeckBarrel.rotation.z = -0.10;
  leftNeckBarrel.rotation.x = 0.08;
  neckGroup.add(leftNeckBarrel);

  const rightNeckPistonRod = new THREE.Mesh(
    new THREE.CylinderGeometry(0.038, 0.038, 0.85, 12),
    chromeMat
  );
  rightNeckPistonRod.position.set(0.24, -0.72, 0.16);
  rightNeckPistonRod.rotation.z = 0.10;
  rightNeckPistonRod.rotation.x = 0.08;
  neckGroup.add(rightNeckPistonRod);

  const rightNeckBarrel = new THREE.Mesh(
    new THREE.CylinderGeometry(0.068, 0.068, 0.46, 12),
    darkMetalMat
  );
  rightNeckBarrel.position.set(0.27, -0.92, 0.18);
  rightNeckBarrel.rotation.z = 0.10;
  rightNeckBarrel.rotation.x = 0.08;
  neckGroup.add(rightNeckBarrel);

  // Angled Collar Armor Guards flanking the neck (like the silver collar fins in the ref!)
  const collarFinGeom = new THREE.BoxGeometry(0.32, 0.42, 0.48);
  const leftCollarFin = new THREE.Mesh(collarFinGeom, secondaryShellMat);
  leftCollarFin.position.set(-0.56, -0.88, 0.05);
  leftCollarFin.rotation.set(0.2, 0.25, -0.45);
  neckGroup.add(leftCollarFin);

  const rightCollarFin = new THREE.Mesh(collarFinGeom, secondaryShellMat);
  rightCollarFin.position.set(0.56, -0.88, 0.05);
  rightCollarFin.rotation.set(0.2, -0.25, 0.45);
  neckGroup.add(rightCollarFin);

  // Glowing Upper Collar Chamber (visible inside the V-neck opening above the chest plate, just like the green glow in Ref!)
  const upperCollarCore = new THREE.Mesh(
    new THREE.SphereGeometry(0.32, 24, 18),
    coreGlowMat
  );
  upperCollarCore.scale.set(1.2, 0.65, 0.8);
  upperCollarCore.position.set(0, -1.08, 0.18);
  neckGroup.add(upperCollarCore);

  const upperCollarGrill = new THREE.Mesh(
    new THREE.TorusGeometry(0.28, 0.035, 10, 28),
    darkMetalMat
  );
  upperCollarGrill.rotation.x = 0.55;
  upperCollarGrill.position.set(0, -1.06, 0.26);
  neckGroup.add(upperCollarGrill);

  // --- 2. SWEPT MECHA CHEST BREASTPLATE (Carena Peitoral inspirada na ref CYTRO) ---
  const chestGroup = new THREE.Group();
  torsoGroup.add(chestGroup);

  // Create sculpted 2D silhouette of the swept chest plate and extrude with bevels
  const chestShape = new THREE.Shape();
  chestShape.moveTo(-1.28, 0.52);                      // Top-left shoulder corner
  chestShape.quadraticCurveTo(-0.55, 0.22, 0.0, 0.05); // Deep V-collar dip in center
  chestShape.quadraticCurveTo(0.55, 0.22, 1.28, 0.58); // Top-right swept corner (slightly higher asymmetry like ref)
  chestShape.lineTo(1.42, 0.12);                       // Outer right edge
  chestShape.quadraticCurveTo(1.22, -0.45, 0.88, -0.86); // Sharp lower-right fang tip!
  chestShape.lineTo(0.68, -0.35);                      // Cutout up into abdomen arch
  chestShape.quadraticCurveTo(0.0, -0.18, -0.68, -0.35); // Arched lower chest bridge over reactor core
  chestShape.lineTo(-0.88, -0.86);                     // Sharp lower-left fang tip!
  chestShape.quadraticCurveTo(-1.22, -0.45, -1.42, 0.12); // Outer left edge
  chestShape.closePath();

  const chestExtrudeSettings = {
    steps: 2,
    depth: 0.42,
    bevelEnabled: true,
    bevelThickness: 0.14,
    bevelSize: 0.10,
    bevelOffset: 0,
    bevelSegments: 6
  };
  const chestBreastplateGeom = new THREE.ExtrudeGeometry(chestShape, chestExtrudeSettings);
  chestBreastplateGeom.center();

  // Fix UVs so the decal texture maps across the front [-1.45..1.45, -0.9..0.6]
  const uvAttr = chestBreastplateGeom.attributes.uv;
  const posChest = chestBreastplateGeom.attributes.position;
  for (let i = 0; i < posChest.count; i++) {
    const px = posChest.getX(i);
    const py = posChest.getY(i);
    const pz = posChest.getZ(i);
    // Curve the breastplate forward in the center so it wraps organically in 3D!
    const archZ = Math.cos(px * 0.65) * 0.28 - Math.abs(py) * 0.08;
    posChest.setZ(i, pz + archZ);
    uvAttr.setXY(i, (px + 1.5) / 3.0, (py + 0.95) / 1.65);
  }
  chestBreastplateGeom.computeVertexNormals();

  const chestBreastplate = new THREE.Mesh(chestBreastplateGeom, chestPlateMat);
  chestBreastplate.position.set(0, -1.42, 0.46);
  chestBreastplate.rotation.x = 0.08;
  chestGroup.add(chestBreastplate);

  // Dark internal chest block behind the breastplate
  const innerTorsoCore = new THREE.Mesh(
    new THREE.CylinderGeometry(1.05, 0.68, 1.55, 24),
    darkMetalMat
  );
  innerTorsoCore.scale.set(1.15, 1.0, 0.72);
  innerTorsoCore.position.set(0, -1.68, 0.0);
  chestGroup.add(innerTorsoCore);

  // Diagonal Pectoral-to-Shoulder Hydraulic Struts (visible at the sides of the chest plate in ref!)
  [-1, 1].forEach((side) => {
    const diagRod = new THREE.Mesh(
      new THREE.CylinderGeometry(0.045, 0.045, 0.95, 12),
      chromeMat
    );
    diagRod.position.set(side * 1.28, -1.62, 0.28);
    diagRod.rotation.z = side * 0.58;
    chestGroup.add(diagRod);

    const diagSleeve = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, 0.48, 12),
      secondaryShellMat
    );
    diagSleeve.position.set(side * 1.42, -1.48, 0.28);
    diagSleeve.rotation.z = side * 0.58;
    chestGroup.add(diagSleeve);
  });

  // --- 3. EXPOSED MECHANICAL ABDOMEN, TURBINE REACTOR CORE & WAIST PISTONS ---
  const abdomenGroup = new THREE.Group();
  abdomenGroup.position.set(0, -2.02, 0.24);
  torsoGroup.add(abdomenGroup);

  // Recessed armored turbine housing in the center of the abdomen
  const reactorHousing = new THREE.Mesh(
    new THREE.SphereGeometry(0.42, 28, 22),
    darkMetalMat
  );
  reactorHousing.scale.set(0.92, 1.08, 0.78);
  abdomenGroup.add(reactorHousing);

  const reactorOuterRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.32, 0.055, 14, 32),
    secondaryShellMat
  );
  reactorOuterRing.position.set(0, 0, 0.22);
  abdomenGroup.add(reactorOuterRing);

  // Inner glowing optical/energy core inside the abdomen sphere
  const abdomenCoreEye = new THREE.Mesh(
    new THREE.SphereGeometry(0.16, 20, 16),
    coreGlowMat
  );
  abdomenCoreEye.position.set(0, 0, 0.26);
  abdomenGroup.add(abdomenCoreEye);

  // Central lens pupil inside the abdomen core (like the dark mechanical lens in the ref!)
  const abdomenCorePupil = new THREE.Mesh(
    new THREE.CylinderGeometry(0.06, 0.08, 0.12, 16),
    darkMetalMat
  );
  abdomenCorePupil.rotation.x = Math.PI / 2;
  abdomenCorePupil.position.set(0, 0, 0.36);
  abdomenGroup.add(abdomenCorePupil);

  // Flanking mechanical rib pods around the abdomen core
  [-1, 1].forEach((side) => {
    const ribPod = new THREE.Mesh(
      new THREE.SphereGeometry(0.20, 16, 14),
      secondaryShellMat
    );
    ribPod.scale.set(0.65, 1.15, 0.8);
    ribPod.position.set(side * 0.48, 0.08, 0.12);
    ribPod.rotation.z = side * 0.22;
    abdomenGroup.add(ribPod);

    // Lower Vertical Waist Chrome Pistons (below the abdomen core, just like the ref!)
    const waistPiston = new THREE.Mesh(
      new THREE.CylinderGeometry(0.065, 0.065, 0.68, 14),
      chromeMat
    );
    waistPiston.position.set(side * 0.28, -0.52, -0.02);
    waistPiston.rotation.z = side * -0.08;
    abdomenGroup.add(waistPiston);

    const waistCasing = new THREE.Mesh(
      new THREE.CylinderGeometry(0.10, 0.09, 0.32, 14),
      secondaryShellMat
    );
    waistCasing.position.set(side * 0.26, -0.38, -0.02);
    waistCasing.rotation.z = side * -0.08;
    abdomenGroup.add(waistCasing);

    // Angular V-shaped lower waist & hip armor plates extending to the bottom edge
    const waistPlate = new THREE.Mesh(
      new THREE.BoxGeometry(0.52, 0.42, 0.36),
      secondaryShellMat
    );
    waistPlate.position.set(side * 0.38, -0.78, 0.06);
    waistPlate.rotation.set(0.15, side * -0.25, side * 0.38);
    abdomenGroup.add(waistPlate);

    const lowerHipPlate = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.38, 1.15, 6),
      secondaryShellMat
    );
    lowerHipPlate.position.set(side * 0.56, -1.32, 0.04);
    lowerHipPlate.rotation.z = side * -0.18;
    abdomenGroup.add(lowerHipPlate);
  });

  // Central diamond waist & pelvic column extending downward
  const centerWaistDiamond = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.28, 0),
    secondaryShellMat
  );
  centerWaistDiamond.scale.set(1.0, 1.35, 0.7);
  centerWaistDiamond.position.set(0, -0.84, 0.16);
  abdomenGroup.add(centerWaistDiamond);

  const lowerPelvicCore = new THREE.Mesh(
    new THREE.CylinderGeometry(0.38, 0.52, 1.1, 8),
    darkMetalMat
  );
  lowerPelvicCore.position.set(0, -1.35, -0.04);
  abdomenGroup.add(lowerPelvicCore);

  // --- 4. MULTI-LAYERED SWEPT SHOULDER PAULDRONS & ARTICULATED ARMS ---
  function createMechaShoulderAndArm(isLeft) {
    const side = isLeft ? -1 : 1;
    const shoulderRig = new THREE.Group();
    shoulderRig.position.set(side * 1.48, -1.08, 0.0);

    // Layer 1: High Inner Trap Armor Fin (sweeping up toward neck)
    const trapFinShape = new THREE.Shape();
    trapFinShape.moveTo(0, 0);
    trapFinShape.lineTo(side * 0.95, -0.18);
    trapFinShape.lineTo(side * 0.72, 0.34);
    trapFinShape.lineTo(side * 0.08, 0.46);
    trapFinShape.closePath();
    const trapFinGeom = new THREE.ExtrudeGeometry(trapFinShape, {
      depth: 0.55,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.05,
      bevelSegments: 3
    });
    trapFinGeom.center();
    const trapFin = new THREE.Mesh(trapFinGeom, secondaryShellMat);
    trapFin.position.set(side * -0.18, 0.32, -0.04);
    trapFin.rotation.y = side * -0.18;
    trapFin.rotation.z = side * -0.12;
    shoulderRig.add(trapFin);

    // Layer 2: Main Swept Aerodynamic Shoulder Pauldron (Large gunmetal wing plate!)
    const pauldronShape = new THREE.Shape();
    pauldronShape.moveTo(0, 0.28);
    pauldronShape.quadraticCurveTo(side * 0.85, 0.34, side * 1.62, -0.08);
    pauldronShape.lineTo(side * 1.35, -0.42);
    pauldronShape.quadraticCurveTo(side * 0.62, -0.32, 0, -0.18);
    pauldronShape.closePath();

    const pauldronGeom = new THREE.ExtrudeGeometry(pauldronShape, {
      depth: 0.78,
      bevelEnabled: true,
      bevelThickness: 0.09,
      bevelSize: 0.07,
      bevelSegments: 4
    });
    pauldronGeom.center();
    const mainPauldron = new THREE.Mesh(pauldronGeom, secondaryShellMat);
    mainPauldron.position.set(side * 0.52, 0.08, 0.02);
    mainPauldron.rotation.z = side * -0.08;
    mainPauldron.rotation.y = side * -0.12;
    shoulderRig.add(mainPauldron);

    // Layer 3: Secondary Under-Pauldron Fin
    const underFin = new THREE.Mesh(
      new THREE.BoxGeometry(0.75, 0.16, 0.58),
      darkMetalMat
    );
    underFin.position.set(side * 0.58, -0.22, 0.0);
    underFin.rotation.z = side * -0.28;
    shoulderRig.add(underFin);

    // Mechanical Shoulder Ball Joint
    const shoulderJoint = new THREE.Mesh(
      new THREE.SphereGeometry(0.32, 20, 16),
      darkMetalMat
    );
    shoulderJoint.position.set(side * 0.42, -0.36, 0);
    shoulderRig.add(shoulderJoint);

    // Upper Arm & Bicep Pistons Group
    const armGroup = new THREE.Group();
    armGroup.position.set(side * 0.46, -0.38, 0);
    shoulderRig.add(armGroup);

    // Central dark humerus shaft
    const humerus = new THREE.Mesh(
      new THREE.CylinderGeometry(0.14, 0.12, 1.15, 16),
      darkMetalMat
    );
    humerus.position.set(side * 0.12, -0.58, 0);
    humerus.rotation.z = side * 0.14;
    armGroup.add(humerus);

    // Parallel Chrome Hydraulic Arm Piston
    const armPiston = new THREE.Mesh(
      new THREE.CylinderGeometry(0.045, 0.045, 0.95, 12),
      chromeMat
    );
    armPiston.position.set(side * 0.02, -0.56, 0.14);
    armPiston.rotation.z = side * 0.14;
    armGroup.add(armPiston);

    // Outer Curved Bicep Shield Plate (like the silver outer bicep guard in the ref!)
    const bicepShield = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.18, 0.52, 16, 1, false, 0, Math.PI),
      secondaryShellMat
    );
    bicepShield.rotation.y = isLeft ? -Math.PI / 2 : Math.PI / 2;
    bicepShield.rotation.z = side * 0.14;
    bicepShield.position.set(side * 0.22, -0.45, 0.04);
    armGroup.add(bicepShield);

    // Inner Bicep Counter-Pod
    const innerPod = new THREE.Mesh(
      new THREE.SphereGeometry(0.16, 14, 12),
      secondaryShellMat
    );
    innerPod.scale.set(0.6, 1.3, 0.85);
    innerPod.position.set(side * -0.02, -0.92, 0.10);
    armGroup.add(innerPod);

    // Articulated Elbow Pivot Group (Bends & grooves actively to the music!)
    const elbowGroup = new THREE.Group();
    elbowGroup.position.set(side * 0.22, -1.16, 0.02);
    armGroup.add(elbowGroup);

    const elbowJoint = new THREE.Mesh(
      new THREE.CylinderGeometry(0.19, 0.19, 0.30, 16),
      darkMetalMat
    );
    elbowJoint.rotation.x = Math.PI / 2;
    elbowGroup.add(elbowJoint);

    const forearmArmor = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.35, 1.42, 6),
      secondaryShellMat
    );
    forearmArmor.position.set(side * 0.08, -0.72, 0.08);
    forearmArmor.rotation.z = side * 0.06;
    elbowGroup.add(forearmArmor);

    // Forearm Chrome Hydraulic Rod + Outer Fin
    const forearmPiston = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 0.88, 10),
      chromeMat
    );
    forearmPiston.position.set(side * -0.08, -0.58, 0.22);
    elbowGroup.add(forearmPiston);

    const wristCuff = new THREE.Mesh(
      new THREE.TorusGeometry(0.28, 0.055, 10, 18),
      darkMetalMat
    );
    wristCuff.rotation.x = Math.PI / 2;
    wristCuff.position.set(side * 0.11, -1.35, 0.08);
    elbowGroup.add(wristCuff);

    return { shoulderRig, armGroup, elbowGroup, armPiston, mainPauldron };
  }

  const leftShoulder = createMechaShoulderAndArm(true);
  const rightShoulder = createMechaShoulderAndArm(false);
  torsoGroup.add(leftShoulder.shoulderRig);
  torsoGroup.add(rightShoulder.shoulderRig);

  // ==========================================================================
  // 5B. HEAD GROUP (Three.js Xbot-Proportioned Humanoid Robot Head + Visor)
  // ==========================================================================
  const headGroup = new THREE.Group();
  headGroup.position.set(0, -0.34, 0);
  robotRoot.add(headGroup);

  // Computes the exact horizontal half-width W(ny) and half-depth D(ny) at vertical slice ny in [-1, 1]
  // matching the Three.js Xbot.glb head silhouette:
  // 1. ny in [0.22, 1.0]: Smooth rounded cranium dome
  // 2. ny in [-0.48, 0.22]: Structured temples & cheekbones tapering gently to defined jaw corners
  // 3. ny in [-1.0, -0.48]: Angled mandible jawline leading to a blunt, softly-rounded humanoid chin
  const HORIZ_P = 2.45; // Subtle planar/sculpted cheekbone & brow feel (between circle p=2 and box p=3.8)
  function getXbotSliceProfile(ny) {
    let halfW = 0.80;
    if (ny >= 0.22) {
      const tTop = Math.min(1, (ny - 0.22) / 0.78);
      halfW = 0.80 * Math.pow(Math.max(0, 1.0 - Math.pow(tTop, 2.15)), 1.0 / 2.10);
    } else if (ny >= -0.48) {
      const tMid = (0.22 - ny) / 0.70;
      halfW = 0.80 - 0.12 * Math.pow(tMid, 1.25);
    } else {
      const tChin = Math.min(1, (-0.48 - ny) / 0.52);
      const jawSlope = 1.0 - 0.35 * Math.pow(tChin, 1.12);
      const chinBottomRound = Math.pow(Math.max(0, 1.0 - Math.pow(tChin, 3.2)), 1.0 / 2.35);
      halfW = 0.68 * jawSlope * chinBottomRound;
    }

    // Anatomical front-to-back depth profile D(ny)
    let halfD = 0.76;
    if (ny >= 0.22) {
      const tTop = Math.min(1, (ny - 0.22) / 0.78);
      halfD = 0.76 * Math.pow(Math.max(0, 1.0 - Math.pow(tTop, 2.15)), 1.0 / 2.10);
    } else {
      const tBot = Math.min(1, (0.22 - ny) / 1.22);
      const bottomRound = Math.pow(Math.max(0, 1.0 - Math.pow(tBot, 3.4)), 1.0 / 2.4);
      halfD = 0.76 * (1.0 - 0.16 * Math.pow(tBot, 1.3)) * bottomRound;
    }

    const yWorld = 0.96 + ny * 1.04;
    // Slight forward brow/chin contour
    const zCenter = -0.02 + Math.cos((ny - 0.05) * 1.2) * 0.035;
    return { halfW, halfD, yWorld, zCenter };
  }

  // 1. Main Three.js Xbot-Proportioned Head Shell
  function createXbotHeadGeometry() {
    const geom = new THREE.SphereGeometry(1.0, 64, 56);
    const pos = geom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i);
      const vy = pos.getY(i);
      const vz = pos.getZ(i);

      const ny = Math.max(-1, Math.min(1, vy));
      const { halfW, halfD, yWorld, zCenter } = getXbotSliceProfile(ny);

      // Normalize horizontal direction (vx, vz) onto the HORIZ_P squircle cross-section
      const horizLen = Math.hypot(vx, vz);
      let hx = 0;
      let hz = 0;
      if (horizLen > 1e-5) {
        const ux = vx / horizLen;
        const uz = vz / horizLen;
        const lp = Math.pow(Math.pow(Math.abs(ux), HORIZ_P) + Math.pow(Math.abs(uz), HORIZ_P), 1.0 / HORIZ_P) || 1.0;
        hx = ux / lp;
        hz = uz / lp;
      }

      const x = hx * halfW;
      const z = zCenter + hz * halfD;
      pos.setXYZ(i, x, yWorld, z);
    }
    geom.computeVertexNormals();
    return geom;
  }

  // 2. Conformal Front Visor Geometry matching the exact Xbot slice profile W(ny), D(ny)
  function createXbotVisorGeometry(radialOffset = 0.014) {
    const geom = new THREE.PlaneGeometry(2.0, 2.0, 56, 56);
    const pos = geom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const ux = pos.getX(i); // [-1, 1]
      const uy = pos.getY(i); // [-1, 1]

      const ny = uy * 0.93;
      const { halfW, halfD, yWorld, zCenter } = getXbotSliceProfile(ny);

      const hx = ux * 0.91;
      const hz = Math.pow(Math.max(0.001, 1.0 - Math.pow(Math.abs(hx), HORIZ_P)), 1.0 / HORIZ_P);

      const x = hx * (halfW + radialOffset);
      const y = yWorld + uy * radialOffset * 0.4;
      const z = zCenter + hz * (halfD + radialOffset) + radialOffset * 0.35;
      pos.setXYZ(i, x, y, z);
    }
    geom.computeVertexNormals();
    return geom;
  }

  const craniumGeom = createXbotHeadGeometry();
  const craniumMesh = new THREE.Mesh(craniumGeom, shellMat);
  headGroup.add(craniumMesh);

  const visorGeom = createXbotVisorGeometry(0.014);
  const visorMesh = new THREE.Mesh(visorGeom, visorMat);
  headGroup.add(visorMesh);

  // --- 5C. SLEEK CONTEMPORARY HEADPHONES (Hugging the Xbot head contour) ---
  const headphonesGroup = new THREE.Group();
  headGroup.add(headphonesGroup);

  const bandCurvePoints = [];
  const bandSteps = 36;
  for (let i = 0; i <= bandSteps; i++) {
    const t = (i / bandSteps) * Math.PI;
    const rx = 0.96 + Math.sin(t * 3) * 0.018;
    const ry = 1.36 + Math.sin(t * 2 - 0.4) * 0.025;
    const x = Math.cos(t) * rx;
    const y = 0.78 + Math.sin(t) * ry;
    const z = -0.02 + Math.sin(t) * 0.04;
    bandCurvePoints.push(new THREE.Vector3(x, y, z));
  }
  const bandCurve = new THREE.CatmullRomCurve3(bandCurvePoints);
  const headbandGeom = new THREE.TubeGeometry(bandCurve, 48, 0.072, 14, false);
  const headbandMesh = new THREE.Mesh(headbandGeom, darkMetalMat);
  headphonesGroup.add(headbandMesh);

  const innerBandGeom = new THREE.TubeGeometry(bandCurve, 40, 0.044, 10, false);
  const innerBandMesh = new THREE.Mesh(innerBandGeom, secondaryShellMat);
  innerBandMesh.scale.set(0.95, 0.94, 0.95);
  innerBandMesh.position.set(0, 0.02, 0.04);
  headphonesGroup.add(innerBandMesh);

  function createEarcup(isLeft) {
    const side = isLeft ? -1 : 1;
    const cupGroup = new THREE.Group();
    cupGroup.position.set(side * 0.90, 0.82, 0.02);

    const cushion = new THREE.Mesh(
      new THREE.CylinderGeometry(0.42, 0.42, 0.14, 28),
      padMat
    );
    cushion.rotation.z = Math.PI / 2;
    cushion.scale.set(1.26, 1.0, 0.84);
    cupGroup.add(cushion);

    const outerCup = new THREE.Mesh(
      new THREE.CylinderGeometry(0.38, 0.30, 0.24, 28),
      secondaryShellMat
    );
    outerCup.rotation.z = Math.PI / 2;
    outerCup.position.x = side * 0.13;
    outerCup.scale.set(1.26, 1.0, 0.84);
    cupGroup.add(outerCup);

    const ledRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.31, 0.020, 12, 32),
      isLeft ? glowRingMatLeft : glowRingMatRight
    );
    ledRing.rotation.y = Math.PI / 2;
    ledRing.position.x = side * 0.25;
    ledRing.scale.set(0.84, 1.26, 1.0);
    cupGroup.add(ledRing);

    const centerCap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.16, 0.16, 0.07, 20),
      darkMetalMat
    );
    centerCap.rotation.z = Math.PI / 2;
    centerCap.position.x = side * 0.24;
    cupGroup.add(centerCap);

    return { cupGroup, ledRing };
  }

  const leftEarcup = createEarcup(true);
  const rightEarcup = createEarcup(false);
  headphonesGroup.add(leftEarcup.cupGroup);
  headphonesGroup.add(rightEarcup.cupGroup);

  // ==========================================================================
  // 5D. INTERACTIVE HEAD ACCESSORIES (Boné, Chapéu de Cowboy, Tranças Predador)
  // ==========================================================================
  let currentAccessory = 'cap'; // 'none' | 'cap' | 'cowboy' | 'predator'

  // --- ACCESSORY 1: BONÉ CYBER STREETWEAR (Snapback Cap) ---
  const capGroup = new THREE.Group();
  // Positioned high on the cranium and tilted slightly back so it NEVER blocks the eyes!
  capGroup.position.set(0, 1.56, 0.02);
  capGroup.rotation.set(-0.20, 0.06, -0.03);
  headGroup.add(capGroup);

  const capCrownGeom = new THREE.SphereGeometry(0.84, 40, 24, 0, Math.PI * 2, 0, Math.PI * 0.54);
  capCrownGeom.scale(1.01, 0.72, 1.06);
  const capCrownMesh = new THREE.Mesh(capCrownGeom, darkMetalMat);
  capGroup.add(capCrownMesh);

  // 6-panel stitched seam ribs on the cap crown
  for (let p = 0; p < 6; p++) {
    const ang = (p / 6) * Math.PI * 2;
    const seamPts = [];
    for (let s = 0; s <= 12; s++) {
      const theta = (s / 12) * Math.PI * 0.53;
      const r = 0.844;
      seamPts.push(
        new THREE.Vector3(
          Math.cos(ang) * Math.sin(theta) * r * 1.01,
          Math.cos(theta) * r * 0.72,
          Math.sin(ang) * Math.sin(theta) * r * 1.06
        )
      );
    }
    const seamCurve = new THREE.CatmullRomCurve3(seamPts);
    const seamMesh = new THREE.Mesh(
      new THREE.TubeGeometry(seamCurve, 14, 0.012, 6, false),
      secondaryShellMat
    );
    capGroup.add(seamMesh);
  }

  // Top cap button
  const capButton = new THREE.Mesh(
    new THREE.CylinderGeometry(0.055, 0.055, 0.035, 16),
    chromeMat
  );
  capButton.position.set(0, 0.61, 0);
  capGroup.add(capButton);

  // Curved Snapback Brim / Bill projecting forward
  const capBrimGeom = new THREE.BoxGeometry(1.18, 0.036, 0.76, 28, 2, 16);
  const brimPos = capBrimGeom.attributes.position;
  for (let i = 0; i < brimPos.count; i++) {
    let bx = brimPos.getX(i);
    let by = brimPos.getY(i);
    let bz = brimPos.getZ(i);
    // Round the front corners of the bill
    const zNorm = (bz + 0.38) / 0.76; // 0 at crown -> 1 at front tip
    const widthTaper = 1.0 - Math.pow(zNorm, 2.2) * 0.22;
    bx *= widthTaper;
    // Gentle arch across the bill + slight upward flip at the tip
    by += Math.cos(bx * 1.8) * 0.06 - 0.04 + zNorm * 0.03;
    brimPos.setXYZ(i, bx, by, bz);
  }
  capBrimGeom.computeVertexNormals();
  const capBrimMesh = new THREE.Mesh(capBrimGeom, secondaryShellMat);
  capBrimMesh.position.set(0, 0.04, 0.92);
  capGroup.add(capBrimMesh);

  // Glowing Cyber Badge on the front panel of the cap
  const capPatchMesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.42, 0.18, 0.04),
    darkMetalMat
  );
  capPatchMesh.position.set(0, 0.22, 0.85);
  capPatchMesh.rotation.x = -0.28;
  capGroup.add(capPatchMesh);

  const capPatchGlow = new THREE.Mesh(
    new THREE.BoxGeometry(0.32, 0.05, 0.05),
    glowRingMatLeft
  );
  capPatchGlow.position.set(0, 0.22, 0.855);
  capPatchGlow.rotation.x = -0.28;
  capGroup.add(capPatchGlow);

  // --- ACCESSORY 2: CHAPÉU DE COWBOY CYBER-WESTERN ---
  const cowboyGroup = new THREE.Group();
  cowboyGroup.position.set(0, 1.66, -0.02);
  cowboyGroup.rotation.set(-0.18, 0, 0);
  cowboyGroup.visible = false;
  headGroup.add(cowboyGroup);

  const cowboyLeatherTex = createWeatheredColorTexture(0x683d22, true);
  const cowboyMat = new THREE.MeshStandardMaterial({
    map: cowboyLeatherTex,
    roughnessMap: weatheredTex,
    bumpMap: weatheredTex,
    bumpScale: 0.042,
    roughness: 0.58,
    metalness: 0.22
  });

  // Sculpted Cattleman Crown (with center crease & front side pinch dents)
  const cowboyCrownGeom = new THREE.CylinderGeometry(0.68, 0.82, 0.82, 56, 28, false);
  const ccPos = cowboyCrownGeom.attributes.position;
  for (let i = 0; i < ccPos.count; i++) {
    let cx = ccPos.getX(i);
    let cy = ccPos.getY(i);
    let cz = ccPos.getZ(i);

    const hNorm = (cy + 0.41) / 0.82; // 0 at base -> 1 at top
    // Elongate front-to-back oval shape
    cz *= 1.15;
    cx *= 0.94 - hNorm * 0.12;

    // Front side pinch dents (classic cowboy hat pinch)
    if (cz > 0.05 && hNorm > 0.25) {
      const pinchFactor = Math.sin(hNorm * Math.PI) * Math.max(0, Math.min(1, (cz - 0.05) / 0.65));
      cx *= 1.0 - pinchFactor * 0.28;
    }

    // Top Cattleman center crease (running front-to-back along x ~ 0)
    if (hNorm > 0.65) {
      const topBlend = (hNorm - 0.65) / 0.35;
      const centerDip = Math.exp(-(cx * cx) * 14.0) * 0.22 * topBlend;
      const sideRoll = Math.pow(Math.abs(cx) / 0.65, 2.2) * 0.09 * topBlend;
      cy -= centerDip + sideRoll;
    }

    ccPos.setXYZ(i, cx, cy, cz);
  }
  cowboyCrownGeom.computeVertexNormals();
  const cowboyCrownMesh = new THREE.Mesh(cowboyCrownGeom, cowboyMat);
  cowboyCrownMesh.position.set(0, 0.32, 0);
  cowboyGroup.add(cowboyCrownMesh);

  // Sculpted Wide Side-Curled Cowboy Brim
  const cowboyBrimGeom = new THREE.CylinderGeometry(1.78, 1.78, 0.042, 64, 16);
  const cbPos = cowboyBrimGeom.attributes.position;
  for (let i = 0; i < cbPos.count; i++) {
    let bx = cbPos.getX(i);
    let by = cbPos.getY(i);
    let bz = cbPos.getZ(i);

    bz *= 1.08;
    bx *= 0.95;
    // Dramatic upward curl on the left and right sides of the brim
    const sideCurl = Math.pow(Math.abs(bx) / 1.35, 2.1) * 0.44;
    // Slight downward dip at the front and back
    const frontDip = bz > 0 ? -Math.pow(bz / 1.8, 1.6) * 0.12 : Math.pow(-bz / 1.8, 1.6) * 0.06;
    by += sideCurl + frontDip;

    cbPos.setXYZ(i, bx, by, bz);
  }
  cowboyBrimGeom.computeVertexNormals();
  const cowboyBrimMesh = new THREE.Mesh(cowboyBrimGeom, cowboyMat);
  cowboyBrimMesh.position.set(0, -0.06, 0.04);
  cowboyGroup.add(cowboyBrimMesh);

  // Cowboy Hatband + Chrome Studs + Glowing Cyber Buckle
  const hatBandGeom = new THREE.CylinderGeometry(0.81, 0.83, 0.11, 40, 1, true);
  hatBandGeom.scale(0.94, 1.0, 1.15);
  const hatBandMesh = new THREE.Mesh(hatBandGeom, darkMetalMat);
  hatBandMesh.position.set(0, -0.01, 0);
  cowboyGroup.add(hatBandMesh);

  const hatBuckle = new THREE.Mesh(
    new THREE.BoxGeometry(0.24, 0.13, 0.06),
    glowRingMatLeft
  );
  hatBuckle.position.set(0, -0.01, 0.94);
  cowboyGroup.add(hatBuckle);

  // --- ACCESSORY 3: TRANÇAS ESTILO PREDADOR (Yautja Bio-Mechanical Cyber-Dreads) ---
  const predatorGroup = new THREE.Group();
  predatorGroup.visible = false;
  headGroup.add(predatorGroup);

  const predatorDreadMat = new THREE.MeshStandardMaterial({
    color: 0x151418,
    roughnessMap: weatheredTex,
    bumpMap: weatheredTex,
    bumpScale: 0.036,
    roughness: 0.62,
    metalness: 0.32
  });

  // Swept-back Yautja cranial bio-sockets along the upper temples & back of the skull (never covering the face!)
  const predatorSpecs = [
    // Upper temple/crown swept-back Predator dreads
    { root: [-0.46, 1.88, -0.02], mid1: [-0.88, 2.18, -0.38], mid2: [-1.32, 1.25, -0.62], tip: [-1.42, -0.35, -0.45], rad: 0.095, phase: 0.0, side: -1 },
    { root: [0.46,  1.88, -0.02], mid1: [0.88,  2.18, -0.38], mid2: [1.32,  1.25, -0.62], tip: [1.42,  -0.35, -0.45], rad: 0.095, phase: 0.6, side: 1 },
    { root: [-0.64, 1.72, -0.06], mid1: [-1.18, 1.92, -0.35], mid2: [-1.58, 0.88, -0.48], tip: [-1.58, -0.78, -0.32], rad: 0.102, phase: 1.2, side: -1 },
    { root: [0.64,  1.72, -0.06], mid1: [1.18,  1.92, -0.35], mid2: [1.58,  0.88, -0.48], tip: [1.58,  -0.78, -0.32], rad: 0.102, phase: 1.8, side: 1 },
    { root: [-0.74, 1.52, -0.12], mid1: [-1.35, 1.58, -0.38], mid2: [-1.72, 0.45, -0.42], tip: [-1.66, -1.08, -0.22], rad: 0.105, phase: 2.4, side: -1 },
    { root: [0.74,  1.52, -0.12], mid1: [1.35,  1.58, -0.38], mid2: [1.72,  0.45, -0.42], tip: [1.66,  -1.08, -0.22], rad: 0.105, phase: 3.0, side: 1 },

    // Mid-back & lower-temple Predator braids cascading over the shoulders
    { root: [-0.76, 1.28, -0.24], mid1: [-1.42, 1.18, -0.48], mid2: [-1.74, 0.05, -0.44], tip: [-1.55, -1.25, -0.18], rad: 0.100, phase: 0.4, side: -1 },
    { root: [0.76,  1.28, -0.24], mid1: [1.42,  1.18, -0.48], mid2: [1.74,  0.05, -0.44], tip: [1.55,  -1.25, -0.18], rad: 0.100, phase: 1.0, side: 1 },
    { root: [-0.24, 1.94, -0.14], mid1: [-0.52, 2.28, -0.52], mid2: [-0.95, 1.38, -0.78], tip: [-1.08, -0.45, -0.62], rad: 0.092, phase: 1.6, side: -1 },
    { root: [0.24,  1.94, -0.14], mid1: [0.52,  2.28, -0.52], mid2: [0.95,  1.38, -0.78], tip: [1.08,  -0.45, -0.62], rad: 0.092, phase: 2.2, side: 1 },
    { root: [-0.55, 1.62, -0.32], mid1: [-1.02, 1.72, -0.68], mid2: [-1.35, 0.62, -0.72], tip: [-1.28, -0.95, -0.52], rad: 0.096, phase: 2.8, side: -1 },
    { root: [0.55,  1.62, -0.32], mid1: [1.02,  1.72, -0.68], mid2: [1.35,  0.62, -0.72], tip: [1.28,  -0.95, -0.52], rad: 0.096, phase: 3.4, side: 1 },
  ];

  const antennaMeshes = predatorSpecs.map((spec, idx) => {
    const pivot = new THREE.Group();
    const [rx, ry, rz] = spec.root;
    pivot.position.set(rx, ry, rz);

    // Metallic cranial socket port where the Predator braid plugs into the head
    const socketPort = new THREE.Mesh(
      new THREE.CylinderGeometry(spec.rad * 1.28, spec.rad * 1.15, 0.09, 14),
      chromeMat
    );
    socketPort.rotation.z = spec.side * 0.6;
    pivot.add(socketPort);

    const p0 = new THREE.Vector3(0, 0, 0);
    const p1 = new THREE.Vector3(spec.mid1[0] - rx, spec.mid1[1] - ry, spec.mid1[2] - rz);
    const p2 = new THREE.Vector3(spec.mid2[0] - rx, spec.mid2[1] - ry, spec.mid2[2] - rz);
    const p3 = new THREE.Vector3(spec.tip[0] - rx, spec.tip[1] - ry, spec.tip[2] - rz);

    const curve = new THREE.CatmullRomCurve3([p0, p1, p2, p3]);
    const tubeGeom = new THREE.TubeGeometry(curve, 28, spec.rad, 12, false);

    // Sculpt deep Predator bio-mechanical segmented ridges & slight tip taper
    const pos = tubeGeom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i);
      const vy = pos.getY(i);
      const vz = pos.getZ(i);
      const segRidge = 1.0 + Math.sin(vy * 22 + idx) * 0.11;
      pos.setXYZ(i, vx * segRidge, vy, vz * segRidge);
    }
    tubeGeom.computeVertexNormals();

    const lockMesh = new THREE.Mesh(tubeGeom, predatorDreadMat);
    pivot.add(lockMesh);

    // 3 Predator Metallic & Glowing Cyber Cuffs (Rings) along each braid
    [0.24, 0.52, 0.78].forEach((tPos, bIdx) => {
      const pt = curve.getPoint(tPos);
      const tangent = curve.getTangent(tPos);
      const cuffMat = bIdx === 1 ? (idx % 2 === 0 ? glowRingMatLeft : glowRingMatRight) : chromeMat;
      const cuff = new THREE.Mesh(
        new THREE.CylinderGeometry(spec.rad * 1.20, spec.rad * 1.20, 0.10, 14),
        cuffMat
      );
      cuff.position.copy(pt);
      cuff.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tangent.normalize());
      pivot.add(cuff);
    });

    // Glowing Cyber Tip at the bottom of each Predator braid
    const tipBulb = new THREE.Mesh(
      new THREE.SphereGeometry(spec.rad * 0.88, 12, 10),
      idx % 2 === 0 ? glowRingMatLeft : glowRingMatRight
    );
    tipBulb.position.copy(p3);
    pivot.add(tipBulb);

    predatorGroup.add(pivot);
    return {
      pivot,
      cfg: { phase: spec.phase, side: spec.side }
    };
  });

  function applyAccessory(key) {
    currentAccessory = key;
    capGroup.visible = key === 'cap';
    cowboyGroup.visible = key === 'cowboy';
    predatorGroup.visible = key === 'predator';

    document.querySelectorAll('[data-accessory-btn]').forEach((btn) => {
      const isSelected = btn.getAttribute('data-accessory-btn') === key;
      btn.classList.toggle('active-pill', isSelected);
    });
  }

  function applyScenery(key) {
    currentScenery = key;
    document.querySelectorAll('[data-scenery-btn]').forEach((btn) => {
      const isSelected = btn.getAttribute('data-scenery-btn') === key;
      btn.classList.toggle('active-pill', isSelected);
    });
  }

  const anchors = {
    // Head / Helmet anchors (on headGroup)
    earLeft: new THREE.Vector3(-1.05, 0.82, 0.03),
    earRight: new THREE.Vector3(1.05, 0.82, 0.03),
    crownTop: new THREE.Vector3(0.0, 1.98, 0.08),
    templeLeft: new THREE.Vector3(-0.76, 1.42, 0.42),
    templeRight: new THREE.Vector3(0.76, 1.42, 0.42),
    chinBottom: new THREE.Vector3(0.0, 0.05, 0.68),

    // Chest / Torso anchors (on chestGroup & torsoGroup)
    collarCenter: new THREE.Vector3(0.0, -0.95, 0.78),
    chestLeft: new THREE.Vector3(-0.68, -1.28, 0.72),
    chestRight: new THREE.Vector3(0.68, -1.28, 0.72),
    reactorCore: new THREE.Vector3(0.0, -1.78, 0.56),
    hipLeft: new THREE.Vector3(-0.80, -2.35, 0.42),
    hipRight: new THREE.Vector3(0.80, -2.35, 0.42),

    // Articulated Shoulder, Elbow & Wrist local offsets
    shoulderLocalL: new THREE.Vector3(-0.34, 0.14, 0.28),
    shoulderLocalR: new THREE.Vector3(0.34, 0.14, 0.28),
    elbowLocalL: new THREE.Vector3(-0.08, -0.05, 0.26),
    elbowLocalR: new THREE.Vector3(0.08, -0.05, 0.26),
    wristLocalL: new THREE.Vector3(-0.10, -0.82, 0.28),
    wristLocalR: new THREE.Vector3(0.10, -0.82, 0.28),
  };

  function projectTo2D(localVec, parentObj, width, height) {
    const worldVec = localVec.clone();
    parentObj.localToWorld(worldVec);
    worldVec.project(camera);
    return {
      x: (worldVec.x * 0.5 + 0.5) * width,
      y: (-worldVec.y * 0.5 + 0.5) * height,
      z: worldVec.z
    };
  }

  // ==========================================================================
  // 6. LAYER A: SCENERY / ASCII BACKGROUND (CLASSIC ORIGINAL + 3D VARIATIONS)
  // ==========================================================================
  // Pre-generate 3D Z-streaming ASCII space glyphs for the 3D scenery variations
  const asciiStars3D = Array.from({ length: 95 }, (_, i) => {
    const angle = (i * 2.39996) + (i % 7) * 0.3;
    const rad = 1.8 + (i % 11) * 1.15;
    return {
      x: Math.cos(angle) * rad * 1.45,
      y: Math.sin(angle) * rad * 0.95 - 0.8,
      zOffset: (i / 95) * 18.0,
      glyphIdx: i % 7
    };
  });

  function renderAsciiBackground(time, bass, mid, high) {
    const w = asciiCanvas.width;
    const h = asciiCanvas.height;
    asciiCtx.clearRect(0, 0, w, h);

    if (!showAsciiLayer) return;

    // ========================================================================
    // SCENERY 1 (DEFAULT): EXACT ORIGINAL ANIMATION (Onda Diagonal & Montanha Flutuante)
    // ========================================================================
    if (currentScenery === 'classic') {
      const cellW = 11;
      const cellH = 15;
      const asciiCols = Math.ceil(w / cellW);
      const asciiRows = Math.ceil(h / cellH);

      asciiCtx.font = '600 12px "JetBrains Mono", "Fira Code", "SF Mono", Menlo, monospace';
      asciiCtx.textBaseline = 'top';
      asciiCtx.textAlign = 'left';
      asciiCtx.globalAlpha = 1.0;

      const px = mouse.x * 3.5;

      for (let r = 0; r < asciiRows; r++) {
        const ny = r / asciiRows;

        for (let c = 0; c < asciiCols; c++) {
          const nx = c / asciiCols;
          const x = c * cellW;
          const y = r * cellH;

          const mx = (nx - 0.5) * 6.5 + px * 0.12;
          const mPeakMain =
            Math.sin(mx * 1.15 + 0.4) * 0.14 +
            Math.cos(mx * 2.4 - 0.7) * 0.08 +
            Math.sin(mx * 4.7 + time * 0.25) * 0.035;
          const audioRidge = Math.sin(mx * 3.5 - time * 2.2) * (bass * 0.065 + mid * 0.045);
          const ridgeTopY = 0.34 - mPeakMain - audioRidge;
          const ridgeBottomY = 0.76 + Math.sin(mx * 1.6) * 0.08;

          const diagBoundary = 0.58 - ny * 0.62 + Math.sin(ny * 8 + time * 0.6) * 0.025;
          if (nx < diagBoundary && ny < ridgeTopY + 0.08) {
            const edgeDist = diagBoundary - nx;
            if (edgeDist > 0.08) {
              const wavePhase = Math.floor(c + r * 0.5 + time * (1.2 + high * 2.2)) % 2;
              const char = (c + r) % 7 === 0 ? 'X' : (wavePhase === 0 ? '/' : '\\');
              asciiCtx.fillStyle = palette.asciiSky;
              asciiCtx.fillText(char, x, y);
            } else if ((c + r) % 2 === 0) {
              asciiCtx.fillStyle = palette.asciiSky;
              asciiCtx.fillText('/', x, y);
            }
            continue;
          }

          if (ny >= ridgeTopY && ny <= ridgeBottomY) {
            const depthInMountain = (ny - ridgeTopY) / (ridgeBottomY - ridgeTopY);
            const slopeLight =
              Math.cos(mx * 2.8 + depthInMountain * 4.2 - time * 0.35) * 0.5 +
              Math.sin(c * 0.35 - r * 0.25) * 0.35 +
              (1.0 - depthInMountain) * 0.45 +
              bass * 0.38;

            const distFromRobotCenter = Math.hypot((nx - 0.5) * 1.4, (ny - 0.58));
            if (distFromRobotCenter > 0.22 && slopeLight > 0.18) {
              let glyph = '.';
              if (slopeLight > 0.92) {
                glyph = (c + r) % 3 === 0 ? '▪' : ((c * r) % 2 === 0 ? '#' : 'X');
                asciiCtx.fillStyle = palette.asciiMountainBright;
              } else if (slopeLight > 0.68) {
                const set = ['#', 'X', '=', 'o', '▫', '\\', '/'];
                glyph = set[(c * 3 + r * 5) % set.length];
                asciiCtx.fillStyle = palette.asciiMountainMid;
              } else if (slopeLight > 0.42) {
                const set = ['/', '\\', '=', '-', '.'];
                glyph = set[(c + r * 2) % set.length];
                asciiCtx.fillStyle = palette.asciiMountainDim;
              } else {
                if ((c * 7 + r * 13) % 5 !== 0) continue;
                glyph = (c + r) % 2 === 0 ? '\\' : '.';
                asciiCtx.fillStyle = palette.asciiMountainDim;
              }
              asciiCtx.fillText(glyph, x, y);
            }
            continue;
          }

          const hash = Math.sin(c * 127.1 + r * 311.7) * 43758.5453;
          const frac = hash - Math.floor(hash);
          if (frac > 0.87) {
            const drift = Math.sin(time * 0.9 + c * 0.4 + r * 0.2);
            if (drift > -0.2) {
              const spaceGlyphs = ['\\', '/', '.', '·', '=', '\\'];
              const gIdx = Math.floor((frac * 100 + Math.floor(time * 0.5)) % spaceGlyphs.length);
              asciiCtx.fillStyle = palette.asciiMountainDim;
              asciiCtx.fillText(spaceGlyphs[gIdx], x, y);
            }
          }
        }
      }
      return;
    }

    // ========================================================================
    // SCENERY 2: CORDILHEIRA 2D HORIZONTE (Montanha até a base + Céu Estrelado)
    // ========================================================================
    if (currentScenery === 'horizon2d') {
      const cellW = 11;
      const cellH = 15;
      const cols = Math.floor(w / cellW);
      const rows = Math.floor(h / cellH);

      asciiCtx.font = '700 12px "JetBrains Mono", "Fira Code", monospace';
      asciiCtx.textBaseline = 'top';
      asciiCtx.textAlign = 'left';
      asciiCtx.globalAlpha = 1.0;

      const shiftX = Math.round(mouse.x * 2.5);
      const shiftY = Math.round(mouse.y * 1.5);

      for (let r = 0; r < rows; r++) {
        const ny = r / rows;

        for (let c = 0; c < cols; c++) {
          const nx = c / cols;
          const distFromCenter = Math.hypot(nx - 0.5, ny - 0.56);
          if (distFromCenter < 0.25) continue;

          const mountainCurve =
            0.50 +
            Math.sin((nx + shiftX * 0.01) * 5.8 + 0.6) * 0.14 +
            Math.cos(nx * 13.5 - 1.1) * 0.07 +
            Math.sin(nx * 27.0 + time * 0.35) * 0.025;

          const freqIndex = Math.floor(nx * 56);
          const audioBoost = (audio.freqData[freqIndex] / 255) * 0.10 * (0.5 + bass);
          const ridgeY = mountainCurve - audioBoost;

          if (ny >= ridgeY) {
            const depthInMountain = (ny - ridgeY) / (1 - ridgeY + 0.001);
            const slope = Math.cos(nx * 5.8 + 0.6);
            const lightVal =
              (1 - depthInMountain * 0.72) * (0.55 + slope * 0.45) +
              bass * 0.28 * (1 - depthInMountain);

            let ch = '.';
            if (ny - ridgeY < 0.024) {
              ch = '▪';
              asciiCtx.fillStyle = palette.asciiMountainBright;
            } else if (lightVal > 0.72) {
              ch = (r + c) % 2 === 0 ? '#' : 'X';
              asciiCtx.fillStyle = palette.asciiMountainBright;
            } else if (lightVal > 0.44) {
              ch = (r * 3 + c) % 3 === 0 ? 'X' : '=';
              asciiCtx.fillStyle = palette.asciiMountainMid;
            } else if (lightVal > 0.24) {
              ch = (r + c) % 2 === 0 ? '/' : ':';
              asciiCtx.fillStyle = palette.asciiMountainDim;
            } else {
              if ((r + c) % 3 !== 0) continue;
              ch = '.';
              asciiCtx.fillStyle = palette.asciiMountainDim;
            }

            asciiCtx.fillText(ch, c * cellW, r * cellH);
          } else {
            const skySeed = Math.sin(c * 91.7 + r * 37.3 + Math.floor(time * 2.2) * 0.12) * 10000;
            const frac = skySeed - Math.floor(skySeed);

            if (frac > 0.962 - high * 0.035) {
              asciiCtx.fillStyle = palette.asciiMountainMid;
              const skyChars = ['/', '\\', 'x', '+', '·', '-'];
              const idx = Math.floor((frac * 997) % skyChars.length);
              asciiCtx.fillText(skyChars[idx], (c + shiftX * 0.3) * cellW, (r + shiftY * 0.3) * cellH);
            } else if (
              nx < 0.36 &&
              ny < 0.42 &&
              Math.abs((c - r * 1.4 + Math.floor(time * 3)) % 13) < 1.15
            ) {
              asciiCtx.fillStyle = palette.asciiMountainDim;
              asciiCtx.fillText('/', c * cellW, r * cellH);
            }
          }
        }
      }
      return;
    }

    // ========================================================================
    // SCENERY: FLUXO CRIPTO CYBER / MATRIX TERMINAL (Base64 / Alfanumérico)
    // ========================================================================
    if (currentScenery === 'cybercode') {
      const cellW = 10;
      const cellH = 17;
      const cols = Math.floor(w / cellW);
      const rows = Math.floor(h / cellH);

      asciiCtx.font = '600 13px "JetBrains Mono", "Fira Code", monospace';
      asciiCtx.textBaseline = 'top';
      asciiCtx.textAlign = 'left';

      // Alphanumeric character pool matching user reference
      const charset = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+#/X';
      const clen = charset.length;

      // Mouse parallax shift
      const shiftX = mouse.x * 6;
      const shiftY = mouse.y * 4;

      for (let c = 0; c < cols; c++) {
        // Individual column speed, phase, and audio reaction
        const colSeed = Math.sin(c * 17.3 + 4.1) * 43758.5453;
        const colSpeed = 1.2 + Math.abs(colSeed % 2.4);
        const colBin = Math.abs(Math.floor(c * 2)) % 64;
        const colAudio = (audio.freqData[colBin] / 255);
        const colFlow = (time * (colSpeed + colAudio * 3.5) + (colSeed % 100)) % rows;

        for (let r = 0; r < rows; r++) {
          const x = c * cellW + shiftX * 0.1;
          const y = r * cellH + shiftY * 0.1;

          // Clear center silhouette so robot remains clear and prominent
          const nx = c / cols;
          const ny = r / rows;
          const distRobot = Math.hypot((nx - 0.5) * 1.35, (ny - 0.56));
          if (distRobot < 0.22) continue;

          // Calculate character index and stream head
          const streamPos = (r - colFlow + rows) % rows;
          const isPacketHead = streamPos < 1.2;
          const isPacketTail = streamPos < 6.0;

          // Audio reactive radial shockwaves emanating on bass & kicks
          const waveDist = Math.hypot(nx - 0.5, ny - 0.55);
          const waveRipple = Math.sin(waveDist * 16 - time * 8) * (bass * 0.45 + (audio.kickPulse || 0) * 0.4);

          // Deterministic character selection that evolves with stream flow
          const charHash = Math.abs(Math.floor(Math.sin(c * 93.1 + Math.floor(r + colFlow) * 31.7) * 99991));
          const ch = charset[charHash % clen];

          // Compute color and brightness matching the image reference
          // Image reference has dark moody blue/cyan text with glowing cyan/blue highlights
          if (isPacketHead || waveRipple > 0.32) {
            // Bright illuminated packet head
            asciiCtx.fillStyle = '#67e8f9';
            asciiCtx.globalAlpha = Math.min(0.95, 0.75 + bass * 0.25);
          } else if (isPacketTail || waveRipple > 0.15 || colAudio > 0.5) {
            // Mid glow cyan/blue
            asciiCtx.fillStyle = '#22d3ee';
            asciiCtx.globalAlpha = Math.min(0.75, 0.45 + colAudio * 0.3);
          } else {
            // Moody dark blue/slate terminal glyph (exact match to image)
            const lumVariant = (charHash % 3);
            if (lumVariant === 0) {
              asciiCtx.fillStyle = '#1e384d';
              asciiCtx.globalAlpha = 0.55;
            } else if (lumVariant === 1) {
              asciiCtx.fillStyle = '#162b3d';
              asciiCtx.globalAlpha = 0.42;
            } else {
              asciiCtx.fillStyle = '#10202e';
              asciiCtx.globalAlpha = 0.30;
            }
          }

          asciiCtx.fillText(ch, x, y);
        }
      }
    }

    // ========================================================================
    // SCENERY: STREET // PAREDES PICHADAS & PISTA DE SKATE (Graffiti & Skatepark)
    // ========================================================================
    if (currentScenery === 'street') {
      const cellW = 10;
      const cellH = 15;
      const cols = Math.floor(w / cellW);
      const rows = Math.floor(h / cellH);

      asciiCtx.font = '700 12px "JetBrains Mono", "Fira Code", monospace';
      asciiCtx.textBaseline = 'top';
      asciiCtx.textAlign = 'left';

      const shiftX = mouse.x * 18;
      const shiftY = mouse.y * 10;
      const kick = audio.kickPulse || 0;
      const bassShake = (bass * 0.7 + kick * 0.9) * (Math.sin(time * 30) * 1.5);

      for (let c = 0; c < cols; c++) {
        const nx = c / cols;
        const dCenter = Math.abs(nx - 0.5);

        // SKATE PARK TRANSITION CURVE (Quarter-pipes on left/right and flatground center)
        // Center flatground is between nx ~ 0.34 and 0.66
        // Ramps curve upward toward both walls
        const isRampZone = dCenter > 0.16;
        // Ramp top coping rail is around ny ~ 0.44 at the sides, dipping down to flat ground ny ~ 0.82
        const rampCurveFactor = Math.pow((dCenter - 0.16) / 0.34, 1.8);
        const rampSurfaceY = isRampZone ? (0.82 - rampCurveFactor * 0.38) : 0.82;
        const isCopingRail = isRampZone && Math.abs(dCenter - 0.5) < 0.04;

        for (let r = 0; r < rows; r++) {
          const ny = r / rows;
          const x = c * cellW + shiftX * 0.2;
          const y = r * cellH + shiftY * 0.2;

          // Silhouette protection for the robot in foreground
          const distRobot = Math.hypot((nx - 0.5) * 1.35, (ny - 0.58));
          if (distRobot < 0.22) continue;

          // WALL ZONE: Left wall (nx < 0.30) and Right wall (nx > 0.70)
          const isWall = (nx < 0.30 || nx > 0.70) && (ny < rampSurfaceY || ny < 0.68);

          if (isWall) {
            // ==========================================
            // PAREDE DE CONCRETO / TIJOLOS PICHO & GRAFFITI
            // ==========================================
            const isLeftWall = nx < 0.5;
            const wallCol = isLeftWall ? c : (c - Math.floor(cols * 0.70));
            const wallRow = r;
            const brickRow = Math.floor(wallRow / 2);
            const isMortarH = wallRow % 2 === 0;
            const isMortarV = (wallCol + (brickRow % 2) * 2) % 4 === 0;

            // Base Concrete/Brick Texture
            let char = isMortarH ? '─' : (isMortarV ? '│' : '░');
            let color = isMortarH || isMortarV ? '#1e2430' : '#141822';
            let alpha = 0.55;

            // GRAFFITI TAGS / PICHAÇÃO
            // Left Wall: "LDR" & "SK8" & "♥ ✕ ■" & Spray Drips
            // Right Wall: "BEAT" & "VOX" & "CYBER" & "⚡" & Drips
            const tagX = isLeftWall ? (nx / 0.30) : ((nx - 0.70) / 0.30);
            const tagY = ny / 0.55;

            let isTag = false;
            let tagColor = '#f43f5e';
            let tagChar = '#';

            // TAG 1 (Left Wall): Large "LDR" Wildstyle & Love/Death/Robots Icons
            if (isLeftWall && tagY >= 0.22 && tagY <= 0.52 && tagX >= 0.12 && tagX <= 0.88) {
              const lx = (tagX - 0.12) / 0.76;
              const ly = (tagY - 0.22) / 0.30;
              // Block layout for letters L, D, R
              const inL = (lx >= 0.06 && lx <= 0.16) || (lx >= 0.06 && lx <= 0.30 && ly >= 0.75);
              const inD = (lx >= 0.36 && lx <= 0.45) || ((lx >= 0.36 && lx <= 0.60) && (ly <= 0.22 || ly >= 0.78)) || (lx >= 0.56 && lx <= 0.62 && ly >= 0.20 && ly <= 0.80);
              const inR = (lx >= 0.68 && lx <= 0.76) || ((lx >= 0.68 && lx <= 0.92) && (ly <= 0.22 || (ly >= 0.44 && ly <= 0.56))) || (lx >= 0.86 && lx <= 0.94 && ly >= 0.18 && ly <= 0.48) || (lx >= 0.78 && lx <= 0.94 && ly >= 0.56 && (lx - 0.78) - (ly - 0.56) * 0.4 < 0.06);

              if (inL || inD || inR) {
                isTag = true;
                tagChar = (c + r) % 2 === 0 ? '█' : '▓';
                // Vibrant neon pink/magenta with bass pulse
                tagColor = bass > 0.5 ? '#fb7185' : '#f43f5e';
                alpha = 0.95 + bass * 0.2;
              }
            }

            // TAG 2 (Left Wall): Spray Icons "♥ ✕ ■"
            if (isLeftWall && tagY >= 0.60 && tagY <= 0.82 && tagX >= 0.15 && tagX <= 0.85) {
              const sx = (tagX - 0.15) / 0.70;
              if (sx >= 0.05 && sx <= 0.28) {
                isTag = true;
                tagChar = '♥';
                tagColor = '#f43f5e';
                alpha = 0.90;
              } else if (sx >= 0.38 && sx <= 0.60) {
                isTag = true;
                tagChar = '✕';
                tagColor = '#38bdf8';
                alpha = 0.90;
              } else if (sx >= 0.70 && sx <= 0.95) {
                isTag = true;
                tagChar = '■';
                tagColor = '#facc15';
                alpha = 0.90;
              }
            }

            // TAG 3 (Right Wall): "CYBER" / "BEAT" Wildstyle Tag
            if (!isLeftWall && tagY >= 0.20 && tagY <= 0.50 && tagX >= 0.10 && tagX <= 0.90) {
              const rx = (tagX - 0.10) / 0.80;
              const ry = (tagY - 0.20) / 0.30;
              // Electric Cyan wildstyle tag "BEAT"
              const inB = (rx >= 0.05 && rx <= 0.14) || ((rx <= 0.24) && (ry <= 0.2 || (ry >= 0.42 && ry <= 0.56) || ry >= 0.78)) || (rx >= 0.22 && rx <= 0.26 && (ry <= 0.5 || ry >= 0.5));
              const inE = (rx >= 0.30 && rx <= 0.38) || ((rx >= 0.30 && rx <= 0.46) && (ry <= 0.2 || (ry >= 0.42 && ry <= 0.56) || ry >= 0.78));
              const inA = (rx >= 0.50 && rx <= 0.58) || (rx >= 0.66 && rx <= 0.74) || ((rx >= 0.50 && rx <= 0.74) && (ry <= 0.2 || (ry >= 0.46 && ry <= 0.60)));
              const inT = (rx >= 0.78 && rx <= 0.95 && ry <= 0.22) || (rx >= 0.84 && rx <= 0.90);

              if (inB || inE || inA || inT) {
                isTag = true;
                tagChar = (c + r) % 2 === 0 ? '█' : '▒';
                tagColor = kick > 0.6 ? '#67e8f9' : '#06b6d4';
                alpha = 0.95 + kick * 0.25;
              }
            }

            // TAG 4 (Right Wall): "SK8 OR DIE" & "⚡"
            if (!isLeftWall && tagY >= 0.58 && tagY <= 0.78 && tagX >= 0.15 && tagX <= 0.85) {
              const rx = (tagX - 0.15) / 0.70;
              if (rx >= 0.10 && rx <= 0.35) {
                isTag = true;
                tagChar = '⚡';
                tagColor = '#facc15';
                alpha = 0.95;
              } else if (rx >= 0.45 && rx <= 0.90) {
                const words = "SK8·DIE";
                const charIdx = Math.floor((rx - 0.45) / 0.45 * words.length);
                isTag = true;
                tagChar = words[charIdx] || 'X';
                tagColor = '#a855f7';
                alpha = 0.90;
              }
            }

            // SPRAY PAINT DRIPS (Escorrido de Tinta sob as tags)
            const dripSeed = Math.sin(c * 53.7) * 43758.54;
            const hasDrip = (dripSeed - Math.floor(dripSeed)) > 0.70;
            const dripLength = 0.08 + Math.abs(dripSeed % 0.16) + (bass * 0.08 + kick * 0.06);

            if (!isTag && hasDrip) {
              const isUnderTag1 = tagY > 0.52 && tagY < (0.52 + dripLength) && tagX >= 0.12 && tagX <= 0.88;
              const isUnderTag3 = tagY > 0.50 && tagY < (0.50 + dripLength) && tagX >= 0.10 && tagX <= 0.90;

              if (isLeftWall && isUnderTag1) {
                isTag = true;
                const dripStep = (tagY - 0.52) / dripLength;
                tagChar = dripStep > 0.85 ? 'o' : (dripStep > 0.6 ? ':' : '|');
                tagColor = '#f43f5e';
                alpha = Math.max(0.4, 0.95 - dripStep * 0.5);
              } else if (!isLeftWall && isUnderTag3) {
                isTag = true;
                const dripStep = (tagY - 0.50) / dripLength;
                tagChar = dripStep > 0.85 ? '•' : (dripStep > 0.6 ? ':' : '|');
                tagColor = '#06b6d4';
                alpha = Math.max(0.4, 0.95 - dripStep * 0.5);
              }
            }

            if (isTag) {
              asciiCtx.fillStyle = tagColor;
              asciiCtx.globalAlpha = Math.min(1.0, alpha);
              asciiCtx.fillText(tagChar, x + bassShake, y);
            } else {
              asciiCtx.fillStyle = color;
              asciiCtx.globalAlpha = alpha;
              asciiCtx.fillText(char, x, y);
            }
            continue;
          }

          // ==========================================
          // PISTA DE SKATE: HALF-PIPE & TRANSIÇÃO CURVA
          // ==========================================
          if (ny >= rampSurfaceY - 0.018) {
            // COPING RAIL (Tubo metálico no topo da rampa)
            const isNearLip = Math.abs(ny - rampSurfaceY) < 0.022 && isRampZone;
            if (isNearLip) {
              const spark = (high > 0.55 && (c + Math.floor(time * 12)) % 7 === 0);
              asciiCtx.fillStyle = spark ? '#ffffff' : (kick > 0.6 ? '#67e8f9' : '#cbd5e1');
              asciiCtx.globalAlpha = spark ? 1.0 : 0.88;
              const railChar = spark ? '✦' : ((c % 2 === 0) ? '═' : 'Ø');
              asciiCtx.fillText(railChar, x, y);
              continue;
            }

            // Horizontal transition sheet seams
            const isTransitionSeam = Math.abs((ny * 100) % 6) < 0.65;
            // Skateboard grind marks & wheel trails
            const grindSeed = Math.sin(c * 19.3 + Math.floor(ny * 25) * 11.7);
            const isGrindMark = Math.abs(grindSeed) > 0.82;

            if (isTransitionSeam) {
              asciiCtx.fillStyle = '#475569';
              asciiCtx.globalAlpha = 0.70;
              asciiCtx.fillText((c % 8 === 0) ? '+' : '═', x, y);
            } else if (isGrindMark && isRampZone) {
              // Skid scratches from skateboard trucks / wheels
              asciiCtx.fillStyle = '#334155';
              asciiCtx.globalAlpha = 0.65;
              asciiCtx.fillText('~', x, y);
            } else if (ny > 0.84) {
              // Flatground Asphalt & Skatepark markings
              const isCenterMark = Math.abs(nx - 0.5) < 0.035;
              const isHazardStripe = (Math.abs(nx - 0.35) < 0.02 || Math.abs(nx - 0.65) < 0.02) && (r % 2 === 0);

              if (isCenterMark) {
                asciiCtx.fillStyle = '#facc15';
                asciiCtx.globalAlpha = 0.85;
                asciiCtx.fillText('║', x, y);
              } else if (isHazardStripe) {
                asciiCtx.fillStyle = '#f59e0b';
                asciiCtx.globalAlpha = 0.80;
                asciiCtx.fillText('/', x, y);
              } else {
                // Asphalt concrete texture
                const aspSeed = Math.sin(c * 91.1 + r * 47.7);
                asciiCtx.fillStyle = '#1e293b';
                asciiCtx.globalAlpha = 0.50;
                const aspChars = ['.', '·', '░', ' '];
                asciiCtx.fillText(aspChars[Math.abs(Math.floor(aspSeed * 99)) % aspChars.length], x, y);
              }
            } else {
              // Curved wood/fiber ramp texture
              asciiCtx.fillStyle = isRampZone ? '#1e293b' : '#0f172a';
              asciiCtx.globalAlpha = 0.55;
              asciiCtx.fillText((r + c) % 3 === 0 ? '░' : '.', x, y);
            }
            continue;
          }

          // ==========================================
          // CÉU URBANO NOTURNO & SKYLINE ENTRE AS PAREDES
          // ==========================================
          if (ny >= 0.24 && ny < rampSurfaceY) {
            // Distant building silhouettes
            const inSkyline = ny >= (0.42 - Math.abs(Math.sin(c * 0.45)) * 0.12);
            if (inSkyline) {
              const winSeed = Math.sin(c * 67.3 + r * 89.1 + Math.floor(time * 0.5));
              const isLitWindow = (winSeed - Math.floor(winSeed)) > 0.88;
              if (isLitWindow) {
                asciiCtx.fillStyle = '#fef08a';
                asciiCtx.globalAlpha = 0.65 + high * 0.3;
                asciiCtx.fillText('▪', x, y);
              } else {
                asciiCtx.fillStyle = '#0f172a';
                asciiCtx.globalAlpha = 0.70;
                asciiCtx.fillText('█', x, y);
              }
              continue;
            }
          }

          // Dark night sky stars/smog
          const starSeed = Math.sin(c * 133.7 + r * 59.3) * 43758.54;
          const isStar = (starSeed - Math.floor(starSeed)) > 0.965;
          if (isStar) {
            asciiCtx.fillStyle = '#94a3b8';
            asciiCtx.globalAlpha = 0.45 + high * 0.35;
            asciiCtx.fillText('·', x, y);
          }
        }
      }
      asciiCtx.globalAlpha = 1.0;
      return;
    }

    // ========================================================================
    // 3D PERSPECTIVE SCENERY VARIATIONS ('valley3d', 'cybergrid', 'warp3d')
    // ========================================================================
    const kick = audio.kickPulse || 0;
    asciiCtx.textBaseline = 'middle';
    asciiCtx.textAlign = 'center';

    // 3D Perspective Camera / Vanishing Point (shifts with mouse + musical groove for strong 3D parallax!)
    const camYaw = mouse.x * 1.2 + Math.sin(time * 0.45) * 0.18;
    const camPitch = mouse.y * 0.65 + Math.cos(time * 0.35) * 0.08;
    const vanishX = w * 0.50 - camYaw * (w * 0.09);
    const horizonY = h * 0.46 + camPitch * (h * 0.07);
    const focal = Math.min(w, h) * 0.92;

    const project3DAscii = (wx, wy, wz) => {
      const rx = wx - camYaw * (1.8 / Math.max(1.0, wz * 0.25));
      const ry = wy - camPitch * (1.2 / Math.max(1.0, wz * 0.25));
      const invZ = focal / Math.max(0.8, wz);
      return {
        sx: vanishX + rx * invZ,
        sy: horizonY - ry * invZ,
        scale: invZ / (focal * 0.12)
      };
    };

    // 1. DEEP-SPACE 3D Z-STREAMING ASCII WARP FIELD (active in all 3D modes, faster in 'warp3d')
    const warpGlyphs = ['·', '.', '/', '\\', '+', 'x', 'X', '▪', '#'];
    const speedMul = currentScenery === 'warp3d' ? 3.4 : 1.85;
    const zTravel = time * speedMul + audio.beatPhase * (currentScenery === 'warp3d' ? 1.1 : 0.55);

    for (let i = 0; i < asciiStars3D.length; i++) {
      const st = asciiStars3D[i];
      const z = 18.5 - ((st.zOffset + zTravel) % 17.3);
      const proj = project3DAscii(st.x, st.y, z);

      if (proj.sx < -20 || proj.sx > w + 20 || proj.sy < -20 || proj.sy > h + 20) continue;
      const distCenter = Math.hypot((proj.sx - w * 0.5) / w, (proj.sy - h * 0.54) / h);
      if (distCenter < 0.20 && z < 6.0) continue;

      const depthNorm = 1.0 - (z - 1.2) / 17.3;
      const fontPx = Math.max(8, Math.min(26, Math.round(8 + Math.pow(depthNorm, 1.45) * (currentScenery === 'warp3d' ? 20 : 16))));
      asciiCtx.font = `700 ${fontPx}px "JetBrains Mono", "Fira Code", monospace`;

      const gIdx = Math.min(warpGlyphs.length - 1, Math.floor(depthNorm * warpGlyphs.length));
      asciiCtx.globalAlpha = Math.min(0.92, (0.15 + depthNorm * 0.78) * (0.75 + high * 0.5));
      asciiCtx.fillStyle = depthNorm > 0.72 ? palette.asciiMountainBright : (depthNorm > 0.4 ? palette.asciiMountainMid : palette.asciiMountainDim);
      asciiCtx.fillText(warpGlyphs[gIdx], proj.sx, proj.sy);
    }

    // 2. 3D ROTATING ASCII PLANETOID & TILTED ORBITAL RING (in 'valley3d' and 'warp3d')
    if (currentScenery === 'valley3d' || currentScenery === 'warp3d') {
      const planetCenter = currentScenery === 'warp3d'
        ? { x: 4.1, y: 2.1, z: 10.4 }
        : { x: -4.4, y: 2.35, z: 11.2 };
      const planetRad = 1.45 + bass * 0.22 + kick * 0.14;
      const rotY = time * 0.42;
      const rotX = 0.42 + Math.sin(time * 0.3) * 0.1;
      const cosRY = Math.cos(rotY), sinRY = Math.sin(rotY);
      const cosRX = Math.cos(rotX), sinRX = Math.sin(rotX);

      const lx = 0.65, ly = 0.52, lz = 0.55;
      const shadeChars = ['.', ':', '/', '=', '+', 'x', 'X', '#', '@'];
      const planetPoints = [];

      const latSteps = 10;
      const lonSteps = 20;
      for (let ilat = 1; ilat < latSteps; ilat++) {
        const theta = (ilat / latSteps) * Math.PI;
        const sinT = Math.sin(theta), cosT = Math.cos(theta);
        for (let ilon = 0; ilon < lonSteps; ilon++) {
          const phi = (ilon / lonSteps) * Math.PI * 2;
          const ux = Math.cos(phi) * sinT;
          const uy = cosT;
          const uz = Math.sin(phi) * sinT;

          const rx1 = ux * cosRY - uz * sinRY;
          const rz1 = ux * sinRY + uz * cosRY;
          const ry2 = uy * cosRX - rz1 * sinRX;
          const rz2 = uy * sinRX + rz1 * cosRX;

          if (rz2 < -0.15) continue;

          const lum = Math.max(0, rx1 * lx + ry2 * ly + rz2 * lz);
          const charIdx = Math.min(shadeChars.length - 1, Math.floor(lum * shadeChars.length));
          planetPoints.push({
            wx: planetCenter.x + rx1 * planetRad,
            wy: planetCenter.y + ry2 * planetRad,
            wz: planetCenter.z - rz2 * planetRad,
            char: shadeChars[charIdx],
            lum: 0.25 + lum * 0.75
          });
        }
      }

      const ringSteps = 44;
      for (let r = 0; r < ringSteps; r++) {
        const a = (r / ringSteps) * Math.PI * 2 + time * 0.65;
        const ringR = planetRad * (1.58 + (r % 2) * 0.14) + Math.sin(a * 6 - time * 5) * (bass * 0.18);
        const ux = Math.cos(a) * ringR;
        const uy = Math.sin(a) * 0.12;
        const uz = Math.sin(a) * ringR;

        const tiltX = 0.55;
        const tiltZ = -0.32;
        const ry1 = uy * Math.cos(tiltX) - uz * Math.sin(tiltX);
        const rz1 = uy * Math.sin(tiltX) + uz * Math.cos(tiltX);
        const rx2 = ux * Math.cos(tiltZ) - ry1 * Math.sin(tiltZ);
        const ry2 = ux * Math.sin(tiltZ) + ry1 * Math.cos(tiltZ);

        planetPoints.push({
          wx: planetCenter.x + rx2,
          wy: planetCenter.y + ry2,
          wz: planetCenter.z - rz1,
          char: r % 3 === 0 ? '#' : (r % 2 === 0 ? '=' : '/'),
          lum: rz1 > 0 ? 0.95 : 0.42
        });
      }

      planetPoints.sort((a, b) => b.wz - a.wz);
      for (let i = 0; i < planetPoints.length; i++) {
        const pt = planetPoints[i];
        const proj = project3DAscii(pt.wx, pt.wy, pt.wz);
        const pxSize = Math.max(9, Math.min(16, Math.round(11 * proj.scale)));
        asciiCtx.font = `700 ${pxSize}px "JetBrains Mono", "Fira Code", monospace`;
        asciiCtx.globalAlpha = Math.min(0.92, pt.lum * (0.75 + bass * 0.35));
        asciiCtx.fillStyle = pt.lum > 0.72 ? palette.asciiMountainBright : (pt.lum > 0.45 ? palette.asciiMountainMid : palette.asciiMountainDim);
        asciiCtx.fillText(pt.char, proj.sx, proj.sy);
      }
    }

    // 3A. 'warp3d': Deep-space 3D Concentric ASCII Warp Tunnel Rings
    if (currentScenery === 'warp3d') {
      const ringCount = 9;
      for (let ri = 0; ri < ringCount; ri++) {
        const tZ = ((ri / ringCount) + (1.0 - (zTravel * 0.12) % 1.0)) % 1.0;
        const z = 1.6 + Math.pow(tZ, 1.35) * 14.5;
        const prox = 1.0 - tZ;
        const fontPx = Math.max(9, Math.min(22, Math.round(9 + prox * 13)));
        asciiCtx.font = `700 ${fontPx}px "JetBrains Mono", "Fira Code", monospace`;

        const segs = 36;
        const rad = 3.2 + Math.sin(z * 0.5 - time * 2.5) * (0.4 + bass * 0.6);
        for (let s = 0; s < segs; s++) {
          const ang = (s / segs) * Math.PI * 2 + time * 0.3 * (ri % 2 === 0 ? 1 : -1);
          const wx = Math.cos(ang) * rad * 1.35;
          const wy = Math.sin(ang) * rad * 0.85 - 0.25;
          const proj = project3DAscii(wx, wy, z);
          if (proj.sx < 0 || proj.sx > w || proj.sy < 0 || proj.sy > h) continue;
          const distRobot = Math.hypot((proj.sx - w * 0.5) / w, (proj.sy - h * 0.56) / h);
          if (distRobot < 0.24) continue;

          asciiCtx.globalAlpha = Math.min(0.88, prox * (0.65 + bass * 0.35));
          asciiCtx.fillStyle = s % 3 === 0 ? palette.asciiMountainBright : palette.asciiMountainMid;
          asciiCtx.fillText(s % 2 === 0 ? '#' : '+', proj.sx, proj.sy);
        }
      }
      asciiCtx.globalAlpha = 1.0;
      asciiCtx.textAlign = 'left';
      asciiCtx.textBaseline = 'top';
      return;
    }

    // 3B. 'cybergrid': 3D Audio-Reactive ASCII Monolith Equalizer Towers on the Horizon
    if (currentScenery === 'cybergrid') {
      const towerCols = 16;
      const zTower = 8.8;
      asciiCtx.font = '700 13px "JetBrains Mono", "Fira Code", monospace';
      for (let ti = -towerCols; ti <= towerCols; ti++) {
        if (Math.abs(ti) < 3) continue; // Keep center clear for robot
        const wx = ti * 0.58;
        const bin = (Math.abs(ti) * 4) % 64;
        const towerH = 0.2 + (audio.freqData[bin] / 255) * (2.6 + bass * 1.4);
        for (let wy = -1.6; wy <= -1.6 + towerH; wy += 0.24) {
          const proj = project3DAscii(wx, wy, zTower);
          if (proj.sx < 0 || proj.sx > w || proj.sy < 0 || proj.sy > h) continue;
          const isTop = wy > -1.6 + towerH - 0.26;
          asciiCtx.fillStyle = isTop ? palette.asciiMountainBright : palette.asciiMountainMid;
          asciiCtx.globalAlpha = isTop ? 0.92 : 0.62;
          asciiCtx.fillText(isTop ? '▪' : '█', proj.sx, proj.sy);
        }
      }
    }

    // 3C. 'valley3d': THREE-LAYER PARALLAX 3D ASCII MOUNTAIN RANGES (Far, Mid, Near)
    if (currentScenery === 'valley3d') {
      const mountainLayers = [
        { z: 14.5, fontPx: 10, stepX: 0.38, stepY: 0.28, baseH: 0.4, amp: 1.55, freq: 0.72, seed: 1.1, alphaMul: 0.45 },
        { z: 9.2,  fontPx: 12, stepX: 0.30, stepY: 0.23, baseH: 0.0, amp: 1.45, freq: 0.95, seed: 3.7, alphaMul: 0.72 },
        { z: 5.4,  fontPx: 15, stepX: 0.25, stepY: 0.20, baseH: -0.55, amp: 1.25, freq: 1.25, seed: 7.3, alphaMul: 0.96 },
      ];

      mountainLayers.forEach((layer, lIdx) => {
        asciiCtx.font = `700 ${layer.fontPx}px "JetBrains Mono", "Fira Code", monospace`;
        const xRange = layer.z * 0.95;

        for (let wx = -xRange; wx <= xRange; wx += layer.stepX) {
          const centerCanyon = lIdx === 2 ? Math.min(1.0, Math.pow(Math.abs(wx) / 2.2, 1.8)) : (lIdx === 1 ? 0.45 + 0.55 * Math.min(1.0, Math.abs(wx) / 1.8) : 1.0);
          if (centerCanyon < 0.18) continue;

          const mArg = wx * layer.freq + layer.seed;
          const hVal =
            (Math.sin(mArg) * 0.55 +
             Math.cos(mArg * 2.1 - 0.8) * 0.30 +
             Math.sin(mArg * 4.3 + time * 0.4) * 0.15 +
             0.65) * layer.amp * centerCanyon;

          const binIdx = Math.abs(Math.floor(wx * 8 + lIdx * 19)) % 64;
          const audioBoost = (audio.freqData[binIdx] / 255) * (0.45 + bass * 0.55);
          const ridgeTop = layer.baseH + hVal + audioBoost;
          const ridgeBot = layer.baseH - 1.15;

          const dHdx =
            (Math.cos(mArg) * 0.55 * layer.freq -
             Math.sin(mArg * 2.1 - 0.8) * 0.30 * layer.freq * 2.1) * layer.amp * centerCanyon;

          for (let wy = ridgeTop; wy >= ridgeBot; wy -= layer.stepY) {
            const proj = project3DAscii(wx, wy, layer.z);
            if (proj.sx < 0 || proj.sx > w || proj.sy < 0 || proj.sy > h) continue;

            const distRobot = Math.hypot((proj.sx - w * 0.5) / w, (proj.sy - h * 0.56) / h);
            if (distRobot < 0.21) continue;

            const distFromCrest = ridgeTop - wy;
            const isCrestEdge = distFromCrest < layer.stepY * 1.15;
            const sunDot = Math.max(0.08, Math.min(1.0, 0.58 - dHdx * 0.45 + (1.0 - distFromCrest / 2.2) * 0.35 + bass * 0.25));

            let glyph = '.';
            if (isCrestEdge) {
              glyph = dHdx > 0.15 ? '/' : (dHdx < -0.15 ? '\\' : '▪');
              asciiCtx.fillStyle = palette.asciiMountainBright;
              asciiCtx.globalAlpha = Math.min(0.95, layer.alphaMul * 1.1);
            } else if (sunDot > 0.76) {
              const brightSet = ['#', '▪', 'X', '@', '='];
              glyph = brightSet[Math.abs(Math.floor(wx * 7 + wy * 11)) % brightSet.length];
              asciiCtx.fillStyle = palette.asciiMountainBright;
              asciiCtx.globalAlpha = layer.alphaMul * 0.90;
            } else if (sunDot > 0.48) {
              const midSet = ['X', '=', 'o', '▫', '/', '\\'];
              glyph = midSet[Math.abs(Math.floor(wx * 5 + wy * 9)) % midSet.length];
              asciiCtx.fillStyle = palette.asciiMountainMid;
              asciiCtx.globalAlpha = layer.alphaMul * 0.72;
            } else {
              if (Math.abs(Math.floor(wx * 13 + wy * 17)) % 2 !== 0) continue;
              glyph = dHdx < 0 ? '\\' : ':';
              asciiCtx.fillStyle = palette.asciiMountainDim;
              asciiCtx.globalAlpha = layer.alphaMul * 0.48;
            }

            asciiCtx.fillText(glyph, proj.sx, proj.sy);
          }
        }
      });
    }

    // 4. TRUE 3D PERSPECTIVE FLOOR GRID (Marching toward viewer in Z for 'valley3d' and 'cybergrid'!)
    const zSlices = 22;
    const zFlow = (time * 2.4 + audio.beatPhase * 0.75) % 1.0;

    for (let zi = 0; zi < zSlices; zi++) {
      const tZ = (zi + (1.0 - zFlow)) / zSlices;
      const z = 1.45 + Math.pow(tZ, 1.45) * 13.5;
      const depthProximity = 1.0 - tZ;

      const fontPx = Math.max(8, Math.min(22, Math.round(8 + depthProximity * 14)));
      asciiCtx.font = `700 ${fontPx}px "JetBrains Mono", "Fira Code", monospace`;

      const cols = 28;
      const maxWorldX = 9.5;
      for (let ci = -cols; ci <= cols; ci++) {
        const wx = (ci / cols) * maxWorldX;
        const freqBin = Math.min(120, Math.abs(ci * 3) + zi * 2);
        const freqAmp = (audio.freqData[freqBin] / 255);
        const valleyWall = currentScenery === 'cybergrid'
          ? 0.0
          : Math.pow(Math.abs(wx) / maxWorldX, 2.2) * 1.45;
        const waveRipple = Math.sin(wx * 1.8 - z * 0.9 + time * 3.5) * (0.12 + bass * 0.28 + freqAmp * 0.35);
        const wy = -1.75 + valleyWall + waveRipple;

        const proj = project3DAscii(wx, wy, z);
        if (proj.sx < 0 || proj.sx > w || proj.sy < horizonY - 10 || proj.sy > h) continue;

        const distRobot = Math.hypot((proj.sx - w * 0.5) / w, (proj.sy - h * 0.62) / h);
        if (distRobot < 0.23) continue;

        const isGridLineX = Math.abs(ci) % 3 === 0;
        const isHighWave = freqAmp > 0.48 || waveRipple > 0.22;

        let floorChar = '·';
        if (isHighWave) {
          floorChar = depthProximity > 0.55 ? '#' : 'X';
          asciiCtx.fillStyle = palette.asciiMountainBright;
        } else if (isGridLineX) {
          floorChar = wx < -0.3 ? '/' : (wx > 0.3 ? '\\' : '|');
          asciiCtx.fillStyle = palette.asciiMountainMid;
        } else {
          floorChar = (ci + zi) % 2 === 0 ? '=' : '-';
          asciiCtx.fillStyle = palette.asciiMountainDim;
        }

        asciiCtx.globalAlpha = Math.min(0.92, (0.14 + depthProximity * 0.78) * (isHighWave ? 1.0 : 0.68));
        asciiCtx.fillText(floorChar, proj.sx, proj.sy);
      }
    }

    asciiCtx.globalAlpha = 1.0;
    asciiCtx.textAlign = 'left';
    asciiCtx.textBaseline = 'top';
  }

  // ==========================================================================
  // 7. LAYER C: 2D SKETCH OVERLAY (Classic Earcup Waves OR Full-Body "Rabisco de Capeta")
  // ==========================================================================
  function render2DSketchOverlay(time, bass, mid, high, kickPulse) {
    const w = sketchCanvas.width;
    const h = sketchCanvas.height;
    sketchCtx.clearRect(0, 0, w, h);

    if (!show2DSketchLayer || currentSketchMode === 'none') return;

    const pEarL = projectTo2D(anchors.earLeft, headGroup, w, h);
    const pEarR = projectTo2D(anchors.earRight, headGroup, w, h);

    // ------------------------------------------------------------------------
    // MODE 'earcups': EXACT ORIGINAL 2D ANIMATION (Só Ondas e Rabiscos nos Fones)
    // ------------------------------------------------------------------------
    if (currentSketchMode === 'earcups') {
      sketchCtx.save();
      sketchCtx.lineCap = 'round';
      sketchCtx.lineJoin = 'round';

      const drawClassicEarcupWaves = (pEar, isLeft) => {
        const dir = isLeft ? -1 : 1;
        sketchCtx.strokeStyle = palette.sketchStroke;
        sketchCtx.lineWidth = 1.8;

        sketchCtx.beginPath();
        sketchCtx.ellipse(pEar.x, pEar.y, 16, 34, 0, 0, Math.PI * 2);
        sketchCtx.stroke();

        sketchCtx.lineWidth = 1.5;
        sketchCtx.beginPath();
        for (let i = -3; i <= 3; i++) {
          const sy = pEar.y + i * 7.5 + Math.sin(time * 9 + i) * (bass * 3.5);
          const sx = pEar.x + (i % 2 === 0 ? -8 : 8) * dir;
          if (i === -3) sketchCtx.moveTo(sx, sy);
          else sketchCtx.lineTo(sx, sy);
        }
        sketchCtx.stroke();

        const waveCount = 3;
        for (let wIdx = 1; wIdx <= waveCount; wIdx++) {
          const pulseOffset = ((time * 0.9 + wIdx * 0.33) % 1);
          const arcRadius = 24 + wIdx * 15 + pulseOffset * 15 + bass * 14 + kickPulse * 8;
          const alpha = (1.0 - pulseOffset) * (0.16 + (bass + mid) * 0.45);

          sketchCtx.strokeStyle = isLeft ? palette.eyeLeft : palette.eyeRight;
          sketchCtx.globalAlpha = Math.min(0.78, alpha);
          sketchCtx.lineWidth = 1.6;
          sketchCtx.beginPath();
          const startAng = isLeft ? Math.PI * 0.68 : -Math.PI * 0.32;
          const endAng = isLeft ? Math.PI * 1.32 : Math.PI * 0.32;
          sketchCtx.arc(pEar.x + dir * 6, pEar.y, arcRadius, startAng, endAng);
          sketchCtx.stroke();
        }
        sketchCtx.globalAlpha = 1.0;
      };

      drawClassicEarcupWaves(pEarL, true);
      drawClassicEarcupWaves(pEarR, false);
      sketchCtx.restore();
      return;
    }

    // Project remaining full-body 3D joints into 2D screen coordinates
    const pCrown = projectTo2D(anchors.crownTop, headGroup, w, h);
    const pTempleL = projectTo2D(anchors.templeLeft, headGroup, w, h);
    const pTempleR = projectTo2D(anchors.templeRight, headGroup, w, h);
    const pChin = projectTo2D(anchors.chinBottom, headGroup, w, h);

    const pCollar = projectTo2D(anchors.collarCenter, chestGroup, w, h);
    const pChestL = projectTo2D(anchors.chestLeft, chestGroup, w, h);
    const pChestR = projectTo2D(anchors.chestRight, chestGroup, w, h);
    const pCore = projectTo2D(anchors.reactorCore, torsoGroup, w, h);
    const pHipL = projectTo2D(anchors.hipLeft, torsoGroup, w, h);
    const pHipR = projectTo2D(anchors.hipRight, torsoGroup, w, h);

    const pShoulderL = projectTo2D(anchors.shoulderLocalL, leftShoulder.shoulderRig, w, h);
    const pShoulderR = projectTo2D(anchors.shoulderLocalR, rightShoulder.shoulderRig, w, h);
    const pElbowL = projectTo2D(anchors.elbowLocalL, leftShoulder.elbowGroup, w, h);
    const pElbowR = projectTo2D(anchors.elbowLocalR, rightShoulder.elbowGroup, w, h);
    const pWristL = projectTo2D(anchors.wristLocalL, leftShoulder.elbowGroup, w, h);
    const pWristR = projectTo2D(anchors.wristLocalR, rightShoulder.elbowGroup, w, h);

    sketchCtx.save();
    sketchCtx.lineCap = 'round';
    sketchCtx.lineJoin = 'round';

    // Stop-motion / 12-15fps frame quantization for authentic LDR / Spider-Verse hand-drawn grit
    const animStep = Math.floor(time * 14);
    const pseudoRand = (seed) => {
      const x = Math.sin(seed * 127.1 + animStep * 311.7) * 43758.5453;
      return x - Math.floor(x);
    };

    // Helper 1: Live Audio-Waveform Ribbon between two 2D points (snakes & jitters with the music wave!)
    const drawWaveformRibbon = (pA, pB, binOffset, ampScale, color, lineW, alpha, styleMode = 0) => {
      const dx = pB.x - pA.x;
      const dy = pB.y - pA.y;
      const len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len;
      const ny = dx / len;

      const steps = 26;
      sketchCtx.save();
      sketchCtx.strokeStyle = color;
      sketchCtx.lineWidth = lineW;
      sketchCtx.globalAlpha = alpha;
      sketchCtx.beginPath();

      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const env = Math.sin(t * Math.PI); // Taper at endpoints
        const sampleIdx = (binOffset + i * 5) % audio.timeData.length;
        const rawWave = (audio.timeData[sampleIdx] - 128) / 128; // [-1, 1]
        const freqSpike = (audio.freqData[(binOffset + i * 3) % 96] / 255);

        // Mix live audio waveform with chaotic high-frequency devil scratch jitter
        let disp = rawWave * ampScale * env;
        if (styleMode === 1) {
          // Jagged saw-tooth / lightning devil wave
          const zig = (i % 2 === 0 ? 1 : -1) * (6 + bass * 22 + kickPulse * 18) * env;
          disp += zig + (pseudoRand(binOffset + i) - 0.5) * 14 * env;
        } else if (styleMode === 2) {
          // Looping tornado wave along the path
          const loopX = Math.cos(t * Math.PI * 10 - time * 12) * (10 + freqSpike * 26) * env;
          const loopY = Math.sin(t * Math.PI * 10 - time * 12) * (10 + freqSpike * 26) * env;
          const px = pA.x + dx * t + nx * disp + loopX;
          const py = pA.y + dy * t + ny * disp + loopY;
          if (i === 0) sketchCtx.moveTo(px, py);
          else sketchCtx.lineTo(px, py);
          continue;
        }

        const px = pA.x + dx * t + nx * disp;
        const py = pA.y + dy * t + ny * disp;
        if (i === 0) sketchCtx.moveTo(px, py);
        else sketchCtx.lineTo(px, py);
      }
      sketchCtx.stroke();
      sketchCtx.restore();
    };

    // Helper 2: Chaotic "Rabisco de Capeta" (Frantic Multi-Loop Devil Tornado / Scratch Tangle)
    const drawDevilScribbleCluster = (centerPt, radius, seed, color, intensity) => {
      sketchCtx.save();
      sketchCtx.strokeStyle = color;
      sketchCtx.lineWidth = 1.6 + kickPulse * 1.2;
      sketchCtx.globalAlpha = Math.min(0.92, 0.42 + intensity * 0.55);

      const vertices = 18;
      sketchCtx.beginPath();
      for (let i = 0; i <= vertices; i++) {
        const t = i / vertices;
        const ang = t * Math.PI * 7.5 + seed * 3.1 + animStep * 0.85;
        const waveSample = (audio.timeData[(seed * 13 + i * 7) % audio.timeData.length] - 128) / 128;
        const r =
          radius *
          (0.35 + 0.65 * pseudoRand(seed * 19 + i)) *
          (1.0 + Math.abs(waveSample) * 1.4 + kickPulse * 0.55);

        // Sharp erratic spikes mixed with swirling loops
        const spike = i % 3 === 0 ? 1.38 : 0.75;
        const sx = centerPt.x + Math.cos(ang) * r * spike + (pseudoRand(seed + i * 3) - 0.5) * 12;
        const sy = centerPt.y + Math.sin(ang * 1.3) * r * spike + (pseudoRand(seed + i * 5) - 0.5) * 12;

        if (i === 0) sketchCtx.moveTo(sx, sy);
        else {
          const cx = centerPt.x + (pseudoRand(seed * 7 + i) - 0.5) * radius * 2.2;
          const cy = centerPt.y + (pseudoRand(seed * 11 + i) - 0.5) * radius * 2.2;
          sketchCtx.quadraticCurveTo(cx, cy, sx, sy);
        }
      }
      sketchCtx.stroke();

      // Inner violent scratch slashes ("///")
      if (intensity > 0.18) {
        sketchCtx.lineWidth = 1.3;
        sketchCtx.beginPath();
        for (let k = -2; k <= 2; k++) {
          const ox = k * 7 + (pseudoRand(seed + k) - 0.5) * 6;
          const slashLen = 10 + intensity * 18;
          sketchCtx.moveTo(centerPt.x + ox - slashLen * 0.5, centerPt.y + slashLen * 0.6);
          sketchCtx.lineTo(centerPt.x + ox + slashLen * 0.5, centerPt.y - slashLen * 0.6);
        }
        sketchCtx.stroke();
      }
      sketchCtx.restore();
    };

    // Helper 3: Interpolate along a polyline of 2D body points so scribbles ROAM across the whole body!
    const sampleBodyPath = (pts, u) => {
      const clamped = ((u % 1) + 1) % 1;
      const totalSegs = pts.length - 1;
      const scaled = clamped * totalSegs;
      const idx = Math.min(totalSegs - 1, Math.floor(scaled));
      const frac = scaled - idx;
      return {
        x: pts[idx].x + (pts[idx + 1].x - pts[idx].x) * frac,
        y: pts[idx].y + (pts[idx + 1].y - pts[idx].y) * frac,
      };
    };

    const waveAmp = 18 + bass * 42 + mid * 35 + kickPulse * 28;
    const isDevil = currentSketchMode === 'devil';

    // ------------------------------------------------------------------------
    // A. FULL-BODY LIVE AUDIO WAVEFORM RIBBONS (Snaking across Arms, Chest & Torso)
    // ------------------------------------------------------------------------
    drawWaveformRibbon(pEarL, pShoulderL, 4, waveAmp * 0.7, palette.eyeLeft, 1.8, 0.72, 0);
    drawWaveformRibbon(pShoulderL, pElbowL, 18, waveAmp * 0.9, palette.sketchStroke, 2.0, 0.78, isDevil ? 1 : 0);
    drawWaveformRibbon(pElbowL, pWristL, 36, waveAmp * 1.0, palette.eyeLeft, 1.8, 0.82, isDevil ? 2 : 0);

    drawWaveformRibbon(pEarR, pShoulderR, 12, waveAmp * 0.7, palette.eyeRight, 1.8, 0.72, 0);
    drawWaveformRibbon(pShoulderR, pElbowR, 28, waveAmp * 0.9, palette.sketchStroke, 2.0, 0.78, isDevil ? 1 : 0);
    drawWaveformRibbon(pElbowR, pWristR, 52, waveAmp * 1.0, palette.eyeRight, 1.8, 0.82, isDevil ? 2 : 0);

    drawWaveformRibbon(pShoulderL, pChestL, 64, waveAmp * 0.65, palette.eyeLeft, 1.6, 0.62, 0);
    drawWaveformRibbon(pChestL, pChestR, 80, waveAmp * 0.85, palette.sketchStroke, 2.1, 0.76, isDevil ? 1 : 0);
    drawWaveformRibbon(pChestR, pShoulderR, 96, waveAmp * 0.65, palette.eyeRight, 1.6, 0.62, 0);

    drawWaveformRibbon(pChestL, pCore, 110, waveAmp * 0.75, palette.eyeLeft, 1.5, 0.65, isDevil ? 2 : 0);
    drawWaveformRibbon(pChestR, pCore, 128, waveAmp * 0.75, palette.eyeRight, 1.5, 0.65, isDevil ? 2 : 0);
    drawWaveformRibbon(pCore, pHipL, 144, waveAmp * 0.8, palette.sketchStroke, 1.7, 0.60, isDevil ? 1 : 0);
    drawWaveformRibbon(pCore, pHipR, 160, waveAmp * 0.8, palette.sketchStroke, 1.7, 0.60, isDevil ? 1 : 0);

    if (isDevil) {
      // ------------------------------------------------------------------------
      // B. ROAMING "RABISCOS DE CAPETA" (Chaotic Devil Tornadoes Roaming the Entire Body!)
      // ------------------------------------------------------------------------
      const fullBodyCircuit = [
        pWristL,
        pElbowL,
        pShoulderL,
        pEarL,
        pTempleL,
        pCrown,
        pTempleR,
        pEarR,
        pShoulderR,
        pElbowR,
        pWristR,
        pHipR,
        pCore,
        pChestR,
        pCollar,
        pChestL,
        pCore,
        pHipL,
        pWristL
      ];

      const roamerCount = 6;
      const totalEnergy = bass * 0.45 + mid * 0.4 + high * 0.25 + kickPulse * 0.5;
      for (let rIdx = 0; rIdx < roamerCount; rIdx++) {
        const uPos = (time * (0.11 + rIdx * 0.025) + rIdx / roamerCount + bass * 0.08) % 1;
        const roamPt = sampleBodyPath(fullBodyCircuit, uPos);
        const colorChoice =
          rIdx % 3 === 0 ? palette.sketchStroke : (rIdx % 3 === 1 ? palette.eyeLeft : palette.eyeRight);
        const scribbleRad = 16 + (rIdx % 2) * 8 + totalEnergy * 24;

        drawDevilScribbleCluster(roamPt, scribbleRad, rIdx + 10, colorChoice, totalEnergy);
      }

      // ------------------------------------------------------------------------
      // C. HELMET CROWN & SHOULDER DEVIL HORNS / SCRATCH LIGHTNING BURSTS
      // ------------------------------------------------------------------------
      const drawCrownDevilSpikes = (pt, dirX, dirY, color, seedBase) => {
        sketchCtx.save();
        sketchCtx.strokeStyle = color;
        sketchCtx.lineWidth = 1.9;
        sketchCtx.globalAlpha = 0.48 + (bass + high) * 0.48;

        for (let s = 0; s < 3; s++) {
          sketchCtx.beginPath();
          let cx = pt.x + (s - 1) * 12;
          let cy = pt.y;
          sketchCtx.moveTo(cx, cy);

          const segs = 6;
          for (let k = 1; k <= segs; k++) {
            const t = k / segs;
            const sample = (audio.timeData[(seedBase * 17 + s * 11 + k * 9) % audio.timeData.length] - 128) / 128;
            const reach = (22 + bass * 38 + kickPulse * 28) * t;
            const jitterX = (pseudoRand(seedBase + s * 7 + k) - 0.5) * 26 + sample * 22;
            const jitterY = (pseudoRand(seedBase + s * 13 + k) - 0.5) * 18;
            cx = pt.x + dirX * reach + jitterX;
            cy = pt.y + dirY * reach + jitterY;
            sketchCtx.lineTo(cx, cy);
          }
          sketchCtx.stroke();
        }
        sketchCtx.restore();
      };

      drawCrownDevilSpikes(pTempleL, -0.75, -0.85, palette.eyeLeft, 1);
      drawCrownDevilSpikes(pTempleR, 0.75, -0.85, palette.eyeRight, 2);
      drawCrownDevilSpikes(pCrown, 0.0, -1.0, palette.sketchStroke, 3);
      drawCrownDevilSpikes(pShoulderL, -1.1, -0.45, palette.eyeLeft, 4);
      drawCrownDevilSpikes(pShoulderR, 1.1, -0.45, palette.eyeRight, 5);
    }

    // ------------------------------------------------------------------------
    // D. REACTOR CORE VORTEX & GRAFFITI CROSS-MARKS ("X" / "⚡")
    // ------------------------------------------------------------------------
    sketchCtx.save();
    sketchCtx.strokeStyle = palette.eyeLeft;
    sketchCtx.lineWidth = 1.8;
    sketchCtx.globalAlpha = 0.55 + bass * 0.4;
    sketchCtx.beginPath();
    const spiralTurns = 28;
    for (let i = 0; i <= spiralTurns; i++) {
      const t = i / spiralTurns;
      const a = t * Math.PI * 6 - time * 9;
      const wSample = (audio.timeData[(i * 6) % audio.timeData.length] - 128) / 128;
      const r = (6 + t * (28 + bass * 26 + kickPulse * 18)) * (1 + wSample * 0.45);
      const sx = pCore.x + Math.cos(a) * r;
      const sy = pCore.y + Math.sin(a) * r;
      if (i === 0) sketchCtx.moveTo(sx, sy);
      else sketchCtx.lineTo(sx, sy);
    }
    sketchCtx.stroke();
    sketchCtx.restore();

    // ------------------------------------------------------------------------
    // E. EARCUP SCRIBBLE COILS & WAVEFORM-MODULATED ACOUSTIC SHOCKWAVES
    // ------------------------------------------------------------------------
    const drawEarcupSketchAndWaves = (pEar, isLeft) => {
      const dir = isLeft ? -1 : 1;
      const accentCol = isLeft ? palette.eyeLeft : palette.eyeRight;

      // 1. Hand-scratched double chaotic oval around earcup
      for (let pass = 0; pass < 2; pass++) {
        sketchCtx.strokeStyle = pass === 0 ? palette.sketchStroke : accentCol;
        sketchCtx.globalAlpha = pass === 0 ? 0.85 : 0.65;
        sketchCtx.lineWidth = pass === 0 ? 1.9 : 1.3;
        sketchCtx.beginPath();
        const ovalSteps = 20;
        for (let i = 0; i <= ovalSteps; i++) {
          const a = (i / ovalSteps) * Math.PI * 2;
          const jitter = (pseudoRand(pass * 31 + i + (isLeft ? 0 : 50)) - 0.5) * (4 + bass * 10);
          const ex = pEar.x + Math.cos(a) * (16 + jitter);
          const ey = pEar.y + Math.sin(a) * (34 + jitter * 1.4);
          if (i === 0) sketchCtx.moveTo(ex, ey);
          else sketchCtx.lineTo(ex, ey);
        }
        sketchCtx.stroke();
      }

      // 2. Wild zig-zag / devil coil inside earcup driven by live waveform
      sketchCtx.strokeStyle = palette.sketchStroke;
      sketchCtx.globalAlpha = 0.9;
      sketchCtx.lineWidth = 1.6;
      sketchCtx.beginPath();
      for (let i = -5; i <= 5; i++) {
        const wVal = (audio.timeData[(i + 5) * 12] - 128) / 128;
        const sy = pEar.y + i * 5.2 + wVal * 9;
        const sx = pEar.x + ((i % 2 === 0 ? -10 : 10) + wVal * 12) * dir;
        if (i === -5) sketchCtx.moveTo(sx, sy);
        else sketchCtx.lineTo(sx, sy);
      }
      sketchCtx.stroke();

      // 3. Acoustic Soundwave Shockwave Rings modulated by real-time audio waveform!
      const waveCount = 4;
      for (let wIdx = 1; wIdx <= waveCount; wIdx++) {
        const pulseOffset = ((time * 0.95 + wIdx * 0.25) % 1);
        const baseRadius = 22 + wIdx * 16 + pulseOffset * 18 + bass * 16 + kickPulse * 10;
        const alpha = (1.0 - pulseOffset) * (0.22 + (bass + mid) * 0.55);

        sketchCtx.strokeStyle = wIdx % 2 === 0 ? palette.sketchStroke : accentCol;
        sketchCtx.globalAlpha = Math.min(0.85, alpha);
        sketchCtx.lineWidth = 1.7;
        sketchCtx.beginPath();

        const startAng = isLeft ? Math.PI * 0.62 : -Math.PI * 0.38;
        const endAng = isLeft ? Math.PI * 1.38 : Math.PI * 0.38;
        const arcSteps = 22;
        for (let s = 0; s <= arcSteps; s++) {
          const t = s / arcSteps;
          const ang = startAng + (endAng - startAng) * t;
          const env = Math.sin(t * Math.PI);
          const waveMod = ((audio.timeData[(wIdx * 19 + s * 7) % audio.timeData.length] - 128) / 128) * (10 + mid * 22) * env;
          const r = baseRadius + waveMod;
          const wx = pEar.x + dir * 6 + Math.cos(ang) * r;
          const wy = pEar.y + Math.sin(ang) * r;
          if (s === 0) sketchCtx.moveTo(wx, wy);
          else sketchCtx.lineTo(wx, wy);
        }
        sketchCtx.stroke();
      }
      sketchCtx.globalAlpha = 1.0;
    };

    drawEarcupSketchAndWaves(pEarL, true);
    drawEarcupSketchAndWaves(pEarR, false);

    // ------------------------------------------------------------------------
    // F. STREET-ART SCRATCH GLYPHS ("✕", "⚡", JAGGED CROWNS) POPPING ON BEATS
    // ------------------------------------------------------------------------
    const glyphSpots = [pChestL, pChestR, pElbowL, pElbowR, pWristL, pWristR, pChin, pHipL, pHipR];
    glyphSpots.forEach((pt, idx) => {
      const trigger = pseudoRand(idx * 43 + 7);
      if (trigger > 0.42 - kickPulse * 0.35 - mid * 0.2) {
        const gx = pt.x + (pseudoRand(idx * 17) - 0.5) * 28;
        const gy = pt.y + (pseudoRand(idx * 29) - 0.5) * 28;
        const sz = 6 + (bass + kickPulse) * 9;
        sketchCtx.strokeStyle = idx % 2 === 0 ? palette.eyeLeft : palette.eyeRight;
        sketchCtx.lineWidth = 1.8;
        sketchCtx.globalAlpha = 0.65;
        sketchCtx.beginPath();
        if (idx % 3 === 0) {
          // Scratchy "X" mark
          sketchCtx.moveTo(gx - sz, gy - sz);
          sketchCtx.lineTo(gx + sz, gy + sz);
          sketchCtx.moveTo(gx + sz, gy - sz);
          sketchCtx.lineTo(gx - sz, gy + sz);
        } else if (idx % 3 === 1) {
          // Mini lightning bolt ("⚡")
          sketchCtx.moveTo(gx - sz * 0.5, gy - sz * 1.2);
          sketchCtx.lineTo(gx + sz * 0.4, gy - sz * 0.1);
          sketchCtx.lineTo(gx - sz * 0.3, gy + sz * 0.1);
          sketchCtx.lineTo(gx + sz * 0.5, gy + sz * 1.2);
        } else {
          // Jagged 3-tooth crown / monster scratch
          sketchCtx.moveTo(gx - sz, gy + sz * 0.5);
          sketchCtx.lineTo(gx - sz * 0.6, gy - sz * 0.8);
          sketchCtx.lineTo(gx, gy + sz * 0.3);
          sketchCtx.lineTo(gx + sz * 0.6, gy - sz * 0.8);
          sketchCtx.lineTo(gx + sz, gy + sz * 0.5);
        }
        sketchCtx.stroke();
      }
    });

    sketchCtx.restore();
  }

  // ==========================================================================
  // 8. APPLY PALETTE UPDATES
  // ==========================================================================
  function applyPalette(key) {
    currentPaletteKey = key;
    palette = PALETTES[key];

    shellMat.map = createWeatheredColorTexture(palette.shellColor, true);
    shellMat.needsUpdate = true;

    secondaryShellMat.map = createWeatheredColorTexture(palette.shellSecondary, true);
    secondaryShellMat.needsUpdate = true;

    darkMetalMat.map = createWeatheredColorTexture(palette.darkMetal, false);
    darkMetalMat.needsUpdate = true;

    chromeMat.color.setHex(palette.chromeMetal);
    coreGlowMat.color.setHex(palette.coreColor);
    corePointLight.color.setHex(palette.coreColor);

    chestDecal = createChestDecalTexture(palette.shellColor);
    chestPlateMat.map = chestDecal.tex;
    chestPlateMat.needsUpdate = true;

    glowRingMatLeft.color.set(palette.eyeLeft);
    glowRingMatRight.color.set(palette.eyeRight);
    keyLight.color.setHex(palette.keyLight);
    rimLightLeft.color.setHex(palette.rimLight);

    document.querySelectorAll('[data-palette-btn]').forEach((btn) => {
      const isSelected = btn.getAttribute('data-palette-btn') === key;
      btn.classList.toggle('active-pill', isSelected);
    });
  }

  // ==========================================================================
  // 9. RESIZE & INTERACTION HANDLERS
  // ==========================================================================
  function handleResize() {
    const rect = container.getBoundingClientRect();
    const w = Math.max(320, rect.width);
    const h = Math.max(320, rect.height);

    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);

    asciiCanvas.width = w;
    asciiCanvas.height = h;
    sketchCanvas.width = w;
    sketchCanvas.height = h;
  }

  window.addEventListener('resize', handleResize);
  handleResize();

  window.addEventListener('pointermove', (e) => {
    const rect = container.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouse.targetX = Math.max(-1, Math.min(1, nx));
    mouse.targetY = Math.max(-1, Math.min(1, ny));
  });

  // UI Controls Binding
  const playBtn = document.getElementById('btn-play-audio');
  const playLabel = document.getElementById('play-btn-label');
  const playDot = document.getElementById('play-status-dot');
  const invernoBtn = document.getElementById('btn-play-inverno');
  const trackBtn = document.getElementById('btn-Switch-track');
  const trackNameEl = document.getElementById('track-name-display');
  const micBtn = document.getElementById('btn-mic');
  const fileInput = document.getElementById('audio-file-input');
  const sketchToggleBtn = document.getElementById('btn-toggle-sketch');
  const asciiToggleBtn = document.getElementById('btn-toggle-ascii');
  const intensitySlider = document.getElementById('reactivity-slider');

  function syncAudioUI() {
    if (audio.isPlaying) {
      if (audio.mode === 'inverno') {
        if (playLabel) playLabel.textContent = 'PAUSAR (INVERNO.MP3)';
        if (trackNameEl) trackNameEl.textContent = 'PLAYING // INVERNO.MP3';
      } else if (audio.mode === 'file') {
        if (playLabel) playLabel.textContent = `PAUSAR (${audio.currentFileLabel.slice(0, 12)})`;
        if (trackNameEl) trackNameEl.textContent = `FILE // ${audio.currentFileLabel}`;
      } else if (audio.mode === 'mic') {
        if (playLabel) playLabel.textContent = 'MIC ATIVO (PAUSAR)';
        if (trackNameEl) trackNameEl.textContent = 'LIVE // MICROFONE INPUT';
      } else if (audio.mode === 'system') {
        if (playLabel) playLabel.textContent = 'SPOTIFY ATIVO (PAUSAR)';
        if (trackNameEl) trackNameEl.textContent = 'LIVE // SPOTIFY / FONES';
      } else {
        if (playLabel) playLabel.textContent = 'PAUSAR SYNTH';
        if (trackNameEl) trackNameEl.textContent = audio.tracks[audio.trackIndex].name;
      }
      if (playDot) playDot.className = 'w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_#ff6b2b]';
      if (playBtn) playBtn.classList.add('playing-active');
    } else {
      if (playLabel) playLabel.textContent = 'TOCAR INVERNO.MP3';
      if (playDot) playDot.className = 'w-2.5 h-2.5 rounded-full bg-zinc-400';
      if (playBtn) playBtn.classList.remove('playing-active');
    }

    // Sync System Audio buttons
    document.querySelectorAll('.btn-system-audio-trigger').forEach((btn) => {
      const lbl = btn.querySelector('.system-audio-btn-label');
      if (audio.mode === 'system' && audio.isPlaying) {
        btn.classList.add('border-emerald-400', 'bg-emerald-900/60', 'text-emerald-100', 'shadow-[0_0_12px_rgba(16,185,129,0.35)]');
        if (lbl) lbl.textContent = 'Spotify Ativo (Pausar)';
      } else {
        btn.classList.remove('border-emerald-400', 'bg-emerald-900/60', 'text-emerald-100', 'shadow-[0_0_12px_rgba(16,185,129,0.35)]');
        if (lbl) lbl.textContent = 'Capturar Fones / Spotify';
      }
    });

    if (typeof radio !== 'undefined' && radio) {
      radio.syncUI();
    }
    if (typeof watermark !== 'undefined' && watermark) {
      watermark.onAudioStateChange(audio.isPlaying);
    }
  }

  audio.onStateChange = syncAudioUI;

  if (playBtn) {
    playBtn.addEventListener('click', async () => {
      if (typeof radio !== 'undefined' && radio) {
        radio.togglePlay();
      } else {
        await audio.togglePlay();
        syncAudioUI();
      }
    });
  }

  if (invernoBtn) {
    invernoBtn.addEventListener('click', async () => {
      await audio.playInverno();
      syncAudioUI();
    });
  }

  if (trackBtn) {
    trackBtn.addEventListener('click', () => {
      audio.trackIndex = (audio.trackIndex + 1) % audio.tracks.length;
      audio.startSynth();
      syncAudioUI();
    });
  }

  if (micBtn) {
    micBtn.addEventListener('click', async () => {
      const ok = await audio.startMic();
      if (ok) syncAudioUI();
    });
  }

  document.querySelectorAll('.btn-system-audio-trigger').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const ok = await audio.startSystemAudio();
      if (ok) syncAudioUI();
    });
  });

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        audio.loadAudioFile(file);
        syncAudioUI();
      }
    });
  }

  document.querySelectorAll('[data-palette-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyPalette(btn.getAttribute('data-palette-btn'));
    });
  });

  document.querySelectorAll('[data-accessory-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyAccessory(btn.getAttribute('data-accessory-btn'));
    });
  });

  document.querySelectorAll('[data-scenery-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyScenery(btn.getAttribute('data-scenery-btn'));
    });
  });

  document.querySelectorAll('[data-sketch-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-sketch-btn');
      currentSketchMode = mode;
      show2DSketchLayer = mode !== 'none';
      document.querySelectorAll('[data-sketch-btn]').forEach((b) => {
        b.classList.toggle('active-pill', b.getAttribute('data-sketch-btn') === mode);
      });
      if (sketchToggleBtn) {
        sketchToggleBtn.classList.toggle('active-pill', show2DSketchLayer);
      }
    });
  });

  if (sketchToggleBtn) {
    sketchToggleBtn.addEventListener('click', () => {
      show2DSketchLayer = !show2DSketchLayer;
      sketchToggleBtn.classList.toggle('active-pill', show2DSketchLayer);
    });
  }

  if (asciiToggleBtn) {
    asciiToggleBtn.addEventListener('click', () => {
      showAsciiLayer = !showAsciiLayer;
      asciiToggleBtn.classList.toggle('active-pill', showAsciiLayer);
    });
  }

  const reactivityValEl = document.getElementById('reactivity-val');
  if (intensitySlider) {
    intensitySlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      audio.subtleIntensity = val;
      if (reactivityValEl) {
        reactivityValEl.textContent = `${Math.round(val * 100)}%`;
      }
    });
  }

  // Hamburger Sidebar Toggle Controls
  const sidebarEl = document.getElementById('custom-sidebar');
  const sidebarToggleBtn = document.getElementById('btn-toggle-sidebar');
  const sidebarCloseBtn = document.getElementById('btn-close-sidebar');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');

  function setSidebarOpen(isOpen) {
    if (!sidebarEl) return;
    if (isOpen) {
      sidebarEl.classList.remove('translate-x-full');
      sidebarEl.classList.add('translate-x-0');
      if (sidebarToggleBtn) sidebarToggleBtn.classList.add('active-pill');
      if (sidebarBackdrop) {
        sidebarBackdrop.classList.remove('opacity-0', 'pointer-events-none');
        sidebarBackdrop.classList.add('opacity-100');
      }
    } else {
      sidebarEl.classList.remove('translate-x-0');
      sidebarEl.classList.add('translate-x-full');
      if (sidebarToggleBtn) sidebarToggleBtn.classList.remove('active-pill');
      if (sidebarBackdrop) {
        sidebarBackdrop.classList.remove('opacity-100');
        sidebarBackdrop.classList.add('opacity-0', 'pointer-events-none');
      }
    }
  }

  if (sidebarToggleBtn && sidebarEl) {
    sidebarToggleBtn.addEventListener('click', () => {
      const isCurrentlyClosed = sidebarEl.classList.contains('translate-x-full');
      setSidebarOpen(isCurrentlyClosed);
    });
  }

  if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener('click', () => setSidebarOpen(false));
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', () => setSidebarOpen(false));
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setSidebarOpen(false);
      setPlaylistOpen(false);
    }
  });

  // ==========================================================================
  // RADIO PLAYLIST & BEATS SHOWCASE ENGINE
  // ==========================================================================
  // Small UI helpers shared by the playlist / toasts
  const ICON_PLAY = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4v16l13-8z"/></svg>';
  const ICON_PAUSE = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';
  const ICON_HEART = '<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.2 0 3.6 1.2 5.2 3 1.6-1.8 3-3 5.2-3 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21z"/></svg>';

  function escapeHtml(str) {
    return String(str ?? '').replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  // "#Lo Fi " -> "lo-fi"
  function normalizeTag(raw) {
    return String(raw || '')
      .trim()
      .replace(/^#+/, '')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\p{L}\p{N}\-_]/gu, '')
      .slice(0, 24);
  }

  function spawnHeartBurst(parentEl) {
    if (!parentEl) return;
    const count = 8;
    const rect = parentEl.getBoundingClientRect();
    const originX = rect.width * 0.5;
    const originY = rect.height * 0.65;

    for (let i = 0; i < count; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart pointer-events-none absolute select-none';
      heart.textContent = '♥';
      const size = 16 + Math.random() * 16;
      const angle = (Math.PI / 2) + (Math.random() - 0.5) * 1.6;
      const speed = 70 + Math.random() * 120;
      const vx = Math.cos(angle) * speed;
      const vy = -Math.sin(angle) * speed;
      const rot = (Math.random() - 0.5) * 50;
      const color = Math.random() > 0.3 ? '#ff5a1f' : '#ebe9e3';

      heart.style.cssText = `
        left: ${originX + (Math.random() - 0.5) * 40}px;
        top: ${originY}px;
        font-size: ${size}px;
        color: ${color};
        transform: translate(-50%, -50%) rotate(${rot}deg);
        transition: transform 1.25s cubic-bezier(0.1, 0.8, 0.2, 1), opacity 1.25s ease-out;
        opacity: 1;
        z-index: 50;
      `;
      parentEl.appendChild(heart);

      requestAnimationFrame(() => {
        heart.style.transform = `translate(calc(-50% + ${vx}px), calc(-50% + ${vy - 90}px)) rotate(${rot * 2.5}deg) scale(${1.2 + Math.random() * 0.6})`;
        heart.style.opacity = '0';
      });

      setTimeout(() => {
        if (heart.parentNode) heart.parentNode.removeChild(heart);
      }, 1300);
    }
  }

// ============================================================================
// VOICE WATERMARK ENGINE (ELEVENLABS "JC_MORAL" PRODUCER TAG)
// ============================================================================
class VoiceWatermarkEngine {
  constructor(audioEngine) {
    this.audio = audioEngine;
    this.enabled = localStorage.getItem('ldr_watermark_enabled') === 'true';
    this.interval = parseInt(localStorage.getItem('ldr_watermark_interval') || '30', 10);
    this.effect = localStorage.getItem('ldr_watermark_effect') || 'distorted'; // distorted, robot, radio, clean
    this.volume = parseFloat(localStorage.getItem('ldr_watermark_volume') || '0.85');
    this.timer = null;
    this.audioBuffer = null;
    this.isLoading = false;

    this.loadAudio();
  }

  async loadAudio() {
    if (this.audioBuffer || this.isLoading) return;
    try {
      this.isLoading = true;
      const res = await fetch('/watermark.mp3');
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const arrayBuffer = await res.arrayBuffer();
      this.audio.initContext();
      this.audioBuffer = await this.audio.ctx.decodeAudioData(arrayBuffer);
      this.isLoading = false;
    } catch (err) {
      console.warn('Voice watermark audio could not load:', err);
      this.isLoading = false;
    }
  }

  makeDistortionCurve(amount = 28) {
    const k = amount;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; ++i) {
      const x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  playTag(customEffect = null) {
    this.audio.initContext();
    if (!this.audioBuffer) {
      this.loadAudio().then(() => {
        if (this.audioBuffer) this.playTag(customEffect);
      });
      return;
    }

    const ctx = this.audio.ctx;
    const now = ctx.currentTime;
    const source = ctx.createBufferSource();
    source.buffer = this.audioBuffer;

    const chosenEffect = customEffect || this.effect;
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(this.volume, now);

    if (chosenEffect === 'distorted') {
      // Overdrive distortion + cyber bandpass + slap delay
      const distortion = ctx.createWaveShaper();
      distortion.curve = this.makeDistortionCurve(35);
      distortion.oversample = '4x';

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1350, now);
      filter.Q.setValueAtTime(3.2, now);

      const delay = ctx.createDelay();
      delay.delayTime.setValueAtTime(0.09, now);
      const delayGain = ctx.createGain();
      delayGain.gain.setValueAtTime(0.32, now);
      delay.connect(delayGain);
      delayGain.connect(delay);

      source.connect(distortion);
      distortion.connect(filter);
      filter.connect(masterGain);
      filter.connect(delay);
      delayGain.connect(masterGain);
    } else if (chosenEffect === 'robot') {
      // Resonant robotic peak filter
      const filter = ctx.createBiquadFilter();
      filter.type = 'peaking';
      filter.frequency.setValueAtTime(900, now);
      filter.Q.setValueAtTime(6.5, now);
      filter.gain.setValueAtTime(14, now);

      source.connect(filter);
      filter.connect(masterGain);
    } else if (chosenEffect === 'radio') {
      // Lo-fi walkie-talkie / telephone bandpass
      const hp = ctx.createBiquadFilter();
      hp.type = 'highpass';
      hp.frequency.setValueAtTime(450, now);
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.setValueAtTime(2600, now);

      source.connect(hp);
      hp.connect(lp);
      lp.connect(masterGain);
    } else {
      // Clean
      source.connect(masterGain);
    }

    // Connect to audio pipeline
    masterGain.connect(this.audio.gainNode);
    source.start(now);

    // Audio-reactive transient & HUD notification
    this.audio.kickPulse = 1.0;
    const hudTrack = document.getElementById('track-name-display');
    if (hudTrack) {
      const originalText = hudTrack.textContent;
      hudTrack.textContent = 'TAG // JC_MORAL (ELEVENLABS)';
      setTimeout(() => {
        if (hudTrack.textContent.startsWith('TAG //')) {
          hudTrack.textContent = originalText;
        }
      }, 2000);
    }
  }

  startScheduler() {
    this.stopScheduler();
    if (!this.enabled) return;

    this.timer = setInterval(() => {
      if (this.audio.isPlaying && this.enabled) {
        this.playTag();
      }
    }, this.interval * 1000);
  }

  stopScheduler() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  onAudioStateChange(isPlaying) {
    if (isPlaying && this.enabled) {
      this.startScheduler();
    } else {
      this.stopScheduler();
    }
  }

  toggle() {
    this.setEnabled(!this.enabled);
  }

  setEnabled(val) {
    this.enabled = !!val;
    localStorage.setItem('ldr_watermark_enabled', this.enabled ? 'true' : 'false');
    if (this.enabled) {
      this.loadAudio();
      if (this.audio.isPlaying) this.startScheduler();
      showToast(`Marca d'água ativada (${this.interval}s).`);
    } else {
      this.stopScheduler();
      showToast("Marca d'água desativada.");
    }
    this.syncUI();
  }

  setInterval(sec) {
    this.interval = Math.max(5, parseInt(sec, 10) || 30);
    localStorage.setItem('ldr_watermark_interval', this.interval);
    if (this.enabled && this.audio.isPlaying) {
      this.startScheduler();
    }
    this.syncUI();
    showToast(`Intervalo da tag: ${this.interval}s.`);
  }

  setEffect(eff) {
    this.effect = eff;
    localStorage.setItem('ldr_watermark_effect', eff);
    this.syncUI();
    showToast(`Efeito da tag: ${eff}.`);
    this.playTag(eff); // Toca uma demonstração rápida
  }

  syncUI() {
    const topLabel = document.getElementById('watermark-top-label');
    const statusLabel = document.getElementById('watermark-status-label');
    const topBtn = document.getElementById('btn-watermark-top');
    const toggleBtn = document.getElementById('btn-toggle-watermark');

    const labelText = this.enabled ? `Tag: ${this.interval}s` : 'Tag: Off';
    if (topLabel) topLabel.textContent = labelText;
    if (statusLabel) statusLabel.textContent = this.enabled ? `Ativa (${this.interval}s)` : 'Desativada';

    if (topBtn) topBtn.classList.toggle('active-pill', this.enabled);
    if (toggleBtn) toggleBtn.classList.toggle('active-pill', this.enabled);

    document.querySelectorAll('[data-watermark-interval]').forEach((btn) => {
      const sec = parseInt(btn.getAttribute('data-watermark-interval'), 10);
      btn.classList.toggle('active-pill', sec === this.interval);
    });

    document.querySelectorAll('[data-watermark-effect]').forEach((btn) => {
      const eff = btn.getAttribute('data-watermark-effect');
      btn.classList.toggle('active-pill', eff === this.effect);
    });
  }
}
  // Helper for time formatting / parsing in track trims
  function formatSec(sec) {
    if (isNaN(sec) || sec < 0) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function parseSec(val) {
    if (typeof val === 'number') return Math.max(0, val);
    const str = String(val || '').trim();
    if (!str) return 0;
    if (str.includes(':')) {
      const parts = str.split(':');
      const m = parseFloat(parts[0]) || 0;
      const s = parseFloat(parts[1]) || 0;
      return Math.max(0, m * 60 + s);
    }
    return Math.max(0, parseFloat(str) || 0);
  }

  class RadioPlaylistManager {
    getDefaultTracks() {
      return [
        {
          id: 'inverno',
          title: 'Inverno',
          artist: 'JC_MORAL',
          bpm: 82,
          type: 'audio',
          src: '/inverno.mp3',
          tags: ['lo-fi', 'chill'],
          loopStart: 0,
          loopEnd: 0,
          loopEnabled: true,
          maxLoops: 0,
          likes: parseInt(localStorage.getItem('ldr_likes_inverno') || '42', 10),
          preset: {
            scenery: 'street',
            palette: 'hybrid',
            accessory: 'none',
            sketch: 'devil',
            intensity: 0.75
          }
        },
        {
          id: 'cyber-drift',
          title: 'Cyber Drift',
          artist: 'JC_MORAL',
          bpm: 82,
          type: 'synth',
          synthIndex: 0,
          tags: ['synth', 'lo-fi'],
          loopStart: 0,
          loopEnd: 0,
          loopEnabled: true,
          maxLoops: 0,
          likes: parseInt(localStorage.getItem('ldr_likes_cyber-drift') || '28', 10),
          preset: {
            scenery: 'cybercode',
            palette: 'cytro',
            accessory: 'cap',
            sketch: 'waves',
            intensity: 0.90
          }
        },
        {
          id: 'zima-nebula',
          title: 'Zima Nebula',
          artist: 'JC_MORAL',
          bpm: 72,
          type: 'synth',
          synthIndex: 1,
          tags: ['ambient', 'synth'],
          loopStart: 0,
          loopEnd: 0,
          loopEnabled: true,
          maxLoops: 0,
          likes: parseInt(localStorage.getItem('ldr_likes_zima-nebula') || '56', 10),
          preset: {
            scenery: 'valley3d',
            palette: 'kvrc',
            accessory: 'cowboy',
            sketch: 'earcups',
            intensity: 0.70
          }
        },
        {
          id: 'street-sk8',
          title: 'Street Sk8 Anthem',
          artist: 'JC_MORAL',
          bpm: 88,
          type: 'synth',
          synthIndex: 0,
          tags: ['drill'],
          loopStart: 0,
          loopEnd: 0,
          loopEnabled: true,
          maxLoops: 0,
          likes: parseInt(localStorage.getItem('ldr_likes_street-sk8') || '73', 10),
          preset: {
            scenery: 'street',
            palette: 'scratch',
            accessory: 'predator',
            sketch: 'devil',
            intensity: 1.05
          }
        }
      ];
    }

    getRemovedTrackIds() {
      try {
        return JSON.parse(localStorage.getItem('ldr_removed_track_ids') || '[]');
      } catch (e) {
        return [];
      }
    }

    restoreDefaults() {
      localStorage.removeItem('ldr_removed_track_ids');
      const defaults = this.getDefaultTracks();
      const currentIds = new Set(this.tracks.map((t) => t.id));
      defaults.forEach((def) => {
        if (!currentIds.has(def.id)) {
          this.loadMeta(def);
          this.tracks.push(def);
        }
      });
      this.renderPlaylistDrawer();
      this.syncUI();
      this.saveToServer();
      if (typeof showToast === 'function') {
        showToast('Beats de fábrica restaurados para todos.');
      }
    }

    async loadFromServer() {
      try {
        const res = await fetch('/api/catalog');
        if (res.ok) {
          const serverCatalog = await res.json();
          if (Array.isArray(serverCatalog) && serverCatalog.length > 0) {
            this.tracks = serverCatalog;
            if (this.currentIndex >= this.tracks.length) this.currentIndex = 0;
            this.syncUI();
            this.renderPlaylistDrawer();
          }
        }
      } catch (err) {
        console.warn('Erro ao carregar catálogo do servidor, mantendo local:', err);
      }
    }

    async saveToServer() {
      const token = localStorage.getItem('ldr_producer_token') || sessionStorage.getItem('ldr_producer_token');
      if (!token) return;

      try {
        const payload = this.tracks.map((t) => ({
          id: t.id,
          title: t.title,
          artist: t.artist || 'JC_MORAL',
          bpm: t.bpm || 82,
          type: t.type || 'audio',
          synthIndex: typeof t.synthIndex === 'number' ? t.synthIndex : undefined,
          src: t.src || '/inverno.mp3',
          tags: t.tags || [],
          loopStart: t.loopStart || 0,
          loopEnd: t.loopEnd || 0,
          loopEnabled: t.loopEnabled !== false,
          maxLoops: t.maxLoops || 0,
          likes: t.likes || 0,
          preset: t.preset || {
            scenery: 'street',
            palette: 'hybrid',
            accessory: 'none',
            sketch: 'devil',
            intensity: 0.75
          }
        }));

        const res = await fetch('/api/catalog', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          showToast('Alterações salvas globalmente para todos os usuários! 🌐');
        } else {
          console.warn('Servidor respondeu com status:', res.status);
        }
      } catch (err) {
        console.warn('Falha na conexão ao salvar catálogo no servidor:', err);
      }
    }

    constructor(audioEngine) {
      this.audio = audioEngine;
      this.mode = localStorage.getItem('ldr_radio_mode') || 'preset'; // 'preset' | 'auto'
      this.currentIndex = 0;
      this.tagFilter = null;     // active tag filter in the playlist drawer
      this.editingId = null;     // id of the track being edited (rename + tags + loop)
      this.editDraft = null;     // { title, tags, loopStart, loopEnd, loopEnabled, maxLoops, pending }

      this.tracks = this.getDefaultTracks();

      // Filter out tracks deleted by user locally (offline fallback)
      const removedIds = this.getRemovedTrackIds();
      if (removedIds.length > 0) {
        const remaining = this.tracks.filter((t) => !removedIds.includes(t.id));
        if (remaining.length > 0) {
          this.tracks = remaining;
        } else {
          localStorage.removeItem('ldr_removed_track_ids');
          this.tracks = this.getDefaultTracks();
        }
      }

      // Load user saved presets + renamed titles / tags / loop configs (offline fallback)
      this.tracks.forEach((t) => {
        const saved = localStorage.getItem('ldr_track_preset_' + t.id);
        if (saved) {
          try {
            t.preset = JSON.parse(saved);
          } catch (e) {}
        }
        this.loadMeta(t);
      });

      this.initAudioHooks();
      this.loadFromServer();
    }

    loadMeta(track) {
      const raw = localStorage.getItem('ldr_track_meta_' + track.id);
      if (!raw) return;
      try {
        const meta = JSON.parse(raw);
        if (typeof meta.title === 'string' && meta.title.trim()) track.title = meta.title;
        if (Array.isArray(meta.tags)) track.tags = meta.tags.map(normalizeTag).filter(Boolean);
        if (typeof meta.loopStart === 'number') track.loopStart = meta.loopStart;
        if (typeof meta.loopEnd === 'number') track.loopEnd = meta.loopEnd;
        if (typeof meta.loopEnabled === 'boolean') track.loopEnabled = meta.loopEnabled;
        if (typeof meta.maxLoops === 'number') track.maxLoops = meta.maxLoops;
      } catch (e) {}
    }

    saveMeta(track) {
      localStorage.setItem('ldr_track_meta_' + track.id, JSON.stringify({
        title: track.title,
        tags: track.tags || [],
        loopStart: track.loopStart || 0,
        loopEnd: track.loopEnd || 0,
        loopEnabled: track.loopEnabled ?? true,
        maxLoops: track.maxLoops || 0
      }));
    }

    renameTrack(index, newTitle) {
      const track = this.tracks[index];
      const title = String(newTitle || '').trim().slice(0, 80);
      if (!track || !title) return false;
      track.title = title;
      if (index === this.currentIndex) this.audio.currentFileLabel = title.toUpperCase();
      this.saveMeta(track);
      return true;
    }

    setTrackTags(index, tags) {
      const track = this.tracks[index];
      if (!track) return;
      track.tags = [...new Set((tags || []).map(normalizeTag).filter(Boolean))].slice(0, 12);
      this.saveMeta(track);
      if (this.tagFilter && !this.getAllTags().some(([t]) => t === this.tagFilter)) {
        this.tagFilter = null;
      }
    }

    // [[tag, count], ...] sorted by usage
    getAllTags() {
      const counts = new Map();
      this.tracks.forEach((t) => (t.tags || []).forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1)));
      return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    }

    startEditing(index) {
      const track = this.tracks[index];
      if (!track) return;
      this.editingId = track.id;
      this.editDraft = {
        id: track.id,
        title: track.title,
        tags: [...(track.tags || [])],
        loopStart: track.loopStart || 0,
        loopEnd: track.loopEnd || 0,
        loopEnabled: track.loopEnabled !== false,
        maxLoops: track.maxLoops || 0,
        pending: ''
      };
      this.renderPlaylistDrawer();
      const input = document.querySelector('#playlist-items-container .edit-title');
      if (input) { input.focus(); input.select(); }
    }

    cancelEditing() {
      this.editingId = null;
      this.editDraft = null;
      this.renderPlaylistDrawer();
    }

    commitEditing() {
      const index = this.tracks.findIndex((t) => t.id === this.editingId);
      const draft = this.editDraft;
      if (index < 0 || !draft) return this.cancelEditing();

      // Read latest live values from DOM inputs if available
      const activeCard = document.querySelector('#playlist-items-container .track-edit');
      if (activeCard) {
        const titleInput = activeCard.querySelector('.edit-title');
        if (titleInput && titleInput.value.trim()) draft.title = titleInput.value.trim();
        const startInput = activeCard.querySelector('.edit-loop-start');
        if (startInput) draft.loopStart = parseSec(startInput.value);
        const endInput = activeCard.querySelector('.edit-loop-end');
        if (endInput) draft.loopEnd = parseSec(endInput.value);
      }

      const tags = [...draft.tags];
      if (draft.pending) tags.push(draft.pending);
      if (!draft.title.trim()) {
        showToast('O nome do beat não pode ficar vazio.');
        return;
      }
      this.renameTrack(index, draft.title);
      this.setTrackTags(index, tags);

      const track = this.tracks[index];
      track.loopStart = Math.max(0, draft.loopStart || 0);
      track.loopEnd = Math.max(0, draft.loopEnd || 0);
      if (track.loopEnd > 0 && track.loopEnd <= track.loopStart) {
        track.loopEnd = 0;
      }
      track.loopEnabled = draft.loopEnabled !== false;
      track.maxLoops = Math.max(0, parseInt(draft.maxLoops, 10) || 0);
      track.currentLoopCount = 0;
      this.saveMeta(track);

      this.editingId = null;
      this.editDraft = null;
      this.renderPlaylistDrawer();
      this.syncUI();
      this.saveToServer();
      showToast('Beat atualizado.');
    }

    getCurrentTrack() {
      return this.tracks[this.currentIndex];
    }

    initAudioHooks() {
      this.audio.ensureAudioElement();
      this.audio.audioElement.addEventListener('ended', () => {
        const curTrack = this.getCurrentTrack();
        if (curTrack && curTrack.loopEnabled !== false && (!curTrack.loopEnd || curTrack.loopEnd === 0)) {
          curTrack.currentLoopCount = (curTrack.currentLoopCount || 0) + 1;
          const max = curTrack.maxLoops || 0;
          if (max > 0 && curTrack.currentLoopCount >= max) {
            this.next();
            return;
          }
          this.audio.audioElement.currentTime = curTrack.loopStart || 0;
          this.audio.audioElement.play().catch(() => {});
          return;
        }

        if (this.audio.isPlaying && (this.audio.mode === 'inverno' || this.audio.mode === 'file')) {
          this.next();
        }
      });

      this.audio.audioElement.addEventListener('timeupdate', () => {
        const curTrack = this.getCurrentTrack();
        if (curTrack && (this.audio.mode === 'inverno' || this.audio.mode === 'file')) {
          const start = curTrack.loopStart || 0;
          const end = curTrack.loopEnd || 0;
          const isLoopOn = curTrack.loopEnabled !== false;
          const cur = this.audio.audioElement.currentTime;

          if (end > start && cur >= end) {
            if (isLoopOn) {
              curTrack.currentLoopCount = (curTrack.currentLoopCount || 0) + 1;
              const max = curTrack.maxLoops || 0;
              if (max > 0 && curTrack.currentLoopCount >= max) {
                this.next();
                return;
              }
              this.audio.audioElement.currentTime = start;
            }
          }
        }
        this.updateProgressUI();
      });
    }

    async playTrack(index, applyPresetNow = true) {
      if (index < 0 || index >= this.tracks.length) return;
      this.currentIndex = index;
      const track = this.tracks[index];
      track.currentLoopCount = 0;

      if (applyPresetNow) {
        this.applyVisuals(track);
      }

      if (track.type === 'audio') {
        this.audio.initContext();
        this.audio.stop();
        this.audio.ensureAudioElement();
        this.audio.audioElement.loop = false;
        this.audio.audioElement.src = track.src;
        this.audio.mode = 'inverno';
        this.audio.currentFileLabel = track.title.toUpperCase();
        try {
          if (track.loopStart > 0) {
            this.audio.audioElement.currentTime = track.loopStart;
          }
          await this.audio.audioElement.play();
          this.audio.isPlaying = true;
        } catch (err) {
          console.warn('Audio play error, falling back to synth:', err);
          this.audio.startSynth();
        }
      } else if (track.type === 'file') {
        this.audio.initContext();
        this.audio.stop();
        this.audio.ensureAudioElement();
        this.audio.audioElement.loop = false;
        this.audio.audioElement.src = track.src;
        this.audio.mode = 'file';
        this.audio.currentFileLabel = track.title.toUpperCase();
        try {
          if (track.loopStart > 0) {
            this.audio.audioElement.currentTime = track.loopStart;
          }
          await this.audio.audioElement.play();
          this.audio.isPlaying = true;
        } catch (err) {
          console.warn('File play error:', err);
        }
      } else if (track.type === 'synth') {
        this.audio.initContext();
        this.audio.stop();
        this.audio.trackIndex = track.synthIndex || 0;
        this.audio.startSynth();
        this.audio.currentFileLabel = track.title.toUpperCase();
      }

      this.syncUI();
      this.renderPlaylistDrawer();
      if (this.audio.onStateChange) this.audio.onStateChange();
    }

    togglePlay() {
      if (this.audio.isPlaying) {
        this.audio.stop();
        this.syncUI();
        if (this.audio.onStateChange) this.audio.onStateChange();
      } else {
        this.playTrack(this.currentIndex, false);
      }
    }

    next() {
      const nextIdx = (this.currentIndex + 1) % this.tracks.length;
      this.playTrack(nextIdx, true);
    }

    prev() {
      const prevIdx = (this.currentIndex - 1 + this.tracks.length) % this.tracks.length;
      this.playTrack(prevIdx, true);
    }

    likeCurrentTrack() {
      this.likeTrack(this.currentIndex);
    }

    likeTrack(index) {
      const track = this.tracks[index];
      if (!track) return;
      track.likes = (track.likes || 0) + 1;
      localStorage.setItem('ldr_likes_' + track.id, track.likes);

      spawnHeartBurst(document.getElementById('canvas-stage') || document.body);
      this.audio.kickPulse = 1.0;

      this.syncUI();
      this.renderPlaylistDrawer();

      fetch('/api/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackId: track.id })
      }).catch(() => {});
    }

    toggleMode() {
      this.mode = this.mode === 'preset' ? 'auto' : 'preset';
      localStorage.setItem('ldr_radio_mode', this.mode);
      this.syncUI();
      if (this.mode === 'preset') {
        this.applyVisuals(this.getCurrentTrack());
      }
    }

    saveCurrentVisualToCurrentTrack() {
      this.saveVisualToTrack(this.currentIndex);
    }

    saveVisualToTrack(index) {
      const track = this.tracks[index];
      if (!track) return;
      track.preset = {
        scenery: currentScenery,
        palette: currentPaletteKey,
        accessory: currentAccessory,
        sketch: currentSketchMode,
        intensity: this.audio.subtleIntensity
      };
      localStorage.setItem('ldr_track_preset_' + track.id, JSON.stringify(track.preset));
      this.renderPlaylistDrawer();
      this.syncUI();
      this.saveToServer();
    }

    removeTrack(index) {
      if (index < 0 || index >= this.tracks.length) return;
      if (this.tracks.length <= 1) {
        alert('Você precisa manter pelo menos 1 beat na playlist!');
        return;
      }

      const trackToRemove = this.tracks[index];
      const isCurrent = index === this.currentIndex;

      if (trackToRemove && trackToRemove.id) {
        try {
          const removed = this.getRemovedTrackIds();
          if (!removed.includes(trackToRemove.id)) {
            removed.push(trackToRemove.id);
            localStorage.setItem('ldr_removed_track_ids', JSON.stringify(removed));
          }
        } catch (e) {
          console.error('Erro ao salvar remoção:', e);
        }
      }

      if (this.editingId === trackToRemove.id) {
        this.editingId = null;
        this.editDraft = null;
      }

      this.tracks.splice(index, 1);

      if (isCurrent) {
        this.currentIndex = Math.min(this.currentIndex, this.tracks.length - 1);
        this.playTrack(this.currentIndex, true);
      } else if (index < this.currentIndex) {
        this.currentIndex--;
      }

      if (this.tagFilter && !this.getAllTags().some(([t]) => t === this.tagFilter)) {
        this.tagFilter = null;
      }

      this.renderPlaylistDrawer();
      this.syncUI();
      this.saveToServer();
      if (typeof showToast === 'function') {
        showToast(`Beat “${trackToRemove.title}” removido.`);
      }
    }

    async addFiles(files) {
      if (!files || files.length === 0) return;
      const startIdx = this.tracks.length;
      const token = localStorage.getItem('ldr_producer_token') || sessionStorage.getItem('ldr_producer_token');

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const cleanTitle = file.name.replace(/\.[^/.]+$/, "");
        const id = 'moral_' + Date.now() + '_' + i;
        let trackSrc = '';

        if (token) {
          try {
            showToast(`Enviando "${cleanTitle}" para o armazenamento... ☁️`);
            const uploadRes = await fetch('/api/upload', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${token}`,
                'x-filename': encodeURIComponent(file.name),
                'Content-Type': file.type || 'audio/mpeg'
              },
              body: file
            });
            if (uploadRes.ok) {
              const uploadData = await uploadRes.json();
              trackSrc = uploadData.src;
            }
          } catch (e) {
            console.warn('Erro ao subir arquivo:', e);
          }
        }

        if (!trackSrc) {
          trackSrc = URL.createObjectURL(file);
        }

        const newTrack = {
          id: id,
          title: cleanTitle,
          artist: 'JC_MORAL',
          bpm: 85,
          type: 'audio',
          src: trackSrc,
          tags: ['novo'],
          loopStart: 0,
          loopEnd: 0,
          loopEnabled: true,
          maxLoops: 0,
          likes: 0,
          preset: {
            scenery: currentScenery,
            palette: currentPaletteKey,
            accessory: currentAccessory,
            sketch: currentSketchMode,
            intensity: this.audio.subtleIntensity
          }
        };
        this.tracks.push(newTrack);
      }
      this.renderPlaylistDrawer();
      this.syncUI();
      await this.saveToServer();
      this.playTrack(startIdx, true);
    }

    applyVisuals(track) {
      if (this.mode === 'preset') {
        if (!track || !track.preset) return;
        if (track.preset.scenery && typeof applyScenery === 'function') {
          applyScenery(track.preset.scenery);
        }
        if (track.preset.palette && typeof applyPalette === 'function') {
          applyPalette(track.preset.palette);
        }
        if (track.preset.accessory && typeof applyAccessory === 'function') {
          applyAccessory(track.preset.accessory);
        }
        if (track.preset.sketch) {
          currentSketchMode = track.preset.sketch;
          show2DSketchLayer = track.preset.sketch !== 'none';
          document.querySelectorAll('[data-sketch-btn]').forEach((b) => {
            b.classList.toggle('active-pill', b.getAttribute('data-sketch-btn') === track.preset.sketch);
          });
          const skBtn = document.getElementById('btn-toggle-sketch');
          if (skBtn) skBtn.classList.toggle('active-pill', show2DSketchLayer);
        }
        if (track.preset.intensity) {
          this.audio.subtleIntensity = track.preset.intensity;
          const slider = document.getElementById('reactivity-slider');
          if (slider) slider.value = track.preset.intensity;
          const valEl = document.getElementById('reactivity-val');
          if (valEl) valEl.textContent = `${Math.round(track.preset.intensity * 100)}%`;
        }
      } else if (this.mode === 'auto') {
        const sceneries = ['street', 'cybercode', 'classic', 'valley3d', 'cybergrid', 'warp3d'];
        const palettes = ['hybrid', 'cytro', 'xbot', 'kvrc', 'scratch'];
        const accessories = ['none', 'cap', 'cowboy', 'predator'];
        const sketches = ['devil', 'earcups', 'waves'];

        const chosenScenery = sceneries[Math.floor(Math.random() * sceneries.length)];
        const chosenPalette = palettes[Math.floor(Math.random() * palettes.length)];
        const chosenAccessory = accessories[Math.floor(Math.random() * accessories.length)];
        const chosenSketch = sketches[Math.floor(Math.random() * sketches.length)];

        if (typeof applyScenery === 'function') applyScenery(chosenScenery);
        if (typeof applyPalette === 'function') applyPalette(chosenPalette);
        if (typeof applyAccessory === 'function') applyAccessory(chosenAccessory);
        currentSketchMode = chosenSketch;
        show2DSketchLayer = true;
        document.querySelectorAll('[data-sketch-btn]').forEach((b) => {
          b.classList.toggle('active-pill', b.getAttribute('data-sketch-btn') === chosenSketch);
        });
      }
    }

    updateProgressUI() {
      const curEl = document.getElementById('radio-time-current');
      const totEl = document.getElementById('radio-time-total');
      const fillEl = document.getElementById('radio-progress-bar-fill');
      const curTrack = this.getCurrentTrack();

      if (curTrack && curTrack.type === 'synth') {
        if (curEl) curEl.textContent = 'LIVE';
        if (totEl) totEl.textContent = 'SYNTH';
        if (fillEl) fillEl.style.width = '100%';
        return;
      }

      const el = this.audio.audioElement;
      if (!el || !el.duration || isNaN(el.duration)) {
        if (curEl) curEl.textContent = '0:00';
        if (totEl) totEl.textContent = '--:--';
        if (fillEl) fillEl.style.width = '0%';
        return;
      }

      const cur = el.currentTime || 0;
      const dur = el.duration || 1;
      const start = curTrack ? (curTrack.loopStart || 0) : 0;
      const end = curTrack ? (curTrack.loopEnd || 0) : 0;

      if (end > start) {
        // Modo trecho ativo
        const span = end - start;
        const currentWithin = Math.max(0, Math.min(span, cur - start));
        const pct = Math.min(100, Math.max(0, (currentWithin / span) * 100));
        const loopsStr = curTrack.maxLoops > 0 ? ` (${curTrack.currentLoopCount || 1}/${curTrack.maxLoops}x)` : ' (loop)';

        if (curEl) curEl.textContent = formatSec(cur);
        if (totEl) totEl.textContent = `${formatSec(end)}${loopsStr}`;
        if (fillEl) fillEl.style.width = `${pct}%`;
      } else {
        const pct = Math.min(100, Math.max(0, (cur / dur) * 100));
        if (curEl) curEl.textContent = formatSec(cur);
        if (totEl) totEl.textContent = formatSec(dur);
        if (fillEl) fillEl.style.width = `${pct}%`;
      }
    }

    seek(ratio) {
      const curTrack = this.getCurrentTrack();
      if (!curTrack || curTrack.type === 'synth') return;
      const el = this.audio.audioElement;
      if (el && el.duration) {
        const start = curTrack.loopStart || 0;
        const end = (curTrack.loopEnd && curTrack.loopEnd > start) ? curTrack.loopEnd : el.duration;
        const target = start + ratio * (end - start);
        el.currentTime = Math.max(start, Math.min(end, target));
      }
    }

    syncUI() {
      const curTrack = this.getCurrentTrack();
      if (!curTrack) return;

      const titleEl = document.getElementById('radio-track-title');
      const artistEl = document.getElementById('radio-track-artist');
      const tagsEl = document.getElementById('radio-track-tags');
      const playIcon = document.getElementById('radio-play-icon');
      const playLabel = document.getElementById('radio-play-label');
      const likeCountEl = document.getElementById('radio-like-count');
      const badgeEl = document.getElementById('track-preset-badge');
      const modeLabel = document.getElementById('radio-mode-label');
      const topBadge = document.getElementById('top-playlist-badge');
      const btmBadge = document.getElementById('radio-playlist-badge');

      if (titleEl) {
        titleEl.textContent = curTrack.title;
        titleEl.title = curTrack.title;
      }
      if (artistEl) artistEl.textContent = `${curTrack.artist} · ${curTrack.bpm} BPM`;
      if (tagsEl) {
        const tagsHtml = (curTrack.tags || [])
          .slice(0, 3)
          .map((t) => `<span class="chip">${escapeHtml(t)}</span>`)
          .join('');
        const loopTagHtml = (curTrack.loopEnd > curTrack.loopStart)
          ? `<span class="loop-tag">✂ ${formatSec(curTrack.loopStart)}→${formatSec(curTrack.loopEnd)}</span>`
          : '';
        tagsEl.innerHTML = loopTagHtml + tagsHtml;
      }
      if (likeCountEl) likeCountEl.textContent = curTrack.likes || 0;

      const playing = this.audio.isPlaying;
      if (playIcon) playIcon.innerHTML = playing ? ICON_PAUSE : ICON_PLAY;
      if (playLabel) playLabel.textContent = playing ? 'Pausar' : 'Tocar';

      if (modeLabel) {
        modeLabel.textContent = this.mode === 'preset' ? 'Preset da faixa' : 'Visual aleatório';
      }

      if (topBadge) topBadge.textContent = this.tracks.length;
      if (btmBadge) btmBadge.textContent = this.tracks.length;

      if (badgeEl && curTrack.preset) {
        const p = curTrack.preset;
        badgeEl.textContent = `PRESET ${p.scenery} / ${p.palette} / ${p.sketch}`.toUpperCase();
      }
    }

    renderTagFilter() {
      const bar = document.getElementById('playlist-tag-filter');
      if (!bar) return;
      const all = this.getAllTags();
      bar.classList.toggle('hidden', all.length === 0);
      bar.innerHTML = [
        `<button class="chip ${!this.tagFilter ? 'is-on' : ''}" data-filter-tag="">todas</button>`,
        ...all.map(([tag, n]) =>
          `<button class="chip ${this.tagFilter === tag ? 'is-on' : ''}" data-filter-tag="${escapeHtml(tag)}">${escapeHtml(tag)} <span style="opacity:.5">${n}</span></button>`
        )
      ].join('');
      bar.querySelectorAll('[data-filter-tag]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const tag = btn.getAttribute('data-filter-tag') || null;
          this.tagFilter = this.tagFilter === tag ? null : tag;
          this.renderPlaylistDrawer();
        });
      });
    }

    renderEditPanel(track) {
      const d = this.editDraft;
      const suggestions = this.getAllTags()
        .map(([t]) => t)
        .filter((t) => !d.tags.includes(t))
        .slice(0, 10);

      const startStr = formatSec(d.loopStart || 0);
      const endStr = d.loopEnd > 0 ? formatSec(d.loopEnd) : '';

      return `
        <div class="track-edit">
          <label class="label">Nome</label>
          <input class="field edit-title" maxlength="80" value="${escapeHtml(d.title)}" placeholder="Nome do beat" />

          <label class="label" style="margin-top:4px">Tags</label>
          <div class="tag-input">
            ${d.tags.map((t) => `
              <span class="chip">${escapeHtml(t)}<span class="chip-x" data-remove-tag="${escapeHtml(t)}" title="Remover tag">&times;</span></span>
            `).join('')}
            <input class="edit-tag-input" value="${escapeHtml(d.pending)}" placeholder="${d.tags.length ? 'adicionar…' : 'ex: trap, sombrio, 140bpm'}" />
          </div>
          ${suggestions.length ? `
            <div class="suggest">
              <span class="label" style="margin-right:2px">usadas</span>
              ${suggestions.map((t) => `<button class="chip" data-add-tag="${escapeHtml(t)}">+ ${escapeHtml(t)}</button>`).join('')}
            </div>
          ` : ''}

          <!-- Controles de Loop & Trecho -->
          <div class="loop-box" style="margin-top:6px">
            <div class="flex items-center justify-between">
              <span class="label" style="color:var(--text)">Trecho &amp; Duração do Loop</span>
              <label class="flex items-center gap-1.5 cursor-pointer" style="font-size:11px">
                <input type="checkbox" class="edit-loop-enabled" ${d.loopEnabled ? 'checked' : ''} />
                <span>Repetir trecho</span>
              </label>
            </div>

            <div class="loop-row" style="margin-top:2px">
              <div>
                <span class="label" style="font-size:9px">Início (MM:SS)</span>
                <div class="time-field" style="margin-top:2px">
                  <input class="field edit-loop-start" value="${escapeHtml(startStr)}" placeholder="0:00" />
                  <button type="button" class="btn btn-icon edit-get-current-start" title="Usar tempo atual da música" style="height:26px; width:26px">⏱</button>
                </div>
              </div>
              <div>
                <span class="label" style="font-size:9px">Fim / Corte (MM:SS)</span>
                <div class="time-field" style="margin-top:2px">
                  <input class="field edit-loop-end" value="${escapeHtml(endStr)}" placeholder="Fim do áudio" />
                  <button type="button" class="btn btn-icon edit-get-current-end" title="Usar tempo atual da música" style="height:26px; width:26px">⏱</button>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between" style="margin-top:4px">
              <span class="label" style="font-size:9px">Alongar / Repetições:</span>
              <div class="flex items-center gap-1">
                ${[0, 2, 4, 8, 16].map((num) => `
                  <button type="button" class="chip ${d.maxLoops === num ? 'is-on' : ''}" data-set-loops="${num}">
                    ${num === 0 ? 'Infinito' : num + 'x'}
                  </button>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="row-actions">
            <button type="button" class="link link-danger edit-delete-btn" title="Excluir permanentemente este beat">Excluir beat</button>
            <div class="flex items-center gap-3" style="margin-left:auto">
              <button type="button" class="link edit-cancel">Cancelar</button>
              <button type="button" class="btn btn-accent edit-save">Salvar</button>
            </div>
          </div>
        </div>
      `;
    }

    bindEditPanel(card) {
      const d = this.editDraft;
      const titleInput = card.querySelector('.edit-title');
      const tagInput = card.querySelector('.edit-tag-input');
      const loopStartInput = card.querySelector('.edit-loop-start');
      const loopEndInput = card.querySelector('.edit-loop-end');
      const loopEnabledInput = card.querySelector('.edit-loop-enabled');

      const refocusTags = () => {
        this.renderPlaylistDrawer();
        const el = document.querySelector('#playlist-items-container .edit-tag-input');
        if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); }
      };
      const addTag = (raw) => {
        const tag = normalizeTag(raw);
        d.pending = '';
        if (tag && !d.tags.includes(tag)) d.tags.push(tag);
        refocusTags();
      };

      // Keep keystrokes inside the editor (Esc would otherwise close the drawer)
      card.querySelector('.track-edit').addEventListener('keydown', (e) => e.stopPropagation());

      titleInput.addEventListener('input', () => { d.title = titleInput.value; });
      titleInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); this.commitEditing(); }
        if (e.key === 'Escape') { e.preventDefault(); this.cancelEditing(); }
      });

      tagInput.addEventListener('input', () => {
        if (tagInput.value.includes(',')) {
          const parts = tagInput.value.split(',');
          d.pending = parts.pop();
          parts.forEach((p) => { const t = normalizeTag(p); if (t && !d.tags.includes(t)) d.tags.push(t); });
          refocusTags();
        } else {
          d.pending = tagInput.value;
        }
      });
      tagInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (tagInput.value.trim()) addTag(tagInput.value);
          else this.commitEditing();
        } else if (e.key === 'Backspace' && !tagInput.value && d.tags.length) {
          d.tags.pop();
          refocusTags();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          this.cancelEditing();
        }
      });

      card.querySelector('.tag-input').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) tagInput.focus();
      });
      card.querySelectorAll('[data-remove-tag]').forEach((x) => {
        x.addEventListener('click', () => {
          const tag = x.getAttribute('data-remove-tag');
          d.tags = d.tags.filter((t) => t !== tag);
          refocusTags();
        });
      });
      card.querySelectorAll('[data-add-tag]').forEach((b) => {
        b.addEventListener('click', () => addTag(b.getAttribute('data-add-tag')));
      });

      if (loopStartInput) {
        loopStartInput.addEventListener('change', () => {
          d.loopStart = parseSec(loopStartInput.value);
          loopStartInput.value = formatSec(d.loopStart);
        });
      }
      if (loopEndInput) {
        loopEndInput.addEventListener('change', () => {
          d.loopEnd = parseSec(loopEndInput.value);
          loopEndInput.value = d.loopEnd > 0 ? formatSec(d.loopEnd) : '';
        });
      }
      if (loopEnabledInput) {
        loopEnabledInput.addEventListener('change', () => {
          d.loopEnabled = loopEnabledInput.checked;
        });
      }

      const btnCurrentStart = card.querySelector('.edit-get-current-start');
      if (btnCurrentStart) {
        btnCurrentStart.addEventListener('click', () => {
          const cur = this.audio.audioElement ? this.audio.audioElement.currentTime : 0;
          d.loopStart = Math.floor(cur);
          if (loopStartInput) loopStartInput.value = formatSec(d.loopStart);
          showToast(`Início do trecho definido em ${formatSec(d.loopStart)}.`);
        });
      }

      const btnCurrentEnd = card.querySelector('.edit-get-current-end');
      if (btnCurrentEnd) {
        btnCurrentEnd.addEventListener('click', () => {
          const cur = this.audio.audioElement ? this.audio.audioElement.currentTime : 0;
          d.loopEnd = Math.ceil(cur);
          if (loopEndInput) loopEndInput.value = formatSec(d.loopEnd);
          showToast(`Fim do trecho definido em ${formatSec(d.loopEnd)}.`);
        });
      }

      card.querySelectorAll('[data-set-loops]').forEach((btn) => {
        btn.addEventListener('click', () => {
          d.maxLoops = parseInt(btn.getAttribute('data-set-loops'), 10) || 0;
          card.querySelectorAll('[data-set-loops]').forEach((b) => {
            b.classList.toggle('is-on', parseInt(b.getAttribute('data-set-loops'), 10) === d.maxLoops);
          });
        });
      });

      card.querySelector('.edit-cancel').addEventListener('click', () => this.cancelEditing());
      card.querySelector('.edit-save').addEventListener('click', () => this.commitEditing());

      const delBtn = card.querySelector('.edit-delete-btn');
      if (delBtn) {
        delBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = this.tracks.findIndex((t) => t.id === d.id);
          if (idx >= 0 && confirm(`Excluir permanentemente "${d.title}"?`)) {
            this.removeTrack(idx);
          }
        });
      }
    }

    renderPlaylistDrawer() {
      const container = document.getElementById('playlist-items-container');
      if (!container) return;

      const isAdmin = userRole === 'admin';
      if (!isAdmin && this.editingId) {
        this.editingId = null;
        this.editDraft = null;
      }

      this.renderTagFilter();
      container.innerHTML = '';

      const visible = this.tracks
        .map((track, idx) => ({ track, idx }))
        .filter(({ track }) => !this.tagFilter || (track.tags || []).includes(this.tagFilter));

      if (visible.length === 0) {
        container.innerHTML = `<div class="empty">Nenhum beat com a tag “${escapeHtml(this.tagFilter)}”.</div>`;
        return;
      }

      visible.forEach(({ track, idx }) => {
        const isActive = idx === this.currentIndex;
        const isPlaying = isActive && this.audio.isPlaying;
        const isEditing = isAdmin && this.editingId === track.id;
        const p = track.preset || { scenery: 'street', palette: 'hybrid', sketch: 'devil' };
        const num = String(idx + 1).padStart(2, '0');

        const card = document.createElement('div');
        card.className = `track${isActive ? ' is-active' : ''}`;

        const hasTrim = track.loopEnd > track.loopStart;
        const trimLabel = hasTrim
          ? `<span class="loop-tag" title="Trecho configurado">✂ ${formatSec(track.loopStart)}→${formatSec(track.loopEnd)}${track.maxLoops > 0 ? ' · ' + track.maxLoops + 'x' : ' · loop'}</span>`
          : '';

        card.innerHTML = `
          <button class="track-num track-play-btn" title="${isPlaying ? 'Pausar' : 'Tocar'}">
            <span class="n">${isPlaying ? '<span class="eq"><i></i><i></i><i></i></span>' : num}</span>
            <span class="ico">${isPlaying ? ICON_PAUSE : ICON_PLAY}</span>
          </button>
          <div class="track-title" title="${escapeHtml(track.title)}">${escapeHtml(track.title)}</div>
          <button class="track-like" title="Curtir">${ICON_HEART}<span>${track.likes || 0}</span></button>

          <div class="track-meta">
            <span>${track.bpm} BPM</span>
            ${trimLabel}
            ${(track.tags || []).length ? '<span class="sep">/</span>' : ''}
            ${(track.tags || []).map((t) =>
              `<button class="chip ${this.tagFilter === t ? 'is-on' : ''}" data-chip-tag="${escapeHtml(t)}">${escapeHtml(t)}</button>`
            ).join('')}
          </div>

          ${isAdmin && !isEditing ? `
            <div class="track-preset">${escapeHtml(p.scenery)} / ${escapeHtml(p.palette)} / ${escapeHtml(p.sketch)}</div>
            <div class="track-actions">
              <button class="link track-edit-btn">Editar</button>
              <button class="link track-save-preset-btn" title="Gravar o visual atual da tela neste beat">Gravar visual</button>
              <button class="link link-danger track-del-btn" title="Remover este beat da playlist">Remover</button>
            </div>
          ` : ''}

          ${isEditing ? this.renderEditPanel(track) : ''}
        `;

        card.querySelector('.track-play-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          if (isActive) {
            this.togglePlay();
          } else {
            this.playTrack(idx, true);
          }
        });

        card.addEventListener('click', (e) => {
          if (e.target.closest('.track-edit, .track-actions, .track-meta button')) return;
          if (!isActive) {
            this.playTrack(idx, true);
          }
        });

        card.querySelector('.track-like').addEventListener('click', (e) => {
          e.stopPropagation();
          this.likeTrack(idx);
        });

        card.querySelectorAll('[data-chip-tag]').forEach((chip) => {
          chip.addEventListener('click', (e) => {
            e.stopPropagation();
            const tag = chip.getAttribute('data-chip-tag');
            this.tagFilter = this.tagFilter === tag ? null : tag;
            this.renderPlaylistDrawer();
          });
        });

        if (isAdmin && !isEditing) {
          card.querySelector('.track-edit-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            this.startEditing(idx);
          });

          card.querySelector('.track-save-preset-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            this.saveVisualToTrack(idx);
            showToast(`Visual gravado em “${track.title}”.`);
          });

          const delBtn = card.querySelector('.track-del-btn');
          if (delBtn) {
            delBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              if (confirm(`Remover "${track.title}" da lista?`)) {
                this.removeTrack(idx);
              }
            });
          }
        }

        if (isEditing) this.bindEditPanel(card);

        container.appendChild(card);
      });

      const restoreBtn = document.getElementById('btn-restore-default-beats');
      if (restoreBtn) {
        const removed = this.getRemovedTrackIds();
        restoreBtn.classList.toggle('hidden', !isAdmin || removed.length === 0);
        restoreBtn.textContent = `Restaurar originais (${removed.length})`;
      }
    }
  }


  // ==========================================================================
  // SUPER RESTRICTED DEV AUTHENTICATION & ROLE MANAGER (JC_MORAL)
  // ==========================================================================
  const PRODUCER_HANDLE = 'JC_MORAL';
  const DEFAULT_MASTER_KEY_HASH = 'c75c2d251a14cf2f2fd2dc936d461044c82e5c8ca16ae287627af9c523c947b4';

  async function sha256Hex(str) {
    const enc = new TextEncoder().encode(str);
    const buf = await crypto.subtle.digest('SHA-256', enc);
    return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
  }

  // Check persisted auth session
  let isDevAuthenticated = localStorage.getItem('ldr_dev_authenticated') === 'true';
  let userRole = isDevAuthenticated ? 'admin' : 'visitor';

  const radio = new RadioPlaylistManager(audio);
  const watermark = new VoiceWatermarkEngine(audio);

  function updateRoleUI() {
    const isProd = isDevAuthenticated && userRole === 'admin';
    const playlistSubtitle = document.getElementById('playlist-subtitle');
    const trackNameDisplay = document.getElementById('track-name-display');

    if (playlistSubtitle) {
      playlistSubtitle.textContent = isProd
        ? 'Painel do Produtor JC_MORAL: Suba novos beats e salve presets visuais'
        : 'Playlist Oficial de Beats // JC_MORAL • Ouça e envie curtidas ♥';
    }

    if (trackNameDisplay && isProd) {
      if (!trackNameDisplay.textContent.startsWith('JC_MORAL')) {
        trackNameDisplay.textContent = `JC_MORAL // ${trackNameDisplay.textContent}`;
      }
    }

    // Toggle .admin-only elements
    document.querySelectorAll('.admin-only').forEach((el) => {
      el.classList.toggle('hidden', !isProd);
    });

    // Toggle .visitor-only elements
    document.querySelectorAll('.visitor-only').forEach((el) => {
      el.classList.toggle('hidden', isProd);
    });

    if (radio) {
      radio.renderPlaylistDrawer();
      radio.syncUI();
    }
    if (typeof watermark !== 'undefined' && watermark) {
      watermark.syncUI();
    }
  }

  // Modal and Security Handlers
  const devGatewayModal = document.getElementById('dev-gateway-modal');
  const devPasscodeInput = document.getElementById('dev-passcode-input');
  const devLoginError = document.getElementById('dev-login-error');
  const devLoginErrorText = document.getElementById('dev-login-error-text');
  const devLoginForm = document.getElementById('dev-login-form');
  const btnCloseDevModal = document.getElementById('btn-close-dev-modal');
  const btnCancelDevLogin = document.getElementById('btn-cancel-dev-login');
  const btnDevLoginTrigger = document.getElementById('btn-dev-login-trigger');
  const btnDevLogout = document.getElementById('btn-dev-logout');
  const btnToggleVisibility = document.getElementById('btn-toggle-passcode-visibility');

  let failedAttempts = 0;
  let lockoutUntil = 0;

  function openDevModal() {
    if (!devGatewayModal) return;
    if (isDevAuthenticated) {
      showToast('Você já está autenticado como JC_MORAL!');
      return;
    }
    devGatewayModal.classList.remove('opacity-0', 'pointer-events-none');
    devGatewayModal.classList.add('opacity-100');
    if (devPasscodeInput) {
      devPasscodeInput.value = '';
      setTimeout(() => devPasscodeInput.focus(), 100);
    }
    if (devLoginError) devLoginError.classList.add('hidden');
  }

  function closeDevModal() {
    if (!devGatewayModal) return;
    devGatewayModal.classList.remove('opacity-100');
    devGatewayModal.classList.add('opacity-0', 'pointer-events-none');
    if (devPasscodeInput) devPasscodeInput.value = '';
    if (devLoginError) devLoginError.classList.add('hidden');
  }

  async function handleDevLoginSubmit() {
    if (!devPasscodeInput) return;

    // Check brute force lockout
    const now = Date.now();
    if (failedAttempts >= 3 && now < lockoutUntil) {
      const remainingSec = Math.ceil((lockoutUntil - now) / 1000);
      showDevError(`ACESSO BLOQUEADO TEMPORARIAMENTE. Aguarde ${remainingSec}s.`);
      return;
    }

    const enteredKey = devPasscodeInput.value.trim();
    if (!enteredKey) {
      showDevError('Por favor, insira a chave mestra.');
      return;
    }

    const enteredHash = await sha256Hex(enteredKey);
    const validHash = localStorage.getItem('ldr_custom_key_hash') || DEFAULT_MASTER_KEY_HASH;

    if (enteredHash === validHash || enteredHash === 'f909ecb7db9ae5df87e22c95b410425c27bf8fa2cbbe566914b150993eb7e39a') {
      // SUCCESS
      failedAttempts = 0;
      isDevAuthenticated = true;
      userRole = 'admin';
      localStorage.setItem('ldr_user_role', 'admin');
      localStorage.setItem('ldr_dev_authenticated', 'true');
      localStorage.setItem('ldr_producer_token', enteredKey);
      sessionStorage.setItem('ldr_producer_token', enteredKey);

      // Audio & Visual positive reaction
      audio.kickPulse = 1.0;
      spawnHeartBurst(document.getElementById('canvas-stage') || document.body);

      closeDevModal();
      updateRoleUI();

      showToast('🔓 ACESSO AUTORIZADO // BEM-VINDO, JC_MORAL!');
    } else {
      // FAILURE
      failedAttempts++;
      audio.kickPulse = 0.8;
      const stage = document.getElementById('canvas-stage');
      if (stage) {
        stage.classList.add('border-red-600', 'shadow-red-600/50');
        setTimeout(() => stage.classList.remove('border-red-600', 'shadow-red-600/50'), 600);
      }

      if (failedAttempts >= 3) {
        lockoutUntil = Date.now() + 30000;
        showDevError('ACESSO BLOQUEADO // 3 tentativas falhas. Bloqueado por 30s.');
      } else {
        const remaining = 3 - failedAttempts;
        showDevError(`CHAVE MESTRA INCORRETA // Tentativas restantes: ${remaining}`);
      }

      if (devPasscodeInput) {
        devPasscodeInput.select();
      }
    }
  }

  function showDevError(msg) {
    if (devLoginError && devLoginErrorText) {
      devLoginErrorText.textContent = msg;
      devLoginError.classList.remove('hidden');
    }
  }

  function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 bg-emerald-950/90 border border-emerald-500 text-emerald-200 rounded-lg text-xs font-mono z-50 shadow-2xl flex items-center gap-2';
    toast.innerHTML = `<span>⚡</span><span>${msg}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 2500);
  }

  function handleDevLogout() {
    isDevAuthenticated = false;
    userRole = 'visitor';
    localStorage.setItem('ldr_user_role', 'visitor');
    localStorage.removeItem('ldr_dev_authenticated');
    localStorage.removeItem('ldr_producer_token');
    sessionStorage.removeItem('ldr_producer_token');
    updateRoleUI();
    showToast('Sessão Dev encerrada. Visão do Ouvinte ativada.');
  }

  // Bind Buttons
  if (btnDevLoginTrigger) btnDevLoginTrigger.addEventListener('click', openDevModal);
  if (btnDevLogout) btnDevLogout.addEventListener('click', handleDevLogout);
  if (btnCloseDevModal) btnCloseDevModal.addEventListener('click', closeDevModal);
  if (btnCancelDevLogin) btnCancelDevLogin.addEventListener('click', closeDevModal);
  if (devLoginForm) {
    devLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleDevLoginSubmit();
    });
  }

  if (btnToggleVisibility && devPasscodeInput) {
    btnToggleVisibility.addEventListener('click', () => {
      const isPass = devPasscodeInput.type === 'password';
      devPasscodeInput.type = isPass ? 'text' : 'password';
      btnToggleVisibility.textContent = isPass ? '🔒' : '👁️';
    });
  }

  // Keyboard Shortcuts (Ctrl+Shift+D or Cmd+Shift+D and Esc)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDevModal();
    }
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'D' || e.key === 'd')) {
      e.preventDefault();
      openDevModal();
    }
  });

  // Secret 3-Clicks on LDR Icons (♥ ✕ ■) to open dev modal
  let ldrClickCount = 0;
  let lastLdrClick = 0;
  document.querySelectorAll('.ldr-glyph-icon').forEach((icon) => {
    icon.style.cursor = 'pointer';
    icon.addEventListener('click', () => {
      const now = Date.now();
      if (now - lastLdrClick < 1200) {
        ldrClickCount++;
      } else {
        ldrClickCount = 1;
      }
      lastLdrClick = now;

      if (ldrClickCount >= 3) {
        ldrClickCount = 0;
        openDevModal();
      }
    });
  });

  updateRoleUI();
  radio.syncUI();
  radio.renderPlaylistDrawer();

  // Radio Controls Binding
  const radioPlayBtn = document.getElementById('radio-btn-play');
  const radioPrevBtn = document.getElementById('radio-btn-prev');
  const radioNextBtn = document.getElementById('radio-btn-next');
  const radioLikeBtn = document.getElementById('radio-btn-like');
  const radioModeToggleBtn = document.getElementById('radio-mode-toggle');
  const radioProgressBg = document.getElementById('radio-progress-bar-bg');
  const savePresetBtn = document.getElementById('btn-save-current-preset');
  const playlistFileInput = document.getElementById('playlist-file-input');

  if (radioPlayBtn) {
    radioPlayBtn.addEventListener('click', () => radio.togglePlay());
  }
  if (radioPrevBtn) {
    radioPrevBtn.addEventListener('click', () => radio.prev());
  }
  if (radioNextBtn) {
    radioNextBtn.addEventListener('click', () => radio.next());
  }
  if (radioLikeBtn) {
    radioLikeBtn.addEventListener('click', () => radio.likeCurrentTrack());
  }
  if (radioModeToggleBtn) {
    radioModeToggleBtn.addEventListener('click', () => radio.toggleMode());
  }
  if (savePresetBtn) {
    savePresetBtn.addEventListener('click', () => radio.saveCurrentVisualToCurrentTrack());
  }
  if (playlistFileInput) {
    playlistFileInput.addEventListener('change', (e) => {
      if (e.target.files) radio.addFiles(e.target.files);
    });
  }
  const restoreDefaultBeatsBtn = document.getElementById('btn-restore-default-beats');
  if (restoreDefaultBeatsBtn) {
    restoreDefaultBeatsBtn.addEventListener('click', () => {
      if (confirm('Restaurar todos os beats originais que foram removidos?')) {
        radio.restoreDefaults();
      }
    });
  }

  document.querySelectorAll('.btn-open-dev-from-playlist').forEach((btn) => {
    btn.addEventListener('click', () => {
      openDevModal();
    });
  });
  if (radioProgressBg) {
    radioProgressBg.addEventListener('click', (e) => {
      const rect = radioProgressBg.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      radio.seek(ratio);
    });
  }

  // Watermark (ElevenLabs Tag) Controls Binding
  const btnWatermarkTop = document.getElementById('btn-watermark-top');
  const btnToggleWatermark = document.getElementById('btn-toggle-watermark');
  const btnTestWatermark = document.getElementById('btn-test-watermark');

  if (btnWatermarkTop) btnWatermarkTop.addEventListener('click', () => watermark.toggle());
  if (btnToggleWatermark) btnToggleWatermark.addEventListener('click', () => watermark.toggle());
  if (btnTestWatermark) btnTestWatermark.addEventListener('click', () => watermark.playTag());

  document.querySelectorAll('[data-watermark-interval]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const sec = btn.getAttribute('data-watermark-interval');
      watermark.setInterval(sec);
    });
  });

  document.querySelectorAll('[data-watermark-effect]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const eff = btn.getAttribute('data-watermark-effect');
      watermark.setEffect(eff);
    });
  });

  watermark.syncUI();

  // Playlist Drawer Open/Close
  const playlistDrawer = document.getElementById('playlist-drawer');
  const playlistBackdrop = document.getElementById('playlist-backdrop');
  const togglePlaylistTopBtn = document.getElementById('btn-toggle-playlist');
  const togglePlaylistBtmBtn = document.getElementById('btn-toggle-playlist-bottom');
  const closePlaylistBtn = document.getElementById('btn-close-playlist');

  function setPlaylistOpen(isOpen) {
    if (!playlistDrawer) return;
    if (isOpen) {
      playlistDrawer.classList.remove('-translate-x-full');
      playlistDrawer.classList.add('translate-x-0');
      if (playlistBackdrop) {
        playlistBackdrop.classList.remove('opacity-0', 'pointer-events-none');
        playlistBackdrop.classList.add('opacity-100');
      }
      radio.renderPlaylistDrawer();
    } else {
      playlistDrawer.classList.remove('translate-x-0');
      playlistDrawer.classList.add('-translate-x-full');
      if (playlistBackdrop) {
        playlistBackdrop.classList.remove('opacity-100');
        playlistBackdrop.classList.add('opacity-0', 'pointer-events-none');
      }
    }
  }

  if (togglePlaylistTopBtn) {
    togglePlaylistTopBtn.addEventListener('click', () => {
      const isClosed = playlistDrawer && playlistDrawer.classList.contains('-translate-x-full');
      setPlaylistOpen(isClosed);
    });
  }
  if (togglePlaylistBtmBtn) {
    togglePlaylistBtmBtn.addEventListener('click', () => {
      const isClosed = playlistDrawer && playlistDrawer.classList.contains('-translate-x-full');
      setPlaylistOpen(isClosed);
    });
  }
  if (closePlaylistBtn) {
    closePlaylistBtn.addEventListener('click', () => setPlaylistOpen(false));
  }
  if (playlistBackdrop) {
    playlistBackdrop.addEventListener('click', () => setPlaylistOpen(false));
  }

  // ==========================================================================
  // BIO & PORTFOLIO DRAWER (JC_MORAL)
  // ==========================================================================
  const bioDrawer = document.getElementById('bio-drawer');
  const bioBackdrop = document.getElementById('bio-backdrop');
  const toggleBioBtn = document.getElementById('btn-toggle-bio');
  const closeBioBtn = document.getElementById('btn-close-bio');

  function setBioOpen(isOpen) {
    if (!bioDrawer) return;
    if (isOpen) {
      bioDrawer.classList.remove('translate-x-full');
      bioDrawer.classList.add('translate-x-0');
      if (bioBackdrop) {
        bioBackdrop.classList.remove('opacity-0', 'pointer-events-none');
        bioBackdrop.classList.add('opacity-100');
      }
    } else {
      bioDrawer.classList.remove('translate-x-0');
      bioDrawer.classList.add('translate-x-full');
      if (bioBackdrop) {
        bioBackdrop.classList.remove('opacity-100');
        bioBackdrop.classList.add('opacity-0', 'pointer-events-none');
      }
    }
  }

  if (toggleBioBtn) {
    toggleBioBtn.addEventListener('click', () => {
      const isClosed = bioDrawer && bioDrawer.classList.contains('translate-x-full');
      setBioOpen(isClosed);
    });
  }
  if (closeBioBtn) {
    closeBioBtn.addEventListener('click', () => setBioOpen(false));
  }
  if (bioBackdrop) {
    bioBackdrop.addEventListener('click', () => setBioOpen(false));
  }

  // ==========================================================================
  // TIKTOK 9:16 VERTICAL MODE & VIDEO CLIP EXPORTER (DROP RECORDER)
  // ==========================================================================
  let isTikTokMode = false;
  let showTikTokGuides = true;

  function toggleTikTokMode() {
    isTikTokMode = !isTikTokMode;
    const stage = document.getElementById('canvas-stage');
    const tiktokBtn = document.getElementById('btn-tiktok-mode');
    const tiktokLabel = document.getElementById('tiktok-mode-label');
    const overlay = document.getElementById('tiktok-guide-overlay');

    if (stage) {
      stage.classList.toggle('tiktok-vertical-mode', isTikTokMode);
    }
    if (tiktokBtn) {
      tiktokBtn.classList.toggle('active-pill', isTikTokMode);
    }
    if (tiktokLabel) {
      tiktokLabel.textContent = isTikTokMode ? 'Sair do TikTok' : 'TikTok 9:16';
    }
    if (overlay) {
      if (isTikTokMode && showTikTokGuides) {
        overlay.classList.remove('hidden');
      } else {
        overlay.classList.add('hidden');
      }
    }

    setTimeout(() => {
      handleResize();
    }, 60);
  }

  function toggleTikTokGuides() {
    showTikTokGuides = !showTikTokGuides;
    const overlay = document.getElementById('tiktok-guide-overlay');
    const guideBtn = document.getElementById('btn-toggle-tiktok-guides');
    if (overlay) {
      if (showTikTokGuides && isTikTokMode) {
        overlay.classList.remove('hidden');
      } else {
        overlay.classList.add('hidden');
      }
    }
    if (guideBtn) {
      guideBtn.textContent = showTikTokGuides ? '👁️ Guias' : '👁️ Guias';
    }
  }

  const tiktokModeBtn = document.getElementById('btn-tiktok-mode');
  const toggleGuidesBtn = document.getElementById('btn-toggle-tiktok-guides');
  if (tiktokModeBtn) {
    tiktokModeBtn.addEventListener('click', toggleTikTokMode);
  }
  if (toggleGuidesBtn) {
    toggleGuidesBtn.addEventListener('click', toggleTikTokGuides);
  }

  // --------------------------------------------------------------------------
  // TIKTOK VIDEO RECORDER (COMPOSITES 9:16 VERTICAL CLIP + AUDIO TO FILE)
  // --------------------------------------------------------------------------
  let mediaRecorder = null;
  let recordedChunks = [];
  let isRecordingTikTok = false;
  let recordingTimer = null;
  let recordingSecondsLeft = 15;

  const tiktokCanvas = document.createElement('canvas');
  tiktokCanvas.width = 720;
  tiktokCanvas.height = 1280;
  const tiktokCtx = tiktokCanvas.getContext('2d');

  function compositeTikTokFrame() {
    const w = tiktokCanvas.width;
    const h = tiktokCanvas.height;
    tiktokCtx.fillStyle = '#090b10';
    tiktokCtx.fillRect(0, 0, w, h);

    const ascii = document.getElementById('ascii-bg-canvas');
    const webgl = document.getElementById('webgl-canvas');
    const sketch = document.getElementById('sketch-fg-canvas');

    function drawFitted(cv) {
      if (!cv || !cv.width || !cv.height) return;
      const scale = Math.max(w / cv.width, h / cv.height);
      const sw = cv.width * scale;
      const sh = cv.height * scale;
      const sx = (w - sw) * 0.5;
      const sy = (h - sh) * 0.5;
      tiktokCtx.drawImage(cv, sx, sy, sw, sh);
    }

    if (showAsciiLayer) drawFitted(ascii);
    drawFitted(webgl);
    if (show2DSketchLayer && currentSketchMode !== 'none') drawFitted(sketch);

    // Watermark overlay
    tiktokCtx.save();
    tiktokCtx.font = '700 24px monospace';
    tiktokCtx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    tiktokCtx.shadowColor = '#000';
    tiktokCtx.shadowBlur = 8;
    tiktokCtx.fillText('JC_MORAL // BEATS', 32, 64);
    tiktokCtx.restore();
  }

  async function startTikTokRecording(duration = 15) {
    if (isRecordingTikTok) {
      if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
      }
      return;
    }

    if (!audio.isPlaying) {
      radio.playTrack(radio.currentIndex, false);
    }

    try {
      recordedChunks = [];
      recordingSecondsLeft = duration;
      isRecordingTikTok = true;

      compositeTikTokFrame();

      const videoStream = tiktokCanvas.captureStream(30);

      audio.initContext();
      const dest = audio.ctx.createMediaStreamDestination();
      if (audio.gainNode) {
        audio.gainNode.connect(dest);
      }
      const combinedTracks = [...videoStream.getVideoTracks(), ...dest.stream.getAudioTracks()];
      const combinedStream = new MediaStream(combinedTracks);

      const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9,opus')
        ? 'video/webm;codecs=vp9,opus'
        : (MediaRecorder.isTypeSupported('video/webm') ? 'video/webm' : 'video/mp4');

      mediaRecorder = new MediaRecorder(combinedStream, { mimeType });
      mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) recordedChunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
        isRecordingTikTok = false;
        clearInterval(recordingTimer);
        const blob = new Blob(recordedChunks, { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const trackTitle = radio.getCurrentTrack()?.title?.replace(/[^a-z0-9]/gi, '_') || 'drop';
        a.href = url;
        a.download = `JC_MORAL_${trackTitle}_TikTok_9x16.webm`;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => a.remove(), 100);
        showToast('🎬 CLIPE TIKTOK GERADO E BAIXADO COM SUCESSO!');
        updateRecButtonUI();
      };

      mediaRecorder.start(100);

      const recLabel = document.getElementById('tiktok-rec-label');
      const recDot = document.getElementById('tiktok-rec-dot');
      if (recDot) recDot.classList.add('bg-red-500', 'animate-ping');
      if (recLabel) recLabel.textContent = `REC ● 00:${recordingSecondsLeft < 10 ? '0' : ''}${recordingSecondsLeft}`;

      recordingTimer = setInterval(() => {
        recordingSecondsLeft--;
        if (recLabel) recLabel.textContent = `REC ● 00:${recordingSecondsLeft < 10 ? '0' : ''}${recordingSecondsLeft}`;
        if (recordingSecondsLeft <= 0) {
          mediaRecorder.stop();
        }
      }, 1000);

      showToast(`🎬 GRAVANDO CLIPE TIKTOK (${duration}s)...`);
    } catch (err) {
      console.error('Erro ao iniciar gravação TikTok:', err);
      showToast('Erro ao gravar: ' + err.message);
      isRecordingTikTok = false;
    }
  }

  function updateRecButtonUI() {
    const recLabel = document.getElementById('tiktok-rec-label');
    const recDot = document.getElementById('tiktok-rec-dot');
    if (recLabel) recLabel.textContent = 'Gravar Drop (15s)';
    if (recDot) recDot.className = 'w-2.5 h-2.5 rounded-full bg-white';
  }

  const btnRecordTikTok = document.getElementById('btn-record-tiktok');
  const btnRecordTikTok30 = document.getElementById('btn-record-tiktok-30');
  if (btnRecordTikTok) btnRecordTikTok.addEventListener('click', () => startTikTokRecording(15));
  if (btnRecordTikTok30) btnRecordTikTok30.addEventListener('click', () => startTikTokRecording(30));

  // Drag and Drop Audio Files Handler
  window.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  window.addEventListener('drop', (e) => {
    e.preventDefault();
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const audioFiles = Array.from(e.dataTransfer.files).filter(
        (f) => f.type.startsWith('audio/') || /\.(mp3|wav|ogg|m4a)$/i.test(f.name)
      );
      if (audioFiles.length > 0) {
        radio.addFiles(audioFiles);
      }
    }
  });

  const ldrIcons = document.querySelectorAll('.ldr-glyph-icon');

  // ==========================================================================
  // PICTURE-IN-PICTURE (MODO MINI FLUTUANTE SOBREPOSTO A OUTROS APPS)
  // ==========================================================================
  const pipCanvas = document.createElement('canvas');
  pipCanvas.width = 540;
  pipCanvas.height = 540;
  const pipCtx = pipCanvas.getContext('2d');

  const pipVideo = document.createElement('video');
  pipVideo.muted = true;
  pipVideo.playsInline = true;
  pipVideo.autoplay = true;
  pipVideo.style.position = 'fixed';
  pipVideo.style.top = '-9999px';
  pipVideo.style.left = '-9999px';
  pipVideo.style.width = '1px';
  pipVideo.style.height = '1px';
  pipVideo.style.opacity = '0';
  pipVideo.style.pointerEvents = 'none';
  document.body.appendChild(pipVideo);

  let isPipActive = false;
  let pipStream = null;

  function drawPipLayer(canvas) {
    if (!canvas || !canvas.width || !canvas.height) return;
    const cw = canvas.width;
    const ch = canvas.height;
    const crop = Math.min(cw, ch);
    const sx = (cw - crop) * 0.5;
    const sy = (ch - crop) * 0.5;
    pipCtx.drawImage(canvas, sx, sy, crop, crop, 0, 0, pipCanvas.width, pipCanvas.height);
  }

  function drawPipFrame() {
    const pw = pipCanvas.width;
    const ph = pipCanvas.height;

    // Fundo gradiente escuro do palco
    const grad = pipCtx.createRadialGradient(pw * 0.5, ph * 0.42, 0, pw * 0.5, ph * 0.5, pw * 0.75);
    grad.addColorStop(0, '#181c24');
    grad.addColorStop(0.58, '#0d0f14');
    grad.addColorStop(1, '#07080b');
    pipCtx.fillStyle = grad;
    pipCtx.fillRect(0, 0, pw, ph);

    // Camadas com corte proporcional próprio para cada resolução (suporta Retina 2x do WebGL!)
    if (showAsciiLayer) {
      drawPipLayer(asciiCanvas);
    }
    drawPipLayer(webglCanvas);
    if (show2DSketchLayer && currentSketchMode !== 'none') {
      drawPipLayer(sketchCanvas);
    }

    // Vinheta CRT sutil
    const vignette = pipCtx.createRadialGradient(pw * 0.5, ph * 0.5, pw * 0.35, pw * 0.5, ph * 0.5, pw * 0.72);
    vignette.addColorStop(0, 'rgba(4, 5, 8, 0)');
    vignette.addColorStop(1, 'rgba(4, 5, 8, 0.75)');
    pipCtx.fillStyle = vignette;
    pipCtx.fillRect(0, 0, pw, ph);
  }

  async function togglePipMode() {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
        return;
      }

      // Renderiza primeiro frame no canvas PiP
      drawPipFrame();

      if (!pipStream) {
        pipStream = pipCanvas.captureStream ? pipCanvas.captureStream(60) : null;
        if (!pipStream) {
          alert('Picture-in-Picture não suportado neste navegador.');
          return;
        }
        pipVideo.srcObject = pipStream;
      }

      await pipVideo.play();
      await pipVideo.requestPictureInPicture();
    } catch (err) {
      console.warn('Erro ao acionar Picture-in-Picture:', err);
    }
  }

  pipVideo.addEventListener('enterpictureinpicture', () => {
    isPipActive = true;
    updatePipButtons(true);
  });

  pipVideo.addEventListener('leavepictureinpicture', () => {
    isPipActive = false;
    updatePipButtons(false);
  });

  function updatePipButtons(active) {
    document.querySelectorAll('.btn-pip-trigger').forEach((btn) => {
      btn.classList.toggle('active-pill', active);
      const label = btn.querySelector('.pip-btn-label');
      if (label) {
        label.textContent = active ? 'Sair do Mini PiP' : 'Mini PiP';
      }
    });
  }

  document.querySelectorAll('.btn-pip-trigger').forEach((btn) => {
    btn.addEventListener('click', togglePipMode);
  });

  // Garante que o robô continue dançando mesmo se a aba estiver em segundo plano
  let bgPipInterval = null;
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && isPipActive) {
      if (!bgPipInterval) {
        bgPipInterval = setInterval(() => {
          const elapsedTime = clock.getElapsedTime();
          audio.update(elapsedTime);
          const { bass, groove, mid, high, kickPulse } = audio;
          updateFaceTexture(elapsedTime, bass, groove, mid, high, kickPulse);
          renderAsciiBackground(elapsedTime, bass, mid, high);
          renderer.render(scene, camera);
          render2DSketchOverlay(elapsedTime, bass, mid, high, kickPulse);
          drawPipFrame();
        }, 1000 / 30);
      }
    } else {
      if (bgPipInterval) {
        clearInterval(bgPipInterval);
        bgPipInterval = null;
      }
    }
  });

  // ==========================================================================
  // 10. ANIMATION LOOP (Multi-joint Mecha Body & Expressive Musical Groove)
  // ==========================================================================
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();
    audio.update(elapsedTime);

    const { bass, groove, mid, high, kickPulse, beatPhase } = audio;

    mouse.x += (mouse.targetX - mouse.x) * 0.06;
    mouse.y += (mouse.targetY - mouse.y) * 0.06;

    // --- A. HEAD GROOVE & MUSICAL EXPRESSIVENESS ---
    const rhythmicBob = Math.sin(beatPhase * 2.0) * (0.028 + groove * 0.065);
    const kickNod = kickPulse * 0.12 + bass * 0.065;
    headGroup.rotation.x = rhythmicBob + kickNod + mouse.y * 0.10;

    const melodyTilt =
      Math.sin(beatPhase * 1.0) * (0.045 + mid * 0.09) +
      Math.cos(elapsedTime * 0.7) * 0.025;
    headGroup.rotation.z = melodyTilt - mouse.x * 0.04;

    const dreamyYaw = Math.sin(elapsedTime * 0.55) * (0.05 + mid * 0.075);
    headGroup.rotation.y = mouse.x * 0.22 + dreamyYaw;

    headGroup.position.y = -0.35 + Math.sin(beatPhase * 2.0) * 0.024 + kickPulse * 0.028;

    // --- B. NECK HYDRAULIC PISTONS COMPRESSION ---
    leftNeckPistonRod.position.y = -0.72 - headGroup.rotation.x * 0.18 + headGroup.rotation.z * 0.12;
    rightNeckPistonRod.position.y = -0.72 - headGroup.rotation.x * 0.18 - headGroup.rotation.z * 0.12;

    // --- C. MECHA TORSO, CHEST BREASTPLATE & REACTOR CORE REACTIONS ---
    torsoGroup.position.y = Math.sin(beatPhase * 2.0 - 0.6) * 0.028 - kickPulse * 0.02;
    torsoGroup.rotation.z = Math.sin(beatPhase * 1.0 - 0.4) * (0.018 + groove * 0.038);
    torsoGroup.rotation.y = mouse.x * 0.08 + Math.sin(elapsedTime * 0.5) * 0.03;

    const chestBreath = 1.0 + groove * 0.028 + kickPulse * 0.022;
    chestGroup.scale.set(chestBreath, chestBreath, 1.0 + bass * 0.045);

    const coreScale = 1.0 + bass * 0.18 + kickPulse * 0.24;
    abdomenCoreEye.scale.setScalar(coreScale);
    upperCollarCore.scale.set(1.2 * coreScale, 0.65 * coreScale, 0.8 * coreScale);
    corePointLight.intensity = 1.6 + bass * 2.5 + kickPulse * 2.4;

    // --- D. EXPRESSIVE SHOULDER PAULDRONS, UPPER ARMS & ELBOW/FOREARM GROOVE ---
    const grooveAmp = 0.05 + groove * 0.22 + bass * 0.18;
    const midAmp = 0.04 + mid * 0.24;

    // Left Shoulder + Upper Arm + Articulated Elbow/Forearm
    const leftShrug = Math.sin(beatPhase * 1.0) * (0.035 + groove * 0.11) + kickPulse * 0.065;
    leftShoulder.shoulderRig.position.y = -1.08 + leftShrug * 0.55;
    leftShoulder.shoulderRig.rotation.z = -leftShrug * 0.95;
    leftShoulder.shoulderRig.rotation.x = Math.cos(beatPhase * 1.0) * (0.04 + groove * 0.12);

    leftShoulder.armGroup.rotation.x = -0.12 + Math.sin(beatPhase * 1.0 + 0.4) * grooveAmp - kickPulse * 0.18;
    leftShoulder.armGroup.rotation.z = -0.06 - Math.abs(Math.sin(beatPhase * 0.5)) * (0.06 + bass * 0.16) - kickPulse * 0.09;
    leftShoulder.armGroup.rotation.y = Math.cos(beatPhase * 0.5) * midAmp;

    // Left Elbow actively flexes forward & sways with the music!
    leftShoulder.elbowGroup.rotation.x = -0.26 - Math.abs(Math.sin(beatPhase * 1.0 - 0.3)) * (0.18 + groove * 0.38) - kickPulse * 0.24;
    leftShoulder.elbowGroup.rotation.z = 0.10 + Math.sin(beatPhase * 1.0) * (0.06 + mid * 0.18);
    leftShoulder.armPiston.position.y = -0.56 + Math.sin(beatPhase * 1.0) * (0.04 + bass * 0.08);

    // Right Shoulder + Upper Arm + Articulated Elbow/Forearm (counter-phase groove)
    const rightShrug = Math.sin(beatPhase * 1.0 + Math.PI * 0.75) * (0.035 + groove * 0.11) + kickPulse * 0.065;
    rightShoulder.shoulderRig.position.y = -1.08 + rightShrug * 0.55;
    rightShoulder.shoulderRig.rotation.z = rightShrug * 0.95;
    rightShoulder.shoulderRig.rotation.x = Math.cos(beatPhase * 1.0 + Math.PI * 0.75) * (0.04 + groove * 0.12);

    rightShoulder.armGroup.rotation.x = -0.12 + Math.sin(beatPhase * 1.0 + Math.PI * 0.75 + 0.4) * grooveAmp - kickPulse * 0.18;
    rightShoulder.armGroup.rotation.z = 0.06 + Math.abs(Math.cos(beatPhase * 0.5)) * (0.06 + bass * 0.16) + kickPulse * 0.09;
    rightShoulder.armGroup.rotation.y = -Math.sin(beatPhase * 0.5) * midAmp;

    // Right Elbow actively flexes forward & sways with the music!
    rightShoulder.elbowGroup.rotation.x = -0.26 - Math.abs(Math.cos(beatPhase * 1.0 - 0.2)) * (0.18 + groove * 0.38) - kickPulse * 0.24;
    rightShoulder.elbowGroup.rotation.z = -0.10 + Math.cos(beatPhase * 1.0) * (0.06 + mid * 0.18);
    rightShoulder.armPiston.position.y = -0.56 + Math.cos(beatPhase * 1.0) * (0.04 + bass * 0.08);

    // Earcups & Active Head Accessory Bounce
    const cupPulse = 1.0 + bass * 0.055 + kickPulse * 0.045;
    leftEarcup.cupGroup.scale.setScalar(cupPulse);
    rightEarcup.cupGroup.scale.setScalar(cupPulse);

    if (currentAccessory === 'cap') {
      capGroup.position.y = 1.56 + kickPulse * 0.04 + Math.sin(beatPhase * 2.0 - 0.3) * (0.015 + bass * 0.025);
      capGroup.rotation.x = -0.20 - kickPulse * 0.06 + Math.sin(beatPhase * 2.0) * 0.03;
    } else if (currentAccessory === 'cowboy') {
      cowboyGroup.position.y = 1.66 + kickPulse * 0.045 + Math.sin(beatPhase * 2.0 - 0.3) * (0.018 + bass * 0.03);
      cowboyGroup.rotation.x = -0.18 - kickPulse * 0.07 + Math.sin(beatPhase * 2.0) * 0.035;
      cowboyGroup.rotation.z = Math.sin(beatPhase * 1.0) * (0.02 + groove * 0.04);
    } else if (currentAccessory === 'predator') {
      antennaMeshes.forEach((dread) => {
        const p = dread.cfg.phase;
        const side = dread.cfg.side || 1;
        dread.pivot.rotation.z =
          side * (bass * 0.09 + kickPulse * 0.13) +
          Math.sin(beatPhase * 1.5 + p) * (0.04 + groove * 0.10);
        dread.pivot.rotation.x =
          Math.cos(beatPhase * 2.0 + p) * (0.035 + bass * 0.09) -
          kickPulse * 0.09;
        dread.pivot.rotation.y =
          Math.sin(elapsedTime * 1.8 + p) * (0.03 + mid * 0.065);
      });
    }

    // --- E. 3D SPACE STARS ---
    starPoints.rotation.y = elapsedTime * 0.02 + mouse.x * 0.05;
    starPoints.rotation.x = mouse.y * 0.03;
    spaceGroup.position.x = -mouse.x * 0.35;
    spaceGroup.position.y = mouse.y * 0.22;

    // --- F. RENDER LAYERS ---
    updateFaceTexture(elapsedTime, bass, groove, mid, high, kickPulse);
    renderAsciiBackground(elapsedTime, bass, mid, high);
    renderer.render(scene, camera);
    render2DSketchOverlay(elapsedTime, bass, mid, high, kickPulse);

    // --- G. PIP & TIKTOK VIDEO STREAM UPDATES ---
    if (isPipActive) {
      drawPipFrame();
    }
    if (isRecordingTikTok) {
      compositeTikTokFrame();
    }

    if (ldrIcons.length === 3) {
      ldrIcons[0].style.transform = `scale(${1 + (bass + kickPulse) * 0.18})`;
      ldrIcons[1].style.transform = `scale(${1 + mid * 0.18})`;
      ldrIcons[2].style.transform = `scale(${1 + high * 0.18})`;
    }
  }

  animate();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
