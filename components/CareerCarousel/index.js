import React, { Component } from 'react';
import style from './index.css';
import Carousel from './Carousel.js';
import CareerCard from './CareerCard.js';

class CareerCarousel extends Component {
  render() {
    const {items} = this.props;
    return (
        <Carousel items={items} render={CareerCard}></Carousel>
    )
  }
}

export default CareerCarousel;


