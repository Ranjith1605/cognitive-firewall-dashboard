import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
        const score = payload[0].value;
        let color = '#10B981';
        if (score > 70) color = '#EF4444';
        else if (score > 40) color = '#F59E0B';

        return (
            <div className="bg-[#111827] border border-white/10 rounded-xl px-4 py-3 shadow-2xl">
                <p className="text-xs text-white/40 mb-1">{label}</p>
                <p className="text-lg font-bold" style={{ color }}>
                    {score}
                    <span className="text-xs text-white/30 font-normal ml-1">/ 100</span>
                </p>
            </div>
        );
    }
    return null;
}

export default function TrendChart({ data }) {
    const maxScore = Math.max(...data.map(d => d.score));
    let gradientColor = '#10B981';
    if (maxScore > 70) gradientColor = '#EF4444';
    else if (maxScore > 40) gradientColor = '#F59E0B';

    return (
        <div className="bg-card/80 backdrop-blur-sm border border-card-border rounded-2xl p-6 transition-all duration-300 hover:border-white/10">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider">
                        24-Hour Trend
                    </h2>
                    <p className="text-xs text-white/30 mt-1">Cognitive load over time</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-cyber-green" />
                        <span className="text-xs text-white/40">0-40</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-caution" />
                        <span className="text-xs text-white/40">41-70</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-overload" />
                        <span className="text-xs text-white/40">71+</span>
                    </div>
                </div>
            </div>

            <div className="h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={gradientColor} stopOpacity={0.3} />
                                <stop offset="100%" stopColor={gradientColor} stopOpacity={0.02} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                        <XAxis
                            dataKey="hour"
                            tick={{ fill: 'rgba(255,255,255,0.25)', fontSize: 11 }}
                            axisLine={{ stroke: 'rgba(255,255,255,0.05)' }}
                            tickLine={false}
                            interval={3}
                        />
                        <YAxis
                            domain={[0, 100]}
                            tick={{ fill: 'rgba(255,255,255,0.25)', fontSize: 11 }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                            type="monotone"
                            dataKey="score"
                            stroke={gradientColor}
                            strokeWidth={2.5}
                            fill="url(#scoreGradient)"
                            dot={false}
                            activeDot={{
                                r: 5,
                                stroke: gradientColor,
                                strokeWidth: 2,
                                fill: '#111827'
                            }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
