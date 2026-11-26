'use client';

import { useEffect, useRef } from 'react';

type Star = { x: number; y: number; depth: number; size: number; alpha: number; tw: number; ph: number };
type Shot = { x: number; y: number; vx: number; vy: number; born: number; life: number };

const VERT = `
attribute vec2 a;
void main(){ gl_Position = vec4(a, 0.0, 1.0); }
`;

const FRAG = `
precision mediump float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_par;

float hash(vec2 p){
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}
float noise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0;
  float a = 0.5;
  mat2 m = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = m * p * 2.05 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res;
  uv.y = 1.0 - uv.y;
  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 p = vec2(uv.x * aspect, uv.y);
  vec2 drift = vec2(u_time * 0.011, u_time * 0.007) + u_par * 0.06;
  float n1 = fbm(p * 1.25 + drift);
  float n2 = fbm(p * 2.15 - drift.yx + 3.4);
  float n3 = fbm(p * 0.72 + drift * 0.6 + 8.0);
  float clouds = n1 * 0.55 + n2 * 0.3 + n3 * 0.15;

  vec3 col = vec3(0.008, 0.01, 0.02);
  vec2 hero = uv - vec2(0.5, 0.33);
  float heroMask = smoothstep(0.62, 0.08, length(hero * vec2(1.05, 1.2)));
  float field = 1.0 - heroMask * 0.78;

  vec3 violet = vec3(0.36, 0.1, 0.78);
  vec3 blue = vec3(0.05, 0.42, 1.0);
  vec3 magenta = vec3(0.82, 0.1, 0.5);
  vec3 orange = vec3(1.0, 0.46, 0.08);

  float left = smoothstep(0.15, 0.72, fbm(p * 1.05 + vec2(drift.x, 0.2)));
  col += violet * left * 0.62 * field * smoothstep(0.85, 0.15, uv.x);
  col += blue * smoothstep(0.35, 0.82, n2) * 0.5 * field * smoothstep(0.2, 0.95, uv.x);
  col += magenta * smoothstep(0.55, 0.92, n3) * 0.3 * field * smoothstep(0.55, 0.98, uv.y);
  col += orange * pow(clouds, 1.8) * 0.34 * field * smoothstep(0.72, 1.0, uv.y);

  float bow = pow((uv.x - 0.5) * 2.0, 2.0);
  float horizon = 0.93 + bow * 0.05;
  float dist = uv.y - horizon;
  float air = exp(-max(dist, 0.0) * 16.0) * exp(-pow(max(-dist, 0.0) * 28.0, 2.0));
  float glow = exp(-pow(dist * 30.0, 2.0));
  float ground = smoothstep(horizon - 0.004, horizon + 0.08, uv.y);
  col += vec3(0.28, 0.58, 1.0) * air * 0.7;
  col += vec3(1.0, 0.52, 0.14) * glow * 0.75;
  col += vec3(1.0, 0.3, 0.05) * ground * 0.16 * (0.45 + 0.55 * n1);
  col *= mix(1.0, 0.62, smoothstep(horizon + 0.015, 1.0, uv.y));

  float vig = smoothstep(1.15, 0.25, length((uv - vec2(0.5, 0.36)) * vec2(1.2, 1.35)));
  col *= mix(0.42, 1.0, vig);
  col *= mix(1.0, 0.62, heroMask);

  float dither = hash(gl_FragCoord.xy + fract(u_time * 0.37)) - 0.5;
  col += dither / 90.0;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

function fallbackMedia(): MediaQueryList {
  return {
    matches: false,
    media: '',
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() {
      return false;
    },
  };
}

function onMediaChange(query: MediaQueryList, listener: () => void) {
  if (typeof query.addEventListener === 'function') {
    query.addEventListener('change', listener);
    return () => query.removeEventListener('change', listener);
  }
  const legacy = query as MediaQueryList & {
    addListener?: (fn: () => void) => void;
    removeListener?: (fn: () => void) => void;
  };
  legacy.addListener?.(listener);
  return () => legacy.removeListener?.(listener);
}

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function SpaceBackdrop() {
  const nebulaRef = useRef<HTMLCanvasElement>(null);
  const starRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const nebula = nebulaRef.current;
    const starsCanvas = starRef.current;
    if (!nebula || !starsCanvas) return;
    const starCtx = starsCanvas.getContext('2d', { alpha: true });
    if (!starCtx) return;

    const motion = window.matchMedia?.('(prefers-reduced-motion: reduce)') ?? fallbackMedia();
    const fine = window.matchMedia?.('(hover: hover) and (pointer: fine)') ?? fallbackMedia();
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = true;
    let stars: Star[] = [];
    let shot: Shot | null = null;
    let nextShot = 7000 + Math.random() * 9000;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    let scroll = 0;

    let gl: WebGLRenderingContext | null = null;
    try {
      gl = nebula.getContext('webgl', {
        alpha: false,
        antialias: false,
        depth: false,
        stencil: false,
        powerPreference: 'low-power',
        preserveDrawingBuffer: false,
      });
    } catch {
      gl = null;
    }

    let program: WebGLProgram | null = null;
    let uRes: WebGLUniformLocation | null = null;
    let uTime: WebGLUniformLocation | null = null;
    let uPar: WebGLUniformLocation | null = null;
    let buffer: WebGLBuffer | null = null;

    if (gl) {
      const vs = compile(gl, gl.VERTEX_SHADER, VERT);
      const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
      if (vs && fs) {
        program = gl.createProgram();
        if (program) {
          gl.attachShader(program, vs);
          gl.attachShader(program, fs);
          gl.bindAttribLocation(program, 0, 'a');
          gl.linkProgram(program);
          if (!gl.getProgramParameter(program, gl.LINK_STATUS)) program = null;
        }
      }
      if (program) {
        uRes = gl.getUniformLocation(program, 'u_res');
        uTime = gl.getUniformLocation(program, 'u_time');
        uPar = gl.getUniformLocation(program, 'u_par');
        buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      }
    }

    const flat = !program || !gl;
    // A canvas only has one context. Requesting 2d after webgl returns null in
    // Chromium and throws InvalidStateError in WebKit. React 19 reports that
    // effect exception as the full-page "Application error" screen, which is
    // what a Google result click showed when the fragment shader could not compile.
    let flatCtx: CanvasRenderingContext2D | null = null;
    if (!gl) {
      try {
        flatCtx = nebula.getContext('2d', { alpha: false });
      } catch {
        flatCtx = null;
      }
    }

    const makeStars = () => {
      const area = width * height;
      const far = Math.min(150, Math.round(area / 14000));
      const mid = Math.min(70, Math.round(area / 28000));
      const near = Math.min(28, Math.round(area / 70000));
      const list: Star[] = [];
      const push = (count: number, depth: number, size: number, alpha: number) => {
        for (let i = 0; i < count; i++) {
          list.push({
            x: Math.random(),
            y: Math.random(),
            depth,
            size: size * (0.7 + Math.random() * 0.8),
            alpha: alpha * (0.55 + Math.random() * 0.45),
            tw: 0.4 + Math.random() * 1.6,
            ph: Math.random() * Math.PI * 2,
          });
        }
      };
      push(far, 0.18, 0.7, 0.45);
      push(mid, 0.5, 1.15, 0.7);
      push(near, 1, 1.8, 0.95);
      stars = list;
    };

    const resize = () => {
      width = window.innerWidth || 0;
      height = window.innerHeight || 0;
      if (width < 1 || height < 1) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const nebulaScale = flat ? dpr : Math.min(dpr, 1) * 0.62;
      const long = Math.max(width, height);
      const cap = long > 0 ? Math.min(1, 960 / (long * nebulaScale)) : 1;
      nebula.width = Math.max(2, Math.floor(width * nebulaScale * cap));
      nebula.height = Math.max(2, Math.floor(height * nebulaScale * cap));
      starsCanvas.width = Math.max(2, Math.floor(width * dpr));
      starsCanvas.height = Math.max(2, Math.floor(height * dpr));
      starCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeStars();
    };

    const drawFlat = (time: number) => {
      if (!flatCtx) {
        if (!gl || nebula.width < 1 || nebula.height < 1) return;
        gl.viewport(0, 0, nebula.width, nebula.height);
        gl.clearColor(0.012, 0.016, 0.035, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        return;
      }
      if (width < 1 || height < 1) return;
      const scaleX = nebula.width / width;
      const scaleY = nebula.height / height;
      if (!Number.isFinite(scaleX) || !Number.isFinite(scaleY)) return;
      flatCtx.setTransform(scaleX, 0, 0, scaleY, 0, 0);
      flatCtx.fillStyle = '#05060d';
      flatCtx.fillRect(0, 0, width, height);
      const blobs: [number, number, number, string][] = [
        [width * 0.08, height * 0.1, Math.max(width, height) * 0.46, 'rgba(88, 36, 190, 0.45)'],
        [width * 0.92, height * 0.18, Math.max(width, height) * 0.4, 'rgba(20, 110, 255, 0.35)'],
        [width * 0.2, height * 0.78, Math.max(width, height) * 0.42, 'rgba(190, 30, 130, 0.28)'],
        [width * 0.78, height * 0.86, Math.max(width, height) * 0.5, 'rgba(255, 110, 24, 0.32)'],
      ];
      for (const [x, y, radius, color] of blobs) {
        const shift = motion.matches ? 0 : Math.sin(time * 0.05 + x) * 12;
        const g = flatCtx.createRadialGradient(x + shift, y, 0, x, y, radius);
        g.addColorStop(0, color);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        flatCtx.fillStyle = g;
        flatCtx.beginPath();
        flatCtx.arc(x + shift, y, radius, 0, Math.PI * 2);
        flatCtx.fill();
      }
      const limb = flatCtx.createLinearGradient(0, height * 0.86, 0, height);
      limb.addColorStop(0, 'rgba(0,0,0,0)');
      limb.addColorStop(0.28, 'rgba(40, 120, 255, 0.22)');
      limb.addColorStop(0.5, 'rgba(255, 140, 40, 0.32)');
      limb.addColorStop(1, 'rgba(40, 12, 4, 0.5)');
      flatCtx.fillStyle = limb;
      flatCtx.fillRect(0, height * 0.84, width, height * 0.16);
      const vignette = flatCtx.createRadialGradient(width * 0.5, height * 0.34, width * 0.08, width * 0.5, height * 0.4, width * 0.72);
      vignette.addColorStop(0, 'rgba(0,0,0,0.45)');
      vignette.addColorStop(1, 'rgba(0,0,0,0)');
      flatCtx.fillStyle = vignette;
      flatCtx.fillRect(0, 0, width, height);
    };

    const drawNebula = (now: number) => {
      const time = motion.matches ? 0 : now / 1000;
      const parX = pointer.x + scroll * 0.00012;
      const parY = pointer.y + scroll * 0.0002;
      if (gl && program && buffer) {
        gl.viewport(0, 0, nebula.width, nebula.height);
        gl.useProgram(program);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
        gl.uniform2f(uRes, nebula.width, nebula.height);
        gl.uniform1f(uTime, time);
        gl.uniform2f(uPar, parX, parY);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        return;
      }
      drawFlat(time);
    };

    const drawStars = (now: number) => {
      const time = now / 1000;
      starCtx.clearRect(0, 0, width, height);
      const px = fine.matches && !motion.matches ? pointer.x : 0;
      const py = fine.matches && !motion.matches ? pointer.y : 0;
      const sy = motion.matches ? 0 : scroll;
      for (const star of stars) {
        const drift = motion.matches ? 0 : time * (0.002 + star.depth * 0.004);
        const x = ((star.x + drift) % 1) * width + px * star.depth * 16 - sy * star.depth * 0.03;
        const y = star.y * height + py * star.depth * 10;
        const twinkle = motion.matches || star.depth < 0.7 ? 1 : 0.65 + 0.35 * Math.sin(time * star.tw + star.ph);
        starCtx.globalAlpha = Math.max(0, Math.min(1, star.alpha * twinkle));
        starCtx.fillStyle = star.depth > 0.85 ? '#fff6e8' : '#e7eeff';
        starCtx.fillRect(x, y, star.size, star.size);
      }
      starCtx.globalAlpha = 1;
      if (motion.matches) return;
      if (!shot && now > nextShot) {
        const fromLeft = Math.random() > 0.5;
        shot = {
          x: fromLeft ? width * 0.15 : width * 0.8,
          y: height * (0.12 + Math.random() * 0.35),
          vx: (fromLeft ? 1 : -1) * (width * 0.55),
          vy: height * 0.18,
          born: now,
          life: 700,
        };
      }
      if (shot) {
        const t = (now - shot.born) / shot.life;
        if (t >= 1) {
          shot = null;
          nextShot = now + 11000 + Math.random() * 14000;
        } else {
          const x = shot.x + shot.vx * t;
          const y = shot.y + shot.vy * t;
          const tail = 90;
          const gradient = starCtx.createLinearGradient(x - shot.vx * 0.08, y - shot.vy * 0.08, x, y);
          gradient.addColorStop(0, 'rgba(255,255,255,0)');
          gradient.addColorStop(1, 'rgba(255, 236, 214, 0.85)');
          starCtx.strokeStyle = gradient;
          starCtx.lineWidth = 1.4;
          starCtx.globalAlpha = Math.sin(Math.PI * t) * 0.9;
          starCtx.beginPath();
          starCtx.moveTo(x - (shot.vx / Math.hypot(shot.vx, shot.vy)) * tail, y - (shot.vy / Math.hypot(shot.vx, shot.vy)) * tail);
          starCtx.lineTo(x, y);
          starCtx.stroke();
          starCtx.globalAlpha = 1;
        }
      }
    };

    const frame = (now: number) => {
      if (!running || document.hidden) return;
      try {
        if (fine.matches) {
          pointer.x += (pointer.tx - pointer.x) * 0.06;
          pointer.y += (pointer.ty - pointer.y) * 0.06;
        }
        drawNebula(now);
        drawStars(now);
      } catch {
        running = false;
        return;
      }
      if (!motion.matches) raf = window.requestAnimationFrame(frame);
    };

    const start = () => {
      window.cancelAnimationFrame(raf);
      if (!running || document.hidden || motion.matches) return;
      raf = window.requestAnimationFrame(frame);
    };

    const paint = () => {
      drawNebula(performance.now());
      drawStars(performance.now());
    };

    const onResize = () => {
      try {
        resize();
        paint();
      } catch {
        running = false;
      }
    };
    const onScroll = () => {
      scroll = window.scrollY || 0;
    };
    const onPointer = (event: PointerEvent) => {
      if (!fine.matches || motion.matches) return;
      pointer.tx = (event.clientX / Math.max(width, 1) - 0.5) * 2;
      pointer.ty = (event.clientY / Math.max(height, 1) - 0.5) * 2;
    };
    const onVis = () => {
      window.cancelAnimationFrame(raf);
      if (!document.hidden) start();
    };
    const onMotion = () => {
      window.cancelAnimationFrame(raf);
      paint();
      start();
    };

    try {
      resize();
      paint();
      start();
    } catch {
      running = false;
    }
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onPointer, { passive: true });
    document.addEventListener('visibilitychange', onVis);
    const stopMotion = onMediaChange(motion, onMotion);
    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointer);
      document.removeEventListener('visibilitychange', onVis);
      stopMotion();
      if (gl) {
        if (buffer) gl.deleteBuffer(buffer);
        if (program) gl.deleteProgram(program);
      }
    };
  }, []);

  return (
    <>
      <canvas ref={nebulaRef} className="space-backdrop space-backdrop--nebula" aria-hidden="true" />
      <canvas ref={starRef} className="space-backdrop space-backdrop--stars" aria-hidden="true" />
    </>
  );
}
