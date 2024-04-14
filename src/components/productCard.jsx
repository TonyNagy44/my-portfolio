const ProductCard = ({ name, description, price, image, addToCart }) => {
  const handleAddToCart = () => {
    addToCart()
  }
  return (
    <div className="product-card">
      <img src={image} alt="Product" className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          <i className="fas fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
