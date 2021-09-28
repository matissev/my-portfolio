// Libraries
import React from "react"
import { graphql } from "gatsby"

// Hooks
import useFilterLocale from "#hooks/useFilterLocale"

// Components
import SEO from "#components/global/seo"
import ProjectsGallery from "#components/index/projects-gallery"


// ============================================================================================================ Logic

const IndexPage = ({ data, pageContext }) => {
  console.log(pageContext);
  const projects = useFilterLocale(data.strapi.projects)
  return (
    <>
      <SEO mainPage={true}/>
      <ProjectsGallery projects={projects} />
    </>
  )
}


// ============================================================================================================ Data

export const query = graphql`
  query Projects {
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

export default IndexPage
