import React from "react"
import styled from 'styled-components'

import WebsiteHeading from './website-heading'
import MuteButton from './mute-button'
import Nav from './nav'

const StyledHeader = styled.header`
  height: var(--l-rh2);
  position: fixed;
  z-index: 3;
  top: 0;
  padding-top: var(--l-rh1_5);
  left: 0;
  width: 100%;
  font-size: var(--fs-m);
`

const StyleHeaderElements = `
  // background: var(--c-bg);
  line-height: calc(var(--l-rh2) + var(--l-rh0_25));
`

const StyleHeaderOnsideElements = `
  position: absolute;
  top: var(--l-rh1_5);
`

const StyledWebsiteHeading = styled.p`
  ${StyleHeaderElements}
  ${StyleHeaderOnsideElements}
  left: calc(var(--l-m) - var(--l-rh0_5));
`

const StyledMuteButton = styled.p`
  ${StyleHeaderElements}
  color: red;
`

const StyledNav = styled.nav`
  ${StyleHeaderElements}
  ${StyleHeaderOnsideElements}
  right: calc(var(--l-m) - var(--l-rh0_5));
`


const Header = ({ className, isPageInfos }) => {
  return (
    <StyledHeader className={className}>
      <StyledWebsiteHeading as={WebsiteHeading} />
      <StyledMuteButton as={MuteButton} />
      <StyledNav as={Nav} isPageInfos={isPageInfos} />
    </StyledHeader>
  )
}

export default Header
