// Libraries
import React from "react"
import styled from "styled-components"
import ReactMarkdown from 'react-markdown'

// Components
import Tags from "#components/project/tags"


// ============================================================================================================ Logic

const Footer = ({ className, tags, description }) => {
    return (
        <div className={className}>
            <MarkDown>
                <ReactMarkdown source={description} />
            </MarkDown>
            <Tags tags={tags}/>
        </div>
    )
}


// ============================================================================================================ Styles

const $Footer = styled(Footer)`
  margin-top: calc(var(--l-brh) + var(--l-rh) + var(--l-rh0_25) + var(--l-rh0_125));
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-gap: var(--l-gw);
  position: relative;
  grid-column: 1 / span 12;
  color: var(--c-stxt1);
  background: var(--c-sbg);
  transform: translateY(5px);

  &:before, &:after {
    position: absolute;
    background: var(--c-sbg);
    content:"";
    display: block;
    top: 0;
    bottom: 0;
    left: calc(-1 * var(--l-m));
    width: var(--l-m);
  }

  &:after {
    left: auto;
    right: calc(-1 * var(--l-m));
  }
`

const MarkDown = styled.div`
  margin-top: calc(var(--l-brh) + var(--l-rh) + var(--l-rh0_5) + var(--l-rh0_125));
  grid-column: 4 / span 6;
  line-height: var(--l-rh3);
  font-size: var(--fs-l);

  p:first-of-type {
    margin-top: 0;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`

export default $Footer