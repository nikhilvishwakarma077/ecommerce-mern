import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { API } from "../api/auth.api";
import { LoaderWithText } from "../components/common/LoaderWithText";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const getProduct = async () => {
    try {
      const res = await API.get(`/product/${id}`)
      setProduct(res.data.data)

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {

    getProduct()


  }, [id]);

  if (!product) return <LoaderWithText />;


  const handleQuantityChange = (action) => {
    if (action === 'increase' && quantity < (product.stock || 100)) {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">

            {/* Product Image */}
            <div className="flex items-center justify-center bg-gray-100 rounded-xl p-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-h-96 object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Product Name */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(4.5)</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Description</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Stock Status */}
                {product.stock && (
                  <div className="mb-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${product.stock > 50
                      ? 'bg-green-100 text-green-800'
                      : product.stock > 0
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                      }`}>
                      {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                    </span>
                  </div>
                )}
              </div>

              {/* Quantity and Actions */}
              <div>
                {/* Quantity Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border-2 border-gray-300 rounded-lg">
                      <button
                        onClick={() => handleQuantityChange('decrease')}
                        className="p-3 hover:bg-gray-100 transition-colors disabled:opacity-50"
                        disabled={quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-6 py-3 font-semibold text-lg">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange('increase')}
                        className="p-3 hover:bg-gray-100 transition-colors disabled:opacity-50"
                        disabled={quantity >= (product.stock || 100)}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-gray-600">
                      Total: <span className="font-bold text-gray-900 text-lg">
                        ${(product.price * quantity).toFixed(2)}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <button className="p-4 border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all">
                    <Heart className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
