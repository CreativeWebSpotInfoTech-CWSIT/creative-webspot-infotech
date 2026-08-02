import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const benefits = [
    'Free 30-minute consultation',
    'No obligation quote',
    'Response within 24 hours',
    '100% satisfaction guarantee',
];

export default function ServicesCTA() {
    return (
        <section className="py-20 bg-gradient-to-br from-primary to-purple-600">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-white/90 text-lg mb-8 leading-relaxed">
                            Whether you need a custom software solution, hardware setup, stunning photography,
                            compelling video, or SEO content — we've got you covered. Let's discuss your
                            requirements and create something amazing together.
                        </p>

                        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="flex items-center gap-2 text-white">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    <span className="text-sm">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Get Free Quote <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/projects"
                                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                            >
                                View Our Projects
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}