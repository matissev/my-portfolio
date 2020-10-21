import React from "react"
import { graphql } from "gatsby"

import Bio from "#components/infos/bio"
import Social from "#components/infos/social"
import ContactButton from "#components/infos/contact-button"
import SEO from "#components/global/seo"
import FilterLocale from "#utils/FilterLocale"

const InfosPage = ({ data, pageContext }) => {
  const infos = FilterLocale(data.strapi.info, pageContext.locale, pageContext.intl.languages)

  return (
    <>
      <SEO title="Infos" language={pageContext.locale} languages={pageContext.intl.languages}/>
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
