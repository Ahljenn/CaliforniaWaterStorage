import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

function DataChart(props) {

  const DIVISOR = 1000000;
  
  //Total capacity of reservior of each region
  const REGIONS =  {"Shasta": 4552000,
                    "Oroville": 3537577,
                    "Trinity Lake": 2447650,
                    "New Melones": 2400000,
                    "San Luis": 1062000,
                    "Don Pedro": 2030000,
                    "Berryessa": 1602000}
  
  let secondData = [];
  
  for (let i = 0; i < props.data.length; ++i) {
    secondData.push(props.data[i].value);
  }

  let dataSet = [
    {
      label: "Total reservior",
      data: Object.keys(REGIONS).map((key) => REGIONS[key]),
      backgroundColor: 'rgb(120,199,227)',
      order: 1
    },
    {
      label: "Current amount",
      data: secondData,
      backgroundColor: 'rgb(66,145,152)',
      order: 0
    }
  ];
  
  let userData = {
    labels: Object.keys(REGIONS).map((key) => key),
    datasets: dataSet,
  };

  //Provided in the front-end code
  let options = {
  plugins: {
    title: {
      display: true,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false
      }
    },
    y: {
      ticks: {
        callback: function(value, index, ticks) {
          if(value > 1) return value / DIVISOR;
        }
      },
      beginAtZero: true,
      grid: {
        display: false
        }
      }
    }
  };
  
  return (
    <div id="chart-container">
      <Bar options={options} data={userData} />
    </div>
  );
}

export default DataChart;