import React from 'react';
import { Lightbulb } from 'lucide-react';

const InsightBox = ({ recommendation }) => {
    return (
        <div className="bg-[#1e293b] rounded-xl p-6 text-white h-full shadow-lg shadow-blue-900/10">
            <div className="flex items-center gap-3 mb-4">
                <h3 className="text-sm font-bold uppercase tracking-wider">One thing you can try</h3>
            </div>

            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center shrink-0">
                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                    <p className="text-sm leading-relaxed text-slate-300 italic">
                        "{recommendation || 'Keep maintaining your focus flow by taking short structured breaks.'}"
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InsightBox;
