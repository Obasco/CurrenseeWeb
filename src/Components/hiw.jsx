import React from "react"
import { Search, ArrowRightLeft, LineChart } from "lucide-react"

const steps = [
    {
        id: 1,
        icon: Search,
        title: "Search Currency",
        description: "Select any global currency pair you want to track in real time."
    },
    {
        id: 2,
        icon: ArrowRightLeft,
        title: "Convert Instantly",
        description: "Get accurate exchange rates powered by live market data."
    },
    {
        id: 3,
        icon: LineChart,
        title: "Track & Analyze",
        description: "Monitor trends, volatility, and historical performance easily."
    }
]

const HowItWorks = () => {
    return (
        <section className="px-8 lg:px-20 py-24 bg-[#0A0E1A]">

            {/* HEADER */}
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white poppins">
                    How it works
                    <span className="block text-gold">in 3 simple steps</span>
                </h2>

                <p className="mt-4 text-gray-400">
                    Start tracking global currencies in seconds with a clean, fast, and secure system.
                </p>
            </div>

            {/* STEPS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

                {/* line (desktop only visual connector) */}
                <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-[#263044]" />

                {steps.map((step, index) => {
                    const Icon = step.icon

                    return (
                        <div
                            key={step.id}
                            className="relative bg-[#0F172A] border border-[#263044]
                            rounded-2xl p-8 text-center group
                            hover:border-[#D4AF37] transition-all duration-300
                            hover:-translate-y-1"
                        >

                            {/* STEP NUMBER */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2
                                bg-[#0A0E1A] border border-[#263044]
                                w-8 h-8 rounded-full flex items-center justify-center
                                text-sm font-bold text-[#D4AF37]">
                                {index + 1}
                            </div>

                            {/* ICON */}
                            <div className="mx-auto mt-6 w-12 h-12 rounded-xl
                                flex items-center justify-center
                                bg-[#0A0E1A] border border-[#263044]
                                group-hover:border-[#D4AF37] transition">

                                <Icon className="w-5 h-5 text-[#D4AF37]" />
                            </div>

                            {/* TITLE */}
                            <h3 className="mt-6 text-white text-xl font-bold poppins">
                                {step.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    )
                })}

            </div>

        </section>
    )
}

export default HowItWorks
