// Libraries
import React, { useContext } from "react"
import styled from 'styled-components'

// Context
import i18nContext from "#context/i18n-context"


// ============================================================================================================ Logic

const LangSelector = ({ className }) => {
  const i18n = useContext(i18nContext)

  return (
    <StyledLangSelector className={className}>
      {i18n.locales.map(thisLocale =>
        <button
          key={thisLocale}
          onClick={() => i18n.changeLocale(thisLocale)}
          className={i18n.locale !== thisLocale ? `active` : ``}
        >
          <abbr title={i18n.format({ id: "localesAbbr." + thisLocale })}>{thisLocale.toUpperCase()}</abbr>
        </button>
      )}
    </StyledLangSelector>
  )
}


// ============================================================================================================ Styles

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

export default LangSelector