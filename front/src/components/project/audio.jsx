// Libraries
import React from 'react'
import styled from 'styled-components'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// Lazy
// const Plyr = React.lazy(() =>
//   import("plyr-react")
// )


// ============================================================================================================ Logic

function Audio({ className, audio, size }) {
    const isSSR = typeof window === "undefined"

    return (
        <figure className={className} size={size}>
            <AudioPlayer
                src={process.env.GATSBY_PUBLIC_API_URL + audio.file.url}
                header={audio.caption}
                // onPlay={e => console.log("onPlay")}
            // other props here
            />
            {/* {!isSSR && (
                <React.Suspense fallback={<div />}>
                    <Plyr source={{ type: "video", sources: [{provider: "vimeo", src: video.url}]}}/>
                </React.Suspense>
            )} */}
            {/* {audio.caption &&
                <figcaption>{audio.caption}</figcaption>
            } */}
        </figure>
    )
}


// ============================================================================================================ Styles

const $Audio = styled(Audio)`
    z-index: 2;
    animation: slidein 1.5s cubic-bezier(0.16, 1, 0.3, 1);
    grid-column: 2 / span 10;

    color: var(--c-stxt1);

    .rhap_time {
        color: var(--c-stxt1);
    }

    > div {
        background: var(--c-sbg);
    }

    path {
        fill: var(--c-stxt1);  
    }

    .rhap_progress-filled {
        
    }

    .rhap_progress-indicator, .rhap_volume-indicator, .rhap_progress-filled, .rhap_volume-bar {
        background: var(--c-stxt1);
    }

    .rhap_volume-bar, .rhap_download-progress  {
        background: var(--c-stxt2);
    }

    figcaption {
        margin-top: calc(var(--l-rh) + var(--l-rh0_125));
    }
`

// --c-txt1: var(--color-primary-text);
// --c-txt2: var(--color-secondary-text);
// --c-bg: var(--color-background);
// --c-stxt1: var(--color-section-primary-text);
// --c-stxt2: var(--color-section-secondary-text);
// --c-sbg: var(--color-section-background);

export default $Audio