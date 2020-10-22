// Library
import React, { useEffect } from "react"
import styled, { createGlobalStyle, css } from "styled-components"
import { graphql } from "gatsby"

// Hooks
import useFilterLocale from "#hooks/useFilterLocale"

// Components
import SEO from "#components/global/seo"
import Heading from "#components/project/heading"
import BackButton from "#components/project/back-button"
import Brief from "#components/project/brief"
import MainMedia from "#components/project/main-media"
import Content from "#components/project/content"
import Footer from "#components/project/footer"
import Social from "#components/infos/social"
import ContactButton from "#components/infos/contact-button"


// ============================================================================================================ Logic

const ProjectPage = ({ data, pageContext }) => {
  const project = useFilterLocale(data.strapi.projects[0])
  const infos = useFilterLocale(data.strapi.info)

  useEffect(() => {
    document.body.classList.add('openProject')
  }, [])

  return (
    <>
      <SEO
        title={project.title}
        description={project.brief}
        isProject={true}
        image={{
          url: project.preview.social_image.imageFile.publicURL,
          alt: project.preview.alt
        }}
      />
      <ColorScheme colorscheme={project.color_scheme}/>
      <Heading title={project.title}/>
      <BackButton route="/"/>
      <Brief text={project.brief}/>
      <MainMedia main_media={project.main_media[0]}/>
      <Content components={project.content} />
      <Footer description={project.description} tags={project.tags}/>
      <Social as={Social} social={infos.social}>
        <$ContactButton/>
      </Social>
    </>
  )
}


// ============================================================================================================ Styles

const $ContactButton = styled(ContactButton)`
  margin-top: calc(var(--l-rh4));
  grid-column: span 2;
`

const ColorScheme = createGlobalStyle`
  .openProject {
    ${props => props.colorscheme && props.colorscheme.primary_text && css`
      --color-primary-text: ${props => props.colorscheme.primary_text};
    `}
    ${props => props.colorscheme && props.colorscheme.secondary_text && css`
      --color-secondary-text: ${props => props.colorscheme.secondary_text};
    `}
    ${props => props.colorscheme && props.colorscheme.background && css`
      --color-background: ${props => props.colorscheme.background};
    `}
    ${props => props.colorscheme && props.colorscheme.section_primary_text && css`
      --color-section-primary-text: ${props => props.colorscheme.section_primary_text};
    `}
    ${props => props.colorscheme && props.colorscheme.section_secondary_text && css`
      --color-section-secondary-text: ${props => props.colorscheme.section_secondary_text};
    `}
    ${props => props.colorscheme && props.colorscheme.section_background && css`
      --color-section-background: ${props => props.colorscheme.section_background};
    `}
  }
`


// ============================================================================================================ Data

export const query = graphql`
  query Project($slug: String) {
    strapi {
      projects(where: { slug: $slug }) {
        id
        title_en
        title_fr
        color_scheme {
          background
          primary_text
          secondary_text
          section_background
          section_primary_text
          section_secondary_text
        }
        preview {
          alt_en,
          alt_fr
          social_image {
            url
            imageFile {
              publicURL
            }
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
              imageFile {
                childImageSharp {
                  fluid(quality: 70) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
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
          ... on Strapi_ComponentProjectsAnimationContent {
            animation {
              id
              caption_en
              caption_fr
              file {
                url
              }
            }
            animation_size
          }
          ... on Strapi_ComponentProjectsImageContent {
            image {
              id
              alt_en
              alt_fr
              caption_en
              caption_fr
              file {
                url
                imageFile {
                  childImageSharp {
                    fluid(quality: 70) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
            image_size
          }
          ... on Strapi_ComponentProjectsVideoContent {
            video {
              id
              caption_en
              caption_fr
              url
            }
            video_size
          }
          ... on Strapi_ComponentProjectsTextContent {
            id
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
      info {
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

export default ProjectPage