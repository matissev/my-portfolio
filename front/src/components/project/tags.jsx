// Libraries
import React, { useContext } from "react"
import styled from "styled-components"

// Contexts
import i18nContext from "#context/i18n-context"


// ============================================================================================================ Logic

const Tag = ({ label, entry }) => {
    const entries = Array.isArray(entry) ? entry : [entry]
    return (
        <>
            {entries &&
                <>
                    <dt>{label}</dt>
                    {entries.map((value, index) =>
                        <dd key={index}>{value}</dd>
                    )}
                </>
            }
        </>
    )
}

const Tags = ({ className, tags }) => {
    const i18n = useContext(i18nContext)

    return (
        <>
            {tags &&
                <dl className={className}>
                    <Tag label={i18n.format({ id: "project.tags.type" })} entry={tags.type} />
                    <Tag label={i18n.format({ id: "project.tags.location" })} entry={tags.location} />
                    <Tag label={i18n.format({ id: "project.tags.date" })} entry={tags.date} />
                    <Tag label={i18n.format({ id: "project.tags.backer" })} entry={tags.backer} />
                    <Tag label={i18n.format({ id: "project.tags.press" })} entry={
                        tags.press.map(link =>
                            <a href={link.url} target="_blank" rel="noreferrer">{link.media_name}</a>
                        )
                    } />
                    {tags.other.map(item =>
                        <Tag key={item.label} label={item.label} entry={item.entry} />
                    )}
                </dl>
            }
        </>
    )
}

// ============================================================================================================ Styles

const $Tags = styled(Tags)`
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-gap: var(--l-gw);
    grid-column: 1 / span 12;
    margin: 0;
    margin-top: calc(var(--l-brh));
    margin-bottom: calc(var(--l-brh) + var(--l-rh0_5) - var(--l-rh0_125));
    line-height: var(--l-rh2);

    dt {
        grid-column: 1 / span 3;
        text-align: right;
        color: var(--c-stxt2);
        font-weight: 600;
    }

    dd {
        margin: 0;
        text-align: left;
        grid-column: 4 / span 9;
    }

    a {
        color: var(--c-stxt1);
        text-decoration: underline;
    }
`

export default $Tags