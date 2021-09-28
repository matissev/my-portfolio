// Libraries
import React from "react"
import { graphql } from 'gatsby'

// Hooks
import useFilterLocale from "#hooks/useFilterLocale"

// Components
import SEO from "#components/global/seo"
import ProjectsGallery from "#components/index/projects-gallery"
import Splash404 from "#components/global/404"


// ============================================================================================================ Logic

const NotFoundPage = ({ data, pageContext }) => {
  console.log(pageContext);
  const projects = useFilterLocale(data.strapi.projects)
  return (
    <>
      <SEO title="404: Not found" />
      <Splash404 />
      <ProjectsGallery projects={projects} />
    </>
  )
}

export const query = graphql`
  query Projects404 {
    strapi {
      projects(where: {published: true}, sort: "position") {
        id
        title_fr
        title_en
        subtitle_fr
        subtitle_en
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
                fluid(maxWidth: 500, quality: 70) {
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

export default NotFoundPage
