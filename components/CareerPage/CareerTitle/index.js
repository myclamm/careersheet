import React, { Component } from 'react'
import style from './CareerTitle.css'

class CareerTitle extends Component {
  render() {
    return (
      <div className={style.title}>
        {this.props.children}
      </div>
    )
  }
}

export default CareerTitle