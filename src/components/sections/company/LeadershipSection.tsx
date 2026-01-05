import { Badge } from "@/components/ui";

export function LeadershipSection() {
    return (
        <div className="w-full bg-white px-4 md:px-[60px] border-t border-b border-[#e2e8f0]">
            <div className="w-full border-l border-r border-[#e2e8f0]">
                {/* Title Section */}
                <div className="flex flex-col items-center py-12 md:py-16 lg:pt-[120px] lg:pb-[80px] px-4 md:px-[40px]">
                    <div className="max-w-[874px] flex flex-col gap-3 items-center">
                        {/* Badge */}
                        <div className="relative inline-flex">
                            <Badge text="Leadership" />
                        </div>

                        {/* Main Title */}
                        <h2 className="text-4xl md:text-5xl lg:text-[52px] font-semibold text-[#111827] tracking-[-0.02em] leading-[1.1] text-center">
                            Built by Advisers, Designers, and Technologists
                        </h2>
                    </div>
                </div>

                {/* Founders Grid */}
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {/* Daniel Wong */}
                        <div className="flex flex-col border-r border-[#E2E8F026]">
                            <div className="relative h-[300px] md:h-[480px] w-full">
                                <img
                                    src="/images/founders/company-founder-1.png"
                                    alt="Daniel Wong"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="bg-[#f1f5f9] px-4 py-3 border-r border-[#E2E8F026]">
                                <h3 className="text-lg font-semibold text-[#111827] leading-[1.5]">
                                    Daniel Wong
                                </h3>
                                <p className="text-sm text-[#6b7280] leading-[20px]">
                                    Founder & CEO
                                </p>
                            </div>
                        </div>

                        {/* Jayden Ooi */}
                        <div className="flex flex-col border-r border-[#e2e8f0] opacity-50">
                            <div className="relative h-[300px] md:h-[480px] w-full">
                                <img
                                    src="/images/founders/company-founder-2.png"
                                    alt="Jayden Ooi"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="bg-[#f8fafc] px-4 py-3 border-r border-[#E2E8F026]">
                                <h3 className="text-lg font-semibold text-[#111827] leading-[1.5]">
                                    Jayden Ooi
                                </h3>
                                <p className="text-sm text-[#6b7280] leading-[20px]">
                                    Co-Founder, COO & Product Design Lead
                                </p>
                            </div>
                        </div>

                        {/* Jason Koh */}
                        <div className="flex flex-col opacity-50">
                            <div className="relative h-[300px] md:h-[480px] w-full">
                                <img
                                    src="/images/founders/company-founder-3.png"
                                    alt="Jason Koh"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="bg-[#f8fafc] px-4 py-3">
                                <h3 className="text-lg font-semibold text-[#111827] leading-[1.5]">
                                    Jason Koh
                                </h3>
                                <p className="text-sm text-[#6b7280] leading-[20px]">
                                    Co-Founder & CTO
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bio Section */}
                <div className="border-t border-[#e2e8f0] px-6 md:px-[40px] py-6 md:py-[24px]">
                    <div className="flex flex-col gap-4">
                        <p className="text-base text-[#111827] leading-[1.5]">
                            Daniel is a legally trained financial adviser and RegTech strategist specialising in AI governance and risk architecture. He leads Kiros' strategy and partnerships, ensuring the platform is designed with MAS-aligned compliance and robust governance at its core.
                        </p>
                        <div className="bg-[#f0f9ff] border border-[#e2e8f0] rounded-md p-4">
                            <p className="text-base text-[#4b5563] leading-[1.5]">
                                <span className="font-medium text-[#111827]">Key background:</span> Associate Trainer with the Institute for Financial Literacy. Previously guided a healthcare startup to become Singapore's first CSA Cyber Essentials–accredited clinic.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
