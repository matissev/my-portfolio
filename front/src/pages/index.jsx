import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import ProjectsGallery from "../components/projects-gallery"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data, pageContext }) => {
  const projects = FilterProjectsLocale(data.strapi.projects, pageContext.locale)

  return (
    <Layout>
      <ProjectsGallery projects={projects} />
    </Layout>
  )
}

export const query = graphql`
  query Projects {
    strapi {
      projects(where: {published: true}) {
        id
        title_fr
        title_en
        slug
      }
    }
  }
`

const FilterProjectsLocale = (projectsSuffixed, locale) => {
  const projects = []

  projectsSuffixed.forEach(project => {
    projects.push({
      id: project.id,
      title: project["title_" + locale],
      slug: project.slug
    })
  })

  return projects
}

export default IndexPage
