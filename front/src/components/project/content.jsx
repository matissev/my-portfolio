// Libraries
import React from 'react'
import styled, { css } from 'styled-components'

// Components
import Video from './video'
import Image from './image'
import Animation from './animation'
import Text from './text'
import Gallery from './gallery'


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
                    case "Strapi_ComponentProjectsAnimationContent":
                        return <Animation className={className} key={component.id} animation={component.animation} />
                    case "Strapi_ComponentProjectsTextContent":
                        return <Text className={className} key={component.id} text={component}/>
                    case "Strapi_ComponentProjectsGalleryContent":
                        return <Gallery className={className} key={component.id} images={component.images}/>
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

    ${({ component }) => {
        const size = component.image_size || component.video_size || component.animation_size
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
            const size = component.image_size || component.video_size || component.animation_size
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
                    return css`
                        grid-column: 2 / span 6;
                    `
            }
        }}
    }

    @media (max-width: 1100px) {
        ${({ component }) => {
            const size = component.image_size || component.video_size || component.animation_size
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
                    return css`
                        grid-column: 2 / span 7;
                    `
            }
        }}
    }

    @media (max-width: 900px) {
        ${({ component }) => {
            const size = component.image_size || component.video_size || component.animation_size
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
                    return css`
                        grid-column: 2 / span 8;
                    `
            }
        }}
    }

    @media (max-width: 700px) {
        ${({ component }) => {
            const size = component.image_size || component.video_size || component.animation_size
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
                    return css`
                        grid-column: 2 / span 8;
                    `
            }
        }}
    }

    @media (max-width: 600px) {
        ${({ component }) => {
            const size = component.image_size || component.video_size || component.animation_size
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
                    return css`
                        grid-column: 1 / span 12;
                    `
            }
        }}
    }
`

export default Content