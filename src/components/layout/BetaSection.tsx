import Link from "next/link";
import { LogIn } from "lucide-react";
import { Badge } from "@/components/ui";

export function BetaSection() {
    return (
        <div className="w-full bg-white px-[60px]">
            <div className="w-full border-l border-r border-[#e2e8f0] overflow-hidden">
                {/* Header Section */}
                <div className="w-full max-w-[1320px] mx-auto px-[40px] pt-[120px] pb-[80px] flex flex-col items-center">
                    <div className="w-full max-w-[874px] flex flex-col items-center gap-4">
                        {/* Badge with SVG */}
                        <div className="flex flex-col gap-3 items-center">
                            <Badge text="Waitlist" />

                            {/* Title */}
                            <h2 className="text-[52px] font-semibold text-[#111827] text-center tracking-[-1.04px] leading-[1.1]">
                                Join Our Beta as a Founding Adviser
                            </h2>
                        </div>

                        {/* Subheading */}
                        <p className="text-[18px] font-medium text-[#4b5563] text-center leading-[1.5]">
                            By invite only. Limited spots available in this cohort.
                        </p>
                    </div>
                </div>

                {/* Images and CTA Row */}
                <div className="border-t border-b border-[#e2e8f0] flex items-center w-full">
                    {/* Image 1 */}
                    <div className="flex-1 h-[340px] border-r border-[#e2e8f0] relative">
                        <img
                            src="/images/founders/home-founder-1.png"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="flex-1 h-[340px] border-r border-[#e2e8f0] relative">
                        <img
                            src="/images/founders/home-founder-2.png"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    {/* CTA Button */}
                    <Link href="/join-us" className="flex-1 h-[340px] bg-[#e56024] border-r border-[rgba(226,232,240,0.15)] flex items-center justify-center gap-2 p-[40px] hover:bg-[#d14f15] transition-colors cursor-pointer">
                        <LogIn className="w-6 h-6 text-white" />
                        <p className="text-[16px] font-medium text-white leading-[24px]">
                            Apply for Beta Access
                        </p>
                    </Link>

                    {/* Image 3 */}
                    <div className="flex-1 h-[340px] border-r border-[#e2e8f0] relative">
                        <img
                            src="/images/founders/home-founder-3.png"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    {/* Image 4 */}
                    <div className="flex-1 h-[340px] relative">
                        <img
                            src="/images/founders/home-founder-4.png"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Accent Layer */}
                <div className="w-full">
                    <img src="/decorative/light-pink-small.svg" alt="" className="w-full" />
                </div>

                {/* Bottom Text */}
                <div className="w-full py-6 px-0">
                    <p className="text-[16px] font-medium text-[#4b5563] text-center leading-[1.5] max-w-[874px] mx-auto">
                        <strong>Be part of our first cohort</strong> of advisers using Kiros in production. <strong>Get early access</strong>, a direct line to our product team, and a say in how we build the infrastructure of <strong>compliance-first, adviser-centric technology</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
}
