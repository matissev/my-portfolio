// Libraries
import React, { useEffect, useState }  from "react"
import styled, { css } from 'styled-components'


// ============================================================================================================ Logic

function Products({ className }) {
    const [experimentals, setExperimentals] = useState([]);

    useEffect(() => {
      const script = document.createElement("script")
      script.src = "https://gumroad.com/js/gumroad-embed.js"
      script.async = true
      document.body.appendChild(script)
  
      fetch("http://localhost:8002/experimentals")
      .then((response) => response.json())
      .then((data) => {
         console.log(data)
         setExperimentals(data.products)
      })
      .catch((err) => {
         console.log(err.message);
      });
    }, [])


    return (
        <div className={className}>
            {experimentals.map((experimental, i) => {
                return (
                    <div className="product">
                        <div className="gumroad-product-embed" key={experimental.id}>
                            <a href={experimental.short_url}>{experimental.name}</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

// ============================================================================================================ Styles

const $Products = styled(Products)`
    display: grid;
    grid-column-gap: var(--l-gw);
    grid-column: 1 / span 12;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    position: relative;

    .product {
        position: relative !important;
        /* border: 1px solid black!important; */
        background: #eeeeee;

        &:after {
            content:"";
            position absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            height: 20px;
            background: white;
            z-index: 2;
        }
    }
`

export default $Products