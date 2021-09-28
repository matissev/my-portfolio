// Libraries
import React from 'react'
import styled from "styled-components"
import ReactMarkdown from 'react-markdown'


// ============================================================================================================ Logic

function Text({ className, text }) {
    return (
        <div className={className + ' project-text'}>
            <ReactMarkdown children={text.content} />
        </div>
    )
}


// ============================================================================================================ Styles

const $Text = styled(Text)`
    margin-top: calc(var(--l-brh) + var(--l-rh) + var(--l-rh0_25) + var(--l-rh0_125));
    /* margin-top: 0; */
    grid-column: 2 / span 5;
    font-size: var(--fs-m);
    line-height: var(--l-rh2);
    
    p:first-of-type {
        margin-top: 0;
    }

    p:last-of-type {
        margin-bottom: 0;
    }

    @media (max-width: 1200px) {
        grid-column: 2 / span 8;
    }

    @media (max-width: 750px) {
        grid-column: 2 / span 10;
    }

    @media(max-width: 600px) {
        grid-column: 1 / span 12;
    }
`

export default $Text
