import React from 'react';
import PrishaLayout from './PrishaLayout';

const PrishaTerms = () => {
    return (
        <PrishaLayout
            title="Terms of Service"
            subtitle="Please read these terms carefully before using our services."
        >
            <div className="p-6 sm:p-10">
                <div className="prose prose-slate prose-headings:font-serif prose-a:text-rose-600 hover:prose-a:text-rose-500 max-w-none">
                    <p className="text-sm text-slate-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                        <p className="text-slate-600">
                            Welcome to Prisha Jewellery Hub. By accessing our website, mobile application, and purchasing our products, you agree to be bound by these Terms of Service. These terms apply to all users of the site, including browsers, vendors, customers, merchants, and contributors of content.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">2. Products and Services</h2>
                        <p className="text-slate-600 mb-4">
                            We specialize in high-quality imitation jewellery. We make every effort to display as accurately as possible the colors, dimensions, and details of our products. However:
                        </p>
                        <ul className="list-disc pl-5 text-slate-600 space-y-2">
                            <li>We cannot guarantee that your device's display of any color will be accurate.</li>
                            <li>All descriptions of products or product pricing are subject to change at any time without notice.</li>
                            <li>We reserve the right to discontinue any product at any time.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">3. Returns and Claims</h2>
                        <p className="text-slate-600 mb-4">
                            To ensure transparency and trust in our returns process, we have strict guidelines for claiming refunds or returns for damaged/missing items:
                        </p>
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4">
                            <p className="text-amber-900 font-medium">
                                <strong>Mandatory Requirement:</strong> You must record a clear, unedited video while unboxing the product package. This video is required as proof for any claims regarding damaged products, missing items, or wrong items received. Without this unboxing video, we may not be able to process your return or refund request.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">4. Pricing and Payment</h2>
                        <p className="text-slate-600">
                            All prices are listed in Indian Rupees (INR). We reserve the right to modify prices without notice. Payment must be made in full at the time of purchase through our secure payment gateways.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">5. Shipping and Delivery</h2>
                        <p className="text-slate-600">
                            We aim to process and ship orders within 2-3 business days. Delivery times vary by location. We are not responsible for delays caused by courier partners or force majeure events.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">6. User Account</h2>
                        <p className="text-slate-600">
                            You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">7. Contact Information</h2>
                        <p className="text-slate-600">
                            Questions about the Terms of Service should be sent to us at <a href="mailto:support@prishajewellery.com">support@prishajewellery.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </PrishaLayout>
    );
};

export default PrishaTerms;
