import React, { useEffect, useRef, useState } from 'react';

function getScoreColor(score) {
    if (score <= 40) return { main: '#22C55E', label: 'Stable' };
    if (score <= 70) return { main: '#EAB308', label: 'Caution' };
    return { main: '#F97316', label: 'Overload' };
}

function getScoreLabel(score) {
    if (score <= 20) return "Very Low";
    if (score <= 40) return "Low";
    if (score <= 60) return "Medium";
    if (score <= 80) return "High";
    return "Very High";
}

export default function CognitiveGauge({ score, size = 200 }) {
    const [animatedScore, setAnimatedScore] = useState(0);
    const animationRef = useRef(null);

    useEffect(() => {
        const start = animatedScore;
        const end = score;
        const duration = 1500;
        const startTime = performance.now();

        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
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

    const { main } = getScoreColor(animatedScore);
    const strokeWidth = size * 0.08;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference - (animatedScore / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
                {/* Background track */}
                <circle
                    cx={size / 2} cy={size / 2} r={radius}
                    fill="none"
                    stroke="#F1F5F9"
                    strokeWidth={strokeWidth}
                />
                {/* Score arc */}
                <circle
                    cx={size / 2} cy={size / 2} r={radius}
                    fill="none"
                    stroke={main}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    style={{ transition: 'stroke 0.5s ease' }}
                />
            </svg>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                <span className="text-xl font-black text-slate-800 uppercase leading-tight">
                    {getScoreLabel(animatedScore)}
                </span>
                <span className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Cognitive Load</span>
            </div>
        </div>
    );
}
