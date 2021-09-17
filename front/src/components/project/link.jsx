// Libraries
import React from 'react'
import styled from 'styled-components'


// ============================================================================================================ Logic

function Link({ className, link }) {
    return (
        <div className={className}>
            <a href={link.url} target="_blank" rel="noreferrer">{link.text}
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 40.19 40.18' xmlSpace='preserve'>
                    <path d='M39.78,0.41c-0.18-0.17-0.4-0.28-0.62-0.34c-0.12-0.04-0.24-0.06-0.37-0.06c-0.01,0-0.01,0-0.02,0c0,0,0,0-0.01,0 C37.3,0,26.32,0,25.79,0c-0.75,0-1.46,0.66-1.43,1.43s0.62,1.43,1.43,1.43c1.46,0,7.8,0,9.52,0c-1.61,1.61-18.19,18.15-19.04,19.04 c-0.01,0.01-0.02,0.02-0.04,0.04c-0.53,0.53-0.57,1.5,0,2.02c0.58,0.52,1.46,0.57,2.03,0c0.72-0.72,19.01-19.01,19.08-19.08 c0,0.31,0,8.98,0,9.52c0,0.75,0.66,1.46,1.43,1.43c0.78-0.03,1.43-0.63,1.43-1.43c0-1.46,0-12.43,0-12.97c0,0,0,0,0,0 C40.19,1.06,40.06,0.68,39.78,0.41z'/>
                    <path d='M38.75,20.6c-0.77,0.04-1.43,0.63-1.43,1.44c0,1.56,0.03,13.06-0.02,13.62c-0.03,0.17-0.08,0.34-0.14,0.5 c-0.06,0.12-0.11,0.24-0.19,0.36c-0.01,0.01-0.02,0.03-0.03,0.04c-0.06,0.07-0.12,0.14-0.18,0.2c-0.06,0.06-0.13,0.12-0.19,0.18 c-0.01,0-0.02,0.01-0.02,0.01c-0.12,0.08-0.26,0.14-0.39,0.21c-0.17,0.06-0.33,0.11-0.51,0.14c-0.31,0.02-0.63,0.02-0.95,0.02 c-0.74,0-28.72,0.01-29.93,0c-0.08,0-0.16-0.01-0.23-0.02c-0.18-0.03-0.35-0.08-0.52-0.14c-0.12-0.06-0.24-0.11-0.36-0.19 c-0.01-0.01-0.03-0.02-0.04-0.03c-0.07-0.06-0.14-0.12-0.2-0.18c-0.06-0.06-0.12-0.13-0.18-0.19c0-0.01-0.01-0.02-0.01-0.02 c-0.08-0.12-0.14-0.26-0.21-0.39c-0.06-0.17-0.11-0.33-0.14-0.51c-0.02-0.31-0.02-0.63-0.02-0.95c0-0.74-0.01-28.72,0-29.93 c0-0.08,0.01-0.16,0.02-0.23c0.03-0.18,0.08-0.35,0.14-0.52C3.09,3.9,3.14,3.77,3.22,3.66c0.01-0.01,0.02-0.03,0.03-0.04 c0.06-0.07,0.12-0.14,0.18-0.2C3.49,3.36,3.56,3.3,3.62,3.24c0.01,0,0.02-0.01,0.02-0.01C3.76,3.14,3.9,3.08,4.03,3.02 c0.16-0.06,0.33-0.1,0.5-0.14c0.46-0.04,0.94-0.02,1.4-0.02c1.06,0,11.66,0,12.22,0c0.75,0,1.46-0.66,1.43-1.43 C19.55,0.65,18.96,0,18.16,0C16.88,0,4.97,0,4.8,0C4.06,0,3.36,0.17,2.69,0.48c-1.64,0.75-2.67,2.5-2.68,4.27 c0,0.21-0.04,30.66,0.08,31.52c0.14,0.95,0.66,1.89,1.35,2.56c0.82,0.79,1.83,1.21,2.95,1.33c0.27,0.03,0.54,0.02,0.81,0.02h28.12 c0.71,0,1.41,0,2.11,0c0.85,0,1.7-0.23,2.43-0.67c0.94-0.57,1.61-1.42,2.02-2.44c0.29-0.72,0.3-1.47,0.3-2.23 c0-1.89,0-12.46,0-12.81C40.19,21.28,39.53,20.57,38.75,20.6z M3.57,3.27C3.54,3.3,3.51,3.32,3.51,3.32 C3.51,3.31,3.54,3.29,3.57,3.27z M3.28,36.62c0.03,0.03,0.05,0.06,0.05,0.06C3.32,36.68,3.3,36.65,3.28,36.62z M36.62,36.91 c0.03-0.03,0.06-0.05,0.06-0.05C36.68,36.87,36.66,36.89,36.62,36.91z'/>
                </svg>
            </a>
        </div>
    )
}

// ============================================================================================================ Styles

const $Link = styled(Link)`
    z-index: 2;
    animation: slidein 1.5s cubic-bezier(0.16, 1, 0.3, 1);
    grid-column: 2 / span 10;

    a {
        font-size: var(--fs-xxl);
        border-bottom: 1px solid var(--c-txt1);

        svg{
            width: 2.5rem;
            margin-left: 1rem;
            fill: var(--c-txt1);
        }
    }
`

export default $Link
