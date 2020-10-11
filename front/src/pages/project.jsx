import React from "react"
import { Link } from "gatsby-plugin-intl"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from "../components/project/tags"
import MainMedia from "../components/project/main-media"

import FilterLocale from "../utils/FilterLocale"

const ProjectPage = ({ data, pageContext }) => {
  const project = FilterLocale(data.strapi.projects[0], pageContext.locale, pageContext.intl.languages)

  console.log(project)

  return (
    <Layout>
      <Link to="/"><p>Back</p></Link>
      <h1>{project.title}</h1>
      <MainMedia main_media={project.main_media[0]}/>
      <p>{project.brief}</p>
      <div>
        <p>{project.description}</p>
        <Tags tags={project.tags}/>
      </div>
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
              imageFile {
                childImageSharp {
                  fluid(maxWidth: 500, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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