#!/usr/bin/env node
const https = require('https');
const fs = require('fs');
const path = require('path');

// Chave ElevenLabs encontrada no projeto do usuário
const API_KEY = process.env.ELEVENLABS_API_KEY || "sk_797d8f6fa09fe84a0fc80c91a2271348d4a58c7a5c86a7db";
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || "pNInz6obpgDQGcFmaJgB"; // Adam (Deep male voice)
const TEXT = process.argv[2] || "JC Moral. Moral Beats.";

console.log(`Gerando áudio via ElevenLabs: "${TEXT}"...`);

const postData = JSON.stringify({
  text: TEXT,
  model_id: "eleven_multilingual_v2",
  voice_settings: {
    stability: 0.35,
    similarity_boost: 0.85,
    style: 0.5,
    use_speaker_boost: true
  }
});

const req = https.request({
  hostname: "api.elevenlabs.io",
  path: `/v1/text-to-speech/${VOICE_ID}`,
  method: "POST",
  headers: {
    "Accept": "audio/mpeg",
    "Content-Type": "application/json",
    "xi-api-key": API_KEY
  }
}, (res) => {
  if (res.statusCode !== 200) {
    let err = "";
    res.on("data", chunk => err += chunk);
    res.on("end", () => console.error("Erro ElevenLabs:", err));
    return;
  }
  const destPath = path.join(__dirname, "../watermark.mp3");
  const file = fs.createWriteStream(destPath);
  res.pipe(file);
  file.on("finish", () => {
    console.log(`Sucesso! watermark.mp3 gerado (${fs.statSync(destPath).size} bytes) em ${destPath}`);
  });
});

req.on("error", (e) => console.error("Falha na requisição:", e));
req.write(postData);
req.end();
