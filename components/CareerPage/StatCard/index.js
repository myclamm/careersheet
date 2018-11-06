import React, { Component } from 'react'
import style from './StatCard.css'
import CareerTitle from '../CareerTitle';

class StatCard extends Component {
  render() {
    const {title, icon, value} = this.props
    return (
      <div className={style.cardContainer}>
        <div className={style.cardRight}>
          <div className={style.cardValue}>
          {value}
          </div>
          <div className={style.cardTitle}>
            {title}
          </div>

        </div>

      </div>
    )
  }
}

export default StatCard