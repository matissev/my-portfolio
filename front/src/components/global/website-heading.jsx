import React, { useEffect, useRef } from "react"
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

import FilterLocale from "#utils/FilterLocale"

import { Link } from "gatsby-plugin-react-intl";


// -------------------------- Styles
// ---------------------------------

const StyledLocalizedHeading = styled.p`
  margin: 0;
  padding: 0 var(--l-rh0_5);
  color: var(--c-txt2);
  transition: color 0.2s ease;

  &.hideJob {
    color: transparent;
  }

  a {
    font-weight: 500;
    display: block;
    height: 100%;
    float: left;
    margin-right: var(--layout-margin);
  }
`


// --------------------------- Logic
// ---------------------------------

const WebsiteHeading = ({ className }) => {
    return (
        <IntlContextConsumer>
            {({ languages, language }) =>
                <LocalizedHeading className={className} languages={languages} language={language}/>
            }
        </IntlContextConsumer>
    )
}

const LocalizedHeading = ({ className, languages, language}) => {
    const data = useStaticQuery(query)
    const website = FilterLocale(data.strapi.website, language, languages)
    const heading = useRef();

    const handleScroll = () => {
      if(window.scrollY > 50) {
        heading.current.classList.add("hideJob");
      } else {
        heading.current.classList.remove("hideJob");
      }
    }
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return (() => {
        window.removeEventListener('scroll', handleScroll)
      })
    }, [])

    return (
        <StyledLocalizedHeading ref={heading} className={className}>
          <Link to="/">{website.heading}</Link>
          {website.job}
        </StyledLocalizedHeading>
    )
}


// --------------------------- Data
// ---------------------------------

export const query = graphql`
  query Website {
    strapi {
      website {
        heading_fr
        heading_en
        job_fr
        job_en
      }
    }
  }
`

export default WebsiteHeading
