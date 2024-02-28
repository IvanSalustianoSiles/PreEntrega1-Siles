import { useCount } from "../../../hooks/useCount"


export const Count2 = () => {
    const {count, increment, decrement, reset} = useCount();
    return (
        <div>
            <div>Count2</div>
            <h3>{count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={reset}>Reiniciar</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
