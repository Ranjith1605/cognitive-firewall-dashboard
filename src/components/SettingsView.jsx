import React, { useState } from 'react';
import {
    User,
    Bell,
    Shield,
    Lock,
    Eye,
    Database,
    Zap,
    Monitor,
    ChevronRight,
    Save
} from 'lucide-react';

const SettingsView = () => {
    const [activeCategory, setActiveCategory] = useState('general');

    const categories = [
        { id: 'general', label: 'General', icon: Monitor },
        { id: 'focus', label: 'Deep Focus', icon: Zap },
        { id: 'security', icon: Shield, label: 'Security' },
        { id: 'privacy', icon: Eye, label: 'Privacy' },
        { id: 'notifications', icon: Bell, label: 'Notifications' },
        { id: 'data', icon: Database, label: 'Data & Vault' },
    ];

    const SettingRow = ({ label, description, children }) => (
        <div className="flex items-center justify-between py-6 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 px-4 -mx-4 transition-colors rounded-xl">
            <div className="max-w-md">
                <h4 className="text-sm font-black text-slate-800 uppercase tracking-tight">{label}</h4>
                <p className="text-xs font-medium text-slate-500 mt-1 leading-relaxed">{description}</p>
            </div>
            <div>{children}</div>
        </div>
    );

    const Toggle = ({ active, onToggle }) => (
        <button
            onClick={onToggle}
            className={`relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none ${active ? 'bg-cyber-green' : 'bg-slate-200'}`}
        >
            <div className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${active ? 'translate-x-5' : 'translate-x-0'} shadow-sm`} />
        </button>
    );

    return (
        <div className="flex gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Settings Navigation */}
            <div className="w-64 shrink-0">
                <div className="bg-golden-white rounded-3xl border border-slate-200 p-2 shadow-sm">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-wider transition-all
                ${activeCategory === cat.id
                                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10'
                                    : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            <cat.icon className={`w-4 h-4 ${activeCategory === cat.id ? 'text-cyber-green' : ''}`} />
                            {cat.label}
                            {activeCategory === cat.id && <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-50" />}
                        </button>
                    ))}
                </div>

                {/* Profile Card */}
                <div className="mt-8 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-6 text-white shadow-xl shadow-indigo-600/20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                            <User className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase opacity-70 tracking-widest">Active License</p>
                            <p className="text-sm font-black uppercase">Standard Agent</p>
                        </div>
                    </div>
                    <button className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-[10px] font-black uppercase tracking-widest border border-white/10">
                        Upgrade Policy
                    </button>
                </div>
            </div>

            {/* Settings Content */}
            <div className="flex-1">
                <div className="bg-golden-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">
                            {categories.find(c => c.id === activeCategory)?.label} Settings
                        </h3>
                        <button className="flex items-center gap-2 px-4 py-2 bg-cyber-green text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-cyber-green/20 hover:scale-105 transition-all">
                            <Save className="w-3.5 h-3.5" />
                            Save Changes
                        </button>
                    </div>

                    <div className="space-y-2">
                        {activeCategory === 'general' && (
                            <>
                                <SettingRow
                                    label="Behavioral Tracking"
                                    description="Enable passive monitoring of tab switches and scroll behavior to calculate cognitive load."
                                >
                                    <Toggle active={true} onToggle={() => { }} />
                                </SettingRow>
                                <SettingRow
                                    label="Adaptive Insights"
                                    description="Show real-time recommendations and focus prompts based on mental perimeter state."
                                >
                                    <Toggle active={true} onToggle={() => { }} />
                                </SettingRow>
                                <SettingRow
                                    label="Data Visualization Mode"
                                    description="Toggle between standard line charts and high-fidelity area charts."
                                >
                                    <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-[10px] font-black uppercase text-slate-600 outline-none focus:border-cyber-green transition-colors">
                                        <option>High Fidelity</option>
                                        <option>Low Power</option>
                                    </select>
                                </SettingRow>
                                <SettingRow
                                    label="Measurement Frequency"
                                    description="Frequency of biometric data polling (higher frequency uses more system resources)."
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-black text-slate-400">FAST</span>
                                        <input type="range" className="w-24 accent-cyber-green" />
                                        <span className="text-[10px] font-black text-slate-400">REAL-TIME</span>
                                    </div>
                                </SettingRow>
                            </>
                        )}

                        {activeCategory === 'focus' && (
                            <>
                                <SettingRow
                                    label="Auto-Engage Shield"
                                    description="Automatically activate the focus shield when cognitive load exceeds 80% for more than 5 minutes."
                                >
                                    <Toggle active={false} onToggle={() => { }} />
                                </SettingRow>
                                <SettingRow
                                    label="Silence Notifications"
                                    description="Global override for all OS and browser notifications when Deep Focus is active."
                                >
                                    <Toggle active={true} onToggle={() => { }} />
                                </SettingRow>
                                <SettingRow
                                    label="Focus Session Length"
                                    description="Default duration for a Deep Focus cycle."
                                >
                                    <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-[10px] font-black uppercase text-slate-600">
                                        <option>25 Minutes</option>
                                        <option>45 Minutes</option>
                                        <option>90 Minutes</option>
                                    </select>
                                </SettingRow>
                            </>
                        )}

                        {activeCategory === 'security' && (
                            <>
                                <SettingRow
                                    label="Continuous Identity Verification"
                                    description="Use behavioral biometrics to ensure the currently active user is the authorized owner."
                                >
                                    <Toggle active={true} onToggle={() => { }} />
                                </SettingRow>
                                <SettingRow
                                    label="Anomaly Sensitivity"
                                    description="Set the threshold for flagging unusual scroll or click variance as a cognitive breach."
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-black text-slate-400 uppercase">Balanced</span>
                                    </div>
                                </SettingRow>
                                <SettingRow
                                    label="Policy Lockdown"
                                    description="Restrict changes to firewall settings during periods of high cognitive fragmentation."
                                >
                                    <Toggle active={false} onToggle={() => { }} />
                                </SettingRow>
                            </>
                        )}

                        {activeCategory === 'privacy' && (
                            <>
                                <SettingRow
                                    label="Zero-Cloud Processing"
                                    description="Ensure all behavioral fingerprinting happens locally on device. No PII leaves the perimeter."
                                >
                                    <div className="flex items-center gap-2 text-cyber-green">
                                        <Shield className="w-4 h-4" />
                                        <span className="text-[10px] font-black uppercase">Mandatory Active</span>
                                    </div>
                                </SettingRow>
                                <SettingRow
                                    label="In-Memory Only"
                                    description="Don't persist granular behavioral data. Only store aggregated scores for historical tracking."
                                >
                                    <Toggle active={true} onToggle={() => { }} />
                                </SettingRow>
                                <SettingRow
                                    label="Hide Real-Time Overlay"
                                    description="Remove the recording indicator and live status from the browser viewport."
                                >
                                    <Toggle active={false} onToggle={() => { }} />
                                </SettingRow>
                            </>
                        )}

                        {activeCategory !== 'general' && activeCategory !== 'focus' && activeCategory !== 'security' && activeCategory !== 'privacy' && (
                            <div className="py-20 flex flex-col items-center justify-center border-2 border-dashed border-slate-100 rounded-2xl">
                                <Lock className="w-8 h-8 text-slate-200 mb-4" />
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Additional settings locked</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom Action Area */}
                <div className="mt-8 flex items-center justify-between p-6 bg-slate-900 rounded-3xl text-white shadow-xl shadow-slate-900/20">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-cyber-green">
                            <Zap className="w-5 h-5 fill-current" />
                        </div>
                        <div>
                            <h4 className="text-[11px] font-black uppercase tracking-tight">System Status: Optimal</h4>
                            <p className="text-[9px] font-bold text-slate-400 uppercase mt-0.5">Firmware Version: 1.0.4-Perimeter</p>
                        </div>
                    </div>
                    <button className="px-6 py-2.5 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-red-500/20">
                        Reset Firewall Logic
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsView;
