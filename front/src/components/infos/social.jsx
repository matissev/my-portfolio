// Libraries
import React from 'react'
import styled from 'styled-components'


// ============================================================================================================ Logic

function Social({ className, social, children }) {
    return (
        <div className={className}>
            {
                social.map((link) => {
                    return (
                        <p key={link.media_name}>
                            {link.intro.length > 0 &&
                                link.intro + ` `
                            }
                            <a href={link.url} target="_blank" rel="noreferrer">
                                {link.media_name}
                            </a>
                            {link.outro != null &&
                                ` ` + link.outro
                            }
                        </p>
                    )
                })
            }
            {children}
        </div>
    )
}


// ============================================================================================================ Styles

const $Social = styled(Social)`
    margin: 0;
    font-size: var(--fs-l);
    line-height: var(--l-rh2);

    p a {
        font-weight: 500;
        text-decoration: underline;
    }
`

export default $Social
