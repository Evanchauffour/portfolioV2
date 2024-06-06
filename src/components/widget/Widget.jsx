import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Widget({ children, gridArea, delay, x = 0, y = 0}) {
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
    <motion.div 
      className='relative overflow-hidden rounded-lg p-px light:bg-lightBackground darkTheme:bg-darkBackground shadow-lg light:shadow-slate-300 darkTheme:shadow-black'
      style={{ 
        gridArea: gridArea,
      }}      
      ref={widgetRef} 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
      initial={{ x: x, y: y, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: .5, delay: delay}}
    >
        <div className='flex size-full items-center justify-center rounded-lg'>
          {hovered && (
          <div style={{ transform: `translate(${mousePos.x - 140}px, ${mousePos.y - 140}px)`, boxShadow: '5px 5px 50px 50px #29D196', filter: 'blur(100px)' }} className='absolute left-0 top-0 size-80 origin-center opacity-20 light:opacity-40 theme1:bg-darkPrimary theme2:bg-theme2-accent theme3:bg-theme3-primary md:block hidden'></div>
          )}
          {children}
        </div>
    </motion.div>
  );
}
