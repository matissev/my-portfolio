// Libraries
import React, { useEffect, useRef } from "react"
import styled from 'styled-components'


// ============================================================================================================ Styles

const $Job = styled.strong`
  margin: 0;
  padding: 0 var(--l-rh0_5);
  color: var(--c-txt2);
  font-weight: normal;
  transition: color 0.2s ease;
`


// ============================================================================================================ Logic

const Job = ({ className, children }) => {
  const job = useRef();

  const handleScroll = () => {
    if(window.scrollY > 20) {
      job.current.classList.add("hide");
    } else {
      job.current.classList.remove("hide");
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
