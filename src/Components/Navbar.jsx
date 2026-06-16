import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 lg:px-20 py-6 border-b border-[#263044] bg-[#0A0E1A]/80 backdrop-blur-md">

            <div className="flex gap-1">
                <img
                    src={logo}
                    alt="CurrenSee Logo"
                    className="h-12 w-auto"
                />
                <h3 className="mt-2 font-extrabold poppins">Curren<span className="text-gold font-extrabold">see</span></h3>
            </div>

            <div className="hidden md:flex items-center gap-10 text-white poppins">
                <a href="#features" className="underline-hover poppins">Features</a>
                <a href="#showcase" className="underline-hover poppins">Screens</a>
                <a href="#download" className="underline-hover poppins">How It Works</a>
            </div>

            <button className="px-5 py-3 rounded-lg font-bold text-[#0A0E1A]
                bg-gradient-to-r from-[#F7E27C] via-[#D4AF37] to-[#B8860B]
                hover:from-[#ffe58a] hover:via-[#e0b93d] hover:to-[#a87408]
                transition-all duration-300 shadow-lg shadow-[#D4AF37]/30 poppins"

            >
               <a href="https://github.com/user-attachments/files/29010379/CurrenSee.zip">
                   Download App
               </a>
            </button>

        </nav>
    );
};

export default Navbar;