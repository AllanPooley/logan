import React from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
  SEO,
} from '../components';
import website from '../../config/website';

const Category = ({
  pageContext: { category },
  data: {
    posts: { edges, totalCount },
  },
  location,
}) => (
  <Layout>
    <SEO title={`Category: ${category} | ${website.titleAlt}`} pathname={location.pathname} />
    <span>Category</span>
  </Layout>
);

export default Category;

export const pageQuery = graphql`
  query CategoryPage($category: String!) {
    posts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: {
          category: { eq: $category }
        }
      }
    ) {
      totalCount
      edges {
        node {
          uid
        }
      }
    }
  }
`;
