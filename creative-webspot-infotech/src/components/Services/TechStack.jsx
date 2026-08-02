import { motion } from 'framer-motion';

const techStacks = [
    {
        category: 'Software',
        techs: ['React', 'Node.js', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'SQL','express.js', 'Next.js', 'TypeScript'],
        color: 'from-blue-500 to-cyan-400',
    },
    {
        category: 'Hardware',
        techs: ['Arduino', 'Raspberry Pi', 'PCB Design', 'Embedded Systems', 'Biometric Systems', 'Sensor Based Projects'],
        color: 'from-purple-500 to-pink-400',
    },
    {
        category: 'Photography',
        techs: ['Adobe Photoshop', 'Lightroom', 'Capture One', 'DSLR Cameras', 'Mirrorless Cameras', 'DJI Drones'],
        color: 'from-orange-500 to-red-400',
    },
    {
        category: 'Video',
        techs: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro'],
        color: 'from-green-500 to-emerald-400',
    },
    {
        category: 'Content',
        techs: ['WordPress', 'SEO Tools', 'Ahrefs', 'SEMrush', 'Grammarly'],
        color: 'from-yellow-500 to-orange-400',
    },
];

export default function TechStack() {
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
                        Technologies We Master
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Industry-leading tools and platforms
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {techStacks.map((stack, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
                        >
                            <h3 className="text-lg font-bold mb-4 text-center">{stack.category}</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {stack.techs.map((tech, j) => (
                                    <span
                                        key={j}
                                        className="px-3 py-1.5 bg-white dark:bg-secondary text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}