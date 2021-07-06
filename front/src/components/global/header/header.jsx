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
      {/* <$MuteButton/> */}
      <$Nav>
        <InfosLink/>
      </$Nav>
    </header>
  )
}


// ============================================================================================================ Styles

const $Header = styled(Header)`
  display: flex;
  justify-content: space-between;
  height: var(--l-rh2);
  position: fixed;
  z-index: 3;
  top: 0;
  padding-top: var(--l-rh1_5);
  left: 0;
  width: 100%;
  font-size: var(--fs-m);

  @media (max-width: 540px) {
    position: absolute;
  }

  @media (max-width: 450px) {
    padding-top: var(--l-rh);
  }
`

const cssHeaderElements = `
  line-height: calc(var(--l-rh2) + var(--l-rh0_25));
`

const $Heading = styled(Heading)`
  ${cssHeaderElements}
  margin-left: calc(var(--l-m) - var(--l-rh0_5));
  @media (max-width: 450px) {
    margin-left: calc(var(--l-m) + var(--l-rh0_5));
  }
`

const $Job = styled(Job)`
  ${cssHeaderElements}
  margin-left: var(--l-m);

  @media (max-width: 850px) {
    width: 100%;
    text-align: center;
    position: absolute;
    margin-left: 0;
    top: calc(var(--l-rh4) + var(--l-rh0_5));
    left: 0;
    padding: 0;

    .openInfos &, .openProject & {
      display: none;
    }
  }

  @media (min-width: 540px) {
    &.hide {
      color: transparent;
    }
  }

  @media (max-width: 450px) {
    top: calc(var(--l-rh3) + var(--l-rh0_5));
  }
`

const $MuteButton = styled(MuteButton)`
  ${cssHeaderElements}
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 540px) {
    position: static;
    transform: none;
    margin-left: auto;
  }

  @media (max-width: 450px) {
    font-size: var(--fs-xs);

    &.on, &.off {
      font-size: var(--fs-m);
    }
  }

  @media (max-width: 300px) {
    font-size: var(--fs-xxs);

    &.on, &.off {
      font-size: var(--fs-m);
    }
    padding: 0;
    content: "Audio Off";
  }
`

const $Nav = styled(Nav)`
  ${cssHeaderElements}
  margin-left: auto;
  margin-right: calc(var(--l-m) - var(--l-rh0_5));

  @media (max-width: 450px) {
    margin-right: calc(var(--l-m) + var(--l-rh0_5));
  }
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
