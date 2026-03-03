import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { Gavel, CheckCircle, AlertTriangle, Scale } from 'lucide-react';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-white">
            <Hero
                title="Terms of Service"
                subtitle="The legal framework governing your use of Stefto's platforms and services."
                bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000"
                height="h-[50vh]"
            />

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-gray-50 p-8 md:p-16 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12">
                        {/* Summary Sidebar */}
                        <div className="md:w-1/3 order-2 md:order-1">
                            <div className="sticky top-32 space-y-6">
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold text-stefto-blue mb-6">User Obligations</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3 text-gray-600 text-sm">
                                            <CheckCircle className="text-green-500 flex-shrink-0" size={18} /> Provide accurate data
                                        </li>
                                        <li className="flex items-start gap-3 text-gray-600 text-sm">
                                            <CheckCircle className="text-green-500 flex-shrink-0" size={18} /> Legal usage only
                                        </li>
                                        <li className="flex items-start gap-3 text-gray-600 text-sm">
                                            <CheckCircle className="text-green-500 flex-shrink-0" size={18} /> Protect account credentials
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-stefto-red p-8 rounded-3xl shadow-lg text-white">
                                    <AlertTriangle className="mb-4" size={32} />
                                    <h4 className="font-bold text-lg mb-2">Important Note</h4>
                                    <p className="text-sm text-red-100">
                                        By accessing our services, you agree to comply with all applicable laws and these terms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="md:w-2/3 order-1 md:order-2 prose prose-lg max-w-none text-gray-600 space-y-12">
                            <div className="flex items-center gap-4 mb-8">
                                <Scale className="text-stefto-red" size={40} />
                                <div>
                                    <h2 className="text-3xl font-bold text-stefto-blue">Service Terms</h2>
                                    <p className="text-gray-500 italic">Effective Date: February 17, 2026</p>
                                </div>
                            </div>

                            <section>
                                <h3 className="text-2xl font-bold text-stefto-blue mb-4 flex items-center gap-3">
                                    <Gavel size={24} className="text-stefto-red" /> 1. Acceptance of Terms
                                </h3>
                                <p>
                                    Welcome to Stefto. By using our website and services, you signify your agreement to these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-stefto-blue mb-4">2. Use of License</h3>
                                <p>
                                    Permission is granted to temporarily download one copy of the materials (information or software) on Stefto's website for personal, non-commercial transitory viewing only.
                                </p>
                                <p className="mt-4">Under this license, you may not:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Modify or copy the materials.</li>
                                    <li>Use materials for any commercial purpose.</li>
                                    <li>Decompile or reverse engineer any software on the site.</li>
                                    <li>Remove any copyright or other proprietary notations.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-stefto-blue mb-4">3. Disclaimer</h3>
                                <p>
                                    The materials on Stefto's website are provided on an 'as is' basis. Stefto makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-stefto-blue mb-4">4. Limitations</h3>
                                <p>
                                    In no event shall Stefto or its partners be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-stefto-blue mb-4">5. Governing Law</h3>
                                <p>
                                    These terms and conditions are governed by and construed in accordance with the laws of India, specifically the jurisdiction of the courts in Gurugram, Haryana.
                                </p>
                            </section>

                            <section className="pt-8 border-t border-gray-200">
                                <h3 className="text-2xl font-bold text-stefto-blue mb-4">Questions?</h3>
                                <p>
                                    Review these terms carefully. If you have any inquiries regarding our terms, please contact our legal department at <span className="text-stefto-red font-bold">info@stefto.com</span>.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TermsOfService;
