const { createFilePath } = require("gatsby-source-filesystem");

/* exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql`
  `;
} */

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};
