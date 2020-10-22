// Libraries
import React from "react"

// Contexts
import { IntlContextConsumer, useIntl, changeLocale } from "gatsby-plugin-react-intl"


// ============================================================================================================ Logic

const i18nContext = React.createContext()

export const I18nContextProvider = ({ children }) => {
  const intlFormat = useIntl().formatMessage

  return (
    <IntlContextConsumer>
      {({ languages, language, defaultLanguage }) =>
        <i18nContext.Provider value={{
          locale: language,
          locales: languages,
          altLocales: languages.filter(locale => locale !== language),
          defaultLocale: defaultLanguage,
          changeLocale: changeLocale,
          format: intlFormat
        }}>
          {children}
        </i18nContext.Provider>
      }
    </IntlContextConsumer>
  )
}

export default i18nContext