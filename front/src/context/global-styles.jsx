import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root {
        // ------------ Settings
        // ---------------------

        // Layout
        --layout-margin: 2rem;
        --layout-columns: 12;
        --layout-gutter-width: 1rem;
        --layout-row-height: 1rem; //0.9rem
        --layout-n-of-rows-in-bigrow: 7;

        // Colors
        --color-primary-text: black; // white
        --color-secondary-text: #7F7F7F; //575656
        --color-background: white; //F4AB7A
        --color-section-primary-text: white;
        --color-section-secondary-text: #575656;
        --color-section-background: #909091; //lightblue

        --c-audio-btn-start: var(--color-primary-text);

        // Fonts
        --font-family-body: "Basier Circle", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        --fs-xxs: 0.5rem;
        --fs-xs: 0.8rem;
        --fs-s: 0.9rem;
        --fs-m: 1rem;
        --fs-l: 1.25rem;
        --fs-xl: 1.7rem;
    }

    .openInfos {
        // --------- Infos Theme
        // ---------------------

        // Colors
        --color-primary-text: white;
        --color-secondary-text: #7F7F7F;
        --color-background: #262626;
        --c-audio-btn-start: white;
    }

    :root, .openInfos, .openProject {
        // ----- Alias & Helpers
        // ---------------------

        // Layout
        --l-c: var(--layout-columns);
        --l-m: var(--layout-margin);
        --l-gw: var(--layout-gutter-width);
        --l-rh0_125: calc(var(--layout-row-height)*0.125);
        --l-rh0_25: calc(var(--layout-row-height)*0.25);
        --l-rh0_5: calc(var(--layout-row-height)*0.5);
        --l-rh: var(--layout-row-height);
        --l-rh1_5: calc(var(--layout-row-height)*1.5);
        --l-rh2: calc(var(--layout-row-height)*2);
        --l-rh3: calc(var(--layout-row-height)*3);
        --l-rh4: calc(var(--layout-row-height)*4);
        --l-rh5: calc(var(--layout-row-height)*5);
        --l-rh6: calc(var(--layout-row-height)*6);
        --layout-bigrow-height: calc(var(--l-rh) * var(--layout-n-of-rows-in-bigrow));
        --l-brh: var(--layout-bigrow-height);
        --l-brh2: calc(var(--layout-bigrow-height)*2);
        --l-brh3: calc(var(--layout-bigrow-height)*3);
        --l-brh4: calc(var(--layout-bigrow-height)*4);

        // Colors
        --c-txt1: var(--color-primary-text);
        --c-txt2: var(--color-secondary-text);
        --c-bg: var(--color-background);
        --c-stxt1: var(--color-section-primary-text);
        --c-stxt2: var(--color-section-secondary-text);
        --c-sbg: var(--color-section-background);

        --c-audio-btn-start: var(--color-primary-text);

        // Fonts
        --ff-body: var(--font-family-body);
    }

    body {
        min-width: 250px;
        font-family: var(--ff-body);
        margin: 0 var(--l-m);
        display: grid;
        padding-top: calc(var(--l-brh) + var(--l-rh2));
        background: var(--c-bg);
        color: var(--c-txt1);
        line-height: var(--l-rh);
        font-size: var(--fs-m);
        transition: background 0.3s ease-out, color 0.5s ease-out;

        @media (max-width: 450px) {
            padding-top: calc(var(--l-brh));
            --layout-margin: var(--l-rh0_5);
            --l-m: var(--layout-margin);
        }
    }

    a {
        text-decoration: none;
        color: var(--c-txt1)
    }

    @keyframes scaleFromLeft {
        from {
            transform: scale3d(1,0,1);
        }
        to {
            transform: scale3d(1,1,1);
        }
    }

    @keyframes slidein {
        from {
            opacity: 0;
            transform: translate3d(0,200px,0);
        }
        to {
            opacity: 1;
            transform: translate3d(0,0,0);
        }
    }

    @keyframes popin {
        from {
            opacity: 0;
            transform: translate3d(0,-40px,0);
        }
        to {
            opacity: 1;
            transform: translate3d(0,0,0);
        }
    }

    @keyframes blink {
        0% { opacity: 1 }
        15% { opacity: 0 }
        30% { opacity: 1 }
        45% { opacity: 0 }
        60% { opacity: 1 }
        75% { opacity: 0 }
        100% { opacity: 1 }
    }
`

export default GlobalStyle