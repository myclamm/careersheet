import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'

class CareerPage extends Component {

  static async getInitialProps({req, query}) {
    return {
      career_name: query.slug
    }
  }

  render() {
    const { career_name } = this.props;
    return (
      <Layout>
        <NavBar background="#6CB9C3"/>
        Career: { career_name }
      </Layout>
    )
  }
}

export default CareerPage