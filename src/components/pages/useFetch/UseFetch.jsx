
import { useCount, useFetch } from "../../../hooks/";
import { useEffect } from "react";

export const UseFetch = () => {
    const {count, increment, decrement} = useCount(1);
    const {data, isLoading} = useFetch(`https://rickandmortyapi.com/api/character/?page=${count}`);
    console.log(data);
    return data !=null && (
    <>
        <h3>Personajes</h3>
        <div>
            {isLoading ? <h4>Cargando...</h4> : data.results.map(({id, name, gender, image})=> (
                <div key={id}>
                    <p>Nombre: {name}</p>
                    <p>Género: {gender} </p>
                    <img src={image} alt={name} />
                </div>
            ))}
        </div>
        <div>
            {count > 1 && <button onClick={decrement}>Anterior</button>}
            <span>Página {count}</span>
            <button onClick={increment}>Siguiente</button>
        </div>
    </>)
}
