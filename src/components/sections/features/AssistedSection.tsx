import Image from "next/image";
import { Badge } from "@/components/ui";

export function AssistedSection() {
    return (
        <div className="w-full bg-white px-4 md:px-8 lg:px-[60px] border-b border-[#e2e8f0]">
            <div className="w-full border-l border-r border-[#e2e8f0]">
                {/* Title Section */}
                <div className="px-[40px] pt-[120px] pb-[80px]">
                    <div className="flex flex-col gap-[12px] max-w-[874px]">
                        {/* Badge */}
                        <div className="relative w-fit">
                            <Badge text="AI-Assisted Portfolio Optimisation" />
                        </div>

                        {/* Heading */}
                        <h2 className="text-[52px] leading-[1.1] font-semibold text-[#111827] tracking-[-1.04px]">
                            Model New Portfolios Without Rebuilding Spreadsheets
                        </h2>
                    </div>
                </div>

                {/* Preview Image */}
                <div className="w-full">
                    <Image
                        src="/images/features/features-preview-2.png"
                        alt="Portfolio optimization preview"
                        width={1318}
                        height={600}
                        className="w-full h-auto"
                    />
                </div>

                {/* Features Grid */}
                <div className="flex flex-col md:flex-row border-t border-[#e2e8f0]">
                    {/* Left Column - Description */}
                    <div className="flex-1 p-[40px] border-r border-[#e2e8f0]">
                        <p className="text-[18px] leading-[1.5] font-medium text-[#4b5563] mb-6">
                            When a client comes with existing coverage and new policy quotes, building a clear "before vs after" view usually means hours of manual work. Traditionally, that means reading every new quote, cross-referencing by hand, then setting up formulas in a fresh spreadsheet.
                        </p>
                        <p className="text-[18px] leading-[1.5] font-medium text-[#4b5563]">
                            Kiros turns that into a few clicks. Start from the current portfolio, add new policies or proposed changes, and create multiple scenarios. The system generates a side-by-side comparison against the base portfolio, so you can see how coverage and total premiums change in each scenario.
                        </p>
                    </div>

                    {/* Right Column - Feature List */}
                    <div className="flex-1 border-t border-[#e2e8f0] md:border-t-0">
                        {/* Multi-Scenario Modeling */}
                        <div className="flex gap-[24px] p-[40px] border-b border-[#e2e8f0]">
                            <div className="w-[40px] h-[40px] bg-[#10b981] rounded-[6px] flex items-center justify-center flex-shrink-0">
                                <Image
                                    src="/icons/icon-multi-model.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="w-10 h-10"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                    <span className="font-semibold text-[#111827]">Multi-Scenario Modeling.</span>
                                    <br />
                                    Create multiple variations (e.g., "Plan A" vs. "Plan B") off the same base portfolio.
                                </p>
                            </div>
                        </div>

                        {/* Instant Quote Extraction */}
                        <div className="flex gap-[24px] p-[40px] border-b border-[#e2e8f0]">
                            <div className="w-[40px] h-[40px] bg-[#10b981] rounded-[6px] flex items-center justify-center flex-shrink-0">
                                <Image
                                    src="/icons/icon-doc-plus-white.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="w-10 h-10"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                    <span className="font-semibold text-[#111827]">Instant Quote Extraction.</span>
                                    <br />
                                    Upload new policy quotes and let AI map the data, just like existing policies.
                                </p>
                            </div>
                        </div>

                        {/* Dynamic Comparison */}
                        <div className="flex gap-[24px] p-[40px] border-b border-[#e2e8f0]">
                            <div className="w-[40px] h-[40px] bg-[#10b981] rounded-[6px] flex items-center justify-center flex-shrink-0">
                                <Image
                                    src="/icons/icon-visual-white.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="w-10 h-10"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                    <span className="font-semibold text-[#111827]">Dynamic Comparison.</span>
                                    <br />
                                    View "Current" vs. "Recommended" portfolios side-by-side.
                                </p>
                            </div>
                        </div>

                        {/* Real-Time Impact */}
                        <div className="flex gap-[24px] p-[40px]">
                            <div className="w-[40px] h-[40px] bg-[#10b981] rounded-[6px] flex items-center justify-center flex-shrink-0">
                                <Image
                                    src="/icons/icon-lightning-white.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="w-10 h-10"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                    <span className="font-semibold text-[#111827]">Real-Time Impact.</span>
                                    <br />
                                    Watch coverage totals and premiums update instantly across different scenarios.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="border-t border-b border-[#e2e8f0] p-[40px]">
                    {/* Badge */}
                    <div className="flex items-center justify-center">
                        <Badge text="How It Works" />
                    </div>
                </div>

                {/* Steps */}

                <div className="border-b border-[#e2e8f0] p-[40px] space-y-[40px]">
                    {/* Step 01 */}
                    <div className="flex gap-[40px] items-start ">
                        <div className="w-[80px] h-[80px] flex-shrink-0">
                            <Image
                                src="/icons/custom/scan.svg"
                                alt="Step 01"
                                width={94}
                                height={83}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="text-[14px] font-medium text-[#e56024] uppercase mb-2">[ Step-01 ]</p>
                            <h3 className="text-[20px] font-semibold text-[#111827] mb-2">
                                Add new policies and let AI do the maths
                            </h3>
                            <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                Add new policy quotes into the optimisation canvas. Kiros reads the documents, extracts coverage, riders, and premiums, and folds them into new scenario portfolios, without rebuilding spreadsheets or formulas.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-b border-[#e2e8f0] p-[40px] space-y-[40px]">
                    {/* Step 02 */}
                    <div className="flex gap-[40px] items-start">
                        <div className="w-[80px] h-[80px] flex-shrink-0">
                            <Image
                                src="/icons/custom/select.svg"
                                alt="Step 02"
                                width={80}
                                height={80}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="text-[14px] font-medium text-[#e56024] uppercase mb-2">[ Step-02 ]</p>
                            <h3 className="text-[20px] font-semibold text-[#111827] mb-2">
                                Compare scenarios side by side
                            </h3>
                            <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                View the current portfolio next to each proposed scenario. Drag and drop policies between scenarios to test different combinations instantly, giving you a clear view of how each option affects coverage, protection and cost.
                                <br /><br />
                                Clients see how their coverage and premiums shift in plain numbers. That clarity reduces friction, builds trust, and speeds up their decision to go ahead.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-[40px] space-y-[40px]">
                    {/* Step 03 */}
                    <div className="flex gap-[40px] items-start">
                        <div className="w-[80px] h-[80px] flex-shrink-0">
                            <Image
                                src="/icons/custom/present.svg"
                                alt="Step 03"
                                width={102}
                                height={91}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="text-[14px] font-medium text-[#e56024] uppercase mb-2">[ Step-03 ]</p>
                            <h3 className="text-[20px] font-semibold text-[#111827] mb-2">
                                Present a clear recommendation
                            </h3>
                            <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                Advisors don't just make judgement calls. Add notes directly to cells to explain why you kept a rider or changed a structure. If AI misreads a value, overwrite it and leave a note. When a client asks "Why this option?", your reasoning sits right next to the figures.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
