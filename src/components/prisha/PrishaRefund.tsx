import React from 'react';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import PrishaLayout from './PrishaLayout';

const PrishaRefund = () => {
    return (
        <PrishaLayout
            title="Cancellation & Refund Policy"
            subtitle="Transparent policies for your peace of mind."
        >
            <div className="p-6 sm:p-10">
                <div className="space-y-12">

                    {/* Cancellation Policy */}
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-600 text-sm font-bold">1</span>
                            Cancellation Policy
                        </h2>
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">
                                        <strong>Easy Cancellation:</strong> You can cancel your order directly from the website or mobile app before it is shipped.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">
                                        <strong>Timeframe:</strong> Orders can be cancelled within 24 hours of placement, provided they have not been dispatched.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">
                                        Once an order has been shipped, it cannot be cancelled. You may choose to return it after delivery as per our return policy.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Refund Policy */}
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-600 text-sm font-bold">2</span>
                            Return & Refund Policy
                        </h2>

                        <div className="prose prose-slate max-w-none text-slate-600 mb-6">
                            <p>
                                We want you to be completely satisfied with your purchase. If you receive a damaged or defective item, we are here to help.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="border border-slate-200 rounded-lg p-5">
                                <h3 className="font-semibold text-slate-900 mb-3">Eligibility</h3>
                                <p className="text-sm text-slate-600">Returns are accepted within 7 days of delivery ONLY for damaged, defective, or wrong items received.</p>
                            </div>
                            <div className="border border-slate-200 rounded-lg p-5">
                                <h3 className="font-semibold text-slate-900 mb-3">Condition</h3>
                                <p className="text-sm text-slate-600">Items must be unused, in their original packaging, and with all tags intact.</p>
                            </div>
                        </div>

                        <div className="bg-rose-50 border border-rose-100 rounded-xl p-6 mb-8">
                            <h3 className="text-lg font-bold text-rose-900 mb-3 flex items-center gap-2">
                                <AlertCircle className="h-5 w-5" />
                                Important Requirement: Unboxing Video
                            </h3>
                            <p className="text-rose-800 mb-4">
                                To process any return or refund claim for damaged or missing items, <strong>you must provide a clear, unedited video of unboxing the package</strong>.
                            </p>
                            <ul className="list-disc pl-5 text-rose-700 text-sm space-y-1">
                                <li>Start recording before opening the outer packaging.</li>
                                <li>Ensure the label and package condition are visible.</li>
                                <li>Show the product clearly after taking it out.</li>
                                <li>Without this video, we reserve the right to reject the claim.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Non-Refundable Items */}
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-600 text-sm font-bold">3</span>
                            Non-Refundable Items
                        </h2>
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                            <p className="text-slate-600 mb-4">The following items cannot be returned or refunded:</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <XCircle className="h-5 w-5 text-slate-400" />
                                    Used or worn jewellery
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <XCircle className="h-5 w-5 text-slate-400" />
                                    Items without original tags and packaging
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <XCircle className="h-5 w-5 text-slate-400" />
                                    Sale or clearance items (unless damaged)
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Process */}
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-600 text-sm font-bold">4</span>
                            Refund Process
                        </h2>
                        <div className="space-y-4 text-slate-600">
                            <p>
                                To initiate a return, email us at <a href="mailto:support@prishajewellery.com" className="text-rose-600 hover:underline">support@prishajewellery.com</a> with your order ID and the unboxing video.
                            </p>
                            <p>
                                Once your return is received and inspected, we will notify you of the approval or rejection of your refund.
                            </p>
                            <p>
                                If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-7 business days.
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </PrishaLayout>
    );
};

export default PrishaRefund;
