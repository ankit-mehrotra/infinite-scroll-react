import { useEffect, useState } from "react";


export const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState("");
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => res.text())
            .then(res => {
                setLoading(false);
                setResponse(res)
            }).catch(err => {
                setLoading(false);
            })
    }, [url]);

    return [loading, response]
}