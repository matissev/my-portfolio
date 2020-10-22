// Libraries
import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby-plugin-react-intl";


// ============================================================================================================ Logic

const Heading = ({ className, children }) => {
  return (
    <Link to="/" className={className}>
      {children}
    </Link>
  )
}


// ============================================================================================================ Styles

const $Heading = styled(Heading)`
  margin: 0;
  padding: 0 var(--l-rh0_5);
  font-weight: 500;
  display: block;
`

export default $Heading
