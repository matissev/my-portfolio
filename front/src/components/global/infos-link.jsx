import React, { useContext } from "react"
import { Link, navigate } from "gatsby-plugin-react-intl";

import { GlobalDispatchContext, GlobalStateContext } from '../../context/global-context'


const InfosLink = ({ isPageInfos }) => {
    const dispatch = useContext(GlobalDispatchContext)
    const state = useContext(GlobalStateContext)
  
    const getLocation = () => {
      let pathname = typeof window !== 'undefined' ? window.location.pathname : ''
      pathname = pathname.split("/")
      pathname = pathname[pathname.length - 1]
      return "/" + pathname
    }
  
    const closeInfos = (e, returnPage) => {
      e.preventDefault()
      navigate(returnPage)
    }

    return (
        <>
            {isPageInfos === true
                ? <Link to="/" onClick={(e) => closeInfos(e, state.infosReturnPage)}>X</Link>
                : <Link to="/infos" onClick={() => {
                    dispatch({
                        type: 'CHANGE_INFOS_RETURN_PAGE',
                        returnPage: getLocation()
                    })
                }}>Infos</Link>
            }
        </>
    )
}

export default InfosLink