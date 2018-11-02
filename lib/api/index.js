const API = {
  getCareerPopulationCount: async function (id) {
    const populations = {
      'account-executive': '18,576',
      'software-engineer': '13,543'
    }
    return populations[id];
  },

  getCareerAverageSalary: async function (id) {
    const salaries = {
      'account-executive': '120,176',
      'software-engineer': '11,043'
    }
    return salaries[id];
  },

  getCareerAverageTenure: async function (id) {
    const tenures = {
      'account-executive': '3',
      'software-engineer': '6'
    }
    return tenures[id];
  },

  getCareerName: async function (id) {
    const names = {
      'account-executive': 'Account Executive',
      'software-engineer': 'Software Engineer'
    }
    return names[id] || 'Page Not Found';
  },

  getPopularCareers: async function() {
    return [
      {
        job_title: 'Director of Marketing',
        slug: 'director-of-marketing',
        users: '12,085',
        avg_salary: '$140,000'
      },
      {
        job_title: 'Account Executive',
        slug: 'account-executive',
        users: '3,116',
        avg_salary: '$123,000'
      },
      {
        job_title: 'Software Engineer',
        slug: 'software-engineer',
        users: '12,085',
        avg_salary: '$112,000'
      },
      {
        job_title: 'Account Executive',
        slug: 'account-executive',
        users: '3,116',
        avg_salary: '$123,000'
      },
      {
        job_title: 'Software Engineer',
        slug: 'software-engineer',
        users: '12,085',
        avg_salary: '$112,000'
      },
      {
        job_title: 'Account Executive',
        slug: 'account-executive',
        users: '3,116',
        avg_salary: '$123,000'
      },
      {
        job_title: 'Software Engineer',
        slug: 'software-engineer',
        users: '12,085',
        avg_salary: '$112,000'
      }
    ]
  }
}

export default API;