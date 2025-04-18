import React from "react";
import '../CSS/Circle.css';
const ElongatedCircles = () => {
  const width = 400;
  const height = 600;
  const centerX = width / 2;
  const centerY = height / 2;

  const numCircles = 30;
  const spacing = 16;
  const maxRadius = 160;

  const circles = [];

  for (let i = 0; i < numCircles; i++) {
    const offset = (i - Math.floor(numCircles / 2)) * spacing;
    
    const scaleDownBelow = 1; // <-- chỉnh tỉ lệ vòng tròn ở dưới
    const baseRadius = maxRadius * (1 - Math.abs(offset) / (numCircles / 2 * spacing));
    const radius = offset > 0 ? baseRadius * scaleDownBelow : baseRadius;
  
    circles.push(
      <circle
        key={i}
        cx={centerX}
        cy={centerY + offset}
        r={radius}
        stroke="white"
        strokeWidth="0.6"
        fill="none"
      />
    );
  }

  return (
    <svg width={width} height={height}>
      <g transform="rotate(500, 200, 300)"> 
        {circles}
      </g>
    </svg>
  );
};

export default ElongatedCircles;
