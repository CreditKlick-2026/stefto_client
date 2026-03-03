import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Target, ArrowLeft, Download, FileText } from 'lucide-react';

const caseStudyData = {
    'collect': {
        title: 'Revolutionizing Fintech Debt Recovery',
        subtitle: 'A strategic blueprint for AI-driven delinquency management and behavioral recovery for India\'s leading BNPL providers.',
        client: 'Tier-1 Multinational Fintech / BNPL Provider',
        challenge: `The client, a dominant force in India's digital lending space, faced a critical operational bottleneck in early 2025. With an active portfolio exceeding 8 million users and a monthly disbursement of over ₹2,500 Crore, their delinquency rates for small-ticket loans (₹500 - ₹5,000) began to escalate at an alarming rate. 

Traditional recovery methods were failing on multiple fronts. Manual calling by third-party BPOs was proving to be a massive drain on resources, with the cost-to-collect often exceeding the actual recovery amount for 45% of the portfolio. Furthermore, the lack of data-driven prioritization meant that agents were wasting 70% of their time on 'Self-Correctors' (users who would pay anyway) while high-risk 'Skippers' were being reached too late. 

Perhaps most critically, the aggressive tone used by traditional agencies was resulting in a PR nightmare, with social media backlash threatening the brand's long-term viability and customer retention rates. The client needed a solution that was scalable, cost-efficient, ethical, and most importantly, effective at recovering dues without destroying customer relationships.`,
        solution: `Stefto deployed its 'Intelligent Recovery Ecosystem', a multi-layered technological framework designed to automate the mundane and humanize the critical segments of the recovery lifecycle.

1. **AI-Powered Behavioral Engine:** We integrated directly with the client's data lake to analyze over 200 behavioral variables—from app login frequency and purchase categories to historical repayment velocity and CreditKlick diagnostics.
2. **Dynamic Nudge Orchestration:** We moved away from 'Static Calling' to 'Intelligent Nudging.' Our system orchestrated a sequence of hyper-personalized messages across WhatsApp, SMS, and in-app notifications, optimized for the exact minute the user was most likely to engage.
3. **Sentiment-Based Routing:** For accounts that required human intervention, we used NLP (Natural Language Processing) on chat interactions and initial voice-bot responses to identify the debtor's sentiment. 'Willing but Unable' debtors were routed to empathy-trained negotiators, while 'Able but Unwilling' debtors were routed to strict compliance experts.
4. **Frictionless Digital Settlement:** We implemented a unified 'One-Click Pay' portal integrated into every communication, supporting UPI, Net Banking, and Debit Cards, reducing the 'Intent-to-Payment' time by 65%.`,
        executiveSummary: `<h3>The Crisis of Scale in Digital Lending</h3>
        <p>In the high-velocity world of Indian Fintech, the ability to lend is common, but the ability to recover efficiently is what separates market leaders from failures. Our client was at a crossroads. Their rapid acquisition strategy had outpaced their recovery infrastructure. They were managing a 'Long Tail' of debt—millions of small accounts that, if left unrecovered, would lead to a significant spike in Net NPAs and impact their valuation before a planned IPO.</p>
        
        <h3>A Paradigm Shift: From Collection to Resolution</h3>
        <p>Our initial audit revealed a fundamental flaw: the client viewed recovery as a 'Punitive' process. We proposed shifting this to a 'Resolution' process. By leveraging the Stefto AI engine, we aimed to treat every delinquent user as a 'Customer in Financial Distress' rather than a 'Defaulter.' This psychological pivot allowed us to use messaging that focused on credit-education and future financial health, which resonates far better with India's Gen-Z and Millennial borrower base.</p>
        
        <h3>Technological Backbone</h3>
        <p>The implementation involved a secure API-led integration between Stefto's proprietary platform and the client's core banking system (CBS). We ensured 100% data encryption and compliance with the RBI's 'Digital Lending Guidelines 2024.' Our dashboard provided the client's management team with real-time visibility into every interaction, every nudge, and every rupee recovered, bringing a level of transparency that was previously impossible with traditional BPOs.</p>`,
        strategyDeepDive: `<h3>Phased Implementation Strategy</h3>
        <p>The deployment was executed across three strategic phases, ensuring minimal disruption to the client's existing operations while maximizing immediate recovery impact.</p>
        
        <h3>Phase 1: Diagnostic & Benchmarking (Month 1)</h3>
        <p>We ran a 'Shadow Pilot' on 50,000 delinquent accounts. We analyzed the effectiveness of existing scripts against Stefto's AI-generated 'Empathy-First' scripts. The results were immediate: our AI-driven nudges saw a 22% higher click-through rate and a 15% higher payment conversion without a single human call.</p>
        
        <h3>Phase 2: Full-Scale Automation & Digital Outreach (Months 2-4)</h3>
        <p>We rolled out the automation engine across the entire portfolio. The system was trained to handle 'Early-Stage Delinquency' (Bucket 0 and Bucket 1) entirely through digital channels. By automating this, we freed up the client's internal team to focus on 'Hard Recovery' (Bucket 3+). We also integrated CreditKlick data to show users the real-time impact of their default on their CIBIL scores, which served as a powerful 'Value-Based' nudge.</p>
        
        <h3>Phase 3: Human-in-the-Loop Optimization (Months 5-6)</h3>
        <p>For the 'Bucket 2' accounts (30-60 days past due), we deployed our 'Elite Negotiation Team.' These agents didn't follow rigid scripts; they used AI-suggested 'Restructuring Packages.' If the AI detected a permanent loss of income, it suggested a 6-month EMI plan. If it detected temporary liquidity issues, it offered a 15-day grace period. This level of granular customization resulted in a 40% increase in 'Promise-to-Pay' (PTP) fulfillment.</p>
        
        <h3>Synthesized Results & Long-Term Prognosis</h3>
        <p>By the end of the six-month period, the results were transformative. The client's recovery volume increased by 35%, while their operational costs for collection dropped by 45%. More importantly, they retained 75% of the 'Delinquent' users as 'Active' customers, proving that you can recover debt while preserving the lifetime value (LTV) of a customer.</p>`,
        results: [
            '35% improvement in debt resolution rate across all buckets',
            '₹150Cr+ recovered within the initial six-month pilot phase',
            '45% reduction in total cost-to-collect (C2C) ratio',
            'Zero compliance grievances filed with the Ombudsman',
            '88% customer retention rate for rehabilitated accounts',
            'Real-time compliance monitoring and automated audit logs'
        ],
        metrics: [
            { label: 'Resolution Rate', val: '+35%' },
            { label: 'Managed', val: '₹150Cr+' },
            { label: 'Opex Savings', val: '45%' },
            { label: 'CIBIL Impact', val: 'Direct' }
        ],
        img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200'
    },
    'analytics': {
        title: 'Precision Analytics for Risk Mitigation',
        subtitle: 'Leveraging Big Data and Machine Learning to predict, prevent, and recover high-value defaults for a Top-3 Private Bank.',
        client: 'Leading Tier-1 Indian Private Bank',
        challenge: `Our client, one of India's largest private sector banks, was grappling with a surge in NPAs within their unsecured personal loan and credit card portfolios. Despite having a robust internal credit scoring system, they found that 'Traditional Scorecards' were failing to predict 'Sudden Default' scenarios caused by macroeconomic shifts or changing consumer lifestyles. 

The bank was losing over ₹500 Crore annually to early-stage defaults (defaults occurring within the first three EMIs). Most of these cases were 'Sophisticated Fraud' or 'Intentional Defaulters' who knew how to mask their risk profile during the application process. The bank needed a system that didn't just look at 'Point-in-Time' risk but provided 'Continuous Risk Monitoring' and 'Predictive Recovery' insights.`,
        solution: `Stefto deployed its 'Predictive Risk Intelligence' (PRI) suite, a deep-learning platform that sits between the Bank's core systems and the external credit bureaus like CreditKlick.

1. **Alternate Data Ingestion:** We moved beyond standard CIBIL scores. Our engine ingested 'Alternate Data' points—utility bill payment patterns, social behavior indicators, and e-commerce spending velocity—to build a 360-degree risk profile.
2. **Early Warning System (EWS):** We implemented a real-time EWS that flagged accounts showing 'Pre-Default Indicators.' These included a sudden decrease in average monthly balance (AMB) or frequent failures of small recurring payments (like OTT subscriptions).
3. **Recovery Probability Scoring:** For every non-performing account, our AI generated a 'Recovery Probability Score' (0-100). This allowed the bank to allocate their best field agents to 'High-Value/High-Prob' accounts while automating the 'Low-Prob' ones.
4. **Geo-Spatial Risk Clustering:** We identified 'Risk Hotspots'—specific geographical clusters that were showing high delinquency, allowing the bank to adjust its lending tap dynamically in those regions.`,
        executiveSummary: `<h3>The Future of Risk is Data-Driven</h3>
        <p>In modern banking, the biggest risk isn't the 'Bad Debtor'; it's the 'Invisible Risk.' Our client was lending based on historical credit records that were often 3-6 months old. In a fast-moving economy, that's an eternity. Stefto's goal was simple: Turn the Bank's data from a 'Passive Record' into an 'Active Intelligence' asset. By predicting a default before it happens, you don't just recover money; you prevent loss.</p>
        
        <h3>Moving from Reactive to Proactive</h3>
        <p>The Bank's internal recovery team was traditionally 'Reactive'—they only started working once a payment was missed. We helped them become 'Proactive.' By identifying high-risk signals 15-30 days before the EMI date, we were able to initiate 'Pre-emptive Nudges' that reminded the customer of the importance of maintaining their balance, resulting in a 20% reduction in first-payment defaults.</p>`,
        strategyDeepDive: `<h3>The Analytical Architecture</h3>
        <p>The core of our implementation was a Deep Neural Network (DNN) trained on over 10 million anonymized records from Stefto's national database. This wasn't just another 'Static Model'; it was a 'Living Engine' that evolved with market trends.</p>
        
        <h3>Phase 1: The 'Cleanup' (Months 1-2)</h3>
        <p>We started by analyzing the Bank's current NPA portfolio. Our AI identified that 15% of their 'Loss' accounts were actually 'Willful Defaulters' with hidden assets. By providing this 'Hidden Asset Intelligence' to their legal and field teams, the bank was able to recover ₹40 Crore in stagnant debt within the first 60 days.</p>
        
        <h3>Phase 2: Real-time API Integration (Months 3-5)</h3>
        <p>We integrated our PRI suite into their loan-origination-system (LOS). Every new application was now 'Stefto-Vetted.' If a profile looked good on paper but showed 'High-Risk Spending Behavior' on our alternate data engine, it was flagged for manual review. This 'Gatekeeper' approach reduced early-stage delinquency by 25% for new cohorts.</p>
        
        <h3>Phase 3: Automated Legal Outreach (Month 6+)</h3>
        <p>For accounts that didn't respond to digital or physical recovery, we implemented 'Auto-Legal.' Our system automatically generated pre-litigation notices based on the debtor's profile and sent them via speed post and digital channels simultaneously, increasing legal responsiveness by 50%.</p>
        
        <h3>Long-term Value Creation</h3>
        <p>The Bank now has a unified 'Risk-to-Recovery' dashboard. They no longer work in silos. Their lending team knows which demographics are defaulting, and their recovery team knows exactly which accounts to prioritize. We didn't just fix their NPAs; we improved their entire lending lifecycle.</p>`,
        results: [
            '25% reduction in first-payment defaults (FPD) for new credit lines',
            '₹40Cr+ recovered from stagnant NPA accounts within 60 days',
            'Successfully identified and blocked 2,500+ sophisticated fraud attempts',
            '15% reduction in overall portfolio delinquency rate (DPD 30+)',
            'Dynamic credit limit adjustments implemented for 1M+ active users'
        ],
        metrics: [
            { label: 'FPD Reduc.', val: '25%' },
            { label: 'Fraud Blocked', val: '2500+' },
            { label: 'NPA Recov.', val: '₹40Cr+' },
            { label: 'Accuracy', val: '94%' }
        ],
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200'
    },
    'customer': {
        title: 'Empathetic Postpaid Recovery for Telecom',
        subtitle: 'How relationship-first recovery transformed churn rates and maximized long-term value for a national Telecom leader.',
        client: 'India\'s Largest National ISP / Telecom Conglomerate',
        challenge: `In the hyper-competitive Indian telecom market, losing a customer to a competitor is often worse than losing a single bill payment. Our client, a national telecom leader, was facing a dual crisis: 'Unrecovered Postpaid Dues' were rising at 12% monthly, and 'Collection-Induced Churn' was at an all-time high. 

The traditional aggressive collection agency model was backfiring. Customers who missed a payment due to a technical glitch or a billing dispute were being called 10-15 times a day by rude agents. This led to immediate porting requests to other networks. The client's Brand Sentiment Index (BSI) was plummeting, and their 'Write-Off' portfolio from closed accounts had ballooned to ₹200 Crore. They needed a way to recover dues while preserving the Customer Lifetime Value (LTV).`,
        solution: `Stefto implemented a 'Customer-Centric Recovery Framework', shifting the narrative from 'Debt Collection' to 'Financial Service Reconciliation.'

1. **Usage-Based Nudging:** We integrated with their billing system to send 'Proactive Data Alerts.' If a user exceeded their data cap (often a cause of bill shock), they received an automated recommendation for a better plan *before* the bill was generated, reducing disputes by 40%.
2. **Sentiment-Aware Dialers:** We implemented a 'Tone-Analysis' layer on our out-bound systems. If a customer expressed a billing grievance, the dialer immediately removed them from the 'Collection List' and placed them in the 'Dispute Resolution Queue.'
3. **The 'Grace' Protocol:** Instead of immediate disconnection, we introduced 'Service Nudging.' Speeds were reduced to 2G levels rather than being cut off, allowing the customer to still access their UPI apps and the ISP's payment portal to clear dues.
4. **Loyalty-Linked Restructuring:** For long-term users (3+ years), we offered one-time 'Loyalty Waivers' on late fees in exchange for a 12-month commitment, turning a potential loss into a long-term revenue lock-in.`,
        executiveSummary: `<h3>The Psychology of the Telecom Debtor</h3>
        <p>Most telecom defaults in India aren't caused by a lack of funds; they are caused by 'Friction.' Whether it's a confusing bill, a failed digital payment, or a legitimate service dispute, the debtor is usually 'Frustrated' rather than 'Dishonest.' Our client's mistake was treating a frustrated customer like a thief. Stefto intervened to humanize this process. We proved that if you solve the customer's problem first, the payment follows naturally.</p>
        
        <h3>Preserving the Brand Equity</h3>
        <p>Our goal was to ensure that even a customer who eventually leaves the network does so with a positive view of the brand. By using Stefto's empathetic scripts and omnichannel communication, we were able to recover ₹120 Crore while actually *increasing* the client's NPS score among the 'Delinquent' segment. This is a first in the Indian telecom industry.</p>`,
        strategyDeepDive: `<h3>A National-Scale Strategic Rollout</h3>
        <p>Managing the recovery for a national ISP meant dealing with diverse languages, varied income groups, and complex regulatory requirements across 22 circles.</p>
        
        <h3>Phase 1: The 'Dispute First' Filter (Months 1-3)</h3>
        <p>We realized that 35% of non-payments were due to unresolved billing queries. We deployed a Stefto 'Dispute Bot' on WhatsApp. Before any collection call was made, the bot asked: "Any issues with your bill?" If the answer was yes, we fixed the bill first. This small change alone increased recovery by 20% in the first quarter.</p>
        
        <h3>Phase 2: Multilingual Omni-Channel Outreach (Months 4-6)</h3>
        <p>We deployed our AI-nudges in 12 regional languages. A user in rural Tamil Nadu received a polite nudge in Tamil, explaining how their payment record with the ISP affects their CreditKlick profile. This 'Localized Education' approach was 3x more effective than English-only calling centers.</p>
        
        <h3>Phase 3: The 'Value of Connection' Campaign (Month 7+)</h3>
        <p>For hard-to-recover accounts, we moved away from 'Threats' to 'Positive Incentives.' We partnered with local merchants to offer 'Re-connection Coupons'—if you clear your dues today, you get a discount on your next recharge or a partner service. This 'Gamified Recovery' approach reduced the terminal write-off rate by 15%.</p>
        
        <h3>Conclusion: The ROI of Empathy</h3>
        <p>The ISP now views recovery as a customer-service function. The data we've gathered has helped them improve their billing transparency and service quality. We didn't just clear their back-logs; we improved their business model.</p>`,
        results: [
            '22% increase in total collection volume within 12 months',
            '₹120Cr+ recovered from terminal write-off accounts',
            '40% reduction in billing disputes and customer escalations',
            '18% reduction in overall churn rate in the postpaid segment',
            'Industry-leading 98% NPS score for recovery interactions',
            '65% of recoveries achieved through digital-only self-service channels'
        ],
        metrics: [
            { label: 'Churn Reduc.', val: '18%' },
            { label: 'Recov. Vol.', val: '+22%' },
            { label: 'NPS Score', val: '98%' },
            { label: 'Digital Recov.', val: '65%' }
        ],
        img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200'
    }
};

const CaseStudyDetail = () => {
    const { id } = useParams();
    const data = caseStudyData[id] || caseStudyData['collect'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <main className="bg-white">
            <Hero
                title={data.title}
                subtitle={data.subtitle}
                bgImage={data.img}
                height="h-[60vh]"
            />

            <section className="py-20 -mt-20 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-16">
                                {/* The Challenge */}
                                <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-gray-100">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="bg-stefto-red/10 p-4 rounded-3xl">
                                            <Target className="text-stefto-red" size={36} />
                                        </div>
                                        <h2 className="text-4xl font-black text-stefto-blue uppercase tracking-tighter">The <span className="text-stefto-red">Challenge</span></h2>
                                    </div>
                                    <p className="text-xl text-gray-500 font-semibold mb-8 border-l-4 border-stefto-red pl-6 leading-relaxed">
                                        Client Identification: <span className="text-stefto-blue">{data.client}</span>
                                    </p>
                                    <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                                        {data.challenge.split('\n\n').map((p, i) => (
                                            <p key={i}>{p}</p>
                                        ))}
                                    </div>
                                </div>

                                {/* Executive Summary - NEW */}
                                <div className="bg-gray-50 p-8 md:p-12 rounded-[3.5rem] border border-gray-200">
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="bg-stefto-blue/10 p-4 rounded-3xl">
                                            <FileText className="text-stefto-blue" size={36} />
                                        </div>
                                        <h2 className="text-4xl font-black text-stefto-blue uppercase tracking-tighter">Executive <span className="text-stefto-red">Perspective</span></h2>
                                    </div>
                                    <div
                                        className="prose prose-lg max-w-none text-gray-600 prose-headings:text-stefto-blue prose-headings:font-black prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4"
                                        dangerouslySetInnerHTML={{ __html: data.executiveSummary }}
                                    />
                                </div>

                                {/* Our Solution */}
                                <div className="bg-stefto-blue p-8 md:p-12 rounded-[3.5rem] shadow-2xl text-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 group-hover:scale-110 transition-transform"></div>
                                    <div className="flex items-center gap-4 mb-10 relative z-10">
                                        <div className="bg-white/10 p-4 rounded-3xl">
                                            <TrendingUp className="text-white" size={36} />
                                        </div>
                                        <h2 className="text-4xl font-black uppercase tracking-tighter">Technology <span className="text-stefto-red">Implementation</span></h2>
                                    </div>
                                    <div className="text-xl text-blue-50 font-light leading-relaxed space-y-8 relative z-10">
                                        {data.solution.split('\n').filter(line => line.trim()).map((p, i) => (
                                            <p key={i} className={p.startsWith('1.') || p.startsWith('2.') ? 'ml-6 border-l-2 border-white/20 pl-6' : ''}>{p}</p>
                                        ))}
                                    </div>
                                </div>

                                {/* Strategy Deep Dive - NEW */}
                                <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-gray-100">
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="bg-stefto-red/10 p-4 rounded-3xl">
                                            <Users className="text-stefto-red" size={36} />
                                        </div>
                                        <h2 className="text-4xl font-black text-stefto-blue uppercase tracking-tighter">Strategic <span className="text-stefto-red">Deep Dive</span></h2>
                                    </div>
                                    <div
                                        className="prose prose-lg max-w-none text-gray-600 prose-headings:text-stefto-blue prose-headings:font-black prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4"
                                        dangerouslySetInnerHTML={{ __html: data.strategyDeepDive }}
                                    />
                                </div>

                                {/* Key Impact & Results */}
                                <div className="bg-gray-950 p-8 md:p-12 rounded-[3.5rem] shadow-2xl text-white">
                                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-12">The <span className="text-stefto-red">Outcome</span></h2>
                                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                                        {data.results.map((res, i) => (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                key={i}
                                                className="flex items-start gap-6 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
                                            >
                                                <div className="bg-stefto-red p-2 rounded-lg"><CheckCircle2 className="text-white" size={24} /></div>
                                                <p className="text-xl text-gray-200 font-bold">{res}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-8">
                                <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 sticky top-32">
                                    <h3 className="text-2xl font-black text-stefto-blue mb-10 border-l-4 border-stefto-red pl-6 uppercase tracking-tighter">Impact Metrics</h3>
                                    <div className="space-y-12">
                                        {data.metrics.map((m, i) => (
                                            <div key={i} className="text-center group">
                                                <p className="text-5xl font-black text-stefto-red mb-2 group-hover:scale-110 transition-transform">{m.val}</p>
                                                <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">{m.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-16 space-y-4">
                                        <Link to="/contact" className="w-full btn-primary py-5 rounded-2xl flex items-center justify-center gap-4 text-sm font-black uppercase tracking-widest">
                                            Scale Your Recovery <ArrowLeft className="rotate-180" size={20} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="bg-stefto-blue p-10 rounded-[2.5rem] text-center text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-stefto-red/20 to-transparent"></div>
                                    <FileText className="text-stefto-red mx-auto mb-6 relative z-10" size={52} />
                                    <h4 className="font-black text-2xl mb-4 relative z-10 tracking-tight">Need a customized roadmap?</h4>
                                    <p className="text-sm text-blue-100 mb-10 font-medium leading-relaxed relative z-10">Our digital debt experts can analyze your portfolio and build a tailored AI recovery strategy for your brand.</p>
                                    <Link to="/contact" className="bg-white text-stefto-blue px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest relative z-10 hover:bg-stefto-red hover:text-white transition-colors">Book Consultation</Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 flex flex-col md:row justify-between items-center border-t py-16 gap-8">
                            <Link to="/services" className="flex items-center gap-4 text-gray-400 hover:text-stefto-blue transition-colors font-black uppercase tracking-widest text-sm">
                                <ArrowLeft size={20} /> Back to Services
                            </Link>
                            <div className="flex items-center gap-6">
                                <Link to="/about" className="text-xs font-black text-gray-400 hover:text-stefto-red transition-colors uppercase tracking-widest">About Stefto</Link>
                                <span className="w-1.5 h-1.5 bg-gray-200 rounded-full"></span>
                                <Link to="/contact" className="text-xs font-black text-gray-400 hover:text-stefto-red transition-colors uppercase tracking-widest">Partner Support</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CaseStudyDetail;
