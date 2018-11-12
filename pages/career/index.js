import React, { Component } from 'react'
import NavBar from '../../components/NavBar'
import Layout from '../../components/Layout'
import CareerTitle from '../../components/CareerPage/CareerTitle'
import HeroContainer from '../../components/CareerPage/HeroContainer'
import BodyContainer from '../../components/CareerPage/BodyContainer'
import StatBar from '../../components/CareerPage/StatBar'
import StatCard from '../../components/CareerPage/StatCard'
import CareerHero from '../../components/CareerPage/Hero'
import CareerHeatMap from '../../components/CareerPage/CareerHeatMap'
import Head from 'next/head'
import style from './career.css';
import API from '../../lib/api';

class CareerPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      careerName: null,
      populationCount: null,
      averageSalary: null,
      averageTenure: null,
      heatMapProps: {
        xLabels: null,
        yLabels: null,
        data: null
      }
    }
  }

  async componentWillMount () {
    // [ML] Tip: Never mutate state. Instead, perform full copy and re-assign.
    const careerName = await API.getCareerName(this.props.careerId)
    const populationCount = await API.getCareerPopulationCount(this.props.careerId);
    const averageSalary = await API.getCareerAverageSalary(this.props.careerId);
    const averageTenure = await API.getCareerAverageTenure(this.props.careerId);
    const heatMapProps = await API.getHeatMapProps(this.props.careerId, 0, 21);
    const state = Object.assign({},this.state);

    state.careerName = careerName;
    state.populationCount = populationCount;
    state.averageSalary = '$' + averageSalary;
    state.averageTenure = averageTenure + 'yrs';
    state.heatMapProps = heatMapProps;
    this.setState(state);
  }

  static async getInitialProps({req, query}) {
    return {
      careerId: query.slug.toLowerCase()
    }
  }

  render() {
    const { careerId } = this.props;
    const profileIcon = (<i className={[style.userIcon,"fa fa-user fa-3x"].join(' ')}></i>)
    const salaryIcon = (<i className={[style.userIcon,"fa fa-tag fa-3x"].join(' ')}></i>)
    const tenureIcon = (<i className={[style.userIcon,"fa fa-hourglass fa-3x"].join(' ')}></i>)

    return (
      <div>
      <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css" />
      </Head>
      <Layout>
        <NavBar background="transparent"/>
        <HeroContainer>
          <CareerTitle>{ this.state.careerName }</CareerTitle>
          <StatBar careerId={careerId}>
            <StatCard title="Current Profiles" value={this.state.populationCount} icon={profileIcon}></StatCard>
            <StatCard title="Average Salary" value={this.state.averageSalary} icon={salaryIcon}></StatCard>
            <StatCard title="Average Tenure" value={this.state.averageTenure} icon={tenureIcon} ></StatCard>
          </StatBar>
          <CareerHero></CareerHero>
        </HeroContainer>

        <div style={{backgroundColor: "#f2f2f2"}}>
          <BodyContainer>
            <CareerHeatMap
              heatMapProps={this.state.heatMapProps}
            />
          </BodyContainer>
        </div>
      </Layout>
      </div>
    )
  }
}

export default CareerPage