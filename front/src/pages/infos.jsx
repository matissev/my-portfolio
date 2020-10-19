import React from "react"
import { graphql } from "gatsby"

import Bio from "#components/infos/bio"
import Social from "#components/infos/social"
import ContactButton from "#components/infos/contact-button"
import FilterLocale from "#utils/FilterLocale"

const InfosPage = ({ data, pageContext }) => {
  const infos = FilterLocale(data.strapi.info, pageContext.locale, pageContext.intl.languages)

  return (
    <>
      <Bio bio={infos.bio}/>
      <ContactButton />
      <Social social={infos.social}/>
    </>
  )
}

export const query = graphql`
  query Infos {
    strapi {
      info {
        bio_fr
        bio_en
        social {
          intro_fr
          intro_en
          media_name
          outro_fr
          outro_en
          url_fr
          url_en
        }
      }
    }
  }
`

export default InfosPage
