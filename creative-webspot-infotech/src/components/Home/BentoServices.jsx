import { motion } from 'framer-motion';
import { Code, Monitor, Camera, Video, Brain, PenTool, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    { icon: Code, title: 'Software Development', desc: 'Custom web apps, ERP, CRM solutions', color: 'from-blue-500 to-cyan-400', size: 'large' },
    { icon: Camera, title: 'Photography', desc: 'Corporate, product, drone shots', color: 'from-orange-500 to-red-400', size: 'small' },
    { icon: Video, title: 'Video Production', desc: 'Ads, corporate, wedding videos', color: 'from-green-500 to-emerald-400', size: 'medium' },
    { icon: Monitor, title: 'Hardware', desc: 'Sales, networking, CCTV, AMC', color: 'from-indigo-500 to-blue-400', size: 'medium' },
    { icon: PenTool, title: 'Content Writing', desc: 'SEO, blogs, social media', color: 'from-yellow-500 to-orange-400', size: 'small' },
];

export default function BentoServices() {
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
                        Our Premium Services
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        End-to-end digital solutions tailored to elevate your business
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.color} p-8 cursor-pointer hover:scale-105 transition-transform duration-300 ${service.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                                    service.size === 'medium' ? 'md:col-span-2' : 'md:col-span-1'
                                }`}
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                            <div className="relative z-10 h-full flex flex-col justify-between text-white">
                                <div>
                                    <service.icon className="w-12 h-12 mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                    <p className="text-white/80 text-sm">{service.desc}</p>
                                </div>

                                <Link to="/services" className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}