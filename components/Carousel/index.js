import React, { Component } from 'react'
import style from './Carousel.css'
import AliceCarousel from 'react-alice-carousel';

class Carousel extends Component {

  constructor (props) {
    super(props)
  }

 state = {
    currentIndex : 0,
    showLeftBtn : false,
    showRightBtn : true
  }

  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 4 },
  }

  
  onSlideChanged= (e) => {
    let index = e.item;
    let showLeftBtn = true;
    let showRightBtn = true;
    if(index <= 0)
       showLeftBtn = false;
    if(index && e.slide)
       showRightBtn = false;
    this.setState({
       showRightBtn,
       showLeftBtn,
       currentIndex : index   
    })
  }

  getCareerCard= () => {
    let {render : View, items} = this.props;
    return items.map((item, i) => <View item={item} />)
  }

  render() {
    const {items} = this.props;
    const {currentIndex } = this.state;
    return (
      <div className={style.container}>
        <div className={style.carouselControls}>
          <button style={{display: this.state.showLeftBtn  ? 'block' : 'none'}} className={style.carouselLeftBtn} onClick={() => this.Carousel._slidePrev()}>
            <div className={style.carouselLeftIcon}></div>
          </button>
          <button style={{display: this.state.showRightBtn ? 'block' : 'none'}} className={style.carouselRightBtn} onClick={() => this.Carousel._slideNext()}>
                <div className={style.carouselRightIcon}></div>
          </button>
        </div>
        <AliceCarousel
        items={this.getCareerCard()}
        startIndex = {currentIndex}
        fadeOutAnimation={true}
        dotsDisabled={true}
        responsive={this.responsive}
        disableAutoPlayOnAction={true}
        buttonsDisabled={true}
        infinite={false}
        ref={ el => this.Carousel = el }
        onSlideChanged={this.onSlideChanged}
      />
    </div>
    )
  }
}

export default Carousel;