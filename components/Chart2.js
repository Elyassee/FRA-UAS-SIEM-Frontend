import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
  
var timeFormat ='D MMMM YYYY HH:mm'

const Chart2 = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let titmp = [];
    let ipl = [];
    axios
      .get("https://my-json-server.typicode.com/Elyassee/JsonData/Alert")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
            titmp.push(dataObj.timestamp);
            ipl.push(parseInt(dataObj.numbofAlerts));
        }
        setChartData({
          labels: titmp,
          datasets: [
            {
              fill: false,
              backgroundColor: "#00f7c8",
              data: ipl,
              borderWidth: 2,
              borderColor: "#00f7c8",
              label: "level of thiccness"
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(ipl, titmp);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className = "wrapper">
    <div class="main_content">
        <div class="info">
        <div className="chart chart1">
      <div>
        <Line
          data={chartData}
          options={{
            onClick: (e, element) => {
              if (element.length > 0) {
                var ind = element[0]._index;
                  alert(ind);
                  }
                },
            responsive: true,
            title:{
              display:true,
              text:'Alert History',
              fontSize:25,
              fontColor: "#00f7c8"
            },
            scales: {
              yAxes: [{
               
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                    fontColor: "#00f7c8",
                        beginAtZero: true,
                  },
                  gridLines: {
                    display: true
                  }
                }
              ],
              xAxes: [{
              
                  type: 'time',
                  drawBorder: false,
                time: {
                  format: timeFormat, 
                  unit: 'hour',
                  unitStepSize: 1,
                  tooltipFormat: "lll", //dial bubbles
                  displayFormats: {
                    'day': 'll', // x-axes
                    }
                    },
                    ticks: {
                        fontColor: "#00f7c8",
                        beginAtZero: true,
                        autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                    }
                 }]
            }
          }}
        />
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Chart2;

