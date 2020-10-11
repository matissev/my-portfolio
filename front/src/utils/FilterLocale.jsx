
const FilterLocale = (toFilter, locale, locales) => {
    const otherLocales = locales.filter(entry => entry !== locale)
    const localeRgx = localeToRegex(locale)
    const otherLocalesRgx = localeToRegex(otherLocales)
    return FilterSuffixe(toFilter, localeRgx, otherLocalesRgx)
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
        for (let i = 0; i < input.length; i++) {
            output[i] = "_" + input[i] + "$"
        }
    } else {
        output = "_" + input + "$"
    }
    return output
}

export default FilterLocale