import React from "react"
import { Link } from "gatsby-plugin-react-intl";
import styled from "styled-components"
import Img from "gatsby-image"

const Preview = styled.article`
  display: inline-block;
  margin-right: 20px;

  .Img {
    max-width: 200px;
  }
`


const ProjectPreview = ({ project }) => {
  return (
    <Link to={`/` + project.slug}>
      <Preview>
        <Img className='Img' fluid={project.preview.visual.imageFile.childImageSharp.fluid}/>
        <h2>{project.title}</h2>
      </Preview>
    </Link>
  )
}

export default ProjectPreview