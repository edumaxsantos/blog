import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery, Link } from "gatsby";
import Helmet from "react-helmet";
import styled from "styled-components";
import Section from "./Section";
import PostDescription from "./PostDescription";

const Post = styled.article`
border-bottom: 1px solid #777;
margin-bottom: 1rem;
padding-bottom: 1rem;
`;

const PostHeader = styled.header`
text-align: justify;
`;

const LinkAsTitle = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
`;

const Excerpt = styled.p`
text-align: justify;
`;

const PublicationDate = styled.p`
margin-bottom: 0.5rem;
`;

const Title = styled.h1`
text-align: center;
margin-bottom: 2rem;
text-decoration: none;
font-size: 2.5rem;
`;

const BlogRoll = ({ data, title }) => {
  const { edges: posts } = data.allMarkdownRemark;
  console.log(posts);

  return (
    <Section>
      <Helmet title="Blog" />
      {<Title>{title || "Últimas postagens"}</Title>}
      {posts &&
        posts.map(({ node: post }) => (
          <Post key={post.id}>
            <PostHeader>
              <LinkAsTitle to={post.fields.slug}>
                {post.frontmatter.title}
              </LinkAsTitle>
              <PostDescription dangerouslySetInnerHTML={{__html: post.frontmatter.description}} />
            </PostHeader>
            <Excerpt>{post.excerpt}</Excerpt>
            <footer>
              <PublicationDate>
                Publicado em: <span>{post.frontmatter.date}</span>
              </PublicationDate>
              <Link to={post.fields.slug}>Continue lendo →</Link>
            </footer>
          </Post>
        ))}
    </Section>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  title: PropTypes.element
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { 
            order: DESC, fields: [frontmatter___date] 
          }
          filter: { 
            frontmatter: { 
              templateKey: { eq: "blog-post" },
              tags: {nin: "hide"}
            } 
          }
        ) {
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
                date(formatString: "DD/MM/YYYY - HH:mm")
                tags
                description
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);

export { BlogRoll };
