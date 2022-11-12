import { useEffect, useState } from 'react'
import { useFetch } from './useFetch';
import { useMeasure } from './useMeasure';
const Hello = () => {
    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count") || 1));
    const [loading, response] = useFetch(`http://numbersapi.com/${count}`);
    const [rect, divRef] = useMeasure(response);
    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count))
    }, [count]);


    return (
        <div>
            <div style={{ display: "flex" }}>
                <div ref={divRef}> {loading ? "Loading in Progress" : <h2>{response}</h2>} </div>
            </div>
            <div>Count:{count}</div>
            <pre>{JSON.stringify(rect, null, 2)}</pre>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>

        </div>
    )
}

export default Hello