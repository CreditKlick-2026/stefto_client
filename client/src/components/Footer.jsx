import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronUp } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-stefto-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-12">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <img src={logo} alt="Stefto Logo" className="h-16 object-contain" />
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Stefto is a leading AI-powered digital debt collection and customer engagement brand, redefining the recovery landscape with technology and empathy.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/steftocom/" target="_blank" rel="noopener noreferrer" className="p-2 bg-stefto-blue rounded-full hover:bg-stefto-red transition-colors"><Facebook size={18} /></a>
                            <a href="https://www.instagram.com/stefto__/" target="_blank" rel="noopener noreferrer" className="p-2 bg-stefto-blue rounded-full hover:bg-stefto-red transition-colors"><Instagram size={18} /></a>
                            <a href="https://www.linkedin.com/company/stefto/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="p-2 bg-stefto-blue rounded-full hover:bg-stefto-red transition-colors"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-l-4 border-stefto-red pl-3">Quick Links</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Stefto</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                            <li><Link to="/insights" className="hover:text-white transition-colors">Insights & Blogs</Link></li>
                            <li><Link to="/careers" className="hover:text-white transition-colors">Work With Us</Link></li>
                            <li><Link to="/why-stefto" className="hover:text-white transition-colors">Why Choose Stefto?</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-l-4 border-stefto-red pl-3">Our Services</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>Debt Collection</li>
                            <li>Risk Data Analytics</li>
                            <li>Customer Management</li>
                            <li>Digital Solutions (CreditKlick)</li>
                            <li>Process Management</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-l-4 border-stefto-red pl-3">Get In Touch</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-stefto-red flex-shrink-0" />
                                <span>Plot No. 112, Udyog Vihar, Phase-1, Gurugram, Haryana-122016</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-stefto-red" />
                                <span>+91 8800-101-102</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-stefto-red" />
                                <span>info@stefto.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-4 pt-1 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Stefto. All Rights Reserved.</p>
                    <div className="flex flex-wrap justify-center md:justify-end items-center gap-6">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
                        <button
                            onClick={scrollToTop}
                            className="bg-stefto-red p-3 rounded-full hover:bg-stefto-blue transition-colors shadow-lg ml-2"
                            title="Back to Top"
                        >
                            <ChevronUp size={24} color="white" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
