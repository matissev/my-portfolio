import React from "react"
import Link from "gatsby-plugin-intl"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ProjectPage = ({ data, pageContext }) => {
  const project = FilterLocale(data.strapi.projects[0], localeToRegex(pageContext.locale), localeToRegex(removeValueFromArray(pageContext.intl.languages, pageContext.locale)))

  return (
    <Layout>
      <h1>{project.title_en}</h1>
    </Layout>
  )
}
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/entries

export const query = graphql`
  query Project($slug: String) {
    strapi {
      projects(where: { slug: $slug }) {
        id
        title_en
        title_fr
        brief_fr
        brief_en
        content {
          ... on Strapi_ComponentProjectsAnimation {
            caption_en
            caption_fr
            file {
              url
            }
          }
          ... on Strapi_ComponentProjectsImage {
            alt_en
            alt_fr
            caption_en
            caption_fr
            file {
              url
            }
          }
          ... on Strapi_ComponentProjectsVideo {
            caption_en
            caption_fr
            url
          }
          ... on Strapi_ComponentProjectsText {
            content_en
            content_fr
          }
        }
        description_en
        description_fr
        main_media {
          ... on Strapi_ComponentProjectsVideo {
            caption_en
            caption_fr
            url
          }
          ... on Strapi_ComponentProjectsImage {
            alt_en
            alt_fr
            caption_en
            caption_fr
            file {
              url
            }
          }
          ... on Strapi_ComponentProjectsAnimation {
            caption_en
            caption_fr
            file {
              url
            }
          }
        }
        tags {
          backer_en
          backer_fr
          date_en
          date_fr
          location_en
          location_fr
          other {
            entry_en
            entry_fr
            label_en
            label_fr
          }
          press {
            media_name
            url
          }
          type_en
          type_fr
        }
        preview {
          alt_en
          alt_fr
          visual {
            url
          }
        }
      }
    }
  }
`

const FilterLocale = (suffixedObject, localeRegex, otherLocalesRegex) => {
  if(suffixedObject === null) {
    return null

  } else if(typeof suffixedObject === "object" && Array.isArray(suffixedObject)) {
    if(suffixedObject.length) {
      return suffixedObject.map(suffixedEntry => {
        return FilterLocale(suffixedEntry, localeRegex, otherLocalesRegex);
      })
    } else {
      return []
    }

  } else if (typeof suffixedObject === "object" && suffixedObject.constructor === Object) {
    const filteredObject = {};
    if(Object.keys(suffixedObject).length !== 0) {
      for (const [key, value] of Object.entries(suffixedObject)) {
        if(key.match(localeRegex)) {
          filteredObject[key.slice(0, -3)] = FilterLocale(value, localeRegex, otherLocalesRegex)
        } else if (key.match(otherLocalesRegex) === null) {
          filteredObject[key] = FilterLocale(value, localeRegex, otherLocalesRegex)
        }
      }
    }
    return filteredObject

  } else {
    return suffixedObject
  }
}

const localeToRegex = (input) => {
  let output = {...input}
  if(Array.isArray(output)) {
    for (let i = 0; i < output.length; i++) {
      output[i] = "_" + output[i] + "$"
    }
  } else {
    output = "_" + output + "$"
  }

  return output
}

const removeValueFromArray = (inputArray, value) => {
  let outputArray = {...inputArray}
  for (let i = 0; i < outputArray.length; i++) {
    if(outputArray[i] === value) {
      outputArray.splice(i,1);
      break;
    }
  }
  return outputArray
}

// const FilterProjectLocale = (projectSuffixed, locale) => {
//   const project = {
//     title: projectSuffixed["title_" + locale],
//     social: [],
//   }

//   if (projectSuffixed.social) {
//     projectSuffixed.social.forEach(media => {
//       project.social.push({
//         intro: media["intro_" + locale],
//         media_name: media.media_name,
//         outro: media["outro_" + locale],
//         url: media["url_" + locale],
//       })
//     })
//   }

//   return project
// }

export default ProjectPage
