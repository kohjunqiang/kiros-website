import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface NavbarProps {
    variant?: 'light' | 'dark';
    activePage?: 'features' | 'company' | 'compliance' | 'resources' | 'joinus';
}

export function Navbar({ variant = 'light', activePage }: NavbarProps) {
    const isDark = variant === 'dark';
    return (
        <div className={`border-b flex items-center justify-center py-4 px-4 md:px-[60px] w-full relative z-50 ${isDark
            ? 'bg-[#0b0c0f] border-[rgba(226,232,240,0.15)]'
            : 'bg-white border-slate-200'
            }`}>
            <div className="flex items-center justify-between w-full max-w-[1320px]">
                {/* Logo Section */}
                <Link href="/" className="flex items-center relative h-8">
                    <Image
                        src={isDark ? "/logos/blueWhiteLogo.svg" : "/logos/blueLogo.svg"}
                        alt="KIROS Logo"
                        width={119}
                        height={32}
                        className="object-contain h-full w-auto"
                        priority
                    />
                </Link>

                {/* Navigation Links - Hidden on mobile */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/features"
                            className={`text-[16px] font-medium leading-[24px] transition-colors ${activePage === 'features'
                                ? 'text-[#e56024]'
                                : isDark
                                    ? 'text-[#9ca3af] hover:text-[#f2f2ed]'
                                    : 'text-[#6b7280] hover:text-[#111827]'
                                }`}
                        >
                            Features
                        </Link>
                        <Link
                            href="#"
                            className={`text-[16px] font-medium leading-[24px] transition-colors ${activePage === 'compliance'
                                ? 'text-[#e56024]'
                                : isDark
                                    ? 'text-[#9ca3af] hover:text-[#f2f2ed]'
                                    : 'text-[#6b7280] hover:text-[#111827]'
                                }`}
                        >
                            Compliance
                        </Link>
                        <Link href="/company" className="flex items-center gap-1 group">

                            <ChevronRight className="size-4 text-[#94a3b8]" />

                            <span className={`text-[16px] font-medium leading-[24px] transition-colors ${activePage === 'company'
                                ? 'text-[#e56024]'
                                : isDark
                                    ? 'text-[#9ca3af] hover:text-[#f2f2ed]'
                                    : 'text-[#6b7280] hover:text-[#111827]'
                                }`}>
                                Company
                            </span>
                        </Link>
                        <div className="flex items-center gap-1 group cursor-pointer">

                            <ChevronRight className="size-4 text-[#94a3b8]" />

                            <span className={`text-[16px] font-medium leading-[24px] transition-colors ${activePage === 'resources'
                                ? 'text-[#e56024]'
                                : isDark
                                    ? 'text-[#9ca3af] hover:text-[#f2f2ed]'
                                    : 'text-[#6b7280] hover:text-[#111827]'
                                }`}>
                                Resources
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                        <Link
                            href="#"
                            className={`px-4 py-2 rounded-md font-medium text-[16px] leading-[24px] transition-colors ${isDark
                                ? 'bg-[rgba(255,255,255,0.15)] border border-[rgba(226,232,240,0.1)] text-white hover:bg-[rgba(255,255,255,0.2)]'
                                : 'border border-slate-200 text-[#111827] hover:bg-gray-50'
                                }`}
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/join-us"
                            className={`px-4 py-2 rounded-md font-medium text-[16px] leading-[24px] shadow-sm transition-colors ${isDark
                                ? 'bg-white text-[#e56024] hover:bg-gray-100'
                                : 'bg-[#0b0c0f] text-white hover:bg-gray-800'
                                }`}
                        >
                            Apply for Beta Access
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
