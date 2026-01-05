import Link from "next/link";
import { LogIn } from "lucide-react";
import { Badge } from "@/components/ui";

export function HeroSection() {
    return (
        <div className="w-full bg-white px-4 md:px-8 lg:px-[60px]">
            <div className="w-full flex flex-col items-center py-12 md:py-16 lg:py-20 xl:py-[120px] border-b border-l border-r border-slate-200">
                <div className="max-w-[874px] flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
                    {/* Title Group */}
                    <div className="flex flex-col items-center gap-3 md:gap-4 w-full">
                        {/* Eyebrow Badge */}
                        <Badge text="Every Advisor's Co-Pilot" />

                        {/* Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] leading-[1.1] font-semibold text-[#111827] text-center tracking-[-0.02em]">
                            The Intelligent Workspace for High-Performance Advisors
                        </h1>
                    </div>

                    {/* Subheading */}
                    <div className="text-center px-4">
                        <p className="text-base md:text-lg leading-[1.5] font-medium text-[#4b5563]">
                            Upload policies. Automate extraction. Optimize coverage. Eliminate manual data entry<br className="hidden md:block" />
                            with a platform built for speed, accuracy, and strict data privacy.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col items-center gap-3 md:gap-4 pt-2 md:pt-4">
                        <Link
                            href="#"
                            className="bg-[#e56024] hover:bg-[#d14f15] text-white flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 md:py-[10px] rounded-md shadow-sm transition-colors text-sm md:text-base"
                        >
                            <LogIn className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="font-medium">Apply for Beta Access</span>
                        </Link>

                        <p className="text-sm md:text-base leading-[1.25] text-[#4b5563] text-center px-4">
                            Invites sent weekly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
