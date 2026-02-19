import React, { useState } from 'react';
import { Calendar, Play, ChevronDown, User, ShieldCheck, Fingerprint } from 'lucide-react';

const Header = ({ isFocused, onToggle, selectedDay, setSelectedDay, days, status, activeView }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const getStatusColor = (label) => {
        switch (label?.toLowerCase()) {
            case 'high': return 'bg-[#F97316]';
            case 'medium': return 'bg-[#EAB308]';
            case 'low': return 'bg-[#84CC16]';
            case 'very low': return 'bg-[#22C55E]';
            default: return 'bg-slate-400';
        }
    };

    const formatDate = (dateStr) => {
        const d = new Date(dateStr);
        return d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    const getViewTitle = () => {
        switch (activeView) {
            case 'analytics': return 'Risk Analytics';
            case 'settings': return 'Settings';
            default: return 'Cognitive Load Monitor';
        }
    };

    return (
        <header className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-6">
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tight">{getViewTitle()}</h1>
                        {activeView === 'dashboard' && (
                            <div className={`${getStatusColor(status)} px-3 py-0.5 rounded text-[10px] font-black text-white uppercase shadow-lg shadow-current/10 animate-in fade-in zoom-in duration-500`}>
                                {status}
                            </div>
                        )}
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                        Performance Metrics // {isFocused ? 'Optimal Flow' : 'High Fragmentation'}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                {/* Day Selector */}
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-3 bg-golden-white border border-slate-200 rounded-lg px-4 py-2.5 text-[11px] font-black text-slate-600 hover:border-cyber-green transition-all shadow-sm uppercase tracking-wider"
                    >
                        <Calendar className="w-4 h-4 text-cyber-green" />
                        <span>{formatDate(selectedDay)}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-golden-white border border-slate-200 rounded-xl shadow-2xl z-[100] py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                            {days.map((day) => (
                                <button
                                    key={day}
                                    onClick={() => {
                                        setSelectedDay(day);
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-5 py-2.5 text-[10px] font-bold uppercase transition-colors ${selectedDay === day ? 'text-cyber-green bg-green-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
                                >
                                    {formatDate(day)}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Record Button (Animated) */}
                <button className="relative flex items-center justify-center w-11 h-11 bg-[#111827] rounded-xl text-white hover:scale-105 active:scale-95 transition-all group shadow-lg shadow-slate-900/20">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                    <div className="absolute inset-0 rounded-xl border-2 border-white/20 animate-ping opacity-30 pointer-events-none" />
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-black px-2 py-1.5 rounded uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
                        Live Tracking
                    </span>
                </button>

                {/* Persona Toggle */}
                <button
                    onClick={onToggle}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-[11px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 
                        ${isFocused ? 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-900/20' : 'bg-gradient-to-r from-orange-500 to-red-600 shadow-orange-900/20'}`}
                >
                    <User className="w-3.5 h-3.5" />
                    {isFocused ? 'Focused' : 'Fragmented'}
                </button>
            </div>
        </header>
    );
};

export default Header;
