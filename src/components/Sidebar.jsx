import React from 'react';
import {
    LayoutDashboard,
    BarChart3,
    Settings,
    Activity,
    Lock
} from 'lucide-react';

const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'analytics', icon: BarChart3, label: 'Risk Analytics' },
    { id: 'settings', icon: Settings, label: 'Settings' },
];

export default function Sidebar({ activeView, setActiveView }) {
    return (
        <aside className="fixed left-0 top-0 h-screen w-[72px] bg-[#111827] flex flex-col items-center py-6 z-50 border-r border-white/5">
            {/* Logo */}
            <div className="mb-10 relative group cursor-pointer" onClick={() => setActiveView('dashboard')}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-green to-emerald-400 flex items-center justify-center shadow-lg shadow-cyber-green/20 transition-transform duration-300 group-hover:scale-110">
                    <Activity className="w-5 h-5 text-[#111827]" strokeWidth={2.5} />
                </div>
            </div>

            {/* Nav Items */}
            <nav className="flex flex-col gap-3 flex-1">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        title={item.label}
                        onClick={() => setActiveView(item.id)}
                        className={`relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group
              ${activeView === item.id
                                ? 'bg-cyber-green/15 text-cyber-green shadow-lg shadow-cyber-green/10'
                                : 'text-white/30 hover:text-white/60 hover:bg-white/5'
                            }`}
                    >
                        {activeView === item.id && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[2px] w-1 h-6 bg-cyber-green rounded-r-full" />
                        )}
                        <item.icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />

                        {/* Tooltip */}
                        <span className="absolute left-16 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-bold uppercase tracking-wider">
                            {item.label}
                        </span>
                    </button>
                ))}
            </nav>

            {/* Bottom avatar */}
            <div className="mt-auto flex flex-col items-center gap-4">
                <button className="text-white/20 hover:text-white/50 transition-colors">
                    <Lock className="w-4 h-4" />
                </button>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-[10px] font-black text-white/50 border border-white/10 cursor-pointer hover:border-cyber-green/30 transition-colors">
                    RJ
                </div>
            </div>
        </aside>
    );
}
