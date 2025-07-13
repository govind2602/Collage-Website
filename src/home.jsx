
import { motion } from "framer-motion";

const features = [
    {
        title: "Modern Design",
        desc: "Sleek, responsive layouts using Tailwind CSS and React.",
        icon: "🖥️",
    },
    {
        title: "Smooth Animations",
        desc: "Framer Motion brings your site to life with motion.",
        icon: "✨",
    },
    {
        title: "Mobile Ready",
        desc: "Looks great on all devices, from phones to desktops.",
        icon: "📱",
    },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 flex flex-col items-center">
            {/* Hero Section */}
            <section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
                        Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Collage Website</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Modern, animated, and beautiful. Powered by React, Tailwind, and Framer Motion.
                    </p>
                    <motion.a
                        href="#features"
                        whileHover={{ scale: 1.07 }}
                        className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg font-semibold hover:bg-pink-500 transition"
                    >
                        Explore Features
                    </motion.a>
                </motion.div>
                <motion.img
                    src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=cover&w=500&q=80"
                    alt="Hero"
                    className="w-80 h-80 rounded-3xl shadow-lg mt-10 md:mt-0 md:ml-8 object-cover"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.1 }}
                />
            </section>

            {/* Features Section */}
            <section id="features" className="w-full max-w-5xl py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feat, idx) => (
                    <motion.div
                        key={feat.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 0.7 }}
                        className="rounded-2xl bg-white/40 backdrop-blur-md shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition transform-gpu"
                    >
                        <div className="text-5xl mb-4">{feat.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                        <p className="text-gray-600">{feat.desc}</p>
                    </motion.div>
                ))}
            </section>
        </div>
    );
}