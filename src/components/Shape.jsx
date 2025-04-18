import React, { useEffect, useState } from 'react';
import '../CSS/Shape.css'; 

const Shape = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  const wavePosition = scrollY * 0.2; 

  return (
    <div className="wave-container" style={{ transform: `translateY(${wavePosition}px)` }}>
      <svg
        className="wave-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#0099a9" 
          d="M0,96L60,96C120,96,240,96,360,122.7C480,149,600,213,720,234.7C840,256,960,224,1080,213.3C1200,203,1320,213,1380,218.7L1440,224V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
        />
      </svg>
    </div>
  );
};

export default Shape;
