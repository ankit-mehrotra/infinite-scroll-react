import React from 'react'
import { useCount } from './useCount'

const Square = React.memo(({ onClick, n }) => {
    useCount()
    return (
        <>
            <button onClick={() => onClick(n)}>{n}</button>

        </>
    )
})

export default Square