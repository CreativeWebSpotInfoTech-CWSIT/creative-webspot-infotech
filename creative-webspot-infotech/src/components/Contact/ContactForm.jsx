import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const ACCESS_KEY = "e022f730-6ab0-452b-9581-0f683faaeb7a";

const services = [
    'Software Development',
    'Hardware Solutions',
    'Photography',
    'Video Production',
    'Content Writing',
    'Other'
];

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [result, setResult] = useState("");

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setResult("");

        // Prepare data for Web3Forms
        const formData = new FormData();
        formData.append("access_key", ACCESS_KEY);
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("service", form.service);
        formData.append("message", form.message);
        formData.append("subject", `New Contact Request: ${form.service} - ${form.name}`); // Custom Subject

        // Honeypot to prevent spam bots (Web3Forms feature)
        formData.append("botcheck", "");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setResult("Message sent successfully! We'll contact you soon.");
                setForm({ name: '', email: '', phone: '', service: '', message: '' }); // Clear form
            } else {
                setStatus('error');
                setResult(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus('error');
            setResult("Network error. Please check your connection and try again.");
        }

        // Auto-reset status after 5 seconds
        setTimeout(() => {
            setStatus('idle');
            setResult("");
        }, 5000);
    };

    return (
        <div className="p-8 md:p-10 bg-white dark:bg-secondary rounded-3xl shadow-soft border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
                Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot Field (Hidden from humans, catches bots) */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Full Name</label>
                        <input
                            required name="name" value={form.name} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
                        <input
                            required type="email" name="email" value={form.email} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="john@company.com"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Phone Number</label>
                        <input
                            type="tel" name="phone" value={form.phone} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="+91 98765 43210"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Service Interested In</label>
                        <select
                            required name="service" value={form.service} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        >
                            <option value="">Select a service</option>
                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Your Message</label>
                    <textarea
                        required name="message" value={form.message} onChange={handleChange} rows="4"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your project..."
                    />
                </div>

                {/* Status Messages & Submit Button */}
                <AnimatePresence mode="wait">
                    {status === 'success' ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center justify-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl font-medium border border-green-200 dark:border-green-800"
                        >
                            <CheckCircle className="w-5 h-5" /> {result}
                        </motion.div>
                    ) : status === 'error' ? (
                        <motion.div
                            key="error"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center justify-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl font-medium border border-red-200 dark:border-red-800"
                        >
                            <AlertCircle className="w-5 h-5" /> {result}
                        </motion.div>
                    ) : (
                        <motion.button
                            key="button"
                            type="submit"
                            disabled={status === 'loading'}
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="w-full py-4 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                            {status === 'loading' ? (
                                <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                            ) : (
                                <>Send Message <Send className="w-4 h-4" /></>
                            )}
                        </motion.button>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
}