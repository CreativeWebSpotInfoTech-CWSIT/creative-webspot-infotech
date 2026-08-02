import { motion } from 'framer-motion';
import { Lightbulb, Users, Rocket, TrendingUp, Globe } from 'lucide-react';

const timeline = [
    {
        year: '2024',
        title: 'The Idea',
        icon: Lightbulb,
        desc: 'Concept born from frustration with fragmented digital services. Research begins on integrated agency model.',
    },
    {
        year: '2025',
        title: 'Building Foundation',
        icon: Users,
        desc: 'Team assembly, technology stack selection, and service framework development. First beta clients onboarded.',
    },
    {
        year: 'Aug 2026',
        title: 'Launch Day 🚀',
        icon: Rocket,
        desc: 'Creative WebSpot Info Tech officially launches with full suite of services. First 50 clients onboarded in first month.',
    },
    {
        year: '2026 Q4',
        title: 'Expansion',
        icon: TrendingUp,
        desc: 'Expanding team to 25+ members. Launching AI division. Opening second office.',
    },
    {
        year: '2030',
        title: 'Vision',
        icon: Globe,
        desc: '1000+ clients globally. Industry leader in integrated digital solutions. IPO readiness.',
    },
];

export default function CompanyTimeline() {
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
                        Our Journey
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        From idea to industry leader
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent md:-translate-x-1/2" />

                    {timeline.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Icon Circle */}
                            <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-white dark:bg-secondary rounded-full border-4 border-primary flex items-center justify-center z-10 md:-translate-x-1/2 shadow-lg">
                                <item.icon className="w-7 h-7 text-primary" />
                            </div>

                            {/* Content Card */}
                            <div className={`ml-24 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                                }`}>
                                <div className="p-6 bg-white dark:bg-secondary rounded-xl shadow-lg">
                                    <span className="text-sm font-semibold text-primary mb-2 block">{item.year}</span>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}