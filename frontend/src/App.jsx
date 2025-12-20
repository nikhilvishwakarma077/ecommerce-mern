import React from 'react'
import { Routes, Route } from "react-router-dom"
import Register from './pages/Register'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Admindashboard from './pages/admin/Admindashboard';
import VendorPage from './pages/vendor/VendorPage';
import Navbar from './components/common/Navbar';
import AddProduct from './pages/admin/AddProduct';

const App = () => {
  return (
    <>
      <ToastContainer />
      {/* <Navbar /> */}
      <Routes >
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/admin' element={<Admindashboard />} /> 
        <Route path='/admin/add' element={<AddProduct />} /> 
        <Route path='/vendor' element={<VendorPage />} />
      </Routes>
    </>
  )
}

export default App
