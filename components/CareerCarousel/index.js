import React, { Component } from 'react';
import style from './CareerCarousel.css';
import Carousel from '../Carousel';
import CareerCard from './CareerCard'

class CareerCarousel extends Component {
  render() {
    const {items} = this.props;
    return (
      <div className={style.carouselContainer}>
        <div className={style.carouselTitle}>Explore Popular Careers</div>
        <Carousel items={items} render={CareerCard}></Carousel>
      </div>
    )
  }
}

export default CareerCarousel;


