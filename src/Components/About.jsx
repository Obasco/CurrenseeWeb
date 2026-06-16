import about from "../about.js"

// lucide icons
import {
    RefreshCw,
    Bell,
    Database,
    ShieldCheck,
    History,
    Briefcase
} from "lucide-react"

const iconMap = {
    converter: RefreshCw,
    alert: Bell,
    data: Database,
    security: ShieldCheck,
    history: History,
    portfolio: Briefcase
}

const About = () => {
    return (
        <section className="px-8 lg:px-20 py-20 bg-[#0A0E1A]">

            {/* SECTION HEADER */}
            <div className="text-center mb-14">
                <h2 className="text-3xl lg:text-5xl font-extrabold text-white poppins">
                    Powerful tools for
                    <span className="text-gold block">modern trading</span>
                </h2>

                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                    Everything you need to track, analyze, and manage currency movements in real time.
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {about.map((item) => {
                    const Icon = iconMap[item.icon]

                    return (
                        <div
                            key={item.id}
                            className="group bg-[#0F172A] border border-[#263044]
                            p-6 rounded-2xl transition-all duration-300
                            hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/10
                            hover:-translate-y-1"
                        >

                            {/* ICON */}
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center
                                bg-[#0A0E1A] border border-[#263044]
                                group-hover:border-[#D4AF37] transition">

                                {Icon && <Icon className="w-5 h-5 text-[#D4AF37]" />}
                            </div>

                            {/* TITLE */}
                            <h3 className="mt-5 text-white font-bold text-xl poppins">
                                {item.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="mt-3 text-gray-400 text-sm leading-relaxed poppins">
                                {item.description}
                            </p>

                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default About