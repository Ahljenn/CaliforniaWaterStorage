import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

function DataChart(props) {

  //Total capacity of reservior of each region
  const REGIONS =  {SHA: 4552000,
                    ORO: 3537577,
                    CLE: 2447650,
                    NML: 2400000,
                    LUS: 1062000,
                    DNP: 2030000,
                    BER: 1602000 }

  let labels = [];
  let secondData = [];
  
  for (let i = 0; i < props.data.length; ++i) {
    labels.push(props.data[i].stationId);
    secondData.push(props.data[i].value);
  }

  let dataSet = [
    {
      label: "Total reservior",
      data: Object.keys(REGIONS).map((key) => REGIONS[key]),
      backgroundColor: 'rgb(255,0,255)',
    },
    {
      label: "Secondary",
      data: secondData,
      backgroundColor: 'rgb(0, 255, 255)'
    }
  ];
  
  let userData = {
    labels: labels,
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
      stacked: true,
      grid: {
        display: false
        }
      }
    }
  };
  
  return (
    <div id="chart-container">
      <Bar options={options} data={userData}/>
    </div>
  );
}

export default DataChart;