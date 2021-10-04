// Libraries
import React, { useContext }  from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// Context
import LocationContext from '#context/location-context'

// Hooks
import useFilterLocale from "#hooks/useFilterLocale"


// ============================================================================================================ Logic

const SEO = ({ description, title, image, isProject, mainPage }) => {
  const website = useWebsite()
  const location = useContext(LocationContext)
  console.log(location.hostname)

  const socialImage = {}
  if(image && image.url) {
    socialImage.url = image.url;
    socialImage.alt = image.alt ? image.alt : ""
  } else if (website.metadatas.social_image.file) {
    socialImage.url = website.metadatas.social_image.file.imageFile.publicURL;
    socialImage.alt = website.metadatas.social_image.alt ? website.metadatas.social_image.alt : ""
  }

  let pageTitle = ""

  if(mainPage) {
    pageTitle = website.heading + " ● " + website.job
  } else {
    pageTitle = website.heading + (title ? " | " + title : "")
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name='description' content={description || website.metadatas.description}/>

      <meta property="og:title" content={pageTitle}/>
      <meta property="og:description" content={description || website.metadatas.description}/>
      <meta property="og:type" content={isProject ? `article` : 'website'}/>
      {isProject &&
        <meta property="article:author" content={website.metadatas.author}/>
      }
      <meta property="og:image" content={process.env.GATSBY_PUBLIC_API_URL + socialImage.url}/>

      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:title" content={pageTitle}/>
      <meta name="twitter:description" content={description || website.metadatas.description}/>
      <meta name="twitter:image" content={process.env.GATSBY_PUBLIC_API_URL + socialImage.url}/>
      {socialImage.alt &&
        <meta name="twitter:image:alt" content={socialImage.alt}/>
      }
    </Helmet>
  )
}


// ============================================================================================================ Data

const useWebsite = () => {
  const website = useStaticQuery(
    graphql`
      query {
        strapi {
          website {
            heading_en
            heading_fr
            job_en
            job_fr
            metadatas {
              author
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
  return useFilterLocale(website.strapi.website)
}

export default SEO
