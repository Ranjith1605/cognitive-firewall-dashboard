import { Lightbulb, ChevronRight } from 'lucide-react';

export default function InsightBox({ insight }) {
    return (
        <div className="relative overflow-hidden bg-card/80 backdrop-blur-sm border border-cyber-green/20 rounded-2xl p-6 transition-all duration-300 hover:border-cyber-green/30 group">
            {/* Subtle accent gradient */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyber-green to-emerald-600 rounded-l-2xl" />

            <div className="flex items-start gap-4 pl-3">
                <div className="w-10 h-10 rounded-xl bg-cyber-green/12 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Lightbulb className="w-5 h-5 text-cyber-green" />
                </div>

                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-sm font-semibold text-cyber-green">
                            Gentle Recommendation
                        </h3>
                        <span className="text-[10px] font-medium text-white/30 bg-white/5 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            AI Insight
                        </span>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                        {insight}
                    </p>
                </div>

                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-white/20 hover:text-cyber-green hover:bg-cyber-green/10 transition-all duration-200 flex-shrink-0 mt-1">
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
