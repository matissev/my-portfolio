// Libraries
import React, { useContext } from 'react'
import styled from 'styled-components'

// Context
import i18nContext from '#context/i18n-context'


// ============================================================================================================ Logic

function Splash404({ className }) {
    const i18n = useContext(i18nContext)
    return (
        <div className={className}>
            <h1><span>404</span><br/>{i18n.format({ id: "404.title" })}</h1>
            <p>{i18n.format({ id: "404.text" })}</p>
        </div>
    )
}


// ============================================================================================================ Styles

const $404 = styled(Splash404)`
    grid-column: 5 / span 4;
    margin-bottom: var(--l-brh);

    h1 {
        font-size: var(--fs-xxl);
        line-height: 3.5rem;

        span {
            font-size: 6rem;
            display: block;
        }
    }

    p {
        margin: 0;
        font-size: var(--fs-m);
        line-height: 2rem;
    }

    @media(max-width: 1100px) {
        grid-column: 4 / span 6;
    }

    @media(max-width: 850px) {
        margin-top: var(--l-rh2);
        grid-column: 3 / span 8;
    }

    @media(max-width: 600px) {
        grid-column: 1 / span 12;
    }
`

export default $404