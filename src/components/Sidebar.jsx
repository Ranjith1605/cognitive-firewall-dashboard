import {
    LayoutDashboard,
    Activity,
    Brain,
    Settings,
    Shield,
    BarChart3,
    Bell
} from 'lucide-react';

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Activity, label: 'Activity Log', active: false },
    { icon: Brain, label: 'Deep Focus', active: false },
    { icon: BarChart3, label: 'Analytics', active: false },
    { icon: Bell, label: 'Alerts', active: false },
    { icon: Settings, label: 'Settings', active: false },
];

export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-[72px] bg-[#111827] flex flex-col items-center py-6 z-50 border-r border-white/5">
            {/* Logo */}
            <div className="mb-10 relative group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-green to-emerald-400 flex items-center justify-center shadow-lg shadow-cyber-green/20 transition-transform duration-300 group-hover:scale-110">
                    <Shield className="w-5 h-5 text-navy" strokeWidth={2.5} />
                </div>
                <div className="absolute w-2 h-2 bg-cyber-green rounded-full -top-0.5 -right-0.5 animate-pulse" />
            </div>

            {/* Nav Items */}
            <nav className="flex flex-col gap-2 flex-1">
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        title={item.label}
                        className={`relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group
              ${item.active
                                ? 'bg-cyber-green/15 text-cyber-green shadow-lg shadow-cyber-green/10'
                                : 'text-white/30 hover:text-white/60 hover:bg-white/5'
                            }`}
                    >
                        {item.active && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[2px] w-1 h-6 bg-cyber-green rounded-r-full" />
                        )}
                        <item.icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                    </button>
                ))}
            </nav>

            {/* Bottom avatar */}
            <div className="mt-auto">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-navy-lighter to-navy-light flex items-center justify-center text-xs font-semibold text-white/50 border border-white/10 cursor-pointer hover:border-cyber-green/30 transition-colors">
                    RJ
                </div>
            </div>
        </aside>
    );
}
