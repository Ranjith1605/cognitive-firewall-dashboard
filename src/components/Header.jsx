import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

const LABEL_COLORS = {
    'Very Low': 'bg-green-500',
    'Low': 'bg-lime-400',
    'Medium': 'bg-yellow-400',
    'High': 'bg-orange-500',
    'Very High': 'bg-red-500',
    'No tracking': 'bg-slate-200',
};

const Header = ({ selectedDay, setSelectedDay, days, weeklyLabels = [], status, activeView }) => {
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
        if (!dateStr) return '';
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
        <header className="flex justify-between items-start mb-6">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tight">{getViewTitle()}</h1>
                    {activeView === 'dashboard' && (
                        <div className={`${getStatusColor(status)} px-3 py-0.5 rounded text-[10px] font-black text-white uppercase shadow-lg shadow-current/10 animate-in fade-in zoom-in duration-500`}>
                            {status}
                        </div>
                    )}
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Performance Metrics // Behavioral Telemetry
                </p>

                {/* Weekly Load Strip */}
                {weeklyLabels.length > 0 && (
                    <div className="flex items-center gap-1.5 mt-2">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mr-1">Week</span>
                        {weeklyLabels.map((label, i) => (
                            <div
                                key={i}
                                title={`${days[i] ? formatDate(days[i]) : `Day ${i + 1}`}: ${label}`}
                                className={`w-5 h-5 rounded ${LABEL_COLORS[label] || 'bg-slate-200'} cursor-pointer border-2 ${days[i] === selectedDay ? 'border-slate-800' : 'border-transparent'} hover:scale-110 transition-transform`}
                                onClick={() => days[i] && setSelectedDay(days[i])}
                            />
                        ))}
                        <span className="text-[9px] font-bold text-slate-300 ml-1 uppercase">Load</span>
                    </div>
                )}
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
                                    onClick={() => { setSelectedDay(day); setIsDropdownOpen(false); }}
                                    className={`w-full text-left px-5 py-2.5 text-[10px] font-bold uppercase transition-colors ${selectedDay === day ? 'text-cyber-green bg-green-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
                                >
                                    {formatDate(day)}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
