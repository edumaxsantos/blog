import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import styled from "styled-components";
import Section from "../components/Section";
import { formattedDate } from "../utils/DateFormatter";
import Tag from "../components/Tag";

const PostTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.3rem;
  color: var(--textLink);
  text-decoration: none;
`;

const PostDescription = styled.p`
  font-size: 1.15rem;
  font-style: italic;
  font-weight: 300;
`;

const PublicationDate = styled.p`
  margin: 0.5rem 0;
  font-size: 0.9rem;
`;

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  date,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  const StyledPostContent = styled(PostContent)`
    margin: 2rem 0;
    & p:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  `;

  return (
    <Section style={{ marginBottom: "2rem" }}>
      {helmet || ""}
      <PostTitle>{title}</PostTitle>
      <PostDescription>{description}</PostDescription>
      <PublicationDate>
        Criado em <span>{formattedDate(date)}</span>
      </PublicationDate>
      <StyledPostContent content={content} />
      <Tag tags={tags} />
    </Section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
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
        date={post.frontmatter.date}
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
        date
        title
        description
        tags
      }
    }
  }
`;
