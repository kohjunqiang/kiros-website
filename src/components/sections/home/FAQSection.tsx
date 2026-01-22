"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui";

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Is the AI 100% accurate?",
            answer: "No AI is perfect, which is why Kiros is designed as an \"Assisted Tool,\" not a \"Robo-Advisor.\" Our AI handles the heavy lifting of extraction, but the system requires your verification before finalizing any portfolio. You are always the final decision-maker."
        },
        {
            question: "Does the AI learn from my client's data?",
            answer: ""
        },
        {
            question: "What happens if I upload a scanned or handwritten policy?",
            answer: ""
        },
        {
            question: "Which insurers do you support?",
            answer: ""
        },
        {
            question: "Is this compliant with MAS regulations?",
            answer: ""
        }
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-[#f8fafc] px-[60px]">
            <div className="w-full border-b border-l border-r border-[#e2e8f0] overflow-hidden">
                {/* Header Section */}
                <div className="w-full max-w-[1320px] mx-auto px-[40px] pt-[120px] pb-[80px] flex flex-col items-center">
                    <div className="w-full max-w-[874px] flex flex-col items-center gap-3">
                        {/* Badge with SVG */}
                        <Badge text="Common Questions" />


                        {/* Title */}
                        <h2 className="text-[52px] font-semibold text-[#111827] text-center tracking-[-1.04px] leading-[1.1]">
                            Everything You Need To Know
                        </h2>
                    </div>
                </div>

                {/* FAQ Items */}
                <div className="w-full">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border-t border-[#e2e8f0] ${index === faqs.length - 1 ? 'border-b' : ''
                                } ${openIndex === index && index === 0 ? 'bg-white border-t-[#e56024]' : ''
                                }`}
                        >
                            <div className="p-[40px] flex gap-[24px] items-start">
                                {/* Number */}
                                <p className="text-[14px] font-medium text-[#e56024] w-[40px] leading-[1.4]">
                                    [ {String(index + 1).padStart(2, '0')} ]
                                </p>

                                {/* Content */}
                                <div className="flex-1 flex flex-col gap-[12px] py-[3px]">
                                    <h3 className="text-[24px] font-semibold text-[#111827] tracking-tight leading-[1.1]">
                                        {faq.question}
                                    </h3>

                                    {openIndex === index && faq.answer && (
                                        <div className="border-l border-[#6781e0] pl-[16px]">
                                            <p className="text-[16px] font-normal text-[#4b5563] leading-[1.5]">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Toggle Button */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="bg-white border border-[#e2e8f0] rounded shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] p-2 h-8 w-8 flex items-center justify-center shrink-0"
                                >
                                    {openIndex === index ? (
                                        <ChevronDown className="w-4 h-4 text-[#0f172a]" />
                                    ) : (
                                        <ChevronRight className="w-4 h-4 text-[#0f172a]" />
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
