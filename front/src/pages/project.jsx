import React from "react"
import Link from "gatsby-plugin-intl"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ProjectPage = ({ data, pageContext }) => {
  const project = FilterProjectLocale(data.strapi.projects[0], pageContext.locale)

  return (
    <Layout>
      <h1>{project.title}</h1>
    </Layout>
  )
}

export const query = graphql`
  query Project($slug: String) {
    strapi {
      projects(where: { slug: $slug }) {
        id
        title_fr
        title_en
      }
    }
  }
`

const FilterProjectLocale = (projectSuffixed, locale) => {
  const project = {
    title: projectSuffixed["title_" + locale],
    social: [],
  }

  if (projectSuffixed.social) {
    projectSuffixed.social.forEach(media => {
      project.social.push({
        intro: media["intro_" + locale],
        media_name: media.media_name,
        outro: media["outro_" + locale],
        url: media["url_" + locale],
      })
    })
  }

  return project
}

export default ProjectPage
