import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PencilLineChart = () => {

  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], 
    datasets: [
      {
        data: [0, 3, 1, 4, 2, 5, 3, 6, 4, 7], 
        fill: false, 
        borderColor: 'rgba(75, 192, 192, 1)', 
        tension: 0, 
        borderWidth: 2, 
        pointStyle: 'circle', 
        pointRadius: 4, 
      },
      {
        data: [0, 2, 4, 1, 3, 6, 2, 7, 3, 8], 
        fill: false, 
        borderColor: 'rgba(255, 99, 132, 1)', 
        tension: 0, 
        borderWidth: 2, 
        pointStyle: 'circle', 
        pointRadius: 4, 
      },
    ],
  };

  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: false, 
      },
    },
    scales: {
      x: {
        display: false, 
      },
      y: {
        display: false, 
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default PencilLineChart;
