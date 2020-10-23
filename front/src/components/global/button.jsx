// Libraries
import React from 'react'
import styled from 'styled-components'


// ============================================================================================================ Logic

function Button({ className, children, onClick }) {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    )
}


// ============================================================================================================ Styles

const $Button = styled(Button)`
    background: rgba(255,255,255,0.2);
    border: none;
    text-decoration: underline;
    text-align: center;
    margin: 0;
    padding: 0;
    height: var(--l-rh4);
    color: var(--c-txt1);
    font-size: var(--fs-l);
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;

    @media (hover: hover) {
        &:hover {
            text-decoration: none;
            background: var(--c-txt1);
            color: var(--c-bg);
        }
    }

    &:active {
        opacity: 0.5;
    }
`

export default $Button