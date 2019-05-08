import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';
import website from '../../config/website';


class Index extends Component {
  render() {
    const {
      data: { homepage, posts },
      location,
    } = this.props;
    return (
      <Layout location={location}>
        <span>Home</span>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    home: prismicHome {
      uid
    }
    posts: allPrismicStory(sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
        }
      }
    }
  }
`;
