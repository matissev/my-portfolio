import React from 'react'
import Img from "gatsby-image"
import styled, { css } from 'styled-components'

const ImageFigure = styled.figure`
    margin: 0;
    margin-top: calc(var(--l-brh) + var(--l-rh) + var(--l-rh0_25) + var(--l-rh0_125));
    z-index: 2;
    animation: slidein 1.5s cubic-bezier(0.16, 1, 0.3, 1);

    img {
        filter: grayscale();
        width: 100%;
    }

    figcaption {
        margin-top: calc(var(--l-rh) + var(--l-rh0_125));
    }

    ${props => {
        switch (props.size) {
            case "full":
                return css`
                    display: grid;
                    grid-template-columns: repeat(var(--l-c), minmax(0, 1fr));
                    grid-gap: var(--l-gw);
                    /* position: relative; */
                    /* top: calc(-1 * (var(--l-brh) + var(--l-rh2))); */
                    grid-column: 1 / span 12;
                    /* margin-top: 65vh; */
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

function Image({ image, size }) {
    console.log(size);
    return (
        <ImageFigure size={size}>
            <Img fluid={image.file.imageFile.childImageSharp.fluid} alt={image.alt}/>
            {image.caption &&
                <figcaption>{image.caption}</figcaption>
            }
        </ImageFigure>
    )
}

export default Image
