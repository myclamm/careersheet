import React, { Component } from 'react'
import { Container } from 'reactstrap'
import style from './BodyContainer.css'

class BodyContainer extends Component {
  render() {
    return (
      <div>
        <Container fluid={true} className={style.bodyContainer}>
          {this.props.children}
        </Container>
      </div>
    )
  }
}
export default BodyContainer