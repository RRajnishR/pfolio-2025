import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  content: any;
  isActive: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, content, isActive }) => {
  // Map section IDs to character GIFs
  const characterGifs: Record<string, { url: string; size: number }> = {
    about: {
      url: 'https://i.imgur.com/O3DHIA5.gif', // Luigi giving thumbs up
      size: 64
    },
    experience: {
      url: 'https://i.imgur.com/2F8Lf9l.gif', // Yoshi
      size: 64
    },
    skills: {
      url: 'https://i.imgur.com/VVDY5vg.gif', // Toad
      size: 48
    },
    projects: {
      url: 'https://i.imgur.com/8KKaZNF.gif', // Bowser Jr. with paintbrush
      size: 64
    }
  };

  const character = characterGifs[id];

  return (
    <section 
      id={id}
      className={`min-h-screen p-8 relative transition-all duration-500 ${
        isActive ? 'opacity-100' : 'opacity-50'
      }`}
    >
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg relative">
        {/* Character */}
        {character && (
          <div 
            className="absolute -right-8 top-8 transform -translate-y-1/2"
            style={{
              width: `${character.size}px`,
              height: `${character.size}px`,
              backgroundImage: `url("${character.url}")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              imageRendering: 'pixelated'
            }}
          />
        )}

        <h2 className="text-3xl font-bold mb-6 text-blue-900">{title}</h2>
        
        {Array.isArray(content) ? (
          <div className="grid gap-6">
            {content.map((item, index) => (
              <div key={index} className="bg-white/50 p-4 rounded-lg">
                {item.role ? (
                  // Experience item
                  <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="text-gray-600">{item.company} | {item.period}</p>
                    <p className="mt-2">{item.description}</p>
                  </div>
                ) : item.name ? (
                  // Project item
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="mt-2">{item.description}</p>
                    <div className="flex gap-2 mt-2">
                      {item.tech.map((tech: string) => (
                        <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Skill item
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                    {item}
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : (
          // About section
          <p className="text-lg leading-relaxed">{content}</p>
        )}
      </div>
    </section>
  );
};

export default Section;