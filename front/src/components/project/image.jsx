// Libraries
import React from 'react'
import Img from "gatsby-image"
import styled from 'styled-components'


// ============================================================================================================ Logic

function Image({ className, image, size }) {
    return (
        <figure className={className} size={size}>
            <Img fluid={image.file.imageFile.childImageSharp.fluid} alt={image.alt}/>
            {image.caption &&
                <figcaption>{image.caption}</figcaption>
            }
        </figure>
    )
}

// ============================================================================================================ Styles

const $Image = styled(Image)`
    z-index: 2;
    animation: slidein 1.5s cubic-bezier(0.16, 1, 0.3, 1);

    img {
        filter: grayscale();
        width: 100%;
    }

    figcaption {
        margin-top: calc(var(--l-rh) + var(--l-rh0_125));
    }
`

export default $Image
