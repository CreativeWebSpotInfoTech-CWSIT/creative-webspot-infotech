import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function ProjectsHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                        <Sparkles className="w-4 h-4" /> Our Portfolio
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6"
                >
                    Our Work Speaks. <br />
                    <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        Results Prove.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
                >
                    From custom software to stunning visuals, explore our portfolio of successful projects.
                    Each one tells a story of innovation, precision, and measurable impact.
                </motion.p>

                <motion.a
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
                    href="#projects" className="btn-primary inline-flex items-center gap-2"
                >
                    View Our Work <ArrowDown className="w-4 h-4" />
                </motion.a>
            </div>
        </section>
    );
}