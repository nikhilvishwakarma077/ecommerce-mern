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
import { AuthLayout } from './layouts/AuthLayout';
import { MainLayout } from './layouts/MainLayout';
import AddProduct from './pages/admin/AddProduct';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Auth pages – NO navbar/footer */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Main app – WITH navbar/footer */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AddProduct />} />
          <Route path="/checkout" element={<Checkout />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
