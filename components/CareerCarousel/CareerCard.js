import React, { Component } from 'react'
import style from './CareerCard.css'

class CareerCard extends Component {
  render() {
    const {item} = this.props
    return (
      <div className={style.cardContainer}>
        {item.job_title}
      </div>
    )
  }
}
export default CareerCard