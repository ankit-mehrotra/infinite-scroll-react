import React from 'react'
import { useCount } from './useCount'

const NewHello = React.memo(({ increment }) => {
    useCount();

    return (
        <button onClick={() => increment(5)}>increment</button>
    )
})

export default NewHello