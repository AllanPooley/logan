import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';

const Post = ({ data: { prismicStory } }) => {
  const { data } = prismicStory;
  console.log('data @ Post', data);
  return (
    <Layout>
      <span>Post</span>
    </Layout>
  );
};

export default Post;

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
    }
    posts: allPrismicPost(limit: 2, sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
        }
      }
    }
  }
`;
