// Libraries
import React, {useState} from 'react';
import styled from 'styled-components'
import LottieAnim from 'react-lottie';
import {Waypoint} from 'react-waypoint';

// Lazy loading : https://github.com/mifi/react-lottie-player/issues/11

function Lottie({ className, lottie, size }) {
    let [renderLottie, setRenderLottie] = useState(false);
    
    return(
        <Waypoint onEnter={()=>setRenderLottie(true)} >
            <figure className={className} size={size}>
                {renderLottie && 
                    <LottieAnim
                        options={{
                            loop: true, 
                            path: process.env.GATSBY_PUBLIC_API_URL + lottie.file.url
                        }}
                    />
                }
                {lottie.caption &&
                    <figcaption>{lottie.caption}</figcaption>
                }
            </figure>
        </Waypoint>
    )
}

const $Lottie = styled(Lottie)`
    z-index: 2;
    animation: slidein 1.5s cubic-bezier(0.16, 1, 0.3, 1);
    /* background: #222222; */

    figcaption {
        margin-top: calc(var(--l-rh) + var(--l-rh0_125));
    }

    svg {
        display: block;
    }
`

export default $Lottie