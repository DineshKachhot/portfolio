import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import PrishaLayout from './PrishaLayout';

const PrishaSupport = () => {
    return (
        <PrishaLayout
            title="Customer Support"
            subtitle="We are here to assist you with any queries regarding your jewellery orders."
        >
            <div className="p-6 sm:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="w-1 h-6 bg-rose-500 rounded-full"></span>
                                Get in Touch
                            </h3>
                            <p className="text-slate-600 mb-6">
                                Whether you have a question about our products, shipping, or custom orders, our team is ready to help.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 p-4 rounded-lg bg-slate-50 hover:bg-rose-50 transition-colors group">
                                <div className="flex-shrink-0 mt-1">
                                    <Phone className="h-5 w-5 text-rose-500 group-hover:text-rose-600" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-slate-900">Phone Support</h4>
                                    <p className="mt-1 text-sm text-slate-500">Mon-Sat 9am to 6pm</p>
                                    <a href="tel:+917863020353" className="block text-rose-600 font-medium mt-1 hover:underline">
                                        +91 78630 20353
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 p-4 rounded-lg bg-slate-50 hover:bg-rose-50 transition-colors group">
                                <div className="flex-shrink-0 mt-1">
                                    <Mail className="h-5 w-5 text-rose-500 group-hover:text-rose-600" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-slate-900">Email Us</h4>
                                    <p className="mt-1 text-sm text-slate-500">We reply within 24 hours</p>
                                    <a href="mailto:support@prishajewellery.com" className="block text-rose-600 font-medium mt-1 hover:underline">
                                        support@prishajewellery.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 p-4 rounded-lg bg-slate-50 hover:bg-rose-50 transition-colors group">
                                <div className="flex-shrink-0 mt-1">
                                    <MapPin className="h-5 w-5 text-rose-500 group-hover:text-rose-600" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-slate-900">Visit Our Office</h4>
                                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                                        Vaishnodevi circle<br />
                                        Ahmedabad, Gujarat - 382470
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ / Additional Info */}
                    <div className="bg-white">
                        <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-rose-500 rounded-full"></span>
                            Common Questions
                        </h3>

                        <div className="space-y-4">
                            <div className="border border-slate-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                                <h4 className="font-medium text-slate-900 flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-slate-400" />
                                    What are your business hours?
                                </h4>
                                <p className="mt-2 text-sm text-slate-600 pl-6">
                                    We are open Monday through Saturday, from 9:00 AM to 8:00 PM IST. Sunday is a holiday.
                                </p>
                            </div>

                            <div className="border border-slate-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                                <h4 className="font-medium text-slate-900 flex items-center gap-2">
                                    <MessageCircle className="h-4 w-4 text-slate-400" />
                                    How can I track my order?
                                </h4>
                                <p className="mt-2 text-sm text-slate-600 pl-6">
                                    Once your order is shipped, you will receive a tracking link via SMS and Email. You can also track it from the 'My Orders' section in the app.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-rose-50 rounded-xl border border-rose-100">
                            <h4 className="text-rose-900 font-medium mb-2">Need immediate assistance?</h4>
                            <p className="text-sm text-rose-700 mb-4">
                                For urgent queries regarding order cancellations or address changes, please call us directly.
                            </p>
                            <a
                                href="tel:+917863020353"
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors w-full"
                            >
                                Call Support Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </PrishaLayout>
    );
};

export default PrishaSupport;
