import React from 'react';
import Hero from '../components/Hero';
import FAQAccordion from '../components/FAQAccordion';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Star, Users, Award, TrendingUp, ExternalLink, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyStefto = () => {
    const pressReleases = [
        {
            title: "IMS Introduces Credit-Refine: A Revolutionary Product by CreditKlick",
            source: "Lokmat Times",
            link: "https://www.lokmattimes.com/business/ims-introduces-credit-refine-a-revolutionary-product-by-creditklick/",
            date: "Recent"
        },
        {
            title: "Credit Repair and CIBIL Score Improvement Company Near Me",
            source: "OpenPR",
            link: "https://www.openpr.com/news/3214656/credit-repair-and-cibil-score-improvement-company-near-me",
            date: "Recent"
        },
        {
            title: "IMS Pvt Ltd Launches Subsidiary CreditKlick to Revolutionize Credit Industry",
            source: "EIN Presswire",
            link: "https://www.einpresswire.com/article/622077441/incredible-management-service-pvt-ltd-launches-new-subsidiary-creditklick-to-revolutionize-the-credit-industry",
            date: "Recent"
        },
        {
            title: "Stefto & CreditKlick: Professional Ecosystem Overview",
            source: "SlideShare",
            link: "https://www.slideshare.net/slideshow/creditklick-profile/259542530",
            date: "Recent"
        }
    ];

    return (
        <main>
            {/* Section 1: Hero */}
            <Hero
                title="Why Choose Stefto?"
                subtitle="Discover how our AI-driven approach, ethical collection practices, and technological innovation make us India's most trusted recovery partner."
                bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Section 2: Core Reasons */}
            <section className="section-padding bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-stefto-blue uppercase tracking-tight">The Stefto <span className="text-stefto-red">Advantage</span></h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">We combine human empathy with machine precision to deliver results that traditional agencies simply cannot match.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { t: "AI-Powered Strategy", i: <Zap />, d: "We don't call randomly. Our AI predicts the best time and channel to reach each debtor, increasing resolution rates by 35%." },
                            { t: "Ethical & Empathetic", i: <HeartIcon />, d: "We protect your brand reputation. Our collection agents are trained in empathetic negotiation, not harassment." },
                            { t: "ISO Certified Security", i: <ShieldCheck />, d: "Your data is safe with us. We follow global standards of data privacy and are fully ISO 27001 compliant." },
                            { t: "Real-Time Transparency", i: <TrendingUp />, d: "Access live dashboards to see the status of every single account. We believe in 100% transparency with our partners." },
                            { t: "Pan-India Presence", i: <Users />, d: "With offices in major hubs like Gurugram, Delhi, Noida, and Pune, we provide local support on a national scale." },
                            { t: "Industry Leadership", i: <Award />, d: "Recognized by leading news outlets and industry experts for our innovative approach to debt management." }
                        ].map((reason, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                key={i}
                                className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all group"
                            >
                                <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-stefto-red mb-8 group-hover:bg-stefto-red group-hover:text-white transition-colors">
                                    {reason.i}
                                </div>
                                <h4 className="text-2xl font-bold text-stefto-blue mb-4">{reason.t}</h4>
                                <p className="text-gray-500 leading-relaxed">{reason.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Press Releases & Media Recognition */}
            <section className="section-padding bg-stefto-blue text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-stefto-red/10 -skew-x-12 translate-x-1/2"></div>
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">In The <span className="text-stefto-red">News</span></h2>
                            <p className="text-xl text-blue-100 font-light">Our innovations and market impact are consistently recognized by leading national and international media platforms.</p>
                        </div>
                        <div className="bg-white/10 px-6 py-3 rounded-full border border-white/20 backdrop-blur-md">
                            <span className="text-sm font-bold tracking-widest uppercase">Media Presence</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {pressReleases.map((pr, i) => (
                            <motion.a
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                key={i}
                                href={pr.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:shadow-2xl hover:shadow-stefto-blue/20 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-xs font-black text-stefto-red uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full">{pr.source}</span>
                                        <ExternalLink size={20} className="text-white/30 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold leading-tight group-hover:text-stefto-red transition-colors">{pr.title}</h3>
                                </div>
                                <div className="mt-8 flex items-center gap-2 text-blue-200 text-sm font-semibold">
                                    Read Full Press Release <ArrowRightIcon size={16} className="group-hover:translate-x-2 transition-transform" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: General Queries (FAQ Integrated) */}
            <section className="section-padding bg-gray-50">
                <div className="container mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-stefto-blue uppercase tracking-tight">Everything You Need To <span className="text-stefto-red">Know</span></h2>
                        <div className="w-24 h-1 bg-stefto-red mx-auto mt-4 mb-4 rounded-full"></div>
                        <p className="text-gray-500 mt-2">Find answers to the most common questions about working with Stefto.</p>
                    </motion.div>
                    <div className="max-w-4xl mx-auto">
                        <FAQAccordion />
                    </div>
                </div>
            </section>

            {/* Section 5: Still Have Questions? */}
            <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-stefto-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-stefto-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
                
                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-block p-5 bg-white rounded-full shadow-xl mb-8 border border-gray-100"
                    >
                        <MessageCircle className="text-stefto-red" size={36} />
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-stefto-blue mb-6 tracking-tight"
                    >
                        Still caught up?
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-600 mb-12 italic leading-relaxed"
                    >
                        "We believe the best way to understand Stefto is to experience it. Let's schedule a call to discuss how we can solve your specific recovery challenges."
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        <Link to="/contact" className="btn-primary px-10 shadow-lg hover:shadow-stefto-red/30 hover:-translate-y-1 transition-all duration-300">Connect With US</Link>
                        <Link to="/about" className="btn-secondary shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">Learn Our History</Link>
                    </motion.div>
                </div>
            </section>

            {/* Section 6: Footer CTA */}
            <section className="py-24 bg-stefto-dark text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-stefto-dark via-stefto-blue/20 to-stefto-dark z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-300"
                    >
                        Driven by Impact. Proven by Results.
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-90"
                    >
                        <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
                            <span className="text-4xl md:text-5xl font-black text-stefto-red">100%</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest mt-2 text-gray-400">Compliance</span>
                        </div>
                        <div className="hidden md:block w-px h-16 bg-white/20"></div>
                        <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
                            <span className="text-4xl md:text-5xl font-black text-white">24/7</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest mt-2 text-gray-400">Support</span>
                        </div>
                        <div className="hidden md:block w-px h-16 bg-white/20"></div>
                        <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
                            <span className="text-4xl md:text-5xl font-black text-blue-400">AI V5.0</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest mt-2 text-gray-400">Technology</span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

// Simple icons for the core reasons
const HeartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
);

const ArrowRightIcon = ({ size, className }) => (
    <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

export default WhyStefto;
