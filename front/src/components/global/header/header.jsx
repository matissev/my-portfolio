// Libraries
import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

// Hooks
import useFilterLocale from '#hooks/useFilterLocale'

// Components
import Heading from './heading'
import Job from './job'
import MuteButton from './mute-button'
import Nav from './nav'
import InfosLink from './infos-link'


// ============================================================================================================ Logic

const Header = ({ className }) => {
  const website = useWebsiteData()

  return (
    <header className={className}>
      <$Heading>
        {website.heading}
      </$Heading>
      <$Job>
        {website.job}
      </$Job>
      <$MuteButton/>
      <$Nav>
        <InfosLink/>
      </$Nav>
    </header>
  )
}


// ============================================================================================================ Styles

const $Header = styled(Header)`
  height: var(--l-rh2);
  position: fixed;
  z-index: 3;
  top: 0;
  padding-top: var(--l-rh1_5);
  left: 0;
  width: 100%;
  font-size: var(--fs-m);
`

const MuteButtonWrapper = styled.div`
  
`

const cssHeaderElements = `
  line-height: calc(var(--l-rh2) + var(--l-rh0_25));
`

const $Heading = styled(Heading)`
  ${cssHeaderElements}
  margin-left: calc(var(--l-m) - var(--l-rh0_5));
  margin-right: var(--l-m);
  float: left;;
`

const $Job = styled(Job)`
  ${cssHeaderElements}
  float: left;
`

const $MuteButton = styled(MuteButton)`
  ${cssHeaderElements}
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const $Nav = styled(Nav)`
  ${cssHeaderElements}
  float: right;
  margin-right: calc(var(--l-m) - var(--l-rh0_5));
`


// ============================================================================================================ Data

const useWebsiteData = () => {
  const metadatas = useStaticQuery(
    graphql`
      query {
        strapi {
          website {
            heading_fr
            heading_en
            job_fr
            job_en
          }
        }
      }
    `
  )
  return useFilterLocale(metadatas.strapi.website)
}

export default $Header
