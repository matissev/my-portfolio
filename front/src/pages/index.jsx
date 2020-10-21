import React from "react"
import { graphql } from "gatsby"

import ProjectsGallery from "#components/index/projects-gallery"
import FilterLocale from "#utils/FilterLocale"
import SEO from "#components/global/seo"

const IndexPage = ({ data, pageContext }) => {
  const projects = FilterLocale(data.strapi.projects, pageContext.locale, pageContext.intl.languages)

  return (
    <>
      <SEO language={pageContext.locale} languages={pageContext.intl.languages}/>
      <ProjectsGallery projects={projects} />
    </>
  )
}

export const query = graphql`
  query Projects {
    strapi {
      projects(where: {published: true}, sort: "position") {
        id
        title_fr
        title_en
        slug
        layout {
          first_column
          width
          top_offset
        }
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
