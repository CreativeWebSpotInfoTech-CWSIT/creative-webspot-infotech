import { motion } from 'framer-motion';
import { Briefcase, Users, Star, TrendingUp } from 'lucide-react';

const metrics = [
    { icon: Briefcase, value: '50+', label: 'Projects Delivered', color: 'text-blue-500' },
    { icon: Users, value: '100+', label: 'Happy Clients', color: 'text-purple-500' },
    { icon: Star, value: '98%', label: 'Success Rate', color: 'text-orange-500' },
    { icon: TrendingUp, value: '500%', label: 'Average ROI', color: 'text-green-500' },
];

export default function SuccessMetrics() {
    return (
        <section className="py-20 bg-gradient-to-br from-secondary to-gray-900 text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">Impact We've Created</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Numbers that reflect our commitment to excellence</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                        >
                            <metric.icon className={`w-10 h-10 ${metric.color} mx-auto mb-4`} />
                            <div className="text-4xl md:text-5xl font-poppins font-bold mb-2">{metric.value}</div>
                            <p className="text-gray-400 text-sm">{metric.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}