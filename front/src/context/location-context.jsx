// Libraries
import React from "react"

// Contexts
import { IntlContextConsumer } from "gatsby-plugin-react-intl"


// ============================================================================================================ Logic

const LocationContext = React.createContext()

export const LocationContextProvider = ({ children, location }) => {
    const fixPath = (path) => {
        if(path !== "/")
            return path.slice(-1) === "/" ? path.slice(0, -1) : path
        else
            return "/"
    }

    return (
        <IntlContextConsumer>
            {({ originalPath }) =>
                <LocationContext.Provider value={{
                    hostname: location ? location.origin : "",
                    noLocalePath: fixPath(originalPath),
                    path: location ? location.pathname : ""
                }}>
                    {children}
                </LocationContext.Provider>
            }
        </IntlContextConsumer>
    )
}

export default LocationContext