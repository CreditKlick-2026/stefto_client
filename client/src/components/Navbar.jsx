import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Zap } from 'lucide-react';
import logo from '../assets/logo.png';

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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>

            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Stefto Logo"
                        className={`transition-all duration-300 object-contain ${scrolled ? 'h-10' : 'h-16'}`}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`font-semibold hover:text-stefto-red transition-colors ${location.pathname === link.path ? 'text-stefto-red' : scrolled ? 'text-stefto-blue' : 'text-slate-100 drop-shadow-md'}`}
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
                    className={`lg:hidden ${scrolled ? 'text-stefto-blue' : 'text-slate-100 drop-shadow-md'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-xl py-6 flex flex-col items-center gap-6 border-t">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="text-stefto-blue font-bold text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/creditklick"
                        className="bg-stefto-red text-white px-8 py-3 rounded-xl font-black flex items-center gap-3 shadow-lg group relative overflow-hidden"
                        onClick={() => setIsOpen(false)}
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
                        <Zap size={18} fill="currentColor" /> CreditKlick
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
