import Mock from "./mock.js"

const API = {
  getCareerPopulationCount: async function (id) {
    const populations = Mock.getCareerPopulationCount
    return populations[id];
  },

  getCareerAverageSalary: async function (id) {
    const salaries = Mock.getCareerAverageSalary;
    return salaries[id];
  },

  getHeatMapProps: async function (id,startYear,endYear) {
    const props = Mock.getHeatMapProps;
    const years = props.years.slice(startYear,endYear)
    const xLabels = years.map((x) => `${x.year}`);
    const yLabels = props.yLabels
    
    const data = yLabels
      .map((_,i) => years.map((x) => x.yLabelValues[i]));

    return {xLabels, yLabels, data}
  },

  getCareerAverageTenure: async function (id) {
    const tenures = Mock.getCareerAverageTenure;
    return tenures[id];
  },

  getCareerName: async function (id) {
    const names = Mock.getCareerName;
    return names[id] || 'Page Not Found';
  },

  getPopularCareers: async function() {
    return Mock.getPopularCareers;
  }
}

export default API;