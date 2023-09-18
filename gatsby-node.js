/* eslint-disable linebreak-style */
// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const slugify = require('slugify');

exports.onPostBuild = ({ reporter }) => {
  reporter.info('Your Gatsby site has been built!');
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const OfertaTemplate = path.resolve('src/templates/OfertaTemplate.jsx');
  const result = await graphql(`
    query {
      allContentfulOferta {
          nodes {
            id
            adres
      }
    }
  }
`);
  result.data.allContentfulOferta.nodes.forEach((node) => {
    const slug = `/oferta/${slugify(node.adres).toLowerCase()}`;
    console.log(slug);
    console.log('Node:', node);
    createPage({
      path: slug,
      component: OfertaTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
