import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Monitor, Camera, Video, PenTool, Clock, Users, Zap } from 'lucide-react';

const services = [
    {
        id: 'software',
        title: 'Software Development',
        icon: Code,
        color: 'from-blue-500 to-cyan-400',
        tagline: 'Code That Scales',
        details: {
            what: ['Custom Web Applications', 'Business Websites', 'ERP Solutions', 'CRM Solutions', 'Desktop Applications'],
            tech: 'React, Node.js, HTML, CSS, JavaScript, MySQL, SQL',
            perfect: 'Startups, SMEs, Enterprises needing custom digital solutions',
            timeline: '4-12 weeks depending on complexity',
        },
    },
    {
        id: 'hardware',
        title: 'Hardware Solutions',
        icon: Monitor,
        color: 'from-purple-500 to-pink-400',
        tagline: 'Infrastructure You Can Trust',
        details: {
            what: ['Arduino Projects', 'Raspberry Pi Projects', 'PCB Design Projects', 'Embedded Systems', 'Biometric Systems', 'Sensor Based Projects', 'AMC Support'],
            tech: 'IoT, Microcontrollers, Electronics, Cisco, Embedded Systems,',
            perfect: 'Offices, Schools, Hospitals, Retail stores',
            timeline: '1-3 days for setup, ongoing AMC',
        },
    },
    {
        id: 'photography Editing',
        title: 'Photography Editing',
        icon: Camera,
        color: 'from-orange-500 to-red-400',
        tagline: 'Moments That Matter',
        details: {
            what: ['Corporate Photography Editing', 'Product Photography Editing', 'Event Photography Editing', 'Portrait Photography Editing'],
            tech: 'Adobe Photoshop, Lightroom, Capture One',
            perfect: 'Brands, E-commerce, Events, Real estate',
            timeline: '1-2 days shoot, 5-7 days delivery',
        },
    },
    {
        id: 'video',
        title: 'Video Production',
        icon: Video,
        color: 'from-green-500 to-emerald-400',
        tagline: 'Stories That Move',
        details: {
            what: ['Advertisement Videos', 'Corporate Videos', 'Wedding Videos', 'YouTube Editing', 'Motion Graphics'],
            tech: 'Premiere Pro, After Effects, DaVinci Resolve',
            perfect: 'Brands, Agencies, YouTubers, Events',
            timeline: '3-14 days depending on length & complexity',
        },
    },
    {
        id: 'content',
        title: 'Content Writing',
        icon: PenTool,
        color: 'from-yellow-500 to-orange-400',
        tagline: 'Words That Convert',
        details: {
            what: ['SEO Content', 'Blog Writing', 'Copywriting', 'Website Content', 'Social Media Content'],
            tech: 'SEO-optimized, conversion-focused, brand-aligned',
            perfect: 'Businesses, Blogs, E-commerce, Startups',
            timeline: '1-3 days per piece, bulk packages available',
        },
    },
];

export default function InteractiveSelector() {
    const [activeService, setActiveService] = useState(services[0]);

    return (
        <section id="services" className="py-20 bg-white dark:bg-secondary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
                        Our Services
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Click on any service to explore what we offer
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
                    {/* Left - Tabs */}
                    <div className="lg:col-span-4 space-y-3">
                        {services.map((service) => (
                            <motion.button
                                key={service.id}
                                onClick={() => setActiveService(service)}
                                className={`w-full p-4 rounded-xl flex items-center gap-4 transition-all duration-300 ${activeService.id === service.id
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${activeService.id === service.id ? 'bg-white/20' : `bg-gradient-to-br ${service.color} text-white`
                                    }`}>
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold">{service.title}</h3>
                                    <p className={`text-sm ${activeService.id === service.id ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                                        {service.tagline}
                                    </p>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Right - Preview */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700"
                            >
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${activeService.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
                                    <activeService.icon className="w-8 h-8" />
                                </div>

                                <h3 className="text-3xl font-bold mb-2">{activeService.title}</h3>
                                <p className="text-lg text-primary font-semibold mb-8">{activeService.tagline}</p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                                            <Zap className="w-5 h-5 text-primary" /> What We Offer
                                        </h4>
                                        <ul className="space-y-2">
                                            {activeService.details.what.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span className="text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                                <Users className="w-5 h-5 text-primary" /> Technologies
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">{activeService.details.tech}</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                                <Users className="w-5 h-5 text-primary" /> Perfect For
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">{activeService.details.perfect}</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                                <Clock className="w-5 h-5 text-primary" /> Timeline
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">{activeService.details.timeline}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}