import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
    { value: 0, suffix: '+', label: 'Projects Delivered' },
    { value: 0, suffix: '+', label: 'Happy Clients' },
    { value: 0, suffix: '+', label: 'Years Experience' },
    { value: 0, suffix: '%', label: 'Satisfaction Rate' },
];

function Counter({ value, suffix, inView }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [inView, value]);

    return (
        <span className="text-6xl md:text-7xl font-poppins font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {count}{suffix}
        </span>
    );
}

export default function AnimatedStats() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center"
                        >
                            <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
                            <p className="text-gray-600 dark:text-gray-400 font-medium mt-2">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}