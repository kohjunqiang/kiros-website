export function Footer() {
    return (
        <div>
            <div className="w-full bg-[#0B0C0F] px-4 md:px-[60px] border-b border-[#E2E8F026]">
                <div className="w-full border-l border-r border-[#E2E8F026]">
                    <div className="w-full flex flex-col md:flex-row">
                        <div className="flex-1 border-r border-[#E2E8F026] px-10 py-30 flex flex-col gap-10">
                            <div className="flex items-center">
                                <img src="/logos/blackLogo.svg" alt="Kiros" className="h-7" />
                            </div>
                            <div className="text-lg text-[#6B7280] leading-[1.5]">
                                <p className="text-white font-semibold mb-0">
                                    Intelligent AI assistant for smarter & efficient financial advisory.{' '}
                                </p>
                                <p>Built by Advisors, for Advisors.</p>
                            </div>
                        </div>

                        <div className="flex-1 px-10 py-30 flex gap-10">
                            <div className="flex-1 flex flex-col gap-4">
                                <p className="text-[#E56024] text-sm font-medium">
                                    [ LINKS ]
                                </p>
                                <div className="flex flex-col gap-4">
                                    <a href="/features" className="text-white text-base font-medium leading-[1.5]">
                                        Features
                                    </a>
                                    <a href="#" className="text-white text-base font-medium leading-[1.5]">
                                        Compliance
                                    </a>
                                    <a href="#" className="text-white text-base font-medium leading-[1.5]">
                                        Privacy Policy
                                    </a>
                                    <a href="/terms-of-service" className="text-white text-base font-medium leading-[1.5]">
                                        Terms of Services
                                    </a>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col gap-4">
                                <p className="text-[#E56024] text-sm font-medium">
                                    [ COMPANY ]
                                </p>
                                <div className="flex flex-col gap-4">
                                    <a href="/company" className="text-white text-base font-medium leading-[1.5]">
                                        About Us
                                    </a>
                                    <a href="#" className="text-white text-base font-medium leading-[1.5]">
                                        Careers
                                    </a>
                                    <a href="#" className="text-white text-base font-medium leading-[1.5]">
                                        Contact
                                    </a>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col gap-4">
                                <p className="text-[#E56024] text-sm font-medium">
                                    [ RESOURCES ]
                                </p>
                                <div className="flex flex-col gap-4">
                                    <a href="#" className="text-white text-base font-medium leading-[1.5]">
                                        Blog
                                    </a>
                                    <a href="#" className="text-white text-base font-medium leading-[1.5]">
                                        Calculator
                                    </a>
                                    <a href="#" className="text-white text-base font-medium leading-[1.5]">
                                        Guides & Checklist
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <img src="/decorative/dark-pink-small.svg" alt="" className="w-full" />
            </div>
            <div className="bg-[#0b0c0f] w-full text-white overflow-hidden px-[60px]">
                <div className="w-full flex flex-col">
                    {/* Top Row - Copyright and Email */}
                    <div className="w-full flex">
                        {/* Left Section - Copyright */}
                        <div className="flex-1 p-[40px]">
                            <p className="text-[14px] font-medium leading-[20px] text-[#9ca3af]">
                                2026 © Kiros Technology Pte Ltd. All Rights Reserved.
                            </p>
                        </div>

                        {/* Right Section - Email */}
                        <div className="flex-1 p-[40px] flex justify-end">
                            <p className="text-[14px] font-medium leading-[20px] text-[#9ca3af]">
                                email: hello@kiros.sg
                            </p>
                        </div>
                    </div>

                    {/* Bottom Row - Watermark */}
                    <div className="w-full p-[10px] pb-0 flex items-center justify-center">
                        <img
                            src="/images/footer-kiros.svg"
                            alt="KIROS"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
