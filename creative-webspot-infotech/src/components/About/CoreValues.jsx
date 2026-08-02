import { motion } from 'framer-motion';
import { Award, Zap, Shield, Headphones } from 'lucide-react';

const values = [
    {
        icon: Award,
        title: 'Quality',
        color: 'from-blue-500 to-cyan-400',
        content: 'Every line of code, every pixel, every frame meets our rigorous quality standards. We don\'t ship "good enough" — we ship exceptional.',
    },
    {
        icon: Zap,
        title: 'Innovation',
        color: 'from-purple-500 to-pink-400',
        content: 'We stay ahead of the curve. From AI chatbots to drone photography, we adopt emerging technologies early so our clients gain competitive advantage.',
    },
    {
        icon: Shield,
        title: 'Trust',
        color: 'from-green-500 to-emerald-400',
        content: 'Trust is earned through transparency. Clear communication, honest pricing, and delivering on promises — that\'s how we build lasting partnerships.',
    },
    {
        icon: Headphones,
        title: 'Support',
        color: 'from-orange-500 to-red-400',
        content: 'Our relationship doesn\'t end at delivery. 24/7 support, proactive maintenance, and continuous improvement keep your solutions running flawlessly.',
    },
];

export default function CoreValues() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
                        Our Core Values
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        The principles that guide every decision we make
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {values.map((value, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-secondary p-8 shadow-soft hover:shadow-glass transition-all duration-300"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
                                    <value.icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {value.content}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}