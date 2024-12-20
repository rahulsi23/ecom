import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['America', 'Asia', 'Europe', 'Africa'],
  datasets: [
    {
      data: [27.7, 34.7, 28.4, 9.2],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#66BB6A'],
    },
  ],
};

function CurrentVisitsPieChart() {
  return <Pie data={data} />;
}

export default CurrentVisitsPieChart;
