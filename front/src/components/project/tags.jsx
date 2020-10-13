import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-react-intl"

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

const Tags = ({ tags }) => {
    const intlFormat = useIntl().formatMessage

    return (
        <>
            {tags &&
                <dl>
                    <Tag label={intlFormat({ id: "project.tags.type" })} entry={tags.type}/>
                    <Tag label={intlFormat({ id: "project.tags.location" })} entry={tags.location}/>
                    <Tag label={intlFormat({ id: "project.tags.date" })} entry={tags.date}/>
                    <Tag label={intlFormat({ id: "project.tags.backer" })} entry={tags.backer}/>
                    <Tag label={intlFormat({ id: "project.tags.press" })} entry={
                        tags.press.map(link =>
                            <a href={link.url} target="_blank">{link.media_name}</a>    
                        )
                    }/>
                    {tags.other.map(item =>
                        <Tag key={item.label} label={item.label} entry={item.entry}/>
                    )}
                </dl>
            }
        </>
    )
}

export default Tags