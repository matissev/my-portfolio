require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "My super blog",
    description: "Gatsby blog with Strapi",
    author: "Strapi team",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "Strapi",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "strapi",
        // Url to query from
        // apiURL: process.env.API_URL || "http://localhost:1337/graphql",
        url: "http://localhost:8031/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`fr`, `en`],
        // language file path
        defaultLanguage: `fr`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
        redirectDefaultLanguageToRoot: true
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
      },
    },
    "gatsby-plugin-offline",
  ],
}