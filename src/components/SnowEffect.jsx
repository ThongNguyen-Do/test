import React, { useEffect } from 'react';
import '../CSS/Snow.css';

export default function SnowEffect() {
  useEffect(() => {
    const snowflakesContainer = document.createElement('div');
    snowflakesContainer.className = 'snowflakes';
    document.body.appendChild(snowflakesContainer);

    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      snowflake.style.animationDuration = `${3 + Math.random() * 5}s`;
      snowflakesContainer.appendChild(snowflake);
    }

    return () => {
      document.body.removeChild(snowflakesContainer);
    };
  }, []);

  return null;
}
