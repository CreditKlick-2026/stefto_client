import React, { useState } from 'react';
import Hero from '../components/Hero';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Coffee, Zap, Briefcase, GraduationCap, Send, Upload, Info, TrendingUp, Shield, ArrowRight, MapPin, Users, Heart, Sparkles } from 'lucide-react';
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
        transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" }
    })
};

const Careers = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', position: 'Select Position', location: 'Select Location', experience: 'Select Experience'
    });
    const [resume, setResume] = useState(null);
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [loading, setLoading] = useState(false);

    const jobs = [
        { id: 1, title: "Telecaller", dept: "Operations", loc: "Gurugram", type: "Full Time" },
        { id: 2, title: "Customer Support Executive", dept: "Operations", loc: "New Delhi", type: "Full Time" },
        { id: 3, title: "Collection Executive", dept: "Operations", loc: "Noida", type: "Full Time" },
        { id: 4, title: "Recovery Executive", dept: "Operations", loc: "Gurugram", type: "Full Time" },
        { id: 5, title: "Senior Telecaller", dept: "Operations", loc: "Pune", type: "Full Time" },
        { id: 6, title: "Senior Executive", dept: "Operations", loc: "Gurugram", type: "Full Time" },
        { id: 7, title: "Subject Matter Expert (SME)", dept: "Operations", loc: "New Delhi", type: "Full Time" },
        { id: 8, title: "Trainer / Process Trainer", dept: "Training", loc: "Gurugram", type: "Full Time" },
        { id: 9, title: "Team Leader (TL) / Supervisor", dept: "Management", loc: "Noida", type: "Full Time" },
        { id: 10, title: "Assistant Manager – Operations", dept: "Management", loc: "Gurugram", type: "Full Time" },
        { id: 11, title: "Human resources (HR)", dept: "HR", loc: "New Delhi", type: "Full Time" },
        { id: 12, title: "Management Information System (MIS)", dept: "Analytics", loc: "Gurugram", type: "Full Time" },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.position === 'Select Position' || !resume) {
            setStatus({ type: 'error', msg: 'Please select a position and upload your resume.' });
            return;
        }

        setLoading(true);
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('position', formData.position);
        data.append('location', formData.location);
        data.append('experience', formData.experience);
        data.append('resume', resume);

        try {
            const res = await axios.post('http://localhost:5000/api/apply', data);
            if (res.status === 200) {
                setStatus({ type: 'success', msg: 'Successfully Uploaded & Submitted!' });
                setFormData({ name: '', email: '', phone: '', position: 'Select Position', location: 'Select Location', experience: 'Select Experience' });
                setResume(null);
            }
        } catch (err) {
            setStatus({ type: 'error', msg: 'Failed to submit. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="overflow-x-hidden">
            {/* Section 1: Hero */}
            <Hero
                title="Join the Stefto Team"
                subtitle="Build the future of digital debt recovery. We're looking for innovators, thinkers, and doers to help us reshape the financial landscape."
                bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            />


{/* Section 3: Life at Stefto */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-60"></div>
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeLeft}
                    >
                        <div className="inline-flex items-center gap-2 bg-stefto-red/5 text-stefto-red text-xs font-black px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em]">
                            <Heart size={14} /> Life at Stefto
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue mb-6 tracking-tight leading-tight">
                            Work That <span className="text-stefto-red">Matters</span>
                        </h2>
                        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                            At Stefto, we don't just provide services; we build careers. Our work environment is designed to foster creativity, encourage ownership, and reward excellence.
                        </p>
                        <div className="grid grid-cols-2 gap-5">
                            {[
                                { icon: <Star size={22} />, title: "Meritocratic Culture", desc: "Grow based on your performance, not just tenure." },
                                { icon: <Zap size={22} />, title: "Innovation First", desc: "Work with the latest AI and Cloud technologies." },
                                { icon: <Users size={22} />, title: "Collaborative Teams", desc: "Cross-functional squads driving real outcomes." },
                                { icon: <TrendingUp size={22} />, title: "Rapid Growth", desc: "Fast-track your career with clear milestones." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={scaleIn}
                                    custom={i}
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                    className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-stefto-blue/20 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="text-stefto-red mb-3 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                                    <h4 className="font-bold text-stefto-blue text-sm mb-1">{item.title}</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeRight}
                        className="relative"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-br from-stefto-blue/10 to-stefto-red/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop" alt="Stefto Team" className="rounded-3xl shadow-2xl relative z-10 group-hover:scale-[1.01] transition-transform duration-500" />
                        </div>
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-6 lg:-bottom-10 lg:-left-10 bg-white p-6 rounded-2xl shadow-2xl max-w-xs z-20 border border-gray-100"
                        >
                            <p className="font-bold text-stefto-blue text-sm mb-2 italic leading-snug">"The support system here is incredible. I've grown from an executive to a team lead in just 2 years."</p>
                            <p className="text-[10px] font-black text-stefto-red uppercase tracking-[0.2em]">— Team Member</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Section 2: Quick Stats Bar */}
            <section className="py-8 bg-stefto-dark text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-stefto-blue via-stefto-red to-stefto-blue"></div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-0 md:divide-x md:divide-white/10">
                        {[
                            { val: "500+", label: "Team Members", icon: <Users size={16} /> },
                            { val: "5+", label: "Office Locations", icon: <MapPin size={16} /> },
                            { val: "70%", label: "Internal Promotions", icon: <TrendingUp size={16} /> },
                            { val: "48hrs", label: "Response Time", icon: <Zap size={16} /> }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                                className="text-center md:px-12"
                            >
                                <div className="text-2xl md:text-3xl font-black text-stefto-red">{stat.val}</div>
                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1.5 flex items-center justify-center gap-1.5">{stat.icon} {stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            

            {/* Section 4: Perks & Benefits */}
            <section className="section-padding bg-gray-50 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 opacity-50"></div>
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-14"
                    >
                        <div className="inline-flex items-center gap-2 bg-stefto-blue/5 text-stefto-blue text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.2em]">
                            <Sparkles size={14} /> Benefits
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue mb-3 tracking-tight">Perks of Being a <span className="text-stefto-red">'Steftonaut'</span></h2>
                        <p className="text-gray-500 max-w-xl mx-auto">We take care of our people so they can take care of our mission.</p>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {[
                            { t: "Health Care", i: <Check />, color: "from-green-50 to-green-100" },
                            { t: "Flexible Hours", i: <Coffee />, color: "from-orange-50 to-orange-100" },
                            { t: "Performance Bonus", i: <Star />, color: "from-yellow-50 to-yellow-100" },
                            { t: "Skill Training", i: <GraduationCap />, color: "from-blue-50 to-blue-100" },
                            { t: "Global Exposure", i: <Briefcase />, color: "from-purple-50 to-purple-100" },
                            { t: "Paid Leaves", i: <Check />, color: "from-teal-50 to-teal-100" },
                            { t: "Career Growth", i: <TrendingUp />, color: "from-cyan-50 to-cyan-100" },
                            { t: "EPFO Benefits", i: <Shield />, color: "from-indigo-50 to-indigo-100" }
                        ].map((perk, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={scaleIn}
                                custom={i}
                                whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.25 } }}
                                className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-stefto-red/20 group cursor-default"
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br ${perk.color} text-stefto-red rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                                    {perk.i}
                                </div>
                                <h4 className="font-bold text-stefto-blue text-sm">{perk.t}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Recruitment Process */}
            <section className="section-padding bg-stefto-dark text-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-stefto-blue/10 rounded-full blur-3xl"></div>
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Hiring Process</h2>
                        <p className="text-gray-400 mt-4 max-w-md mx-auto">Transparent, quick, and thorough. We respect your time.</p>
                    </motion.div>
                    <div className="flex flex-col md:flex-row justify-between gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-16 left-[12.5%] w-[75%] h-0.5 bg-gradient-to-r from-stefto-red via-white/20 to-stefto-blue z-0"></div>
                        {[
                            { t: "Apply", d: "Submit your resume through our portal.", icon: <Send size={22} /> },
                            { t: "Assessment", d: "A quick technical or logic round.", icon: <Zap size={22} /> },
                            { t: "Interviews", d: "Connect with our leadership team.", icon: <Users size={22} /> },
                            { t: "Offer", d: "Welcome to the Stefto family!", icon: <Sparkles size={22} /> }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                className="relative z-10 flex flex-col items-center text-center bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 md:w-1/4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-stefto-red to-red-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                    {step.icon}
                                </div>
                                <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-2">Step {String(i + 1).padStart(2, '0')}</div>
                                <h4 className="text-xl font-extrabold mb-3">{step.t}</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">{step.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: Job Listings */}
            <section className="section-padding bg-white relative overflow-hidden" id="jobs">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 opacity-50"></div>
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 bg-stefto-red/5 text-stefto-red text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.2em]">
                                <Briefcase size={14} /> Openings
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue tracking-tight">Open Positions</h2>
                            <p className="text-gray-500 mt-2">Find your next big break. <span className="font-bold text-stefto-red">{jobs.length} roles</span> available.</p>
                        </div>
                    </motion.div>
                    <div className="space-y-4">
                        {jobs.map((job, i) => (
                            <motion.div
                                key={job.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i % 4}
                                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                className="bg-white rounded-2xl border border-gray-100 hover:border-stefto-blue/20 hover:shadow-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all duration-300 group cursor-default"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-stefto-blue/5 rounded-xl flex items-center justify-center text-stefto-blue font-black text-sm group-hover:bg-stefto-red group-hover:text-white transition-all duration-300">
                                        {String(job.id).padStart(2, '0')}
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-stefto-blue group-hover:text-stefto-red transition-colors">{job.title}</h4>
                                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                                            <span className="flex items-center gap-1"><Briefcase size={12} /> {job.dept}</span>
                                            <span className="flex items-center gap-1"><MapPin size={12} /> {job.loc}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="bg-blue-50 text-stefto-blue px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest">{job.type}</span>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            setFormData({ ...formData, position: job.title });
                                            document.getElementById('apply-form').scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="btn-primary py-2.5 px-6 text-xs inline-flex items-center gap-2"
                                    >
                                        Apply <ArrowRight size={14} />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 7: Application Form */}
            <section className="section-padding bg-gray-50 relative overflow-hidden" id="apply-form">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 opacity-50"></div>
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100"
                    >
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeLeft}
                            className="lg:w-1/3 bg-gradient-to-br from-stefto-blue to-blue-900 p-12 text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                            <h2 className="text-3xl font-extrabold mb-6 relative z-10">Ready to Apply?</h2>
                            <p className="text-blue-200 mb-10 leading-relaxed relative z-10">Submit your details and resume. Our recruitment team will review and get back to you within 48 hours.</p>
                            <ul className="space-y-5 relative z-10">
                                {[
                                    "CV/Resume (PDF/Doc)",
                                    "Portfolio Links (Optional)",
                                    "Contact Information"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                        custom={i}
                                        className="flex items-center gap-3 text-sm font-semibold"
                                    >
                                        <div className="w-6 h-6 bg-stefto-red/20 rounded-lg flex items-center justify-center">
                                            <Check className="text-stefto-red" size={14} />
                                        </div>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="mt-16 p-5 bg-white/5 rounded-2xl flex items-center gap-4 border border-white/10 backdrop-blur-sm relative z-10">
                                <Info className="text-stefto-red shrink-0" size={18} />
                                <p className="text-[11px] italic text-blue-200">By submitting, you agree to our data protection policies for recruitment.</p>
                            </div>
                        </motion.div>
                        <div className="lg:w-2/3 p-10 lg:p-16">
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-bold text-stefto-blue text-xs uppercase tracking-widest">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-stefto-red focus:shadow-lg focus:shadow-red-50/50 transition-all"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-bold text-stefto-blue text-xs uppercase tracking-widest">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-stefto-red focus:shadow-lg focus:shadow-red-50/50 transition-all"
                                        placeholder="email@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-bold text-stefto-blue text-xs uppercase tracking-widest">Phone Number</label>
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
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-bold text-stefto-blue text-xs uppercase tracking-widest">Preferred Location</label>
                                    <select
                                        className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-stefto-red transition-all"
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    >
                                        <option value="Select Location">Select Location</option>
                                        <option>Gurugram</option>
                                        <option>Moti Nagar</option>
                                        <option>Uttam Nagar</option>
                                        <option>Noida</option>
                                        <option>Pune</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-bold text-stefto-blue text-xs uppercase tracking-widest">Position Interested In</label>
                                    <select
                                        className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-stefto-red transition-all"
                                        value={formData.position}
                                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                    >
                                        <option value="Select Position">Select Position</option>
                                        {jobs.map(j => <option key={j.id}>{j.title}</option>)}
                                        <option>Other / Future Roles</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-bold text-stefto-blue text-xs uppercase tracking-widest">Total Experience</label>
                                    <select
                                        className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-stefto-red transition-all"
                                        value={formData.experience}
                                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                    >
                                        <option value="Select Experience">Select Experience</option>
                                        <option>Fresher</option>
                                        <option>0 - 1 Year</option>
                                        <option>1 - 3 Years</option>
                                        <option>3 - 5 Years</option>
                                        <option>5+ Years</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2 flex flex-col gap-1.5">
                                    <label className="font-bold text-stefto-blue text-xs uppercase tracking-widest">Upload Resume</label>
                                    <motion.div
                                        whileHover={{ scale: 1.01 }}
                                        className={`relative border-4 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center transition-all cursor-pointer group ${resume ? 'border-green-400 bg-green-50' : 'border-gray-200 hover:border-stefto-red/30 hover:bg-red-50/20'}`}
                                    >
                                        <input
                                            type="file"
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            accept=".pdf,.doc,.docx"
                                            onChange={(e) => setResume(e.target.files[0])}
                                        />
                                        <Upload className={`transition-colors mb-4 ${resume ? 'text-green-500' : 'text-gray-300 group-hover:text-stefto-red'}`} size={44} />
                                        <p className={`font-bold text-sm ${resume ? 'text-green-600' : 'text-gray-500'}`}>
                                            {resume ? `Upload successfully: ${resume.name}` : 'Click or Drag Resume here'}
                                        </p>
                                        <p className={`text-xs mt-2 ${resume ? 'text-green-500' : 'text-gray-400'}`}>
                                            {resume ? 'File ready for submission' : 'Maximum file size: 5MB (PDF/Docx only)'}
                                        </p>
                                    </motion.div>
                                </div>
                                <div className="md:col-span-2">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        disabled={loading}
                                        type="submit"
                                        className="w-full btn-primary py-5 rounded-2xl flex items-center justify-center gap-4 text-lg disabled:opacity-50 shadow-xl shadow-stefto-blue/20"
                                    >
                                        {loading ? 'Submitting...' : 'Submit Application'} <Send size={20} />
                                    </motion.button>
                                    <AnimatePresence>
                                        {status.msg && (
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className={`mt-6 text-center font-bold p-4 rounded-xl ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                                            >
                                                {status.msg}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 8: Culture Gallery - Beyond Work */}
            <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-stefto-blue/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-stefto-red/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 mb-14">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-stefto-red/5 text-stefto-red text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.2em]">
                            <Heart size={14} /> Culture
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue tracking-tight">Beyond <span className="text-stefto-red">Work</span></h2>
                        <p className="text-gray-500 mt-3 max-w-lg mx-auto">Culture, connection, and celebration — glimpses of life at Stefto.</p>
                    </motion.div>
                </div>

                {/* Row 1: Scrolling Left */}
                <div className="relative mb-2 overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="animate-slide-gallery">
                        {[...Array(2)].map((_, setIdx) => (
                            <React.Fragment key={setIdx}>
                                {[
                                    { src: "/assets/Photos/1.png", label: "Team Bonding" },
                                    { src: "/assets/Photos/2.png", label: "Collaboration" },
                                    { src: "/assets/Photos/3.png", label: "Celebrations" },
                                    { src: "/assets/Photos/4.png", label: "Office Vibes" }
                                ].map((img, i) => (
                                    <div
                                        key={`row1-${setIdx}-${i}`}
                                        className="flex-shrink-0 mx-2 w-[380px] h-[260px] rounded-2xl overflow-hidden relative group cursor-pointer"
                                        style={{ boxShadow: '0 8px 32px rgba(0,51,102,0.10)' }}
                                    >
                                        <div className="w-full h-full bg-white">
                                            <img
                                                src={img.src}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                alt={img.label}
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-stefto-blue/80 via-stefto-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest border border-white/30">
                                                {img.label}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Row 2: Scrolling Right (reverse) */}
                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="animate-slide-reverse">
                        {[...Array(2)].map((_, setIdx) => (
                            <React.Fragment key={setIdx}>
                                {[
                                    { src: "/assets/Photos/5.png", label: "Fun at Work" },
                                    { src: "/assets/Photos/6.png", label: "Team Spirit" },
                                    { src: "/assets/Photos/7.png", label: "Events" },
                                    { src: "/assets/Photos/8.png", label: "Together We Grow" }
                                ].map((img, i) => (
                                    <div
                                        key={`row2-${setIdx}-${i}`}
                                        className="flex-shrink-0 mx-2 w-[380px] h-[260px] rounded-2xl overflow-hidden relative group cursor-pointer"
                                        style={{ boxShadow: '0 8px 32px rgba(255,0,0,0.08)' }}
                                    >
                                        <div className="w-full h-full bg-white">
                                            <img
                                                src={img.src}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                alt={img.label}
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-stefto-red/70 via-stefto-red/15 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest border border-white/30">
                                                {img.label}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 9: Growth Opportunities */}
            <section className="section-padding bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 opacity-50"></div>
                <div className="container mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-14"
                    >
                        <div className="inline-flex items-center gap-2 bg-stefto-blue/5 text-stefto-blue text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.2em]">
                            <TrendingUp size={14} /> Growth
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-stefto-blue mb-4 tracking-tight">Unlimited <span className="text-stefto-red">Growth</span></h2>
                        <p className="text-gray-500 max-w-lg mx-auto">We believe in promoting from within. 70% of our leadership team started their journey at Stefto in entry-level positions.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            { title: "Certifications", text: "Ongoing technical certifications & industry-recognized workshops.", color: "from-blue-50 to-blue-100", icon: <GraduationCap size={22} className="text-stefto-blue" />, border: "border-stefto-blue" },
                            { title: "Mentorship", text: "1-on-1 mentorship programs with industry veterans & leaders.", color: "from-red-50 to-red-100", icon: <Users size={22} className="text-stefto-red" />, border: "border-stefto-red" },
                            { title: "Leadership Track", text: "Clear career progression with fast-track promotion pathways.", color: "from-green-50 to-green-100", icon: <TrendingUp size={22} className="text-green-600" />, border: "border-green-500" },
                            { title: "Skill Development", text: "Weekly learning sessions, tech talks, and cross-functional exposure.", color: "from-purple-50 to-purple-100", icon: <Sparkles size={22} className="text-purple-600" />, border: "border-purple-500" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className={`bg-white p-7 rounded-2xl shadow-sm border-l-4 ${item.border} hover:shadow-xl transition-all duration-300 flex items-start gap-5 cursor-default group`}
                            >
                                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-stefto-blue text-sm mb-1">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 10: Professional Footer Banner */}
            <section className="py-12 bg-stefto-dark text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-stefto-blue via-stefto-red to-stefto-blue"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-stefto-blue/5 rounded-full blur-3xl"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="flex flex-col md:flex-row items-center justify-between gap-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-stefto-red/20 rounded-xl flex items-center justify-center">
                                <Briefcase size={22} className="text-stefto-red" />
                            </div>
                            <div>
                                <h3 className="text-xl font-extrabold">Ready to start your journey?</h3>
                                <p className="text-gray-400 text-sm">Browse our open positions and apply today.</p>
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('jobs').scrollIntoView({ behavior: 'smooth' })}
                            className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
                        >
                            View Open Positions <ArrowRight size={18} />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

        </main>
    );
};

export default Careers;
