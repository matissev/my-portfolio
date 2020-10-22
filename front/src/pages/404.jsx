// Libraries
import React from "react"

// Components
import Layout from "#components/global/layout"
import SEO from "#components/global/seo"


// ============================================================================================================ Logic

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
