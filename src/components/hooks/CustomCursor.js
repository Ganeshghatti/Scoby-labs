const { useRef, useEffect } = require("react");

export const CustomCursor= () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('.hover-trigger')) {
        cursorRef.current?.classList.add('hovered');
      } else {
        cursorRef.current?.classList.remove('hovered');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return <div id="cursor" ref={cursorRef} />;
};