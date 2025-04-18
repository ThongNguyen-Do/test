import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PencilLineChart = () => {
  const data = {
    labels: ['1','2','3','4','5','6','7','8','9','10'],
    datasets: [
      {
        data: [1, 3, 2, 4, 3, 5, 3, 6, 4, 7],
        fill: false,
        borderColor: '#7ed6df', 
        tension: 0, 
        borderWidth: 1,
        pointRadius: 0,
      },
      {
        data: [0.5, 2.5, 3, 2, 2.5, 6, 3, 7, 4, 8],
        fill: false,
        borderColor: '#555', 
        tension: 0,
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default PencilLineChart;
