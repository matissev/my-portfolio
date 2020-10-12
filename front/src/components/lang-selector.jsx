import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl"
import styled from 'styled-components'

const StyledLangSelector = styled.nav`
    position: fixed;
    bottom: var(--layout-margin);
    right: var(--layout-margin);

    a {
      text-decoration: none;
      margin-left: 10px;
    }
`
const languageName = {
  fr: "FR",
  en: "EN"
}

const LangSelector = () => {
  return (
    <StyledLangSelector>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              className={currentLocale !== language ? `underline` : `none`}
              style={{
                textDecoration: currentLocale !== language ? `underline` : `none`,
                margin: 10,
                cursor: `pointer`,
              }}
            >
              <abbr>{languageName[language]}</abbr>
            </a>
          ))
        }
      </IntlContextConsumer>
    </StyledLangSelector>
  )
}

export default LangSelector