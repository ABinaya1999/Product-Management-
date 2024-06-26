import React, {useEffect, useState} from 'react'
import Navbar from '../../components/navebar/Navbar'
import Card from '../../components/productcard/Card'
import axios from 'axios'

const Home = () => { 

  const [products, setProducts] = useState([])
  const fetchProducts = async()=>{
    const response = await axios.get('https://6679967018a459f639509b35.mockapi.io/products')
    console.log(response)
    if (response.status==200){
      setProducts(response.data)
    }else{
      alert('Something went wrong')
    }
  }
  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <>
    <Navbar/>
    <div style={{display:'flex', flexWrap:'wrap'}}>
      {
        products.length > 0 && products.map((product)=>{
          return(
            <Card product={product}/>
          )  
        })
      } 
    </div> 
    </>
    
  )
}

export default Home