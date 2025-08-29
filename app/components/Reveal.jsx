"use client";
import { useEffect, useRef, useState } from "react";

// Simple intersection-based reveal wrapper
// Props:
// - children: ReactNode
// - animation: "fade-up" | "fade" | "zoom" | "slide-left" | "slide-right"
// - delay: number (ms)
// - duration: number (ms)
export default function Reveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { root: null, threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const base = "transition-transform transition-opacity will-change-transform will-change-opacity ease-out";
  const time = `duration-[${duration}ms]`;
  const style = { transitionDelay: `${delay}ms` };

  const hiddenMap = {
    "fade-up": "opacity-0 translate-y-6",
    fade: "opacity-0",
    zoom: "opacity-0 scale-[0.97]",
    "slide-left": "opacity-0 -translate-x-6",
    "slide-right": "opacity-0 translate-x-6",
  };

  const showMap = {
    "fade-up": "opacity-100 translate-y-0",
    fade: "opacity-100",
    zoom: "opacity-100 scale-100",
    "slide-left": "opacity-100 translate-x-0",
    "slide-right": "opacity-100 translate-x-0",
  };

  const cls = `${base} ${time} ${visible ? showMap[animation] : hiddenMap[animation]}`;

  return (
    <div ref={ref} className={cls} style={style}>
      {children}
    </div>
  );
}