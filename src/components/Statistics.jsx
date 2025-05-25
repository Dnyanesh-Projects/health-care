import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import '../styles/Whole.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Statistics() {
  const data = {
    labels: ['Appointments', 'Recovered', 'Pending', 'Cancelled', 'Follow-ups'],
    datasets: [
      {
        label: 'Count',
        data: [45, 32, 8, 5, 12],
        backgroundColor: [
          'rgba(30, 144, 255, 0.7)',
          'rgba(40, 167, 69, 0.7)',
          'rgba(255, 193, 7, 0.7)',
          'rgba(220, 53, 69, 0.7)',
          'rgba(153, 102, 255, 0.7)',
        ],
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#333',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { size: 14 },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };

  return (
    <div className="statistics-page">
      <h2>📊 Clinic Statistics</h2>

      <div className="stats-summary">
        <div className="stat-card">
          <h3>Appointments</h3>
          <p>45 total booked</p>
        </div>
        <div className="stat-card">
          <h3>Patients Recovered</h3>
          <p>32 recovered successfully</p>
        </div>
        <div className="stat-card">
          <h3>Pending Reports</h3>
          <p>8 reports pending</p>
        </div>
        <div className="stat-card">
          <h3>Cancelled</h3>
          <p>5 appointments cancelled</p>
        </div>
        <div className="stat-card">
          <h3>Follow-ups</h3>
          <p>12 follow-up visits</p>
        </div>
      </div>

      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Statistics;
