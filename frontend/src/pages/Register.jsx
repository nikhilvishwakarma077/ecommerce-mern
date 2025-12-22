import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth.api';

export default function Register() {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'user'
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {
            if (!formData.name || !formData.email || !formData.password) {
                toast.error("Please fill in all fields")
                return;
            }

            const res = await registerUser(formData);
            console.log(res);

            setFormData({
                name: '',
                email: '',
                password: '',
                role: 'user'
            })
            res.success ? toast.success(res.message) : toast.error(res.message)
            navigate("/login")


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
                            placeholder="Create a password"
                        />
                    </div>

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
                            <option value="user">user</option>
                            <option value="vendor">Vendor</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

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