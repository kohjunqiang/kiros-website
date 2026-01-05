import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { StatsSection } from "@/components/sections/home/StatsSection";
import { DashboardPreview } from "@/components/sections/home/DashboardPreview";
import { PastWaySection } from "@/components/sections/home/PastWaySection";
import { KirosWaySection } from "@/components/sections/home/KirosWaySection";
import { ROISection } from "@/components/sections/home/ROISection";
import { AccuracySection } from "@/components/sections/home/AccuracySection";
import { StrategicSection } from "@/components/sections/home/StrategicSection";
import { ComplianceSection } from "@/components/sections/home/ComplianceSection";
import { SecuritySection } from "@/components/sections/home/SecuritySection";
import { FAQSection } from "@/components/sections/home/FAQSection";
import { BetaSection } from "@/components/layout/BetaSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <AnnouncementBar />
            <Navbar />
            <HeroSection />
            <StatsSection />
            <DashboardPreview />
            <PastWaySection />
            <KirosWaySection />
            <div className="w-full">
                <img src="/decorative/dark-blue-large.svg" alt="" className="w-full" />
            </div>
            <ROISection />
            <AccuracySection />
            <StrategicSection />
            <ComplianceSection />
            <div className="w-full">
                <img src="/decorative/dark-blue-large.svg" alt="" className="w-full" />
            </div>
            <SecuritySection />
            <FAQSection />
            <BetaSection />
            <Footer />
        </main>
    );
}
