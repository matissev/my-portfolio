// Libraries
import { useContext } from 'react'
import i18nContext from '#context/i18n-context'


// ============================================================================================================ Logic

const useFilterLocale = (toFilter) => {
    const i18n = useContext(i18nContext);

    const localeRgx = localeToRegex(i18n.locale)
    const altLocalesRgx = localeToRegex(i18n.altLocales)
    return FilterSuffixe(toFilter, localeRgx, altLocalesRgx)
}

const FilterSuffixe = (suffixed, inSuffixe, outSuffixes) => {
    if (suffixed === null) {
        return null

    } else if (typeof suffixed === "object" && Array.isArray(suffixed)) {
        if (suffixed.length) {
            return suffixed.map(suffixedEntry => {
                return FilterSuffixe(suffixedEntry, inSuffixe, outSuffixes)
            })
        } else {
            return []
        }

    } else if (typeof suffixed === "object" && suffixed.constructor === Object) {
        const filteredObject = {};
        if (Object.keys(suffixed).length !== 0) {
            for (const [key, value] of Object.entries(suffixed)) {
                if (key.match(inSuffixe)) {
                    filteredObject[key.slice(0, -3)] = FilterSuffixe(value, inSuffixe, outSuffixes)
                } else if (key.match(outSuffixes) === null) {
                    filteredObject[key] = FilterSuffixe(value, inSuffixe, outSuffixes)
                }
            }
        } else {
            return {}
        }
        return filteredObject

    } else {
        return suffixed
    }
}

const localeToRegex = (input) => {
    let output = []
    if (Array.isArray(input)) {
        output = input.map((locale) => {
            return "_" + locale + "$"
        })
    } else {
        output = "_" + input + "$"
    }
    return output
}

export default useFilterLocale