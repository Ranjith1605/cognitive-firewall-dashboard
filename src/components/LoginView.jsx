import React, { useState } from 'react';
import { Shield, Lock, Mail, ChevronRight, Fingerprint, Eye, EyeOff } from 'lucide-react';

const LoginView = ({ onLogin }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-transparent animate-in fade-in duration-1000">
            <div className="w-full max-w-[420px]">
                {/* Brand / Logo */}
                <div className="flex flex-col items-center mb-10">
                    <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyber-green to-emerald-500 flex items-center justify-center shadow-2xl shadow-cyber-green/30 mb-6 scale-110">
                        <Shield className="w-8 h-8 text-[#111827]" strokeWidth={2.5} />
                    </div>
                    <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">CipherPolice</h1>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2">Cognitive Perimeter // Secure Interface</p>
                </div>

                {/* Login Card */}
                <div className="bg-golden-white border border-slate-200 rounded-[40px] p-10 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-green/5 blur-3xl rounded-full -mr-16 -mt-16" />

                    <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight mb-8">Access Authorization</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Agent Identifier</label>
                            <div className="relative">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="email"
                                    placeholder="agent-id@cipherpolice.io"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-14 pr-6 text-[13px] font-bold text-slate-700 outline-none focus:border-cyber-green focus:bg-white transition-all"
                                    defaultValue="ranjithrv007@icloud.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Security Protocol</label>
                            <div className="relative">
                                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••••••"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-14 pr-14 text-[13px] font-bold text-slate-700 outline-none focus:border-cyber-green focus:bg-white transition-all"
                                    defaultValue="password123"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between px-2">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 rounded-lg border-slate-300 text-cyber-green focus:ring-cyber-green cursor-pointer" />
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors">Remember Node</span>
                            </label>
                            <a href="#" className="text-[10px] font-black text-cyber-green uppercase tracking-widest hover:underline">Reset Identity?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full group relative flex items-center justify-center gap-3 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-[0.15em] hover:bg-black transition-all shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20 active:scale-[0.98]"
                        >
                            <span>Initialize Session</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <div className="relative py-4">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                            <div className="relative flex justify-center text-[9px] font-black uppercase tracking-widest"><span className="bg-golden-white px-4 text-slate-300">Biometric Verification</span></div>
                        </div>

                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 py-4 border-2 border-slate-200 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-400 hover:bg-slate-50 hover:text-slate-600 hover:border-slate-300 transition-all"
                        >
                            <Fingerprint className="w-5 h-5" />
                            Use Behavioral ID
                        </button>
                    </form>
                </div>

                <p className="text-center mt-10 text-[10px] font-black text-slate-300 uppercase tracking-widest leading-relaxed">
                    Access strictly monitored by Mentality Perimeter.<br />
                    All attempts are logged and forensic reports generated.
                </p>
            </div>
        </div>
    );
};

export default LoginView;
