/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import GlobalStyle from "../../context/global-styles"

import Header from "./header"
import LangSelector from "./lang-selector"

const StyleBlendMode = `
  mix-blend-mode: difference;
  color: white;
`

const StyledHeader = styled.div`
  ${StyleBlendMode}
`

const StyledLangSelector = styled.div`
  ${StyleBlendMode}
`

const Layout = ({ children, isPageInfos }) => {
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
      <GlobalStyle />
      <StyledHeader as={Header} passedStyles={StyleBlendMode} isPageInfos={isPageInfos} siteTitle={data.site.siteMetadata?.title || `Title`} />
      <StyledLangSelector as={LangSelector} />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
