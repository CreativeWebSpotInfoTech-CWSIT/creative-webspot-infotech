import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';

export default function CaseStudies() {
    return (
        <section className="py-20 bg-white dark:bg-secondary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">In-Depth Case Studies</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Detailed breakdowns of our most complex projects
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            title: 'Scaling E-Commerce: 300% Sales Growth',
                            client: 'RetailCorp Inc.',
                            desc: 'How we rebuilt a legacy platform into a high-performance MERN stack application handling 10k+ daily users.',
                            tags: ['React', 'Node.js', 'AWS']
                        },
                        {
                            title: 'Cinematic Storytelling: $2M Funding Video',
                            client: 'TechStart Solutions',
                            desc: 'Creating a brand anthem that not only went viral but directly contributed to securing Series A funding.',
                            tags: ['Video Production', 'Motion Graphics']
                        }
                    ].map((study, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors group"
                        >
                            <FileText className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{study.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Client: {study.client}</p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">{study.desc}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {study.tags.map((tag, j) => (
                                    <span key={j} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <button className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                                Read Case Study <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}