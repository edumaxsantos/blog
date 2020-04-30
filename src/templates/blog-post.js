import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import styled from "styled-components";
import Section from "../components/Section";

const PostTitle = styled.h1`
font-size: 1.3rem;
margin-bottom: 0.3rem;
`;

const PostDescription = styled.p`
font-size: 1.15rem;
font-style: italic;
`;

const TagList = styled.ul`
display: flex;
justify-content: center;
margin: 1rem 0 !important;
`;

const TagItem = styled.li`

border-radius: 5px;
padding: 0.2rem 0.5rem;
background-color: ${({theme}) => theme.highlight};

&:not(:last-child) {
  margin-right: 0.5rem;
}
`;

const LinkAsTag = styled(Link)`
text-decoration: none;
color: ${({theme}) => theme.background};
`;

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Section>
      {helmet || ""}
      <div className="blog-post">
        <PostTitle className="title">{title}</PostTitle>
        <PostDescription className="description">{description}</PostDescription>
        {tags && tags.length ? (
          <TagList>
            {tags.map((tag) => (
              <TagItem key={tag + `tag`}>
                <LinkAsTag to={`/tags/${kebabCase(tag)}/`}>{tag}</LinkAsTag>
              </TagItem>
            ))}
          </TagList>
        ) : null}
        <PostContent content={content} />
      </div>
    </Section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
