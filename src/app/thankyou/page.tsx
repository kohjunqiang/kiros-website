import { HeroSection } from "@/components/sections/thankyou/HeroSection";
import { NextStepsSection } from "@/components/sections/thankyou/NextStepsSection";
import { Navbar } from "@/components/layout/Navbar";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";

export default function ThankYouPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <AnnouncementBar />
            <Navbar activePage="joinus" />
            <HeroSection />
            <div className="w-full">
                <img src="/decorative/light-blue-small.svg" alt="" className="w-full" />
            </div>
            <NextStepsSection />
            <Footer />
        </main>
    );
}
