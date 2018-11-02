import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Hero from '../components/HomePage/Hero'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'
import CareerCarousel from '../components/CareerCarousel'
import API from '../lib/api';
import {Router} from '../routes'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      popularCareers: []
    }
  }

  searchClick = () => {
    // [ML] Note: see next-route docs for routing usage https://www.npmjs.com/package/next-routes
    Router.pushRoute('career', {slug: 'account-executive'})
  }
  
  async componentWillMount() {
    const popularCareers = await API.getPopularCareers();
    
    // [ML] Tip: Never mutate state. Instead, perform full copy and re-assign.
    const state = Object.assign({},this.state);
    state.popularCareers = popularCareers;
    this.setState(state);
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