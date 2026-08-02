import { motion } from 'framer-motion';
import { CheckCircle, Clock, User } from 'lucide-react';
import { featuredProjects } from '../../data/projects';

export default function FeaturedProjects() {
    return (
        <section className="py-20 bg-white dark:bg-secondary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Deep dive into our most impactful work
                    </p>
                </motion.div>

                <div className="space-y-12 max-w-6xl mx-auto">
                    {featuredProjects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-6 md:p-10 border border-gray-100 dark:border-gray-700`}
                        >
                            <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl">
                                <img
                                    src={project.image} alt={project.title}
                                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>

                            <div className="w-full lg:w-1/2">
                                <span className="text-sm font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{project.title}</h3>

                                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="flex items-center gap-1"><User className="w-4 h-4" /> {project.client}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {project.timeline}</span>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-1">The Challenge</h4>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">{project.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-1">Our Solution</h4>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">{project.solution}</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-2">Key Results</h4>
                                    <ul className="space-y-1">
                                        {project.results.map((res, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> {res}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}