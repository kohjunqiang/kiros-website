import { Clock3, BadgeAlert, Hourglass } from "lucide-react";
import { Badge } from "@/components/ui";

const imgStep1 = "/images/home/home-step1.png";
const imgStep2 = "/images/home/home-step2.png";
const imgStep3 = "/images/home/home-step3.png";

export function PastWaySection() {
    return (
        <div className="w-full bg-slate-50 px-4 md:px-8 lg:px-[60px]">
            <div className="w-full border-l border-r border-slate-200">
                {/* Header Section */}
                <div className="w-full border-t border-slate-200">
                    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:pt-20 lg:pb-16 xl:pt-[120px] xl:pb-[80px]">
                        <div className="max-w-[874px] flex flex-col items-center gap-3 md:gap-4">
                            {/* Eyebrow Badge */}
                            <Badge text="The Pain" />

                            {/* Title */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-semibold text-[#111827] text-center tracking-[-0.02em] leading-[1.1]">
                                Stop "Spreadsheet Sundays"
                            </h2>

                            {/* Subtitle */}
                            <p className="text-base md:text-lg font-medium text-[#4B5563] text-center leading-[1.5] px-4">
                                Reclaim the 80% of your time spent on data entry and focus on<br />
                                the 20% that matters, advising your client.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Switch Section */}
                <div className="w-full border-t border-slate-200">
                    <div className="flex items-center justify-center p-4 md:p-6">
                        <div className="flex items-center gap-2">
                            <img src="/icons/icon-book.svg" alt="" className="w-8 h-8 md:w-8 md:h-8 flex-shrink-0 pt-1" />
                            <p className="text-base md:text-lg font-medium leading-[1.5] text-[#4b5563]">
                                The Manual Way (The Past)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Three Steps Grid */}
                <div className="w-full border-t border-slate-200 flex flex-col md:flex-row">
                    {/* Step 1 */}
                    <div className="flex-1 p-6 md:p-8 lg:p-10 border-r border-slate-200 flex flex-col gap-4 md:gap-6">
                        <p className="text-xs md:text-sm font-medium text-[#d42600]">[ Step-01 ]</p>
                        <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[440px] bg-slate-100 overflow-hidden">
                            <img
                                src={imgStep1}
                                alt="The Digging"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                            {/* Decorative bars */}
                            <div className="absolute bottom-[171px] left-0 w-full">
                                <div className="h-2 bg-[#d42600] opacity-40"></div>
                                <div className="h-1.5 bg-[#d42600] opacity-30 mt-2"></div>
                                <div className="h-1 bg-[#d42600] opacity-20 mt-1.5"></div>
                                <div className="h-0.5 bg-[#d42600] opacity-10 mt-1"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-3">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#4b5563] tracking-tight leading-[1.1]">The Digging</h3>
                            <p className="text-sm md:text-base font-normal text-[#6b7280] leading-[1.5]">
                                Digging through the fine print of 5 different PDFs to find specific coverage limits.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex-1 p-6 md:p-8 lg:p-10 border-r border-slate-200 flex flex-col gap-4 md:gap-6">
                        <p className="text-xs md:text-sm font-medium text-[#d42600]">[ Step-02 ]</p>
                        <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[440px] bg-slate-100 overflow-hidden">
                            <img
                                src={imgStep2}
                                alt="The Data Entry"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                            {/* Decorative bars */}
                            <div className="absolute bottom-0 left-0 w-full">
                                <div className="h-2 bg-[#d42600] opacity-40"></div>
                                <div className="h-1.5 bg-[#d42600] opacity-30 mt-2"></div>
                                <div className="h-1 bg-[#d42600] opacity-20 mt-1.5"></div>
                                <div className="h-0.5 bg-[#d42600] opacity-10 mt-1"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-3">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#4b5563] tracking-tight leading-[1.1]">The Data Entry</h3>
                            <p className="text-sm md:text-base font-normal text-[#6b7280] leading-[1.5]">
                                Manually typing and organising numbers into Excel. One typo ruins the whole projection.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6">
                        <p className="text-xs md:text-sm font-medium text-[#d42600]">[ Step-03 ]</p>
                        <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[440px] bg-slate-100 overflow-hidden">
                            <img
                                src={imgStep3}
                                alt="The Calculation"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                            {/* Decorative bars */}
                            <div className="absolute top-[26px] left-0 w-full">
                                <div className="h-2 bg-[#d42600] opacity-40"></div>
                                <div className="h-1.5 bg-[#d42600] opacity-30 mt-2"></div>
                                <div className="h-1 bg-[#d42600] opacity-20 mt-1.5"></div>
                                <div className="h-0.5 bg-[#d42600] opacity-10 mt-1"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-3">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#4b5563] tracking-tight leading-[1.1]">The Calculation</h3>
                            <p className="text-sm md:text-base font-normal text-[#6b7280] leading-[1.5]">
                                Building custom formulas to sum up coverage across different policies and insurers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="w-full border-t border-slate-200">
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 px-4 md:px-6 lg:px-10 py-4 md:py-6">
                        <p className="text-xs md:text-sm font-medium text-[#6b7280] md:flex-1">The Results:</p>

                        <div className="flex flex-wrap items-center gap-2 md:gap-3 justify-center md:justify-start">
                            <div className="flex items-center gap-1.5">
                                <Clock3 className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-600" />
                                <span className="text-xs md:text-sm font-medium text-[#4b5563]">Time:</span>
                            </div>
                            <span className="text-xs md:text-sm text-[#d42600]">~ 12 hours (estimated)</span>
                        </div>

                        <div className="hidden md:block w-px h-3 bg-slate-200"></div>

                        <div className="flex flex-wrap items-center gap-2 md:gap-3 justify-center md:justify-start">
                            <div className="flex items-center gap-1.5">
                                <BadgeAlert className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-600" />
                                <span className="text-xs md:text-sm font-medium text-[#4b5563]">Compliance Risk:</span>
                            </div>
                            <span className="text-xs md:text-sm text-[#d42600]">High (manual entry errors)</span>
                        </div>

                        <div className="hidden md:block w-px h-3 bg-slate-200"></div>

                        <div className="flex flex-wrap items-center gap-2 md:gap-3 justify-center md:justify-start">
                            <div className="flex items-center gap-1.5">
                                <Hourglass className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-600" />
                                <span className="text-xs md:text-sm font-medium text-[#4b5563]">Client Wait</span>
                            </div>
                            <span className="text-xs md:text-sm text-[#d42600]">3 to 5 days</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
