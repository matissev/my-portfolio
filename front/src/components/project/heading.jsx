import React from "react"
import styled from "styled-components"

const Heading = ({ title, className }) => {
    return (
        <h1 className={className}>{title}</h1>
    )
}

const StyledHeading = styled(Heading)`
  grid-column: 1 / span 12;
  text-align: center;
  font-size: var(--fs-xl);
  font-weight: 600;
  margin: 0;
  margin-bottom: var(--l-rh2);
  margin-top: var(--l-brh2);
  transform: translate3d(0,-40px,0);
  opacity: 0;
  animation: popin 1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
`

export default StyledHeading