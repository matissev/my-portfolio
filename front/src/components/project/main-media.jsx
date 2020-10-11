import React from 'react'
import Img from "gatsby-image"

const MainMedia = ({ main_media }) => {
    switch (main_media.__typename) {
        case "Strapi_ComponentProjectsImage":
            return(
                <figure>
                    <Img fluid={main_media.file.imageFile.childImageSharp.fluid} alt={main_media.alt}/>
                    {main_media.caption &&
                        <figcaption>{main_media.caption}</figcaption>
                    }
                </figure>
            )

        case "Strapi_ComponentProjectsVideo":
            return(
                <>
                    <p>Video</p>
                </>
            )

        case "Strapi_ComponentProjectsAnimation":
            return(
                <>
                    <p>Animation</p>
                </>
            )
    }
}

export default MainMedia