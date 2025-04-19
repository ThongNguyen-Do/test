import React from "react";
import '../CSS/CurveLines.css';
const CurveLines = () => {
  const lines = [];

  const width = 400;
  const height = 600;

  for (let i = 0; i <= 50; i++) {
    const x1 = 10;
    const y1 = (height / 50) * i;
    const x2 = (width / 100) * i;
    const y2 = height;

    lines.push(
      <path
        key={i}
        d={`M ${x1} ${y1} Q ${width / 2} ${height / 2}, ${x2} ${y2}`}
        stroke="#0099a9"
        fill="none"
        strokeWidth="0.5"
      />
    );
  }

  return (
    <svg width="50%" height="50%" viewBox={`0 0 ${width} ${height}`}>
      {lines}
    </svg>
  );
};

export default CurveLines;
