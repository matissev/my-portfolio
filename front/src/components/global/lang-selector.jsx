// Libraries
import React, { useContext, useEffect, useRef } from "react"
import styled from 'styled-components'

// Context
import i18nContext from "#context/i18n-context"


// ============================================================================================================ Logic

const LangSelector = ({ className }) => {
  const i18n = useContext(i18nContext)
  const langSelectorEl = useRef(null);

  const handleScroll = () => {
      if (window.scrollY > 50) {
          langSelectorEl.current.classList.add("hide");
      } else {
          langSelectorEl.current.classList.remove("hide");
      }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return (() => {
      window.removeEventListener('scroll', handleScroll)
    })
  }, [])

  return (
    <nav ref={langSelectorEl} className={className}>
      {i18n.locales.map(thisLocale =>
        <button
          key={thisLocale}
          onClick={() => i18n.changeLocale(thisLocale)}
          className={i18n.locale === thisLocale ? `active` : ``}
        >
          <abbr title={i18n.format({ id: "localesAbbr." + thisLocale })}>{thisLocale.toUpperCase()}</abbr>
        </button>
      )}
    </nav>
  )
}


// ============================================================================================================ Styles

const $LangSelector = styled(LangSelector)`
    position: fixed;
    z-index: 3;
    bottom: var(--l-m);
    right: var(--l-m);

    @media (max-width: 540px) {      
      &.hide button {
        background: transparent;
        color: transparent;
        height: 0;
        transition: background 0.2s ease-out, color 0.2s ease-out, height 0.05s ease 0.2s;
      }
    }

    button {
      color: var(--c-txt1);
      font-size: var(--fs-m);
      background: transparent;
      border: none;
      padding: 0;
      margin: 0 0 0 10px;
      transition: background 0.2s ease-out, color 0.2s ease-out;
      text-decoration: underline;
      cursor: pointer;

      &.active {
        text-decoration: none;
        cursor: default;
        &:before {
          display: inline-block;
          transform: translateY(-1px);
          content: "["
        }

        &:after {
          display: inline-block;
          transform: translateY(-1px);
          content: "]"
        }
      }
    }
`

export default $LangSelector