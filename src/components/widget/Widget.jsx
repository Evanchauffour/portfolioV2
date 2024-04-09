import React, { useEffect, useRef, useState } from 'react';

export default function Widget({ children, gridArea }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX - widgetRef.current.offsetLeft, y: e.clientY - widgetRef.current.offsetTop });
    };

    const widget = widgetRef.current;
    if (widget) {
      widget.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (widget) {
        widget.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className='relative overflow-hidden rounded-lg bg-text p-px' style={{ gridArea: gridArea }} ref={widgetRef} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div className='flex size-full items-center justify-center rounded-lg bg-background'>
          {hovered && (
          <div style={{ transform: `translate(${mousePos.x - 140}px, ${mousePos.y - 140}px)`, boxShadow: '5px 5px 50px 50px #29D196', filter: 'blur(100px)' }} className='absolute left-0 top-0 size-60 origin-center bg-primary opacity-20'></div>
          )}
          {children}
        </div>
    </div>
  );
}
