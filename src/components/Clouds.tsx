import React from 'react';

interface CloudProps {
  scrollPosition: number;
}

const Clouds: React.FC<CloudProps> = ({ scrollPosition }) => {
  const clouds = [
    { size: 64, speed: 0.5, initialOffset: 0 },
    { size: 48, speed: 0.3, initialOffset: 200 },
    { size: 56, speed: 0.4, initialOffset: 400 },
    { size: 40, speed: 0.6, initialOffset: 600 },
    { size: 52, speed: 0.35, initialOffset: 800 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {clouds.map((cloud, index) => {
        const position = (scrollPosition * cloud.speed + cloud.initialOffset) % window.innerWidth;
        
        return (
          <div
            key={index}
            className="absolute"
            style={{
              width: cloud.size,
              height: cloud.size,
              left: `${position}px`,
              top: `${(index + 1) * 80}px`,
              backgroundImage: 'url("https://i.imgur.com/E3eCu2w.png")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              imageRendering: 'pixelated',
              transform: `scale(${cloud.size / 32})`,
              opacity: 0.8
            }}
          />
        );
      })}
    </div>
  );
};

export default Clouds;