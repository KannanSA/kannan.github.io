'use client';

import { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../site';

const COLS = 53;
const ROWS = 7;
const LEVELS = ['#122033', '#0e4429', '#006d32', '#26a641', '#39d353'];

type Difficulty = 'chill' | 'arcade' | 'impossible';

const SETTINGS: Record<Difficulty, { speed: number; ai: number; error: number; paddle: number; label: string }> = {
  chill: { speed: 320, ai: 210, error: 46, paddle: 108, label: 'Chill' },
  arcade: { speed: 460, ai: 340, error: 20, paddle: 86, label: 'Arcade' },
  impossible: { speed: 620, ai: 500, error: 9, paddle: 68, label: 'Impossible' },
};

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function fallbackGrid() {
  const rand = mulberry32(0x4b616e6e);
  return Array.from({ length: COLS }, () =>
    Array.from({ length: ROWS }, () => {
      const roll = rand();
      if (roll < 0.58) return 0;
      if (roll < 0.78) return 1;
      if (roll < 0.9) return 2;
      if (roll < 0.97) return 3;
      return 4;
    }),
  );
}

function gridFromContributions(items: { date: string; level: number }[]) {
  if (items.length < 28) return null;
  const sorted = [...items].sort((a, b) => a.date.localeCompare(b.date));
  const levels = new Map(sorted.map((item) => [item.date, item.level]));
  const last = new Date(`${sorted[sorted.length - 1].date}T00:00:00Z`);
  const end = new Date(last);
  end.setUTCDate(last.getUTCDate() + (6 - last.getUTCDay()));
  const start = new Date(end);
  start.setUTCDate(end.getUTCDate() - (COLS * ROWS - 1));
  return Array.from({ length: COLS }, (_, week) =>
    Array.from({ length: ROWS }, (_, day) => {
      const date = new Date(start);
      date.setUTCDate(start.getUTCDate() + week * 7 + day);
      return Math.max(0, Math.min(4, levels.get(date.toISOString().slice(0, 10)) ?? 0));
    }),
  );
}

type Burst = { col: number; row: number; life: number };

export function PongGame({ missing = false }: { missing?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>('arcade');
  const [score, setScore] = useState({ you: 0, ai: 0 });
  const [streak, setStreak] = useState(0);
  const [tiles, setTiles] = useState(0);
  const [source, setSource] = useState('A sample contribution year');

  const runningRef = useRef(false);
  const difficultyRef = useRef<Difficulty>('arcade');
  const gridRef = useRef<number[][]>(fallbackGrid());
  const litRef = useRef(new Set<string>());
  const glowRef = useRef(new Float32Array(COLS * ROWS));
  const burstsRef = useRef<Burst[]>([]);

  useEffect(() => {
    runningRef.current = running;
  }, [running]);

  useEffect(() => {
    difficultyRef.current = difficulty;
  }, [difficulty]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 960;
    let height = 420;
    let raf = 0;
    let last = performance.now();
    let alive = true;

    const ball = { x: 480, y: 210, vx: 0, vy: 0, r: 8, hold: 0 };
    let playerY = 160;
    let aiY = 160;
    let playerTarget = 160;
    let aiAim = 0;
    let control: 'pointer' | 'keys' = 'pointer';
    const keys = { up: false, down: false };
    let rally = 0;
    let you = 0;
    let ai = 0;
    const trail: { x: number; y: number }[] = [];

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      width = Math.max(320, rect.width);
      height = Math.max(300, Math.min(460, width * 0.46));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      playerY = Math.min(playerY, height - paddleHeight());
      aiY = Math.min(aiY, height - paddleHeight());
    };

    const settings = () => SETTINGS[difficultyRef.current];
    const paddleHeight = () => settings().paddle;
    const pad = 16;

    const cellAt = (x: number, y: number) => {
      const gap = 3;
      const innerW = width - pad * 2;
      const innerH = height - pad * 2;
      const cellW = (innerW - gap * (COLS - 1)) / COLS;
      const cellH = (innerH - gap * (ROWS - 1)) / ROWS;
      const lx = x - pad;
      const ly = y - pad;
      const col = Math.floor(lx / (cellW + gap));
      const row = Math.floor(ly / (cellH + gap));
      if (col < 0 || row < 0 || col >= COLS || row >= ROWS) return null;
      if (lx - col * (cellW + gap) > cellW || ly - row * (cellH + gap) > cellH) return null;
      return { col, row, cellW, cellH, gap };
    };

    const light = (x: number, y: number) => {
      const hit = cellAt(x, y);
      if (!hit) return;
      const key = `${hit.col}:${hit.row}`;
      glowRef.current[hit.col * ROWS + hit.row] = 1;
      burstsRef.current.push({ col: hit.col, row: hit.row, life: 1 });
      if (burstsRef.current.length > 24) burstsRef.current.shift();
      if (!litRef.current.has(key)) {
        litRef.current.add(key);
        setTiles(litRef.current.size);
      }
    };

    const serve = (toward: 'you' | 'ai') => {
      ball.x = width / 2;
      ball.y = height / 2;
      const speed = settings().speed;
      const angle = (Math.random() * 0.7 - 0.35) * Math.PI;
      const dir = toward === 'you' ? -1 : 1;
      ball.vx = Math.cos(angle) * speed * dir;
      ball.vy = Math.sin(angle) * speed;
      ball.hold = 0.55;
      trail.length = 0;
    };

    const scorePoint = (winner: 'you' | 'ai') => {
      if (winner === 'you') you += 1;
      else ai += 1;
      rally = 0;
      setScore({ you, ai });
      setStreak(0);
      serve(winner === 'you' ? 'ai' : 'you');
    };

    const bouncePaddle = (paddleY: number, direction: 1 | -1) => {
      const h = paddleHeight();
      const hit = (ball.y - (paddleY + h / 2)) / (h / 2);
      const speed = Math.min(settings().speed * 1.45, Math.hypot(ball.vx, ball.vy) * 1.04);
      const angle = Math.max(-0.9, Math.min(0.9, hit * 0.95));
      ball.vx = Math.cos(angle) * speed * direction;
      ball.vy = Math.sin(angle) * speed;
      rally += 1;
      setStreak(rally);
    };

    const update = (dt: number) => {
      const h = paddleHeight();
      const speed = settings().speed;
      if (control === 'keys' && (keys.up || keys.down)) {
        playerY += (keys.down ? 1 : 0) * speed * 0.85 * dt;
        playerY -= (keys.up ? 1 : 0) * speed * 0.85 * dt;
      } else {
        playerY += (playerTarget - playerY) * Math.min(1, dt * 14);
      }
      playerY = Math.max(pad, Math.min(height - pad - h, playerY));

      const aim = ball.y - h / 2 + aiAim;
      const maxStep = settings().ai * dt;
      const delta = aim - aiY;
      aiY += Math.sign(delta) * Math.min(Math.abs(delta), maxStep);
      aiY = Math.max(pad, Math.min(height - pad - h, aiY));

      if (!runningRef.current) return;
      if (ball.hold > 0) {
        ball.hold -= dt;
        return;
      }

      ball.x += ball.vx * dt;
      ball.y += ball.vy * dt;
      if (ball.y - ball.r < pad) {
        ball.y = pad + ball.r;
        ball.vy = Math.abs(ball.vy);
      } else if (ball.y + ball.r > height - pad) {
        ball.y = height - pad - ball.r;
        ball.vy = -Math.abs(ball.vy);
      }

      const leftX = pad + 8;
      const rightX = width - pad - 18;
      if (ball.vx < 0 && ball.x - ball.r <= leftX + 10 && ball.x > leftX && ball.y > playerY && ball.y < playerY + h) {
        ball.x = leftX + 10 + ball.r;
        bouncePaddle(playerY, 1);
        aiAim = (Math.random() * 2 - 1) * settings().error;
      } else if (ball.vx > 0 && ball.x + ball.r >= rightX && ball.x < rightX + 16 && ball.y > aiY && ball.y < aiY + h) {
        ball.x = rightX - ball.r;
        bouncePaddle(aiY, -1);
      }

      if (ball.x < -20) scorePoint('ai');
      else if (ball.x > width + 20) scorePoint('you');
      else light(ball.x, ball.y);

      trail.push({ x: ball.x, y: ball.y });
      if (trail.length > (reduce ? 1 : 8)) trail.shift();
      for (let i = 0; i < glowRef.current.length; i++) glowRef.current[i] *= Math.pow(0.08, dt);
      burstsRef.current.forEach((burst) => {
        burst.life -= dt * 1.6;
      });
      burstsRef.current = burstsRef.current.filter((burst) => burst.life > 0);
    };

    const roundRect = (x: number, y: number, w: number, h: number, r: number) => {
      const radius = Math.min(r, w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.arcTo(x + w, y, x + w, y + h, radius);
      ctx.arcTo(x + w, y + h, x, y + h, radius);
      ctx.arcTo(x, y + h, x, y, radius);
      ctx.arcTo(x, y, x + w, y, radius);
      ctx.closePath();
    };

    const draw = () => {
      const gap = 3;
      const innerW = width - pad * 2;
      const innerH = height - pad * 2;
      const cellW = (innerW - gap * (COLS - 1)) / COLS;
      const cellH = (innerH - gap * (ROWS - 1)) / ROWS;
      const grid = gridRef.current;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(6, 10, 18, 0.78)';
      roundRect(0, 0, width, height, 16);
      ctx.fill();

      for (let col = 0; col < COLS; col++) {
        for (let row = 0; row < ROWS; row++) {
          const x = pad + col * (cellW + gap);
          const y = pad + row * (cellH + gap);
          const glow = glowRef.current[col * ROWS + row];
          ctx.fillStyle = LEVELS[grid[col][row]] ?? LEVELS[0];
          roundRect(x, y, cellW, cellH, 2);
          ctx.fill();
          if (glow > 0.04) {
            ctx.save();
            ctx.globalAlpha = Math.min(1, glow);
            ctx.fillStyle = glow > 0.55 ? '#d8fff4' : '#7ee787';
            ctx.shadowColor = '#5eead4';
            ctx.shadowBlur = reduce ? 0 : 12 * glow;
            roundRect(x, y, cellW, cellH, 2);
            ctx.fill();
            ctx.restore();
          }
        }
      }

      const h = paddleHeight();
      const drawPaddle = (x: number, y: number) => {
        const gradient = ctx.createLinearGradient(x, y, x, y + h);
        gradient.addColorStop(0, 'rgba(255,255,255,0.95)');
        gradient.addColorStop(1, 'rgba(186, 230, 253, 0.75)');
        ctx.fillStyle = gradient;
        ctx.shadowColor = 'rgba(125, 211, 252, 0.8)';
        ctx.shadowBlur = reduce ? 0 : 16;
        roundRect(x, y, 10, h, 6);
        ctx.fill();
        ctx.shadowBlur = 0;
      };
      drawPaddle(pad + 8, playerY);
      drawPaddle(width - pad - 18, aiY);

      if (!reduce) {
        trail.forEach((point, index) => {
          ctx.globalAlpha = ((index + 1) / trail.length) * 0.35;
          ctx.fillStyle = '#67e8f9';
          ctx.beginPath();
          ctx.arc(point.x, point.y, ball.r * 0.7, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.globalAlpha = 1;
      }
      ctx.fillStyle = '#f8fafc';
      ctx.shadowColor = '#67e8f9';
      ctx.shadowBlur = reduce ? 0 : 18;
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const frame = (now: number) => {
      if (!alive) return;
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;
      if (!document.hidden) {
        update(dt);
        draw();
      }
      raf = window.requestAnimationFrame(frame);
    };

    const pointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const y = ((event.clientY - rect.top) / rect.height) * height;
      control = 'pointer';
      playerTarget = y - paddleHeight() / 2;
    };
    const down = (event: PointerEvent) => {
      canvas.setPointerCapture(event.pointerId);
      pointer(event);
    };
    const onReset = () => {
      you = 0;
      ai = 0;
      rally = 0;
      runningRef.current = false;
      playerY = height / 2 - paddleHeight() / 2;
      aiY = playerY;
      playerTarget = playerY;
      serve('ai');
      ball.hold = 0;
      trail.length = 0;
    };
    const key = (event: KeyboardEvent, down: boolean) => {
      if (event.key === 'ArrowUp' || event.key === 'w' || event.key === 'W') {
        keys.up = down;
        control = 'keys';
        event.preventDefault();
      } else if (event.key === 'ArrowDown' || event.key === 's' || event.key === 'S') {
        keys.down = down;
        control = 'keys';
        event.preventDefault();
      }
    };
    const onKeyDown = (event: KeyboardEvent) => key(event, true);
    const onKeyUp = (event: KeyboardEvent) => key(event, false);

    resize();
    playerY = height / 2 - paddleHeight() / 2;
    aiY = playerY;
    playerTarget = playerY;
    ball.x = width / 2;
    ball.y = height / 2;
    serve('ai');
    ball.hold = 0;
    draw();
    raf = window.requestAnimationFrame(frame);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('resize', resize);
    window.addEventListener('pong-reset', onReset);
    canvas.addEventListener('pointermove', pointer);
    canvas.addEventListener('pointerdown', down);
    return () => {
      alive = false;
      window.cancelAnimationFrame(raf);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pong-reset', onReset);
      canvas.removeEventListener('pointermove', pointer);
      canvas.removeEventListener('pointerdown', down);
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      try {
        const response = await fetch('https://github-contributions-api.jogruber.de/v4/KannanSA?y=last', {
          signal: controller.signal,
        });
        if (!response.ok) return;
        const data = (await response.json()) as { contributions?: { date: string; level: number }[] };
        const next = gridFromContributions(data.contributions ?? []);
        if (!next) return;
        gridRef.current = next;
        setSource("Kannan's live GitHub year");
      } catch {
        setSource('A sample contribution year');
      }
    };
    void load();
    return () => controller.abort();
  }, []);

  const reset = () => {
    litRef.current.clear();
    glowRef.current.fill(0);
    burstsRef.current = [];
    setTiles(0);
    setStreak(0);
    setScore({ you: 0, ai: 0 });
    setRunning(false);
    window.dispatchEvent(new Event('pong-reset'));
  };

  const cycleDifficulty = () => {
    setDifficulty((current) => (current === 'chill' ? 'arcade' : current === 'arcade' ? 'impossible' : 'chill'));
  };

  return (
    <div className="wrap">
      {missing ? (
        <div className="pong-missing">
          <h1 className="section-title">404 · Page not found — play Contribution Pong instead</h1>
          <a className="pill pill--solid" data-cursor-lock href="/">
            Back to sakannan.com
          </a>
        </div>
      ) : (
        <>
          <p className="study-kicker">Kannan S A · sakannan</p>
          <h1 className="section-title">Contribution Pong</h1>
          <p className="section-copy">
            Rally across a year of Kannan&apos;s GitHub contributions. Light a tile every time the ball crosses it.
          </p>
        </>
      )}
      <div className="pong-hud liquidglass">
        <div className="pong-stats">
          <p>
            <strong>
              {score.you}–{score.ai}
            </strong>
            <span>You vs AI</span>
          </p>
          <p>
            <strong>{streak}</strong>
            <span>Rally streak</span>
          </p>
          <p>
            <strong>{tiles}</strong>
            <span>Tiles lit</span>
          </p>
        </div>
        <div className="pong-actions">
          <button type="button" className="pill pill--solid pill--sm" data-cursor-lock onClick={() => setRunning((value) => !value)}>
            {running ? 'Pause' : 'Start'}
          </button>
          <button type="button" className="pill pill--ghost liquidglass pill--sm" data-cursor-lock onClick={reset}>
            Reset
          </button>
          <button type="button" className="pill pill--ghost liquidglass pill--sm" data-cursor-lock onClick={cycleDifficulty}>
            {SETTINGS[difficulty].label}
          </button>
        </div>
      </div>
      <div className="pong-stage liquidglass" ref={wrapRef} id="pong-arena">
        <canvas ref={canvasRef} aria-hidden="true" />
      </div>
      <div className="pong-links">
        <a href="/">← Back to sakannan.com</a>
        <a href={personalInfo.github} target="_blank" rel="me noopener noreferrer">
          GitHub
        </a>
        <span>{source}</span>
      </div>
      <p className="pong-help">Mouse, touch, or the arrow keys and W/S. The right paddle is beatable on every difficulty.</p>
    </div>
  );
}
