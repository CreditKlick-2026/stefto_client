import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BarChart3, ShieldCheck, Zap, LineChart, Smartphone,
    CheckCircle2, ArrowRight, Download, Users, Star,
    FileText, HelpCircle, Send, Search,
    LayoutDashboard, TrendingUp, HandCoins, Lock,
    Globe, Database, Cpu, PieChart, Activity, ShieldAlert
} from 'lucide-react';
import {
    LineChart as ReLineChart, Line, XAxis, YAxis,
    CartesianGrid, Tooltip, ResponsiveContainer,
    AreaChart, Area
} from 'recharts';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreditScoreGauge from '../components/CreditScoreGauge';

// Professional Data for Visualization (Credit Score Simulation)
const performanceData = [
    { name: 'Jan', value: 650, baseline: 640 },
    { name: 'Feb', value: 680, baseline: 645 },
    { name: 'Mar', value: 720, baseline: 650 },
    { name: 'Apr', value: 755, baseline: 655 },
    { name: 'May', value: 790, baseline: 660 },
    { name: 'Jun', value: 823, baseline: 665 },
];

const CreditKlickPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: 'Inquiry for CreditKlick Enterprise Solutions' });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [loading, setLoading] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post('http://localhost:5000/api/contact', {
                ...formData,
                type: 'CreditKlick Enterprise Inquiry'
            });
            if (res.status === 200) {
                setStatus({ type: 'success', msg: 'Thank you for your interest. A Credit Expert will contact you shortly.' });
                setFormData({ name: '', email: '', phone: '', message: 'Inquiry for CreditKlick Enterprise Solutions' });
            }
        } catch (err) {
            setStatus({ type: 'error', msg: 'System error. Please contact us directly at info@stefto.com.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="font-roboto overflow-x-hidden bg-[#EFF4FB]">
            {/* Section 1: Ultra-Professional Dark Hero */}
            <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#020617]">
                {/* --- Advanced Background Architecture --- */}
                <div className="absolute inset-0 z-0">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                    {/* Gradient Orbs */}
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-600/5 rounded-full blur-[100px]"></div>
                    {/* Abstract Data Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="space-y-2 mb-8">
                                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                                    <Activity size={14} className="text-red-500 animate-pulse" />
                                    <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Next-Gen Credit Intelligence</span>
                                </div>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] pl-4">Part of Incredible Management Services Pvt Ltd</p>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                                Your Credit Score. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-red-500">Unlocked For Free.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-xl leading-relaxed font-light">
                                Instantly check your credit health with our advanced intelligence hub. Get deep diagnostics, fraud alerts, and personalized paths to financial growth.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <a
                                    href="https://creditklick.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-stefto-red text-white font-black px-12 py-5 rounded-xl shadow-[0_20px_40px_rgba(255,0,0,0.3)] hover:shadow-none hover:translate-y-1 transition-all flex items-center gap-3 text-lg"
                                >
                                    Access Platform <ArrowRight size={20} />
                                </a>
                                <div className="flex items-center gap-4 text-white/60">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-gray-800 overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?u=ck${i}`} alt="Client" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm">
                                        <div className="font-bold text-white">5,00,000+</div>
                                        <div className="text-xs">Profiles Analyzed</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Content: Advanced Data Viz */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative block mt-12 lg:mt-0"
                        >
                            <div className="relative bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-xl shadow-2xl">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <h3 className="text-white font-black text-xl italic uppercase tracking-widest">Real-Time Analysis</h3>
                                        <p className="text-gray-500 text-[10px] mt-1 uppercase font-bold tracking-widest">Deep Score Diagnostics v5.0</p>
                                    </div>
                                    <div className="bg-green-500/10 px-4 py-2 rounded-xl">
                                        <div className="text-green-400 font-black text-xs uppercase tracking-tighter">Excellent Standing</div>
                                    </div>
                                </div>

                                {/* --- PROFESSIONAL CREDIT METER --- */}
                                <CreditScoreGauge score={850} />

                                <div className="grid grid-cols-3 gap-4 mt-8">
                                    {[
                                        { label: 'Credit Range', val: 'Excellent', color: 'text-green-400' },
                                        { label: 'Deep Analysis', val: 'Active', color: 'text-blue-400' },
                                        { label: 'Monitoring', val: '24/7 Live', color: 'text-white' },
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                            <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">{stat.label}</div>
                                            <div className={`text-sm font-black ${stat.color}`}>{stat.val}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Insight Card */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl max-w-[240px]"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div className="text-xs font-black text-stefto-blue uppercase tracking-tighter">System Status</div>
                                </div>
                                <p className="text-sm font-medium text-gray-500 leading-tight">All credit monitoring nodes operating at peak efficiency.</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Separator */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#EFF4FB] to-transparent"></div>
            </section>

            {/* Section 2: Core Philosophy & Integrated Infrastructure */}
            <section className="py-16 px-4 md:px-8">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-stefto-blue mb-8 tracking-tighter">Redefining the <br />Financial DNA.</h2>
                            <p className="text-xl text-gray-600 font-light leading-relaxed">
                                CreditKlick isn't just a score checker. It is a comprehensive financial operating system that leverages Stefto's enterprise-grade AI to bridge the gap between complex credit data and actionable financial growth.
                            </p>
                            <div className="mt-10 space-y-4">
                                {[
                                    "Real-Time Experian Integration",
                                    'Proprietary "Credit Refine" Repair Protocol',
                                    "Secured Multi-Layer Data Encryption"
                                ].map((text, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                                        className="flex items-center gap-4 group cursor-default"
                                    >
                                        <div className="w-2 h-2 bg-stefto-red rounded-full group-hover:scale-150 transition-transform"></div>
                                        <span className="font-bold text-stefto-blue">{text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                            {[
                                { title: 'AI Score Engine', icon: <Cpu />, desc: 'Advanced neural networks that predict score shifts.', val: '800+' },
                                { title: 'Risk Guard', icon: <ShieldAlert />, desc: 'Instant fraud detection and credit security.', val: '24/7' },
                                { title: 'Data Vault', icon: <Database />, desc: 'Bank-grade storage for your financial history.', val: '256B' },
                                { title: 'Market Reach', icon: <Globe />, desc: 'Connected to premium loan and credit card partners.', val: 'Top 5%' },
                            ].map((card, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                    className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:bg-stefto-blue group cursor-default"
                                >
                                    <div className="text-stefto-red mb-6 transition-colors group-hover:text-white">{card.icon}</div>
                                    <div className="text-3xl font-black text-stefto-blue mb-2 group-hover:text-white">{card.val}</div>
                                    <h4 className="font-bold text-stefto-blue text-sm mb-2 group-hover:text-white uppercase tracking-widest">{card.title}</h4>
                                    <p className="text-xs text-gray-500 group-hover:text-white/70 leading-relaxed">{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Professional Features (Corporate Grid) */}
            <section className="bg-stefto-blue py-16 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[40%] h-full bg-red-600/5 skew-x-[-20deg] translate-x-1/2"></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl mb-14 text-center mx-auto"
                    >
                        <h2 className="text-5xl font-black mb-8 italic">The Professional Edge.</h2>
                        <p className="text-blue-200 text-lg">Sophisticated tools designed for precision financial management.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { t: 'Report Hub', d: 'Granular breakdown of every line item in your credit history.', i: <FileText /> },
                            { t: 'Analysis Engine', d: 'Automated identification of credit utilization and debt ratios.', i: <PieChart /> },
                            { t: 'Optimization', d: 'Algorithmic suggestions to maximize your potential score.', i: <Zap /> },
                            { t: 'Direct Refine', i: <HandCoins />, d: 'One-click access to expert credit restoration services.' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.25 } }}
                                className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all cursor-default group"
                            >
                                <div className="text-red-500 mb-8 group-hover:scale-110 transition-transform">{item.i}</div>
                                <h3 className="text-xl font-black mb-4">{item.t}</h3>
                                <p className="text-sm text-blue-200 leading-relaxed">{item.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Enterprise Solutions Spotlight */}
            <section className="py-16 bg-[#EFF4FB]">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-6xl mx-auto bg-gray-50 rounded-[4rem] p-12 lg:p-24 border border-gray-100 flex flex-col lg:flex-row gap-20 items-center"
                    >
                        <div className="lg:w-1/2 relative group">
                            {/* Decorative Background for the App */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                            {/* Main App Container - Refined for zero-gap fit */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                className="relative z-10 mx-auto w-[280px] md:w-[300px] aspect-[9/17.5] bg-[#0047AB] rounded-[3rem] border-[8px] border-gray-900 shadow-[0_50px_100px_rgba(0,0,0,0.3)] overflow-hidden"
                            >
                                <img
                                    src="/ck-app.png"
                                    alt="CreditKlick Mobile Interface"
                                    className="absolute inset-0 w-full h-full object-cover object-top scale-[1.02] transition-all duration-700"
                                />
                                {/* Bottom Navigation Bar Simulation Overlay */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/20 rounded-full"></div>
                                {/* Subtle Bottom Shadow overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                            </motion.div>

                            {/* --- FLOATING APP INTERFACE ELEMENTS (Matching the User's Image) --- */}

                            {/* Top Score Card (Score 823 as per image) */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-8 md:-top-16 md:-right-12 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 z-20 flex flex-col items-center min-w-[140px]"
                            >
                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Excellent</div>
                                <div className="text-4xl font-black text-green-500 tracking-tighter">823</div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full mt-3 overflow-hidden">
                                    <div className="w-[85%] h-full bg-gradient-to-r from-yellow-400 to-green-500"></div>
                                </div>
                            </motion.div>

                            {/* Home Loan / EMI Card */}
                            <motion.div
                                animate={{ x: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-1/3 -left-12 md:-left-24 bg-white p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 z-20 flex items-center gap-4 min-w-[180px]"
                            >
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                    <HandCoins size={24} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Affordable</div>
                                    <div className="text-lg font-black text-stefto-blue">Personal Loan</div>
                                </div>
                            </motion.div>

                            {/* Security / Free Card */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -bottom-10 -right-8 md:-bottom-12 md:-right-16 bg-white p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 z-20 flex items-center gap-4 min-w-[200px]"
                            >
                                <div className="w-12 h-12 bg-red-50 text-stefto-red rounded-2xl flex items-center justify-center">
                                    <ShieldCheck size={28} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Data Protection</div>
                                    <div className="text-lg font-black text-stefto-blue italic">100% Secured</div>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="lg:w-1/2"
                        >
                            <div className="inline-block bg-stefto-red text-white text-[10px] font-black px-4 py-1.5 rounded-full mb-6 uppercase tracking-[3px]">Enterprise Grade</div>
                            <h2 className="text-4xl md:text-5xl font-black text-stefto-blue mb-8 tracking-tighter leading-tight">Elite Performance <br />At Your Fingertips.</h2>
                            <p className="text-xl text-gray-500 mb-12 font-medium italic">"Deploying the world's most advanced credit monitoring software into a seamless mobile experience."</p>
                            <div className="flex flex-wrap gap-4">
                                <motion.a
                                    href="https://play.google.com/store/apps/details?id=com.creditklick"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-5 bg-stefto-blue text-white rounded-2xl font-black text-lg flex items-center gap-3 shadow-xl hover:bg-stefto-red transition-all"
                                >
                                    <Smartphone /> Play Store
                                </motion.a>
                                <div className="flex items-center gap-4 px-8 border border-gray-200 rounded-2xl">
                                    <div className="text-stefto-blue font-black tracking-tight">V 4.2.0 Stable</div>
                                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 bg-green-500 rounded-full"></motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>


            {/* Section 6: Intelligence Hub (FAQ) */}
            <section className="pb-20 pt-4 px-4 md:px-8 bg-[#EFF4FB]">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex items-center gap-6 mb-16"
                    >
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="w-1 h-20 bg-stefto-red origin-top"
                        ></motion.div>
                        <h2 className="text-5xl font-black text-stefto-blue italic tracking-tighter leading-none">Intelligence <br />Hub.</h2>
                    </motion.div>
                    <div className="space-y-4">
                        {[
                            { q: "What is CreditKlick?", a: "CreditKlick is a premium fintech ecosystem part of Incredible Management Services Pvt Ltd. It's designed to simplify credit monitoring, providing individuals and businesses with real-time access to their credit health and financial growth tools." },
                            { q: "How does CreditKlick function?", a: "We integrate directly with major credit bureaus to fetch your latest data. Our AI-driven engine then analyzes this data to provide personalized insights, score improvement roadmaps, and tailored loan recommendations." },
                            { q: "What are the key features available?", a: "Members get access to Real-time Score Tracking, Deep Score Diagnostics, Personal Loan Marketplaces, AI-based Score Improvement Protocols, and 24/7 Credit Monitoring alerts." },
                            { q: "How is my data protected?", a: "We employ bank-grade AES-256 encryption. As a part of Incredible Management Services Pvt Ltd, we strictly adhere to RBI guidelines and Indian data residency laws, ensuring your financial information never leaves secure environments." },
                            { q: "Will checking my score impact my rating?", a: "Absolutely not. All credit checks performed through the CreditKlick dashboard are 'Soft Inquiries.' This means you can monitor your score as many times as you like without losing a single point." }
                        ].map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="border-b border-gray-100 last:border-0"
                            >
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full py-8 text-left flex justify-between items-center group outline-none"
                                >
                                    <span className="font-bold text-xl text-stefto-blue group-hover:text-stefto-red transition-colors">{faq.q}</span>
                                    <div className={`transition-transform duration-500 ${activeFaq === i ? 'rotate-45 text-stefto-red' : 'text-gray-300'}`}>
                                        <Zap size={24} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-8 text-gray-500 text-lg leading-relaxed font-light">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CreditKlickPage;
