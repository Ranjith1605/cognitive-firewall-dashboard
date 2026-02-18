import React from 'react';
import { Info } from 'lucide-react';
import CognitiveGauge from './CognitiveGauge';

const MetricPanel = ({ title, type, data, stats, score }) => {
    return (
        <div className={`bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col ${type === 'gauge' ? 'h-[280px]' : 'h-[280px]'}`}>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.15em]">{title}</h3>
                <button className="text-slate-300 hover:text-slate-500 transition-colors">
                    <Info className="w-3.5 h-3.5" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
                {type === 'timeline' && data && (
                    <div className="space-y-4">
                        {data.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <span className="text-[10px] text-slate-400 w-10 font-bold tabular-nums">{item.frame}</span>
                                <div
                                    className="px-2 py-0.5 rounded text-[9px] font-black text-white uppercase min-w-[50px] text-center"
                                    style={{ backgroundColor: item.color }}
                                >
                                    {item.label}
                                </div>
                                <span className="text-[11px] text-slate-600 truncate font-medium">{item.sentence}</span>
                            </div>
                        ))}
                    </div>
                )}

                {type === 'stats' && stats && (
                    <div className="space-y-6 mt-2">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex justify-between items-center group">
                                <div className="flex items-center gap-2">
                                    {stat.icon ? <stat.icon className="w-3.5 h-3.5 text-cyber-green" /> : <div className="w-1 h-1 rounded-full bg-cyber-green" />}
                                    <span className="text-xs text-slate-500 font-medium">{stat.label}</span>
                                </div>
                                <div className="text-right flex items-baseline gap-1">
                                    <span className="text-base font-bold text-slate-800 tabular-nums">{stat.value}</span>
                                    {stat.unit && <span className="text-[9px] text-slate-400 font-bold uppercase">{stat.unit}</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {type === 'gauge' && (
                    <div className="flex flex-col items-center justify-center flex-1 -mt-2">
                        <CognitiveGauge score={Math.round(score * 100)} size={160} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MetricPanel;
