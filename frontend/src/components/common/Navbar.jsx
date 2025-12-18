import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const navigate = useNavigate()

  const redirectToRegister = () => {
    navigate("/")
  }
  const redirectToLogin = () => {
    navigate("/login")
  }

return (
    <nav className="bg-[#0a0a0a] border-b border-[#262626] px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center font-bold text-white text-xl group-hover:shadow-lg group-hover:shadow-[#3b82f6]/40 transition-all duration-300">
            V
          </div>
          <span className="text-[#e5e5e5] font-semibold text-lg hidden sm:block">
            Vendra
          </span>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-xl relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
          <input
            type="text"
            placeholder="Search products, categories..."
            className="w-full bg-[#141414] border border-[#262626] text-[#e5e5e5] placeholder:text-[#666] rounded-lg pl-12 pr-4 py-2.5 text-sm outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-all"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-[#a3a3a3] hover:text-[#e5e5e5] text-sm font-medium transition-colors">
            Categories
          </button>
          <button className="text-[#a3a3a3] hover:text-[#e5e5e5] text-sm font-medium transition-colors">
            Sell
          </button>
          <button className="text-[#a3a3a3] hover:text-[#e5e5e5] text-sm font-medium transition-colors"
          onClick={redirectToLogin}
          >
            Log In
          </button>
          <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-[#3b82f6]/30 transition-all duration-300"
          onClick={redirectToRegister}
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#e5e5e5] p-2 hover:bg-[#141414] rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Search Bar - Mobile */}
      <div className="md:hidden mt-4 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
        <input
          type="text"
          placeholder="Search products, categories..."
          className="w-full bg-[#141414] border border-[#262626] text-[#e5e5e5] placeholder:text-[#666] rounded-lg pl-12 pr-4 py-2.5 text-sm outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-all"
        />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 pb-4 border-t border-[#262626] pt-4">
          <button className="text-[#a3a3a3] hover:text-[#e5e5e5] text-sm font-medium text-left py-2 px-3 hover:bg-[#141414] rounded-lg transition-all">
            Categories
          </button>
          <button className="text-[#a3a3a3] hover:text-[#e5e5e5] text-sm font-medium text-left py-2 px-3 hover:bg-[#141414] rounded-lg transition-all">
            Sell
          </button>
          <button className="text-[#a3a3a3] hover:text-[#e5e5e5] text-sm font-medium text-left py-2 px-3 hover:bg-[#141414] rounded-lg transition-all"
          onClick={redirectToLogin}
          >
            Log In
          </button>
          <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-[#3b82f6]/30 transition-all duration-300"
          onClick={redirectToRegister}
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar
