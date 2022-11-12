import { useState } from "react"

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    function handleChange(e) {
        setValues(val => ({
            ...val,
            [e.target.name]: e.target.value
        }))
    }
    return [values, handleChange]
}