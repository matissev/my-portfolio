// Libraries
import React from "react"
import { graphql } from "gatsby"

// Hooks
import useFilterLocale from "#hooks/useFilterLocale"

// Components
import Bio from "#components/infos/bio"
import Social from "#components/infos/social"
import ContactButton from "#components/infos/contact-button"
import SEO from "#components/global/seo"


// ============================================================================================================ Logic

const InfosPage = ({ data }) => {
  const infos = useFilterLocale(data.strapi.info)

  return (
    <>
      <SEO title="Infos"/>
      <Bio bio={infos.bio}/>
      <ContactButton />
      <Social social={infos.social}/>
    </>
  )
}


// ============================================================================================================ Data

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
