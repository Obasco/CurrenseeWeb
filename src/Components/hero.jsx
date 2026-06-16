import { CircleCheck } from "lucide-react";
import img from "../assets/img.png"

const Hero = () => {
    return (
        <section className="m-10 lg:m-20">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* LEFT SIDE */}
                <div className="text-center lg:text-left max-w-2xl">

                    {/* Badge */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full
                            bg-[#0A0E1A] border border-[#263044] shadow-md">

                            <CircleCheck className="text-[#D4AF37] w-4 h-4" />

                            <p className="text-sm font-semibold text-gold">
                                Secured Access
                            </p>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="mt-8 text-4xl lg:text-6xl font-extrabold text-white leading-tight poppins">
                        Track currency rates
                        <span className="block text-gold font-extrabold">
                            in real time
                        </span>
                    </h1>

                    {/* Paragraph */}
                    <p className="mt-6 text-gray-400 text-base lg:text-lg poppins">
                        CurrenSee helps you monitor global exchange rates instantly with a clean,
                        secure and modern experience built for speed.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                        <button className="px-6 py-3 rounded-lg font-bold text-[#0A0E1A]
                            bg-gradient-to-r from-[#F7E27C] via-[#D4AF37] to-[#B8860B]
                            poppins font-extrabold
                            hover:scale-105 transition-all duration-300 shadow-lg shadow-[#D4AF37]/30">
                            <a href="https://github.com/user-attachments/files/29010379/CurrenSee.zip">
                                Download App
                            </a>
                        </button>

                        <button className="px-6 py-3 poppins rounded-lg font-semibold text-white
                            border border-[#263044] hover:border-[#D4AF37] transition-all">
                            Learn More
                        </button>

                    </div>
                </div>

                {/* RIGHT SIDE (IMAGE) */}
                <div className="flex justify-center  lg:justify-end w-full max-md:hidden">
                    <img
                        src={img}
                        alt="Hero"
                        width={100}
                        height={50}
                        className="w-full max-w-md lg:max-w-lg object-contain"
                    />
                </div>

            </div>

        </section>
    )
}

export default Hero