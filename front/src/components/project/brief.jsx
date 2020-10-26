// Libraries
import React from "react"
import styled from "styled-components"


// ============================================================================================================ Logic

const Brief = ({ className, text }) => {
    return (
        <div className={className}><p>{text}</p></div>
    )
}


// ============================================================================================================ Styles

const $Brief = styled(Brief)`
    display: grid;
    grid-gap: var(--l-gw);
    font-size: var(--fs-xl);
    line-height: var(--fs-xl);

    &:before {
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
        margin-bottom: 0;
        line-height: calc(var(--l-rh2));
    }
`

export default $Brief