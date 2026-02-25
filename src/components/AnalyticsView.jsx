import React from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { Target, Zap, Waves, Activity, TrendingUp, AlertCircle } from 'lucide-react';

const AnalyticsView = ({ dayData, hourlyData = [], pillarScores = {} }) => {
    const { attentionFragmentation = 0, interactionEffort = 0, contextPressure = 0 } = pillarScores;

    // Real pillar-based radar chart
    const radarData = [
        { subject: 'Attention\nFragmentation', A: Math.round(attentionFragmentation * 100), fullMark: 100 },
        { subject: 'Interaction\nEffort', A: Math.round(interactionEffort * 100), fullMark: 100 },
        { subject: 'Context\nPressure', A: Math.round(contextPressure * 100), fullMark: 100 },
        { subject: 'Interruptions', A: Math.min(Math.round((dayData.total_interruptions_per_day / 300) * 100), 100), fullMark: 100 },
        { subject: 'Tab Load', A: Math.min(Math.round((dayData.avg_open_tabs / 20) * 100), 100), fullMark: 100 },
    ];

    // Mock historical weekly data
    const weeklyData = [
        { name: 'Mon', load: 45, interruptions: 120 },
        { name: 'Tue', load: 52, interruptions: 140 },
        { name: 'Wed', load: 78, interruptions: 210 },
        { name: 'Thu', load: 58, interruptions: 160 },
        { name: 'Fri', load: 40, interruptions: 90 },
        { name: 'Sat', load: 20, interruptions: 30 },
        { name: 'Sun', load: 25, interruptions: 40 },
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

                {/* Cognitive Profile (Radar Chart) */}
                <div className="bg-golden-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">Cognitive Profile</h3>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Multi-dimensional risk analysis</p>
                        </div>
                        <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                            <Target className="w-5 h-5" />
                        </div>
                    </div>

                    <div className="h-[300px] w-full flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                                <PolarGrid stroke="#E2E8F0" />
                                <PolarAngleAxis
                                    dataKey="subject"
                                    tick={{ fill: '#64748B', fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase' }}
                                />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar
                                    name="Current"
                                    dataKey="A"
                                    stroke="#4F46E5"
                                    fill="#4F46E5"
                                    fillOpacity={0.15}
                                    strokeWidth={3}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Primary Driver</p>
                            <p className="text-sm font-black text-slate-800 uppercase">
                                {attentionFragmentation >= interactionEffort && attentionFragmentation >= contextPressure ? 'Attention Fragmentation'
                                    : interactionEffort >= contextPressure ? 'Interaction Effort'
                                        : 'Context Pressure'}
                            </p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Daily Score</p>
                            <p className="text-sm font-black text-indigo-600 uppercase">{dayData.daily_cognitive_load_label}</p>
                        </div>
                    </div>
                </div>

                {/* Weekly Efficiency (Bar Chart) */}
                <div className="bg-golden-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">Weekly Efficiency</h3>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Historical focus trends</p>
                        </div>
                        <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                    </div>

                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={weeklyData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#94A3B8', fontSize: 11, fontWeight: 'bold' }}
                                />
                                <YAxis hide />
                                <Tooltip
                                    cursor={{ fill: '#F8FAFC' }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                    labelStyle={{ fontWeight: 'bold', textTransform: 'uppercase', color: '#64748B' }}
                                />
                                <Bar
                                    dataKey="load"
                                    fill="#10B981"
                                    radius={[6, 6, 0, 0]}
                                    barSize={32}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="flex items-center gap-4 mt-6 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                        <Zap className="w-5 h-5 text-emerald-600" />
                        <p className="text-xs font-bold text-emerald-800">
                            You were <span className="font-black text-emerald-900">12% more efficient</span> this week compared to your baseline.
                        </p>
                    </div>
                </div>

            </div>

            {/* Driver Deep Dive */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[{ icon: Waves, label: 'Avg Interruption Lag', value: `${dayData.avg_interruption_lag_min_per_day?.toFixed(2)} min`, color: 'text-blue-600', bg: 'bg-blue-50' },
                { icon: Activity, label: 'Total Interruptions', value: dayData.total_interruptions_per_day, color: 'text-orange-600', bg: 'bg-orange-50' },
                { icon: AlertCircle, label: 'Context Resilience', value: contextPressure < 0.4 ? 'High' : contextPressure < 0.7 ? 'Medium' : 'Low', color: 'text-rose-600', bg: 'bg-rose-50' }
                ].map((item, i) => (
                    <div key={i} className="bg-golden-white rounded-2xl border border-slate-200 p-6 shadow-sm flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color}`}>
                            <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                            <p className={`text-xl font-black ${item.color} tabular-nums`}>{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnalyticsView;
