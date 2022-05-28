import React from 'react';
import Chart from 'chart.js/auto';

function BarChart({ chartData }, { options }) {
  return <Bar data={chartData} options={options} />;
}

export default BarChart;