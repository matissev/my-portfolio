import React, { useContext, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { IntlContextConsumer, changeLocale, useIntl } from "gatsby-plugin-react-intl"

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
    color: var(--c-bg);
    background: var(--c-audio-btn-start);
    transition: background 0.2s ease-out, color 0.2s ease-out;
    animation: blink 2s ease-in-out forwards 1s;

    &.on {
        background: transparent;
        color: var(--c-txt1);
    }

    &.off {
        background: transparent;
        color: var(--c-txt2);
    }

    &:hover {
        background: var(--c-txt1);
        color: var(--c-bg);
    }

    /* &:after {
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
    } */
`

const MuteButton = ({ className }) => {
    const intlFormat = useIntl().formatMessage
    const dispatch = useContext(GlobalDispatchContext)
    const state = useContext(GlobalStateContext)
    const audioButton = useRef(null);
    const [buttonState, setButtonState] = useState("start");
    
    const unmute = () => {
        if(!state.mute) {
            setButtonState("off")
            audioButton.current.classList.add('off')
            audioButton.current.classList.remove('on')
        } else {
            setButtonState("on")
            audioButton.current.classList.add('on')
            audioButton.current.classList.remove('off')      
        }
        dispatch({ type: "CHANGE_AUDIO_STATUS", mute: !state.mute })
        state.audioContext.resume()
    }

    return (
        <StyledMuteButton ref={audioButton} className={className} onClick={() => unmute()}>
            {intlFormat({ id: "header.audioButton." + buttonState })}
        </StyledMuteButton>
    )
}

export default MuteButton
