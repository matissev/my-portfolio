// Libraries
import React from 'react'
import styled, { css } from 'styled-components'

// Components
import Video from './video'
import Image from './image'
import Animation from './animation'
import Text from './text'


// ============================================================================================================ Logic

const Content = ({ components, className }) => {
    return components.map((component) => (
        <$ContentComponent component={component} className={className}/>
    ))
}

const ContentComponent = ({ component, className }) => {
    console.log(component)
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
                    grid-column: 2 / span 2;
                `
            default:
                return css`
                    grid-column: 2 / span 6;
                `
        }
    }}
`

export default Content