import Link from "next/link";
import { Badge } from "@/components/ui";

export function NextStepsSection() {
    return (
        <div className="w-full bg-white px-4 md:px-[60px]">
            <div className="w-full border-l border-r border-[#e2e8f0]">
                <div className="flex flex-col md:flex-row ">
                    {/* Left Column - Note from Founders */}
                    <div className="flex-1 flex flex-col gap-4 p-4 md:p-10 border-r border-[#e2e8f0]">
                        <div className="relative w-fit">
                            <Badge text="Note from founders" />
                        </div>
                        <p className="text-[18px] font-medium leading-[1.5] text-[#111827]">
                            "We've received your application and will review it as we select advisers for this beta cohort. If there's a fit, we'll contact you with next steps and onboarding details.
                            <br />
                            <br />
                            You don't need to do anything else at this stage. We appreciate you taking the time to share how you work."
                        </p>
                        <div className="flex items-center -space-x-3">
                            <img
                                src="/images/founders/company-founder-1.png"
                                alt="Founder 1"
                                className="w-12 h-12 rounded-full border-2 border-white"
                            />
                            <img
                                src="/images/founders/company-founder-2.png"
                                alt="Founder 2"
                                className="w-12 h-12 rounded-full border-2 border-white"
                            />
                            <img
                                src="/images/founders/company-founder-3.png"
                                alt="Founder 3"
                                className="w-12 h-12 rounded-full border-2 border-white"
                            />
                        </div>
                    </div>

                    {/* Right Column - What Happens Next */}
                    <div className="flex-1 flex flex-col">
                        {/* Header */}
                        <div className="flex flex-col gap-4 px-4 md:px-10 py-6 border-b border-[#e2e8f0]">
                            <div className="relative w-fit">
                                <Badge text="How it works" />
                            </div>
                            <h2 className="text-[36px] leading-[1.1] font-semibold text-[#111827] tracking-[-0.72px]">
                                What Happens Next?
                            </h2>
                        </div>

                        {/* Step 01 */}
                        <div className="flex flex-col gap-6 px-4 md:px-10 py-6 border-b border-[#e2e8f0]">
                            <p className="text-[14px] font-medium leading-[1.4] text-[#d42600]">
                                [ Step-01 ]
                            </p>
                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 bg-[#10b981] rounded-md flex items-center justify-center shrink-0">
                                    <img
                                        src="/icons/icon-user.svg"
                                        alt=""
                                        className="w-10 h-10"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                        <span className="font-semibold text-[#111827]">Review.</span>{" "}
                                        Our team is reviewing your profile to ensure KIROS is a good fit for your current workflow.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 02 */}
                        <div className="flex flex-col gap-6 px-4 md:px-10 py-6 border-b border-[#e2e8f0]">
                            <p className="text-[14px] font-medium leading-[1.4] text-[#d42600]">
                                [ Step-02 ]
                            </p>
                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 bg-[#10b981] rounded-md flex items-center justify-center shrink-0">
                                    <img
                                        src="/icons/icon-ticket.svg"
                                        alt=""
                                        className="w-10 h-10"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                        <span className="font-semibold text-[#111827]">The Invite.</span>{" "}
                                        Look out for an email with the subject line "Your KIROS Beta Invite" within the next 48 hours.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 03 */}
                        <div className="flex flex-col gap-6 px-4 md:px-10 py-6">
                            <p className="text-[14px] font-medium leading-[1.4] text-[#d42600]">
                                [ Step-03 ]
                            </p>
                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 bg-[#10b981] rounded-md flex items-center justify-center shrink-0">
                                    <img
                                        src="/icons/icon-rocket.svg"
                                        alt=""
                                        className="w-10 h-10"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[18px] leading-[1.5] text-[#4b5563]">
                                        <span className="font-semibold text-[#111827]">Onboarding.</span>{" "}
                                        Your invite includes a personal onboarding link to help you set up your first client portfolio.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 md:p-6 border-t border-[#e2e8f0]">
                    <div className="flex-1 max-w-[874px]">
                        <p className="text-[16px] leading-[1.5] text-[#111827]">
                            <span className="font-semibold">Don't let the invite get lost.</span>{" "}
                            <span className="text-[#4b5563]">
                                Please check your "Promotions" or "Spam" folder and drag our email to your Primary inbox to ensure you don't miss your access code.
                            </span>
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="bg-[#e56024] px-5 py-2.5 rounded-md shadow-sm text-[16px] font-medium text-white hover:bg-[#d14f15] transition-colors whitespace-nowrap"
                    >
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
}
