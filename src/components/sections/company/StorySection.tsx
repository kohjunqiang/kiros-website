import { Badge } from "@/components/ui";

export function StorySection() {
    return (
        <div className="w-full bg-[#0b0c0f] px-4 md:px-[60px]">
            <div className="w-full border-l border-r border-[#E2E8F026]">
                {/* Title Section */}
                <div className="flex flex-col py-12 md:py-16 lg:pt-[120px] lg:pb-[80px] px-4 md:px-[40px]">
                    <div className="max-w-[874px] flex flex-col gap-4">
                        {/* Badge */}
                        <div className="flex flex-col gap-3 items-start w-full">
                            <div className="relative inline-flex">
                                <Badge text="Story" variant="dark" />
                            </div>

                            {/* Main Title */}
                            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-semibold text-white tracking-[-0.02em] leading-[1.1]">
                                We didn't build Kiros to disrupt you. We built it because we were you.
                            </h2>
                        </div>

                        {/* Subtitle */}
                        <p className="text-base md:text-[18px] font-medium text-[#9ca3af] leading-[1.5] w-full">
                            Built by a financial adviser. Engineered for compliance and clarity.
                        </p>
                    </div>
                </div>

                {/* Large Image */}
                <div className="relative h-[300px] md:h-[400px] lg:h-[480px] w-full">
                    <img
                        src="/images/company/company-3.png"
                        alt="Kiros team"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                {/* Story Text Section */}
                <div className="border-t border-[rgba(226,232,240,0.15)]">
                    <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[rgba(226,232,240,0.15)]">
                        {/* Left Column */}
                        <div className="flex flex-col gap-4 px-6 md:px-[40px] py-12 md:py-[80px] border-r border-[rgba(226,232,240,0.15)] text-[16px] leading-[1.5] text-[#9ca3af]">
                            <p>
                                Kiros was born from a painful, simple observation: the most committed financial advisers in Singapore were spending 15–20 hours per client case on admin — chasing documents, extracting policy details by hand, building proposals from scratch, and second-guessing compliance.
                            </p>
                            <p>
                                This wasn't just inefficiency. It was a structural block stopping advisers from serving more clients and scaling their practice.
                            </p>
                            <p>
                                Our founder, Daniel Wong, spent 10 years as a financial adviser and lived this "admin bottleneck" first-hand — the hours lost to extraction, the friction of portfolio comparisons, and the weight of keeping every recommendation compliant and defensible.
                            </p>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-4 px-6 md:px-[40px] py-12 md:py-[80px] border-[rgba(226,232,240,0.15)] text-[16px] leading-[1.5] text-[#9ca3af]">
                            <p>
                                The catalyst came when a top-tier adviser, managing hundreds of millions in assets, told him: "I can only take four new clients a month because of the compliance workload. I'm turning away business."
                            </p>
                            <p>
                                With a background in law, Daniel knew a "faster CRM" wasn't the answer. Speed means nothing if your data and audit trail can't stand up to scrutiny. The industry needed new infrastructure — one that removes ambiguity, cuts admin, and strengthens confidence around every recommendation.
                            </p>
                            <p>
                                That's why we built Kiros with a compliance-first philosophy: so advisers can move faster, take on more clients, and still be fully confident in the advice they put their name on.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Banner */}
                    <div className="bg-[rgba(229,96,36,0.05)] border-b border-[rgba(226,232,240,0.15)] px-6 py-6">
                        <p className="text-[18px] font-semibold text-[#e56024] text-center leading-[1.5]">
                            We didn't build Kiros to replace advisers. We built it to clear the path for them.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
