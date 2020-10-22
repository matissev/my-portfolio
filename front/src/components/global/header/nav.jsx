// Libraries
import React from 'react'
import styled from 'styled-components'


// ============================================================================================================ Logic

const Nav = ({ className, children }) => {
    return (
        <nav className={className}>
          {children}
        </nav>
    )
}


// ============================================================================================================ Styles

const $Nav = styled(Nav)`
  padding: 0 var(--l-rh0_5);

  a {
    display: block;
  }
`

export default $Nav