import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Team A',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: '#742774',
    },
    // Add other teams if necessary
  ],
};

function WebsiteVisitsChart() {
  return <Line data={data} />;
}

export default WebsiteVisitsChart;
