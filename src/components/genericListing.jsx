import React, { useState, useEffect } from "react"
import ProductCard from "./productCard"
import productsData from "../api/products.json"

const GenericListing = () => {
  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortType, setSortType] = useState(null)
  const [sortOrder, setSortOrder] = useState("asc")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    setProducts(productsData)
  }, [])

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const sortBy = (type) => {
    return (a, b) => {
      if (type === "price") {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price
      } else if (type === "name") {
        return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      }
    }
  }

  const toggleSortOrder = (type) => {
    setSortType(type)
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice))
    )
  }, [products, minPrice, maxPrice])

  const addToCart = (product) => {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems([...cartItems, product])
      setCartCount(cartCount + 1)
    }
  }

  return (
    <div className="generic-listing">
      <h1>Products</h1>
      <div className="nav-bar">
        <div className="search-bar">
          <input type="text" placeholder="Search by name" value={searchQuery} onChange={handleSearch} />
        </div>
        <div className="sort-buttons">
          <button onClick={() => toggleSortOrder("price")}>
            Sort by Price ({sortOrder === "asc" ? "Ascending" : "Descending"})
          </button>
          <button onClick={() => toggleSortOrder("name")}>
            Sort by Name ({sortOrder === "asc" ? "Ascending" : "Descending"})
          </button>
        </div>
        <div className="filter-by-price">
          <input type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
          <input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        </div>
        <div className="shopping-cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
      <div className="product-list">
        {filteredProducts
          .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .sort(sortBy(sortType))
          .map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              addToCart={() => addToCart(product)}
            />
          ))}
      </div>
    </div>
  )
}

export default GenericListing
