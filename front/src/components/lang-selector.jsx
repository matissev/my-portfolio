import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const StyledLangSelector = styled.nav`
    position: fixed;
    bottom: var(--layout-margin);
    right: var(--layout-margin);

    .lng {
      margin-left: 10px;
    }
`

const LangSelector = () => {
    return(
      <StyledLangSelector>
        <Link className="lng" to="/"><abbr>FR</abbr></Link>
        <Link className="lng" to="/en"><abbr>EN</abbr></Link>
      </StyledLangSelector>
    )
}

export default LangSelector