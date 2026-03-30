import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const uniqueTestimonials = [
    {
        name: "Mrs. Sumona",
        company: "(AGENCY MANAGER) - CITI BANK",
        text: "Stefto knows how to run any project aggressively for Banks/NBFCs needs and really understands the process delivery in terms of debt collection and recovery. They are also very helpful with competitive intelligence along with technology."
    },
    {
        name: "Ajay Yadav",
        company: "(Collection Head - Unsecured) - HeroFin Corp",
        text: "Stefto has been instrumental in building the business right from any stage of its growth and into any vertical. Their understanding of our product has helped us in achieving the goals with technical logic. They have also helped us in late-stage collections and continue to partner of preference with us as we scale up."
    },
    {
        name: "Mr. Vineet Kakkar",
        company: "(ZONAL HEAD) - SBIC",
        text: "It has been a great experience and continuous journey with the Stefto Team. The organisation has strong leadership in delivery and managing the businesses very effectively. What sets them apart is their vested interest in understanding the nuances of the business and the culture of the organization."
    }
];

// Duplicate the list 10 times to have enough room for infinite scroll on wide screens
const testimonials = [];
for (let i = 0; i < 10; i++) {
    testimonials.push(...uniqueTestimonials);
}

const TestimonialSlider = () => {
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const isPausedRef = useRef(false);

    // Sync state with ref for interval access
    useEffect(() => {
        isPausedRef.current = isPaused;
    }, [isPaused]);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        // Initialize scroll position safely in the middle of our 10 sets
        const oneSetWidth = container.scrollWidth / 10;
        container.scrollLeft = oneSetWidth * 4;

        const autoScroll = () => {
            if (!isPausedRef.current) {
                container.scrollLeft += 2; // Move right-to-left faster
            }
            // Enforce infinite loop within the interval to be precise
            const setWidth = container.scrollWidth / 10;
            if (container.scrollLeft >= setWidth * 6) {
                container.scrollLeft -= setWidth;
            } else if (container.scrollLeft <= setWidth * 2) {
                container.scrollLeft += setWidth;
            }
        };

        const interval = setInterval(autoScroll, 20); // Faster interval

        const handleInfiniteScroll = () => {
            const setWidth = container.scrollWidth / 10;
            if (container.scrollLeft >= setWidth * 6) {
                container.scrollLeft -= setWidth;
            } else if (container.scrollLeft <= setWidth * 2) {
                container.scrollLeft += setWidth;
            }
        };

        container.addEventListener('scroll', handleInfiniteScroll);

        return () => {
            clearInterval(interval);
            container.removeEventListener('scroll', handleInfiniteScroll);
        };
    }, []);

    return (
        <div className="relative group overflow-hidden py-2">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-stefto-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-stefto-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div
                ref={scrollRef}
                className="w-full overflow-x-auto scrollbar-hide py-4 bg-transparent flex cursor-grab active:cursor-grabbing relative z-10"
                onMouseEnter={() => setIsPaused(true)} // Pauses when cursor is ON it
                onMouseLeave={() => setIsPaused(false)}  // Moves when cursor leaves
            >
                {/* Visual hints for scrolling border placed outside the scroll container to prevent text cutoff */}

                <div className="flex whitespace-nowrap">
                    {testimonials.map((t, index) => (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                            viewport={{ once: true }}
                            key={index} 
                            className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[420px] mx-3 md:mx-5 group/card"
                        >
                            <div className="bg-white/80 backdrop-blur-3xl p-5 md:p-8 rounded-3xl shadow-sm border border-gray-100/50 relative h-full flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-stefto-blue/20 whitespace-normal">
                                {/* Quote Icon Decorative */}
                                <div className="absolute top-5 right-5 text-gray-200 opacity-60 group-hover/card:text-stefto-red/20 group-hover/card:scale-110 group-hover/card:-rotate-6 transition-all duration-500">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>

                                <div>
                                    <div className="flex gap-1 mb-3 md:mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-500 drop-shadow-sm" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed relative z-10 font-medium tracking-wide">"{t.text}"</p>
                                </div>
                                <div className="border-t border-gray-100 pt-4 md:pt-5 mt-5 md:mt-6 flex items-center gap-4 relative z-10">
                                    <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-stefto-blue to-stefto-dark flex items-center justify-center text-white font-extrabold text-sm md:text-base shadow-lg group-hover/card:shadow-stefto-blue/40 group-hover/card:scale-110 transition-all duration-300">
                                        {t.name.replace(/^(Mr\.|Mrs\.)\s*/i, '').charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-base md:text-lg text-stefto-dark mb-0.5 tracking-tight group-hover/card:text-stefto-blue transition-colors duration-300">{t.name}</h4>
                                        <p className="text-[10px] md:text-xs text-stefto-red font-black tracking-widest uppercase">{t.company}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default TestimonialSlider;
