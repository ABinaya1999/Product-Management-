import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navebar/Navbar'
import './AddProduct.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddProduct = () => {
  const navigate = useNavigate()
  // const [name,setName]  = useState("")
  // const [description,setDescription] = useState("")
  // const [price,setPrice] = useState("")
  // const [image,setImage] = useState("")
  // const [sex,setSex] = useState("")
  // console.log(image)
  const [data,setData] = useState({
    name : "",
    description : "",
    price : "",
    sex : "",
    image : ""
  })

  const handleChange = (e)=>{
      const {name,value} = e.target
      setData({
        ...data,
        [name]:value
      })
  }
  // console.log(data)

  const addProduct = async(e)=>{
    e.preventDefault()
    const response = await axios.post("https://6679967018a459f639509b35.mockapi.io/products",data)
    if (response.status == 201){
      navigate("/")
    }else{
      alert("smth went wrong")
    }
  }
  return (
    <>
    <Navbar/>
    <div className="form-container" style={{marginTop:'50px',marginLeft:'600px'}}>
        <form id="product-form" onSubmit={addProduct}>
          <h1>Product Form</h1>
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" name="product-name" required onChange={handleChange}/>

          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows="4" required onChange={handleChange}></textarea>

          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" step="0.01" required onChange={handleChange}/>

          <label htmlFor="sex">Sex</label>
          <div className="sex-options">
            <input type="radio" id="male" name="sex" value="male" required onChange={handleChange}/>
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="sex" value="female" required onChange={handleChange}/>
            <label htmlFor="female">Female</label>
          </div>

          <label htmlFor="image">Image</label>
          <input type="text" id="image" name="image" accept="image/*" required onChange={handleChange}/>

          <button type="submit">Submit</button>
        </form>
      </div>
    
    </>
    
    
  )
}

export default AddProduct