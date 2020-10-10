import React, { useReducer } from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  infosReturnPage: "/",
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INFOS_RETURN_PAGE": {
      return {
        ...state,
        infosReturnPage: action.returnPage,
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider