import React from "react"
import styled from "styled-components"


const Brief = ({ className, text }) => {
    return (
        <div className={className}><p>{text}</p></div>
    )
}

const StyledBrief = styled(Brief)`
    margin-top: calc(var(--l-rh5) + var(--l-rh0_125) - var(--l-rh0_25));
    transform: translateY(15px);
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: var(--l-gw);
    grid-column: 2 / span 4;
    font-size: var(--fs-xl);
    line-height: var(--fs-xl);

    &:before {
    grid-column: 1 / span 3;
    transform-origin: left center;
    animation: scaleFromLeft 1s cubic-bezier(0.76, 0, 0.24, 1) 0.75s forwards;
    transform: scale3d(1,0,1);
    content: "";
    border-top: 1px solid var(--c-txt1);
    }

    p {
    animation: popin 1s ease 0.5s forwards;
    opacity: 0;
    transform: translate3d(0,-40px,0);
    margin-top: calc(var(--l-rh2) + var(--l-rh0_5));
    margin-bottom: 0;
    line-height: calc(var(--l-rh2));
    grid-column: 1 / span 4;
    }
`

export default StyledBrief