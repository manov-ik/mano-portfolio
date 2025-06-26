import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const hide = () => setVisible(false);
    const show = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", hide);
    window.addEventListener("mouseover", show);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", hide);
      window.removeEventListener("mouseover", show);
    };
  }, []);

  return (
    <>
      {/* Inner filled dot */}
      <div
        className={`fixed w-5 h-5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75 ease-linear ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate3d(${position.x - 10}px, ${
            position.y - 10
          }px, 0)`,
        }}
      />

      {/* Outer ring */}
      <div
        className={`fixed w-10 h-10 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference transition-transform duration-200 ease-out  ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate3d(${position.x - 20}px, ${
            position.y - 20
          }px, 0)`,
        }}
      />
    </>
  );
}
