import React, { Component } from 'react'
import style from './CareerCard.css'

class CareerCard extends Component {
  render() {
    const {item} = this.props
    return (
      <div className={style.cardContainer}>
        <ul className={style.cardDetail}>
           <li className={style.cardTitle}>{item.job_title}</li>
           <li className={style.cardSubDetail}>Users : {item.users}</li>
           <li className={style.cardSubDetail}>Avg. Salary : {item.avg_salary}</li>
        </ul>
       
      </div>
    )
  }
}
export default CareerCard