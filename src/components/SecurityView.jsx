import React from 'react';
import { ShieldCheck, ShieldAlert, Cpu, Fingerprint, Lock, Eye, AlertTriangle } from 'lucide-react';

const SecurityView = ({ dayData }) => {
    const threats = [
        { title: 'Cognitive Breach', type: 'High', time: '14:32', desc: 'Sustained fragmentation detected in Slack.', severity: 'critical' },
        { title: 'Anomaly Detected', type: 'Medium', time: '11:15', desc: 'Unusual scroll variance in documentation.', severity: 'warning' },
        { title: 'Focus Leak', type: 'Low', time: '09:40', desc: 'Frequent tab switching (15+ tabs).', severity: 'low' },
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Behavioral Biometrics Card */}
                <div className="lg:col-span-1 bg-golden-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                            <Fingerprint className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">Identity Confidence</h3>
                            <p className="text-[10px] font-bold text-slate-400">Behavioral Fingerprint Match</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center py-4">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                                <circle cx="64" cy="64" r="58" fill="none" stroke="#F1F5F9" strokeWidth="8" />
                                <circle cx="64" cy="64" r="58" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="364" strokeDashoffset="36" strokeLinecap="round" />
                            </svg>
                            <div className="text-2xl font-black text-blue-600">92%</div>
                        </div>
                        <div className="mt-4 flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                            <ShieldCheck className="w-3 h-3" />
                            Verified User
                        </div>
                    </div>
                </div>

                {/* Cognitive Perimeter Card */}
                <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-6 shadow-xl text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full -mr-32 -mt-32" />

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-sm font-black uppercase tracking-widest text-blue-400">Cognitive Perimeter</h3>
                                <p className="text-xs text-slate-400 mt-1">Active Defense Systems : Running</p>
                            </div>
                            <div className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded text-[10px] font-bold text-blue-400 uppercase tracking-widest animate-pulse">
                                Secure
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <Cpu className="w-5 h-5 text-slate-400 mb-2" />
                                <p className="text-[10px] font-bold text-slate-500 uppercase">Logic Engine</p>
                                <p className="text-lg font-black tabular-nums">1.2ms</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <Eye className="w-5 h-5 text-slate-400 mb-2" />
                                <p className="text-[10px] font-bold text-slate-500 uppercase">Scan Rate</p>
                                <p className="text-lg font-black tabular-nums">240Hz</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <Lock className="w-5 h-5 text-slate-400 mb-2" />
                                <p className="text-[10px] font-bold text-slate-500 uppercase">Data Vault</p>
                                <p className="text-lg font-black">Encrypted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Threat Hunt Log */}
            <div className="bg-golden-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-champagne/20">
                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 text-orange-500" />
                        Recent Security Incidents
                    </h3>
                    <button className="text-[10px] font-bold text-blue-600 uppercase tracking-widest hover:underline">
                        View All Reports
                    </button>
                </div>

                <div className="divide-y divide-slate-100">
                    {threats.map((threat, idx) => (
                        <div key={idx} className="px-6 py-5 flex items-center justify-between group hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`w-2 h-10 rounded-full ${threat.severity === 'critical' ? 'bg-red-500' :
                                    threat.severity === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
                                    }`} />
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-black text-slate-800 uppercase tracking-tight">{threat.title}</span>
                                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${threat.severity === 'critical' ? 'bg-red-50 border-red-100 text-red-500' :
                                            threat.severity === 'warning' ? 'bg-orange-50 border-orange-100 text-orange-500' : 'bg-blue-50 border-blue-100 text-blue-500'
                                            } uppercase tracking-widest`}>
                                            {threat.type}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500">{threat.desc}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-bold text-slate-400 tabular-nums">{threat.time}</p>
                                <button className="mt-1 text-[10px] font-black text-slate-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hover:text-blue-600">
                                    Analyze Post-Mortem
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Defensive Policy CTA */}
            <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 text-white shadow-lg shadow-orange-900/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                        <AlertTriangle className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-lg font-black uppercase tracking-tight leading-none mb-1">Breach Imminent?</h4>
                        <p className="text-sm text-white/80">Activate Cognitive Shield to block incoming notification spam.</p>
                    </div>
                </div>
                <button className="bg-white text-red-600 px-6 py-2.5 rounded-xl text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg">
                    Activate Shield
                </button>
            </div>
        </div>
    );
};

export default SecurityView;
