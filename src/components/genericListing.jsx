// GenericListing.jsx
import React from "react"
import ProductCard from "./ProductCard"
import products from "../api/products.json"

const GenericListing = () => {
  return (
    <div className="generic-listing">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  )
}

export default GenericListing
