import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-soft py-3' : 'bg-transparent py-5'}`}>
            <nav className="container mx-auto px-6 flex items-center justify-between" aria-label="Main Navigation">
                <Link to="/" className="flex items-center gap-2 text-xl font-poppins font-bold text-primary">
                    <Sparkles className="w-6 h-6" />
                    Creative WebSpot
                </Link>

                <ul className="hidden md:flex items-center gap-8">
                    {links.map(link => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-secondary dark:text-white'}`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden p-2 text-secondary dark:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden glass overflow-hidden"
                    >
                        {links.map(link => (
                            <li key={link.path} className="border-b border-gray-200 dark:border-gray-700">
                                <Link
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-6 py-4 hover:bg-primary/10 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </header>
    );
}