// Libraries
import React, { useContext, useRef, useState } from 'react'
import styled from 'styled-components'

// Context
import i18nContext from '#context/i18n-context'
import { GlobalDispatchContext, GlobalStateContext } from '#context/global-context'


// ============================================================================================================ Logic

const MuteButton = ({ className }) => {
    const i18n = useContext(i18nContext)
    const dispatch = useContext(GlobalDispatchContext)
    const state = useContext(GlobalStateContext)

    const audioButton = useRef(null);
    const [buttonState, setButtonState] = useState("start");

    const unmute = () => {
        if (!state.mute) {
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
        <button ref={audioButton} className={className} onClick={() => unmute()}>
            {i18n.format({ id: "header.audioButton." + buttonState })}
        </button>
    )
}

// ============================================================================================================ Styles

const $MuteButton = styled(MuteButton)`
    height: var(--l-rh2);
    font-size: var(--fs-m);
    font-family: var(--main-font-family);
    border: none;
    cursor: pointer;
    position: relative;
    padding: 0 var(--l-rh0_5);
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

    @media (hover: hover) {
        &:hover {
            background: var(--c-txt1);
            color: var(--c-bg);
        }
    }
`

export default $MuteButton
