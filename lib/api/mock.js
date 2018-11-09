const Mock = {
  getCareerPopulationCount: {
    'account-executive': '18,576',
    'software-engineer': '13,543'
  },
  getCareerAverageSalary: {
    'account-executive': '120,176',
    'software-engineer': '11,043'
  },
  getCareerAverageTenure : {
    'account-executive': '3',
    'software-engineer': '6'
  },
  getCareerName: {
    'account-executive': 'Account Executive',
    'software-engineer': 'Software Engineer'
  },
  getPopularCareers: [
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
  ],
  getHeatMapProps: {
    yLabels: ['Account Coordinator','Account Director','Account Executive','Account Manager','Account Supervisor','Assistant Account Executive','Business Development Manager','Intern','Marketing Coordinator','Marketing Intern','Marketing Manager','Owner','Project Manager','Public Relations Intern','Recruiter','Sales Associate','Sales Manager','Sales Representative','Senior Account Executive','Senior Account Manager','Territory Manager','Vice President'],
    /* 
      years: [
        year: year
        yLabelValues: [AccountCoord Value, ACcount Director Value, ...]
      ]
    */
    years: [
      {
        year: 0,
        yLabelValues: [33,0,9467,31,0,29,0,101,0,47,0,0,0,41,0,35,0,19,15,0,0,0]
      },
      {
        year: 1,
        yLabelValues: [28,0,284,91,0,25,0,0,23,0,0,0,0,0,19,32,36,37,99,0,0,0]
      },
      {
        year: 2,
        yLabelValues: [0,0,314,115,36,0,20,0,27,0,20,0,19,0,0,0,21,33,177,0,0,0]
      },
      {
        year: 3,
        yLabelValues: [0,0,240,88,54,0,20,0,0,0,17,0,15,0,0,0,27,21,125,0,0,16]
      },
      {
        year: 4,
        yLabelValues: [0,16,162,81,60,0,16,0,0,0,28,0,0,0,0,0,15,21,86,15,0,0]
      },
      {
        year: 5,
        yLabelValues: [0,21,119,59,62,0,0,0,0,0,32,15,0,0,0,0,14,17,67,0,14,0]
      }
    ]
  }

}

export default Mock;