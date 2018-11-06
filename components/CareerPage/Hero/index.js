import React, { Component } from 'react'
import {Row, Col, Container} from 'reactstrap'
import style from './Hero.css'

class CareerHero extends Component {
  render() {
    return (
      <div className={style.heroContainer}>

        <div className={style.heroLeft}>
          <h2> Summary </h2>
        </div>

        <div className={style.heroCard}>
          <div className={style.heroCard_topRow}>
            <h2>Account Executive</h2>
            <h2>Current Profiles</h2>
          </div>
        </div>

      </div>
      // <Row>
      //   <Col xs="5">
          
      //   </Col>
      //   <Col xs="6">
      //     <div className={style.heroCard}>
      //       <div className={style.heroCard_topRow}>
      //         <h2>Account Executive</h2>
      //         <h2>Current Profiles</h2>
      //       </div>
      //     </div>
      //   </Col>
      // </Row>
    )
  }
}

export default CareerHero