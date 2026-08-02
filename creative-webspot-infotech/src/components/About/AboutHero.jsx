import { motion } from 'framer-motion';
import { Rocket, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function AboutHero() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

    useEffect(() => {
        const launchDate = new Date('2026-08-03T00:00:00').getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchDate - now;

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 dark:from-primary/20 dark:to-accent/20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold rounded-full mb-6 shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        Launching August 3, 2026
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight mb-6"
                >
                    Born in 2026. <br />
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Built for the Future.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
                >
                    We're a new-age digital agency launching with a mission to transform how businesses leverage technology. Premium solutions. Transparent process. Measurable results.
                </motion.p>

                {/* Countdown Timer */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex justify-center gap-4 md:gap-8 mb-12"
                >
                    {[
                        { value: timeLeft.days, label: 'Days' },
                        { value: timeLeft.hours, label: 'Hours' },
                        { value: timeLeft.minutes, label: 'Minutes' },
                    ].map((item, i) => (
                        <div key={i} className="text-center">
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-secondary rounded-2xl shadow-lg flex items-center justify-center mb-2">
                                <span className="text-3xl md:text-4xl font-poppins font-bold text-primary">
                                    {item.value}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{item.label}</p>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link to="/services" className="btn-primary flex items-center justify-center gap-2">
                        Explore Services <Rocket className="w-4 h-4" />
                    </Link>
                    <Link to="/contact" className="btn-outline flex items-center justify-center gap-2">
                        Get Early Access <Calendar className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}