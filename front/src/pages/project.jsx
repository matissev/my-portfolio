// Library
import React from "react"
import Helmet from 'react-helmet'
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

  return (
    <>
      <Helmet bodyAttributes={{class: 'openProject'}}/>
      <SEO
        title={project.title}
        description={project.description}
        isProject={true}
        image={{
          url: project.preview.social_image.imageFile.publicURL,
          alt: project.preview.alt
        }}
      />
      <ColorScheme colorscheme={project.color_scheme}/>
      <BackButton route="/"/>
      <$Heading title={project.title} subtitle={project.subtitle} tags={project.tags}/>
      <$MainMedia main_media={project.main_media[0]}/>
      <$Brief text={project.brief}/>
      <Content components={project.content} />
      <$Footer description={project.description} tags={project.tags}/>
      <$ContactButton/>
      <$Social social={infos.social}/>
    </>
  )
}


// ============================================================================================================ Styles

const $ContactButton = styled(ContactButton)`
  grid-column: 6 / span 2;
  margin-top: calc(var(--l-rh3));
  background: var(--c-txt1);
  color: var(--c-bg);

  @media(max-width: 1300px) {
    grid-column: 5 / span 4;
  }

  @media(max-width: 800px) {
    grid-column: 4 / span 6;
  }

  @media(max-width: 550px) {
    grid-column: 3 / span 8;
  }
`

const $Social = styled(Social)`
  grid-column: 1 / span 12;
  display: flex;
  justify-content: space-evenly;
  margin: calc(var(--l-rh4)) 0 calc(var(--l-rh5)) 0;
  flex-wrap: wrap;
  
  p {
    text-align: center;
    margin: 0 calc(2 * var(--l-gw));
    margin-bottom: var(--l-rh2);
  }
`

const $Heading = styled(Heading)`
  grid-column: 1 / span 12;
  margin-bottom: var(--l-rh2);
  margin-top: var(--l-brh);

  @media(max-width: 1000px) {
    margin-top: var(--l-rh3);
  }

  @media(max-width: 600px) {
    margin-top: var(--l-rh4);
  }

  @media(max-width: 600px) {
    margin-bottom: 0;

    h2 {
      font-size: 3rem;
      line-height: 3rem;
    }

    strong {
      font-size: var(--fs-l);
      line-height: 2rem;
    }
  }
`

const $MainMedia = styled(MainMedia)`
  margin-top: calc(var(--l-rh4));

  @media(max-width: 600px) {
    margin-top: calc(var(--l-rh3) + var(--l-rh0_25) + var(--l-rh0_125));
  }
`

const $Brief = styled(Brief)`
  margin-top: calc(var(--l-brh) + var(--l-rh5) + var(--l-rh0_125) - var(--l-rh0_25));
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-column: 2 / span 5;

  & + .project-text {
    margin-top: var(--l-rh3);
  }

  &:before {
    grid-column: 1 / span 3;
  }

  p {
    grid-column: 1 / span 4;
    margin-top: calc(var(--l-rh2) + var(--l-rh0_5));
  }

  @media(max-width: 1300px) {
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    margin-top: calc(var(--l-brh) + var(--l-rh0_125) - var(--l-rh0_25));
    
    &:before {
      grid-column: 1 / span 4;
    }

    p {
      grid-column: 1 / span 6;
    }
  }

  @media(max-width: 1000px) {
    grid-column: 2 / span 8;
    grid-template-columns: repeat(8, minmax(0, 1fr));
    margin-top: calc(var(--l-rh5) + var(--l-rh0_125) - var(--l-rh0_25));
    
    &:before {
      grid-column: 1 / span 6;
    }

    p {
      grid-column: 1 / span 8;
    }
  }

  @media(max-width: 750px) {
    grid-column: 2 / span 10;
    grid-template-columns: repeat(10, minmax(0, 1fr));
    
    &:before {
      grid-column: 1 / span 8;
    }

    p {
      grid-column: 1 / span 10;
    }
  }

  @media(max-width: 600px) {
    grid-column: 1 / span 12;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-row-start: 3;
    margin-top: calc(var(--l-rh) + var(--l-rh0_125) - var(--l-rh0_25));
    
    &:before {
      display: none;
    }

    p {
      grid-column: 1 / span 12;
    }
  }
`

const $Footer = styled(Footer)`
  @media(max-width: 1300px) {
    .markdown {
      grid-column: 3 / span 8;
    }
    
    dl {
      display: block;
      grid-column: 3 / span 8;

      dt, dd {
        text-align: left;
        float: left;
      }

      dt {
        margin-bottom: var(--l-rh);
        clear: left;
      }

      dd {
        margin-left: var(--l-gw);
      }
    }
  }

  @media(max-width: 1000px) {
    .markdown {
      grid-column: 2 / span 10;
    }

    dl {
      margin-top: calc(var(--l-rh4));
      font-size: var(--fs-l);
      grid-column: 2 / span 10;
    }
  }

  @media(max-width: 850px) {
    .markdown {
      margin-top: calc(var(--l-rh4) + var(--l-rh0_5) + var(--l-rh0_125));
      grid-column: 1 / span 12;
    }

    dl {
      grid-column: 2 / span 10;
    }
  }
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
        subtitle_en
        subtitle_fr
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
          __typename
          ... on Strapi_ComponentProjectsVideo {
            caption_en
            caption_fr
            url
            type
          }
          ... on Strapi_ComponentProjectsImage {
            alt_en
            alt_fr
            caption_en
            caption_fr
            file {
              ext
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
          ... on Strapi_ComponentProjectsLottie {
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
          __typename
          ... on Strapi_ComponentProjectsAnimationContent {
            animation {
              id
              caption_en
              caption_fr
              file {
                url
              }
            }
            animation_size: size
          }
          ... on Strapi_ComponentProjectsBandcampContent {
            bandcamp {
              bandcamp_id
              alt
              url
              theme
              links_color
              type
            }
          }
          ... on Strapi_ComponentProjectsLottieContent {
            lottie {
              id
              caption_en
              caption_fr
              file {
                url
              }
            }
            lottie_size: size
          }
          ... on Strapi_ComponentProjectsImageContent {
            image {
              id
              alt_en
              alt_fr
              caption_en
              caption_fr
              file {
                ext
                url
                imageFile {
                  childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
            image_size: size
          }
          ... on Strapi_ComponentProjectsVideoContent {
            video {
              id
              caption_en
              caption_fr
              url
              type
            }
            video_size: size
          }
          ... on Strapi_ComponentProjectsAudioContent {
            audio {
              id
              caption_en
              caption_fr
              file {
                url
              }
            }
          }
          ... on Strapi_ComponentProjectsTextContent {
            id
            content_en
            content_fr
          }
          ... on Strapi_ComponentProjectsGalleryContent {
            id
            images {
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
          }
          ... on Strapi_ComponentProjectsLottiegalleryContent {
            id
            lotties {
              id
              caption_en
              caption_fr
              file {
                url
              }
            }
          }
          ... on Strapi_ComponentProjectsReelContent {
            id
            videos {
              id
              caption_en
              caption_fr
              url
            }
          }
          ... on Strapi_ComponentProjectsLinkContent {
            link {
              id
              text_en
              text_fr
              url
            }
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
            url
          }
          press {
            media_name
            url
          }
          collaborators {
            name
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