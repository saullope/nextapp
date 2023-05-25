import ChartJS from 'chart.js/auto';
import { CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Grafio de ventas',
    },
  },
};

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// Generate random data for Dataset 1
const dataset1Data = Array.from({ length: labels.length }, () => getRandomNumber(100, 250));
const dataset1BorderColor = 'rgb(255, 99, 132)';
const dataset1BackgroundColor = 'rgba(255, 99, 132, 0.5)';

// Generate random data for Dataset 2
const dataset2Data = Array.from({ length: labels.length }, () => getRandomNumber(100, 250));
const dataset2BorderColor = 'rgb(53, 162, 235)';
const dataset2BackgroundColor = 'rgba(53, 162, 235, 0.5)';

export const data = {
  labels,
  datasets: [
    {
      label: 'Cantidad de pares vendidos por mes.',
      data: dataset2Data,
      borderColor: dataset2BorderColor,
      backgroundColor: dataset2BackgroundColor,
    },
  ],
};

export default function GraphicDash() {
  return <Line options={options} data={data} />;
}

// Helper function to generate a random number between 100 and 250
function getRandomNumber(min , max ) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
