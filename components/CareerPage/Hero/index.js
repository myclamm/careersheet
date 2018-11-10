import React, { Component } from 'react'
import BarGraph from '../../Charts/BarGraph'
import style from './Hero.css'

class CareerHero extends Component {
  constructor(props) {
    super(props)
    this.data = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      series: [
        [1, 5, 8, 6, 3, 2, 1, 2, 1, 1]
      ]
    }
    this.horizontalOptions = {
      seriesBarDistance: 10,
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 70
      }    
    }
  }
  render() {
    return (
      <div className={style.heroContainer}>

        <div className={style.heroLeft}>
          <BarGraph
            chartClass={'ct-major-third'}
            data={this.data}
            options={this.horizontalOptions}
          />
        </div>

        <div className={style.heroCard}>
          <div className={style.heroCard_topRow}>
            <h2 style={{flex:1, fontSize: "24px", paddingLeft: "20px", fontWeight:"600"}}>When do people usually become Account Executives?</h2>
          </div>

          <div className={style.heroCard_midRow}>
            <div className={style.yAxisTitleContainer}>
              <div className={style.yAxisTitle}><b>Population</b></div>
            </div>
            <div className={style.barChart}>
              <BarGraph
                data={this.data}
              />
            </div>
          </div>
          
          <div className={style.heroCard_topRow}>
            <div style={{flex:1}}></div>
            <div className={style.xAxisTitle}><b>Years Since College</b></div>
            <div style={{flex:1}}></div>
          </div>
            
          <div className={style.heroCard_topRow}>
            <ul style={{paddingRight:"40px", paddingTop:"40px", fontSize:"18px"}}>
              <li> Most people first become Account Executives <b>3 years</b> after college. </li>
              </ul>
          </div>
            
        </div>

      </div>

    )
  }
}

export default CareerHero