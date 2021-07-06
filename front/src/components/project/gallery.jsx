// Libraries
import React from 'react'
import styled, { css } from 'styled-components'

import Image from "#components/project/image"


// ============================================================================================================ Logic

function Gallery({ className, images, size }) {
    return (
        <div className={className + " gallery"}>
            {(() => {
                return images.map((image) => (
                    <Image image={image} key={image.id}></Image>
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

    ${({ images }) => {
        if(images.length === 2) {
            return css`
                grid-template-columns: repeat(2, minmax(0, 1fr));
            `
        } else if(images.length === 3) {
            return css`
                grid-template-columns: repeat(3, minmax(0, 1fr));
            `   
        }
    }}

    figure {
        margin: 0;
        grid-column: span 1;
    }
`

export default $Gallery
