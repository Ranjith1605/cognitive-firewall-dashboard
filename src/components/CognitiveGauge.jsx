import { useEffect, useRef, useState } from 'react';

function getScoreColor(score) {
    if (score <= 40) return { main: '#10B981', glow: 'rgba(16,185,129,0.3)', label: 'Stable' };
    if (score <= 70) return { main: '#F59E0B', glow: 'rgba(245,158,11,0.3)', label: 'Caution' };
    return { main: '#EF4444', glow: 'rgba(239,68,68,0.3)', label: 'Overload' };
}

export default function CognitiveGauge({ score }) {
    const [animatedScore, setAnimatedScore] = useState(0);
    const animationRef = useRef(null);

    useEffect(() => {
        const start = animatedScore;
        const end = score;
        const duration = 1200;
        const startTime = performance.now();

        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setAnimatedScore(Math.round(start + (end - start) * eased));
            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
            }
        }

        animationRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [score]);

    const { main, glow, label } = getScoreColor(animatedScore);
    const radius = 90;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference - (animatedScore / 100) * circumference;

    return (
        <div className="bg-card/80 backdrop-blur-sm border border-card-border rounded-2xl p-8 flex flex-col items-center justify-center transition-all duration-500 hover:border-white/10">
            <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-6">
                Daily Cognitive Score
            </h2>

            <div className="relative w-56 h-56">
                {/* Glow effect */}
                <div
                    className="absolute inset-0 rounded-full blur-2xl opacity-30 transition-all duration-700"
                    style={{ backgroundColor: glow }}
                />

                <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                    {/* Background track */}
                    <circle
                        cx="100" cy="100" r={radius}
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="12"
                    />
                    {/* Score arc */}
                    <circle
                        cx="100" cy="100" r={radius}
                        fill="none"
                        stroke={main}
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={dashOffset}
                        style={{ transition: 'stroke-dashoffset 0.1s ease-out, stroke 0.5s ease' }}
                    />
                    {/* Inner subtle ring */}
                    <circle
                        cx="100" cy="100" r="72"
                        fill="none"
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="1"
                    />
                </svg>

                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span
                        className="text-5xl font-bold tabular-nums transition-colors duration-500"
                        style={{ color: main }}
                    >
                        {animatedScore}
                    </span>
                    <span className="text-xs font-medium text-white/40 mt-1">/ 100</span>
                    <span
                        className="text-xs font-semibold mt-2 px-3 py-1 rounded-full transition-all duration-500"
                        style={{
                            color: main,
                            backgroundColor: `${main}15`
                        }}
                    >
                        {label}
                    </span>
                </div>
            </div>

            <p className="text-xs text-white/30 mt-6 text-center max-w-[200px]">
                Composite score from attention, friction, and context pressure metrics
            </p>
        </div>
    );
}
