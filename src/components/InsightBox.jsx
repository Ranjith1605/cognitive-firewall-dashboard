import React from 'react';
import { Lightbulb } from 'lucide-react';

const InsightBox = ({ recommendation }) => {
    return (
        <div className="bg-[#F0F9FF] rounded-xl p-6 text-slate-800 h-full border border-blue-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-xs font-black uppercase tracking-wider text-blue-900/60">One thing you can try</h3>
            </div>

            <div className="flex gap-4">
                <div>
                    <p className="text-sm leading-relaxed text-slate-600 italic font-medium">
                        "{recommendation || 'Keep maintaining your focus flow by taking short structured breaks.'}"
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InsightBox;
