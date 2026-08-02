import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Pandi',
        role: 'TechCorp',
        avatar: '👨‍💼',
        handle: '@pandi',
        text: 'Creative WebSpot delivered our ERP system on time and within budget. Their team is professional and responsive. Highly recommended!',
        rating: 5,
    },
    {
        name: 'Karthik',
        role: 'Marketing Director',
        avatar: '👩‍💼',
        handle: '@priya',
        text: 'The video production quality is outstanding. Our brand video got 10x more engagement than expected. Amazing work!',
        rating: 5,
    },
    {
        name: 'Arun',
        role: 'StartupXYZ',
        avatar: '👨‍💻',
        handle: '@arun',
        text: 'Their AI chatbot solution saved us 40% in support costs. The automation is seamless. Best investment we made this year.',
        rating: 5,
    },
];

export default function Testimonials() {
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
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Real feedback from real customers
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl">
                                    {testimonial.avatar}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    <p className="text-xs text-primary">{testimonial.handle}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-3">
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                {testimonial.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}