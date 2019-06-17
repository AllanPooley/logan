import React, { Component } from 'react';
import { Link } from 'gatsby';
import {
  Layout,
} from '../components';
import {
  Wrapper,
} from '../components/common';
import './404.scss';

class FourOhFour extends Component {
  render() {
    const {
      location,
    } = this.props;
    const seoData = {
      metaTitle: 'Page Not Found » Little & Big',
      metaDescription: '',
      banner: '',
    };
    return (
      <Layout location={location} seoData={seoData}>
        <section className="four-oh-four-page">
          <Wrapper>
            <div className="text-container">
              <h1 className="title">404: Page Not Found</h1>
              <Link
                to="/"
                className="styled-button"
                aria-label="Return to the home page"
              >
                <span>Let's go home</span>
              </Link>
            </div>
          </Wrapper>
        </section>
      </Layout>
    );
  }
}

export default FourOhFour;

// export const pageQuery = graphql`
// query FourOhFourQuery {
//   page: prismicFourohfour {
//     data {
//
//     }
//   }
// }
// `;
