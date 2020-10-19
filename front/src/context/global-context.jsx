import React, { useReducer } from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  infosReturnPage: "/",
  mute: true,
  audioContext : typeof window !== `undefined` ? new(window.AudioContext||window.webkitAudioContext)() : null
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INFOS_RETURN_PAGE": {
      return {
        ...state,
        infosReturnPage: action.returnPage
      }
    }
    case "CHANGE_AUDIO_STATUS": {
      return {
        ...state,
        mute: action.mute
      }
    }
    case "LOAD_AUDIO_CONTEXT": {
      console.log(action.audioContext)
      return {
        ...state,
        audioContext: action.audioContext
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