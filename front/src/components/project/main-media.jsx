// Libraries
import React from 'react'
import styled from 'styled-components'

// Components
import Video from './video'
import Image from './image'
import Animation from './animation'


// ============================================================================================================ Logic

const MainMedia = ({ className, main_media }) => {
    switch (main_media.__typename) {
        case "Strapi_ComponentProjectsImage":
            return <Image className={className} image={main_media} />

        case "Strapi_ComponentProjectsVideo":
            return <Video className={className} video={main_media} />

        case "Strapi_ComponentProjectsAnimation":
            return <Animation className={className} animation={main_media} />
        default:
            return null
    }
}


// ============================================================================================================ Styles

const $MainMedia = styled(MainMedia)`
    z-index: 2;
    margin: 0;
    margin-top: calc(var(--l-brh) + var(--l-rh) + var(--l-rh0_25) + var(--l-rh0_125));

    display: grid;
    grid-template-columns: repeat(var(--l-c), minmax(0, 1fr));
    grid-gap: var(--l-gw);
    grid-column: 1 / span 12;
    margin-top: calc(var(--l-brh) + var(--l-rh) + var(--l-rh0_5));

    .gatsby-image-wrapper {
        grid-column: 1 / span 12;
        position: relative;
        right: var(--l-m);
        width: calc((var(--l-m) * 2) + 100%);
    }

    figcaption {
        grid-column: 2 / span 10;
        margin-top: var(--l-rh0_125);
    }
`

export default $MainMedia