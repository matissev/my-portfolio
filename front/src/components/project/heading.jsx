// Libraries
import React from "react"
import styled from "styled-components"


// ============================================================================================================ Logic

const Heading = ({ title, subtitle, tags, className }) => {
  return (
    <div className={className}>
      <h1 className={className}>{title}</h1>
      <strong>{subtitle}{tags && tags.location ? " — " + tags.location : ""}</strong>
    </div>
  )
}


// ============================================================================================================ Styles

const $Heading = styled(Heading)`
  transform: translate3d(0,-40px,0);
  opacity: 0;
  animation: popin 1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
  
  h1 {
    line-height: 5rem;
    padding-top: var(--l-rh);
    padding-bottom: var(--l-rh);
    text-align: center;
    font-size: 5rem;
    font-weight: 300;
    margin: 0;
  }

  strong {
    display: block;
    font-size: var(--fs-xl);
    font-weight: 300;
    color: var(--c-txt2);
    text-align: center;
    
    /* &:first-of-type {
      margin-bottom: var(--l-rh);
    } */
  }
`

export default $Heading