import PropTypes from "prop-types"
import React from "react"
import { Link, navigate } from "gatsby-plugin-intl";
import styled from 'styled-components'

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

const Header = ({ formerPage }) => {
  let pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  pathname = pathname.split("/");
  pathname = "/" + pathname[pathname.length - 1];

  const goBack = () => {
    navigate(formerPage)
  }

  return (
    <StyledHeader>
      <WebsiteHeading>
        <Link to="/"><p>Matisse V</p></Link>
        <JobIndicator>compositeur & designer</JobIndicator>
      </WebsiteHeading>
      <button>Audio Off</button>
      <MainNav>
        {pathname === "/infos"
          ? <button onClick={goBack}>X</button>
          : <Link to="/infos" state={{ formerPage: pathname }}>Infos</Link>
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
