import React, { useState, useEffect } from 'react';
import { Shield, ShieldOff, Timer, Coffee, Zap, BrainCircuit, Lock } from 'lucide-react';

const DeepFocusView = () => {
    const [isActive, setIsActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
    const [focusProgress, setFocusProgress] = useState(0);

    useEffect(() => {
        let interval = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
                setFocusProgress((prev) => Math.min(prev + 0.05, 100));
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const toggleShield = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="flex flex-col items-center justify-center py-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">

            {/* Target Gauge */}
            <div className="relative w-80 h-80 flex items-center justify-center mb-12">
                {/* Outer Ring */}
                <div className={`absolute inset-0 rounded-full border-[16px] transition-colors duration-1000 ${isActive ? 'border-indigo-500/10' : 'border-slate-100'}`} />

                {/* Animated Progress Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                        cx="160" cy="160" r="144"
                        fill="none"
                        stroke={isActive ? '#6366f1' : '#e2e8f0'}
                        strokeWidth="16"
                        strokeDasharray="904"
                        strokeDashoffset={904 - (focusProgress / 100) * 904}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-linear"
                    />
                </svg>

                {/* Central Content */}
                <div className="text-center z-10">
                    <div className={`w-16 h-16 rounded-3xl mx-auto flex items-center justify-center mb-4 transition-all duration-500 ${isActive ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/30' : 'bg-slate-100 text-slate-400'}`}>
                        <BrainCircuit className={`w-8 h-8 ${isActive ? 'animate-pulse' : ''}`} />
                    </div>
                    <div className="text-6xl font-black text-slate-800 tabular-nums tracking-tighter">
                        {formatTime(timeLeft)}
                    </div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-2">
                        {isActive ? 'Shield Active' : 'Standby'}
                    </p>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col items-center gap-6 max-w-md w-full">
                <div className="flex gap-4 w-full">
                    <button
                        onClick={toggleShield}
                        className={`flex-1 group relative overflow-hidden flex items-center justify-center gap-3 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all
              ${isActive
                                ? 'bg-slate-900 text-white hover:bg-slate-800'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 hover:scale-[1.02]'
                            }`}
                    >
                        {isActive ? <ShieldOff className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
                        {isActive ? 'Deactivate Shield' : 'Engage Firewall'}
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-4 w-full">
                    {[
                        { icon: Timer, label: '25m Session', active: true },
                        { icon: Coffee, label: 'Long Break', active: false },
                        { icon: Lock, label: 'Block Distractions', active: true }
                    ].map((item, i) => (
                        <button key={i} className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${item.active ? 'bg-golden-white border-slate-200 shadow-sm text-slate-800' : 'bg-transparent border-slate-100 text-slate-300'}`}>
                            <item.icon className="w-5 h-5" />
                            <span className="text-[10px] font-black uppercase tracking-tight">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Bottom Status Info */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl px-8">
                <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                        <Zap className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="text-sm font-black text-slate-800 uppercase">Automated Policy</h4>
                        <p className="text-xs font-medium text-slate-500 mt-1 leading-relaxed">
                            When the "Shield" is engaged, CipherPolice blocks incoming notification streams and limits browser tab-switching frequency to preserve cognitive bandwidth.
                        </p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                        <Shield className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="text-sm font-black text-slate-800 uppercase">Mental Perimeter</h4>
                        <p className="text-xs font-medium text-slate-500 mt-1 leading-relaxed">
                            The Mental Perimeter is currently stable. Zero focus breaches detected in the current session. Baseline synchronization is optimal.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeepFocusView;
