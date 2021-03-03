import '../App.css';
import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';
import data3 from "../data/data3.json";

class Chart3 extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
          labels: ["Logins", "Portscan"],
          datasets:[
              {
                  label:"population",
                  data: data3,
                  backgroundColor:["blue","#00f7c8" ] 
              }
          ]

      }
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

render() {
    return (
<div className = "wrapper">
    <div class="main_content">
        <div class="info">
        <div className="chart chart3">
        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Events',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
        </div>
        </div>
    </div>
</div>
    );
}
}
export default Chart3;
