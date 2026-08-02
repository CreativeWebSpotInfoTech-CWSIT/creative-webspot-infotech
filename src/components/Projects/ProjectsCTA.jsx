import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function ProjectsCTA() {
    return (
        <section className="py-20 bg-gradient-to-br from-primary to-purple-600">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
                            Ready to Create Something Amazing?
                        </h2>
                        <p className="text-white/90 text-lg mb-8 leading-relaxed">
                            Every great project starts with a conversation. Whether you have a detailed brief
                            or just a rough idea, we'd love to hear from you.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
                            {['Free Consultation', '24h Response', 'NDA Protection', 'Flexible Payment'].map((item, i) => (
                                <div key={i} className="flex items-center justify-center gap-2 text-white text-sm">
                                    <CheckCircle className="w-4 h-4 flex-shrink-0" /> {item}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                                Start Your Project <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/services" className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all">
                                View Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}