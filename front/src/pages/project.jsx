import React, { useEffect } from "react"
import { Link } from "gatsby-plugin-react-intl"
import styled, { createGlobalStyle, css } from "styled-components"
import { graphql } from "gatsby"
import ReactMarkdown from 'react-markdown'

import Tags from "#components/project/tags"
import MainMedia from "#components/project/main-media"
import Content from "#components/project/content"
import Social from "#components/infos/social"
import ContactButton from "#components/infos/contact-button"

import FilterLocale from "#utils/FilterLocale"

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

const H1 = styled.h1`
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  /* line-height: 100vh; */
  grid-column: 1 / span 12;
  /* text-align: left; */
  text-align: center;
  font-size: var(--fs-xl);
  font-weight: 600;
  margin: 0;
  margin-bottom: var(--l-rh2);
  margin-top: var(--l-brh2);
  transform: translate3d(0,-40px,0);
  opacity: 0;
  animation: popin 1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
`

const StyledLink = styled(Link)`
  padding: 0 var(--l-rh0_5);
  box-sizing: border-box;
  position: fixed;
  z-index: 1;
  line-height: calc(var(--l-rh) + var(--l-rh0_25));
  margin-left: calc(-1* var(--l-rh0_5));

  &:before {
    content:"◂ ";
    position: relative;
    top: -1px;
  }
`

const Brief = styled.div`
  margin-top: calc(var(--l-rh5) + var(--l-rh0_125) - var(--l-rh0_25));
  transform: translateY(15px);
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: var(--l-gw);
  grid-column: 2 / span 4;
  font-size: var(--fs-xl);
  line-height: var(--fs-xl);

  &:before {
    grid-column: 1 / span 3;
    transform-origin: left center;
    animation: scaleFromLeft 1s cubic-bezier(0.76, 0, 0.24, 1) 0.75s forwards;
    transform: scale3d(1,0,1);
    content: "";
    border-top: 1px solid var(--c-txt1);
  }

  p {
    animation: popin 1s ease 0.5s forwards;
    opacity: 0;
    transform: translate3d(0,-40px,0);
    margin-top: calc(var(--l-rh2) + var(--l-rh0_5));
    margin-bottom: 0;
    line-height: calc(var(--l-rh2));
    grid-column: 1 / span 4;
  }
`

const ProjectFooter = styled.div`
  margin-top: calc(var(--l-brh) + var(--l-rh) + var(--l-rh0_25) + var(--l-rh0_125));
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-gap: var(--l-gw);
  position: relative;
  grid-column: 1 / span 12;
  color: var(--c-stxt1);
  background: var(--c-sbg);
  transform: translateY(5px);

  &:before, &:after {
    position: absolute;
    background: var(--c-sbg);
    content:"";
    display: block;
    top: 0;
    bottom: 0;
    left: calc(-1 * var(--l-m));
    width: var(--l-m);
  }

  &:after {
    left: auto;
    right: calc(-1 * var(--l-m));
  }
`
const MarkDown = styled.div`
  margin-top: calc(var(--l-brh) + var(--l-rh) + var(--l-rh0_5) + var(--l-rh0_125));
  grid-column: 4 / span 6;
  line-height: var(--l-rh3);
  font-size: var(--fs-l);

  p:first-of-type {
    margin-top: 0;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`

const StyledContactButton = styled.button`
  margin-top: calc(var(--l-rh4));
  grid-column: span 2;
`

const ProjectPage = ({ data, pageContext }) => {
  const project = FilterLocale(data.strapi.projects[0], pageContext.locale, pageContext.intl.languages)
  const infos = FilterLocale(data.strapi.info, pageContext.locale, pageContext.intl.languages)

  useEffect(() => {
    document.body.classList.add('openProject')
    // return (
    //   document.body.classList.remove('project-color-scheme')
    // )
  }, [])

  return (
    <>
      <ColorScheme colorscheme={project.color_scheme}/>
      <StyledLink to="/">Back</StyledLink>
      <H1>{project.title}</H1>
      <Brief><p>{project.brief}</p></Brief>
      <MainMedia main_media={project.main_media[0]}/>
      <Content components={project.content} />
      <ProjectFooter>
        <MarkDown>
          <ReactMarkdown source={project.description} />
        </MarkDown>
        <Tags tags={project.tags}/>
      </ProjectFooter>
      <Social as={Social} social={infos.social}>
        <StyledContactButton as={ContactButton}/>
      </Social>
    </>
  )
}

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
                    fluid(maxWidth: 500, quality: 100) {
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