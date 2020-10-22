// Libraries
import React from 'react'
import styled from 'styled-components'


// ============================================================================================================ Logic

const Grid = ({ className }) => {
    const numCols = 12;
    const numBigRows = 55;
    const numRows = numBigRows * 8;

    const cols = []
    const rows = []
    const bigRows = []

    for(let i = 0; i < numCols; i++) {
        cols.push(<Col key={i}></Col>)
    }

    for(let j = 0; j < numRows + 1; j++) {
        rows.push(<Row key={j}></Row>)
    }

    for(let k = 0; k < numBigRows; k++) {
        bigRows.push(<BigRow key={k}></BigRow>)
    }

    return (
        <div className={className}>
            <Cols>
                {cols}
            </Cols>
            <Rows>
                {rows}
            </Rows>
            <BigRows>
                {bigRows}
            </BigRows>
        </div>
    )
}


// ============================================================================================================ Styles

const $Grid = styled(Grid)`
    pointer-events: none;
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
`

const Cols = styled.div`
    display: grid;
    position: fixed;
    top: 0;
    bottom: 0;
    grid-template-columns: repeat(var(--l-c), minmax(0, 1fr));
    right: var(--l-m);
    left: var(--l-m);
    grid-gap: var(--l-gw);
`

const Col = styled.div`
    grid-column: span 1;
    height: 100vh;
    background: rgba(255,0,0,0.2);
`

const Rows = styled.div`
    position: absolute;
    width: 100%;
`

const Row = styled.div`
    height: var(--l-rh);
    box-sizing: border-box;
    border-bottom: 1px solid red;
`

const BigRows = styled.div`
    position: absolute;
    width: 100%;
`

const BigRow = styled.div`
    box-sizing: border-box;
    height: var(--l-brh);
    background: rgba(255,0,0,0.2);
    margin-top: var(--l-rh);
`

export default $Grid
