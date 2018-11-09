import React, { Component } from 'react'
import { Container } from 'reactstrap'
import style from './HeroContainer.css'

class HeroContainer extends Component {
  render() {
    return (
      <div className={style.heroBackground}>
        <Container fluid={true} className={style.heroContainer}>
          {this.props.children}
        </Container>
      </div>
    )
  }
}
export default HeroContainer