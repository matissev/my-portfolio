import React from "react"
import { Link, navigate } from "gatsby-plugin-intl";

const ProjectPreview = ({ project }) => {
  return (
    <Link to={`/` + project.slug}>
      <article>
        <h2>{project.title}</h2>
        <p>{project.content}</p>
      </article>
    </Link>
  )
}

export default ProjectPreview