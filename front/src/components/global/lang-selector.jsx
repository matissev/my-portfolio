import React from "react"
import { IntlContextConsumer, changeLocale, useIntl } from "gatsby-plugin-react-intl"
import styled from 'styled-components'

const StyledLangSelector = styled.nav`
    position: fixed;
    z-index: 2;
    bottom: var(--layout-margin);
    right: var(--layout-margin);

    color: var(--nav-primary-color);

    a {
      margin-left: 10px;

      &.active {
        text-decoration: underline;
        cursor: pointer;
      }
    }
`

const LangSelector = ({ className }) => {
  const intlFormat = useIntl().formatMessage

  return (
    <StyledLangSelector className={className}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map((language) => (
            <button
              key={language}
              onClick={() => changeLocale(language)}
              className={currentLocale !== language ? `active` : ``}
            >
              <abbr title={intlFormat({ id: "localesAbbr." + language })}>{language.toUpperCase()}</abbr>
            </button>
          ))
        }
      </IntlContextConsumer>
    </StyledLangSelector>
  )
}

export default LangSelector