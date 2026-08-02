import { motion } from 'framer-motion';

export default function OurStory() {
    return (
        <section className="py-20 bg-white dark:bg-secondary">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
                            Our Story
                        </h2>
                        <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <p>
                                Founded in 2026, Creative WebSpot Info Tech was born from a simple
                                observation: businesses deserve better digital partners.
                            </p>
                            <p>
                                Too many companies settle for mediocre websites, outdated software,
                                and disconnected services. We saw an opportunity to change that.
                            </p>
                            <p>
                                Our founders brought together decades of combined experience in
                                software development, hardware solutions, AI, and media production
                                to create something different — a one-stop digital agency that
                                actually delivers premium quality at transparent prices.
                            </p>
                            <p className="font-semibold text-primary">
                                We're not just another tech company. We're your long-term digital
                                partner, committed to your growth from day one.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
                            <div className="w-full h-full bg-white dark:bg-secondary rounded-2xl flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-4xl">🚀</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Since 2026</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Building the future, one project at a time
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}