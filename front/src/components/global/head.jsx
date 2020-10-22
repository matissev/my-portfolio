// Libraries
import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// Context
import i18nContext from '#context/i18n-context'
import LocationContext from '#context/location-context'

// Hooks
import useFilterLocale from "#hooks/useFilterLocale"


// ============================================================================================================ Logic

const Head = () => {
  const i18n = useContext(i18nContext)
  const location = useContext(LocationContext)
  const metadatas = useMetadatas()

  const currentUrl = location.hostname + (i18n.locale === i18n.defaultLocale ? "" : "/" + i18n.locale) + location.noLocalePath

  const altLanguages = i18n.altLocales.map((locale) => {
    return {
      locale: locale,
      route: locale === i18n.defaultLocale ? "" : "/" + locale
    }
  })

  return (
    <Helmet htmlAttributes={{ language: i18n.locale }}>

      <meta name="og:locale" content={i18n.locale}/>
      {altLanguages.map(lng =>
        <meta property="og:locale:alternate" key={lng.locale} content={lng.locale}/>
      )}
      {altLanguages.map(lng =>
        <link rel="alternate" key={lng.locale} href={location.hostname + lng.route + location.noLocalePath} hreflang={lng.locale}/>
      )}

      <meta name="author" content={metadatas.author}/>
      <meta name="twitter:creator" content={metadatas.author}/>

      <meta property="og:url" content={currentUrl}/>
      <meta name="twitter:url" content={currentUrl}/>

    </Helmet>
  )
}


// ============================================================================================================ Data

const useMetadatas = () => {
  const metadatas = useStaticQuery(
    graphql`
      query {
        strapi {
          website {
            metadatas {
              author
            }
          }
        }
      }
    `
  )
  return useFilterLocale(metadatas.strapi.website.metadatas)
}

export default Head
