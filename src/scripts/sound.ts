// A tiny synthesiser for the site. No audio files: every sound is made with the Web Audio API,
// so there is nothing to license and nothing to download. Sound is OFF until the visitor turns it on.

export type Sfx = 'hover' | 'click' | 'star' | 'complete' | 'step' | 'tick' | 'whoosh' | 'toggle';

const KEY = 'sonu-sound';
// D dorian, two octaves: the lyre's strings
const SCALE = [146.83, 164.81, 174.61, 196.0, 220.0, 246.94, 261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25, 587.33];

let ctx: AudioContext | null = null;
let master: GainNode;
let sfxBus: GainNode;
let ambientBus: GainNode;
let ambientNodes: AudioNode[] = [];
let enabled = false;
let lastHover = 0;
const listeners = new Set<(on: boolean) => void>();

function ensureCtx() {
  if (ctx) return ctx;
  const AC = window.AudioContext || (window as any).webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();
  master = ctx.createGain();
  master.gain.value = 0.9;
  const comp = ctx.createDynamicsCompressor();
  master.connect(comp).connect(ctx.destination);

  // A short, airy reverb so plucks sound like they are in a stone hall
  const verb = ctx.createConvolver();
  verb.buffer = impulse(ctx, 2.4, 3);
  const wet = ctx.createGain();
  wet.gain.value = 0.32;
  verb.connect(wet).connect(master);

  sfxBus = ctx.createGain();
  sfxBus.gain.value = 0.55;
  sfxBus.connect(master);
  sfxBus.connect(verb);

  ambientBus = ctx.createGain();
  ambientBus.gain.value = 0;
  ambientBus.connect(master);
  return ctx;
}

function impulse(c: AudioContext, seconds: number, decay: number) {
  const len = c.sampleRate * seconds;
  const buf = c.createBuffer(2, len, c.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
  }
  return buf;
}

function brownNoise(c: AudioContext, seconds = 6) {
  const len = c.sampleRate * seconds;
  const buf = c.createBuffer(1, len, c.sampleRate);
  const d = buf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < len; i++) {
    const w = Math.random() * 2 - 1;
    last = (last + 0.02 * w) / 1.02;
    d[i] = last * 3.5;
  }
  return buf;
}

// The sea and a low drone under it
function startAmbient() {
  if (!ctx || ambientNodes.length) return;
  const t = ctx.currentTime;
  const src = ctx.createBufferSource();
  src.buffer = brownNoise(ctx);
  src.loop = true;
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = 520;
  const swell = ctx.createGain();
  swell.gain.value = 0.5;
  // waves: a slow LFO on the filter and the level
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.09;
  const lfoAmt = ctx.createGain();
  lfoAmt.gain.value = 0.35;
  const lfoF = ctx.createGain();
  lfoF.gain.value = 260;
  lfo.connect(lfoAmt).connect(swell.gain);
  lfo.connect(lfoF).connect(lp.frequency);
  src.connect(lp).connect(swell).connect(ambientBus);

  const drone = ctx.createGain();
  drone.gain.value = 0.05;
  const o1 = ctx.createOscillator();
  o1.frequency.value = 73.42; // D2
  const o2 = ctx.createOscillator();
  o2.frequency.value = 110.0; // A2
  o2.detune.value = 4;
  o1.connect(drone);
  o2.connect(drone);
  drone.connect(ambientBus);

  src.start(t);
  lfo.start(t);
  o1.start(t);
  o2.start(t);
  ambientNodes = [src, lfo, o1, o2];
  ambientBus.gain.cancelScheduledValues(t);
  ambientBus.gain.setValueAtTime(ambientBus.gain.value, t);
  ambientBus.gain.linearRampToValueAtTime(0.16, t + 2.5);
}

function stopAmbient() {
  if (!ctx) return;
  const t = ctx.currentTime;
  ambientBus.gain.cancelScheduledValues(t);
  ambientBus.gain.setValueAtTime(ambientBus.gain.value, t);
  ambientBus.gain.linearRampToValueAtTime(0, t + 0.6);
  const nodes = ambientNodes;
  ambientNodes = [];
  setTimeout(() => nodes.forEach((n) => (n as AudioScheduledSourceNode).stop?.()), 700);
}

function pluck(freq: number, vol = 0.25, dur = 1.2, when = 0) {
  if (!ctx) return;
  const t = ctx.currentTime + when;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + 0.005);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.setValueAtTime(freq * 8, t);
  lp.frequency.exponentialRampToValueAtTime(freq * 1.5, t + dur * 0.6);
  const a = ctx.createOscillator();
  a.type = 'triangle';
  a.frequency.value = freq;
  const b = ctx.createOscillator();
  b.type = 'sine';
  b.frequency.value = freq * 2;
  const bg = ctx.createGain();
  bg.gain.value = 0.3;
  a.connect(lp);
  b.connect(bg).connect(lp);
  lp.connect(g).connect(sfxBus);
  a.start(t);
  b.start(t);
  a.stop(t + dur + 0.05);
  b.stop(t + dur + 0.05);
}

function bell(freq: number, vol = 0.18, dur = 2.6, when = 0) {
  if (!ctx) return;
  const t = ctx.currentTime + when;
  [1, 2.76, 5.4].forEach((ratio, i) => {
    const o = ctx!.createOscillator();
    o.frequency.value = freq * ratio;
    const g = ctx!.createGain();
    const v = vol / (i + 1);
    const d = dur / (i + 1);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(v, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g).connect(sfxBus);
    o.start(t);
    o.stop(t + d + 0.05);
  });
}

function whoosh() {
  if (!ctx) return;
  const t = ctx.currentTime;
  const src = ctx.createBufferSource();
  src.buffer = brownNoise(ctx, 1);
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.Q.value = 1.2;
  bp.frequency.setValueAtTime(300, t);
  bp.frequency.exponentialRampToValueAtTime(1800, t + 0.35);
  bp.frequency.exponentialRampToValueAtTime(500, t + 0.7);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(0.5, t + 0.2);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.75);
  src.connect(bp).connect(g).connect(sfxBus);
  src.start(t);
  src.stop(t + 0.8);
}

const pick = () => SCALE[7 + Math.floor(Math.random() * 7)];

export function play(name: Sfx, index = 0) {
  if (!enabled || !ctx) return;
  switch (name) {
    case 'hover': {
      const now = performance.now();
      if (now - lastHover < 70) return;
      lastHover = now;
      pluck(pick(), 0.09, 0.8);
      break;
    }
    case 'click':
      pluck(SCALE[7], 0.22, 1.1);
      pluck(SCALE[11], 0.12, 1.1, 0.03);
      break;
    case 'star':
      bell(SCALE[(7 + index * 2) % SCALE.length] * 2, 0.14);
      break;
    case 'complete':
      [0, 2, 4, 7, 9, 11, 14].forEach((s, i) => pluck(SCALE[s], 0.18, 1.8, i * 0.09));
      bell(SCALE[14] * 2, 0.1, 3.2, 0.7);
      break;
    case 'step':
      pluck(SCALE[Math.min(3 + index * 2, SCALE.length - 1)], 0.22, 1.4);
      break;
    case 'tick':
      pluck(SCALE[10 + (index % 5)] * 2, 0.04, 0.12);
      break;
    case 'whoosh':
      whoosh();
      break;
    case 'toggle':
      pluck(SCALE[7], 0.2, 1.2);
      pluck(SCALE[9], 0.16, 1.2, 0.08);
      pluck(SCALE[11], 0.14, 1.4, 0.16);
      break;
  }
}

export function isOn() {
  return enabled;
}

export function setSound(on: boolean) {
  if (on) {
    if (!ensureCtx()) return;
    ctx!.resume();
    enabled = true;
    startAmbient();
    play('toggle');
  } else {
    enabled = false;
    stopAmbient();
  }
  try {
    localStorage.setItem(KEY, on ? 'on' : 'off');
  } catch {}
  listeners.forEach((fn) => fn(enabled));
}

export function onSoundChange(fn: (on: boolean) => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

// If the visitor chose sound on a previous visit, start it at their first interaction
// (browsers don't allow audio before one).
export function restorePreference() {
  let saved: string | null = null;
  try {
    saved = localStorage.getItem(KEY);
  } catch {}
  if (saved !== 'on') return;
  const arm = (e: Event) => {
    // the toggle button handles itself
    if ((e.target as Element | null)?.closest?.('[data-sound-toggle]')) return;
    window.removeEventListener('pointerdown', arm);
    window.removeEventListener('keydown', arm);
    if (!enabled) setSound(true);
  };
  window.addEventListener('pointerdown', arm);
  window.addEventListener('keydown', arm);
}
