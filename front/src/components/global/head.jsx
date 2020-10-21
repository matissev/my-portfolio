/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import FilterLocale from "#utils/FilterLocale"

const Head = ({ location, language, languages, noLangPath, defaultLanguage }) => {
  const metadatas = FilterLocale(useMetadatas(), language, languages)

  const alternateLanguages = languages.filter((locale) =>
    language !== locale
  ).map((locale) => {
    return {
      locale: locale,
      route: locale === defaultLanguage ? "" : "/" + locale
    }
  })

  return (
    <Helmet htmlAttributes={{language}}>
      {/* Languages */}
      <meta name="og:locale" content={language}/>
      {alternateLanguages.map((language) =>
        <meta property="og:locale:alternate" content={language.locale}/>
      )}
      {alternateLanguages.map((language) =>
        <link rel="alternate" href={location.origin + language.route + noLangPath} hreflang={language.locale}/>
      )}

      {/* Author */}
      <meta name="author" content={metadatas.author}/>
      <meta name="twitter:creator" content={metadatas.author}/>

      {/* Href */}
      <meta property="og:url" content={location.href}/>
      <meta name="twitter:url" content={location.href}/>

    </Helmet>
  )
}

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
  return metadatas.strapi.website.metadatas
}

export default Head
