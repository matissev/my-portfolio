import React from "react"
import Link from "gatsby"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ProjectPage = () => {
    const project = useStaticQuery(graphql`
    query ProjectQuery($slug: String) {
      strapiProject(slug: { eq: $slug }) {
          strapiId
          title
      }
    }
`).strapiProject

    return (
        <Layout>
            <h1>{project.title}</h1>
        </Layout>
    )
}

export default ProjectPage
