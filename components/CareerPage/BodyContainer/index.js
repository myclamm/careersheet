import React, { Component } from 'react'
import { Container } from 'reactstrap'
import style from './BodyContainer.css'

class BodyContainer extends Component {
  render() {
    return (
      <Container fluid={true} className={style.container}>
        {this.props.children}
      </Container>
    )
  }
}
export default BodyContainer