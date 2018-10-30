import React, { Component } from 'react'
import Search from '@material-ui/icons/Search';
import style from './SearchBar.css'

class SearchBar extends Component {
  render() {
    return (
      <div className={style.searchForm}>
        <input className={style.searchBar} placeholder="Account Executive"></input>
        <button className={style.searchButton}>
          <Search className={style.searchIcon}></Search>
        </button>
      </div>
    )
  }
}
export default SearchBar