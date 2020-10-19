import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'

import { GlobalDispatchContext, GlobalStateContext } from '#context/global-context'

// Create the keyframes
const rotate = keyframes`
    0% { transform: scale(1); opacity: 0; }
    25% { transform: scale(1.3); opacity: 1; }
    50% { transform: scale(1); }
    75% { transform: scale(1.3); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
`;

const StyledMuteButton = styled.button`
    font-size: var(--fs-m);
    font-family: var(--main-font-family);
    border: none;
    cursor: pointer;
    position: relative;
    padding: 0 var(--l-rh0_5);
    height: 100%;
    margin: 0 auto;
    display: block;
    color: var(--c-txt2);
    background: transparent;
    transition: background 0.2s ease;

    &:hover {
        background: var(--c-bg);
    }

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: block;
        border: 1px solid red;
        border-radius: 5px;
        opacity: 0;
        animation: ${rotate} 2s ease-in-out forwards;
    }
`

const MuteButton = ({ className }) => {
    const dispatch = useContext(GlobalDispatchContext)
    const state = useContext(GlobalStateContext)
    
    const unmute = (params) => {
        dispatch({ type: "CHANGE_AUDIO_STATUS", mute: !state.mute })
        state.audioContext.resume()
    }

    return (
        <StyledMuteButton className={className} onClick={() => unmute()}>
            { state.mute ? "Audio Off" : "Audio On"}
        </StyledMuteButton>
    )
}

export default MuteButton
