import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const infoItems = [
    {
        icon: MapPin,
        title: 'Visit Our Office',
        content: '123 Tech Park, Innovation City, Tamil Nadu, India - 600001',
        color: 'bg-blue-500/10 text-blue-500'
    },
    {
        icon: Phone,
        title: 'Call Us',
        content: '+91 98765 43210',
        color: 'bg-purple-500/10 text-purple-500'
    },
    {
        icon: Mail,
        title: 'Email Us',
        content: 'creativewebspotinfotech@gmail.com',
        color: 'bg-orange-500/10 text-orange-500'
    },
    {
        icon: Clock,
        title: 'Working Hours',
        content: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 2:00 PM',
        color: 'bg-green-500/10 text-green-500'
    }
];

export default function ContactInfo() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Reach out to us through any of these channels. We're here to help!
                </p>
            </div>

            <div className="space-y-4">
                {infoItems.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                    >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                            <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">{item.content}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Social / Quick Connect */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Follow us on social media</p>
                <div className="flex gap-3">
                    {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social, i) => (
                        <a
                            key={i}
                            href="#"
                            aria-label={social}
                            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            <span className="text-xs font-bold">{social[0]}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}