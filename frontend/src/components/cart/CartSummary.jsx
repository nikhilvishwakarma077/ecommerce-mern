import { useNavigate } from 'react-router-dom';


const CartSummary = ({ items }) => {

  const navigate = useNavigate()

  const total = items.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

  return (
    <div className="mt-6 p-5 bg-gray-800 text-white rounded-lg shadow-lg">
      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      <button
      onClick={()=>{
        navigate('/checkout')
      }}
        className="mt-4 w-full bg-green-600 hover:bg-green-700 py-2 rounded text-white font-medium"
      >
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
