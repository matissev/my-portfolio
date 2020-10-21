import React from "react"
import styled from "styled-components"
import { Link } from "gatsby-plugin-react-intl"

const BackButton = ({ route, className }) => {
    return (
        <Link className={className} to={route}>Back</Link>
    )
}

const StyledBackButton = styled(BackButton)`
    padding: 0 var(--l-rh0_5);
    box-sizing: border-box;
    position: fixed;
    z-index: 1;
    line-height: calc(var(--l-rh) + var(--l-rh0_25));
    margin-left: calc(-1* var(--l-rh0_5));

    &:before {
    content:"◂ ";
    position: relative;
    top: -1px;
    }
`

export default StyledBackButton