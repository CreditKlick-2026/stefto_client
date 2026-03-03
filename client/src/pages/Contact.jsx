import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Calendar, CheckCircle, ArrowRight, Building2, Sparkles, Shield, ExternalLink, Headphones, BookOpen, Bug, MessageCircle } from 'lucide-react';
import axios from 'axios';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" }
    })
};

const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeRight = {
    hidden: { opacity: 0, x: 50 },
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

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', type: 'General Inquiry', companyName: '', message: '' });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [loading, setLoading] = useState(false);

    const offices = [
        { city: "Gurugram", addr: "Plot No. 112, Udyog Vihar, Phase-1, Gurugram, Haryana-122016", type: "Head Office", mapLink: "https://maps.app.goo.gl/FMQpuPKx5LjyXR3T8" },
        { city: "Moti Nagar", addr: "IInd Floor, DLF, Moti Nagar, New Delhi-110015", type: "Registered Office", mapLink: "https://maps.app.goo.gl/C8accGjgfV1vefxs7" },
        { city: "Uttam Nagar", addr: "WZ-1, Upper Ground Floor, Main Nazafgarh Road, Uttam Nagar West, Delhi-110059", type: "Branch Office", mapLink: "https://maps.app.goo.gl/iFoncB5pNMog91Bt5" },
        { city: "Noida", addr: "Plot No. 125A, Block-C, Sec-2, Phase-1, Noida, Gautam Buddha Nagar, U.P.-201301", type: "Branch Office", mapLink: "https://maps.app.goo.gl/DmyLyhfU2o2e9rAn8" },
        { city: "Pune", addr: "501, 5th Floor, Pride Icon, Kharadi, Pune, Maharashtra-411014", type: "Branch Office", mapLink: "https://maps.app.goo.gl/1CFizx8JEUB2pAQ37" },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post('http://localhost:5000/api/contact', formData);
            if (res.status === 200) {
                setStatus({ type: 'success', msg: 'Message sent successfully! We will contact you soon.' });
                setFormData({ name: '', email: '', phone: '', type: 'General Inquiry', companyName: '', message: '' });
            }
        } catch (err) {
            setStatus({ type: 'error', msg: 'Failed to send message. Please try again or call us.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="overflow-x-hidden">
            {/* Section 1: Hero */}
            <Hero
                title="Get in Touch"
                subtitle="Whether you're looking to optimize your collections or have a general query, our team is here to help you 24/7."
                bgImage="https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Section 2: Contact Methods & Form */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 opacity-40"></div>

                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
                    {/* Left Column: Direct Contact Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeLeft}
                        className="space-y-10"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 bg-stefto-red/5 text-stefto-red text-xs font-black px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em]">
                                <Phone size={14} /> Direct Contact
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue mb-3 tracking-tight leading-tight">Connect <span className="text-stefto-red">Directly</span></h2>
                            <p className="text-gray-500 mb-8">Reach out through any of these channels. Our team responds within hours.</p>

                            <div className="space-y-4">
                                {[
                                    { icon: <Phone size={22} />, label: "Phone Support", value: "+91 8800-101-102", bg: "bg-gradient-to-br from-red-50 to-red-100", iconBg: "bg-stefto-red" },
                                    { icon: <Mail size={22} />, label: "Email Inquiry", value: "info@stefto.com", bg: "bg-gradient-to-br from-blue-50 to-blue-100", iconBg: "bg-stefto-blue" },
                                    { icon: <Clock size={22} />, label: "Business Hours", value: "Mon - Sat: 9:30 AM - 6:30 PM", bg: "bg-gradient-to-br from-gray-50 to-gray-100", iconBg: "bg-gray-900" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                        custom={i}
                                        whileHover={{ x: 6, transition: { duration: 0.2 } }}
                                        className={`flex items-center gap-5 p-5 ${item.bg} rounded-2xl hover:shadow-xl transition-all duration-300 group cursor-default border border-transparent hover:border-white`}
                                    >
                                        <div className={`p-3.5 ${item.iconBg} text-white rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>{item.icon}</div>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                                            <p className="text-lg font-extrabold text-stefto-blue">{item.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* CreditKlick CTA Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={scaleIn}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="relative bg-gradient-to-br from-stefto-blue to-blue-900 p-10 rounded-3xl text-white overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-stefto-red/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 bg-white/10 text-white text-[10px] font-black px-3 py-1.5 rounded-full mb-5 uppercase tracking-[0.2em] border border-white/10">
                                    <Sparkles size={12} /> Featured
                                </div>
                                <h3 className="text-2xl font-extrabold mb-3">Credit Score Analysis</h3>
                                <p className="text-blue-200 mb-8 leading-relaxed text-sm">"Take control of your financial future. Discover how CreditKlick can help you understand your credit health and build a roadmap to reach a 850+ score."</p>
                                <Link to="/creditklick">
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-stefto-red text-white font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 hover:bg-white hover:text-stefto-blue transition-all duration-300 shadow-xl"
                                    >
                                        <Calendar size={18} /> Get Free Analysis
                                    </motion.span>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeRight}
                    >
                        <div className="inline-flex items-center gap-2 bg-stefto-blue/5 text-stefto-blue text-xs font-black px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em]">
                            <Send size={14} /> Message Us
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue mb-8 tracking-tight">Send Us a <span className="text-stefto-red">Message</span></h2>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <motion.div
                                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
                                    className="flex flex-col gap-1.5"
                                >
                                    <label className="text-xs font-black text-stefto-blue uppercase tracking-widest">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-stefto-red focus:shadow-lg focus:shadow-red-50/50 transition-all"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </motion.div>
                                <motion.div
                                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
                                    className="flex flex-col gap-1.5"
                                >
                                    <label className="text-xs font-black text-stefto-blue uppercase tracking-widest">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-stefto-red focus:shadow-lg focus:shadow-red-50/50 transition-all"
                                        placeholder="email@company.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </motion.div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <motion.div
                                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
                                    className="flex flex-col gap-1.5"
                                >
                                    <label className="text-xs font-black text-stefto-blue uppercase tracking-widest">Phone Number</label>
                                    <div className="relative flex items-center">
                                        <div className="absolute left-4 flex items-center gap-2 pointer-events-none border-r pr-3 border-gray-300">
                                            <img
                                                src="https://flagcdn.com/w20/in.png"
                                                alt="India Flag"
                                                className="w-5 h-auto rounded-sm"
                                            />
                                            <span className="text-gray-600 font-bold text-sm">+91</span>
                                        </div>
                                        <input
                                            required
                                            type="tel"
                                            maxLength="10"
                                            pattern="[0-9]{10}"
                                            className="w-full p-4 pl-20 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-stefto-red focus:shadow-lg focus:shadow-red-50/50 transition-all"
                                            placeholder="0000000000"
                                            value={formData.phone}
                                            onChange={(e) => {
                                                const val = e.target.value.replace(/\D/g, '');
                                                if (val.length <= 10) {
                                                    setFormData({ ...formData, phone: val });
                                                }
                                            }}
                                        />
                                    </div>
                                    <p className="text-[10px] text-gray-400 mt-0.5 italic">Enter 10-digit numeric mobile number</p>
                                </motion.div>
                                <motion.div
                                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
                                    className="flex flex-col gap-1.5"
                                >
                                    <label className="text-xs font-black text-stefto-blue uppercase tracking-widest">Inquiry Type</label>
                                    <select
                                        className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-stefto-red transition-all"
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value, companyName: '' })}
                                    >
                                        <option>General Inquiry</option>
                                        <option>Business Partnership</option>
                                        <option>Career Query</option>
                                        <option>Support Request</option>
                                    </select>
                                </motion.div>
                            </div>

                            {/* Conditional Company Name Field */}
                            <AnimatePresence>
                                {formData.type === 'Business Partnership' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="flex flex-col gap-1.5 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-stefto-blue/10">
                                            <label className="text-xs font-black text-stefto-blue uppercase tracking-widest flex items-center gap-2">
                                                <Building2 size={14} className="text-stefto-red" /> Company Name
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                className="p-4 bg-white border border-gray-200 rounded-xl outline-none focus:border-stefto-red focus:shadow-lg focus:shadow-red-50/50 transition-all"
                                                placeholder="Enter your company name"
                                                value={formData.companyName}
                                                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                            />
                                            <p className="text-[10px] text-gray-400 mt-0.5 italic">Required for business partnership inquiries</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <motion.div
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
                                className="flex flex-col gap-1.5"
                            >
                                <label className="text-xs font-black text-stefto-blue uppercase tracking-widest">Message</label>
                                <textarea
                                    required
                                    rows="5"
                                    className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-stefto-red focus:shadow-lg focus:shadow-red-50/50 transition-all resize-none"
                                    placeholder="Tell us how we can help you..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </motion.div>

                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5}>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={loading}
                                    type="submit"
                                    className="w-full btn-primary py-5 rounded-2xl flex items-center justify-center gap-4 text-lg disabled:opacity-50 shadow-xl shadow-stefto-blue/20"
                                >
                                    {loading ? 'Sending...' : 'Send Message'} <Send size={20} />
                                </motion.button>
                            </motion.div>

                            <AnimatePresence>
                                {status.msg && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className={`p-4 rounded-xl text-center font-bold ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                                    >
                                        {status.msg}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Section 3: Office Locations */}
            <section className="section-padding bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-40"></div>

                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-stefto-red/5 text-stefto-red text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.2em]">
                            <MapPin size={14} /> Locations
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue tracking-tight">Our <span className="text-stefto-red">Offices</span></h2>
                        <p className="text-gray-500 mt-3 max-w-lg mx-auto">Strategically located to serve you better across India.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {offices.map((off, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={scaleIn}
                                custom={i}
                                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-stefto-blue/20 group cursor-default relative overflow-hidden"
                            >
                                {/* Accent bar */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-stefto-blue via-stefto-red to-stefto-blue"></div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                        <MapPin className="text-stefto-red" size={22} />
                                    </div>
                                    <span className={`text-[10px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest ${off.type === 'Head Office' ? 'bg-stefto-red/10 text-stefto-red' : off.type === 'Registered Office' ? 'bg-stefto-blue/10 text-stefto-blue' : 'bg-gray-100 text-gray-500'}`}>
                                        {off.type}
                                    </span>
                                </div>
                                <h4 className="text-2xl font-extrabold text-stefto-blue mb-3 group-hover:text-stefto-red transition-colors">{off.city}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8 min-h-[48px]">{off.addr}</p>
                                <a
                                    href={off.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-stefto-red font-black text-xs uppercase tracking-[0.15em] flex items-center gap-2 hover:gap-3 transition-all duration-300"
                                >
                                    Get Directions <ExternalLink size={14} />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Domestic Expansion Teaser */}
            <section className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

                <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-24 h-24 bg-white shadow-xl rounded-3xl flex items-center justify-center mb-10 border border-blue-100"
                    >
                        <MessageSquare className="text-stefto-blue" size={42} />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-stefto-blue mb-6 leading-tight tracking-tight"
                    >
                        Expanding Our Presence Across{" "}
                        <span className="text-stefto-red">India</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-gray-500 max-w-3xl text-lg mb-14 leading-relaxed"
                    >
                        Strengthening our national footprint, we are strategically expanding our
                        operations across key regions in North and South India — enhancing our
                        on-ground capabilities and delivering faster, more efficient recovery
                        solutions to our valued clients.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="flex gap-6"
                    >
                        {["MUMBAI", "BANGALORE"].map((city, i) => (
                            <motion.div
                                key={city}
                                whileHover={{ scale: 1.08, y: -4 }}
                                transition={{ duration: 0.25 }}
                                className="px-10 py-5 bg-white shadow-lg rounded-2xl border border-gray-100 text-stefto-blue font-extrabold tracking-[0.15em] text-lg cursor-default hover:shadow-2xl hover:border-stefto-blue/20 transition-all duration-300"
                            >
                                {city}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Section 5: Support Portal */}
            <section className="section-padding bg-stefto-dark text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-stefto-blue via-stefto-red to-stefto-blue"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-stefto-blue/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeLeft}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-black px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em] border border-white/10">
                            <Shield size={14} /> Client Portal
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Existing Client <span className="text-stefto-red">Support</span></h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">Already a partner? Access your real-time dashboards and support tickets through the Stefto Partner Connect portal.</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/10 text-white font-bold px-8 py-4 rounded-xl border border-white/20 hover:bg-white hover:text-stefto-blue transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-sm"
                        >
                            Login to Partner Portal <ArrowRight size={18} />
                        </motion.button>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-5">
                        {[
                            { t: "Report Issue", d: "24/7 technical desk.", icon: <Bug size={20} /> },
                            { t: "Feedback", d: "We value your input.", icon: <MessageCircle size={20} /> },
                            { t: "Training", d: "Staff onboarding portal.", icon: <Headphones size={20} /> },
                            { t: "API Docs", d: "Seamless integrations.", icon: <BookOpen size={20} /> }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={scaleIn}
                                custom={i}
                                whileHover={{ y: -4, scale: 1.03, transition: { duration: 0.2 } }}
                                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default group backdrop-blur-sm"
                            >
                                <div className="text-stefto-red mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h4 className="font-extrabold mb-1.5 text-sm">{item.t}</h4>
                                <p className="text-xs text-gray-500">{item.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-16 bg-white border-t relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <div className="inline-flex items-center justify-center gap-2 bg-stefto-red/5 text-stefto-red font-black text-xs uppercase mb-5 tracking-[0.2em] px-4 py-1.5 rounded-full">
                            <CheckCircle size={14} /> Certified Quality
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue tracking-tight">We Are Ready <span className="text-stefto-red">When You Are.</span></h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="w-24 h-1 bg-gradient-to-r from-stefto-blue to-stefto-red mx-auto mt-6 rounded-full origin-left"
                        ></motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
