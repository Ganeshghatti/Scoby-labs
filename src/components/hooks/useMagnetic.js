"use client";

import { useEffect, useRef } from "react";


export const useMagnetic = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMouseMove = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const onMouseLeave = () => {
      el.style.transform = 'translate(0, 0)';
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);
    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return ref;
};
