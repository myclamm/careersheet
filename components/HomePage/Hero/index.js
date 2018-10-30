import React, { Component } from 'react';
import style from './HeroStyle.css';
import SearchBar from '../SearchBar';

class Hero extends Component {

  render() {
    return (
      <div>
        <header className={style.heroImage}>
          <h1 className={style.heroText}>Explore your career path</h1>
          <div className={style.tabs}>
            <button className={[style.tab, style.first].join(' ')}>Careers</button>
            <button className={style.tab}>Majors</button>
            <button className={[style.tab, style.last].join(' ')}>Schools</button>
          </div>
          <SearchBar></SearchBar>

        </header>
      </div>
        
    )
  }
}


export default Hero;