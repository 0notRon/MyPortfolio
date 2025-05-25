import { useTrail, animated } from '@react-spring/web';
import { useEffect } from 'react';
import './BlobCursor.css';

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };

const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%, -50%, 0)`;

export const BlobCursor = () => {
  const [trail, api] = useTrail(3, () => ({
    xy: [window.innerWidth / 2, window.innerHeight / 2],
    config: (i) => (i === 0 ? fast : slow),
  }));

  useEffect(() => {
    const handleMouseMove = (e) => {
      api.start({ xy: [e.clientX, e.clientY] });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [api]);

  const colors = [
    'radial-gradient(circle at center, #4E71FF, #5409DA)',
    'radial-gradient(circle at center, #00f260, #0575e6)',
    'radial-gradient(circle at center, #6FE6FC, #4ED7F1)',
  ];

  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="gooey" colorInterpolationFilters="sRGB">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 18 -7"
            result="gooey"
          />
          <feBlend in="SourceGraphic" in2="gooey" />
        </filter>
      </svg>

      <div className="blob-container">
        {trail.map((springStyle, index) => (
          <animated.div
            key={index}
            style={{
              transform: springStyle.xy.to(trans),
              borderRadius: '50%',
              background: colors[index % colors.length],
              filter: 'url(#gooey)',
              width: 40 - index * 8,
              height: 40 - index * 8,
              position: 'fixed',
              pointerEvents: 'none',
              top: 0,
              left: 0,
              zIndex: 9999 - index,
              boxShadow: '0 0 20px rgba(255,255,255,0.3)',
              mixBlendMode: 'screen',
              opacity: 0.85,
            }}
          />
        ))}
      </div>
    </>
  );
};
export default BlobCursor;
