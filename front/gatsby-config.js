require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require('path')

module.exports = {
  siteMetadata: {
    title: "My super blog",
    description: "Gatsby blog with Strapi",
    author: "Strapi team",
    siteUrl: "https://matissev.com"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: path.resolve(__dirname, `src/components/global/layout`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "#components": path.resolve(__dirname, 'src/components'),
          "#context": path.resolve(__dirname, 'src/context'),
          "#hooks": path.resolve(__dirname, 'src/hooks'),
          "#static": path.resolve(__dirname, 'static')
        },
        extensions: ["jsx"]
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "Strapi",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "strapi",
        // Url to query from
        url: process.env.API_URL + "/graphql" || "http://localhost:1337/graphql"
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
    "gatsby-transformer-ffmpeg",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    // "gatsby-plugin-minify-html",
    {
      resolve: 'gatsby-plugin-brotli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Matisse Vrignaud",
        short_name: "Matisse V",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#000000",
        display: "minimal-ui",
        lang: "fr",
        icon: "src/images/favicon-black.svg",
        localize: [
          {
            start_url: "/en/",
            lang: "en",
            name: "Matisse Vrignaud",
            short_name: "Matisse V"
          },
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
}