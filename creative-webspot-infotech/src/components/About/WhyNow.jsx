import { motion } from 'framer-motion';
import { TrendingUp, Brain, Zap, Users } from 'lucide-react';

const stats = [
    { icon: Brain, value: '300%', label: 'AI Adoption Growth' },
    { icon: TrendingUp, value: '$3.4T', label: 'Digital Transformation Market' },
    { icon: Zap, value: '5x', label: 'Faster Time-to-Market Needed' },
    { icon: Users, value: '87%', label: 'Customers Expect Integration' },
];

export default function WhyNow() {
    return (
        <section className="py-20 bg-white dark:bg-secondary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
                        Why Now?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        The digital landscape in 2026 is at a critical inflection point
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-primary font-bold">→</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                <span className="font-semibold text-secondary dark:text-white">AI is no longer optional</span> — it's essential for competitive advantage
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-primary font-bold">→</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                <span className="font-semibold text-secondary dark:text-white">Businesses need integrated solutions</span>, not fragmented services
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-primary font-bold">→</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                <span className="font-semibold text-secondary dark:text-white">Speed-to-market determines winners</span> and losers in every industry
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-primary font-bold">→</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                <span className="font-semibold text-secondary dark:text-white">Customer expectations have never been higher</span> — and they won't wait
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20"
                    >
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            We launched Creative WebSpot at this exact moment because the
                            market demands a new approach — one that combines AI, automation,
                            premium design, and rock-solid engineering under one roof.
                        </p>
                        <p className="text-lg font-semibold text-primary">
                            We're not just keeping up with 2026. We're defining it.
                        </p>
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
                        >
                            <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                            <div className="text-3xl font-poppins font-bold text-primary mb-1">
                                {stat.value}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}