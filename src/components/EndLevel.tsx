import React from 'react';

interface EndLevelProps {
  isNearEnd: boolean;
  isAtEnd: boolean;
}

const EndLevel: React.FC<EndLevelProps> = ({ isNearEnd, isAtEnd }) => {
  return (
    <div className="fixed bottom-16 right-32 z-40 flex items-end">
      {/* Castle */}
      <div 
        className={`transition-opacity duration-500 ${isNearEnd ? 'opacity-100' : 'opacity-0'}`}
        style={{
          width: '128px',
          height: '128px',
          backgroundImage: 'url("https://i.imgur.com/voDuaj2.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'pixelated'
        }}
      />
      
      {/* Flag pole */}
      <div className="relative mr-32">
        <div 
          className={`absolute bottom-0 w-2 h-48 bg-white transition-opacity duration-500 ${
            isNearEnd ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Flag */}
        <div 
          className={`absolute w-12 h-12 -left-12 transition-all duration-1000 ${
            isAtEnd ? 'bottom-0' : 'bottom-40'
          }`}
          style={{
            backgroundImage: 'url("https://i.imgur.com/DYVrKWX.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            imageRendering: 'pixelated'
          }}
        />
      </div>
      
      {/* Princess */}
      <div 
        className={`absolute bottom-0 right-8 transition-all duration-500 ${
          isAtEnd ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
        }`}
        style={{
          width: '48px',
          height: '64px',
          backgroundImage: 'url("https://i.imgur.com/8xXGcNW.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'pixelated'
        }}
      />
    </div>
  );
};

export default EndLevel;