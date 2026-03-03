import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { ShieldCheck, Cookie, Info } from 'lucide-react';

const CookiePolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-white">
            <Hero
                title="Cookie Policy"
                subtitle="Understanding how we use cookies to provide you with a more personalized and seamless experience on Stefto."
                bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
                height="h-[50vh]"
            />

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-gray-50 p-8 md:p-16 rounded-[3rem] shadow-sm border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-5">
                            <Cookie size={200} className="text-stefto-blue" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-stefto-red/10 p-3 rounded-2xl">
                                    <ShieldCheck className="text-stefto-red" size={32} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-stefto-blue">Transparency & Trust</h2>
                                    <p className="text-gray-500 italic">Last Updated: February 17, 2026</p>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-600 space-y-12">
                                <section>
                                    <h3 className="text-2xl font-bold text-stefto-blue flex items-center gap-3 mb-4">
                                        <Info size={24} className="text-stefto-red" /> 1. What are Cookies?
                                    </h3>
                                    <p className="leading-relaxed">
                                        Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-2xl font-bold text-stefto-blue mb-4">2. Why do we use cookies?</h3>
                                    <p className="mb-6">
                                        We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                            <h4 className="font-bold text-stefto-blue mb-2">Essential Cookies</h4>
                                            <p className="text-sm">These cookies are strictly necessary to provide you with services available through our Website.</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                            <h4 className="font-bold text-stefto-blue mb-2">Performance & Analytics</h4>
                                            <p className="text-sm">These cookies collect information that is used in aggregate form to help us understand how our Website is being used.</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                            <h4 className="font-bold text-stefto-blue mb-2">Functionality Cookies</h4>
                                            <p className="text-sm">These cookies are used to enhance the performance and functionality of our Website but are non-essential.</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                            <h4 className="font-bold text-stefto-blue mb-2">Security Cookies</h4>
                                            <p className="text-sm">These cookies help identify and prevent potential security risks to protect your data.</p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-2xl font-bold text-stefto-blue mb-4">3. How can I control cookies?</h3>
                                    <p>
                                        You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                                    </p>
                                    <p className="mt-4">
                                        To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.aboutcookies.org" className="text-stefto-red font-bold hover:underline">www.aboutcookies.org</a>.
                                    </p>
                                </section>

                                <section className="pt-8 border-t border-gray-200">
                                    <h3 className="text-2xl font-bold text-stefto-blue mb-4">Questions?</h3>
                                    <p>
                                        If you have any questions about our use of cookies or other technologies, please email us at <span className="text-stefto-red font-bold">info@stefto.com</span> or by post to our Headquarters at Gurugram, Haryana.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CookiePolicy;
