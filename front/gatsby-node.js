/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)

// pages locale
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  // You can access the variable "locale" in your page queries now
  createPage({
    ...page,
    context: {
      ...page.context,
      locale: page.context.intl.language,
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        strapi {
          projects {
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create portfolio project pages.
  const projects = result.data.strapi.projects
  projects.forEach((project, index) => {
    createPage({
      path: `${project.slug}`,
      component: require.resolve("./src/pages/project.jsx"),
      context: {
        slug: project.slug,
      },
    })
  })
}