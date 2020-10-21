/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import { IntlContextConsumer } from "gatsby-plugin-react-intl"

import GlobalStyle from "#context/global-styles"
import "#static/fonts/basier/font-face.css"
import "#static/fonts/maison-neue/font-face.css"
import "#static/fonts/nitti-grotesk/font-face.css"

import Header from "./header"
import LangSelector from "./lang-selector"
import Head from "./head"
import Grid from "#components/utils/grid"
import Transition from "#components/global/transition"

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(var(--l-c), minmax(0, 1fr));
  grid-gap: var(--l-gw);
  right: var(--l-m);
  left: var(--l-m);
`

const Layout = ({ children, location }) => {
  const regex = RegExp('/infos')
  const isPageInfos = regex.test(location.pathname)

  return (
    <>
      {/* <Grid /> */}
      <IntlContextConsumer>
        {({ languages, language, originalPath, defaultLanguage }) => 
          <Head language={language} languages={languages} noLangPath={originalPath} defaultLanguage={defaultLanguage}/>
        }
      </IntlContextConsumer>
      <GlobalStyle />
      <Header isPageInfos={isPageInfos} />
      <LangSelector />
      <Transition location={location}>
        <Main>{children}</Main>
      </Transition>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
