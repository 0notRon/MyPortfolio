import { useEffect } from "react";

export const CursorTrail = () => {
  useEffect(() => {
    const trailLength = 15;
    const dots = [];

    const gradients = [
      "radial-gradient(circle at center, #ff6a00 0%, transparent 80%)",
      "radial-gradient(circle at center, #ee0979 0%, transparent 80%)",
      "radial-gradient(circle at center, #00f260 0%, transparent 80%)",
      "radial-gradient(circle at center, #0575e6 0%, transparent 80%)",
    ];

    for (let i = 0; i < trailLength; i++) {
      const dot = document.createElement("div");
      dot.className = "trail-dot";
      dot.style.position = "fixed";
      dot.style.width = `${10 + i * 2}px`;  
      dot.style.height = `${10 + i * 2}px`;
      dot.style.borderRadius = "50%";
      dot.style.background = gradients[i % gradients.length];
      dot.style.pointerEvents = "none";
      dot.style.zIndex = 9999;
      dot.style.transform = "translate(-50%, -50%)";
      dot.style.opacity = `${0.6 - i * 0.04}`; 
      dot.style.boxShadow = `0 0 ${5 + i}px ${gradients[i % gradients.length].split(' ')[0]}`;
      document.body.appendChild(dot);
      dots.push({ el: dot, x: 0, y: 0 });
    }

    let mouse = { x: 0, y: 0 };

    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      let x = mouse.x;
      let y = mouse.y;

      // eslint-disable-next-line no-unused-vars
      dots.forEach((dot, index) => {
        dot.x += (x - dot.x) * 0.3;
        dot.y += (y - dot.y) * 0.3;
        dot.el.style.left = dot.x + "px";
        dot.el.style.top = dot.y + "px";

        x = dot.x;
        y = dot.y;
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", move);
    animate();

    return () => {
      document.removeEventListener("mousemove", move);
      dots.forEach((dot) => document.body.removeChild(dot.el));
    };
  }, []);

  return null;
};
