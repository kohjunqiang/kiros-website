"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, ChevronDown, Check } from "lucide-react";
import { Badge } from "@/components/ui";

interface FormData {
    // Step 1
    firstName: string;
    lastName: string;
    advisoryGroup: string;
    rnfCode: string;
    email: string;
    mobile: string;
    hearAboutUs: string;
    // Step 2
    yearsInPractice: string;
    clientRelationships: string;
    manageAdvisors: string;
    // Step 3
    painPoints: string[];
    frustrationDescription: string;
    urgencyLevel: number;
    // Step 4
    foundingCircle: string;
    earlyAccessReason: string;
    advisorOwes: string;
}

export function FormSection() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        advisoryGroup: "",
        rnfCode: "",
        email: "",
        mobile: "",
        hearAboutUs: "",
        yearsInPractice: "",
        clientRelationships: "",
        manageAdvisors: "",
        painPoints: [],
        frustrationDescription: "",
        urgencyLevel: 1,
        foundingCircle: "",
        earlyAccessReason: "",
        advisorOwes: "",
    });

    const steps = [
        { number: 1, label: "Tell Us About Yourself" },
        { number: 2, label: "Tell Us About Your Practice" },
        { number: 3, label: "What Keeps You Up at Night?" },
        { number: 4, label: "Founding Circle" }
    ];

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        } else {
            router.push('/thankyou');
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const updateFormData = (field: keyof FormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const togglePainPoint = (option: string) => {
        setFormData(prev => {
            const currentPoints = prev.painPoints;
            if (currentPoints.includes(option)) {
                return { ...prev, painPoints: currentPoints.filter(p => p !== option) };
            } else if (currentPoints.length < 3) {
                return { ...prev, painPoints: [...currentPoints, option] };
            }
            return prev;
        });
    };

    return (
        <>
            {/* Progress Stepper */}
            <div className="w-full bg-[#f1f5f9] px-4 md:px-8 lg:px-[60px] border-b border-[#e2e8f0]">
                <div className="w-full py-4 flex justify-center">
                    <div className="w-full max-w-[1320px]">
                        <div className="flex items-center justify-center gap-2">
                            {steps.map((step, index) => {
                                const isCompleted = step.number < currentStep;
                                const isActive = step.number === currentStep;
                                const isInactive = step.number > currentStep;

                                return (
                                    <div key={step.number} className={`flex items-center gap-2 ${step.number === 4 ? '' : 'flex-1'}`}>
                                        <div className="flex items-center gap-3 shrink-0">
                                            <div className={`flex items-center justify-center rounded-lg w-8 h-7 ${isActive || isCompleted
                                                ? 'bg-white border border-[#6781e0]'
                                                : 'bg-white border border-[#e2e8f0]'
                                                } ${isActive && !isCompleted
                                                    ? 'shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04),0px_0px_0px_3px_#c3caf2]'
                                                    : 'shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]'
                                                }`}>
                                                {isCompleted ? (
                                                    <Check className="w-4 h-4 text-[#10b981]" />
                                                ) : (
                                                    <p className={`text-[14px] font-medium leading-[20px] ${isActive ? 'text-[#111827]' : 'text-[#6c6c79]'
                                                        }`}>
                                                        {step.number}
                                                    </p>
                                                )}
                                            </div>
                                            <p className={`text-[14px] font-medium leading-[20px] whitespace-nowrap ${isActive || isCompleted ? 'text-[#111827]' : 'text-[#9ca3af]'
                                                }`}>
                                                {step.label}
                                            </p>
                                        </div>
                                        {step.number < 4 && (
                                            <div className={`flex-1 h-px min-w-[8px] ${isCompleted ? 'bg-[#10b981]' : 'bg-[#e2e8f0]'}`} />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Step 1 Form */}
            <div className="w-full bg-white px-4 md:px-8 lg:px-[60px] border-b border-[#e2e8f0]">
                <div className="w-full border-l border-r border-[#e2e8f0] flex justify-center">
                    <div className="w-full max-w-[1320px]">
                        <div className="flex flex-col items-center gap-10 py-20 px-10">
                            {/* Title */}
                            <div className="flex flex-col gap-4 items-center max-w-[600px] w-full">
                                <div className="flex flex-col gap-3 items-start w-full">
                                    <div className="relative w-fit">
                                        <Badge text={`Step 0${currentStep}`} />
                                    </div>
                                    <h2 className="text-[36px] leading-[1.1] font-semibold text-[#111827] tracking-[-0.72px]">
                                        {currentStep === 1 && "Tell Us About Yourself"}
                                        {currentStep === 2 && "Tell Us About Your Practice"}
                                        {currentStep === 3 && "What Keeps You Up at Night?"}
                                        {currentStep === 4 && "Founding Circle"}
                                    </h2>
                                </div>
                            </div>

                            {/* Form */}
                            <form className="flex flex-col gap-4 max-w-[600px] w-full" onSubmit={handleNextStep}>
                                <div className="flex flex-col gap-4 w-full">
                                    {currentStep === 1 && (
                                        <>
                                            {/* First Name & Last Name */}
                                            <div className="flex gap-3 w-full">
                                                <div className="flex-1 flex flex-col gap-1">
                                                    <label className="text-[14px] font-medium leading-[20px] text-[#111827]">
                                                        First Name <span className="text-[#d42600]">*</span>
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="John"
                                                        value={formData.firstName}
                                                        onChange={(e) => updateFormData('firstName', e.target.value)}
                                                        className="w-full h-10 px-3 py-2 bg-white border border-[#e2e8f0] rounded-md shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] text-[14px] text-[#111827] placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#6781e0] focus:border-[#6781e0]"
                                                    />
                                                </div>
                                                <div className="flex-1 flex flex-col gap-1">
                                                    <label className="text-[14px] font-medium leading-[20px] text-[#111827]">
                                                        Last Name <span className="text-[#d42600]">*</span>
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="Doe"
                                                        value={formData.lastName}
                                                        onChange={(e) => updateFormData('lastName', e.target.value)}
                                                        className="w-full h-10 px-3 py-2 bg-white border border-[#e2e8f0] rounded-md shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] text-[14px] text-[#111827] placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#6781e0] focus:border-[#6781e0]"
                                                    />
                                                </div>
                                            </div>

                                            {/* Advisory Group/Firm */}
                                            <div className="flex flex-col gap-1">
                                                <label className="text-[14px] font-medium leading-[20px] text-[#111827]">
                                                    Advisory Group/Firm <span className="text-[#d42600]">*</span>
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Financial advisory"
                                                    className="w-full h-10 px-3 py-2 bg-white border border-[#e2e8f0] rounded-md shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] text-[14px] text-[#111827] placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#6781e0] focus:border-[#6781e0]"
                                                />
                                            </div>

                                            {/* RNF Code */}
                                            <div className="flex flex-col gap-1">
                                                <label className="text-[14px] font-medium leading-[20px] text-[#111827]">
                                                    RNF Code <span className="text-[#d42600]">*</span>
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="A1234B"
                                                    className="w-full h-10 px-3 py-2 bg-white border border-[#e2e8f0] rounded-md shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] text-[14px] text-[#111827] placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#6781e0] focus:border-[#6781e0]"
                                                />
                                            </div>

                                            {/* Email & Mobile */}
                                            <div className="flex gap-3 w-full">
                                                <div className="flex-1 flex flex-col gap-1">
                                                    <label className="text-[14px] font-medium leading-[20px] text-[#111827]">
                                                        Email Address <span className="text-[#d42600]">*</span>
                                                    </label>
                                                    <input
                                                        required
                                                        type="email"
                                                        placeholder="john@example.com"
                                                        value={formData.email}
                                                        onChange={(e) => updateFormData('email', e.target.value)}
                                                        className="w-full h-10 px-3 py-2 bg-white border border-[#e2e8f0] rounded-md shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] text-[14px] text-[#111827] placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#6781e0] focus:border-[#6781e0]"
                                                    />
                                                </div>
                                                <div className="flex-1 flex flex-col gap-1">
                                                    <label className="text-[14px] font-medium leading-[20px] text-[#111827]">
                                                        Mobile/WhatsApp <span className="text-[#d42600]">*</span>
                                                    </label>
                                                    <div className="flex h-10 bg-white border border-[#e2e8f0] rounded-md shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)]">
                                                        <div className="flex items-center gap-1 px-3 border-r border-[#e2e8f0]">
                                                            <span className="text-[14px] text-[#111827]">SG</span>
                                                            <ChevronDown className="w-4 h-4 text-[#64748b]" />
                                                        </div>
                                                        <input
                                                            required
                                                            type="tel"
                                                            placeholder="+65 1234 5678"
                                                            value={formData.mobile}
                                                            onChange={(e) => updateFormData('mobile', e.target.value)}
                                                            className="flex-1 px-3 text-[14px] text-[#111827] placeholder:text-[#6b7280] focus:outline-none rounded-r-md"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* How did you hear about us */}
                                            <div className="flex flex-col gap-1 relative z-10">
                                                <label className="text-[14px] font-medium leading-[20px] text-[#111827]">
                                                    How did you hear about us? <span className="text-[#d42600]">*</span>
                                                </label>
                                                <select
                                                    required
                                                    defaultValue=""
                                                    className="w-full h-10 px-3 bg-white border border-[#e2e8f0] rounded-md shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] text-[14px] text-[#111827] appearance-none focus:outline-none focus:ring-2 focus:ring-[#6781e0] focus:border-[#6781e0] cursor-pointer"
                                                >
                                                    <option value="" disabled>Select one</option>
                                                    <option value="linkedin">LinkedIn</option>
                                                    <option value="referral">Referral from colleague</option>
                                                    <option value="event">Industry event</option>
                                                    <option value="search">Online search</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </>
                                    )}

                                    {currentStep === 2 && (
                                        <>
                                            {/* Years in practice */}
                                            <div className="flex flex-col gap-1">
                                                <label className="text-[14px] font-medium leading-[20px] text-[#111827]">
                                                    How many years have you been in practice as financial advisor? <span className="text-[#d42600]">*</span>
                                                </label>
                                                <select
                                                    required
                                                    value={formData.yearsInPractice}
                                                    onChange={(e) => updateFormData('yearsInPractice', e.target.value)}
                                                    className="w-full h-10 px-3 bg-white border border-[#e2e8f0] rounded-md shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] text-[14px] text-[#111827] appearance-none focus:outline-none focus:ring-2 focus:ring-[#6781e0] focus:border-[#6781e0] cursor-pointer"
                                                >
                                                    <option value="" disabled>Select one</option>
                                                    <option value="0-2">0-2 years</option>
                                                    <option value="3-5">3-5 years</option>
                                                    <option value="6-10">6-10 years</option>
                                                    <option value="11-15">11-15 years</option>
                                                    <option value="16+">16+ years</option>
                                                </select>
                                            </div>

                                            {/* Active client relationships */}
                                            <div className="flex flex-col gap-1">
                                                <label className="text-[14px] font-medium leading-[20px] text-[#111827]">
                                                    Roughly how many active client relationships do you manage personally? <span className="text-[#d42600]">*</span>
                                                </label>
                                                <select
                                                    required
                                                    value={formData.clientRelationships}
                                                    onChange={(e) => updateFormData('clientRelationships', e.target.value)}
                                                    className="w-full h-10 px-3 bg-white border border-[#e2e8f0] rounded-md shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] text-[14px] text-[#111827] appearance-none focus:outline-none focus:ring-2 focus:ring-[#6781e0] focus:border-[#6781e0] cursor-pointer"
                                                >
                                                    <option value="" disabled>Select one</option>
                                                    <option value="0-25">0-25 clients</option>
                                                    <option value="26-50">26-50 clients</option>
                                                    <option value="51-100">51-100 clients</option>
                                                    <option value="101-200">101-200 clients</option>
                                                    <option value="201+">201+ clients</option>
                                                </select>
                                            </div>

                                            {/* Manage/mentor other advisors */}
                                            <div className="flex flex-col gap-1">
                                                <label className="text-[14px] font-medium leading-[20px] text-[#111827]">
                                                    Do you currently manage, mentor, or coach other advisors? <span className="text-[#d42600]">*</span>
                                                </label>
                                                <select
                                                    required
                                                    value={formData.manageAdvisors}
                                                    onChange={(e) => updateFormData('manageAdvisors', e.target.value)}
                                                    className="w-full h-10 px-3 bg-white border border-[#e2e8f0] rounded-md shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] text-[14px] text-[#111827] appearance-none focus:ring-2 focus:ring-[#6781e0] focus:border-[#6781e0] cursor-pointer"
                                                >
                                                    <option value="" disabled>Select one</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                            </div>
                                        </>
                                    )}

                                    {currentStep === 3 && (
                                        <>
                                            {/* Pain points - multi-select */}
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    <label className="text-[14px] font-medium leading-[20px] text-[#111827]">
                                                        Where does it hurt the most in your day-to-day work? <span className="text-[#d42600]">*</span>
                                                    </label>
                                                    <div className="bg-white border border-[#e2e8f0] px-2 py-0.5 rounded-md">
                                                        <p className="text-[12px] font-small leading-[16px] text-[#4b5563]">Choose top 3 - ({formData.painPoints.length}/3)</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {[
                                                        "New business case preparation",
                                                        "Underwriting follow-up (medical reports, letters, etc.)",
                                                        "Chasing clients for documents (NOA, SOW, forms)",
                                                        "Policy servicing admin (GIRO, payments, changes)",
                                                        "Claims support and follow-up",
                                                        "Compiling policy summaries in Excel",
                                                        "Preparing before/after comparison proposals (current vs recommended)",
                                                        "Compliance paperwork (fact-find, suitability, replacement)",
                                                        "Preparing for client review meetings",
                                                        "Tracking tasks and follow-ups across clients",
                                                        "Other (please specify)"
                                                    ].map((option) => (
                                                        <button
                                                            key={option}
                                                            type="button"
                                                            onClick={() => togglePainPoint(option)}
                                                            className={`h-8 px-3 py-2 rounded-md shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] text-[14px] transition-colors flex items-center ${formData.painPoints.includes(option)
                                                                ? 'bg-[#fef1ef] border border-[#e56024] text-[#111827]'
                                                                : 'bg-white border border-[#e2e8f0] text-[#4b5563] hover:bg-gray-50'
                                                                }`}
                                                        >
                                                            {option}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Frustration description */}
                                            <div className="flex flex-col gap-1">
                                                <label className="text-[14px] font-medium leading-[20px] text-[#111827]">
                                                    What frustrates you most about your current process? <span className="text-[#d42600]">*</span>
                                                </label>
                                                <textarea
                                                    required
                                                    rows={6}
                                                    placeholder="Describe a recent scenario that was particularly painful, or a recurring task that consistently wastes your time. What happened, and which part of the process took the most effort?"
                                                    value={formData.frustrationDescription}
                                                    onChange={(e) => updateFormData('frustrationDescription', e.target.value)}
                                                    className="w-full px-3 py-2 bg-white border border-[#e2e8f0] rounded-md shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] text-[14px] text-[#111827] placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#6781e0] focus:border-[#6781e0] resize-none"
                                                />
                                            </div>

                                            {/* Urgency slider */}
                                            <div className="flex flex-col gap-1">
                                                <label className="text-[14px] font-medium leading-[20px] text-[#111827]">
                                                    On a scale of 1-10, how urgent is solving this specific bottleneck? <span className="text-[#d42600]">*</span>
                                                </label>
                                                <div className="bg-white border border-[#e2e8f0] p-3 rounded-md shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)]">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="flex justify-between text-[12px] font-medium text-[#4b5563]">
                                                            <span>1</span>
                                                            <span>10</span>
                                                        </div>
                                                        <input
                                                            type="range"
                                                            min="1"
                                                            max="10"
                                                            value={formData.urgencyLevel}
                                                            onChange={(e) => updateFormData('urgencyLevel', parseInt(e.target.value))}
                                                            className="w-full h-2 bg-[#cbd5e1] rounded-lg appearance-none cursor-pointer accent-[#386657]"
                                                        />
                                                        <div className="flex justify-between text-[12px] font-medium text-[#4b5563]">
                                                            <span>(Annoying, but I can live with it)</span>
                                                            <span>(Critical, I need this now!)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {currentStep === 4 && (
                                        <>
                                            {/* Founding Circle Description */}
                                            <p className="text-[18px] font-medium leading-[1.5] text-[#4b5563]">
                                                We are inviting a small group of forward-thinking Singapore financial practitioners to join our Founding Circle, where you get to work closely with our product team, test new features early, and help shape Kiros from the inside.
                                            </p>

                                            {/* Founding Circle Radio Options */}
                                            <div className="flex flex-col gap-1">
                                                <label className="text-[14px] font-medium leading-[20px] text-[#111827]">
                                                    Would you like to be considered for the Founding Circle? <span className="text-[#d42600]">*</span>
                                                </label>
                                                <div className="flex flex-col gap-2">
                                                    {[
                                                        { value: "yes", label: "Yes, I want to help shape the platform" },
                                                        { value: "maybe", label: "Maybe, tell me more." },
                                                        { value: "no", label: "No, I just want early access for now" }
                                                    ].map((option) => (
                                                        <button
                                                            key={option.value}
                                                            type="button"
                                                            onClick={() => updateFormData('foundingCircle', option.value)}
                                                            className={`w-full h-10 px-3 py-2 rounded-md shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] text-[14px] text-left flex items-center justify-between transition-colors ${formData.foundingCircle === option.value
                                                                ? 'bg-white border border-[#e56024] text-[#111827]'
                                                                : 'bg-white border border-[#e2e8f0] text-[#111827] hover:bg-gray-50'
                                                                }`}
                                                        >
                                                            <span>{option.label}</span>
                                                            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${formData.foundingCircle === option.value
                                                                ? 'bg-[#e56024] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)]'
                                                                : 'bg-white border border-[#e2e8f0] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)]'
                                                                }`}>
                                                                {formData.foundingCircle === option.value && (
                                                                    <div className="w-2 h-2 bg-white rounded-full" />
                                                                )}
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Why early access */}
                                            <div className="flex flex-col gap-1">
                                                <label className="text-[14px] font-medium leading-[20px] text-[#111827]">
                                                    Why do you want early access to Kiros? <span className="text-[#d42600]">*</span>
                                                </label>
                                                <textarea
                                                    required
                                                    rows={6}
                                                    placeholder="What are you hoping Kiros will change in your day-to-day work?"
                                                    value={formData.earlyAccessReason}
                                                    onChange={(e) => updateFormData('earlyAccessReason', e.target.value)}
                                                    className="w-full px-3 py-2 bg-white border border-[#e2e8f0] rounded-md shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] text-[14px] text-[#111827] placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#6781e0] focus:border-[#6781e0] resize-none"
                                                />
                                            </div>

                                            {/* What advisor owes */}
                                            <div className="flex flex-col gap-1">
                                                <label className="text-[14px] font-medium leading-[20px] text-[#111827]">
                                                    What do you believe an advisor owes their client beyond returns? <span className="text-[#d42600]">*</span>
                                                </label>
                                                <textarea
                                                    required
                                                    rows={6}
                                                    placeholder="Tell us your thoughts"
                                                    value={formData.advisorOwes}
                                                    onChange={(e) => updateFormData('advisorOwes', e.target.value)}
                                                    className="w-full px-3 py-2 bg-white border border-[#e2e8f0] rounded-md shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] text-[14px] text-[#111827] placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#6781e0] focus:border-[#6781e0] resize-none"
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Navigation Buttons */}
                                <div className="flex gap-2 justify-end w-full mt-4">
                                    <button
                                        type="button"
                                        onClick={handlePrevStep}
                                        disabled={currentStep === 1}
                                        className={`flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[#e2e8f0] rounded-md shadow-sm text-[16px] font-medium text-[#111827] transition-colors ${currentStep === 1
                                            ? 'opacity-50 cursor-not-allowed'
                                            : 'hover:bg-gray-50 cursor-pointer'
                                            }`}
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-[#e56024] rounded-md shadow-sm text-[16px] font-medium text-white hover:bg-[#d14f15] transition-colors"
                                    >
                                        {currentStep === 4 ? 'Submit' : 'Next Step'}
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Disclaimer for Step 4 */}
                                {currentStep === 4 && (
                                    <div className="flex flex-col gap-4 w-full">
                                        <div className="h-px bg-[#e2e8f0] w-full" />
                                        <p className="text-[14px] font-normal leading-[20px] text-[#6b7280]">
                                            By applying, you're expressing interest in our closed beta. We'll review all applications and reach out to advisers we select for this cohort.
                                        </p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
