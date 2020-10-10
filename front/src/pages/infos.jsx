import React from "react"
import styled from 'styled-components'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const InfosPage = ({ data, pageContext }) => {
  const infos = FilterInfosLocale(data.strapi.info, pageContext.locale)

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

const FilterInfosLocale = (infosSuffixed, locale) => {
  const infos = {
    bio: infosSuffixed["bio_" + locale],
    social: []
  }

  for (let i = 0; i < infosSuffixed.social.length; i++) {
    infos.social[i] = {
      intro: infosSuffixed.social[i]["intro_" + locale],
      media_name: infosSuffixed.social[i].media_name,
      outro: infosSuffixed.social[i]["outro_" + locale],
      url: infosSuffixed.social[i]["url_" + locale],
    }
  }

  return infos
}

export default InfosPage
