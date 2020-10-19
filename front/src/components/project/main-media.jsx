import React from 'react'

import Video from './video'
import Image from './image'
import Animation from './animation'

const MainMedia = ({ main_media }) => {
    switch (main_media.__typename) {
        case "Strapi_ComponentProjectsImage":
            return <Image size="full" image={main_media} />

        case "Strapi_ComponentProjectsVideo":
            return <Video size="full" video={main_media} />

        case "Strapi_ComponentProjectsAnimation":
            return <Animation size="full" animation={main_media} />
        default:
            return null
    }
}

export default MainMedia