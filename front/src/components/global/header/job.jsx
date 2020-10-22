// Libraries
import React, { useEffect, useRef } from "react"
import styled from 'styled-components'


// ============================================================================================================ Styles

const $Job = styled.p`
  margin: 0;
  padding: 0 var(--l-rh0_5);
  color: var(--c-txt2);
  transition: color 0.2s ease;

  &.hideJob {
    color: transparent;
  }
`


// ============================================================================================================ Logic

const Job = ({ className, children }) => {
  const job = useRef();

  const handleScroll = () => {
    if(window.scrollY > 50) {
      job.current.classList.add("hideJob");
    } else {
      job.current.classList.remove("hideJob");
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return (() => {
      window.removeEventListener('scroll', handleScroll)
    })
  }, [])

  return (
    <$Job ref={job} className={className}>
      {children}
    </$Job>
  )
}

export default Job
