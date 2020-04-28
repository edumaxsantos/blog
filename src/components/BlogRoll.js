import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery, Link } from "gatsby";

const BlogRoll = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formattedDate = (date) =>
    Intl.DateTimeFormat("pt-BR", options).format(new Date(date));

  return (
    <div className="blog-list">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="" key={post.id}>
            <article className="blog-list-item">
              <header>
                <p className="">
                  <Link
                    className="post-link is-double-size"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                </p>
              </header>
              <section>
                <p className="content">{post.excerpt}</p>
              </section>
              <footer>
                <p className="blog-list-item-datetime">Publicado em <span>{formattedDate(post.frontmatter.date)}</span></p>
                <Link className="button post-link" to={post.fields.slug}>
                  Continue lendo →
                </Link>
              </footer>
            </article>
          </div>
        ))}
    </div>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                date
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);


export {
  BlogRoll
};