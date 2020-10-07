import React from "react"
import Link from "gatsby"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectsGallery from "../components/projects-gallery"
import Image from "../components/image"
import SEO from "../components/seo"

const InfosPage = () => {
  const infos = useStaticQuery(graphql`
  query Infos {
    strapiInfo {
      bio
      social {
        intro
        media_name
        outro
        url
      }
    }
  }
`).strapiInfo

  return (
    <Layout>
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

export default InfosPage
