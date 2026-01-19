import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* OUTER CIRCLE */}
      <div
        id="cursor-outer"
        style={{
          transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0)`,
        }}
      ></div>

      {/* INNER DOT */}
      <div
        id="cursor-inner"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;