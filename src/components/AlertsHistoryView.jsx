import React from 'react';
import { Bell, AlertTriangle, Info, CheckCircle, Search, Filter, Trash2, ChevronRight } from 'lucide-react';

const AlertsHistoryView = () => {
    const alerts = [
        { id: 1, type: 'critical', title: 'Cognitive Perimeter Breach', time: '14:32', description: 'Unusual rapid tab switching detected (18 switches in 45s). Manual logic override suggested.', status: 'New' },
        { id: 2, type: 'warning', title: 'High Context Pressure', time: '12:05', description: 'Open tab count exceeding baseline by 40%. Memory pressure detected in Logic Engine.', status: 'Read' },
        { id: 3, type: 'info', title: 'Deep Focus Cycle Complete', time: '10:45', description: 'Successfully maintained a 45-minute focus session with zero context fragmentation.', status: 'Read' },
        { id: 4, type: 'critical', title: 'Identity Confidence Low', time: '09:12', description: 'Unusual scroll variance detected. Verification required to maintain secure state.', status: 'Archived' },
        { id: 5, type: 'success', title: 'System Optimization', time: 'Yesterday', description: 'Behavioral fingerprinting baseline updated based on last 7 days of fragmented load.', status: 'Archived' },
    ];

    const getAlertIcon = (type) => {
        switch (type) {
            case 'critical': return { icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50' };
            case 'warning': return { icon: Info, color: 'text-orange-600', bg: 'bg-orange-50' };
            case 'success': return { icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50' };
            default: return { icon: Bell, color: 'text-blue-600', bg: 'bg-blue-50' };
        }
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Top Controls */}
            <div className="flex items-center justify-between mb-8">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search security events..."
                        className="w-full bg-golden-white border border-slate-200 rounded-2xl pl-12 pr-4 py-3 text-[11px] font-bold text-slate-700 outline-none focus:border-cyber-green transition-all"
                    />
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-3 bg-golden-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 transition-all">
                        <Filter className="w-3.5 h-3.5" />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-3 bg-golden-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50 transition-all border-red-100">
                        <Trash2 className="w-3.5 h-3.5" />
                        Clear All
                    </button>
                </div>
            </div>

            {/* Alert List */}
            <div className="space-y-4">
                {alerts.map((alert) => {
                    const { icon: Icon, color, bg } = getAlertIcon(alert.type);
                    return (
                        <div key={alert.id} className="group flex items-center gap-6 p-6 bg-golden-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer">
                            <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center shrink-0`}>
                                <Icon className={`w-6 h-6 ${color}`} />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="text-sm font-black text-slate-800 uppercase tracking-tight">{alert.title}</h4>
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{alert.time}</span>
                                </div>
                                <p className="text-xs font-medium text-slate-500 line-clamp-1">{alert.description}</p>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className={`px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest ${alert.status === 'New' ? 'bg-cyber-green text-white' : 'bg-slate-100 text-slate-400'
                                    }`}>
                                    {alert.status}
                                </div>
                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-slate-100">
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Empty State / Pagination */}
            <div className="mt-12 text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                End of forensic record // 5 events displayed
            </div>
        </div>
    );
};

export default AlertsHistoryView;
