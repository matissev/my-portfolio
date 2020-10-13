import React, { useContext } from "react"
import styled from 'styled-components'

import WebsiteHeading from './website-heading'
import InfosLink from './infos-link'
import { Link } from "gatsby"

const StyledHeader = styled.header`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  
  text-align: center;
  margin-top: var(--layout-margin);

  p {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const Nav = styled.nav`
  position: absolute;
  top: 0;
  right: var(--layout-margin);

  a {
    display: inline;
  }
`


const Header = ({ className, isPageInfos }) => {
  return (
    <StyledHeader className={className}>
      <WebsiteHeading />
      <button>Audio Off</button>
      <Nav>
        <InfosLink isPageInfos={isPageInfos} />
      </Nav>
    </StyledHeader>
  )
}

export default Header
