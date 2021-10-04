// Libraries
import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby-plugin-intl";


// ============================================================================================================ Logic

const Heading = ({ className, children }) => {
  return (
    <Link to="/" className={className}>
      <h1>
        {children}
      </h1>
    </Link>
  )
}


// ============================================================================================================ Styles

const $Heading = styled(Heading)`
  h1 {
    font-size: var(--fs-m);
    font-weight: 500;
    margin: 0;
    padding: 0 var(--l-rh0_5);
    overflow: hidden;
  }
`

export default $Heading
