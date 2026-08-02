import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'How long does a typical project take?',
        answer: 'It depends on the service. Software projects: 4-12 weeks. Hardware setup: 1-3 days. Photography: 1-2 days shoot + 5-7 days delivery. Video: 3-14 days. Content: 1-3 days per piece.',
    },
    {
        question: 'Do you offer package deals?',
        answer: 'Yes! We offer bundled packages for businesses needing multiple services. For example: Website + Photography + Content = 20% off. Contact us for custom quotes.',
    },
    {
        question: 'What if I\'m not satisfied with the deliverable?',
        answer: 'We offer unlimited revisions until you\'re 100% satisfied. Our quality guarantee means we don\'t stop until it\'s perfect.',
    },
    {
        question: 'Do you provide post-delivery support?',
        answer: 'Absolutely. All software projects include 3 months free support. Hardware comes with AMC options. We\'re here for the long run.',
    },
    {
        question: 'Can I hire you for just one service?',
        answer: 'Yes! While we offer integrated solutions, you can hire us for any single service. No pressure to bundle.',
    },
    {
        question: 'How do I get started?',
        answer: 'Simple! Click "Get Free Quote" or contact us. We\'ll schedule a 30-minute consultation to understand your needs and provide a detailed proposal within 24 hours.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

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
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Got questions? We've got answers.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white dark:bg-secondary rounded-xl shadow-md overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                            >
                                <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-primary transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-4"
                                    >
                                        <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}