import { motion } from 'framer-motion';
import { Search, Palette, Code, Rocket, Headphones } from 'lucide-react';

const steps = [
    { icon: Search, title: 'Discovery', desc: 'Understanding your needs and goals' },
    { icon: Palette, title: 'Design', desc: 'Creating beautiful, user-friendly designs' },
    { icon: Code, title: 'Development', desc: 'Building with latest technologies' },
    { icon: Rocket, title: 'Deployment', desc: 'Launching your project to production' },
    { icon: Headphones, title: 'Support', desc: '24/7 maintenance and updates' },
];

export default function ProcessTimeline() {
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
                        How We Work
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Our proven 5-step process for success
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent md:-translate-x-1/2" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Icon Circle */}
                            <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-white dark:bg-secondary rounded-full border-4 border-primary flex items-center justify-center z-10 md:-translate-x-1/2 shadow-lg">
                                <step.icon className="w-7 h-7 text-primary" />
                            </div>

                            {/* Content Card */}
                            <div className={`ml-24 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                                }`}>
                                <div className="p-6 bg-white dark:bg-secondary rounded-xl shadow-lg">
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}