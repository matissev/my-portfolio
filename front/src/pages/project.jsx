import React from "react"
import Link from "gatsby-plugin-intl"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import FilterLocale from "../utils/FilterLocale"

const ProjectPage = ({ data, pageContext }) => {
  const project = FilterLocale(data.strapi.projects[0], pageContext.locale, pageContext.intl.languages)

  console.log(project)

  return (
    <Layout>
      <h1>{project.title}</h1>
      <Img fluid={project.preview.visual.url}/>
      <p>{project.brief}</p>
    </Layout>
  )
}
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/entries

export const query = graphql`
  query Project($slug: String) {
    strapi {
      projects(where: { slug: $slug }) {
        id
        title_en
        title_fr
        preview {
          alt_en
          alt_fr
          visual {
            url
          }
        }
        main_media {
          ... on Strapi_ComponentProjectsVideo {
            caption_en
            caption_fr
            url
          }
          ... on Strapi_ComponentProjectsImage {
            alt_en
            alt_fr
            caption_en
            caption_fr
            file {
              url
            }
          }
          ... on Strapi_ComponentProjectsAnimation {
            caption_en
            caption_fr
            file {
              url
            }
          }
        }
        brief_fr
        brief_en
        content {
          ... on Strapi_ComponentProjectsAnimation {
            caption_en
            caption_fr
            file {
              url
            }
          }
          ... on Strapi_ComponentProjectsImage {
            alt_en
            alt_fr
            caption_en
            caption_fr
            file {
              url
            }
          }
          ... on Strapi_ComponentProjectsVideo {
            caption_en
            caption_fr
            url
          }
          ... on Strapi_ComponentProjectsText {
            content_en
            content_fr
          }
        }
        description_en
        description_fr
        tags {
          backer_en
          backer_fr
          date_en
          date_fr
          location_en
          location_fr
          other {
            entry_en
            entry_fr
            label_en
            label_fr
          }
          press {
            media_name
            url
          }
          type_en
          type_fr
        }
      }
    }
  }
`

export default ProjectPage