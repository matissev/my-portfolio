/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(
      `
        {
          projects: allStrapiProject {
            edges {
              node {
                slug
              }
            }
          }
        }
      `
    )
  
    if (result.errors) {
      throw result.errors
    }
  
    // Create portfolio project pages.
    const projects = result.data.projects.edges
    projects.forEach((project, index) => {
      createPage({
        path: `${project.node.slug}`,
        component: require.resolve("./src/pages/project.jsx"),
        context: {
          slug: project.node.slug,
        },
      })
    })
  }