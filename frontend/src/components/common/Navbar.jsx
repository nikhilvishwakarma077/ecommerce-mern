import { ShoppingBag, ShoppingCart } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  const logout = () => {
    navigate("/login")
    // localStorage.removeItem("token")
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            onClick={() => {
              navigate("/home")
            }}
            className="flex items-center gap-2 ">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">Vendra</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-blue-600 font-medium hover:text-blue-700">Products</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Categories</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Deals</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="relative p-2">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center ">
                {"1"}
              </span>
            </button>

            {token ? (
              <button
                onClick={logout}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Logout
              </button>
            ) : (
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Login
              </button>
            )
            }

          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
