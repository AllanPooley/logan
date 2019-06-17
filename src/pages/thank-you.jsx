import React from 'react';
import {
  Layout,
} from '../components';
import {
  Wrapper,
} from '../components/common';
import './thank-you.scss';

const ThankYou = (props) => {
  const {
    location,
  } = props;
  const seoData = {
    metaTitle: 'Thanks for enquiring! » Little & Big',
    metaDescription: '',
    banner: '',
  };
  return (
    <Layout location={location} seoData={seoData}>
      <section className="thank-you-page">
        <Wrapper>
          <div className="text-container">
            <h1>Thank you</h1>
            <p>We'll get back to you as soon as possible</p>
          </div>
        </Wrapper>
      </section>
    </Layout>
  );
};

export default ThankYou;

// export const pageQuery = graphql`
// query ThankYouQuery {
//   page: prismicThankYou {
//     uid,
//     data {
//     }
//   }
// }
// `;
