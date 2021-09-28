// Libraries
import React from "react"
import { Link } from "gatsby-plugin-react-intl";
import styled, { css } from "styled-components"
import Img from "gatsby-image"


// ============================================================================================================ Logic

const ProjectPreview = ({ project, className }) => {
  return (
    <div className={className} offset={project.layout.top_offset}>
      <$Link to={`/` + project.slug} layout={project.layout}>
        <Preview>
          <h2>{project.title}</h2>
          <strong>{project.subtitle}</strong>
          <Img className='Img' fluid={project.preview.visual.imageFile.childImageSharp.fluid} alt={project.preview.alt}/>
        </Preview>
      </$Link>
    </div>
  )
}


// ============================================================================================================ Styles

const $ProjectPreview = styled(ProjectPreview)`
  grid-column: 1 / span 12;
  display: grid;
  grid-template-columns: repeat(var(--l-c), minmax(0, 1fr));
  grid-gap: var(--l-gw);

  &:last-of-type {
    margin-bottom: var(--l-brh);
  }

  ${({ project }) => {
    const offset = project.layout.top_offset
    return css`
      margin-top: calc(${offset} * 8vw);
    `
  }}

  @media (max-width: 750px) {
    margin-top: var(--l-rh2);
  }
`

const $Link = styled(Link)`
  ${({ layout }) => {
    return css`
      grid-column: ${layout.first_column} / span ${layout.width};
    `
  }}

  @media (max-width: 750px) {
    grid-column: 1 / span 12;
  }
`

const Preview = styled.article`
  width: 100%;
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 0.93;
    transition: opacity 0.5s ease;
  }

  .Img {
    width: 100%;
    margin-top: var(--l-rh);
  }

  h2 {
    /* margin-top: calc(var(--l-rh));
    font-size: var(--fs-xl);
    font-weight: 600; */

    margin-top: calc(var(--l-rh) + var(--l-rh0_125));
    font-size: var(--fs-xl);
    font-weight: 400;
  }

  strong {
    color: var(--c-txt2);
    font-weight: 400;
  }
`

export default $ProjectPreview