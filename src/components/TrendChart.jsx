import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { Info } from 'lucide-react';

const TrendChart = ({ data }) => {
    return (
        <div className="bg-golden-white rounded-xl border border-slate-200 shadow-sm p-6 h-full min-h-[400px]">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Trend over Time</h3>
                    <Info className="w-4 h-4 text-slate-300" />
                </div>

                {/* Day/Week/Month Toggle (Design Only) */}
                <div className="flex bg-slate-100 p-1 rounded-lg">
                    {['Day', 'Week', 'Month'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${tab === 'Day' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorCS" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorAF" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                            dataKey="frame"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 10 }}
                            interval={4}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 10 }}
                            domain={[0, 1]}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#fff',
                                borderRadius: '8px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                fontSize: '12px'
                            }}
                        />
                        <Legend
                            verticalAlign="top"
                            height={36}
                            iconType="circle"
                            iconSize={8}
                            formatter={(val) => <span className="text-[10px] font-bold text-slate-500 uppercase">{val}</span>}
                            wrapperStyle={{ top: -10, left: 10 }}
                        />
                        <Area
                            name="Cognitive Load"
                            type="monotone"
                            dataKey="CS_hourly"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorCS)"
                            dot={false}
                            activeDot={{ r: 4, strokeWidth: 0 }}
                        />
                        <Area
                            name="Fragmentation"
                            type="monotone"
                            dataKey="AF"
                            stroke="#22c55e"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorAF)"
                            dot={false}
                        />
                        <Area
                            name="Hesitation"
                            type="monotone"
                            dataKey="CF"
                            stroke="#eab308"
                            strokeWidth={2}
                            fillOpacity={0}
                            dot={false}
                        />
                        <Area
                            name="Pressure"
                            type="monotone"
                            dataKey="CP"
                            stroke="#f43f5e"
                            strokeWidth={2}
                            fillOpacity={0}
                            dot={false}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TrendChart;
