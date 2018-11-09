import React, { Component } from 'react'
import HeatMap from '../../Charts/HeatMap'
import API from '../../../lib/api';

class CareerHeatMap extends Component {
  constructor(props) {
    super(props)
  }

  calculateHeatValue = (value, data) => {
    const flatArray = data.reduce((i, o) => [...o, ...i], []);
    const logs = flatArray.map((x)=>{
      return x===0 ? 0 : Math.log10(x)
    })
    const min = Math.min(...logs);
    const max = Math.max(...logs);
    value = value === 0 ? 0 : Math.log10(value)
    return 1 - (max - value) / (max - min)
  }

  render() {
    const {heatMapProps} = this.props
    const {xLabels, yLabels, data} = heatMapProps

    return (
      <div>
        <div style={{fontSize:"36px", marginTop:"80px", marginBottom: "40px"}}>
          Which jobs did Account Executives have each year after college?
        </div>
        <HeatMap
          xLabels={xLabels}
          yLabels={yLabels}
          data={data}
          yLabelTextAlign={'left'}
          cellStyle={(background, value, min, max, data, x, y) => ({
            background: `rgb(66, 86, 244, ${this.calculateHeatValue(value,data)})`,
            fontSize: "11px",
          })}
          cellRender={value => value && `${value}`}
        />
      </div>
    )
  }
}
export default CareerHeatMap