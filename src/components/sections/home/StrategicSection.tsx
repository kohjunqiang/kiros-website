import { Badge } from "@/components/ui";

export function StrategicSection() {
    return (
        <div className="w-full bg-white border-b border-[#E2E8F0] px-4 md:px-8 lg:px-[60px]">
            <div className="w-full border-l border-r border-[#E2E8F0]">
                <div className="w-full">
                    {/* Header */}
                    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:pt-20 lg:pb-16 xl:pt-[120px] xl:pb-[80px] border-b border-[#E2E8F0]">
                        <div className="flex flex-col gap-3 md:gap-4 items-center max-w-[874px] px-4">
                            <div className="flex flex-col gap-2 md:gap-3 items-center">
                                {/* Badge */}
                                <Badge text="Strategic Advisory" />

                                {/* Title */}
                                <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-[52px] leading-[1.1] tracking-[-0.02em] text-[#111827] text-center">
                                    Instant Portfolio Comparison{'\n'}& Scenario Planning.
                                </h2>
                            </div>

                            {/* Subtitle */}
                            <p className="font-medium text-base md:text-lg leading-[1.5] text-[#4B5563] text-center w-full">
                                Stop manually building spreadsheets just to show a "Plan B." Create, compare,{'\n'}and explain multiple portfolio scenarios in minutes.
                            </p>
                        </div>
                    </div>

                    {/* Section 01 - The Kiros Way */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Left Content */}
                        <div className="border-r border-[#E2E8F0] p-6 md:p-8 lg:p-10 flex flex-col gap-3 md:gap-4">
                            <p className="text-xs md:text-sm font-medium leading-[1.4] text-[#e56024]">[ 01 ]</p>

                            <p className="text-base md:text-lg font-normal leading-[1.5] text-[#4b5563]">
                                <span className="font-semibold text-[#111827]">Rapid Portfolio Building.</span>
                                <br />
                                Usually, comparing a new recommendation against a current portfolio requires hours of extracting data from new quotes and re-doing the math.
                            </p>

                            {/* The Kiros Way Card */}
                            <div className="bg-white border border-[#E2E8F0] rounded-[6px] shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] p-3 md:p-4 flex gap-2 md:gap-3 items-start">
                                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10">
                                    <img src="/logos/logo-blue.svg" alt="Kiros" className="w-full h-full" />
                                </div>
                                <p className="text-sm md:text-base font-normal leading-[1.5] text-[#4b5563] flex-1">
                                    <span className="font-semibold text-[#111827]">The Kiros Way.</span> Simply upload your recommended policy quotes. The AI extracts the details instantly, allowing you to group them into "Portfolio A" or "Portfolio B" without a single manual calculation.
                                </p>
                            </div>
                        </div>

                        {/* Right Illustration */}
                        <div className="relative min-h-64 md:min-h-80 lg:min-h-96">
                            <img
                                src="/images/home/home-strategic-01.png"
                                alt="Portfolio Comparison"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Accent */}
                    <div className="w-full">
                        <img src="/decorative/light-blue-small.svg" alt="" className="w-full" />
                    </div>


                    {/* Section 02 - The Visual & The Math */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Left Content */}
                        <div className="border-r border-[#E2E8F0] p-6 md:p-8 lg:p-10 flex flex-col gap-3 md:gap-4">
                            <p className="text-xs md:text-sm font-medium leading-[1.4] text-[#e56024]">[ 02 ]</p>

                            <p className="text-base md:text-lg font-normal leading-[1.5] text-[#4b5563]">
                                <span className="font-semibold text-[#111827]">Side-by-Side Portfolio Comparison.</span>
                                <br />
                                Give your clients a clean "Apples-to-Apples" view.
                            </p>

                            {/* The Visual Card */}
                            <div className="bg-white border border-[#E2E8F0] rounded-[6px] shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] p-3 md:p-4 flex gap-2 md:gap-3 items-start">
                                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10">
                                    <img src="/icons/icon-visual.svg" alt="Visual" className="w-full h-full" />
                                </div>
                                <p className="text-sm md:text-base font-normal leading-[1.5] text-[#4b5563] flex-1">
                                    <span className="font-semibold text-[#111827]">The Visual.</span> Place the client's Current Portfolio next to your Recommended Portfolios (e.g., Plan A vs. Plan B).
                                </p>
                            </div>

                            {/* The Math Card */}
                            <div className="bg-white border border-[#E2E8F0] rounded-[6px] shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] p-3 md:p-4 flex gap-2 md:gap-3 items-start">
                                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10">
                                    <img src="/icons/icon-math.svg" alt="Math" className="w-full h-full" />
                                </div>
                                <p className="text-sm md:text-base font-normal leading-[1.5] text-[#4b5563] flex-1">
                                    <span className="font-semibold text-[#111827]">The Math.</span> The system automatically tabulates the differences in coverage gaps and premiums. Your client sees exactly how much more value they get with your recommendation versus what they have now.
                                </p>
                            </div>
                        </div>

                        {/* Right Illustration */}
                        <div className="relative min-h-64 md:min-h-80 lg:min-h-96">
                            <img
                                src="/images/home/home-strategic-02.png"
                                alt="Real-time Scenarios"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Accent */}
                    <div className="w-full">
                        <img src="/decorative/light-blue-small.svg" alt="" className="w-full" />
                    </div>

                    {/* Section 03 - Sticky Notes & Formula Explanations */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Left Content */}
                        <div className="border-r border-[#E2E8F0] p-6 md:p-8 lg:p-10 flex flex-col gap-3 md:gap-4">
                            <p className="text-xs md:text-sm font-medium leading-[1.4] text-[#e56024]">[ 03 ]</p>

                            <p className="text-base md:text-lg font-normal leading-[1.5] text-[#4b5563]">
                                <span className="font-semibold text-[#111827]">Smart Annotations & Transparency. </span>
                                <br />
                                Don't just show the numbers; explain them.
                            </p>

                            {/* Sticky Notes Card */}
                            <div className="bg-white border border-[#E2E8F0] rounded-[6px] shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] p-3 md:p-4 flex gap-2 md:gap-3 items-start">
                                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10">
                                    <img src="/icons/icon-sticky.svg" alt="Sticky Notes" className="w-full h-full" />
                                </div>
                                <p className="text-sm md:text-base font-normal leading-[1.5] text-[#4b5563] flex-1">
                                    <span className="font-semibold text-[#111827]">Sticky Notes.</span> Add context directly onto the comparison table (e.g., "This rider covers early-stage CI, which your old plan lacks").
                                </p>
                            </div>

                            {/* Formula Explanations Card */}
                            <div className="bg-white border border-[#E2E8F0] rounded-[6px] shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] p-3 md:p-4 flex gap-2 md:gap-3 items-start">
                                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10">
                                    <img src="/icons/icon-formula.svg" alt="Formula" className="w-full h-full" />
                                </div>
                                <p className="text-sm md:text-base font-normal leading-[1.5] text-[#4b5563] flex-1">
                                    <span className="font-semibold text-[#111827]">Formula Explanations.</span> Click on any calculated difference to see the formula breakdown, so you can explain exactly how the new coverage totals were derived.
                                </p>
                            </div>
                        </div>

                        {/* Right Illustration */}
                        <div className="relative min-h-64 md:min-h-80 lg:min-h-96">
                            <img
                                src="/images/home/home-strategic-03.png"
                                alt="Clarity Features"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Accent */}
                    <div className="w-full">
                        <img src="/decorative/light-blue-small.svg" alt="" className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
