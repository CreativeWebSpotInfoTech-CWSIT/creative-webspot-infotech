import { motion } from 'framer-motion';
import { Search, FileText, Code, CheckCircle, Headphones } from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: 'Discovery',
        description: 'We understand your needs, goals, and constraints through detailed consultation.',
    },
    {
        icon: FileText,
        title: 'Planning',
        description: 'We create a roadmap with timelines, milestones, and deliverables.',
    },
    {
        icon: Code,
        title: 'Execution',
        description: 'Our expert team gets to work with regular updates and check-ins.',
    },
    {
        icon: CheckCircle,
        title: 'Review',
        description: 'You review the deliverables, provide feedback, we refine.',
    },
    {
        icon: Headphones,
        title: 'Delivery & Support',
        description: 'Final handover with documentation + ongoing support.',
    },
];

export default function ProcessSection() {
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
                        How We Deliver Excellence
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Our proven 5-step process for success
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Horizontal Line */}
                    <div className="hidden md:block absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-primary to-purple-600" />

                    <div className="grid md:grid-cols-5 gap-6">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                <div className="bg-white dark:bg-secondary p-6 rounded-xl shadow-lg text-center relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                                        <step.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-bold mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                                </div>
                                <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white dark:border-secondary z-20" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}