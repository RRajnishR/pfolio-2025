import React from 'react';

interface MarioProps {
  scrollPosition: number;
  activeSectionIndex: number;
}

const Mario: React.FC<MarioProps> = ({ scrollPosition, activeSectionIndex }) => {
  // Calculate total document height
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  
  // Calculate Mario's horizontal position based on scroll progress
  const scrollProgress = Math.min(scrollPosition / documentHeight, 1);
  const marioX = scrollProgress * (window.innerWidth * 0.8); // 80% of screen width

  return (
    <div 
      className="fixed bottom-16 z-50 transition-all duration-100"
      style={{ 
        left: `${Math.max(50, marioX)}px`,
        transform: `scale(2)`,
      }}
    >
      <div 
        className="w-8 h-8 animate-run"
        style={{
          width: '32px',
          height: '32px',
          backgroundImage: 'url("https://i.imgur.com/mP0qXBk.png")',
          imageRendering: 'pixelated'
        }}
      />
    </div>
  );
};

export default Mario;