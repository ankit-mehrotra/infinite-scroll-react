
import { useState, useRef, useLayoutEffect } from "react";

export const useMeasure = (ref, deps) => {
    const [rect, setRect] = useState({});
    const myRef = useRef();

    useLayoutEffect(() => {
        setRect(myRef.current.getBoundingClientRect())
    }, [deps, myRef]);
    return [rect, myRef];
}