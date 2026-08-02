import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

const rotatingWords = ['Web Apps', 'AI Solutions', 'Brand Videos', 'ERP Systems'];

export default function Hero() {
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Gradient Mesh Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-blob" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6 backdrop-blur-sm border border-primary/20">
                            🚀 Welcome to the Future
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight mb-6"
                    >
                        We Build <br />
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {rotatingWords[currentWord]}
                            </span>
                            <motion.span
                                className="absolute -right-2 top-0 w-1 h-full bg-primary"
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 mb-10"
                    >
                        Creative WebSpot Info Tech transforms your ideas into powerful digital experiences. Premium solutions for modern businesses.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <Link to="/projects" className="btn-primary flex items-center justify-center gap-2 group">
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/contact" className="btn-outline flex items-center justify-center gap-2">
                            <Play className="w-4 h-4" /> Contact Us
                        </Link>
                    </motion.div>
                </div>

                {/* Right - Product Mockup (Updated with Image) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative animate-float">
                        {/* Laptop Bezel */}
                        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-2 md:p-3 shadow-2xl border border-gray-700/50">
                            
                            {/* Screen Content - Premium Dashboard Image */}
                            <div className="relative overflow-hidden rounded-lg aspect-video bg-gray-900">
                                <img 
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                                    alt="Creative WebSpot Premium Dashboard Preview" 
                                    className="w-full h-full object-cover"
                                    loading="eager" // Crucial for LCP (PageSpeed Score)
                                />
                                
                                {/* Subtle Glass Overlay at bottom for premium feel */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                                
                                {/* Floating Badge on Screen */}
                                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
                                    <p className="text-white text-xs font-medium flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                        Live Analytics Dashboard
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements (Outside Laptop) */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 w-20 h-20 bg-accent/20 backdrop-blur-lg rounded-xl border border-white/20 flex items-center justify-center shadow-xl"
                        >
                            <span className="text-3xl">🚀</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary/20 backdrop-blur-lg rounded-xl border border-white/20 flex items-center justify-center shadow-xl"
                        >
                            <span className="text-3xl">💡</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}