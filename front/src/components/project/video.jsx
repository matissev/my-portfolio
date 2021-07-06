// Libraries
import React from 'react'
import styled from 'styled-components'
import 'plyr-react/dist/plyr.css'

// Lazy
const Plyr = React.lazy(() =>
  import("plyr-react")
)


// ============================================================================================================ Logic

function Video({ className, video, size }) {
    const isSSR = typeof window === "undefined"

    return (
        <figure className={className} size={size}>
            {!isSSR && (
                <React.Suspense fallback={<div />}>
                    <Plyr source={{ type: "video", sources: [{provider: "vimeo", src: video.url}]}}/>
                </React.Suspense>
            )}
            {video.caption &&
                <figcaption>{video.caption}</figcaption>
            }
        </figure>
    )
}


// ============================================================================================================ Styles

const $Video = styled(Video)`
    z-index: 2;
    animation: slidein 1.5s cubic-bezier(0.16, 1, 0.3, 1);

    figcaption {
        margin-top: calc(var(--l-rh) + var(--l-rh0_125));
    }
`

export default $Video
