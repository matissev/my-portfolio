// Libraries
import React from 'react'
import styled, { css } from 'styled-components'

import Video from "#components/project/video"


// ============================================================================================================ Logic

function Gallery({ className, videos, size }) {
    return (
        <div className={className + " gallery"}>
            {(() => {
                return videos.map((video) => (
                    <Video video={video} key={video.id}></Video>
                ))
            })()}
        </div>
    )
}

// ============================================================================================================ Styles

const $Gallery = styled(Gallery)`
    grid-column: 2 / span 10;
    display: grid;
    grid-column-gap: var(--l-gw);

    ${({ videos }) => {
        if(videos.length === 2) {
            return css`
                grid-template-columns: repeat(2, minmax(0, 1fr));
            `
        } if(videos.length === 3) {
            return css`
                grid-template-columns: repeat(3, minmax(0, 1fr));
            `   
        } else if(videos.length >= 4) {
            return css`
                grid-template-columns: repeat(4, minmax(0, 1fr));
            `   
        }
    }}

    figure {
        margin: 0;
        grid-column: span 1;
        margin-bottom: var(--l-rh3);
    }
`

export default $Gallery
