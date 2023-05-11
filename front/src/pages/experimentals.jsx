// Libraries
import React from "react"

// Components
import SEO from "#components/global/seo"
import Products from "#components/experimentals/products"


// ============================================================================================================ Logic

const ExperimentalsPage = ({ data }) => {
//   const infos = useFilterLocale(data.strapi.info)

  return (
    <>
      <SEO title="Experimentals"/>
      <Products/>
    </>
  )
}


export default ExperimentalsPage
