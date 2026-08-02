import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '../animations/variants';

const stats = [
    { value: '0', label: 'Projects' },
    { value: '0+', label: 'Clients' },
    { value: '0', label: 'Years Experience' },
    { value: '0%', label: 'Customer Satisfaction' },
];

export default function Stats() {
    return (
        <section className="py-16 bg-white dark:bg-secondary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="initial" whileInView="animate" viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            variants={staggerItem}
                            className="text-center p-6 rounded-2xl glass shadow-soft"
                        >
                            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}