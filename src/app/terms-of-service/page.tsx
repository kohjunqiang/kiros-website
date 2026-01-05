import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/termsofservice/HeroSection";
import { DetailsSection } from "@/components/sections/termsofservice/DetailsSection";


export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <AnnouncementBar />
            <Navbar />
            <HeroSection />
            <div className="w-full">
                <img src="/decorative/light-blue-small.svg" alt="" className="w-full" />
            </div>
            <DetailsSection />
            <Footer />
        </main>
    );
}
