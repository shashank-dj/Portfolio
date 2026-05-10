import { useEffect, useState } from 'react';

export default function Cursor() {
  const [pos, setPos]       = useState({ x: -100, y: -100 });
  const [ring, setRing]     = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);

    // Smooth ring follow
    let frame;
    let rx = -100, ry = -100;
    const follow = () => {
      rx += (pos.x - rx) * 0.12;
      ry += (pos.y - ry) * 0.12;
      setRing({ x: rx, y: ry });
      frame = requestAnimationFrame(follow);
    };
    frame = requestAnimationFrame(follow);

    // Enlarge on interactive elements
    const onEnter = () => setActive(true);
    const onLeave = () => setActive(false);
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(frame);
    };
  }, [pos.x, pos.y]);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: pos.x - 4, top: pos.y - 4 }}
      />
      <div
        className="cursor-ring"
        style={{
          left:      ring.x - 18,
          top:       ring.y - 18,
          transform: active ? 'scale(1.6)' : 'scale(1)',
          opacity:   active ? 0.6 : 1,
        }}
      />
    </>
  );
}
