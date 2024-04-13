/* eslint-disable @next/next/no-img-element */
import React from "react"

const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className="product-card">
      <img src={`../assets/images/${image}`} alt="Product Image" className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button className="add-to-cart-btn">
          <i className="fas fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
