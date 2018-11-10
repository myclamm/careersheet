import ChartistGraph from 'react-chartist'

import React, { Component } from 'react'

class BarGraph extends Component {
  constructor (props) {
    super(props)    
  }

  render() {
    const {data, options, chartClass} = this.props
    return (
      <ChartistGraph
        data={data}
        type={'Bar'}
        options={options}
        className={chartClass}
      />
    )
  }
}

export default BarGraph