import React from 'react'
import Video from './video'
import Image from './image'
import Animation from './animation'
import Text from './text'

const Content = ({ components }) => {
    return components.map((c) => {
        switch (c.__typename) {
            case "Strapi_ComponentProjectsImageContent":
                return <Image size={c.image_size} key={c.id} image={c.image} />
            case "Strapi_ComponentProjectsVideoContent":
                return <Video size={c.video_size} key={c.id} video={c.video} />
            case "Strapi_ComponentProjectsAnimationContent":
                return <Animation size={c.animation_size} key={c.id} animation={c.animation} />
            case "Strapi_ComponentProjectsTextContent":
                return <Text key={c.id} text={c}/>
            default:
                return null;
        }
    })
}

export default Content