import Image from "next/image";
import { Badge } from "@/components/ui";

export function SourceVerificationSection() {
    return (
        <div className="w-full bg-[#f8fafc] px-4 md:px-8 lg:px-[60px] border-b border-[#e2e8f0]">
            <div className="w-full border-l border-r border-[#e2e8f0]">
                {/* Title Section */}
                <div className="px-[40px] pt-[120px] pb-[80px] flex justify-center">
                    <div className="flex flex-col gap-[12px] max-w-[874px] items-center">
                        {/* Badge */}
                        <Badge text="Source Verification & Overrides" />

                        {/* Heading */}
                        <h2 className="text-[52px] leading-[1.1] font-semibold text-[#111827] tracking-[-1.04px] text-center">
                            Every Number Traceable.<br />
                            Every Cell Editable.
                        </h2>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col md:flex-row border-t border-[#e2e8f0]">
                    {/* Left Column - Description */}
                    <div className="w-full md:w-[440px] p-[40px] border-r border-[#e2e8f0]">
                        <p className="text-[18px] leading-[1.5] font-medium text-[#4b5563] mb-4">
                            AI does the heavy lifting, reading documents, extracting values, and running the calculations, but every figure is still reviewed and decided by you. Every extracted value sits in a cell you can check, edit, or overwrite in seconds.
                        </p>
                        <p className="text-[18px] leading-[1.5] font-medium text-[#4b5563] mb-4">
                            When a client or compliance officer asks, "Where did this number come from?", Kiros has the answer. Click on any coverage or premium figure and the platform takes you straight to the exact clause in the source PDF.
                        </p>
                        <p className="text-[18px] leading-[1.5] font-medium text-[#4b5563]">
                            If you need to explain your workings, the formulas behind each comparison are visible, so you always know how a figure was calculated.
                        </p>
                    </div>

                    {/* Right Column - 2x2 Grid */}
                    <div className="flex-1 bg-white border-t border-[#e2e8f0] md:border-t-0">
                        {/* Top Row */}
                        <div className="flex flex-col md:flex-row border-b border-[#e2e8f0]">
                            {/* Click-to-Source */}
                            <div className="flex-1 p-[40px] border-r border-[#e2e8f0] flex flex-col gap-[24px]">
                                <div className="w-full h-[240px] bg-[#f2f3fc] rounded-[6px] overflow-hidden flex items-center justify-center">
                                    <Image
                                        src="/images/features/features-source-click.png"
                                        alt="Click-to-Source"
                                        width={400}
                                        height={240}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                        <span className="font-semibold text-[#111827]">Click-to-Source.</span>
                                        <br />
                                        Jump instantly from a spreadsheet cell to its origin in the PDF. Manual overwrite of any extracted value
                                    </p>
                                </div>
                            </div>

                            {/* Manual Overwrite */}
                            <div className="flex-1 p-[40px] flex flex-col gap-[24px]">
                                <div className="w-full h-[240px] bg-[#f2f3fc] rounded-[6px] overflow-hidden flex items-center justify-center">
                                    <Image
                                        src="/images/features/features-source-overwrite.png"
                                        alt="Manual Overwrite"
                                        width={400}
                                        height={240}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                        <span className="font-semibold text-[#111827]">Manual Overwrite.</span>
                                        <br />
                                        You are the expert. Edit any value instantly if the AI misses a nuance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="flex flex-col md:flex-row">
                            {/* Transparent Formulas */}
                            <div className="flex-1 p-[40px] border-r border-[#e2e8f0] flex flex-col gap-[24px]">
                                <div className="w-full h-[240px] bg-[#f2f3fc] rounded-[6px] overflow-hidden flex items-center justify-center">
                                    <Image
                                        src="/images/features/features-source-formula.png"
                                        alt="Transparent Formulas"
                                        width={400}
                                        height={240}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                        <span className="font-semibold text-[#111827]">Transparent Formulas.</span>
                                        <br />
                                        Transparent calculations so you can show how each figure was derived
                                    </p>
                                </div>
                            </div>

                            {/* Cell-Level Notes */}
                            <div className="flex-1 p-[40px] flex flex-col gap-[24px]">
                                <div className="w-full h-[240px] bg-[#f2f3fc] rounded-[6px] overflow-hidden flex items-center justify-center">
                                    <Image
                                        src="/images/features/features-source-notes.png"
                                        alt="Cell-Level Notes"
                                        width={400}
                                        height={240}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                        <span className="font-semibold text-[#111827]">Cell-Level Notes.</span>
                                        <br />
                                        Easily add notes for your own rationale and reminders
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
