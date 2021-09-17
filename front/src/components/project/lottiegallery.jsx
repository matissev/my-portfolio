// Libraries
import React from 'react'
import styled, { css } from 'styled-components'

import Lottie from "#components/project/lottie"


// ============================================================================================================ Logic

function LottieGallery({ className, lotties }) {
    return (
        <div className={className + " gallery"}>
            {(() => {
                return lotties.map((lottie) => (
                    <Lottie lottie={lottie} key={lottie.id}></Lottie>
                ))
            })()}
        </div>
    )
}

// ============================================================================================================ Styles

const $LottieGallery = styled(LottieGallery)`
    grid-column: 2 / span 10;
    display: grid;
    grid-column-gap: var(--l-gw);

    ${({ lotties }) => {
        if(lotties.length === 2) {
            return css`
                grid-template-columns: repeat(2, minmax(0, 1fr));
            `
        } else if(lotties.length === 3) {
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

export default $LottieGallery
