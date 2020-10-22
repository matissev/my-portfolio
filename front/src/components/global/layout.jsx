// Libraries
import React from "react"
import styled from 'styled-components'

// Context
import { I18nContextProvider } from '#context/i18n-context'
import { LocationContextProvider } from '#context/location-context'

// Components
import Grid from "#components/utils/grid"
import Head from "./head"
import Header from "./header/header"
import LangSelector from "./lang-selector"
import Transition from "#components/global/transition"

// Styles
import GlobalStyle from "#context/global-styles"
import "#static/fonts/basier/font-face.css"
// import "#static/fonts/maison-neue/font-face.css"
// import "#static/fonts/nitti-grotesk/font-face.css"


// ============================================================================================================ Logic

const Layout = ({ children, location }) => {
  return (
        <I18nContextProvider>
          <LocationContextProvider location={location}>
            {/* <Grid /> */}
            <GlobalStyle />
            <Head />
            <Header/>
            <LangSelector />
            <Transition>
              <Main>
                {children}
              </Main>
            </Transition>
          </LocationContextProvider>
        </I18nContextProvider>
  )
}


// ============================================================================================================ Styles

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(var(--l-c), minmax(0, 1fr));
  grid-gap: var(--l-gw);
  right: var(--l-m);
  left: var(--l-m);
`

export default Layout
