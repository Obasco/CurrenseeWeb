import React from "react"


const Footer = () => {
    return (
        <footer className="bg-[#0A0E1A] border-t border-[#263044] px-8 lg:px-20 py-16">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* BRAND */}
                <div>
                    <h2 className="text-2xl font-extrabold text-white poppins">
                        Curren<span className="text-gold">See</span>
                    </h2>

                    <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                        Real-time currency tracking made simple, fast, and secure for everyone.
                    </p>
                </div>

                {/* LINKS 1 */}
                <div>
                    <h3 className="text-white font-bold mb-4">Product</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="hover:text-gold cursor-pointer">Features</li>
                        <li className="hover:text-gold cursor-pointer">How it works</li>
                        <li className="hover:text-gold cursor-pointer">Download</li>
                    </ul>
                </div>

                {/* LINKS 2 */}
                <div>
                    <h3 className="text-white font-bold mb-4">Company</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="hover:text-gold cursor-pointer">About</li>
                        <li className="hover:text-gold cursor-pointer">Careers</li>
                        <li className="hover:text-gold cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* NEWSLETTER */}
                <div>
                    <h3 className="text-white font-bold mb-4">Stay Updated</h3>

                    <p className="text-gray-400 text-sm mb-4">
                        Get the latest updates on currency trends.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-lg bg-[#0F172A] border border-[#263044]
                            text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                        />

                        <button className="px-4 py-2 rounded-lg font-bold text-[#0A0E1A]
                            bg-gradient-to-r from-[#F7E27C] via-[#D4AF37] to-[#B8860B]
                            hover:scale-105 transition">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="mt-12 border-t border-[#263044] pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} CurrenSee. All rights reserved.
            </div>

        </footer>
    )
}

export default Footer