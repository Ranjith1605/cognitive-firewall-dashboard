import React, { useState } from 'react';
import { Calendar, Play, ChevronDown, User } from 'lucide-react';

const Header = ({ isFocused, onToggle, selectedDay, setSelectedDay, days, status, score }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Map scores/labels to colors from XD
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

    return (
        <header className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-slate-800">Cognitive Load</h1>
                <div className={`${getStatusColor(status)} px-4 py-1 rounded-full text-white text-xs font-bold shadow-sm shadow-current/20`}>
                    {status}
                </div>
            </div>

            <div className="flex items-center gap-4">
                {/* Day Selector */}
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:border-cyber-green transition-all shadow-sm"
                    >
                        <Calendar className="w-4 h-4 text-cyber-green" />
                        <span>{formatDate(selectedDay)}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-lg shadow-xl z-[100] py-1 overflow-hidden">
                            {days.map((day) => (
                                <button
                                    key={day}
                                    onClick={() => {
                                        setSelectedDay(day);
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2 text-xs hover:bg-slate-50 transition-colors ${selectedDay === day ? 'text-cyber-green font-bold bg-green-50' : 'text-slate-600'}`}
                                >
                                    {formatDate(day)}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Record Button (Animated) */}
                <button className="relative flex items-center justify-center w-10 h-10 bg-[#1e293b] rounded-full text-white hover:scale-105 transition-transform group">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-30 pointer-events-none" />
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Live Tracking
                    </span>
                </button>

                {/* Persona Toggle (Demo Only) */}
                <button
                    onClick={onToggle}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 rounded-lg text-white text-xs font-bold hover:shadow-lg transition-all"
                >
                    <User className="w-3 h-3" />
                    {isFocused ? 'Focused' : 'Fragmented'}
                </button>
            </div>
        </header>
    );
};

export default Header;
