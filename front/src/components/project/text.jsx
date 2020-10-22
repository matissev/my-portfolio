// Libraries
import React from 'react'
import styled from "styled-components"
import ReactMarkdown from 'react-markdown'


// ============================================================================================================ Logic

function Text({ className, text }) {
    return (
        <div className={className}>
            <ReactMarkdown source={text.content} />
        </div>
    )
}


// ============================================================================================================ Styles

const $Text = styled(Text)`
    margin-top: calc(var(--l-brh) + var(--l-rh) + var(--l-rh0_25) + var(--l-rh0_125));
    grid-column: 2 / span 5;
    font-size: var(--fs-l);
    line-height: var(--l-rh2);
    
    p:first-of-type {
        margin-top: 0;
    }

    p:last-of-type {
        margin-bottom: 0;
    }
`

export default $Text
