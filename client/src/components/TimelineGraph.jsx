import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const milestones = [
    { year: 2007, event: "Company Establishment & IMS Founding", details: "Started as Incredible Management Services with a vision for professional recovery." },
    { year: 2022, event: "Creditklick Launch & Noida Office", details: "Launched our flagship fintech ecosystem and expanded to Noida Tech Hub." },
    { year: 2023, event: "IMS Rebranding to Stefto", details: "Strategic rebranding reflecting our evolution into a tech-first global partner." },
    { year: 2024, event: "Creditklick App Launch", details: "Mobilizing financial intelligence with a seamless, tailored user experience." },
    { year: 2025, event: "Uttam Nagar & Pune Expansion", details: "Opening new regional operations centers to scale our domestic reach." },
    { year: 2026, event: "Future-Ready: Digital Dominance", details: "Leading the industry with AI-driven debt management and pan-India presence." },
];

// TimelineGraph.jsx - Progress logic updated
const TimelineGraph = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 50%"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const progress = useTransform(scaleY, [0, 1], ["5%", "95%"]);

    return (
        <div className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-24">
                <h2 className="text-4xl md:text-6xl font-black text-stefto-blue mb-6">Our Growth Journey</h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg">A timeline of innovation, expansion, and excellence from 2007 to the future.</p>
            </div>

            <div className="relative max-w-5xl mx-auto px-4" ref={containerRef}>
                {/* Vertical Progress Line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 rounded-full hidden md:block">
                    <motion.div
                        style={{ height: progress, backgroundColor: '#ef4444' }}
                        className="absolute top-0 w-full origin-top rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                    />

                    {/* Animated Arrow Head - Synced with progress height */}
                    <motion.div
                        style={{ top: progress }}
                        className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-stefto-red rounded-full border-4 border-white shadow-lg flex items-center justify-center -mt-3 z-20"
                    >
                        <div className="w-2 h-2 border-r-2 border-b-2 border-white rotate-45 mb-1" />
                    </motion.div>
                </div>

                {/* Mobile Line */}
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-200 md:hidden">
                    <motion.div
                        style={{ height: progress, backgroundColor: '#ef4444' }}
                        className="absolute top-0 w-full bg-stefto-red origin-top"
                    />
                </div>

                <div className="space-y-24">
                    {milestones.map((m, index) => (
                        <div key={index} className={`relative flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            {/* Card Content */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`w-full md:w-[45%] p-8 bg-white rounded-3xl shadow-xl border border-gray-100 relative group hover:shadow-2xl transition-all ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}
                            >
                                <span className="absolute -top-4 bg-stefto-blue text-white px-6 py-1 rounded-full text-lg font-black shadow-lg">
                                    {m.year}
                                </span>
                                <h3 className="text-2xl font-bold text-stefto-blue mt-4 mb-3">{m.event}</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">{m.details}</p>

                                {/* Decorative Arrow Tip */}
                                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-r rotate-45 hidden md:block ${index % 2 === 0 ? '-left-2 border-l border-b border-t-0 border-r-0' : '-right-2'}`} />
                            </motion.div>

                            {/* Point on the line */}
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center z-10">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    className="w-5 h-5 bg-stefto-blue rounded-full border-4 border-white shadow-inner"
                                />
                            </div>

                            {/* Spacer for empty side */}
                            <div className="hidden md:block w-[45%]" />
                        </div>
                    ))}
                </div>
            </div>

            {/* End Point Indicator */}
            <div className="mt-32 flex flex-col items-center">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-stefto-blue font-black uppercase tracking-[0.5em] text-sm"
                >
                    Continuously Evolving
                </motion.div>
                <div className="w-1 h-20 bg-gradient-to-b from-stefto-blue to-transparent mt-4 rounded-full" />
            </div>
        </div>
    );
};

export default TimelineGraph;
