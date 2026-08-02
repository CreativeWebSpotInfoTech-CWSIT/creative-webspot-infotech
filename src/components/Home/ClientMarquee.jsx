import { motion } from 'framer-motion';

const clients = [
    { name: 'Our Happy Clients', logo: '🏢' },
    { name: 'Businesses We\'ve Worked With', logo: '🔬' },
    { name: 'Our Valued Clients', logo: '💻' },
    { name: 'Our Client Network', logo: '☁️' },
    { name: 'Trusted Partnerships', logo: '📊' },
    { name: 'Trusted Partnerships', logo: '⚡' },
    { name: 'Grow Digitally', logo: '🌐' },
    { name: 'Modern Businesses', logo: '📱' },
];

export default function ClientMarquee() {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-6">
                <p className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-wider">
                    Trusted by CWSIT Companies
                </p>

                <div className="relative overflow-hidden">
                    {/* Fade Edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-900/50 to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-900/50 to-transparent z-10" />

                    {/* Marquee Row 1 */}
                    <div className="flex gap-16 mb-8">
                        <motion.div
                            animate={{ x: [0, -1920] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="flex gap-16 flex-shrink-0"
                        >
                            {[...clients, ...clients].map((client, i) => (
                                <div key={i} className="flex items-center gap-3 text-2xl font-bold text-gray-400 hover:text-primary transition-colors">
                                    <span className="text-4xl">{client.logo}</span>
                                    <span className="whitespace-nowrap">{client.name}</span>
                                </div>
                            ))}
                        </motion.div>
                        <motion.div
                            animate={{ x: [0, -1920] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="flex gap-16 flex-shrink-0"
                        >
                            {[...clients, ...clients].map((client, i) => (
                                <div key={i} className="flex items-center gap-3 text-2xl font-bold text-gray-400 hover:text-primary transition-colors">
                                    <span className="text-4xl">{client.logo}</span>
                                    <span className="whitespace-nowrap">{client.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}