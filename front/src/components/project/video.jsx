import React from 'react'
import styled, { css } from 'styled-components'
// import Plyr from 'plyr'
// import 'plyr/dist/plyr.css'

import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'

const VideoFigure = styled.figure`
    margin: 0;
    margin-top: calc(var(--l-brh) + var(--l-rh) + var(--l-rh0_25) + var(--l-rh0_125));

    figcaption {
        margin-top: calc(var(--l-rh) + var(--l-rh0_125));
    }

    ${props => {
        switch (props.size) {
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


function Video({ video, size }) {
    // const player = new Plyr('#player')
    return (
        <VideoFigure size={size}>
            <Plyr source={{ type: "video", sources: [{provider: "youtube", src: "https://www.youtube.com/watch?v=bTqVqk7FSmY"}]}}/>
            {video.caption &&
                <figcaption>{video.caption}</figcaption>
            }
        </VideoFigure>
        // <div class="plyr__video-embed" id="player">
        //     <iframe
        //         src={video.url}
        //         allowfullscreen
        //         allowtransparency
        //         allow="autoplay"
        //     ></iframe>
        // </div>
    )
}

export default Video
