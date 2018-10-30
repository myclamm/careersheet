import React, { Component } from 'react'
import Hero from '../components/HomePage/Hero'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.css';

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Hero></Hero>
        <Layout>
        </Layout>
      </div>
    )
  }
}

export default HomePage;