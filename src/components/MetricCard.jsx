import { useState } from 'react';
import { HelpCircle } from 'lucide-react';

function getScoreStyle(score) {
    if (score <= 40) return { color: '#10B981', bg: 'rgba(16,185,129,0.12)', barBg: 'rgba(16,185,129,0.15)' };
    if (score <= 70) return { color: '#F59E0B', bg: 'rgba(245,158,11,0.12)', barBg: 'rgba(245,158,11,0.15)' };
    return { color: '#EF4444', bg: 'rgba(239,68,68,0.12)', barBg: 'rgba(239,68,68,0.15)' };
}

export default function MetricCard({ title, score, icon: Icon, details }) {
    const [showTooltip, setShowTooltip] = useState(false);
    const { color, bg, barBg } = getScoreStyle(score);

    return (
        <div className="relative bg-card/80 backdrop-blur-sm border border-card-border rounded-2xl p-6 transition-all duration-300 hover:border-white/10 hover:shadow-lg group">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: bg }}
                    >
                        <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white/80">{title}</h3>
                    </div>
                </div>

                {/* Help Icon */}
                <div className="relative">
                    <button
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-white/20 hover:text-white/50 hover:bg-white/5 transition-all duration-200"
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        <HelpCircle className="w-4 h-4" />
                    </button>

                    {/* Tooltip */}
                    {showTooltip && (
                        <div className="absolute right-0 top-full mt-2 w-72 bg-[#111827] border border-white/10 rounded-xl p-4 shadow-2xl z-50 animate-in fade-in duration-200">
                            <p className="text-xs font-mono text-cyber-green mb-2">{details.formula}</p>
                            <div className="space-y-1.5">
                                {details.tab_switches !== undefined && (
                                    <div className="flex justify-between text-xs">
                                        <span className="text-white/40">Tab Switches</span>
                                        <span className="text-white/70 font-medium">{details.tab_switches}/hr</span>
                                    </div>
                                )}
                                {details.interruptions !== undefined && (
                                    <div className="flex justify-between text-xs">
                                        <span className="text-white/40">Interruptions</span>
                                        <span className="text-white/70 font-medium">{details.interruptions}/hr</span>
                                    </div>
                                )}
                                {details.task_resumption_ms !== undefined && (
                                    <div className="flex justify-between text-xs">
                                        <span className="text-white/40">Task Resumption</span>
                                        <span className="text-white/70 font-medium">{(details.task_resumption_ms / 1000).toFixed(1)}s</span>
                                    </div>
                                )}
                                {details.decision_latency_ms !== undefined && (
                                    <div className="flex justify-between text-xs">
                                        <span className="text-white/40">Decision Latency</span>
                                        <span className="text-white/70 font-medium">{(details.decision_latency_ms / 1000).toFixed(1)}s</span>
                                    </div>
                                )}
                                {details.open_tabs !== undefined && (
                                    <div className="flex justify-between text-xs">
                                        <span className="text-white/40">Open Tabs</span>
                                        <span className="text-white/70 font-medium">{details.open_tabs}</span>
                                    </div>
                                )}
                                {details.meeting_density !== undefined && (
                                    <div className="flex justify-between text-xs">
                                        <span className="text-white/40">Meeting Density</span>
                                        <span className="text-white/70 font-medium">{Math.round(details.meeting_density * 100)}%</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Score */}
            <div className="flex items-end gap-2 mb-3">
                <span className="text-3xl font-bold tabular-nums" style={{ color }}>
                    {score}
                </span>
                <span className="text-sm text-white/30 mb-1">/ 100</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: barBg }}>
                <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                        width: `${score}%`,
                        backgroundColor: color,
                    }}
                />
            </div>
        </div>
    );
}
