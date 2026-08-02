import { motion } from 'framer-motion';

export default function MapSection() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Find Us Here</h2>
                    <p className="text-gray-600 dark:text-gray-300">Visit our office for a face-to-face consultation</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-soft border border-gray-200 dark:border-gray-700"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.397515283034!2d80.2442!3d13.0604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzM3LjQiTiA4MMKwMTQnMzkuMSJF!5e0!3m2!1sen!2sin!4v1620000000000"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Creative WebSpot Location"
                        className="w-full"
                    />

                    {/* Overlay Card */}
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 p-6 bg-white/90 dark:bg-secondary/90 backdrop-blur-lg rounded-2xl shadow-lg max-w-xs border border-white/20 dark:border-gray-700">
                        <h4 className="font-bold text-lg mb-1">Creative WebSpot</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            123 Tech Park, Innovation City,<br />Tamil Nadu, India - 600001
                        </p>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-sm font-semibold text-primary hover:underline"
                        >
                            Get Directions →
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}