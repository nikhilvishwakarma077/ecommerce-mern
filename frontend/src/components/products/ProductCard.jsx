import React from 'react';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { addToCartAPI } from '../../api/cart.api';

const ProductCard = ({ product }) => {

  const navigate = useNavigate()

  const onAddToCart = (pId, quantity = 1) => {

    addToCartAPI(pId, quantity)
    navigate("/cart")
  }



  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square overflow-hidden" style={{ backgroundColor: product.bgColor }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          <div className="flex gap-2">
            <button
              onClick={() => {
                navigate(`/product/${product._id}`)
              }}
              className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              Details
            </button>
            <button
              onClick={() => {
                onAddToCart(product._id)

              }}
              className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};


export default ProductCard