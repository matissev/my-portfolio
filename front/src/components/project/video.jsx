// Libraries
import React, { useContext } from "react"
import styled from 'styled-components'
// import 'plyr-react/dist/plyr.css'

// Context
import i18nContext from "#context/i18n-context"

// Lazy
// const Plyr = React.lazy(() =>
//   import("plyr-react")
// )


// ============================================================================================================ Logic

function Video({ className, video, size }) {
    const isSSR = typeof window === "undefined"
    const i18n = useContext(i18nContext)

    // let videoUrl = video.url + "?portrait=0&byline=0&title=0";
    let videoUrl = "https://player.vimeo.com/video/" + video.url + "?portrait=0&byline=0&title=0&color=AAAAAA";
    
    if(i18n.locale === "en") {
        videoUrl += "&texttrack=en";
    }

    return (
        <figure className={className} size={size}>
            <div className="embed-container">
                <iframe title="vimeo-player" src={videoUrl} frameborder="0" allowfullscreen></iframe>
            </div>



            {/* {!isSSR && (
                <React.Suspense fallback={<div />}>
                    <Plyr  source={{
                        type: "video",
                        sources: [
                            {
                                provider: "youtube",
                                src: video.url
                            }
                        ],
                        tracks: [
                            {
                                kind:"captions",
                                label:"English",
                                srclang:"en",
                                src: process.env.GATSBY_PUBLIC_API_URL + video.subtitles.url
                            }
                        ]
                    }}/>
                </React.Suspense>
            )} */}
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

    .embed-container {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        max-width: 100%;
        height: auto;
    }

    .embed-container iframe, .embed-container object, .embed-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

export default $Video
