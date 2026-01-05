import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FormSection } from "@/components/sections/join-us/FormSection";
import { Badge } from "@/components/ui";

export default function JoinUsPage() {
    return (
        <main className="min-h-screen bg-white">
            <AnnouncementBar />
            <Navbar activePage="joinus" />
            <div className="w-full bg-white px-4 md:px-8 lg:px-[60px] border-b border-[#e2e8f0]">
                <div className="w-full border-l border-r border-[#e2e8f0] py-12 md:py-16 lg:py-20 xl:py-[120px] flex justify-center">
                    <div className="w-full max-w-[1320px]">
                        <div className="flex flex-col items-center px-4 md:px-[40px]">
                            <div className="flex flex-col gap-4 items-center max-w-[874px] w-full">
                                <div className="flex flex-col gap-3 items-center w-full">
                                    {/* Badge */}
                                    <Badge text="Join Our Beta" />

                                    {/* Heading */}
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-[1.1] font-semibold text-[#111827] text-center tracking-[-0.03em]">
                                        Apply for Early<br />
                                        Access to Kiros
                                    </h1>
                                </div>

                                {/* Description */}
                                <p className="text-[18px] leading-[1.5] font-medium text-[#4b5563] text-center w-full">
                                    Kiros is in closed beta. We are inviting a small group of committed financial practitioners in Singapore to work closely with us and shape our product roadmap.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FormSection />
            <Footer />
        </main>
    );
}
