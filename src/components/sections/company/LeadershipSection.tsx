"use client";

import { useState } from "react";
import { Badge } from "@/components/ui";

const data = [
    {
        name: "Daniel Wong",
        role: "Founder & CEO",
        image: "/images/founders/daniel-wong.png",
        bio: "Daniel is a legally trained financial advisor with a strong background in regulation, risk, and technology. He leads the company's overall direction, making sure its work aligns with Singapore's regulatory standards while building practical, compliant solutions for businesses. He has experience working across both law and finance, and previously helped a healthcare startup become Singapore's first clinic to receive CSA Cyber Essentials accreditation. That achievement was later highlighted in a ministerial speech as a benchmark for SME cybersecurity. Daniel also volunteers as an Associate Trainer with the Institute for Financial Literacy, working with MoneySense to promote responsible financial education in Singapore.",
        focusAreas: "AI Governance, Regulatory Compliance, Strategic Partnerships, and Enterprise Resilience."
    },
    {
        name: "Jayden Ooi",
        role: "Co-Founder & CPO",
        image: "/images/founders/jayden-ooi.png",
        bio: "Jayden is an entrepreneur with over 11 years of experience building and running a successful digital agency in Singapore. With a background in UX, digital strategy, and product execution, he focuses on building products that are clear, usable, and designed around real user behaviour. He leads product design and user experience at Kiros, translating complex financial and regulatory concepts into simple, intuitive tools that clients can actually use. His work ensures the platform is easy to adopt, consistent in branding, and aligned with how users think and act. Jayden oversees product direction, user experience, and adoption strategy, with a strong emphasis on practical design, clarity, and long-term usability.",
        focusAreas: "Product Design, User Experience, Digital Strategy, User Adoption"
    },
    {
        name: "Jason Koh",
        role: "Co-Founder & CTO",
        image: "/images/founders/jason-koh.png",
        bio: "Jason is a senior technology leader with over 10 years of experience building and leading systems in large financial institutions. He has spent the past decade in senior engineering and leadership roles at major banks and insurers in Singapore, working on complex, high-reliability platforms. At Kiros, Jason leads the entire technology stack, including platform architecture, data infrastructure, and system scalability. He is responsible for ensuring the platform is secure, stable, and built to meet enterprise and financial-grade standards. His background spans full-stack engineering, cloud infrastructure, and secure deployment, with a strong focus on building systems that scale safely and reliably.",
        focusAreas: "AI Infrastructure, Cloud Engineering, DevOps, Data Security"
    }
];

export function LeadershipSection() {
    const [selectedFounder, setSelectedFounder] = useState(0);

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
                        {data.map((founder, index) => (
                            <div
                                key={founder.name}
                                className={`flex flex-col cursor-pointer transition-opacity duration-300 ${
                                    index < data.length - 1 ? "border-r border-[#e2e8f0]" : ""
                                } ${selectedFounder === index ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
                                onClick={() => setSelectedFounder(index)}
                            >
                                <div className="relative w-full aspect-[440/480]">
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                                <div className={`px-4 py-3 ${selectedFounder === index ? "bg-[#f1f5f9]" : "bg-[#f8fafc]"}`}>
                                    <h3 className="text-lg font-semibold text-[#111827] leading-[1.5]">
                                        {founder.name}
                                    </h3>
                                    <p className="text-sm text-[#6b7280] leading-[20px]">
                                        {founder.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bio Section */}
                <div className="border-t border-[#e2e8f0] px-6 md:px-[40px] py-6 md:py-[24px]">
                    <div className="flex flex-col gap-4">
                        <p className="text-base text-[#111827] leading-[1.5]">
                            {data[selectedFounder].bio}
                        </p>
                        <div className="bg-[#f0f9ff] border border-[#e2e8f0] rounded-md p-4">
                            <p className="text-base text-[#4b5563] leading-[1.5]">
                                <span className="font-medium text-[#111827]">Focus Areas:</span> {data[selectedFounder].focusAreas}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
