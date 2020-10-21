import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

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
    const email = useEmail();
    return (
        <StyledEmail as="a" href={"mailto:" + email} className={className}>{email}</StyledEmail>
    )
}

const useEmail = () => {
    const metadatas = useStaticQuery(
      graphql`
        query {
          strapi {
            website {
              contact_email
            }
          }
        }
      `
    )
    return metadatas.strapi.website.contact_email
  }

export default Email
