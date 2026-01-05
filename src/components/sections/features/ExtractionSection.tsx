import Image from "next/image";
import { Badge } from "@/components/ui";

export function ExtractionSection() {
    return (
        <div className="w-full bg-white px-4 md:px-8 lg:px-[60px] border-b border-[#e2e8f0]">
            <div className="w-full border-l border-r border-[#e2e8f0]">
                {/* Title Section */}
                <div className="px-[40px] pt-[120px] pb-[80px]">
                    <div className="flex flex-col gap-[12px] max-w-[874px]">
                        {/* Badge */}
                        <div className="relative w-fit">
                            <Badge text="AI Extraction & Organisation" />
                        </div>

                        {/* Heading */}
                        <h2 className="text-[52px] leading-[1.1] font-semibold text-[#111827] tracking-[-1.04px]">
                            Upload Policies. Get a Clean, Structured Portfolio.
                        </h2>
                    </div>
                </div>

                {/* Preview Image */}
                <div className="w-full">
                    <Image
                        src="/images/features/features-preview-1.png"
                        alt="Portfolio view preview"
                        width={1318}
                        height={600}
                        className="w-full h-auto"
                    />
                </div>

                {/* Features Grid */}
                <div className="flex flex-col md:flex-row border-t border-[rgba(226,232,240,0.15)]">
                    {/* Left Column - Description */}
                    <div className="flex-1 p-[40px] border-r border-[#e2e8f0]">
                        <p className="text-[18px] leading-[1.5] font-medium text-[#4b5563]">
                            Upload multiple policies and riders, and Kiros does the reading for you. Our AI extracts key coverage details, sums assured, premiums, riders, and coverage across categories, and organises them into a single, structured table for that client.
                            <br /><br />
                            Instead of juggling spreadsheets and formulas, you see your client's total coverage across all policies in one view. Kiros automatically sums coverage by category so you can spot gaps and overlaps instantly.
                        </p>
                    </div>

                    {/* Right Column - Feature List */}
                    <div className="flex-1 border-t border-[#e2e8f0] md:border-t-0">
                        {/* Multi-Format Ingestion */}
                        <div className="flex gap-[24px] p-[40px] border-b border-[#e2e8f0]">
                            <div className="w-[40px] h-[40px] bg-[#e56024] rounded-[6px] flex items-center justify-center flex-shrink-0">
                                <Image
                                    src="/icons/icon-multi-file.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="w-10 h-10"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                    <span className="font-semibold text-[#111827]">Multi-Format Ingestion.</span>
                                    <br />
                                    AI extraction from PDF policies, riders, and quote documents.
                                </p>
                            </div>
                        </div>

                        {/* Auto-Aggregation */}
                        <div className="flex gap-[24px] p-[40px] border-b border-[#e2e8f0]">
                            <div className="w-[40px] h-[40px] bg-[#e56024] rounded-[6px] flex items-center justify-center flex-shrink-0">
                                <Image
                                    src="/icons/icon-math-sum.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="w-10 h-10"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                    <span className="font-semibold text-[#111827]">Auto-Aggregation.</span>
                                    <br />
                                    Totals are summed automatically across Death, TPD, CI, and Accident categories.
                                </p>
                            </div>
                        </div>

                        {/* Zero Data Entry */}
                        <div className="flex gap-[24px] p-[40px]">
                            <div className="w-[40px] h-[40px] bg-[#e56024] rounded-[6px] flex items-center justify-center flex-shrink-0">
                                <Image
                                    src="/icons/icon-wand.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="w-10 h-10"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                    <span className="font-semibold text-[#111827]">Zero Data Entry.</span>
                                    <br />
                                    Clean, spreadsheet-like portfolio view generated in seconds.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
