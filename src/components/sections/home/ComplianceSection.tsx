import { Badge } from "@/components/ui";

export function ComplianceSection() {
    return (
        <div className="w-full bg-[#0b0c0f] border-b border-[rgba(226,232,240,0.15)] px-[60px]">
            <div className="w-full border-l border-r border-[rgba(226,232,240,0.15)] overflow-hidden">
                <div className="w-full px-[40px] pt-[120px] pb-[80px] flex flex-col gap-[64px]">
                    {/* Header Section */}
                    <div className="w-[874px] flex flex-col gap-4">
                        {/* Badge with SVG */}
                        <div className="flex flex-col gap-3">
                            <div className="relative inline-flex">
                                <Badge text="Uncompromised Security" variant="dark" />
                            </div>

                            {/* Title */}
                            <h2 className="text-[52px] font-semibold text-white tracking-[-1.04px] leading-[1.1]">
                                Compliance is our source code.
                            </h2>
                        </div>

                        {/* Subheading */}
                        <p className="text-[18px] font-medium text-[#9ca3af] leading-[1.5] max-w-2xl">
                            We built our infrastructure to meet the strict standards of Singapore's financial services industry. Your client data is sacred, sovereign, and secure.
                        </p>
                    </div>

                    {/* Features Row */}
                    <div className="flex gap-[40px] items-start w-full">
                        {/* Feature 1 - Zero Retention Promise */}
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="w-[40px] h-[40px] bg-[#294085] rounded-[6px] flex items-center justify-center">
                                <img src="/icons/icon-eye.svg" alt="" className="w-10 h-10" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[18px] font-normal text-[#9ca3af] leading-[1.5] max-w-md">
                                    <span className="font-semibold text-white">Zero Retention Promise.</span>
                                    <br />
                                    We process. We don't pry. Our AI uses a Zero-Retention API architecture. It reads the document to extract data, then wipes it from memory. We never train our models on your client data.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 - Hosted in Singapore */}
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="w-[40px] h-[40px] bg-[#294085] rounded-[6px] flex items-center justify-center">
                                <img src="/icons/icon-sg.svg" alt="" className="w-10 h-10" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[18px] font-normal text-[#9ca3af] leading-[1.5] max-w-md">
                                    <span className="font-semibold text-white">Hosted in Singapore.</span>
                                    <br />
                                    Data that never leaves home. All data is encrypted at rest and in transit on enterprise-grade servers physically located in Singapore, aligned with PDPA and MAS guidelines.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 - Audit Trails */}
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="w-[40px] h-[40px] bg-[#294085] rounded-[6px] flex items-center justify-center">
                                <img src="/icons/icon-scroll.svg" alt="" className="w-10 h-10" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[18px] font-normal text-[#9ca3af] leading-[1.5] max-w-md">
                                    <span className="font-semibold text-white">Audit Trails for Accountability.</span>
                                    <br />
                                    Total accountability for every pixel. Our system automatically logs every action, what files were uploaded, what data was changed and when, and you get access to a time-stamped transparent history of it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
