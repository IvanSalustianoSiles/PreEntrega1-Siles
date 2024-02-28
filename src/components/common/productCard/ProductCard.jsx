import style from "./ProductCard.module.css"
const ProductCard = ({imageUrl, title, price, description, stock}) => {
  return (
    <div className={style.productCard}>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <h3>{price}</h3>
      <h3>{description}</h3>
      <h3>{`(${stock} disponibles)`}</h3>
    </div>
  )
}
export default ProductCard