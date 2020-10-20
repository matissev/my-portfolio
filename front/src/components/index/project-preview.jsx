import React from "react"
import { Link } from "gatsby-plugin-react-intl";
import styled from "styled-components"
import Img from "gatsby-image"

const Row = styled.div`
  grid-column: 1 / span 12;
  display: grid;
  grid-template-columns: repeat(var(--l-c), minmax(0, 1fr));
  grid-gap: var(--l-gw);
  margin-top: calc(${props => props.offset} * 8vw);

  &:last-of-type {
    margin-bottom: var(--l-brh);
  }
`

const StyledLink = styled(Link)`
  grid-column: ${props => props.layout.first_column} / span ${props => props.layout.width};
`

const Preview = styled.article`
  width: 100%;

  .Img {
    width: 100%;
  }

  h2 {
    margin-top: calc(var(--l-rh));
    font-size: var(--fs-xl);
    font-weight: 600;
  }
`


const ProjectPreview = ({ project }) => {
  console.log(project.layout);
  return (
    <Row offset={project.layout.top_offset}>
      <StyledLink to={`/` + project.slug} layout={project.layout}>
        <Preview>
          <Img className='Img' fluid={project.preview.visual.imageFile.childImageSharp.fluid}/>
          <h2>{project.title}</h2>
        </Preview>
      </StyledLink>
    </Row>
  )
}

export default ProjectPreview