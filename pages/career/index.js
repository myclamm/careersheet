import React, { Component } from 'react'
import NavBar from '../../components/NavBar'
import Layout from '../../components/Layout'
import CareerTitle from '../../components/CareerPage/CareerTitle'
import BodyContainer from '../../components/CareerPage/BodyContainer'
import StatBar from '../../components/CareerPage/StatBar'
import StatCard from '../../components/CareerPage/StatCard'
import style from './career.css';
import API from '../../lib/api';

class CareerPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      careerName: null,
      populationCount: null,
      averageSalary: null,
      averageTenure: null
    }
  }

  async componentWillMount () {
    // [ML] Tip: Never mutate state. Instead, perform full copy and re-assign.
    const careerName = await API.getCareerName(this.props.careerId)
    const populationCount = await API.getCareerPopulationCount(this.props.careerId);
    const averageSalary = await API.getCareerAverageSalary(this.props.careerId);
    const averageTenure = await API.getCareerAverageTenure(this.props.careerId);
    const state = Object.assign({},this.state);

    state.careerName = careerName;
    state.populationCount = populationCount;
    state.averageSalary = '$' + averageSalary;
    state.averageTenure = averageTenure + 'yrs';
    this.setState(state);    
  }

  static async getInitialProps({req, query}) {
    return {
      careerId: query.slug.toLowerCase()
    }
  }

  render() {
    const { careerId } = this.props;
    const profileIcon = (<i className={[style.userIcon,"fa fa-user"].join(' ')}></i>)
    const salaryIcon = (<i className={[style.userIcon,"fa fa-tag"].join(' ')}></i>)
    const tenureIcon = (<i className={[style.userIcon,"fa fa-hourglass"].join(' ')}></i>)
    return (
      <Layout>
        <NavBar background="#6CB9C3"/>
        <BodyContainer>
          <CareerTitle>{ this.state.careerName }</CareerTitle>
          <StatBar careerId={careerId}>
            <StatCard title="Current Profiles" value={this.state.populationCount} icon={profileIcon}></StatCard>
            <StatCard title="Average Salary" value={this.state.averageSalary} icon={salaryIcon}></StatCard>
            <StatCard title="Average Tenure" value={this.state.averageTenure} icon={tenureIcon}></StatCard>
          </StatBar>
        </BodyContainer>
      </Layout>
    )
  }
}

export default CareerPage