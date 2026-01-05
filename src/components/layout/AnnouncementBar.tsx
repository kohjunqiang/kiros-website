import Image from "next/image";
import Link from "next/link";

const imgFrame = "/icons/icon-megaphone.svg";

export function AnnouncementBar() {
    return (
        <div className="bg-[#fade79] border-slate-200 border-b flex gap-2 items-center justify-center px-4 md:px-[60px] py-2 w-full text-sm md:text-base">
            <div className="flex items-center gap-2 shrink-0">
                <div className="relative size-7 shrink-0">
                    <Image
                        src={imgFrame}
                        alt="Icon"
                        fill
                        className="object-contain"
                    />
                </div>
                <p className="font-medium text-gray-900 text-center">
                    Announcement:
                </p>
            </div>
            <div className="hidden md:flex items-center text-center">
                <p className="text-gray-900">
                    <span>We have officially launched BETA on 1 Jan 2026. Be part of our first cohort. </span>
                    <Link href="#" className="font-medium text-sky-600 underline decoration-solid hover:text-sky-700">
                        Request for early access.
                    </Link>
                </p>
            </div>
            {/* Mobile abbreviated version if needed, or just stack/hide. For now sticking to design but adding responsiveness */}
            <div className="md:hidden flex items-center text-center">
                <Link href="#" className="font-medium text-sky-600 underline decoration-solid">
                    Request early access
                </Link>
            </div>
        </div>
    );
}
