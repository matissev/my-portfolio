import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/global/layout"
import ProjectsGallery from "../components/index/projects-gallery"
import Img from "gatsby-image"
import SEO from "../components/global/seo"
import FilterLocale from "../utils/FilterLocale"

const IndexPage = ({ data, pageContext }) => {
  const projects = FilterLocale(data.strapi.projects, pageContext.locale, pageContext.intl.languages)

  return (
    <Layout>
      <ProjectsGallery projects={projects} />
    </Layout>
  )
}

export const query = graphql`
  query Projects {
    strapi {
      projects(where: {published: true}) {
        id
        title_fr
        title_en
        slug
        preview {
          alt_en
          alt_fr
          visual {
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
      }
    }
  }
`

const FilterProjectsLocale = (projectsSuffixed, locale) => {
  const projects = []

  projectsSuffixed.forEach(project => {
    projects.push({
      id: project.id,
      title: project["title_" + locale],
      slug: project.slug
    })
  })

  return projects
}

export default IndexPage
