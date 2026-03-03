import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        q: "What is Stefto?",
        a: "Stefto is an AI-powered digital debt collection and recovery brand that leverages technology, data analytics, and human empathy to optimize debt recovery for BFSI, Fintech, and Telecom sectors."
    },
    {
        q: "How does AI help in debt collection?",
        a: "AI helps by predicting payment behaviors, optimizing contact times, using chatbots for 24/7 engagement, and segmenting debtors to apply the most effective recovery strategy."
    },
    {
        q: "Which industries does Stefto serve?",
        a: "We serve a wide range of industries including Banking (NBFCs), Fintech, E-commerce, Telecom, and Insurance."
    },
    {
        q: "Is Stefto a collection agency or a technology provider?",
        a: "We are both. We provide end-to-end recovery services powered by our proprietary digital solutions like CreditKlick."
    },

    {
        q: "What is CreditKlick?",
        a: "CreditKlick is Stefto's proprietary digital solution designed to streamline credit management and enhance debtor engagement through automated digital channels."
    }
];

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex justify-between items-center p-6 bg-white text-left font-bold text-stefto-blue hover:bg-gray-50"
                    >
                        <span>{faq.q}</span>
                        {activeIndex === index ? <ChevronUp className="text-stefto-red" /> : <ChevronDown />}
                    </button>
                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="bg-gray-50 border-t"
                            >
                                <div className="p-6 text-gray-600 leading-relaxed">
                                    {faq.a}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
