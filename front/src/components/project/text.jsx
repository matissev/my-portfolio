import React from 'react'
import styled from "styled-components"
import ReactMarkdown from 'react-markdown'

const StyledText = styled.div`
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

function Text({ text }) {
    return (
        <StyledText>
            <ReactMarkdown source={text.content} />
        </StyledText>
    )
}

export default Text
