import PropTypes from "prop-types"
import React, { useContext } from "react"
import { Link, navigate } from "gatsby-plugin-react-intl";
import styled from 'styled-components'
import { GlobalDispatchContext, GlobalStateContext } from '../context/global-context'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  
  text-align: center;
  margin-top: var(--layout-margin);

  p {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const headerSideElements = `
  position: absolute;
  top: 0;
`

const WebsiteHeading = styled.div`
  ${headerSideElements}
  left: var(--layout-margin);

  p {
    float: left;
  }
`

const JobIndicator = styled.p`
  margin-left: var(--layout-margin);
`

const MainNav = styled.nav`
  ${headerSideElements}
  right: var(--layout-margin);

  a {
    display: inline;
  }
`


const Header = ({ isPageInfos }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  const getLocation = () => {
    let pathname = typeof window !== 'undefined' ? window.location.pathname : ''
    pathname = pathname.split("/")
    pathname = pathname[pathname.length - 1]
    console.log("from component : " + pathname)
    return "/" + pathname
  }

  const closeInfos = (e, returnPage) => {
    e.preventDefault()
    navigate(returnPage)
  }

  // let previousPage = formerPage !== undefined ? formerPage : previousPage;

  return (
    <StyledHeader>
      <WebsiteHeading>
        <Link to="/"><p>Matisse V</p></Link>
        <JobIndicator>compositeur & designer</JobIndicator>
      </WebsiteHeading>
      <button>Audio Off</button>
      <MainNav>
        {isPageInfos === true
          ? <Link to="/" onClick={(e) => closeInfos(e, state.infosReturnPage)}>X</Link>
          : <Link to="/infos" onClick={() => {
            dispatch({
              type: 'CHANGE_INFOS_RETURN_PAGE',
              returnPage: getLocation()
            })
          }}>Infos</Link>
        }
      </MainNav>
    </StyledHeader>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
