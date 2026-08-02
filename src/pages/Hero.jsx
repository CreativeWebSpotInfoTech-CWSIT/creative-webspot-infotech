import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { fadeInUp, scaleIn } from '../animations/variants';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 dark:from-primary/20 dark:to-accent/20" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div initial="initial" animate="animate" variants={scaleIn} transition={{ duration: 0.8 }}>
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                        Welcome to the Future
                    </span>
                </motion.div>

                <motion.h1
                    initial="initial" animate="animate" variants={fadeInUp} transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight mb-6"
                >
                    Creative WebSpot <br />
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Info Tech
                    </span>
                </motion.h1>

                <motion.p
                    initial="initial" animate="animate" variants={fadeInUp} transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10"
                >
                    Building Modern Digital Solutions for Businesses. We transform ideas into powerful digital experiences.
                </motion.p>

                <motion.div
                    initial="initial" animate="animate" variants={fadeInUp} transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link to="/projects" className="btn-primary flex items-center justify-center gap-2">
                        View Projects <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/contact" className="btn-outline flex items-center justify-center gap-2">
                        <Play className="w-4 h-4" /> Contact Us
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}