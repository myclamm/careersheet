import React, { Component } from 'react'

class CareerPage extends Component {

  static async getInitialProps({req, query}) {
    return {
      career_name: query.slug
    }
  }

  render() {
    const { career_name } = this.props;
    return (
      <div>
        Career: { career_name }
      </div>
    )
  }
}

export default CareerPage