// Libraries
import React, { useContext } from 'react'
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group"
import styled, { css } from 'styled-components'

// Context
import LocationContext from "#context/location-context"


// ============================================================================================================ Logic

function Transition({ children }) {
    const location = useContext(LocationContext)
    const timeout = 300

    return (
        <TransitionGroup>
            <ReactTransition key={location.path} timeout={{enter: timeout, exit: timeout}}>
                {status => (
                    <TransitionWrapper status={status} timeout={timeout}>{children}</TransitionWrapper>
                )}
            </ReactTransition>
        </TransitionGroup>
    )
}


// ============================================================================================================ Styles

const TransitionWrapper = styled.div`
    ${props => {
        switch (props.status) {
            case "entering":
                return css`
                    position: absolute;
                    opacity: 0;
                `
            case "entered": 
                return css`
                    transition: opacity ${props.timeout}ms ease-in-out;
                    opacity: 1;
                `
            case "exiting": 
                return css`
                    transition: all ${props.timeout}ms ease-in-out;
                    opacity: 0;
                `
            default:
                return null;
        }
    }}
`

export default Transition
