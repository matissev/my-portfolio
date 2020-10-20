import React from 'react'
import styled from 'styled-components'

import Button from '#components/global/button'

const StyledEmail = styled(Button)`
    line-height: var(--l-rh4);
    background: var(--c-txt1);
    text-decoration: underline;
    color: var(--c-bg);
    font-size: var(--fs-m);

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`

function Email({ className }) {
    return (
        <StyledEmail as="a" href={"mailto:" + process.env.GATSBY_CONTACT_EMAIL} className={className}>{process.env.GATSBY_CONTACT_EMAIL}</StyledEmail>
    )
}

export default Email
