import React from 'react'
const ProductCard = ({title, price, info}) => {
  return (
    <div style={{border: "2px solid black"}}>
        <h2>{title}</h2>
        <h3>{price}</h3>
        <h3>{info}</h3>
    </div>
  )
}

export default ProductCard