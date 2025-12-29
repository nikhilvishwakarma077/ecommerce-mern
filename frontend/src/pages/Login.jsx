import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../api/auth.api';

export default function Login() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields")
      return;
    }

    const res = await loginUser(formData)
    console.log(res);



    if (res.success) {
      setFormData({
        name: '',
        email: '',
        password: '',
        role: 'user'
      })
      toast.success(res.message)

      const token = res.token
      const user = res.user

      localStorage.setItem("token", token)

      if (user.role === "admin") {
        navigate("/admin")
      } else if (user.role === "vendor") {
        navigate("/vendor")
      } else {
        navigate("/home")
      }

    } else {
      toast.error(res.message)
    }

    try {

    } catch (error) {
      // console.log(error.message);
      toast.error(error.message)
    }

  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-8 border border-gray-700">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400">Sign in to your account</p>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition placeholder-gray-400"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                // checked={formData.rememberMe}
                // onChange={handleChange}
                className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500 focus:ring-2"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300">
              Forgot password?
            </a>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-800 transition duration-100 shadow-lg "
          >
            Sign In
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?
          <Link className="text-indigo-400 hover:text-indigo-300 font-medium" to="/">Sign up</Link>
        </p>
      </div>
    </div>
  );
}