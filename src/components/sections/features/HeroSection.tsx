import Image from "next/image";
import { Columns3, CircleArrowDown } from "lucide-react";
import { Badge } from "@/components/ui";

export function HeroSection() {
    return (
        <div className="w-full bg-white px-4 md:px-8 lg:px-[60px] border-b border-[#e2e8f0]">
            <div className="w-full relative border-l border-r border-[#e2e8f0] py-12 md:py-16 lg:py-20 xl:py-[120px] flex justify-center">
                <div className="w-full max-w-[1320px]">
                    {/* Background decorative elements */}
                    <div className="absolute left-0 top-0 bottom-0 w-[40px] overflow-hidden opacity-30">
                        <Image
                            src="/decorative/horizontal-light-pink-small.svg"
                            alt=""
                            width={40}
                            height={530}
                            className="object-cover h-full"
                        />
                    </div>
                    <div className="absolute right-0 top-0 bottom-0 w-[40px] overflow-hidden opacity-30">
                        <Image
                            src="/decorative/horizontal-light-blue-small.svg"
                            alt=""
                            width={40}
                            height={530}
                            className="object-cover h-full"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-[120px]">
                        {/* Badge */}
                        <div className="mb-[24px]">
                            <Badge text="AI-Powered Portfolio Intelligence" />
                        </div>

                        {/* Heading */}
                        <h2 className="text-[40px] md:text-[56px] leading-[1.1] font-semibold text-[#0b0c0f] mb-[24px] tracking-tight">
                            Turn Complex Coverage<br />into Clear Advice
                        </h2>

                        {/* Description */}
                        <p className="text-[18px] leading-[28px] text-[#6b7280] mb-[32px] max-w-[800px]">
                            Instantly unify scattered policies into a single, structured view. Spot coverage gaps automatically and model "Before vs. After" scenarios to help clients see the true value of your recommendations.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                            <button className="flex items-center gap-2 px-6 py-3 bg-[#e56024] text-white rounded-md font-medium text-[16px] hover:bg-[#d15520] transition-colors shadow-sm">
                                <Columns3 className="w-5 h-5" />
                                Build a Comparison
                            </button>
                            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-[#e2e8f0] text-[#0b0c0f] rounded-md font-medium text-[16px] hover:bg-gray-50 transition-colors shadow-sm">
                                <CircleArrowDown className="w-5 h-5" />
                                Deep Dive More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
