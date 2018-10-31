import React, { Component } from 'react'
import style from './Carousel.css'

class Carousel extends Component {
  constructor (props) {
    super(props)
  }

  renderItems = (items, Container) => {
    const cards = items.map((item,index)=>{
      console.log('item',item)
      return (
        <div key={item+'-'+index} className={style.itemContainer}>
          <Container  item={item}/>
        </div>
      )
    })
    return (<div className={style.container}>{cards}</div>)
  }

  comonentDidMount() {
    console.log('mounted', items)
  }

  render() {
    const {items, Container} = this.props;
    return (
      <div>
        {this.renderItems(items,Container)}
      </div>
    )
  }
}

export default Carousel;