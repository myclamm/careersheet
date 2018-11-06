import React, { Component } from 'react'
import style from './StatBar.css'

class StatBar extends Component {

  render() {
    return (
      <div className={style.container}>
          {this.props.children}
      </div>
    )
  }
}

export default StatBar