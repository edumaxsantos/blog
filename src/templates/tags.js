import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { BlogRoll } from "../components/BlogRoll";
import styled from "styled-components";

const Tag = styled.span`
font-style: italic;
`;


const TagRoute = ({ data, pageContext }) => {
  /* const posts = data.allMarkdownRemark.edges; */
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  return (
    <Layout>
      <BlogRoll title={<>Encontrada {totalCount} {totalCount === 1 ? 'publicação' : 'publicações'} com a tag <Tag>{tag}</Tag></>} data={data} count={totalCount} />
    </Layout>
  );
};

export default TagRoute;



export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: {tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date
          }
        }
      }
    }
  }
`;