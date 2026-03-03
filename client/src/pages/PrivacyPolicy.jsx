import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-white">
            <Hero
                title="Privacy Policy"
                subtitle="Your privacy is core to our values. Here's how we protect and manage your information at Stefto."
                bgImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000"
                height="h-[50vh]"
            />

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-gray-50 p-8 md:p-16 rounded-[3rem] shadow-sm border border-gray-100">
                        <div className="flex flex-col md:flex-row gap-12">
                            {/* Left Side: Summary/Nav - Made Sticky */}
                            <div className="md:w-1/3 space-y-6 md:sticky md:top-32 md:self-start">
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold text-stefto-blue mb-4">Core Principles</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-gray-600 text-sm">
                                            <Shield className="text-stefto-red" size={20} /> Data Minimization
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-600 text-sm">
                                            <Eye className="text-stefto-red" size={20} /> Transparency
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-600 text-sm">
                                            <Lock className="text-stefto-red" size={20} /> High-Level Security
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-600 text-sm">
                                            <Shield className="text-stefto-red" size={20} /> User Control
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6">
                                    <p className="text-sm text-gray-500 italic">
                                        Stefto (formerly IMS) is committed to protecting the Personal Data it collects under various regulations including the IT Act and Global Standards.
                                    </p>
                                </div>
                            </div>

                            {/* Right Side: Detailed Content */}
                            <div className="md:w-2/3 prose prose-lg max-w-none text-gray-600 space-y-12">
                                <section>
                                    <h2 className="text-3xl font-bold text-stefto-blue mb-6 flex items-center gap-3">
                                        <FileText className="text-stefto-red" size={28} /> 1. Information Collection
                                    </h2>
                                    <p>
                                        We collect information to provide better services to all our users. This includes information you provide us (like your name, email address, and phone number) and information we get from your use of our services (like usage data and technical identifiers).
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-3xl font-bold text-stefto-blue mb-6">2. Use of Information</h2>
                                    <p>Information collected is used for the following purposes:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>To provide, maintain, and improve our services.</li>
                                        <li>To communicate with you regarding updates, security alerts, and support.</li>
                                        <li>To analyze trends and user activity to optimize our technology platform.</li>
                                        <li>To comply with legal obligations and regulatory requirements.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-3xl font-bold text-stefto-blue mb-6">3. Data Sharing & Security</h2>
                                    <p>
                                        We do not share your personal information with companies, organizations, or individuals outside of Stefto except in cases of consent, legal necessity, or with trusted service providers who process it for us based on our instructions.
                                    </p>
                                    <p className="mt-4">
                                        We use industry-standard encryption (SSL/TLS) and robust firewall protections to ensure your data remains secure from unauthorized access.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-3xl font-bold text-stefto-blue mb-6">4. Your Rights</h2>
                                    <p>
                                        You have the right to access, update, or delete your personal information that we hold. You can also object to certain data processing activities or request a copy of your data in a portable format.
                                    </p>
                                </section>

                                <section className="pt-8 border-t border-gray-200">
                                    <h2 className="text-3xl font-bold text-stefto-blue mb-6">Contact Privacy Officer</h2>
                                    <p>
                                        If you have any grievances or questions regarding your privacy, please reach out to our DPO at:
                                    </p>
                                    <div className="mt-4 bg-white p-6 rounded-2xl border border-gray-100">
                                        <p className="font-bold text-stefto-blue">Privacy Compliance Team</p>
                                        <p>Email: info@stefto.com</p>
                                        <p>Address: Plot No. 112, Udyog Vihar, Phase-1, Gurugram, 122016</p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicy;
