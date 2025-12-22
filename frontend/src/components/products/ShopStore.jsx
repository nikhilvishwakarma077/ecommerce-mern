import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useState } from "react";
import ProductCard from "./ProductCard";




const ShopStore=() => {

  const [cart, setCart] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'High-fidelity audio with active noise cancellation and 30-hour battery life.',
      price: '199.00',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      bgColor: '#FDB813'
    },
    {
      id: 2,
      name: 'Mechanical Keyboard',
      description: 'Tactile switches with customizable RGB lighting for the ultimate typing...',
      price: '120.00',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
      bgColor: '#000000'
    },
    {
      id: 3,
      name: 'Ergonomic Mouse',
      description: 'Designed for comfort and precision, reducing wrist strain during long...',
      price: '85.00',
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
      bgColor: '#D4A574'
    },
    {
      id: 4,
      name: 'Aluminum Laptop Stand',
      description: 'Adjustable height and angle for better posture and improved cooling.',
      price: '45.00',
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop',
      bgColor: '#E5E5E5'
    },
    {
      id: 5,
      name: '4K Monitor',
      description: 'Crystal clear display with IPS panel and ultra-thin bezels.',
      price: '350.00',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop',
      bgColor: '#F5F5F5'
    },
    {
      id: 6,
      name: 'Portable Speaker',
      description: 'Waterproof Bluetooth speaker with rich bass and 20 hours playtime.',
      price: '79.99',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
      bgColor: '#6B7D6F'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Products</h1>
              <p className="text-gray-600">Browse our collection of high-quality tech accessories.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}


export default ShopStore