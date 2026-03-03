import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import Hero from '../components/Hero';
import { Calendar, User, ArrowLeft, Share2, Tag, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogData.find(b => b.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
        if (blog) {
            document.title = `${blog.title} | Stefto Insights`;
        }
    }, [blog, id]);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-stefto-blue mb-4">Article Not Found</h2>
                    <p className="text-gray-500 mb-8">The insight you are looking for might have been moved or removed.</p>
                    <Link to="/insights" className="btn-primary">Back to Insights</Link>
                </div>
            </div>
        );
    }

    // Recommendation logic: show 2 other blogs
    const recommendations = blogData.filter(b => b.id !== blog.id).slice(0, 2);

    return (
        <main className="bg-white">
            {/* Minimalist Blog Hero */}
            <section className="relative pt-44 pb-20 bg-stefto-dark text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src={blog.img} alt="Background" className="w-full h-full object-cover blur-sm" />
                </div>
                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-4 py-1 bg-stefto-red text-white text-xs font-black uppercase tracking-widest rounded-full mb-6 italic">
                            {blog.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                            {blog.title}
                        </h1>
                        <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-bold text-gray-400">
                            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                                <Calendar size={16} className="text-stefto-red" /> {blog.date}
                            </span>
                            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                                <User size={16} className="text-stefto-red" /> {blog.author}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <Link to="/insights" className="inline-flex items-center gap-2 text-stefto-red font-black text-sm uppercase mb-12 hover:gap-4 transition-all">
                            <ArrowLeft size={18} /> Back to Insights
                        </Link>

                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-light article-content">
                            {/* Rendering HTML content injected from the data */}
                            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                        </div>

                        {/* Article Footer */}
                        <div className="mt-16 pt-8 border-t flex flex-wrap justify-between items-center gap-8">
                            <div className="flex items-center gap-4">
                                <span className="font-bold text-stefto-blue">Share this insight:</span>
                                <div className="flex gap-2">
                                    <button className="p-3 bg-gray-50 rounded-xl hover:bg-stefto-blue hover:text-white transition-all"><Share2 size={18} /></button>
                                    <button className="p-3 bg-gray-50 rounded-xl hover:bg-stefto-blue hover:text-white transition-all font-bold">LinkedIn</button>
                                    <button className="p-3 bg-gray-50 rounded-xl hover:bg-stefto-blue hover:text-white transition-all font-bold">Twitter</button>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <span className="bg-stefto-red/10 text-stefto-red px-3 py-1 rounded-lg text-xs font-bold uppercase">#Fintech</span>
                                <span className="bg-stefto-red/10 text-stefto-red px-3 py-1 rounded-lg text-xs font-bold uppercase">#AI</span>
                                <span className="bg-stefto-red/10 text-stefto-red px-3 py-1 rounded-lg text-xs font-bold uppercase">#Recovery</span>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3 space-y-12 sticky top-32 self-start">
                        {/* Related Posts */}
                        <div>
                            <h3 className="text-2xl font-black text-stefto-blue mb-8 uppercase tracking-tighter">Related <span className="text-stefto-red">Reading</span></h3>
                            <div className="space-y-6">
                                {recommendations.map(r => (
                                    <Link key={r.id} to={`/blog/${r.id}`} className="block group">
                                        <div className="flex gap-4 items-center">
                                            <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                                                <img src={r.img} alt={r.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-stefto-blue group-hover:text-stefto-red transition-colors text-sm leading-tight mb-2">
                                                    {r.title}
                                                </h4>
                                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{r.date}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-stefto-blue p-10 rounded-[2.5rem] text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-stefto-red opacity-20 rounded-full -mr-12 -mt-12"></div>
                            <h4 className="text-2xl font-bold mb-6 relative z-10">Need a specialized recovery strategy?</h4>
                            <p className="text-blue-100 text-sm mb-8 relative z-10 font-light mb-10 leading-relaxed italic">
                                "Our insights are just the beginning. Let's talk about how we can implement these strategies for your business."
                            </p>
                            <Link to="/contact" className="btn-primary w-full justify-center">Contact Experts</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BlogDetail;
