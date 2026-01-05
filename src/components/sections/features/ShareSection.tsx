import Image from "next/image";
import { Badge } from "@/components/ui";

export function ShareSection() {
    return (
        <div className="w-full bg-[#f8fafc] px-4 md:px-8 lg:px-[60px] border-b border-[#e2e8f0]">
            <div className="w-full border-l border-r border-[#e2e8f0]">
                {/* Title Section */}
                <div className="px-[40px] pt-[120px] pb-[80px] flex justify-center">
                    <div className="flex flex-col gap-[16px] max-w-[874px] items-center">
                        <div className="flex flex-col gap-[12px] items-center w-full">
                            {/* Badge */}
                            <div className="relative w-fit">
                                <Badge text="AI Extraction & Organisation" />
                            </div>

                            {/* Heading */}
                            <h2 className="text-[52px] leading-[1.1] font-semibold text-[#111827] tracking-[-1.04px] text-center">
                                Share the Story,<br />
                                Not the Sensitive Details
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-[18px] leading-[1.5] font-medium text-[#4b5563] text-center w-[874px]">
                            Once you are happy with a portfolio or scenario, you can export the structured table for use in your client consultations, without rebuilding it in Excel.
                        </p>
                    </div>
                </div>

                {/* Features Row - 3 Columns */}
                <div className="border-t border-[#e2e8f0] flex flex-col md:flex-row">
                    {/* Consultation Ready */}
                    <div className="flex-1 bg-white p-[40px] border-r border-[#e2e8f0] flex flex-col gap-[24px]">
                        <div className="w-full h-[240px] bg-[#ecfdf5] rounded-[6px] overflow-hidden flex items-center justify-center">
                            <Image
                                src="/images/features/features-extract-export.png"
                                alt="Consultation Ready"
                                width={400}
                                height={240}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                <span className="font-semibold text-[#111827]">Consultation Ready.</span>
                                <br />
                                Export clean portfolio and comparison tables for client reports.
                            </p>
                        </div>
                    </div>

                    {/* Privacy Toggle */}
                    <div className="flex-1 bg-white p-[40px] border-r border-[#e2e8f0] flex flex-col gap-[24px]">
                        <div className="w-full h-[240px] bg-[#ecfdf5] rounded-[6px] overflow-hidden flex items-center justify-center">
                            <Image
                                src="/images/features/features-extract-privacy.png"
                                alt="Privacy Toggle"
                                width={400}
                                height={240}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                <span className="font-semibold text-[#111827]">Privacy Toggle.</span>
                                <br />
                                Instantly mask sensitive PII (NRIC, Email, Phone) for safe screen sharing.
                            </p>
                        </div>
                    </div>

                    {/* Client-Friendly Layouts */}
                    <div className="flex-1 bg-white p-[40px] flex flex-col gap-[24px]">
                        <div className="w-full h-[240px] bg-[#ecfdf5] rounded-[6px] overflow-hidden flex items-center justify-center">
                            <Image
                                src="/images/features/features-extract-layout.png"
                                alt="Client-Friendly Layouts"
                                width={400}
                                height={240}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                <span className="font-semibold text-[#111827]">Client-Friendly Layouts.</span>
                                <br />
                                Formatted to keep the focus on coverage and cost, not clutter.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Text Section */}
                <div className="border-t border-[#e2e8f0] px-[40px] py-[80px] flex justify-center">
                    <p className="text-[18px] leading-[1.5] font-medium text-[#4b5563] text-center max-w-[874px]">
                        Crucially, Kiros includes a Privacy Mode. When you are sharing your screen or a printed copy, you can hide sensitive fields such as names, NRIC, email, or phone with a single click, so you can walk through the numbers without exposing personal identifiers. This keeps the focus on coverage and cost while supporting your PDPA and internal compliance obligations.
                    </p>
                </div>
            </div>
        </div>
    );
}
