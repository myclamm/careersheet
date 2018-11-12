import React, { Component } from 'react'
import BarGraph from '../../Charts/BarGraph'
import style from './CommonMajors.css'
import Head from 'next/head'

class CommonMajors extends Component {
  render() {
    const {data} = this.props
    const options = {
      seriesBarDistance: 10,
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 180
      }    
    }
    return (
      <div>
        <Head>
          <link rel='stylesheet' href='/static/css/chartist/commonMajor.css' />
        </Head>
        <div className={style.graphTitle}>Most Common Degrees</div>
        <BarGraph
          chartClass={'ct-major-third'}
          data={data}
          options={options}
        />
      </div>
    )
  }
}

export default CommonMajors