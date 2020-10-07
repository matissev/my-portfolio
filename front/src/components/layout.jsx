/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import Header from "./header"
import LangSelector from "./lang-selector"

const GlobalStyle = createGlobalStyle`
  :root {
    --layout-margin: 2rem;
  }

  body {
    font-family: sans-serif;
    margin: 0 var(--layout-margin);
    display: grid;
    padding-top: 200px;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle/>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <LangSelector/>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
