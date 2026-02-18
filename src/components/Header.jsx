import { Layers, ToggleLeft, ToggleRight } from 'lucide-react';

export default function Header({ isFocused, onToggle, tabCount }) {
    return (
        <header className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-soft tracking-tight">
                    Cognitive Firewall
                </h1>
                <p className="text-sm text-white/40 mt-1">
                    Real-time mental load monitoring
                </p>
            </div>

            <div className="flex items-center gap-5">
                {/* Tab Count Badge */}
                <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-card-border rounded-xl px-4 py-2.5 transition-all duration-300 hover:border-cyber-green/20">
                    <Layers className="w-4 h-4 text-cyber-green" />
                    <span className="text-xs font-medium text-white/50">Tabs</span>
                    <span className="bg-cyber-green/15 text-cyber-green text-sm font-bold px-2.5 py-0.5 rounded-lg min-w-[32px] text-center">
                        {tabCount}
                    </span>
                </div>

                {/* Persona Toggle */}
                <button
                    onClick={onToggle}
                    className="flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-card-border rounded-xl px-4 py-2.5 cursor-pointer transition-all duration-300 hover:border-cyber-green/20 group"
                >
                    <span className="text-xs font-medium text-white/50">Persona</span>
                    {isFocused ? (
                        <ToggleLeft className="w-7 h-7 text-cyber-green transition-transform duration-300" />
                    ) : (
                        <ToggleRight className="w-7 h-7 text-overload transition-transform duration-300" />
                    )}
                    <span className={`text-xs font-semibold transition-colors duration-300 ${isFocused ? 'text-cyber-green' : 'text-overload'
                        }`}>
                        {isFocused ? 'Focused Flow' : 'Fragmented'}
                    </span>
                </button>
            </div>
        </header>
    );
}
