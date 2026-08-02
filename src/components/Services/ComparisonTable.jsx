import { motion } from 'framer-motion';
import { Check, X, AlertTriangle } from 'lucide-react';

const comparison = [
    { feature: 'All services under one roof', us: true, agency: false, freelancer: false },
    { feature: 'Dedicated project manager', us: true, agency: true, freelancer: false },
    { feature: '24/7 support', us: true, agency: false, freelancer: false },
    { feature: 'Transparent pricing', us: true, agency: false, freelancer: 'partial' },
    { feature: 'On-time delivery', us: true, agency: 'partial', freelancer: false },
    { feature: 'Post-delivery support', us: true, agency: false, freelancer: false },
    { feature: 'Quality guarantee', us: true, agency: 'partial', freelancer: false },
];

export default function ComparisonTable() {
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
                        Why Choose Our Services?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        See how we compare to others
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto overflow-x-auto">
                    <table className="w-full bg-white dark:bg-secondary rounded-2xl shadow-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gradient-to-r from-primary to-purple-600 text-white">
                                <th className="px-6 py-4 text-left font-semibold">Feature</th>
                                <th className="px-6 py-4 text-center font-semibold">Creative WebSpot</th>
                                <th className="px-6 py-4 text-center font-semibold opacity-80">Typical Agency</th>
                                <th className="px-6 py-4 text-center font-semibold opacity-80">Freelancer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparison.map((row, i) => (
                                <motion.tr
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{row.feature}</td>
                                    <td className="px-6 py-4 text-center">
                                        {row.us === true ? (
                                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                                        ) : row.us === 'partial' ? (
                                            <AlertTriangle className="w-5 h-5 text-yellow-500 mx-auto" />
                                        ) : (
                                            <X className="w-5 h-5 text-red-500 mx-auto" />
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {row.agency === true ? (
                                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                                        ) : row.agency === 'partial' ? (
                                            <AlertTriangle className="w-5 h-5 text-yellow-500 mx-auto" />
                                        ) : (
                                            <X className="w-5 h-5 text-red-500 mx-auto" />
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {row.freelancer === true ? (
                                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                                        ) : row.freelancer === 'partial' ? (
                                            <AlertTriangle className="w-5 h-5 text-yellow-500 mx-auto" />
                                        ) : (
                                            <X className="w-5 h-5 text-red-500 mx-auto" />
                                        )}
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}