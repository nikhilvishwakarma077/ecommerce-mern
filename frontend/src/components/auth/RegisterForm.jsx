import { useState } from 'react';
import axios from "axios"
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'customer'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        // if (!formData.name || !formData.email || !formData.password) {
        //     alert('Please fill in all fields');
        //     return;
        // }
        // console.log('Form submitted:', formData);
        // alert(`Registration submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nRole: ${formData.role}`);

        try {
            if (!formData.name || !formData.email || !formData.password) {
                toast.error("Please fill in all fields")
                return;
            }
            const response = await axios.post("http://localhost:3000/api/auth/register", formData)
            console.log(response.data);
            setFormData({
                name: '',
                email: '',
                password: '',
                role: 'customer'
            })
            response.data.success ? toast.success(response.data.message) : toast.error(response.data.message)

        } catch (error) {
            console.log(error.message);
            toast.error(error.message)

        }

    };

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-gray-800 flex items-center justify-center p-4">
            <div className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-8 border border-gray-700">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Create a Vendra Account</h2>
                </div>

                <div className="space-y-6">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition placeholder-gray-400"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Email Input */}
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

                    {/* Password Input */}
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
                            placeholder="Create a password"
                        />
                    </div>

                    {/* Role Select */}
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                            Select Role
                        </label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                        >
                            <option value="customer">Customer</option>
                            <option value="vendor">Vendor</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-800 transition duration-100 shadow-lg "
                    >
                        Register
                    </button>
                </div>

                <p className="mt-6 text-center text-sm text-gray-400">
                    Already have an account?
                    <Link className="text-indigo-400 hover:text-indigo-300 font-medium" to="/login">Sign in</Link>
                </p>
            </div>
        </div>
    );
}