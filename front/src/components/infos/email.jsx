// Libraries
import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

// Components
import Button from '#components/global/button'


// ============================================================================================================ Logic

function Email({ className }) {
  const email = useEmail();
  return (
    <Button as="a" href={"mailto:" + email} className={className}>{email}</Button>
  )
}


// ============================================================================================================ Styles

const $Email = styled(Email)`
  line-height: var(--l-rh4);
  background: var(--c-txt1);
  text-decoration: underline;
  color: var(--c-bg);
  font-size: var(--fs-m);

  @media (hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }

  &:active {
    opacity: 0.5;
  }
`


// ============================================================================================================ Data

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

export default $Email
