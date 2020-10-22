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

const StyledButton = styled(Button)`
    background: rgba(255,255,255,0.2);
    border: none;
    text-decoration: underline;
    text-align: center;
    margin: 0;
    padding: 0;
    height: var(--l-rh4);
    margin-top: var(--l-rh3);
    color: var(--c-txt1);
    font-size: var(--fs-l);
    box-sizing: border-box;
    border-radius: 4px;
    grid-column: 2 / span 2;
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

export default StyledButton