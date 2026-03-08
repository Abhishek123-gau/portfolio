import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data/content';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-white/10' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-display font-bold gradient-text"
                >
                    AK.AI
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item, i) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-sm font-medium text-muted-foreground hover:text-accent-blue transition-colors"
                        >
                            {item.name}
                        </motion.a>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-4 pl-4 border-l border-white/10"
                    >
                        <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors"><Github size={18} /></a>
                        <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors"><Linkedin size={18} /></a>
                    </motion.div>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 p-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-muted-foreground hover:text-white transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
