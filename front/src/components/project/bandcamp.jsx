// Libraries
import React from 'react'
import styled from 'styled-components'

// Lazy
// const Plyr = React.lazy(() =>
//   import("plyr-react")
// )


// ============================================================================================================ Logic

function Bandcamp({ className, bandcamp }) {
    const isSSR = typeof window === "undefined"

    let background_color = bandcamp.theme === "bright" ? "FFFFFF" : "000000"

    let bandcampUrl = "https://bandcamp.com/EmbeddedPlayer/" + bandcamp.type + "=" + bandcamp.bandcamp_id + "/size=large/bgcol=" + background_color + "/linkcol=" + bandcamp.links_color.slice(1) + "/artwork=small/transparent=true/"
    return (
        <div className={className}>
            <iframe src={bandcampUrl} seamless><a href={bandcamp.url}>{bandcamp.alt}</a></iframe>
        </div>
    )
}


// ============================================================================================================ Styles

const $Bandcamp = styled(Bandcamp)`
    z-index: 2;
    animation: slidein 1.5s cubic-bezier(0.16, 1, 0.3, 1);
    grid-column: 2 / span 5;
    max-width: none;

    position: relative;
    padding-bottom: 60%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    height: auto;

    iframe, object, embed {
        border: none!important;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1450px) {
        grid-column: 2 / span 6;
    }

    @media (max-width: 1270px) {
        grid-column: 2 / span 7;
    }

    @media (max-width: 900px) {
        grid-column: 2 / span 10;
    }

    @media (max-width: 600px) {
        grid-column: 1 / span 12;
    }
`

export default $Bandcamp