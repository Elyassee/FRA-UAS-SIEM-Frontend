import '../App.css';
  import React, {Component} from 'react';
  import {Bar} from 'react-chartjs-2';
  import data1 from "../data/data1.json";

  
var timeFormat ='D MMMM YYYY HH:mm'

  const data = {
    labels: ["<  1","1 - 2","3 - 4","5 - 9","10 - 14","15 - 19","20 - 24","25 - 29","> - 29"],
    datasets: [{
      label: 'Employee',
      backgroundColor: "#caf270",
      data: [12, 59, 5, 56, 58,12, 59, 87, 45],
    }, {
      label: 'Engineer',
      backgroundColor: "#45c490",
      data: [12, 59, 5, 56, 58,12, 59, 85, 23],
    }, {
      label: 'Government',
      backgroundColor: "#008d93",
      data: [12, 59, 5, 56, 58,12, 59, 65, 51],
    }, {
      label: 'Political parties',
      backgroundColor: "#2e5468",
      data: [12, 59, 5, 56, 58, 12, 59, 12, 74],
    }]
  };



  class Chart1 extends Component{

  render() {
      return (
  <div className = "wrapper">
      <div class="main_content">
          <div class="info">
          <div className="chart chart1">
          <Bar data={data}
          options={{
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'bottom' },
  }} />
        </div>
          </div>
      </div>
  </div>
      );
  }
  }
  export default Chart1;