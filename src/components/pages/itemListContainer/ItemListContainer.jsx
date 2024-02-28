import { useState, useEffect } from "react"
import { products } from "../../../productsMock"
import ItemList from "./ItemList"

const ItemListContainer = () => {
  const [ items , setItems ] = useState( [] );

  useEffect( () => {
    const tarea = new Promise ((resolve, reject) => {
      resolve(products);
      reject("Error");
    })

    tarea
      .then((resp) => {
        setItems(resp);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
  return (
    <>
      {
        <ItemList items={items}/>
      }
    </>
  )
}

export default ItemListContainer