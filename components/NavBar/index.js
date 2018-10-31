import React, { Component } from 'react'
import style from './NavBarStyle.css';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import MenuIcon from '@material-ui/icons/Menu';

import { Collapse, Nav, NavItem } from 'reactstrap';

class NavBar extends Component {

  constructor (props) {
    super(props); // invoke constructor of superset Component class
    const {background} = this.props;

    this.state = {
      collapsed: true,
      background: background
    }
  }

  toggleBurger = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      background: !this.state.collapsed ? this.props.background : "rgb(1,149,166,0.8)"
    });
  }
  
  render() {
    return (
      <div>
        <nav className={style.navBar} style={{backgroundColor:this.state.background}}> 
        <div className={style.logo}><Link href={`/`}><a>Career Sheet</a></Link></div>
          <div style={{display:"flex"}}>
            <div className={style.navLink} ><Link href={`/careers`}><a>Careers</a></Link></div>
            <div className={style.navLink} ><Link href={`/majors`}><a>Majors</a></Link></div>
            <div className={style.navLink} ><Link href={`/majors`}><a>Schools</a></Link></div>
          </div>
        </nav>

        <nav className={style.mobileNavBar} style={{backgroundColor:this.state.background}}>
          <div style={{display:'flex', justifyContent: 'space-between', width: '100%'}}>
            <div className={style.logo}><Link href={`/`}><a>Career Sheet</a></Link></div>
            <MenuIcon onClick={this.toggleBurger} className={style.burgerMenu}></MenuIcon> 
          </div>
            <Collapse isOpen={!this.state.collapsed} navbar className={style.burgerItems}>
              <Nav navbar >
                <NavItem className={style.burgerItem}>
                  <Link href={`/careers`}><a>Careers</a></Link>
                </NavItem>
                <NavItem className={style.burgerItem}>
                  <Link href={`/majors`}><a>Majors</a></Link>
                </NavItem>
                <NavItem className={style.burgerItem}>
                  <Link href={`/schools`}><a>Schools</a></Link>
                </NavItem>
              </Nav>
            </Collapse>
        </nav>        

      </div>
    )
  }
}

export default NavBar