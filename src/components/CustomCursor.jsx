import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      {/* THE OUTER SHINY RING */}
      <div 
        className="cursor-outline fixed top-0 left-0 pointer-events-none transition-transform duration-100 ease-out"
        style={{ 
          transform: `translate(${position.x - 45}px, ${position.y - 45}px)`,
        }}
      />
      
      {/* THE CENTER DOT */}
      <div 
        className="cursor-dot fixed top-0 left-0 pointer-events-none"
        style={{ 
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;