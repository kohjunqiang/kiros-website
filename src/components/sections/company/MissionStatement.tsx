import { Badge } from "@/components/ui";

export function MissionStatement() {
    return (
        <div className="w-full bg-[#0b0c0f] px-4 md:px-[60px]">
            <div className="w-full border-l border-r border-[#E2E8F026]">
                {/* Title Section */}
                <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:pt-[120px] lg:pb-[80px] px-4">
                    <div className="max-w-[874px] flex flex-col items-center gap-4">
                        {/* Badge with decorative corners */}
                        <div className="flex flex-col gap-3 items-center">
                            <Badge text="Mission" variant="dark" />

                            {/* Main Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-white text-center tracking-[-0.03em] leading-[1.1]">
                                Rebuilding the Infrastructure of Financial Advice
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <p className="text-base md:text-[18px] font-medium text-[#9ca3af] text-center leading-[1.5]">
                            We believe the best financial advice comes from humans, not algorithms. Our job is to remove the administrative barriers that stand between you and your clients.
                        </p>
                    </div>
                </div>

                {/* Accent */}
                <div className="w-full">
                    <img src="/decorative/dark-blue-small.svg" alt="" className="w-full" />
                </div>

                {/* Mission Statement Text */}
                <div className="py-12 md:py-16 lg:py-[80px] px-4">
                    <div className="max-w-[874px] mx-auto">
                        <p className="text-2xl md:text-[32px] leading-[1.5] font-medium text-center">
                            <span className="text-white">Financial advisory is a profession built on trust. </span>
                            <span className="text-[#9ca3af]">
                                Yet today, advisers operate in an environment defined by rising regulatory pressure and endless documentation. Kiros is built to lift that burden, cutting hours of manual admin from each case while helping you stay confident that every submission can stand up to scrutiny.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
