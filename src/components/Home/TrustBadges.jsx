import { motion } from 'framer-motion';
import { Award, Shield, Clock, Zap } from 'lucide-react';

const badges = [
    { icon: Award, title: 'Quality', desc: 'Quality assured processes' },
    { icon: Shield, title: '100% Secure', desc: 'Enterprise-grade security' },
    { icon: Clock, title: 'On-Time Delivery', desc: '98% on-time project completion' },
    { icon: Zap, title: 'Fast Support', desc: '24/7 dedicated support team' },
];

export default function TrustBadges() {
    return (
        <section className="py-16 bg-white dark:bg-secondary">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {badges.map((badge, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                                <badge.icon className="w-7 h-7" />
                            </div>
                            <h3 className="font-bold mb-1">{badge.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {badge.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}