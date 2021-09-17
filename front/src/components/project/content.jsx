// Libraries
import React from 'react'
import styled, { css } from 'styled-components'

// Components
import Video from './video'
import Audio from './audio'
import Image from './image'
import Animation from './animation'
import Lottie from './lottie'
import Text from './text'
import Gallery from './gallery'
import LottieGallery from './lottiegallery'
import Reel from './reel'
import Link from './link'


// ============================================================================================================ Logic

const Content = ({ components, className }) => {
    return components.map((component) => (
        <$ContentComponent component={component} className={className}/>
    ))
}

const ContentComponent = ({ component, className }) => {
    return (
        <>
            {(() => {
                switch (component.__typename) {
                    case "Strapi_ComponentProjectsImageContent":
                        return <Image className={className} key={component.id} image={component.image} />
                    case "Strapi_ComponentProjectsVideoContent":
                        return <Video className={className} key={component.id} video={component.video} />
                    case "Strapi_ComponentProjectsAudioContent":
                        return <Audio className={className} key={component.id} audio={component.audio} />
                    case "Strapi_ComponentProjectsAnimationContent":
                        return <Animation className={className} key={component.id} animation={component.animation} />
                    case "Strapi_ComponentProjectsLottieContent":
                        return <Lottie className={className} key={component.id} lottie={component.lottie} />
                    case "Strapi_ComponentProjectsTextContent":
                        return <Text className={className} key={component.id} text={component}/>
                    case "Strapi_ComponentProjectsGalleryContent":
                        return <Gallery className={className} key={component.id} images={component.images}/>
                    case "Strapi_ComponentProjectsLottiegalleryContent":
                        return <LottieGallery className={className} key={component.id} lotties={component.lotties}/>
                    case "Strapi_ComponentProjectsReelContent":
                        return <Reel className={className} key={component.id} videos={component.videos}/>
                    case "Strapi_ComponentProjectsLinkContent":
                        return <Link className={className} key={component.id} link={component.link}/>
                    default:
                        return null;
                }
            })()}
        </>
    )
}


// ============================================================================================================ Styles

const $ContentComponent = styled(ContentComponent)`
    margin: 0;
    margin-top: calc(var(--l-brh) + var(--l-rh) + var(--l-rh0_25) + var(--l-rh0_125));

    figcaption {
        font-style: italic;
        display: inline-block;
    }

    ${({ component }) => {
        const size = component.image_size || component.video_size || component.animation_size || component.lottie_size
        switch (size) {
            case "XL":
                return css`
                    grid-column: 2 / span 10;
                `
            case "L":
                return css`
                    grid-column: 3 / span 8;
                `
            case "M":
                return css`
                    grid-column: 4 / span 6;
                `
            case "S":
                return css`
                    grid-column: 5 / span 4;
                `
            case "XS":
                return css`
                    grid-column: 6 / span 2;
                `
            default:
                break;
        }
    }}

    @media (max-width: 1400px) {
        ${({ component }) => {
            const size = component.image_size || component.video_size || component.animation_size || component.lottie_size
            switch (size) {
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
                case "XS":
                    return css`
                        grid-column: 2 / span 3;
                    `
                default:
                    break;
            }
        }}
    }

    @media (max-width: 1100px) {
        ${({ component }) => {
            const size = component.image_size || component.video_size || component.animation_size || component.lottie_size
            switch (size) {
                case "XL":
                    return css`
                        grid-column: 2 / span 10;
                    `
                case "L":
                    return css`
                        grid-column: 2 / span 9;
                    `
                case "M":
                    return css`
                        grid-column: 2 / span 7;
                    `
                case "S":
                    return css`
                        grid-column: 2 / span 5;
                    `
                case "XS":
                    return css`
                        grid-column: 2 / span 4;
                    `
                default:
                    break;
            }
        }}
    }

    @media (max-width: 900px) {
        ${({ component }) => {
            const size = component.image_size || component.video_size || component.animation_size || component.lottie_size
            switch (size) {
                case "XL":
                    return css`
                        grid-column: 2 / span 10;
                    `
                case "L":
                    return css`
                        grid-column: 2 / span 10;
                    `
                case "M":
                    return css`
                        grid-column: 2 / span 8;
                    `
                case "S":
                    return css`
                        grid-column: 2 / span 6;
                    `
                case "XS":
                    return css`
                        grid-column: 2 / span 5;
                    `
                default:
                    break;
            }
        }}
    }

    @media (max-width: 700px) {
        ${({ component }) => {
            const size = component.image_size || component.video_size || component.animation_size || component.lottie_size
            switch (size) {
                case "XL":
                    return css`
                        grid-column: 2 / span 10;
                    `
                case "L":
                    return css`
                        grid-column: 2 / span 10;
                    `
                case "M":
                    return css`
                        grid-column: 2 / span 9;
                    `
                case "S":
                    return css`
                        grid-column: 2 / span 8;
                    `
                case "XS":
                    return css`
                        grid-column: 2 / span 7;
                    `
                default:
                    break;
            }
        }}
    }

    @media (max-width: 600px) {
        ${({ component }) => {
            const size = component.image_size || component.video_size || component.animation_size || component.lottie_size
            switch (size) {
                case "XL":
                    return css`
                        grid-column: 1 / span 12;
                    `
                case "L":
                    return css`
                        grid-column: 1 / span 12;
                    `
                case "M":
                    return css`
                        grid-column: 1 / span 12;
                    `
                case "S":
                    return css`
                        grid-column: 1 / span 12;
                    `
                case "XS":
                    return css`
                        grid-column: 2 / span 10;
                    `
                default:
                    break;
            }
        }}
    }
`

export default Content