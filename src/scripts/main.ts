// All interaction for the site. Runs once; per-page setup re-runs on every
// `astro:page-load` (Astro's client router swaps pages without a reload, so the
// sound keeps playing between pages).
import { play, setSound, isOn, onSoundChange, restorePreference } from './sound';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------------- Global, bound once ---------------- */

restorePreference();

function syncToggle(on: boolean) {
  document.querySelectorAll<HTMLButtonElement>('[data-sound-toggle]').forEach((b) => {
    b.setAttribute('aria-pressed', String(on));
    const label = b.querySelector('[data-sound-label]');
    if (label) label.textContent = on ? 'Sound on' : 'Sound off';
    b.setAttribute('aria-label', on ? 'Turn sound off' : 'Turn sound on');
  });
}
onSoundChange(syncToggle);

document.addEventListener('click', (e) => {
  const t = e.target as Element;
  if (t.closest('[data-sound-toggle]')) {
    setSound(!isOn());
    return;
  }
  const plate = t.closest<HTMLElement>('[data-plate-open]');
  if (plate) {
    const dlg = document.querySelector<HTMLDialogElement>('[data-lightbox]');
    const img = dlg?.querySelector<HTMLImageElement>('[data-lightbox-img]');
    const cap = dlg?.querySelector<HTMLElement>('[data-lightbox-cap]');
    if (dlg && img) {
      img.src = plate.dataset.plateOpen || '';
      img.alt = plate.dataset.plateAlt || '';
      if (cap) cap.textContent = plate.dataset.plateTitle || '';
      dlg.showModal();
      play('whoosh');
    }
    return;
  }
  // click outside the image closes the lightbox
  if (t.matches('[data-lightbox]')) {
    (t as HTMLDialogElement).close();
    return;
  }
  const menu = t.closest<HTMLButtonElement>('[data-menu]');
  if (menu) {
    const links = document.getElementById('nav-links');
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    links?.classList.toggle('open', open);
    play('click');
    return;
  }
  // close the mobile menu after choosing a link
  if (t.closest('#nav-links a')) {
    document.querySelector('[data-menu]')?.setAttribute('aria-expanded', 'false');
    document.getElementById('nav-links')?.classList.remove('open');
  }
  const link = t.closest('a');
  if (link) {
    const href = link.getAttribute('href') || '';
    if (href.startsWith('#') || href.startsWith('/#')) play('whoosh');
    else play('click');
  } else if (t.closest('button')) {
    // buttons with their own sounds handle themselves
    if (!t.closest('[data-star],[data-step],[data-step-next],[data-engine-hand],[data-engine-run]')) play('click');
  }
});

// soft lyre notes when the pointer finds something you can press
let lastHoverEl: Element | null = null;
document.addEventListener('pointerover', (e) => {
  if (e.pointerType !== 'mouse') return;
  const el = (e.target as Element).closest('a, button, [data-card]');
  if (el && el !== lastHoverEl) play('hover');
  lastHoverEl = el;
});

// "M" toggles sound, when not typing
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() !== 'm' || e.metaKey || e.ctrlKey || e.altKey) return;
  const tag = (e.target as HTMLElement).tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target as HTMLElement).isContentEditable) return;
  setSound(!isOn());
});

/* ---------------- Per page ---------------- */

let cleanups: (() => void)[] = [];

document.addEventListener('astro:before-swap', () => {
  cleanups.forEach((fn) => fn());
  cleanups = [];
});

document.addEventListener('astro:page-load', () => {
  syncToggle(isOn());
  heroDepth();
  starfield();
  constellation();
  counters();
  climb();
  lenses();
  cards();
  engine();
  copyButtons();
  plates();
  printButtons();
});

/* Framed paintings lean slightly toward the pointer */
function plates() {
  if (!finePointer() || reduced()) return;
  document.querySelectorAll<HTMLElement>('[data-plate] .frame').forEach((f) => {
    f.addEventListener('pointermove', (e) => {
      const r = f.getBoundingClientRect();
      f.style.setProperty('--tx', `${(((e.clientX - r.left) / r.width - 0.5) * 5).toFixed(2)}deg`);
      f.style.setProperty('--ty', `${(-((e.clientY - r.top) / r.height - 0.5) * 5).toFixed(2)}deg`);
    });
    f.addEventListener('pointerleave', () => {
      f.style.setProperty('--tx', '0deg');
      f.style.setProperty('--ty', '0deg');
    });
  });
}

function printButtons() {
  document.querySelectorAll<HTMLButtonElement>('[data-print]').forEach((b) => b.addEventListener('click', () => window.print()));
}

/* Hero: the painting, the stars and the spear sit at different depths */
function heroDepth() {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero || reduced() || !finePointer()) return;
  let raf = 0;
  const move = (e: PointerEvent) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      hero.style.setProperty('--px', `${(-x * 18).toFixed(1)}px`);
      hero.style.setProperty('--py', `${(-y * 12).toFixed(1)}px`);
    });
  };
  hero.addEventListener('pointermove', move);
  cleanups.push(() => hero.removeEventListener('pointermove', move));
}

/* A layer of twinkling stars over the painting; click the sky for a shooting star */
function starfield() {
  const canvas = document.querySelector<HTMLCanvasElement>('[data-starfield]');
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!canvas || !hero) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w = 0;
  let h = 0;
  let stars: { x: number; y: number; r: number; p: number; s: number; d: number }[] = [];
  const meteors: { x: number; y: number; vx: number; vy: number; life: number }[] = [];
  let px = 0;
  let py = 0;

  const resize = () => {
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round((w * h) / 9000);
    stars = Array.from({ length: n }, () => ({
      x: Math.random() * w,
      y: Math.random() * h * 0.75,
      r: Math.random() * 1.1 + 0.3,
      p: Math.random() * Math.PI * 2,
      s: 0.6 + Math.random() * 1.8,
      d: 0.4 + Math.random() * 1.2, // depth for parallax
    }));
  };
  resize();

  const still = reduced();
  let raf = 0;
  const draw = (t: number) => {
    ctx.clearRect(0, 0, w, h);
    const style = getComputedStyle(hero);
    px = parseFloat(style.getPropertyValue('--px')) || 0;
    py = parseFloat(style.getPropertyValue('--py')) || 0;
    for (const s of stars) {
      const a = still ? 0.7 : 0.35 + 0.65 * Math.abs(Math.sin(t / 1000 * s.s + s.p));
      ctx.globalAlpha = a;
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(s.x + px * s.d * 1.6, s.y + py * s.d * 1.6, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let i = meteors.length - 1; i >= 0; i--) {
      const m = meteors[i];
      m.x += m.vx;
      m.y += m.vy;
      m.life -= 1;
      const g = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 14, m.y - m.vy * 14);
      g.addColorStop(0, 'rgba(255,255,255,0.95)');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.globalAlpha = Math.min(1, m.life / 20);
      ctx.strokeStyle = g;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(m.x - m.vx * 14, m.y - m.vy * 14);
      ctx.stroke();
      if (m.life <= 0) meteors.splice(i, 1);
    }
    ctx.globalAlpha = 1;
    if (!still) raf = requestAnimationFrame(draw);
  };
  raf = requestAnimationFrame(draw);

  // clicking empty sky sends a shooting star
  const shoot = (e: PointerEvent) => {
    const target = e.target as Element;
    if (target.closest('a, button, .glass')) return;
    const r = canvas.getBoundingClientRect();
    if (still) return;
    meteors.push({ x: e.clientX - r.left, y: e.clientY - r.top, vx: -7 - Math.random() * 3, vy: 3 + Math.random() * 2, life: 46 });
    play('whoosh');
  };
  hero.addEventListener('pointerdown', shoot);

  const onVis = () => {
    cancelAnimationFrame(raf);
    if (!document.hidden && !still) raf = requestAnimationFrame(draw);
  };
  document.addEventListener('visibilitychange', onVis);
  const ro = new ResizeObserver(() => {
    resize();
    if (still) draw(0);
  });
  ro.observe(canvas);
  cleanups.push(() => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    hero.removeEventListener('pointerdown', shoot);
    document.removeEventListener('visibilitychange', onVis);
  });
}

/* Five named stars: light them all to complete the constellation */
function constellation() {
  const sky = document.querySelector<HTMLElement>('[data-constellation]');
  if (!sky) return;
  const stars = [...sky.querySelectorAll<HTMLButtonElement>('[data-star]')];
  const line = sky.querySelector<SVGPolylineElement>('[data-lines]');
  const hint = document.querySelector<HTMLElement>('[data-sky-hint]');
  const done = sky.querySelector<HTMLElement>('[data-sky-done]');
  const order: number[] = [];

  const redraw = () => {
    if (!line) return;
    const pts = order.map((i) => {
      const s = stars[i];
      return `${parseFloat(s.style.left)},${parseFloat(s.style.top)}`;
    });
    if (order.length === stars.length) pts.push(pts[0]);
    line.setAttribute('points', pts.join(' '));
  };

  stars.forEach((s, i) => {
    s.addEventListener('click', () => {
      if (order.includes(i)) {
        play('star', i);
        return;
      }
      order.push(i);
      s.setAttribute('aria-pressed', 'true');
      play('star', order.length - 1);
      redraw();
      const em = hint?.querySelector('em');
      if (em) em.textContent = order.length === stars.length ? 'All five found.' : `${order.length} of ${stars.length} found.`;
      if (order.length === stars.length) {
        setTimeout(() => play('complete'), 250);
        if (done) done.hidden = false;
      }
    });
  });
}

/* Hero numbers count up once on load */
function counters() {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!els.length || reduced()) return;
  const start = performance.now();
  const dur = 1600;
  const targets = [...els].map((el) => Number(el.dataset.count));
  const tick = (t: number) => {
    const k = Math.min(1, (t - start) / dur);
    const e = 1 - Math.pow(1 - k, 3);
    els.forEach((el, i) => (el.textContent = String(Math.round(targets[i] * e))));
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* The climb: a tablist shaped like a staircase */
function climb() {
  const root = document.querySelector<HTMLElement>('[data-climb]');
  if (!root) return;
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[data-step]')].sort(
    (a, b) => Number(a.dataset.step) - Number(b.dataset.step),
  );
  const copies = [...root.querySelectorAll<HTMLElement>('[data-step-copy]')];
  const panel = root.querySelector<HTMLElement>('#step-panel');
  const next = root.querySelector<HTMLButtonElement>('[data-step-next]');
  const nextLabel = root.querySelector<HTMLElement>('[data-next-label]');
  let current = 0;

  const select = (i: number, focus = false) => {
    current = i;
    tabs.forEach((t, j) => {
      const on = j === i;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      if (j <= i) t.dataset.climbed = '';
      else delete t.dataset.climbed;
    });
    copies.forEach((c, j) => (c.hidden = j !== i));
    panel?.setAttribute('aria-labelledby', tabs[i].id);
    if (nextLabel) nextLabel.textContent = i === tabs.length - 1 ? 'Back to the start' : 'Climb a step';
    if (focus) tabs[i].focus();
    play('step', i);
  };

  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(i));
    t.addEventListener('keydown', (e) => {
      // the staircase is drawn top = last, so Up climbs and Down descends
      if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
        e.preventDefault();
        select(Math.min(tabs.length - 1, current + 1), true);
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
        e.preventDefault();
        select(Math.max(0, current - 1), true);
      } else if (e.key === 'Home') {
        e.preventDefault();
        select(0, true);
      } else if (e.key === 'End') {
        e.preventDefault();
        select(tabs.length - 1, true);
      }
    });
  });
  next?.addEventListener('click', () => select(current === tabs.length - 1 ? 0 : current + 1));
}

/* Lens filter on the works */
function lenses() {
  const buttons = [...document.querySelectorAll<HTMLButtonElement>('[data-lens]')];
  if (!buttons.length) return;
  const cards = [...document.querySelectorAll<HTMLElement>('[data-card]')];
  const groups = [...document.querySelectorAll<HTMLElement>('[data-group]')];
  const status = document.querySelector<HTMLElement>('[data-lens-status]');
  buttons.forEach((b) =>
    b.addEventListener('click', () => {
      const lens = b.dataset.lens!;
      buttons.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      let shown = 0;
      cards.forEach((c) => {
        const match = lens === 'all' || (c.dataset.lenses || '').split(' ').includes(lens);
        c.hidden = !match;
        if (match) shown++;
      });
      groups.forEach((g) => (g.hidden = !g.querySelector('[data-card]:not([hidden])')));
      if (status) status.textContent = `${shown} project${shown === 1 ? '' : 's'} shown`;
    }),
  );
}

/* Cards: light follows the pointer, slight tilt */
function cards() {
  if (!finePointer()) return;
  const tilt = !reduced();
  document.querySelectorAll<HTMLElement>('[data-card]').forEach((card) => {
    const move = (e: PointerEvent) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', `${x * 100}%`);
      card.style.setProperty('--my', `${y * 100}%`);
      if (tilt) {
        card.style.setProperty('--rx', `${((x - 0.5) * 6).toFixed(2)}deg`);
        card.style.setProperty('--ry', `${(-(y - 0.5) * 6).toFixed(2)}deg`);
      }
    };
    const leave = () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    };
    card.addEventListener('pointermove', move);
    card.addEventListener('pointerleave', leave);
  });
}

/* 412 emails: by hand vs the engine */
function engine() {
  const root = document.querySelector<HTMLElement>('[data-engine]');
  if (!root) return;
  const total = Number(root.dataset.total);
  const grid = root.querySelector<HTMLElement>('[data-engine-grid]')!;
  const count = root.querySelector<HTMLElement>('[data-engine-count]')!;
  const note = root.querySelector<HTMLElement>('[data-engine-note]')!;
  const hand = root.querySelector<HTMLButtonElement>('[data-engine-hand]')!;
  const run = root.querySelector<HTMLButtonElement>('[data-engine-run]')!;
  const reset = root.querySelector<HTMLButtonElement>('[data-engine-reset]')!;

  grid.innerHTML = '<i></i>'.repeat(total);
  const cells = [...grid.children] as HTMLElement[];
  let sent = 0;
  let byHand = 0;
  let timer = 0;

  const handNotes = [
    'Find the contact. Write the opener. Personalise. Send.',
    'Now do that again.',
    'And again. Only a few hundred to go.',
    'This is where the burnout came from.',
    'Tired yet? Try the red button.',
  ];

  const finish = () => {
    run.disabled = true;
    hand.disabled = true;
    reset.hidden = false;
    note.textContent =
      byHand > 0
        ? `You sent ${byHand} by hand. The engine wrote and sent the other ${total - byHand}, each one personalised.`
        : `All ${total}, each one personalised. Built in five days, with no automation background.`;
    play('complete');
  };

  hand.addEventListener('click', () => {
    if (sent >= total) return;
    cells[sent].className = 'hand';
    sent++;
    byHand++;
    count.textContent = String(sent);
    note.textContent = handNotes[Math.min(handNotes.length - 1, Math.floor((byHand - 1) / 2))];
    play('step', byHand % 6);
  });

  run.addEventListener('click', () => {
    if (sent >= total || timer) return;
    run.disabled = true;
    hand.disabled = true;
    note.textContent = 'Reading each company, drafting, personalising, sending…';
    if (reduced()) {
      for (; sent < total; sent++) cells[sent].className = 'sent';
      count.textContent = String(total);
      finish();
      return;
    }
    const start = performance.now();
    const from = sent;
    const dur = 2600;
    const step = (t: number) => {
      const k = Math.min(1, (t - start) / dur);
      const target = from + Math.round((total - from) * (k * k * (3 - 2 * k)));
      while (sent < target) {
        cells[sent].className = 'sent';
        sent++;
        if (sent % 6 === 0) play('tick', sent);
      }
      count.textContent = String(sent);
      if (k < 1) timer = requestAnimationFrame(step);
      else {
        timer = 0;
        finish();
      }
    };
    timer = requestAnimationFrame(step);
  });

  reset.addEventListener('click', () => {
    cancelAnimationFrame(timer);
    timer = 0;
    sent = 0;
    byHand = 0;
    cells.forEach((c) => (c.className = ''));
    count.textContent = '0';
    note.textContent = '';
    run.disabled = false;
    hand.disabled = false;
    reset.hidden = true;
    hand.focus();
  });
  cleanups.push(() => cancelAnimationFrame(timer));
}

function copyButtons() {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((b) => {
    b.addEventListener('click', async () => {
      const label = b.querySelector('[data-copy-label]');
      try {
        await navigator.clipboard.writeText(b.dataset.copy || '');
        if (label) label.textContent = 'Copied';
      } catch {
        if (label) label.textContent = 'Press Ctrl+C';
      }
      setTimeout(() => label && (label.textContent = 'Copy'), 2000);
    });
  });
}
