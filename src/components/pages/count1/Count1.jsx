import { useCount } from "../../../hooks/useCount"


export const Count1 = () => {
    const {count, increment, decrement, reset} = useCount(30);
    return (
        <div>
            <div>Count1</div>
            <h3>{count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={reset}>Reiniciar</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
