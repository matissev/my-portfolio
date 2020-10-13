import React from "react"
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

import FilterLocale from "../../utils/FilterLocale"

import { Link } from "gatsby-plugin-react-intl";


// -------------------------- Styles
// ---------------------------------

const StyledLocalizedHeading = styled.div`
  position: absolute;
  top: 0;
  left: var(--layout-margin);

  p {
    float: left;
  }
`

const JobIndicator = styled.p`
  margin-left: var(--layout-margin);
`


// --------------------------- Logic
// ---------------------------------

const WebsiteHeading = () => {
    return (
        <IntlContextConsumer>
            {({ languages, language }) =>
                <LocalizedHeading languages={languages} language={language}/>
            }
        </IntlContextConsumer>
    )
}

const LocalizedHeading = ({languages, language}) => {
    const data = useStaticQuery(query)
    const website = FilterLocale(data.strapi.website, language, languages)

    return (
        <StyledLocalizedHeading>
            <Link to="/"><p>{website.heading}</p></Link>
            <JobIndicator>{website.job}</JobIndicator>
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
