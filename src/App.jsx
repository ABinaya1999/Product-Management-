import { useState } from 'react'
// import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import SingleProduct from './pages/singleProduct/SingleProduct'
import AddProduct from './pages/addProduct/AddProduct'
import EditProduct from './pages/editProduct/EditProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/:id' element={<SingleProduct/>} />
          <Route path='/addproduct' element={<AddProduct/>} />
          <Route path='/editproduct/id' element={<EditProduct/>} />
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
