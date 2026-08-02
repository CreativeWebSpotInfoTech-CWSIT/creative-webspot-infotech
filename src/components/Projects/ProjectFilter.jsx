import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

const categories = ['All', 'Software', 'Hardware', 'Photography', 'Video', 'Content'];

export default function ProjectFilter() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filtered = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">Browse Our Work</h2>
                    <p className="text-gray-600 dark:text-gray-300">Filter by category to find what you need</p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(cat => (
                        <motion.button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === cat
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary/10 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>

                <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}