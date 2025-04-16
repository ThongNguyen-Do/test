import React, { useEffect, useState } from 'react';
import '../CSS/Number.css';

export default function Number() {
  const numbers = ['01', '02', '03', '04'];
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true); 

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-page');
      const scrollY = window.scrollY;

      let matched = false;

      sections.forEach((section, index) => {
        const offsetTop = section.offsetTop;

        
        if (scrollY >= offsetTop - window.innerHeight / 2) {
          if (
            section.classList.contains('Page3') ||
            section.classList.contains('Page4') ||
            section.classList.contains('Page5') ||
            section.classList.contains('Page6')
          ) {
            setActiveIndex(index); 
            setVisible(true);
            matched = true; 
          }
        }

        
        if (scrollY >= document.querySelector('.Page7').offsetTop - window.innerHeight / 2) {
          setVisible(false); 
        }
      });

      
      if (!matched) {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="number-container">
      {numbers.map((num, index) => (
        <div
          key={index}
          className={`number-item ${index === activeIndex ? 'active' : ''}`}
        >
          {num}
        </div>
      ))}
    </div>
  );
}
