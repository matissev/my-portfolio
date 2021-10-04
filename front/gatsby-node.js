/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// Create : Pages locales.
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

// Create : Portfolio project pages.
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


// Add support for ImageSharp to the gatsby-source-graphql plugin
exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  await createResolvers({
    Strapi_UploadFile: {
      imageFile: {
        type: 'File',
        async resolve(source) {
          console.log(process.env.API_URL);
          let sourceUrl = `${process.env.API_URL}${source.url}`
          return await createRemoteFileNode({
            url: sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        }
      }
    }
  })
}


// react-markdown vfile fix
// https://github.com/vfile/vfile/issues/38#issuecomment-683198538
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
   resolve: {
      fallback: {
        "assert": require.resolve("assert/"),
        "path": require.resolve("path-browserify")
      },
    },
  })
}