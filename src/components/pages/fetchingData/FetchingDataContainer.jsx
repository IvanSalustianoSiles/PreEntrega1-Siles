import { useEffect, useState } from "react"
import { FetchingData } from "./FetchingData"

export const FetchingDataContainer = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        let getUsers = fetch("https://jsonplaceholder.typicode.com/users");
        getUsers
        .then((resp) => resp.json())
        .then((data) => {
            setUsers(data);
        })
        .catch((error) => {
            console.log(error);  
        })
    }, [])
    const addUser = () => {
        console.log({CreaciónDeUsuario: "Checked"});
        let user = {
            id: 27,
            name: "Manuel",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
              street: "Kulas Light",
              suite: "Apt. 556",
              city: "Gwenborough",
              zipcode: "92998-3874",
              geo: {
                lat: "-37.3159",
                lng: "81.1496"
              }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
               name: "Romaguera-Crona",
               catchPhrase: "Multi-layered client-server neural-net",
               bs: "harness real-time e-markets"
            }
        }
        let tarea = fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify(user),
            headers: { 
                Authorization: "Bearer pepito3234"
            }
        })
        tarea.then( res => console.log(res)).catch( error => console.log(error))
    }
    const updateUser = () => {
        console.log({ActualizacionDeUsuario: "Checked"});
        let user = {
            name: "JORGE"
        }
        let tarea = fetch("https://jsonplaceholder.typicode.com/users/3", {
            method: "PATCH",
            body: JSON.stringify(user),
            headers: { 
                Authorization: "Bearer pepito3234"
            }
        })
        tarea.then((res) => console.log(res)).catch((error) => console.log(error))
    }
    return (
        <div>
            <FetchingData addUser={addUser} updateUser={updateUser}/>
        </div>
    )
}
