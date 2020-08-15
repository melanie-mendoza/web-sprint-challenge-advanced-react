// write your custom hook here to control your checkout form
import { useState } from 'react';

export function useForm(initialValue) {
    // define state
    const [value, setValue] = useState(initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    // define setter function
    const handleChanges = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        console.log(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    return [value, handleChanges, handleSubmit, showSuccessMessage]
};