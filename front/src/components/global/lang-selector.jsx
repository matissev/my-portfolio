import React from "react"
import { IntlContextConsumer, changeLocale, useIntl } from "gatsby-plugin-react-intl"
import styled from 'styled-components'

const StyledLangSelector = styled.nav`
    position: fixed;
    z-index: 3;
    bottom: var(--l-m);
    right: var(--l-m);

    button {
      color: var(--c-txt1);
      font-size: var(--fs-m);
      background: transparent;
      border: none;
      padding: 0;
      margin: 0 0 0 10px;

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