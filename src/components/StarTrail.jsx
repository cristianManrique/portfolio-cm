import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// ─── Styled canvas ────────────────────────────────────────────────────────────
const Canvas = styled.canvas`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
  display: block;
`;

// ─── Global bg fix — injected once ───────────────────────────────────────────
const injectGlobals = () => {
  if (document.getElementById('star-trail-globals')) return;
  const s = document.createElement('style');
  s.id = 'star-trail-globals';
  s.textContent = 'html,body,#root{background:transparent!important}';
  document.head.appendChild(s);
};

// ─── Lightweight star — plain object, no class overhead ──────────────────────
const mkStar = (x, y, colors, speed, decay) => ({
  x, y,
  size:     Math.random() * 2.5 + 0.8,
  points:   Math.floor(Math.random() * 2) + 4,
  color:    colors[Math.random() * colors.length | 0],
  alpha:    1,
  vx:       (Math.random() - 0.5) * speed,
  vy:       (Math.random() - 0.5) * speed - 0.8,
  rot:      Math.random() * Math.PI * 2,
  rotSpeed: (Math.random() - 0.5) * 0.15,
  decay:    Math.random() * decay + decay * 0.8,
});

// ─── Draw a single star ───────────────────────────────────────────────────────
const drawStar = (ctx, s, glowColor, glowBlur) => {
  const { x, y, points, size, color, alpha, rot } = s;
  const outerR = size * 2.2;
  const innerR = size;
  const step = Math.PI / points;
  let r = (Math.PI / 2) * 3;

  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.beginPath();
  ctx.moveTo(0, -outerR);
  for (let i = 0; i < points; i++) {
    ctx.lineTo(Math.cos(r) * outerR, Math.sin(r) * outerR); r += step;
    ctx.lineTo(Math.cos(r) * innerR, Math.sin(r) * innerR); r += step;
  }
  ctx.closePath();
  ctx.fillStyle   = color;
  ctx.shadowColor = glowColor;
  ctx.shadowBlur  = glowBlur;
  ctx.fill();
  ctx.restore();
};

// ─── hex → [r,g,b] (cached) ──────────────────────────────────────────────────
const rgbCache = {};
const toRgb = hex => {
  if (rgbCache[hex]) return rgbCache[hex];
  const c = hex.replace('#', '');
  const v = c.length === 3
    ? c.split('').map(x => parseInt(x + x, 16))
    : [parseInt(c.slice(0,2),16), parseInt(c.slice(2,4),16), parseInt(c.slice(4,6),16)];
  return (rgbCache[hex] = v);
};

// ─────────────────────────────────────────────────────────────────────────────
const StarTrail = ({
  colors     = ["#00b4c8","#00b4c8","#007a8a","#a0c4d8","#ffffff"],
  starCount  = 3,
  decay      = 0.022,
  gravity    = 0.05,
  speed      = 2,
  glowBlur   = 8,
  glowColor  = "#00b4c8",
  background = "#02253B",
  trailAlpha = 0.2,
  className  = "",
  style      = {},
  children,
}) => {
  const canvasRef  = useRef(null);
  const starsRef   = useRef([]);
  const rafRef     = useRef(null);
  const lastRef    = useRef(0);          // throttle timestamp

  // ── Spawn — throttled to max 1× per 30ms (~33fps input) ───────────────────
  const spawn = useCallback((x, y) => {
    const now = performance.now();
    if (now - lastRef.current < 30) return;
    lastRef.current = now;
    for (let i = 0; i < starCount; i++) {
      starsRef.current.push(mkStar(
        x + (Math.random() - 0.5) * 12,
        y + (Math.random() - 0.5) * 12,
        colors, speed, decay
      ));
    }
    // Hard cap — never more than 120 stars alive
    if (starsRef.current.length > 120) starsRef.current.splice(0, 20);
  }, [colors, starCount, speed, decay]);

  useEffect(() => { injectGlobals(); }, []);

  // ── Render loop ────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    // willReadFrequently = false here (we only write), but set alpha: true
    const ctx = canvas.getContext("2d", { alpha: true });

    // Set initial size
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    // On resize: only reset if dimensions actually changed,
    // then immediately repaint bg to avoid white flash
    let resizeTimer = null;
    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas.width === w && canvas.height === h) return;
      canvas.width  = w;
      canvas.height = h;
      // Repaint background immediately so the reset canvas is never white
      ctx.fillStyle = bgFill;
      ctx.fillRect(0, 0, w, h);
    };

    // Debounced resize — fire immediately on first call, then wait 100ms
    const onResize = () => {
      resize(); // immediate repaint on every resize event
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 100);
    };
    window.addEventListener("resize", onResize);

    const [r, g, b] = toRgb(background);
    const bgFill = `rgba(${r},${g},${b},${trailAlpha})`;

    const loop = () => {
      ctx.fillStyle = bgFill;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const stars = starsRef.current;
      for (let i = stars.length - 1; i >= 0; i--) {
        const s = stars[i];
        s.x   += s.vx;
        s.y   += s.vy;
        s.vy  += gravity;
        s.alpha -= s.decay;
        s.rot += s.rotSpeed;
        if (s.alpha <= 0) { stars.splice(i, 1); continue; }
        drawStar(ctx, s, glowColor, glowBlur);
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
    };
  }, [gravity, glowColor, glowBlur, trailAlpha, background]);

  // ── Input listeners ────────────────────────────────────────────────────────
  useEffect(() => {
    const onMove  = e => spawn(e.clientX, e.clientY);
    const onTouch = e => spawn(e.touches[0].clientX, e.touches[0].clientY);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [spawn]);

  return (
    <>
      <Canvas ref={canvasRef} />
      <div className={className} style={{ position: "relative", zIndex: 1, ...style }}>
        {children}
      </div>
    </>
  );
};

StarTrail.propTypes = {
  colors:     PropTypes.arrayOf(PropTypes.string),
  starCount:  PropTypes.number,
  decay:      PropTypes.number,
  gravity:    PropTypes.number,
  speed:      PropTypes.number,
  trailAlpha: PropTypes.number,
  glowColor:  PropTypes.string,
  glowBlur:   PropTypes.number,
  background: PropTypes.string,
  className:  PropTypes.string,
  style:      PropTypes.object,
  children:   PropTypes.node,
};

export default React.memo(StarTrail);
