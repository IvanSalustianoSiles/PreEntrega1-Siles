import ProductCard from "../../common/productCard/ProductCard"


const ItemList = ({items}) => {

  return (
    <>
      {
        items.map(({id, imageUrl, title, price, description, stock}) => {
          return (
            <ProductCard 
              key={id} 
              imageUrl={imageUrl} 
              title={title} 
              price={price} 
              description={description} 
              stock={stock}
            />
          )
        })
      }
    </>
  )
}

export default ItemList

