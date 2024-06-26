import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom' 




const Card = ({product}) => {
  return (
    <div className="product-card" key={product.id}>
        <img src={product.image} alt="Product Image" className="product-image" />
        <div className="product-details">
            <h2 className="product-title">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-category">{product.category}</p>
            <a href="#" className="btn">Add to Cart</a>
        </div>
        <Link to={`/product/${product.id}`}>See More</Link>
    </div>
  )
}

export default Card