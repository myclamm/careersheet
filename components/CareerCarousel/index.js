import React, { Component } from 'react';
import style from './index.css';
import Carousel from './Carousel.js';
import CareerCard from './CareerCard.js'

class CareerCarousel extends Component {
  render() {
    const {items} = this.props;
    return (
      <div className={style.container}>
        <div className={style.carouselTitle}>Explore Career Profiles</div>

        <Carousel items={items} Container={CareerCard}></Carousel>
      </div>
    )
  }
}

export default CareerCarousel;


