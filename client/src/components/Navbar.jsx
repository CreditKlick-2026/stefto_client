import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import logo from '../assets/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Why Stefto?', path: '/why-stefto' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Insights', path: '/insights' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>

            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Stefto Logo"
                        className={`transition-all duration-300 object-contain ${scrolled ? 'h-10' : 'h-14 md:h-16'}`}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`font-bold hover:text-stefto-red transition-colors ${location.pathname === link.path ? 'text-stefto-red' : scrolled ? 'text-stefto-blue' : 'text-slate-100 drop-shadow-md'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/creditklick"
                        className={`relative group px-6 py-2 rounded-full font-black text-sm flex items-center gap-2 transition-all duration-500 overflow-hidden border-2
                            ${location.pathname === '/creditklick'
                                ? 'bg-stefto-blue text-white border-stefto-blue shadow-[0_0_20px_rgba(0,51,102,0.3)]'
                                : 'bg-stefto-red text-white border-stefto-red shadow-[0_5px_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] hover:translate-y-[-2px]'}`}
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
                        <Zap size={16} fill="currentColor" className={location.pathname === '/creditklick' ? 'animate-pulse' : ''} />
                        CreditKlick
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-stefto-blue' : 'text-slate-100 drop-shadow-md'}`}
                    onClick={() => setIsOpen(true)}
                >
                    <Menu size={30} />
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
                        />
                        
                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-screen w-[70%] max-w-[260px] bg-stefto-blue/30 z-[60] lg:hidden shadow-2xl flex flex-col border-l border-white/10"
                        >
                            {/* Drawer Header */}
                            <div className="p-5 flex justify-start items-center border-b border-white/10">
                                <button 
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 -ml-2 text-white hover:text-stefto-red transition-colors"
                                >
                                    <X size={28} />
                                </button>
                            </div>

                            {/* Drawer Links */}
                            <div className="flex-1 overflow-y-auto py-4 px-5 flex flex-col gap-0">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`py-3.5 px-4 rounded-xl font-bold text-lg flex justify-between items-center transition-all ${
                                            location.pathname === link.path 
                                            ? 'bg-white/10 text-white' 
                                            : 'text-white/80 hover:bg-white/5'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                        <div className={`w-1.5 h-1.5 rounded-full bg-stefto-red transition-opacity ${location.pathname === link.path ? 'opacity-100' : 'opacity-0'}`} />
                                    </Link>
                                ))}
                                
                                <div className="mt-6 pt-6 border-t border-white/10">
                                    <Link
                                        to="/creditklick"
                                        className="relative group w-full bg-gradient-to-r from-[#FF0000] to-[#D00000] text-white p-4 rounded-2xl font-extrabold flex items-center justify-center gap-3 shadow-[0_15px_35px_-5px_rgba(255,0,0,0.3)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-5px_rgba(255,0,0,0.4)] hover:-translate-y-1 active:scale-95 border border-white/20"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {/* Premium Shimmer/Reflection */}
                                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:duration-1000 group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                                        
                                        {/* Subtle Inner Glow */}
                                        <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></span>

                                        <Zap size={20} fill="currentColor" className="relative z-10 drop-shadow-md" /> 
                                        <span className="relative z-10 tracking-wider uppercase text-sm">CreditKlick</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
