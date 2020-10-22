// Libraries
import React from 'react'
import styled, { css } from 'styled-components'
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'


// ============================================================================================================ Logic

function Video({ className, video, size }) {
    return (
        <figure className={className} size={size}>
            <Plyr source={{ type: "video", sources: [{provider: "youtube", src: video.url}]}}/>
            {video.caption &&
                <figcaption>{video.caption}</figcaption>
            }
        </figure>
    )
}


// ============================================================================================================ Styles

const $Video = styled(Video)`
    margin: 0;
    margin-top: calc(var(--l-brh) + var(--l-rh) + var(--l-rh0_25) + var(--l-rh0_125));

    figcaption {
        margin-top: calc(var(--l-rh) + var(--l-rh0_125));
    }

    ${({ size }) => {
        switch (size) {
            case "full":
                return css`
                    position: relative;
                    top: calc(-1 * (var(--l-brh) + var(--l-rh2)));
                    grid-column: 1 / span 12;
                    margin-top: 65vh;
                `
            case "XL":
                return css`
                    grid-column: 2 / span 10;
                `
            case "L":
                return css`
                    grid-column: 2 / span 8;
                `
            case "M":
                return css`
                    grid-column: 2 / span 6;
                `
            case "S":
                return css`
                    grid-column: 2 / span 4;
                `
            case "X":
                return css`
                    grid-column: 2 / span 2;
                `
            default:
                return css`
                    grid-column: 2 / span 6;
                `
        }
    }}
`

export default $Video
