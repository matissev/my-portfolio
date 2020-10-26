// Libraries
import React from "react"
import styled from "styled-components"


// ============================================================================================================ Logic

const Heading = ({ title, className }) => {
    return (
        <h1 className={className}>{title}</h1>
    )
}


// ============================================================================================================ Styles

const $Heading = styled(Heading)`
  text-align: center;
  font-size: var(--fs-xl);
  font-weight: 600;
  margin: 0;
  transform: translate3d(0,-40px,0);
  opacity: 0;
  animation: popin 1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
`

export default $Heading