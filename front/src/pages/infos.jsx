import React from "react"
import styled from 'styled-components'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import FilterLocale from "../utils/FilterLocale"

const InfosPage = ({ data, pageContext }) => {
  const infos = FilterLocale(data.strapi.info, pageContext.locale, pageContext.intl.languages)

  console.log(infos)

  return (
    <Layout isPageInfos={true}>
      <p>{infos.bio}</p>
      {infos.social.map((link) => {
        return (
          <p key={link.media_name}>
            {link.intro.length > 0 &&
              link.intro + ` `
            }
            <a href={link.url} target="_blank">
              {link.media_name}
            </a>
            {link.outro != null &&
              ` ` + link.outro
            }
          </p>
        )
      })}
    </Layout>
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
