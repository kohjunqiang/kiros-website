import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/features/HeroSection";
import { FeaturesSection } from "@/components/sections/features/FeaturesSection";
import { ExtractionSection } from "@/components/sections/features/ExtractionSection";
import { AssistedSection } from "@/components/sections/features/AssistedSection";
import { SourceVerificationSection } from "@/components/sections/features/SourceVerificationSection";
import { ShareSection } from "@/components/sections/features/ShareSection";
import { BetaSection } from "@/components/layout/BetaSection";

export default function FeaturesPage() {
    return (
        <main className="min-h-screen bg-white">
            <AnnouncementBar />
            <Navbar activePage="features" />
            <HeroSection />
            <FeaturesSection />
            <ExtractionSection />
            <div className="w-full">
                <img src="/decorative/light-blue-small.svg" alt="" className="w-full" />
            </div>
            <AssistedSection />
            <div className="w-full">
                <img src="/decorative/light-blue-small.svg" alt="" className="w-full" />
            </div>
            <SourceVerificationSection />
            <div className="w-full">
                <img src="/decorative/light-blue-small.svg" alt="" className="w-full" />
            </div>
            <ShareSection />
            <div className="w-full">
                <img src="/decorative/light-blue-small.svg" alt="" className="w-full" />
            </div>
            <BetaSection />
            <Footer />
        </main>
    );
}
