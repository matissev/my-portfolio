// Libraries
import React, { useRef, useContext, useEffect } from 'react'
import styled from 'styled-components'

// Context
import { GlobalStateContext } from '#context/global-context'


// ============================================================================================================ Logic

function Animation({ className, animation, size }) {
    // const state = useContext(GlobalStateContext)
    // const dispatch = useContext(GlobalDispatchContext)
    const videoRef = useRef()

    // const muteAnimation = () => {
    //     state.mute ? videoRef.current.setAttribute('muted', '') : videoRef.current.removeAttribute('muted', '')
    // }

    // useEffect(() => {
    //     muteAnimation();
    //     const source = state.audioContext.createMediaElementSource(videoRef.current)
    //     source.connect(state.audioContext.destination)
    //     return () => {
    //         source.disconnect();
    //     }
    // }, [muteAnimation]);

    // useEffect(() => {
    //     videoRef.current.setAttribute("playsinline", '');
    //     muteAnimation();
    // }, [state.mute]);

    const playAnimation = (isPlaying) => {
        isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }

    return (
        <figure className={className} size={size}>
            <video
                    crossOrigin="anonymous"
                    onMouseEnter={() => playAnimation(true)}
                    onMouseLeave={() => playAnimation(false)}
                    ref={videoRef}
                    muted={true}
                    nocontrols
                    loop
                >
                <source src={process.env.GATSBY_PUBLIC_API_URL + animation.file.url} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            {animation.caption &&
                <figcaption>{animation.caption}</figcaption>
            }
        </figure>
    )
}


// ============================================================================================================ Styles

const $Animation = styled(Animation)`
    z-index: 2;
    animation: slidein 1.5s cubic-bezier(0.16, 1, 0.3, 1);
    
    figcaption {
        margin-top: calc(var(--l-rh) + var(--l-rh0_125));
    }

    video {
        filter: grayscale();
        width: 100%;
    }
`

export default $Animation
