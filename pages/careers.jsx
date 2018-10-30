import React, { Component } from 'react'
import Link from 'next/link';

class CareersPage extends Component {
  
  static async getInitialProps({req, query}) {
    return {
      careers: [
        {
          name: 'Software Engineer',
          slug: 'software-engineer'
        },
        {
          name: 'Account Executive',
          slug: 'account-executive'
        },
        {
          name: 'Product Manager',
          slug: 'product-manager'
        }
      ]
    }
  }

  render() {
    const {careers} = this.props
    return (
      <div>
        <h1>Careers</h1>
          <ul>
          {careers.map((career,i) => (
            <li key={career.name +'_'+ i}>
              <Link as={`/career/${career.slug}`} href={`/career/${career.slug}`}>
                <a>{career.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default CareersPage;