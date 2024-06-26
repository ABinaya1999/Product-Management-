import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navebar/Navbar'
import { useParams, useNavigate  } from 'react-router-dom'
import './SingleProduct.css'
import axios from 'axios'

const SingleProduct = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [product, setProduct]= useState({})
  console.log(product)
  const fetchProduct = async ()=>{
    const response = await axios.get('https://6679967018a459f639509b35.mockapi.io/products/'+id)
    if (response.status === 200){
      setProduct(response.data)
    }else{
      alert('Something went wrong')
    }
  }
  const deleteProduct = async()=>{
    const response = await axios.delete('https://6679967018a459f639509b35.mockapi.io/products/'+id)
    if (response.status==200){
      navigate("/")
    }else{
      alert("Smth went wrong")
    }

  }
  useEffect(()=>{
    fetchProduct()
  },[id])

  return (
    <>
      <NavBar/>
      <div className="product-detail" key={product.id}>
        <img src={product.image} alt="Product Image" className="product-image" />
        <div className="product-info">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price">${product.price}</p>
            <p className="product-description">
                {product.description}
            </p>
            <button className="btn-edit" >Edit</button>
            <button className="btn-delete" onClick={deleteProduct}>Delete</button>
            
        </div>
    </div>
    </>
  )
}

export default SingleProduct