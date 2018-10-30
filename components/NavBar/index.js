import React, { Component } from 'react'
import style from './NavBarStyle.css';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.css';
import MenuIcon from '@material-ui/icons/Menu';



import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class index extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: true
    }
  }
  
  toggleBurger = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  
  render() {
    const burgerVis = this.state.collapsed ? 'none' : 'block'
    return (
      <div>
        <nav className={style.navBar}>
          <div className={style.logo} >Career Sheet</div>
          <div style={{display:"flex"}}>
            <div className={style.navLink} ><Link href={`/careers`}>Careers</Link></div>
            <div className={style.navLink} ><Link href={`/majors`}>Majors</Link></div>
            <div className={style.navLink} ><Link href={`/majors`}>Schools</Link></div>
          </div>
        </nav>

        <nav className={style.mobileNavBar}>
          <div style={{display:'flex', justifyContent: 'space-between', width: '100%'}}>
            <div className={style.logo} >Career Sheet</div>
            <MenuIcon onClick={this.toggleBurger} className={style.burgerMenu}></MenuIcon> 
          </div>
            <Collapse isOpen={!this.state.collapsed} navbar className={style.burgerItems}>
              <Nav navbar >
                <NavItem className={style.burgerItem}>
                  <Link href={`/majors`}>Schools</Link>
                </NavItem>
                <NavItem className={style.burgerItem}>
                  <Link href={`/careers`}>Careers</Link>
                </NavItem>
                <NavItem className={style.burgerItem}>
                  <Link href={`/schools`}>Schools</Link>
                </NavItem>
              </Nav>
            </Collapse>
          {/* <div style={{display: burgerVis}}>
            <div>Heyyy</div>
          </div> */}
          
          {/* <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse> */}
        </nav>
        
        {/* <Container fluid={true}>
          <Row className={style.navBar}>
            <Col xs="2">Career Sheet</Col>
            <Col xs={{ size: 3}} md={{ size: 4, offset: 6 }}>
            <ul className={style.mainNav}>
              <li><Link href={`/careers`}><a>Careers</a></Link></li>
              <li><Link href={`/majors`}><a>Majors</a></Link></li>
              <li><Link href={`/majors`}><a>Schools</a></Link></li>
            </ul>
            </Col>
          </Row>
          </Container> */}

          {/* <div className={style.navBar}>
              <div className={style.logo}>Career Sheet</div>
              <ul className={style.mainNav}>
                <li><Link href={`/careers`}><a>Careers</a></Link></li>
                <li><Link href={`/majors`}><a>Majors</a></Link></li>
                <li><Link href={`/majors`}><a>Schools</a></Link></li>
              </ul>
          </div> */}
        

      </div>
    )
  }
}
