import React from 'react';
import { User, Mail, Globe, Shield, MapPin, Calendar, Edit3, LogOut } from 'lucide-react';

const ProfileView = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Profile Information */}
                <div className="lg:col-span-1">
                    <div className="bg-golden-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col items-center">
                        <div className="relative mb-6">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyber-green to-emerald-500 flex items-center justify-center text-3xl font-black text-white shadow-xl shadow-cyber-green/20">
                                RJ
                            </div>
                            <button className="absolute bottom-1 right-1 bg-white border border-slate-200 p-2 rounded-xl text-slate-600 hover:text-cyber-green transition-all shadow-lg shadow-slate-200/50">
                                <Edit3 className="w-4 h-4" />
                            </button>
                        </div>

                        <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">Ranjith Ramadass</h2>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Standard Agent // Perimeter Admin</p>

                        <div className="w-full mt-8 space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-champagne/20 rounded-2xl border border-slate-100">
                                <Mail className="w-4 h-4 text-slate-400" />
                                <div className="flex-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider leading-none mb-1">Email Address</p>
                                    <p className="text-xs font-bold text-slate-700">ranjithrv007@icloud.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-champagne/20 rounded-2xl border border-slate-100">
                                <MapPin className="w-4 h-4 text-slate-400" />
                                <div className="flex-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider leading-none mb-1">Location</p>
                                    <p className="text-xs font-bold text-slate-700">Hannover, Germany</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-champagne/20 rounded-2xl border border-slate-100">
                                <Calendar className="w-4 h-4 text-slate-400" />
                                <div className="flex-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider leading-none mb-1">Joined CipherPolice</p>
                                    <p className="text-xs font-bold text-slate-700">Nov 22, 2025</p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-8 py-4 bg-red-500/10 hover:bg-red-500 text-red-600 hover:text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all border border-red-100 flex items-center justify-center gap-2">
                            <LogOut className="w-4 h-4" />
                            Terminate Session
                        </button>
                    </div>
                </div>

                {/* Account Activity & Security */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Security Stats */}
                    <div className="bg-golden-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-2 mb-8">
                            <Shield className="w-4 h-4 text-blue-600" />
                            Account Integrity Status
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">2FA Status</p>
                                <p className="text-lg font-black text-blue-600 uppercase">Active</p>
                            </div>
                            <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-2">Device Trust</p>
                                <p className="text-lg font-black text-emerald-600 uppercase">Verified</p>
                            </div>
                            <div className="p-6 bg-orange-50/50 rounded-2xl border border-orange-100">
                                <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-2">Last Login</p>
                                <p className="text-lg font-black text-orange-600 uppercase">2h ago</p>
                            </div>
                        </div>
                    </div>

                    {/* Connected Nodes */}
                    <div className="bg-golden-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-2 mb-8">
                            <Globe className="w-4 h-4 text-purple-600" />
                            Connected Network Nodes
                        </h3>

                        <div className="space-y-4">
                            {[
                                { device: 'MacBook Pro M2 (This Device)', ip: '192.168.1.42', status: 'Online' },
                                { device: 'iPhone 15 Pro', ip: '192.168.1.18', status: 'Offline' },
                                { device: 'Chrome Browser Extension', ip: 'v1.4.2-logic', status: 'Active' },
                            ].map((node, i) => (
                                <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors rounded-2xl border border-slate-50 last:border-0 translate-y-0 hover:-translate-y-1">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-2 h-2 rounded-full ${node.status === 'Online' || node.status === 'Active' ? 'bg-cyber-green shadow-lg shadow-cyber-green/40' : 'bg-slate-300'}`} />
                                        <div>
                                            <p className="text-xs font-black text-slate-800 uppercase tracking-tight">{node.device}</p>
                                            <p className="text-[10px] font-bold text-slate-400">{node.ip}</p>
                                        </div>
                                    </div>
                                    <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${node.status === 'Online' || node.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                                        {node.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
