import React, { useState } from 'react';
import Hero from '../components/Hero';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, Tag, Clock, BookOpen, TrendingUp, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { blogData } from '../data/blogData';

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, delay: i * 0.06, ease: "easeOut" }
    })
};

const Insights = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Tech', 'Strategy', 'Industry', 'Case Study'];

    const filteredBlogs = blogData.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.category.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || blog.category.toLowerCase() === activeCategory.toLowerCase();
        return matchesSearch && matchesCategory;
    });

    return (
        <main className="overflow-x-hidden">
            {/* Section 1: Hero */}
            <Hero
                title="Insights from Stefto"
                subtitle="Stay ahead of the curve with latest trends in AI, debt recovery, and customer engagement from the industry experts."
                bgImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Section 2: Search & Filter Bar */}
            <section className="py-8 bg-white sticky top-[72px] z-40 shadow-sm border-b border-gray-100">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full md:w-96"
                    >
                        <input
                            type="text"
                            placeholder="Search articles, topics, insights..."
                            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:border-stefto-blue focus:shadow-lg focus:shadow-stefto-blue/5 outline-none transition-all bg-gray-50 focus:bg-white"
                            onChange={(e) => setSearchTerm(e.target.value)}
                            value={searchTerm}
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide"
                    >
                        {categories.map((cat, i) => (
                            <motion.button
                                key={cat}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full border font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                                    activeCategory === cat
                                        ? 'bg-stefto-blue text-white border-stefto-blue shadow-lg shadow-stefto-blue/20'
                                        : 'border-gray-200 text-gray-600 hover:border-stefto-blue hover:text-stefto-blue bg-white'
                                }`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Section 3: Featured Post */}
            <section className="section-padding bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70"></div>
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="w-10 h-10 bg-stefto-red/10 rounded-xl flex items-center justify-center">
                            <Sparkles size={20} className="text-stefto-red" />
                        </div>
                        <h2 className="text-2xl font-extrabold text-stefto-blue uppercase tracking-wider">Featured Article</h2>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <Link to={`/blog/${blogData[0].id}`} className="block group">
                            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl flex flex-col lg:flex-row border border-gray-100 group-hover:border-stefto-red/30 transition-all duration-500">
                                <div className="lg:w-3/5 h-[350px] lg:h-[450px] relative overflow-hidden">
                                    <img src={blogData[0].img} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                    <div className="absolute top-8 left-8 bg-stefto-red text-white font-black px-5 py-2 rounded-xl shadow-lg text-xs uppercase tracking-[0.2em]">
                                        <span className="flex items-center gap-2"><Sparkles size={14} /> Featured</span>
                                    </div>
                                    <div className="absolute bottom-8 left-8 flex items-center gap-4 text-white/80 text-sm font-medium">
                                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {blogData[0].date}</span>
                                        <span className="flex items-center gap-1.5"><Clock size={14} /> 8 min read</span>
                                    </div>
                                </div>
                                <div className="lg:w-2/5 p-10 lg:p-14 flex flex-col justify-center bg-white">
                                    <div className="inline-flex items-center gap-2 bg-stefto-red/5 text-stefto-red text-xs font-black px-4 py-1.5 rounded-full mb-6 self-start uppercase tracking-widest">
                                        {blogData[0].category}
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-extrabold text-stefto-blue mb-6 leading-tight group-hover:text-stefto-red transition-colors duration-300">
                                        {blogData[0].title}
                                    </h2>
                                    <p className="text-gray-500 mb-8 leading-relaxed line-clamp-3">
                                        {blogData[0].summary} In this comprehensive guide, we explore how data lakes and neural networks are reshaping the collections industry.
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="btn-primary self-start text-sm inline-flex items-center gap-2">
                                            Read Full Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                                            <User size={14} /> {blogData[0].author}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Section 4: Blog Grid */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 opacity-50"></div>
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="flex items-center justify-between mb-12"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-stefto-blue/10 rounded-xl flex items-center justify-center">
                                <BookOpen size={20} className="text-stefto-blue" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-extrabold text-stefto-blue">Latest Articles</h2>
                                <p className="text-sm text-gray-400 mt-0.5">{filteredBlogs.length > 1 ? filteredBlogs.length - 1 : 0} articles found</p>
                            </div>
                        </div>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory + searchTerm}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        >
                            {filteredBlogs.slice(1).map((blog, i) => (
                                <motion.div
                                    key={blog.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={i % 3}
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-stefto-blue/10 transition-all duration-500 group cursor-pointer"
                                >
                                    <Link to={`/blog/${blog.id}`} className="block">
                                        <div className="h-56 overflow-hidden relative">
                                            <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-black text-stefto-blue uppercase tracking-widest shadow-sm">
                                                {blog.category}
                                            </div>
                                        </div>
                                        <div className="p-7">
                                            <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 mb-4 uppercase tracking-wider">
                                                <span className="flex items-center gap-1.5"><Calendar size={12} /> {blog.date}</span>
                                                <span className="flex items-center gap-1.5"><User size={12} /> {blog.author}</span>
                                            </div>
                                            <h3 className="text-lg font-extrabold text-stefto-blue mb-3 leading-snug group-hover:text-stefto-red transition-colors duration-300 line-clamp-2">{blog.title}</h3>
                                            <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">{blog.summary}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-stefto-red font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                                    Read More <ArrowRight size={14} />
                                                </span>
                                                <span className="text-[10px] text-gray-400 font-medium flex items-center gap-1">
                                                    <Clock size={12} /> 5 min
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredBlogs.length <= 1 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <Search size={48} className="text-gray-200 mx-auto mb-4" />
                            <p className="text-gray-400 text-lg font-medium">No articles found matching your search.</p>
                            <button onClick={() => { setSearchTerm(''); setActiveCategory('All'); }} className="text-stefto-red font-bold mt-4 hover:underline">Clear Filters</button>
                        </motion.div>
                    )}

                    {filteredBlogs.length > 4 && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="mt-16 flex justify-center"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                Load More Posts <ArrowRight size={16} />
                            </motion.button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Section 5: Trending Topics */}
            <section className="section-padding bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 opacity-60"></div>
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="flex items-center gap-3 mb-10"
                    >
                        <div className="w-10 h-10 bg-stefto-red/10 rounded-xl flex items-center justify-center">
                            <TrendingUp size={20} className="text-stefto-red" />
                        </div>
                        <h2 className="text-2xl font-extrabold text-stefto-blue">Trending Topics</h2>
                    </motion.div>
                    <div className="flex flex-wrap gap-3">
                        {['AI Debt Collection', 'BPO Trends 2026', 'Fintech Risk', 'CreditKlick Features', 'Omichannel Engagement', 'Legal Recovery', 'Compliance Audit', 'Empathy Training', 'Startup Collections'].map((tag, i) => (
                            <motion.span
                                key={tag}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={scaleIn}
                                custom={i}
                                whileHover={{ scale: 1.08, y: -3, transition: { duration: 0.2 } }}
                                className="bg-white px-7 py-3.5 rounded-2xl border border-gray-100 hover:border-stefto-red hover:text-stefto-red hover:shadow-lg hover:shadow-red-50 cursor-pointer transition-all duration-300 font-bold text-gray-600 text-sm"
                            >
                                # {tag}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: CTA */}
            <section className="py-20 bg-stefto-dark text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stefto-blue via-stefto-red to-stefto-blue"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-stefto-blue/10 rounded-full blur-3xl"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Have a Story to Share?</h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">Partner with us to showcase your success in AI-driven debt recovery.</p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/contact" className="btn-primary">Get in Touch</Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Insights;
