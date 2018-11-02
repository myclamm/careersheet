import React, { Component } from 'react'
import style from './StatBar.css'
import API from '../../../lib/api'


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