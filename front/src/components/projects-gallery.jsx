import React from "react"
import ProjectPreview from "./project-preview"
import { useStaticQuery, graphql } from "gatsby"

const ProjectsGallery = () => {
  const projects = useStaticQuery(graphql`
      query {
        allStrapiProject(filter: {published: {eq: true}}) {
          nodes {
            strapiId
            title,
            slug
          }
        }
      }
  `).allStrapiProject.nodes

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