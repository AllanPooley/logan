import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';
import website from '../../config/website';


class Index extends Component {
  render() {
    const {
      data: {
        page: {
          data: pageData
        },
        posts,
      },
      location,
    } = this.props;
    console.log('Props @ Home', this.props);
    const {
      metaTitle,
      metaDescription,
      openGraphImage,
    } = pageData;
    const seoData = {
      metaTitle,
      metaDescription,
      openGraphImage,
    };
    return (
      <Layout location={location} seoData={seoData}>
        <span>Home</span>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        blogSlug,
      }
    },
    page: prismicHome {
      uid,
      data {
        metaTitle: meta_title {
          html
          text
        },
        metaDescription: meta_description {
          html
          text
        },
        openGraphImage: open_graph_image {
          alt
          copyright
          url
        }
      }
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
