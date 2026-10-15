/* audio_juego.js
 * Audio del jugador generado 100% por código.
 * Reutiliza la lógica de síntesis de script_audios.js (Synth, envolventes,
 * ruido filtrado, parciales inarmónicos) pero con un pipeline propio
 * pensado para precarga y reproducción en vivo dentro del juego.
 *
 * API pública (window.AudioJuego):
 *   await AudioJuego.init(ConfigPlayer)   -> precarga buffers
 *   AudioJuego.paso({ corriendo })        -> reproduce paso
 *   AudioJuego.salto()                    -> reproduce salto
 *   AudioJuego.aterrizaje(velocidadY)     -> reproduce aterrizaje escalado
 *   AudioJuego.setVolumenMaster(v)        -> 0..1
 *   AudioJuego.silenciar(bool)
 */
(function () {
  "use strict";

  const RATE = 48000;

  // ---------------------------------------------------------------
  // PRNG determinista (misma familia que script_audios.js)
  // ---------------------------------------------------------------
  function randomGenerator(seed) {
    let a = seed >>> 0;
    return function () {
      a += 0x6D2B79F5;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // ---------------------------------------------------------------
  // Synth mínimo (recorte de script_audios.js)
  // ---------------------------------------------------------------
  class Synth {
    constructor(context, output, seed, size = 1) {
      this.context = context;
      this.output = output;
      this.random = randomGenerator(seed);
      this.offset = 0.025;
      this.size = size;
    }
    time(t) { return this.offset + t * this.size; }
    duration(s) { return Math.max(0.008, s * this.size); }
    between(a, b) { return a + (b - a) * this.random(); }

    envelope(start, duration, amplitude, attack = 0.003) {
      const gain = this.context.createGain();
      const a = Math.min(attack, duration * 0.35);
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(Math.max(0.0001, amplitude), start + a);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
      gain.gain.linearRampToValueAtTime(0, start + duration + 0.006);
      gain.connect(this.output);
      return gain;
    }

    tone(t, duration, from, to, amplitude = 0.2, type = "sine", attack = 0.003) {
      const start = this.time(t);
      const length = this.duration(duration);
      const osc = this.context.createOscillator();
      const env = this.envelope(start, length, amplitude, attack);
      osc.type = type;
      osc.frequency.setValueAtTime(Math.max(20, from), start);
      osc.frequency.exponentialRampToValueAtTime(Math.max(20, to), start + length);
      const filt = this.context.createBiquadFilter();
      filt.type = "lowpass";
      filt.frequency.value = Math.min(15000, Math.max(from, to) * 5 + 800);
      filt.Q.value = 0.5;
      osc.connect(filt); filt.connect(env);
      osc.start(start); osc.stop(start + length + 0.012);
    }

    noise(t, duration, amplitude, type = "lowpass", from = 2000, to = from, q = 0.7) {
      const start = this.time(t);
      const length = this.duration(duration);
      const frames = Math.ceil((length + 0.02) * this.context.sampleRate);
      const buffer = this.context.createBuffer(1, frames, this.context.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < frames; i++) data[i] = this.random() * 2 - 1;
      const src = this.context.createBufferSource();
      src.buffer = buffer;
      const filt = this.context.createBiquadFilter();
      filt.type = type; filt.Q.value = q;
      filt.frequency.setValueAtTime(Math.max(20, from), start);
      filt.frequency.exponentialRampToValueAtTime(Math.max(20, to), start + length);
      const env = this.envelope(start, length, amplitude, 0.002);
      src.connect(filt); filt.connect(env);
      src.start(start); src.stop(start + length + 0.012);
    }

    metal(t, fundamental, duration, amplitude = 0.3) {
      const ratios = [1, 1.47, 2.09, 2.56, 3.91, 5.43];
      ratios.forEach((ratio, index) => {
        const f = fundamental * ratio * this.between(0.994, 1.006);
        this.tone(t, duration / (1 + index * 0.32), f, f * 0.997, amplitude / (1 + index * 1.5));
      });
    }

    impact(t, base = 100, strength = 1) {
      this.tone(t, 0.18, base * 1.9, base * 0.55, 0.5 * strength);
      this.noise(t, 0.065, 0.45 * strength, "lowpass", 2400, 500);
    }
  }

  // ---------------------------------------------------------------
  // Render offline de un efecto concreto
  // ---------------------------------------------------------------
  async function renderEfecto(efecto, seed) {
    const OfflineContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    if (!OfflineContext) throw new Error("Sin OfflineAudioContext");

    const tail = 0.05;
    const duration = efecto.seconds + tail;
    const ctx = new OfflineContext(2, Math.ceil(duration * RATE), RATE);
    const bus = ctx.createGain();
    bus.gain.value = 0.7;

    const hp = ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 25;
    bus.connect(hp);

    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -15;
    comp.knee.value = 12;
    comp.ratio.value = 4;
    comp.attack.value = 0.003;
    comp.release.value = 0.16;
    hp.connect(comp);
    comp.connect(ctx.destination);

    efecto.build(new Synth(ctx, bus, seed));

    const buffer = await ctx.startRendering();

    // Normaliza pico a 0.97 y aplica fade de 8 ms
    let peak = 0;
    for (let c = 0; c < buffer.numberOfChannels; c++) {
      const data = buffer.getChannelData(c);
      for (let i = 0; i < data.length; i++) peak = Math.max(peak, Math.abs(data[i]));
    }
    const scale = peak > 0.97 ? 0.97 / peak : 1;
    const fadeFrames = Math.round(RATE * 0.008);
    for (let c = 0; c < buffer.numberOfChannels; c++) {
      const data = buffer.getChannelData(c);
      for (let i = 0; i < data.length; i++) {
        const fade = Math.min(1, i / fadeFrames, (data.length - 1 - i) / fadeFrames);
        data[i] *= scale * fade;
      }
    }
    return buffer;
  }

  // ---------------------------------------------------------------
  // Definiciones de los 3 efectos (basadas en las de script_audios.js)
  // ---------------------------------------------------------------
  const EFECTOS = {
    "step-stone": {
      seconds: 0.6,
      build(s) {
        const base = s.between(95, 135);
        s.impact(0, base, 0.55);
        s.noise(0.065, 0.12, 0.25, "highpass", 1300);
        s.tone(0.06, 0.09, 220, 100, 0.14);
      },
    },
    "move-jump": {
      seconds: 0.7,
      build(s) {
        s.noise(0, 0.26, 0.3, "bandpass", 500, 3000);
        s.tone(0, 0.28, 160, 520, 0.2, "triangle");
      },
    },
    "move-land": {
      seconds: 1.0,
      build(s) {
        s.impact(0, 85, 1);
        s.noise(0.025, 0.4, 0.55, "lowpass", 2200, 250);
        s.tone(0, 0.45, 65, 30, 0.35);
      },
    },
  };

  // ---------------------------------------------------------------
  // Estado del módulo
  // ---------------------------------------------------------------
  let liveCtx = null;
  let masterGain = null;
  let compresor = null;
  let volumenMaster = 1.0;
  let silenciado = false;
  let buffers = { paso: [], salto: null, aterrizaje: null };
  let pasoIdx = 0;
  let config = null;
  let listo = false;

  const vocesActivas = new Set();
  const MAX_VOCES = 8;

  // ---------------------------------------------------------------
  // Init
  // ---------------------------------------------------------------
  async function init(ConfigPlayer) {
    config = ConfigPlayer || (window.ConfigPlayer || null);
    if (!config) throw new Error("AudioJuego: falta ConfigPlayer");

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) throw new Error("Web Audio no disponible");

    liveCtx = new AudioContextClass();

    masterGain = liveCtx.createGain();
    masterGain.gain.value = volumenMaster;

    compresor = liveCtx.createDynamicsCompressor();
    compresor.threshold.value = -12;
    compresor.knee.value = 10;
    compresor.ratio.value = 3;
    compresor.attack.value = 0.003;
    compresor.release.value = 0.15;

    masterGain.connect(compresor);
    compresor.connect(liveCtx.destination);

    const baseSeed = 2026;

    // Salto
    buffers.salto = await renderEfecto(EFECTOS["move-jump"], baseSeed ^ 0x1111);

    // Aterrizaje
    //buffers.aterrizaje = await renderEfecto(EFECTOS["move-land"], baseSeed ^ 0x2222);

    // 3 variantes de paso
    const n = config.sonidos.paso.variantes || 1;
    buffers.paso = [];
    for (let i = 0; i < n; i++) {
      buffers.paso.push(await renderEfecto(EFECTOS["step-stone"], baseSeed ^ (0x3000 + i * 17)));
    }

    listo = true;
    return true;
  }

  // ---------------------------------------------------------------
  // Reproducción
  // ---------------------------------------------------------------
  function reproducir(buffer, pitch = 1, volumen = 1) {
    if (!listo || !liveCtx || silenciado) return;
    if (liveCtx.state === "suspended") liveCtx.resume();

    // Límite de voces: si hay demasiadas, corta la más antigua
    if (vocesActivas.size >= MAX_VOCES) {
      const primera = vocesActivas.values().next().value;
      try { primera.source.stop(); } catch {}
      vocesActivas.delete(primera);
    }

    const src = liveCtx.createBufferSource();
    src.buffer = buffer;
    src.playbackRate.value = pitch;

    const g = liveCtx.createGain();
    g.gain.value = volumen;

    src.connect(g);
    g.connect(masterGain);

    const voz = { source: src, gain: g };
    vocesActivas.add(voz);

    src.onended = () => {
      try { src.disconnect(); g.disconnect(); } catch {}
      vocesActivas.delete(voz);
    };

    src.start();
  }

  function paso({ corriendo = false } = {}) {
    if (!buffers.paso.length) return;
    const cfg = config.sonidos.paso;
    const buffer = buffers.paso[pasoIdx % buffers.paso.length];
    pasoIdx++;
    const pitch = corriendo ? cfg.pitchCorrer : cfg.pitchCaminar;
    reproducir(buffer, pitch, cfg.volumen);
  }

  function salto() {
    if (!buffers.salto) return;
    const cfg = config.sonidos.salto;
    const pitch = 1 + (Math.random() * 2 - 1) * cfg.pitchAleatorio;
    reproducir(buffers.salto, pitch, cfg.volumen);
  }

  function aterrizaje(velocidadY = 0) {
    if (!buffers.aterrizaje) return;
    const cfg = config.sonidos.aterrizaje;
    let vol = cfg.volumenBase;
    if (cfg.escalaPorVelocidad) {
      const t = Math.min(1, Math.abs(velocidadY) / 10);
      vol = cfg.volumenBase + (cfg.volumenMax - cfg.volumenBase) * t;
    }
    reproducir(buffers.aterrizaje, 1, vol);
  }

  function setVolumenMaster(v) {
    volumenMaster = Math.max(0, Math.min(1, v));
    if (masterGain) masterGain.gain.value = volumenMaster;
  }

  function silenciar(v) {
    silenciado = !!v;
  }

  // ---------------------------------------------------------------
  // API pública
  // ---------------------------------------------------------------
  window.AudioJuego = {
    init,
    paso,
    salto,
    aterrizaje,
    setVolumenMaster,
    silenciar,
    get listo() { return listo; },
  };
})();
