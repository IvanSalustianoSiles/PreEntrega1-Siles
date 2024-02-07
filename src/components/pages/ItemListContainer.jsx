import ProductCard from "../common/ProductCard"
const ItemListContainer = ({greeting}) => {
  return (
    <>
      <div>{greeting}</div>
      <div>
        <ProductCard title={"Polinomios"} price={"$"+1499} info={"Info de polinomios"}/>
        <ProductCard title={"Transformaciones lineales"} price={"$"+1999} info={"Info de trans"} />
        <ProductCard title={"Trigonometría"} price={"$"+2999} info={"Info de trigo"}/>
      </div>
    </>
  )
}

export default ItemListContainer