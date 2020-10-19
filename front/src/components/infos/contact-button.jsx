import React from 'react'
import styled from 'styled-components'
import { useIntl } from "gatsby-plugin-react-intl"


const StyledContactButton = styled.button`
    background: rgba(255,255,255,0.2);
    border: none;
    text-decoration: underline;
    margin: 0;
    padding: 0;
    height: var(--l-rh4);
    margin-top: var(--l-rh3);
    color: var(--c-txt1);
    font-size: var(--fs-l);
    /* border: 5px solid var(--c-txt1); */
    box-sizing: border-box;
    border-radius: 4px;
    grid-column: 2 / span 2;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        text-decoration: none;
        background: var(--c-txt1);
        color: var(--c-bg);
    }

    &:active {
        opacity: 0.5;
    }
`

function ContactButton({ className }) {
    const intlFormat = useIntl().formatMessage

    return (
        <StyledContactButton className={className}>
            {intlFormat({ id: "infos.contactButtonLabel" })}
        </StyledContactButton>
    )
}

export default ContactButton
