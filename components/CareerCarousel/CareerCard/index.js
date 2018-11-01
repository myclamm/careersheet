import React, { Component } from 'react'
import style from './CareerCard.css'

class CareerCard extends Component {
  render() {
    const {item} = this.props
    return (
      <div className={style.cardContainer}>
        <ul className={style.cardDetail}>
           <li className={style.cardTitle}>{item.job_title}</li>
           <li className={style.cardSubDetail}>
            <i className={[style.userIcon,"fa fa-user"].join(' ')}></i> 
              <span className={style.cardFieldTitle}>Users:</span>
              <span>{item.users}</span>
           </li>
           <li className={style.cardSubDetail}>
            <i className={[style.userIcon,"fa fa-tag"].join(' ')}></i> 
              <span className={style.cardFieldTitle}>Avg. Salary:</span>
              <span>{item.avg_salary}</span>
           </li>
        </ul>
      </div>
    )
  }
}
export default CareerCard