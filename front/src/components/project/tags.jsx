import React from "react"
import styled from "styled-components"

const Tag = ({ label, entry }) => {
    const entries = Array.isArray(entry) ? entry : [entry]
    return (
        <>
            <dt>{label}</dt>
            {entries.map(value => {
                return <dd>{value}</dd>
            })}
        </>
    )
}

const Tags = ({ tags }) => {
    return (
        <>
            {tags &&
                <dl>
                    <Tag label="Type" entry={tags.type}/>
                    <Tag label="Lieu" entry={tags.location}/>
                    <Tag label="Date" entry={tags.date}/>
                    <Tag label="Commanditaire" entry={tags.backer}/>
                    <Tag label="Press" entry={
                        tags.press.map(link => {
                            return <a href={link.url} target="_blank">{link.media_name}</a>    
                        })
                    }/>
                    {tags.other.map(item => {
                        return (
                            <Tag label={item.label} entry={item.entry}/>
                        )

                    })}
                </dl>
            }
        </>
    )
}

export default Tags