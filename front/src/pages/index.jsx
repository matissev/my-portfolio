import React from "react"
import { graphql } from "gatsby"

import ProjectsGallery from "#components/index/projects-gallery"
import FilterLocale from "#utils/FilterLocale"

const IndexPage = ({ data, pageContext }) => {
  const projects = FilterLocale(data.strapi.projects, pageContext.locale, pageContext.intl.languages)

  return (
    <ProjectsGallery projects={projects} />
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

export default IndexPage
