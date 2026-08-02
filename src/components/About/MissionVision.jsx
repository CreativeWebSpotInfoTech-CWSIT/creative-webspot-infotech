import { motion } from 'framer-motion';
import { Target, Eye, Award, Zap, Shield, Heart } from 'lucide-react';

const values = [
    { icon: Award, title: 'Quality First', desc: 'We never compromise on standards' },
    { icon: Zap, title: 'Innovation Always', desc: 'Embracing latest technologies' },
    { icon: Heart, title: 'Client Success', desc: 'Your growth is our growth' },
    { icon: Shield, title: 'Transparency', desc: 'No hidden costs, no surprises' },
];

export default function MissionVision() {
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
                        What Drives Us
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Our mission and vision guide everything we do
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 bg-white dark:bg-secondary rounded-2xl shadow-lg border-l-4 border-primary"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold">Our Mission</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            To empower businesses with cutting-edge digital solutions that
                            drive real growth. We combine technical excellence with creative
                            thinking to deliver measurable results — on time, every time.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 bg-white dark:bg-secondary rounded-2xl shadow-lg border-l-4 border-accent"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                                <Eye className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold">Our Vision</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            To become the most trusted digital partner for businesses globally,
                            recognized for innovation, quality, and unwavering commitment to
                            client success. By 2030, we aim to serve 1000+ businesses across
                            15+ countries.
                        </p>
                    </motion.div>
                </div>

                {/* Core Values Preview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {values.map((value, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-6 bg-white dark:bg-secondary rounded-xl shadow-soft hover:shadow-lg transition-shadow"
                        >
                            <value.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                            <h4 className="font-semibold mb-1">{value.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}