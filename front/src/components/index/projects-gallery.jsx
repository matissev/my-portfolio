import React from "react"
import styled from "styled-components"

import ProjectPreview from "./project-preview"

const ProjectsGallery = ({ projects }) => {
  return (
    <section>
      {projects.map((project, i) => {
        return (
          <ProjectPreview project={project} key={`project__${project.slug}`}></ProjectPreview>
        )
      })}
    </section>
  )
}

export default ProjectsGallery