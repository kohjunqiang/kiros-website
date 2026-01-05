import { ShieldCheck, CreditCard, CircleX } from "lucide-react";

export function StatsSection() {
    return (
        <div className="w-full px-4 md:px-8 lg:px-[60px]">
            <div className="w-full flex flex-col md:flex-row h-auto md:h-[72px] border-l border-r border-slate-200">
                {/* Stat 1 */}
                <div className="bg-[#051040] flex-1 flex items-center justify-center gap-2 py-5 md:py-0 border-r border-slate-200/15">
                    <ShieldCheck className="w-5 h-5 text-white shrink-0" />
                    <p className="text-white font-medium text-sm md:text-base leading-[1.5]">
                        30-day money back guarantee
                    </p>
                </div>

                {/* Stat 2 */}
                <div className="bg-[#1c2e63] flex-1 flex items-center justify-center gap-2 py-5 md:py-0 border-r border-slate-200/15">
                    <CreditCard className="w-5 h-5 text-white shrink-0" />
                    <p className="text-white font-medium text-sm md:text-base leading-[1.5]">
                        No Credit Card Required
                    </p>
                </div>

                {/* Stat 3 */}
                <div className="bg-[#9fc9e4] flex-1 flex items-center justify-center gap-2 py-5 md:py-0">
                    <CircleX className="w-5 h-5 text-white shrink-0" />
                    <p className="text-white font-medium text-sm md:text-base leading-[1.5]">
                        Cancel anytime
                    </p>
                </div>
            </div>
        </div>
    );
}
