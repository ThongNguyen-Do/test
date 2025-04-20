import React from "react";

const CurveLines = () => {
  const width = 400;
  const height = 600;
  const lines = [];
  const count = 60;

  for (let i = 0; i <= count; i++) {
    const startX = 0;
    const startY = (height / count) * i;

    const endX = (width  / count) * i;
    const endY = height;

    const controlX = width / 2;
    const controlY = height / 1;

    lines.push(
      <path
        key={i}
        d={`M ${startX} ${startY} Q ${controlX} ${controlY}, ${endX} ${endY}`}
        stroke="#0099a9"
        strokeWidth="0.5"
        fill="none"
      />
    );
  }

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
      {lines}
    </svg>
  );
};

export default CurveLines;
