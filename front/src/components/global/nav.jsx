import React from 'react'
import styled from 'styled-components'
import InfosLink from './infos-link'

const StyledNav = styled.nav`
  padding: 0 var(--l-rh0_5);

  a {
    display: block;
  }
`

const Nav = ({ className, isPageInfos }) => {
    return (
        <StyledNav className={className}>
          <InfosLink isPageInfos={isPageInfos} />
        </StyledNav>
    )
}

export default Nav