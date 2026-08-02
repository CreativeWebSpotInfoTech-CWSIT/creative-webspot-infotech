import { motion } from 'framer-motion';
import { Code, Monitor, Camera, Video, PenTool, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: Code,
        title: 'Software Development',
        tagline: 'Code That Scales',
        color: 'from-blue-500 to-cyan-400',
        description: 'We build custom software solutions that grow with your business. From simple websites to complex ERP systems.',
        features: ['Custom Web Apps', 'ERP & CRM', 'Desktop Apps', 'API Development'],
        price: '₹25,000',
        size: 'large',
    },
    {
        icon: Monitor,
        title: 'Hardware Solutions',
        tagline: 'Infrastructure You Can Trust',
        color: 'from-purple-500 to-pink-400',
        description: 'Complete hardware solutions for your office, school, or business. From sales to installation to support.',
        features: ['Computer Sales', 'Networking', 'CCTV', 'AMC Support'],
        price: '₹5,000',
        size: 'medium',
    },
    {
        icon: Camera,
        title: 'Photography',
        tagline: 'Moments That Matter',
        color: 'from-orange-500 to-red-400',
        description: 'Professional photography that tells your brand\'s story. Product shots, events, or stunning drone footage.',
        features: ['Corporate', 'Product', 'Events', 'Drone'],
        price: '₹8,000',
        size: 'small',
    },
    {
        icon: Video,
        title: 'Video Production',
        tagline: 'Stories That Move',
        color: 'from-green-500 to-emerald-400',
        description: 'Cinematic video production that engages, informs, and converts. From brand anthems to wedding films.',
        features: ['Ads', 'Corporate', 'Weddings', 'Motion Graphics'],
        price: '15,000',
        size: 'medium',
    },
    {
        icon: PenTool,
        title: 'Content Writing',
        tagline: 'Words That Convert',
        color: 'from-yellow-500 to-orange-400',
        description: 'SEO-optimized, conversion-focused content that ranks and resonates with your target audience.',
        features: ['SEO Content', 'Blogs', 'Copywriting', 'Social Media'],
        price: '₹1,500',
        size: 'small',
    },
];

export default function ServiceCards() {
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
                        Explore Each Service
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your needs
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] max-w-6xl mx-auto">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.color} p-8 cursor-pointer hover:scale-105 transition-all duration-300 ${service.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                                    service.size === 'medium' ? 'md:col-span-2' : 'md:col-span-1'
                                }`}
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                            <div className="relative z-10 h-full flex flex-col justify-between text-white">
                                <div>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                            <service.icon className="w-7 h-7" />
                                        </div>
                                        <span className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                            From {service.price}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                    <p className="text-white/90 text-sm mb-4">{service.tagline}</p>
                                    <p className="text-white/80 text-sm leading-relaxed mb-4">{service.description}</p>

                                    <ul className="space-y-1 mb-6">
                                        {service.features.map((feature, j) => (
                                            <li key={j} className="text-sm text-white/90 flex items-center gap-2">
                                                <span className="w-1 h-1 bg-white rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link to="/contact" className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
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