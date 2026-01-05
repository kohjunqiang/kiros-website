import { Clock3, BadgeAlert, Hourglass, WandSparkles } from "lucide-react";

export function KirosWaySection() {
    return (
        <div className="w-full bg-[#0B0C0F] px-4 md:px-8 lg:px-[60px]">
            <div className="w-full border-l border-r border-[#E2E8F026]">
                {/* Switch Section */}
                <div className="w-full border-t border-[#E2E8F026]">
                    <div className="flex items-center justify-center p-4 md:p-6">
                        <div className="flex items-center gap-2">
                            <WandSparkles className="w-5 h-5 md:w-6 md:h-6 text-[#E56024]" />
                            <p className="text-base md:text-lg font-medium leading-[1.5] text-[#E56024]">
                                The KIROS Way (The Future)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Three Steps Grid */}
                <div className="w-full border-t border-[#E2E8F026] flex flex-col md:flex-row">
                    {/* Step 1 */}
                    <div className="flex-1 p-6 md:p-8 lg:p-10 border-r border-[#E2E8F026] flex flex-col gap-4 md:gap-6">
                        <p className="text-xs md:text-sm font-medium text-white">[ Step-01 ]</p>
                        <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[440px] bg-slate-100 overflow-hidden">
                            <img
                                src="/images/home/home-step1-new.png"
                                alt="Upload Documents"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:gap-3">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white tracking-tight leading-[1.1]">Secure Upload</h3>
                            <p className="text-sm md:text-base font-normal text-[#9CA3AF] leading-[1.5]">
                                Drag & drop raw policy PDFs directly into a secure, compliant workspace.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex-1 p-6 md:p-8 lg:p-10 border-r border-[#3D485626] flex flex-col gap-4 md:gap-6">
                        <p className="text-xs md:text-sm font-medium text-white">[ Step-02 ]</p>
                        <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[440px] bg-slate-100 overflow-hidden">
                            <img
                                src="/images/home/home-step2-new.png"
                                alt="AI Extraction"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:gap-3">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white tracking-tight leading-[1.1]">AI Extraction</h3>
                            <p className="text-sm md:text-base font-normal text-[#9CA3AF] leading-[1.5]">
                                Identifies policy details instantly and organizes them into a unified portfolio.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6">
                        <p className="text-xs md:text-sm font-medium text-white">[ Step-03 ]</p>
                        <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[440px] bg-slate-100 overflow-hidden">
                            <img
                                src="/images/home/home-step3-new.png"
                                alt="Review & Advise"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:gap-3">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white tracking-tight leading-[1.1]">Human Verification</h3>
                            <p className="text-sm md:text-base font-normal text-[#9CA3AF] leading-[1.5]">
                                Verify with a click. Edit on the fly and watch totals update instantly.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="w-full border-t border-[#E2E8F026]">
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 px-4 md:px-6 lg:px-10 py-4 md:py-6">
                        <p className="text-xs md:text-sm font-medium text-[#9ca3af] md:flex-1">The Results:</p>

                        <div className="flex flex-wrap items-center gap-2 md:gap-3 justify-center md:justify-start">
                            <div className="flex items-center gap-1.5">
                                <Clock3 className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#9ca3af]" />
                                <span className="text-xs md:text-sm font-medium text-[#d1d5db]">Time:</span>
                            </div>
                            <span className="text-xs md:text-sm text-[#059669]">~ minutes (estimated)</span>
                        </div>

                        <div className="hidden md:block w-px h-3 bg-[#E2E8F026]"></div>

                        <div className="flex flex-wrap items-center gap-2 md:gap-3 justify-center md:justify-start">
                            <div className="flex items-center gap-1.5">
                                <BadgeAlert className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#9ca3af]" />
                                <span className="text-xs md:text-sm font-medium text-[#d1d5db]">Compliance Risk:</span>
                            </div>
                            <span className="text-xs md:text-sm text-[#059669]">&lt;1% (Audit trail)</span>
                        </div>

                        <div className="hidden md:block w-px h-3 bg-[#E2E8F026]"></div>

                        <div className="flex flex-wrap items-center gap-2 md:gap-3 justify-center md:justify-start">
                            <div className="flex items-center gap-1.5">
                                <Hourglass className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#9ca3af]" />
                                <span className="text-xs md:text-sm font-medium text-[#d1d5db]">Client Wait</span>
                            </div>
                            <span className="text-xs md:text-sm text-[#059669]">Same day</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
