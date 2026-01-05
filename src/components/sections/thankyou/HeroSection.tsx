import { Badge } from "@/components/ui";

export function HeroSection() {
    return (
        <div className="w-full bg-white px-4 md:px-8 lg:px-[60px] border-b border-[#e2e8f0]">
            <div className="w-full border-l border-r border-[#e2e8f0] flex justify-center">
                <div className="w-full max-w-[1320px]">
                    <div className="flex flex-col items-center py-[120px] px-10">
                        <div className="flex flex-col gap-4 items-center max-w-[874px] w-full">
                            <div className="flex flex-col gap-3 items-center w-full">
                                <div className="relative w-fit">
                                    <Badge text="Submission is completed" />
                                </div>
                                <h1 className="text-[64px] leading-[1.1] font-semibold text-[#111827] tracking-[-1.92px] text-center">
                                    Application Received
                                </h1>
                            </div>
                            <p className="text-[18px] font-medium leading-[1.5] text-[#4b5563] text-center w-full">
                                Thank you for applying for early access to Kiros.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
