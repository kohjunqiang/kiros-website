import { Badge } from "@/components/ui";

export function AccuracySection() {
    return (
        <div className="w-full bg-white px-4 md:px-8 lg:px-[60px] border-b border-[#E2E8F0]">
            <div className="w-full border-l border-r border-[#E2E8F0]">
                {/* Header Section */}
                <div className="w-full">
                    <div className="flex flex-col items-start justify-center py-12 md:py-16 lg:pb-20 lg:pt-[120px] px-6 md:px-8 lg:px-10">
                        <div className="flex flex-col gap-3 md:gap-4 items-start max-w-[874px]">
                            <div className="flex flex-col gap-2 md:gap-3 items-start w-full">
                                <Badge text="Accuracy & Control" />
                                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-semibold text-[#111827] tracking-[-0.02em] leading-[1.1]">
                                    AI Speed. Human Judgement.
                                </h2>
                            </div>
                            <p className="text-base md:text-lg font-medium text-[#4B5563] leading-[1.5]">
                                Kiros is not a robo-advisor. It's an assisted tool that does the heavy lifting, extracting, organising, and updating policy data, so you stay focused on advice, strategy, and compliance. Every recommendation still comes from you.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Three Features Row */}
                <div className="w-full border-t border-[#E2E8F0]">
                    <div className="flex flex-col md:flex-row">
                        {/* Feature 1: Automated Policy Extraction */}
                        <div className="flex-1 border-r border-[#E2E8F0] flex flex-col gap-4 md:gap-6 p-6 md:p-8 lg:p-10 relative">
                            <div className="absolute top-0 left-0 w-32 md:w-48 lg:w-[271px] h-px bg-[#E56024]" />
                            <div className="bg-[#E56024] rounded-md flex items-center justify-center w-9 h-9 md:w-10 md:h-10">
                                <img src="/icons/icon-extract.svg" alt="" className="w-8 h-8 md:w-9 md:h-9" />
                            </div>
                            <div className="flex flex-col items-start w-full">
                                <p className="text-sm md:text-base lg:text-lg font-normal text-[#4B5563] leading-[1.5]">
                                    <span className="font-semibold text-[#111827]">Automated Policy Extraction.</span>
                                    {" "}Stop reading endless files. The AI scans long policy documents and maps the data for you. You can verify dozens of data points in seconds without flipping pages or hunting through documents.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2: Click-to-Source Verification */}
                        <div className="flex-1 border-r border-[#E2E8F0] flex flex-col gap-4 md:gap-6 p-6 md:p-8 lg:p-10 opacity-50">
                            <div className="bg-[#CBD5E1] rounded-md flex items-center justify-center w-9 h-9 md:w-10 md:h-10">
                                <img src="/icons/icon-click.svg" alt="" className="w-8 h-8 md:w-9 md:h-9" />
                            </div>
                            <div className="flex flex-col items-start w-full">
                                <p className="text-sm md:text-base lg:text-lg font-normal text-[#4B5563] leading-[1.5]">
                                    <span className="font-semibold text-[#111827]">Click-to-Source Verification.</span>
                                    {" "}Never guess where a number came from. Click on any extracted figure, whether it's a sum assured or a premium, and Kiros instantly jumps to the exact page in the original PDF source.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3: Flexible Editing */}
                        <div className="flex-1 flex flex-col gap-4 md:gap-6 p-6 md:p-8 lg:p-10 opacity-50">
                            <div className="bg-[#CBD5E1] rounded-md flex items-center justify-center w-9 h-9 md:w-10 md:h-10">
                                <img src="/icons/icon-pen.svg" alt="" className="w-8 h-8 md:w-9 md:h-9" />
                            </div>
                            <div className="flex flex-col items-start w-full">
                                <p className="text-sm md:text-base lg:text-lg font-normal text-[#4B5563] leading-[1.5]">
                                    <span className="font-semibold text-[#111827]">Flexible Editing with Full Audit Logs.</span>
                                    {" "}If you need to manually overwrite an AI-extracted figure, you can do it instantly. Crucially, every edit is time-stamped and logged, ensuring you maintain a perfect audit trail for compliance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Preview Image Row */}
                <div className="w-full border-t border-[#E2E8F0] bg-[#FEF1EF]">
                    <div className="p-8 md:p-12 lg:p-16 xl:p-20">
                        <img
                            src="/images/home/home-accuracy-preview.png"
                            alt="Accuracy Preview"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
