import React from 'react'
import { Routes, Route } from "react-router-dom"
import Register from './pages/Register'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes >
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
