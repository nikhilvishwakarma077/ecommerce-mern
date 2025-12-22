import React from 'react'
import Navbar from '../components/common/Navbar.jsx'
import Header from '../components/common/Header.jsx'
import ProductsCards from '../components/products/ProductCard.jsx'
import ShopStore from '../components/products/ShopStore.jsx'
import { ShoppingBag } from 'lucide-react'
import Footer from '../components/common/Footer.jsx'

const Home = () => {
    return (
        <>
            <Navbar />
            <ShopStore />
            <Footer />
             
        </>
    )
}

export default Home
