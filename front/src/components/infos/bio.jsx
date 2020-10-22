// Libraries
import React, { useEffect, useRef } from "react"
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'


// ============================================================================================================ Logic

const Bio = ({ bio, className }) => {
    const parentEl = useRef();
    const childEl = useRef();

    useEffect(() => {
        function handleResize() {
            childEl.current.style.height = parentEl.current.offsetHeight + "px";
        }
        childEl.current.style.height = parentEl.current.offsetHeight + "px";
        window.setTimeout(handleResize, 200); // Ugly fix to rerender after CSS paint but works...
    }, [])

    return (
        <div className={className}>
            <Shape ref={childEl}/>
            <MarkdownWrapper ref={parentEl}>
                <ReactMarkdown source={bio} />
            </MarkdownWrapper>
        </div>
    )
}


// ============================================================================================================ Styles

const $Bio = styled(Bio)`
    grid-column: 2 / span 10;
    font-size: var(--fs-l);
`

const MarkdownWrapper = styled.div`
    p {
        margin: 0;
    }

    p:first-of-type {
        margin-top: calc(-1 * (var(--l-rh) + var(--l-rh0_5)));
        line-height: var(--l-rh4);
    }
`

const Shape = styled.div`
    width: 40%;
    float: right;
    shape-outside: polygon(100% 0, 0% 100%, 100% 100%);
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
`

export default $Bio