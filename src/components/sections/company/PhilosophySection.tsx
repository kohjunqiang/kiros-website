import { Badge } from "@/components/ui";

export function PhilosophySection() {
    return (
        <div className="w-full bg-[#F8FAFC] px-4 md:px-[60px]">
            <div className="w-full border-l border-r border-[#e2e8f0]">
                {/* Title Section */}
                <div className="flex flex-col items-center py-12 md:py-16 lg:pt-[120px] lg:pb-[80px] px-4 md:px-[40px]">
                    <div className="max-w-[874px] flex flex-col gap-3 items-center">
                        {/* Badge */}
                        <div className="relative inline-flex">
                            <Badge text="Values" />
                        </div>

                        {/* Main Title */}
                        <h2 className="text-4xl md:text-5xl lg:text-[52px] font-semibold text-[#111827] tracking-[-0.02em] leading-[1.1] text-center">
                            Our Philosophy
                        </h2>
                    </div>
                </div>

                {/* Philosophy Items */}
                <div className="border-t border-[#e2e8f0]">
                    {/* Item 1: Assisted Intelligence */}
                    <div className="flex gap-6 md:gap-10 px-6 md:px-[40px] py-10 md:py-[40px] border-b border-[#e2e8f0] bg-white">
                        <div className="bg-[#e56024] rounded-md flex items-center justify-center w-10 h-10 shrink-0">
                            <img src="/icons/icon-brain.svg" alt="" className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col gap-3 flex-1">
                            <h3 className="text-xl md:text-2xl font-semibold text-[#111827] tracking-[-0.01em] leading-[1.1]">
                                Assisted Intelligence, Not Artificial Advice
                            </h3>
                            <p className="text-base text-[#4b5563] leading-[1.5]">
                                We are not a robo-adviser. Empathy, strategy, and understanding a client's life goals are uniquely human. Our AI handles the extraction, the maths, and the organisation — the heavy lifting — so you can focus on judgment and advice.
                            </p>
                        </div>
                    </div>

                    {/* Accent Pattern 1 */}
                    <div className="h-10 overflow-hidden border-b border-[#e2e8f0]">
                        <img src="/decorative/light-blue-small.svg" alt="" className="w-full h-full object-cover" />
                    </div>

                    {/* Item 2: Compliance is a Feature */}
                    <div className="flex gap-6 md:gap-10 px-6 md:px-[40px] py-10 md:py-[40px] border-b border-[#e2e8f0] bg-white">
                        <div className="bg-[#9FC9E4] rounded-md flex items-center justify-center w-10 h-10 shrink-0">
                            <img src="/icons/icon-shieldtick.svg" alt="" className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col gap-3 flex-1">
                            <h3 className="text-xl md:text-2xl font-semibold text-[#111827] tracking-[-0.01em] leading-[1.1]">
                                Compliance is a Feature
                            </h3>
                            <p className="text-base text-[#4b5563] leading-[1.5]">
                                In fintech, security isn't an add-on; it is part of the product. Led by a founder with legal training, we architect every feature to withstand scrutiny. From zero-retention APIs to detailed audit logs, Kiros is designed to protect both your time and your licence.
                            </p>
                        </div>
                    </div>

                    {/* Accent Pattern 2 */}
                    <div className="h-10 overflow-hidden border-b border-[#e2e8f0]">
                        <img src="/decorative/light-blue-small.svg" alt="" className="w-full h-full object-cover" />
                    </div>

                    {/* Item 3: Glass Box Standard */}
                    <div className="flex gap-6 md:gap-10 px-6 md:px-[40px] py-10 md:py-[40px] border-b border-[#e2e8f0] bg-white">
                        <div className="bg-[#1C2E63] rounded-md flex items-center justify-center w-10 h-10 shrink-0">
                            <img src="/icons/icon-box.svg" alt="" className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col gap-3 flex-1">
                            <h3 className="text-xl md:text-2xl font-semibold text-[#111827] tracking-[-0.01em] leading-[1.1]">
                                The "Glass Box" Standard
                            </h3>
                            <p className="text-base text-[#4b5563] leading-[1.5]">
                                Trust requires transparency. We never ask you to believe a number you can't verify. Every data point our system extracts can be traced back with a click to the original document. We prioritise accuracy and control over black-box automation.
                            </p>
                        </div>
                    </div>

                    {/* Accent Pattern 1 */}
                    <div className="h-10 overflow-hidden">
                        <img src="/decorative/light-blue-small.svg" alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}
