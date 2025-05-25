import "./Meteors.css";

export const Meteors = () => {
  return (
    <div className="meteor-wrapper">
      {Array.from({ length: 20 }).map((_, i) => {
        const left = Math.random() * 100; // random horizontal position
        const duration = 3 + Math.random() * 5; // random duration between 3s to 8s
        const delay = Math.random() * 10; // random start delay
        return (
          <div
            key={i}
            className="meteor"
            style={{
              left: `${left}vw`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};
