import React, { useContext, useEffect } from "react"
import styled from "styled-components"

import { Link, navigate } from "gatsby-plugin-react-intl";
import { GlobalDispatchContext, GlobalStateContext } from '#context/global-context'

const CloseButton = styled(Link)`
    position: relative;
    /* background: green; */
    width: var(--l-rh2);
    height: var(--l-rh2);

    span {
        // assistive-hide
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: polygon(0px 0px, 0px 0px,0px 0px, 0px 0px);
    }

    &:before, &:after {
        position: absolute;
        top: calc(50% - 1px);
        left: 0;
        content: "";
        display: block;
        width: var(--l-rh2);
        border-top: 2px solid var(--c-txt1);
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }
`

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

    useEffect(() => {
        isPageInfos ? document.body.classList.add('openInfos') : document.body.classList.remove('openInfos');
    })

    return (
        <>
            {isPageInfos === true
                ? <CloseButton to="/" onClick={(e) => closeInfos(e, state.infosReturnPage)}><span>Close</span></CloseButton>
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