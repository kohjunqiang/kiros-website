import { Badge } from "@/components/ui";

export function HeroSection() {
    return (
        <div className="w-full bg-white px-4 md:px-[60px] border-b border-[#e2e8f0]">
            <div className="w-full border-l border-r border-[#e2e8f0]">
                <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:pt-[120px] lg:pb-[80px] px-4 md:px-10">
                    <div className="max-w-[874px] w-full flex flex-col items-center gap-4">
                        <div className="flex flex-col gap-3 items-center">
                            <Badge text="RESOURCES" variant="light" />

                            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-[#111827] text-center tracking-[-0.03em] leading-[1.1]">
                                Terms of Service
                            </h1>
                        </div>

                        <p className="text-base md:text-[18px] font-medium text-[#4b5563] text-center leading-[1.5]">
                            Last updated: 25 November 2025
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
