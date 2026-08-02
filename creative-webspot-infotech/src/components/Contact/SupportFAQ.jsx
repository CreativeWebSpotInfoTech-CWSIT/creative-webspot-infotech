import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: 'How quickly will I receive a response?',
        a: 'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.'
    },
    {
        q: 'Do you offer free consultations?',
        a: 'Yes! We offer a free 30-minute initial consultation to understand your project requirements and provide a preliminary quote.'
    },
    {
        q: 'Can I request a custom quote?',
        a: 'Absolutely. Fill out the contact form with your project details, and our team will prepare a detailed, no-obligation proposal for you.'
    },
    {
        q: 'Do you sign NDAs?',
        a: 'Yes, we are happy to sign Non-Disclosure Agreements (NDAs) before discussing sensitive project details. Just let us know.'
    }
];

export default function SupportFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-20 bg-white dark:bg-secondary">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <HelpCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600 dark:text-gray-300">Quick answers before you reach out</p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                            >
                                <span className="font-semibold text-gray-900 dark:text-white">{faq.q}</span>
                                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-5 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            {faq.a}
                                        </div>
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