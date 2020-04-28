import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { BlogRoll } from "../components/BlogRoll";


const TagRoute = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  return (
    <Layout>
      <h1 className="tags-title">Encontrada {totalCount} {totalCount === 1 ? 'publicação' : 'publicações'} com a tag <span className="tag-name">{tag}</span></h1>
      <BlogRoll data={data} count={totalCount} />
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