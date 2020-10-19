import React from 'react'
import styled from 'styled-components'

const StyledSocial = styled.div`
    display: grid;
    grid-template-columns: repeat(10, minmax(0, 1fr));
    grid-gap: var(--l-gw);
    margin: 0;
    font-size: var(--fs-l);
    grid-column: 2 / span 10;
    line-height: var(--l-rh2);

    p {
        grid-column: span 2;
        margin-top: var(--l-rh4);
        margin-bottom: calc(var(--l-rh4) + var(--l-rh0_5) - var(--l-rh0_125));

        &:first-of-type {
        }
        
        a {
            font-weight: 500;
            text-decoration: underline;

            &:before, &:after {
                content:' ';
                display: block;
                height: 0;
            }
        }
    }
`

function Social({ social, children }) {
    return (
        <StyledSocial>
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
        </StyledSocial>
    )
}

export default Social
