import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MissionStatement } from "@/components/sections/company/MissionStatement";
import { StorySection } from "@/components/sections/company/StorySection";
import { PhilosophySection } from "@/components/sections/company/PhilosophySection";
import { LeadershipSection } from "@/components/sections/company/LeadershipSection";
import { BetaSection } from "@/components/layout/BetaSection";

export default function CompanyPage() {
    return (
        <main className="min-h-screen bg-[#0b0c0f]">
            <AnnouncementBar />
            <Navbar variant="dark" activePage="company" />
            <MissionStatement />
            <div className="w-full bg-[#0b0c0f]">
                <div className="w-full border-t border-[rgba(226,232,240,0.15)]">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left Image */}
                        <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                            <img
                                src="/images/company/company-1.png"
                                alt="Financial advisers meeting"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>

                        {/* Right Image */}
                        <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                            <img
                                src="/images/company/company-2.png"
                                alt="Financial advisers meeting"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <StorySection />
            <PhilosophySection />
            <LeadershipSection />
            <BetaSection />
            <Footer />
        </main>
    );
}
