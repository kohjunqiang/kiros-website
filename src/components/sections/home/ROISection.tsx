import { ClockArrowDown, SmilePlus } from "lucide-react";
import { Badge } from "@/components/ui";

export function ROISection() {
    return (
        <div className="w-full bg-[#0B0C0F] px-4 md:px-8 lg:px-[60px] border-b border-[#E2E8F026]">
            <div className="w-full border-l border-r border-[#E2E8F026]">
                {/* Header Section */}
                <div className="w-full">
                    <div className="flex items-center justify-center p-4 md:p-6">
                        <Badge text="The ROI of Automation" variant="dark" />
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="w-full border-t border-[#E2E8F026] flex flex-col md:flex-row">
                    {/* Time Saved */}
                    <div className="flex-1 border-r border-[#E2E8F026] flex flex-col gap-2 items-center justify-center px-6 md:px-8 lg:px-10 py-12 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16 relative">
                        <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-[#141C2E] px-2 py-0.5 rounded-md flex items-center gap-1">
                            <ClockArrowDown className="w-3 h-3 text-[#ECFDF5]" />
                            <span className="text-xs font-medium text-[#ECFDF5]">Time Saved</span>
                        </div>
                        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-semibold text-[#6EE7B7] leading-[1.4]">12-17</p>
                        <p className="text-sm md:text-base font-normal text-[#9CA3AF] text-center leading-[1.5] px-4">
                            hours time saved and reclaimed per portfolio.
                        </p>
                    </div>

                    {/* Capacity Increase */}
                    <div className="flex-1 border-r border-[#E2E8F026] flex flex-col gap-2 items-center justify-center px-6 md:px-8 lg:px-10 py-12 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16 relative">
                        <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-[#141C2E] px-2 py-0.5 rounded-md flex items-center gap-1">
                            <img src="/icons/icon-capacity.svg" alt="" className="w-3 h-3" />
                            <span className="text-xs font-medium text-[#ECFDF5]">Capacity Increase</span>
                        </div>
                        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-semibold text-[#6EE7B7] leading-[1.4]">4x</p>
                        <p className="text-sm md:text-base font-normal text-[#9CA3AF] text-center leading-[1.5] px-4">
                            increase in advisor capacity in handling clients
                        </p>
                    </div>

                    {/* Client Experience */}
                    <div className="flex-1 flex flex-col gap-2 items-center justify-center px-6 md:px-8 lg:px-10 py-12 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16 relative">
                        <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-[#141C2E] px-2 py-0.5 rounded-md flex items-center gap-1">
                            <SmilePlus className="w-3 h-3 text-[#ECFDF5]" />
                            <span className="text-xs font-medium text-[#ECFDF5]">Client Experience</span>
                        </div>
                        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-semibold text-[#6EE7B7] leading-[1.4]">zero</p>
                        <p className="text-sm md:text-base font-normal text-[#9CA3AF] text-center leading-[1.5] px-4">
                            wait time. Deliver analysis in first meeting.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
