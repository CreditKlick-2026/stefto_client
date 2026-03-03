import React from 'react';
import Hero from '../components/Hero';
import TimelineGraph from '../components/TimelineGraph';
import TestimonialSlider from '../components/TestimonialSlider';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Link as LinkIcon, Building2, ShieldCheck, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    const leadership = [
        { name: "Rajnish Datta", role: "Director", bio: "30+ Years of experience in Banking Operations & HR", img: "/assets/team/Rajnish.png" },
        { name: "Parvesh Paul Sood", role: "Director", bio: "30+ Years of experience in Banking & Finance Operations", img: "/assets/team/Parvesh.png" },
        { name: "Dharmendra Kalra", role: "CEO", bio: "25+ Years of experience in Banking Operations", img: "/assets/team/Dharmendra.png" },
    ];

    const currentYear = new Date().getFullYear();
    const yearsOfExcellence = currentYear - 2007;

    const partners = [
        { name: "Axis Bank", abbr: "AB", logo: "/assets/partners/3.png" },
        { name: "Citi Bank", abbr: "CB", logo: "/assets/partners/4.png" },
        { name: "Encore", abbr: "EN" },
        { name: "Hero FinCorp", abbr: "HF", logo: "/assets/partners/2.png" },
        { name: "Home Credit", abbr: "HC" },
        { name: "ICICI Bank", abbr: "IC" },
        { name: "IIFL Finance", abbr: "IL", logo: "/assets/partners/13.png" },
        { name: "Kotak Mahindra Bank", abbr: "KB", logo: "/assets/partners/11.png" },
        { name: "Money View", abbr: "MV" },
        { name: "Poonawalla Fincorp", abbr: "PW", logo: "/assets/partners/1.png" },
        { name: "SBI Card", abbr: "SB", logo: "/assets/partners/9.png" },
        { name: "True Balance", abbr: "TB" },
        { name: "Yes Bank", abbr: "YB", logo: "/assets/partners/8.png" },
        { name: "Paytm", abbr: "PT" },
        { name: "LendingKart", abbr: "LK", logo: "/assets/partners/6.png" },
        { name: "IDFC First Bank", abbr: "ID", logo: "/assets/partners/14.png" },
        { name: "AU Bank", abbr: "AU" },
        { name: "Aditya Birla Capital", abbr: "ABC" },
        { name: "Blinkit", abbr: "BK", logo: "/assets/partners/5.png" },
        { name: "HDFC Bank", abbr: "HD", logo: "/assets/partners/10.png" },
        { name: "DotPe", abbr: "DP", logo: "/assets/partners/12.png" },
        { name: "Hinduja Housing Finance", abbr: "HH", logo: "/assets/partners/7.png" }
    ];

    return (
        <main>
            {/* Section 1: Hero */}
            <Hero
                title="About Stefto – Pioneering Digital Debt Recovery"
                subtitle="From a visionary startup in 2007 to a market leader in AI-driven recovery solutions. Discover our journey, our values, and the people behind our success."
                bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Section 2: Company History */}
            <section className="section-padding bg-white">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-4xl font-bold text-stefto-blue mb-8">Company Establishment</h2>
                        <div className="space-y-6 text-gray-600">
                            <p className="leading-relaxed">
                                Founded in August 2007, <span className="font-bold text-stefto-blue">Stefto</span> has been delivering knowledge process outsourcing services to banks and financial institutions for over {yearsOfExcellence} years.
                            </p>
                            <p className="leading-relaxed">
                                Our team of over 2200 skilled professionals comes from various backgrounds, allowing us to provide top-notch inbound and outbound services. We have robust field support with our presence in more than 4 locations across 8 centres in India, with our Headquarter in Gurugram.
                            </p>
                            <p className="leading-relaxed text-sm italic border-l-4 border-stefto-red pl-6 py-2">
                                *Note: Stefto is the trade name of Incredible Management Services (India) Private Limited (CIN: U74140DL2007ULT166363).
                            </p>
                        </div>
                    </motion.div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-12">
                            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=400&auto=format&fit=crop" className="rounded-2xl shadow-lg" alt="Office" />
                            <div className="bg-stefto-blue p-8 rounded-2xl text-white text-center">
                                <p className="text-4xl font-bold">{yearsOfExcellence}+</p>
                                <p className="text-xs font-semibold uppercase tracking-widest text-blue-200">Years Excellence</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-stefto-red p-8 rounded-2xl text-white text-center">
                                <p className="text-4xl font-bold">50+</p>
                                <p className="text-xs font-semibold uppercase tracking-widest text-red-200">Global Brands</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop" className="rounded-2xl shadow-lg" alt="Meeting" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Mission & Vision */}
            <section className="section-padding bg-gray-50">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white p-12 rounded-3xl shadow-xl border-t-8 border-stefto-blue">
                        <Target size={60} className="text-stefto-blue mb-8" />
                        <h3 className="text-3xl font-bold text-stefto-blue mb-6">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To revolutionize the debt collection industry by integrating AI-driven insights with human compassion, ensuring sustainable recovery for our partners and dignity for their customers.
                        </p>
                    </div>
                    <div className="bg-white p-12 rounded-3xl shadow-xl border-t-8 border-stefto-red">
                        <Eye size={60} className="text-stefto-red mb-8" />
                        <h3 className="text-3xl font-bold text-stefto-blue mb-6">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To be the global benchmark for digital debt management, recognized for technological innovation, ethical standards, and exceptional success rates.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 4: Timeline Graph */}
            <TimelineGraph />

            {/* Section 5: Leadership Team */}
            <section className="section-padding bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-stefto-blue">The Minds Behind Stefto</h2>
                        <p className="text-gray-600 mt-4">Combining decades of industry experience with a passion for innovation.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {leadership.map((leader, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -15 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-2xl border flex flex-col items-center text-center p-8 transition-all group"
                            >
                                <div className="w-40 h-40 rounded-full overflow-hidden mb-8 border-4 border-gray-100 group-hover:border-stefto-red transition-colors">
                                    <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" />
                                </div>
                                <h4 className="text-2xl font-bold text-stefto-blue mb-2">{leader.name}</h4>
                                <p className="text-stefto-red font-bold uppercase text-xs tracking-widest mb-6">{leader.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{leader.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: Current Partners */}
            <section className="py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-stefto-blue mb-2">Trusted by 50+ Global Brands</h2>
                        <div className="w-20 h-1 bg-stefto-red mx-auto rounded-full"></div>
                    </motion.div>
                </div>
                <div className="flex animate-slide-infinite">
                    {[...partners, ...partners].map((p, i) => (
                        <div key={i} className="mx-4 flex-shrink-0 group">
                            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-stefto-blue/20 hover:-translate-y-1 transition-all duration-300 h-24">
                                {p.logo ? (
                                    <img 
                                        src={p.logo} 
                                        alt={p.name} 
                                        className="h-16 w-auto object-contain max-w-[200px]"
                                    />
                                ) : (
                                    <>
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-stefto-blue to-stefto-dark flex items-center justify-center text-white font-extrabold text-xs tracking-wider flex-shrink-0 group-hover:from-stefto-red group-hover:to-red-700 transition-all duration-500">
                                            {p.abbr}
                                        </div>
                                        <span className="text-base font-bold text-stefto-blue whitespace-nowrap group-hover:text-stefto-dark transition-colors duration-300">{p.name}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 7: Employee Testimonials */}
            <section className="pt-8 pb-20 px-4 md:px-8 lg:px-16 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 opacity-70"></div>
                <div className="container mx-auto text-center mb-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue mb-4 tracking-tight">Life at Stefto</h2>
                        <div className="w-24 h-1 bg-stefto-red mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hear from the dedicated professionals who drive our vision and build our incredible culture every single day.</p>
                    </motion.div>
                </div>
                
                <div className="relative w-full overflow-hidden py-10 z-10">
                    {/* Gradient fade edges for smooth scroll effect */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none"></div>
                    
                    <div className="flex animate-slide-infinite w-max space-x-8 px-4 py-4">
                        {[ 
                            ...[
                                { 
                                    name: "Priya Sharma", 
                                    role: "Manager - Operations", 
                                    quote: "Stefto provides an unparalleled environment for growth. The leadership trusts us to innovate, and the technology we use makes our daily work incredibly efficient. It's truly a family."
                                },
                                { 
                                    name: "Rahul Verma", 
                                    role: "DM (Deputy Manager) - Quality", 
                                    quote: "Working on Stefto's proprietary AI recovery algorithms has been the highlight of my career. The focus here isn't just on numbers, but on ethical, data-driven solutions that actually help people."
                                },
                                { 
                                    name: "Neha Gupta", 
                                    role: "AM (Assistant Manager) - Compliance", 
                                    quote: "What stands out the most is the absolute dedication to compliance. We never cut corners. Stefto genuinely cares about maintaining the highest industry standards while fostering an inclusive workplace."
                                },
                                {
                                    name: "Vikram Singh",
                                    role: "Team Leader - Operations",
                                    quote: "The tech stack at Stefto is modern and robust. Building scalable platforms that process millions of records daily is a challenge that keeps the entire team motivated and excited."
                                },
                                {
                                    name: "Paras Jethwa",
                                    role: "AVP - Operations",
                                    quote: "We don't just provide a service; we act as an extension of our client's team. The culture here is deeply rooted in empathy, for both our partners and their customers."
                                }
                            ],
                            // Duplicate array for infinite seamless looping
                            ...[
                                { 
                                    name: "Priya Sharma", 
                                    role: "Manager - Operations", 
                                    quote: "Stefto provides an unparalleled environment for growth. The leadership trusts us to innovate, and the technology we use makes our daily work incredibly efficient. It's truly a family."
                                },
                                { 
                                    name: "Rahul Verma", 
                                    role: "DM (Deputy Manager) - Quality", 
                                    quote: "Working on Stefto's proprietary AI recovery algorithms has been the highlight of my career. The focus here isn't just on numbers, but on ethical, data-driven solutions that actually help people."
                                },
                                { 
                                    name: "Neha Gupta", 
                                    role: "AM (Assistant Manager) - Compliance", 
                                    quote: "What stands out the most is the absolute dedication to compliance. We never cut corners. Stefto genuinely cares about maintaining the highest industry standards while fostering an inclusive workplace."
                                },
                                {
                                    name: "Vikram Singh",
                                    role: "Team Leader - Operations",
                                    quote: "The tech stack at Stefto is modern and robust. Building scalable platforms that process millions of records daily is a challenge that keeps the entire team motivated and excited."
                                },
                                {
                                    name: "Paras Jethwa",
                                    role: "AVP - Operations",
                                    quote: "We don't just provide a service; we act as an extension of our client's team. The culture here is deeply rooted in empathy, for both our partners and their customers."
                                }
                            ]
                        ].map((emp, i) => (
                            <div
                                key={i}
                                className="w-[450px] bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 hover:border-stefto-blue/20 transition-all duration-300 relative group flex-shrink-0 flex flex-col justify-between"
                            >
                                <div className="absolute top-8 right-8 text-stefto-blue/10 group-hover:text-stefto-red/10 transition-colors duration-300">
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                
                                <p className="text-gray-600 italic leading-relaxed text-lg mb-10 relative z-10 pt-2">"{emp.quote}"</p>
                                
                                <div className="border-t border-gray-100 pt-6 mt-auto">
                                    <h4 className="font-extrabold text-xl text-stefto-blue mb-1 uppercase tracking-wide">{emp.name}</h4>
                                    <p className="text-sm font-bold text-stefto-red tracking-wider">{emp.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 8: Global Presence */}
            <section className="section-padding bg-stefto-dark text-white">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">Strategic Pan-India Presence</h2>
                        <div className="space-y-6">
                            {[
                                { city: "Gurugram", details: "Head Office - Core Operations & Strategy Center" },
                                { city: "Moti Nagar", details: "Registered Office - Corporate Administration" },
                                { city: "Uttam Nagar", details: "Branch Office - Operations Center" },
                                { city: "Noida", details: "Branch Office - Operations Center" },
                                { city: "Pune", details: "Branch Office - Operations Center" }
                            ].map((loc, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="bg-stefto-red p-3 rounded-lg"><Building2 size={24} /></div>
                                    <div>
                                        <h4 className="text-xl font-bold">{loc.city}</h4>
                                        <p className="text-gray-400">{loc.details}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1000&auto=format&fit=crop" alt="India Map" className="rounded-3xl opacity-80" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-stefto-blue/40 backdrop-blur-md p-10 rounded-2xl border border-white/20">
                                <p className="text-6xl font-bold">8+</p>
                                <p className="text-sm font-bold uppercase tracking-widest text-center">Smart Offices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 9: Sustainability / Values */}
            <section className="section-padding bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-stefto-blue">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { t: "Integrity", d: "Upholding the highest ethical standards in every customer interaction.", icon: <ShieldCheck className="text-blue-600" size={40} /> },
                            { t: "Empathy", d: "Understanding debtor situations to create win-win recovery outcomes.", icon: <HeartPulse className="text-red-500" size={40} /> },
                            { t: "Innovation", d: "Constantly evolving our technology to stay ahead of market trends.", icon: <Award className="text-yellow-600" size={40} /> }
                        ].map((v, i) => (
                            <div key={i} className="p-10 bg-gray-50 rounded-3xl text-center hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-gray-100">
                                <div className="flex justify-center mb-6">{v.icon}</div>
                                <h4 className="text-2xl font-bold text-stefto-blue mb-4">{v.t}</h4>
                                <p className="text-gray-500 leading-relaxed">{v.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 10: CTA */}
            <section className="py-20 gradient-blue text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8">Want to know more about our impact?</h2>
                    <Link to="/contact" className="btn-primary">Connect with US </Link>
                </div>
            </section>
        </main>
    );
};

export default About;
