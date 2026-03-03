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
                            className="flex-shrink-0 w-[320px] md:w-[400px] mx-4 group/card"
                        >
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative h-full flex flex-col justify-between transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-stefto-blue/20">
                                {/* Quote Icon Decorative */}
                                <div className="absolute top-6 right-6 text-gray-100 opacity-50 group-hover/card:text-stefto-blue/10 transition-colors duration-500">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-gray-600 italic mb-4 whitespace-normal text-base leading-relaxed relative z-10">"{t.text}"</p>
                                    <div className="flex gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                                <div className="border-t border-gray-100 pt-6 mt-auto">
                                    <h4 className="font-extrabold text-xl text-stefto-blue mb-1 uppercase tracking-wider">{t.name}</h4>
                                    <p className="text-sm text-stefto-red font-bold tracking-wide">{t.company}</p>
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
