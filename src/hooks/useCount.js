import { useState } from "react";

export const useCount = (initial = 0) => {
    const [count, setCount] = useState(initial);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        count > 0 ? setCount(count - 1) : setCount(count);
    }
    const reset = () => {
        setCount(initial);
    }
    return ({
        count,
        increment,
        decrement,
        reset
    });
}