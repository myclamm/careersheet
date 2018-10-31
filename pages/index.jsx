import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Hero from '../components/HomePage/Hero'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'
import CareerCarousel from '../components/CareerCarousel'
import API from '../lib/api';
import {Router} from '../routes'

import 'bootstrap/dist/css/bootstrap.css';

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      popularCareers: []
    }
  }

  searchClick = () => {
    Router.pushRoute('/career/'+'account-executive')
  }
  
  async componentWillMount() {
    const res = await API.getPopularCareers();
    this.setState({popularCareers: res});
  }

  render() {
    return (
    <Layout>
      <NavBar background="transparent"/>
      <Hero searchClick={this.searchClick}/>
      <Container fluid={true} style={{padding:'20px 40px'}}>
        <CareerCarousel items={this.state.popularCareers}/>
      </Container>
    </Layout>
    )
  }
}


export default HomePage;