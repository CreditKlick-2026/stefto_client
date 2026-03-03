import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Database, Users, Monitor, BarChart, Settings, Smartphone, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" }
    })
};

const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" }
    })
};

const Services = () => {
    const { hash } = useLocation();

    React.useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);
    const services = [
        {
            id: "collect",
            title: "Debt Collection",
            desc: "End-to-end recovery solutions for soft and hard collections using AI-driven prioritisation.",
            features: ["Pre-emptive Engagement", "Field Collection Support", "Legal Recovery Pathways", "FullStack"],
            img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop",
            icon: <Database />
        },
        {
            id: "analytics",
            title: "Risk Data Analytics",
            desc: "Transforming raw data into actionable insights for better credit decisioning and risk mitigation.",
            features: ["Nano Segmentation", "Predictive Scoring", "Portfolio Health Monitoring", "Fraud Detection"],
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
            icon: <BarChart />
        },
        {
            id: "customer",
            title: "Customer Management",
            desc: "Maintaining brand loyalty while ensuring on-time payments through empathetic engagement.",
            features: ["Inbound/Outbound Support", "Churn Prediction", "NPS Tracking", "Omichannel Interaction"],
            img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
            icon: <Users />
        }
    ];

    return (
        <main>
            {/* Section 1: Hero */}
            <Hero
                title="Smarter Solutions for Financial Recovery"
                subtitle="From predictive analytics to digital first outreach, we provide the technology and expertise to optimize every stage of the debt recovery lifecycle."
                bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
            />

            {/* Section 2: Service Grid Overview */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70"></div>
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue mb-4 tracking-tight">Our Core Services</h2>
                        <div className="w-24 h-1 bg-stefto-red mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive recovery solutions powered by AI to maximize your collections.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="group p-10 bg-gray-50 rounded-3xl hover:bg-stefto-blue hover:text-white transition-all duration-500 shadow-sm border border-gray-100 hover:shadow-2xl"
                            >
                                <div className="text-stefto-red mb-6 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                    {React.cloneElement(s.icon, { size: 48 })}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                                <p className="text-gray-500 group-hover:text-gray-200 mb-8 leading-relaxed">{s.desc}</p>
                                <ul className="space-y-3 mb-8">
                                    {s.features.map((f, fi) => (
                                        <li key={fi} className="flex items-center gap-3 text-sm font-semibold">
                                            <CheckCircle2 size={16} className="text-stefto-red group-hover:text-white transition-colors" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <a href={`#${s.id}`} className="font-bold border-b-2 border-stefto-red pb-1 group-hover:border-white inline-flex items-center gap-2 transition-all">
                                    Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3, 4, 5: Detailed Service Sections */}
            {services.map((s, i) => (
                <section key={i} id={s.id} className={`section-padding ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} relative overflow-hidden`}>
                    {/* Decorative background blur */}
                    <div className={`absolute ${i % 2 === 0 ? 'bottom-0 left-0' : 'top-0 right-0'} w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-50`}></div>
                    <div className={`container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={i % 2 === 0 ? fadeLeft : fadeRight}
                            className={i % 2 !== 0 ? 'order-2' : ''}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-stefto-red/10 rounded-xl flex items-center justify-center text-stefto-red">
                                    {React.cloneElement(s.icon, { size: 28 })}
                                </div>
                                <span className="text-sm font-bold text-stefto-red uppercase tracking-widest">Service {String(i + 1).padStart(2, '0')}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue mb-6 tracking-tight">{s.title}</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{s.desc} Our approach combines advanced data models with a boots-on-the-ground network to ensure no stone is left unturned in your recovery journey.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {s.features.map((f, fi) => (
                                    <motion.div
                                        key={fi}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={scaleIn}
                                        custom={fi}
                                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                        className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3 border border-gray-100 hover:border-stefto-blue/20 hover:shadow-lg transition-all duration-300"
                                    >
                                        <span className="w-3 h-3 bg-stefto-red rounded-full flex-shrink-0"></span>
                                        <span className="font-bold text-stefto-blue text-sm">{f}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="mt-12"
                            >
                                <Link to={`/case-study/${s.id}`} className="btn-primary inline-flex items-center gap-2">
                                    Request Case Study <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={i % 2 === 0 ? fadeRight : fadeLeft}
                            className={i % 2 !== 0 ? 'order-1' : ''}
                        >
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-br from-stefto-blue/20 to-stefto-red/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <img src={s.img} alt={s.title} className="rounded-3xl shadow-2xl border-8 border-white relative z-10 group-hover:scale-[1.02] transition-transform duration-500" />
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}

            {/* Section 6: Digital Solutions (CreditKlick) */}
            <section className="section-padding bg-stefto-dark text-white overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stefto-blue/20 rounded-full blur-3xl"></div>
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeLeft}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className="bg-stefto-red/20 p-3 rounded-xl">
                                <Zap className="text-stefto-red" size={40} />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold">CreditKlick</h2>
                        </motion.div>
                        <p className="text-xl text-gray-400 mb-8 font-light italic">"Next-Gen Credit Intelligence & Monitoring Simplified."</p>
                        <ul className="space-y-6 mb-10">
                            {[
                                { t: "Real-Time Credit Monitoring", d: "Live tracking of credit scores with deep score diagnostics and 24/7 monitoring." },
                                { t: "Precision Financial Analytics", d: "Data-driven insights from 5,00,000+ analyzed profiles to empower your financial journey." },
                                { t: "Personalized Loan Solutions", d: "Tailored loan offerings and credit improvement roadmaps based on precision analytics." }
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={i}
                                    className="flex gap-6 group"
                                >
                                    <div className="bg-white/10 p-3 rounded-xl group-hover:bg-stefto-red/20 transition-colors duration-300">
                                        <Settings size={24} className="text-stefto-red" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold group-hover:text-stefto-red transition-colors duration-300">{item.t}</h4>
                                        <p className="text-gray-400 text-sm">{item.d}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Link to="/creditklick" className="btn-primary inline-flex items-center gap-3 group">
                                Explore CreditKlick <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeRight}
                        className="flex items-center justify-center"
                    >
                        <div className="relative group py-16 px-12">
                            {/* Decorative glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                            {/* Phone Frame */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="relative z-10 mx-auto w-[240px] md:w-[280px] aspect-[9/17.5] bg-[#0047AB] rounded-[3rem] border-[8px] border-gray-900 shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden"
                            >
                                <img
                                    src="/ck-app.png"
                                    alt="CreditKlick Mobile Interface"
                                    className="absolute inset-0 w-full h-full object-cover object-top scale-[1.02]"
                                />
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/20 rounded-full"></div>
                                <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                            </motion.div>

                            {/* Floating Score Card — top right, attached to phone */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-8 md:-top-10 md:-right-12 bg-white p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 z-20 flex flex-col items-center min-w-[130px]"
                            >
                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Excellent</div>
                                <div className="text-4xl font-black text-green-500 tracking-tighter">823</div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full mt-3 overflow-hidden">
                                    <div className="w-[85%] h-full bg-gradient-to-r from-yellow-400 to-green-500"></div>
                                </div>
                            </motion.div>

                            {/* Floating Personal Loan Card — mid left, attached to phone */}
                            <motion.div
                                animate={{ x: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-1/3 -left-12 md:-left-24 bg-white p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 z-20 flex items-center gap-4 min-w-[170px]"
                            >
                                <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                    <Settings size={22} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Affordable</div>
                                    <div className="text-base font-black text-stefto-blue">Personal Loan</div>
                                </div>
                            </motion.div>

                            {/* Floating Security Badge — bottom right, attached to phone */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -bottom-6 -right-8 md:-bottom-10 md:-right-16 bg-white p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 z-20 flex items-center gap-4 min-w-[190px]"
                            >
                                <div className="w-11 h-11 bg-red-50 text-stefto-red rounded-2xl flex items-center justify-center">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Data Protection</div>
                                    <div className="text-base font-black text-stefto-blue italic">100% Secured</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 7: Process Management */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 opacity-60"></div>
                <div className="container mx-auto text-center mb-16 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue mb-4 tracking-tight">End-to-End Process Management</h2>
                        <div className="w-24 h-1 bg-stefto-red mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-gray-600 max-w-xl mx-auto">We handle the heavy lifting so you can focus on your core business.</p>
                    </motion.div>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                    {['Onboarding', 'Profiling', 'Engagement', 'Settlement'].map((step, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={i}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="relative p-10 bg-gray-50 rounded-2xl border-b-8 border-stefto-blue hover:shadow-xl hover:bg-white transition-all duration-300 group"
                        >
                            <span className="absolute top-4 right-4 text-7xl font-extrabold text-blue-100 group-hover:text-stefto-red/10 transition-colors duration-300">{i + 1}</span>
                            <div className="w-14 h-14 bg-stefto-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-stefto-red/10 transition-colors duration-300">
                                {[<Database size={24} className="text-stefto-blue" />, <BarChart size={24} className="text-stefto-blue" />, <Users size={24} className="text-stefto-blue" />, <CheckCircle2 size={24} className="text-stefto-blue" />][i]}
                            </div>
                            <h4 className="text-xl font-bold text-stefto-blue mb-4 relative z-10">{step}</h4>
                            <p className="text-gray-500 text-sm relative z-10 leading-relaxed">Optimized workflows for maximum throughput and accuracy.</p>
                            {i < 3 && (
                                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                                    <ArrowRight className="text-stefto-red/30" size={28} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Section 8: Analytics Performance */}
            <section className="py-20 bg-stefto-blue text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeLeft}
                        className="text-center lg:text-left"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Driven by Performance</h2>
                        <div className="w-20 h-1 bg-stefto-red mb-6 rounded-full mx-auto lg:mx-0"></div>
                        <p className="text-xl text-blue-100 lg:pr-20">Our AI models have consistently delivered higher resolution rates compared to traditional methods.</p>
                    </motion.div>
                    <div className="grid grid-cols-2 gap-8">
                        {[
                            { value: "35%", label: "Increase in Resolution", color: "text-stefto-red" },
                            { value: "40%", label: "Reduction in OpEx", color: "text-white" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={scaleIn}
                                custom={i}
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                                className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                            >
                                <motion.p
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 + i * 0.15, type: "spring", stiffness: 100 }}
                                    viewport={{ once: true }}
                                    className={`text-5xl md:text-6xl font-extrabold ${stat.color}`}
                                >
                                    {stat.value}
                                </motion.p>
                                <p className="text-sm font-bold uppercase mt-3 tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 9: Client Success Stories */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-80 h-80 bg-red-50 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 opacity-60"></div>
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue mb-4 tracking-tight">Success Across Verticals</h2>
                        <div className="w-24 h-1 bg-stefto-red mx-auto rounded-full"></div>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { title: "Fintech Recovery", desc: "Helped a leading BNPL provider recover ₹50Cr+ in delinquent dues within 6 months using digital first strategies.", link: "/case-study/collect", borderColor: "border-stefto-red" },
                            { title: "Telecom Cleanup", desc: "Optimized postpaid collection for a major ISP, reducing churn by 20% while increasing total collections by 15%.", link: "/case-study/customer", borderColor: "border-stefto-blue" }
                        ].map((story, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                className={`bg-gray-50 p-12 rounded-3xl border-l-8 ${story.borderColor} hover:shadow-2xl hover:bg-white transition-all duration-300 group`}
                            >
                                <h4 className="text-xl font-bold text-stefto-blue mb-4 group-hover:text-stefto-red transition-colors duration-300">{story.title}</h4>
                                <p className="text-gray-600 mb-6 leading-relaxed">{story.desc}</p>
                                <Link to={story.link} className="text-stefto-red font-bold flex items-center gap-2 group/link">
                                    View Case Study <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 10: Call to Action */}
            <section className="py-24 bg-stefto-dark text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stefto-blue via-stefto-red to-stefto-blue"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-stefto-blue/10 rounded-full blur-3xl"></div>
                <div className="container mx-auto px-4 z-10 relative">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Ready to Optimize Your Collections?</h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Get in touch with our solutions experts for a customized recovery strategy.</p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/contact" className="btn-primary">Start Your Recovery Journey</Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Services;
