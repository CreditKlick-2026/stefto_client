import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ title, subtitle, bgImage, ctaText, ctaLink, height = "h-[70vh]" }) => {
    return (
        <section className={`relative ${height} flex items-center overflow-hidden pt-44 pb-24 md:pb-32`}>
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat overflow-hidden"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-stefto-blue/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-stefto-dark/90 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        {title}
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                        {subtitle}
                    </p>
                    {ctaText && (
                        <div className="flex gap-4">
                            <a href={ctaLink} className="btn-primary flex items-center justify-center">
                                {ctaText}
                            </a>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Bottom Wavy Divider - Aggressive overlap to fix rendering gaps on mobile */}
            <div className="absolute -bottom-[2px] left-0 w-full overflow-hidden leading-[0] scale-x-[1.05] transform-gpu z-20">
                <svg className="relative block w-full h-12 md:h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    {/* Main Wavy Shape (White Fill) - Extended vertically to 150 to ensure bleed */}
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V150H0V95.8C58,111.9,122.28,112.92,185.67,95.58c57.53-15.74,107.54-52,135.72-39.14Z"
                        fill="#FFFFFF"
                    ></path>
                    {/* Wavy Red Border */}
                    <path
                        d="M0,95.8C58,111.9,122.28,112.92,185.67,95.58c57.53-15.74,107.54-52,135.72-39.14c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="5"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
