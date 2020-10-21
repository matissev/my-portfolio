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

const SEO = ({ description, title, image, isProject, language, languages }) => {
  const metadatas = FilterLocale(useMetadatas(), language, languages)

  const socialImage = {}
  if(image && image.url) {
    socialImage.url = image.url;
    socialImage.alt = image.alt ? image.alt : ""
  } else if (metadatas.social_image.file) {
    socialImage.url = metadatas.social_image.file.imageFile.publicURL;
    socialImage.alt = metadatas.social_image.alt ? metadatas.social_image.alt : ""
  }

  const pageTitle = metadatas.title + (title ? " | " + title : "")

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name='description' content={description || metadatas.description}/>

      <meta property="og:title" content={pageTitle}/>
      <meta property="og:description" content={description || metadatas.description}/>
      <meta property="og:type" content={isProject ? `article` : 'website'}/>
      {isProject &&
        <meta property="article:author" content={metadatas.author}/>
      }
      <meta property="og:image" content={process.env.GATSBY_HOST_NAME + socialImage.url}/>

      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:title" content={pageTitle}/>
      <meta name="twitter:description" content={description || metadatas.description}/>
      <meta name="twitter:image" content={process.env.GATSBY_HOST_NAME + socialImage.url}/>
      {socialImage.alt &&
        <meta name="twitter:image:alt" content={socialImage.alt}/>
      }
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
              title_en
              title_fr
              description_en
              description_fr
              social_image {
                alt_en
                alt_fr
                file {
                  url
                  imageFile {
                    publicURL
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return metadatas.strapi.website.metadatas
}

export default SEO
