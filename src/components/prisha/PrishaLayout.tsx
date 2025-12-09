import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gem } from 'lucide-react';

interface PrishaLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
}

const PrishaLayout: React.FC<PrishaLayoutProps> = ({ children, title, subtitle }) => {
    const location = useLocation();
    const currentYear = new Date().getFullYear();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="min-h-screen bg-[#FAFAFA] font-sans text-slate-800">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-slate-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center">
                            <Link to="/prisha/support" className="flex items-center gap-2 group">
                                <div className="bg-rose-50 p-2 rounded-full group-hover:bg-rose-100 transition-colors">
                                    <Gem className="h-6 w-6 text-rose-600" />
                                </div>
                                <span className="text-xl font-serif font-bold text-slate-900 tracking-wide">
                                    Prisha <span className="text-rose-600">Jewellery</span> Hub
                                </span>
                            </Link>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <Link
                                to="/prisha/support"
                                className={`text-sm font-medium transition-colors ${isActive('/prisha/support') ? 'text-rose-600' : 'text-slate-500 hover:text-slate-900'}`}
                            >
                                Support
                            </Link>
                            <Link
                                to="/prisha/terms"
                                className={`text-sm font-medium transition-colors ${isActive('/prisha/terms') ? 'text-rose-600' : 'text-slate-500 hover:text-slate-900'}`}
                            >
                                Terms
                            </Link>
                            <Link
                                to="/prisha/refund"
                                className={`text-sm font-medium transition-colors ${isActive('/prisha/refund') ? 'text-rose-600' : 'text-slate-500 hover:text-slate-900'}`}
                            >
                                Refund Policy
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Page Header */}
            <div className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 tracking-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8 relative z-10">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden min-h-[400px]">
                    {children}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-200 mt-12">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Gem className="h-5 w-5 text-rose-600" />
                                <span className="text-lg font-serif font-bold text-slate-900">
                                    Prisha Jewellery Hub
                                </span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Exquisite imitation jewellery for every occasion. Quality craftsmanship meets affordable elegance.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/prisha/support" className="text-slate-500 hover:text-rose-600 text-sm transition-colors">Customer Support</Link>
                                </li>
                                <li>
                                    <Link to="/prisha/terms" className="text-slate-500 hover:text-rose-600 text-sm transition-colors">Terms of Service</Link>
                                </li>
                                <li>
                                    <Link to="/prisha/refund" className="text-slate-500 hover:text-rose-600 text-sm transition-colors">Refund Policy</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Contact</h3>
                            <ul className="space-y-3 text-sm text-slate-500">
                                <li>Vaishnodevi circle ahmedabad, 382470</li>
                                <li>+91 78630 20353</li>
                                <li>support@prishajewellery.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-slate-100 pt-8 text-center">
                        <p className="text-slate-400 text-sm">
                            &copy; {currentYear} Prisha Jewellery Hub. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PrishaLayout;
