// Libraries
import React, { useContext, useEffect, useRef, useState } from "react"
import styled from 'styled-components'

// Context
import i18nContext from "#context/i18n-context"


// ============================================================================================================ Logic

const LangSelector = ({ className }) => {
  const i18n = useContext(i18nContext)
  const langSelectorEl = useRef(null);
  let prevScrollY = 0;

  const handleScroll = () => {
      let windowY = Math.min(document.body.offsetHeight, Math.max(0,window.scrollY))
      if (windowY > prevScrollY) {
        langSelectorEl.current.classList.add("hide");
      } else {
        langSelectorEl.current.classList.remove("hide");
      }
      prevScrollY = windowY
  }

  function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll))
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
    transition: background 0.2s ease-out, color 0.2s ease-out;

    button {
      color: var(--c-txt1);
      font-size: var(--fs-m);
      background: transparent;
      border: none;
      padding: 0;
      transition: background 0.2s ease-out, color 0.2s ease-out;
      cursor: pointer;

      &:not(:first-of-type) {
        margin: 0 0 0 10px;
      }

      &.active {
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

    @media (max-width: 750px) {
      background: var(--c-bg);
      padding: var(--l-rh0_5) var(--l-rh);

      &.hide {
        background: transparent;
        color: transparent;

        button {
          background: transparent;
          color: transparent;
        }
      }
    }

    @media (max-width: 540px) {
    }
`

export default $LangSelector