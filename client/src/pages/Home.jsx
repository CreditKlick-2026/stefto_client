import React from 'react';
import Hero from '../components/Hero';
import TestimonialSlider from '../components/TestimonialSlider';
import { motion } from 'framer-motion';
import { Search, Shield, Zap, TrendingUp, Users, Globe, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            {/* Section 1: Hero */}
            <Hero
                title="Futuristic Debt Management services for modern market place"
                subtitle="Leveraging AI and data-driven insights to humanize the debt recovery process while maximizing returns for India's leading financial institutions."
                bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop"
                ctaText="Contact Us"
                ctaLink="/contact"
                height="h-screen"
            />

            {/* Section 2: Welcome to Stefto */}
            <section className="section-padding bg-white">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h4 className="text-stefto-red font-bold uppercase tracking-widest mb-2">Since 2007</h4>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue mb-6 leading-tight">Empowering Recovery with Technology</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Stefto is more than just a collection brand; we are a technology-first ecosystem designed to solve the complexities of modern-day debt recovery. With a focus on AI, data analytics, and ethical practices, we help FIs recover dues faster while maintaining customer relationships.
                        </p>
                        <div className="flex flex-col gap-4 mb-8">
                            <div className="flex items-center gap-4">
                                <span className="bg-blue-100 p-3 rounded-full text-stefto-blue"><Shield /></span>
                                <span className="font-semibold text-gray-700">100% Compliant & Secure Data Management</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="bg-red-100 p-3 rounded-full text-stefto-red"><TrendingUp /></span>
                                <span className="font-semibold text-gray-700">Proprietary AI Recovery Algorithms</span>
                            </div>
                        </div>
                        <Link to="/about" className="btn-primary">Learn Our Story</Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        {/* Decorative Background Element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-stefto-red/5 rounded-full blur-3xl -z-10"></div>

                        <div className="grid grid-cols-2 gap-6 relative z-10">
                            <div className="p-8 bg-white rounded-3xl shadow-xl border-l-[12px] border-stefto-red transform hover:-translate-y-2 transition-transform duration-300">
                                <p className="text-4xl font-black text-stefto-blue">98%</p>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Compliance Score</p>
                                <p className="text-[10px] text-gray-400 mt-4 leading-tight">Adhering to strict RBI and industry guidelines for every interaction.</p>
                            </div>

                            <div className="p-8 bg-stefto-blue rounded-3xl shadow-xl text-white transform translate-y-8 hover:-translate-y-2 transition-transform duration-300">
                                <Zap className="text-stefto-red mb-4" size={32} />
                                <p className="text-2xl font-bold">AI V5.0</p>
                                <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mt-1">Tech Stack</p>
                                <p className="text-xs text-blue-100 mt-4 leading-tight">Advanced proprietary algorithms optimized for 2026 debt trends.</p>
                            </div>

                            <div className="p-8 bg-gray-900 rounded-3xl shadow-xl text-white hover:-translate-y-2 transition-transform duration-300">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-[10px] font-bold uppercase tracking-tighter">Live Support</span>
                                </div>
                                <p className="text-2xl font-bold">24/7</p>
                                <p className="text-xs text-gray-400 mt-2">Operational availability across all time zones in India.</p>
                            </div>

                            <div className="p-8 bg-white rounded-3xl shadow-xl border-t-8 border-stefto-blue transform translate-y-8 hover:-translate-y-2 transition-transform duration-300">
                                <Globe className="text-stefto-red mb-4" size={32} />
                                <p className="text-2xl font-bold">8+</p>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Centers</p>
                                <p className="text-xs text-gray-500 mt-4 leading-tight">Strategic PAN-India presence ensuring local recovery expertise.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 3: Organization Overview (Stats) */}
            <section className="py-16 bg-stefto-blue text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-transparent"></div>
                <div className="container mx-auto px-4 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
                    {[
                        { number: "2200+", label: "Employees" },
                        { number: "8+", label: "Offices Pan India" },
                        { number: "50+", label: "Premium Clients" },
                        { number: "12+", label: "Languages" }
                    ].map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1, type: "spring", bounce: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-5xl font-extrabold mb-2 drop-shadow-lg">{stat.number}</p>
                            <p className="text-blue-200 font-semibold tracking-wide uppercase text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Section 4: AI-Enhanced Services */}
            <section className="section-padding bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-stefto-blue/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto text-center mb-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue mb-4 tracking-tight">AI-Enhanced Recovery Services</h2>
                        <div className="w-24 h-1 bg-stefto-red mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">We blend machine learning with human expertise to deliver results that traditional methods can't match.</p>
                    </motion.div>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Predictive Analytics", icon: <TrendingUp size={40} />, desc: "Using historical data to predict debtor behavior and payment probability." },
                        { title: "Digital Outreach", icon: <Globe size={40} />, desc: "Automated Omni-channel communication across VoiceBots, SMS, WhatsApp, and ChatBots." },
                        { title: "Legal Compliance", icon: <Shield size={40} />, desc: "Automated legal processing and tracking for high-value recoveries." }
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white p-10 rounded-3xl shadow-xl shadow-stefto-blue/5 border border-gray-100 hover:border-stefto-blue/20 transition-all group"
                        >
                            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-stefto-blue mb-8 group-hover:bg-stefto-blue group-hover:text-white transition-colors duration-300">
                                {s.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-stefto-blue mb-4">{s.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Section 5: Industries Served (Table) */}
            <section className="section-padding bg-white">
                <div className="container mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue mb-4 tracking-tight">Our Core Industry Verticals</h2>
                        <div className="w-24 h-1 bg-stefto-red mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Strategic recovery solutions tailored to the unique demands of diverse industry sectors.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {[
                            {
                                title: "Banking & NBFC",
                                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
                                specialties: "Credit Cards, PL, Housing Loans",
                                tech: "CreditKlick, Voice AI"
                            },
                            {
                                title: "Fintech",
                                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
                                specialties: "Digital Lending, Buy Now Pay Later",
                                tech: "API Integration, Real-time Dashboard"
                            },
                            {
                                title: "Telecom",
                                image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
                                specialties: "Postpaid & Broadband dues",
                                tech: "Omni-channel Bots"
                            }
                        ].map((industry, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative overflow-hidden rounded-3xl shadow-2xl h-[400px] cursor-pointer"
                            >
                                <img src={industry.image} alt={industry.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2" />
                                <div className="absolute inset-0 bg-gradient-to-t from-stefto-dark/95 via-stefto-blue/40 to-black/10 transition-opacity duration-500 group-hover:opacity-90"></div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-24 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h3 className="text-3xl font-extrabold text-white mb-4 drop-shadow-md">{industry.title}</h3>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-2">
                                        <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20">
                                            <p className="text-gray-200 text-sm mb-3"><strong className="text-white block mb-1">Specialties:</strong> {industry.specialties}</p>
                                            <p className="text-stefto-red text-xs font-bold tracking-wider uppercase"><strong className="text-white block mb-1">Tech:</strong> {industry.tech}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: Solutions (Cards) */}
            <section className="section-padding bg-stefto-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-stefto-dark via-stefto-blue/20 to-stefto-dark z-0"></div>
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Innovative Solutions</h2>
                            <div className="w-16 h-1 bg-stefto-red mb-6 rounded-full"></div>
                            <p className="text-xl text-gray-300">Our suite of products is designed to automate the entire recovery lifecycle.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Link to="/services#collect" className="btn-primary border-white/20 shadow-xl hover:shadow-stefto-red/20">View All Solutions</Link>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {['Debt Collection', 'Risk Analytics', 'Customer Engagement', 'CreditKlick'].map((sol, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:border-stefto-red/30 group backdrop-blur-sm"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-stefto-red to-red-600 flex items-center justify-center rounded-xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                                    <Zap size={24} className="text-white drop-shadow-md" />
                                </div>
                                <h4 className="text-xl font-bold mb-4">{sol}</h4>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed">Advanced workflows and AI scripts to optimize {sol.toLowerCase()} performance.</p>
                                <Link to="/services" className="text-stefto-red flex items-center gap-2 font-bold group-hover:gap-4 transition-all uppercase text-sm tracking-widest">
                                    Explore <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 7: Why Choose Us */}
            <section className="section-padding bg-gray-50">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-tr from-stefto-blue/20 to-stefto-red/10 rounded-[2.5rem] blur-xl -z-10"></div>
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="BPO Team" className="rounded-3xl shadow-2xl border border-white" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue mb-4 tracking-tight">Why Trust Stefto?</h2>
                        <div className="w-16 h-1 bg-stefto-red mb-10 rounded-full"></div>
                        <ul className="space-y-8">
                            {[
                                { t: "Unmatched Expertise", d: "Since 2007, we've handled millions of records with high success rates." },
                                { t: "Advanced Tech Stack", d: "Proprietary AI models and real-time analytics platforms." },
                                { t: "Ethical Collection", d: "Maintaining brand reputation while recovering dues." },
                                { t: "Pan-India Presence", d: "Strategically located offices for local expertise." }
                            ].map((item, i) => (
                                <motion.li 
                                    key={i} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.15 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6 group hover:translate-x-2 transition-transform duration-300"
                                >
                                    <div className="w-14 h-14 bg-white border border-gray-100 shadow-md text-stefto-blue rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0 group-hover:bg-stefto-blue group-hover:text-white transition-colors duration-300">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-extrabold text-stefto-blue mb-2">{item.t}</h4>
                                        <p className="text-gray-500 leading-relaxed text-lg">{item.d}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Section 8: Testimonials */}
            <section className="py-10 md:py-16 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-50"></div>
                <div className="container mx-auto text-center mb-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue mb-4 tracking-tight">What Our Clients Say</h2>
                        <div className="w-24 h-1 bg-stefto-red mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Voices of trust from India's biggest banks and financial institutions.</p>
                    </motion.div>
                </div>
                <TestimonialSlider />
            </section>



            {/* Section 10: CTA / Contact Form Teaser */}
            {/* <section className="section-padding gradient-blue text-white">
                <div className="container mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to Transform Your Recovery Process?</h2>
                    <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                        Join 50+ leading brands who have optimized their collection rates with Stefto's AI-driven solutions.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/contact" className="btn-primary border-white">Get a Free Consultation</Link>
                        <Link to="/services" className="btn-secondary">Explore Our Technology</Link>
                    </div>
                </div>
            </section> */}
        </main>
    );
};

export default Home;
