import Image from "next/image";

export function DashboardPreview() {
    return (
        <div className="w-full bg-[#fcc1b6] px-4 md:px-[60px]">
            <div className="w-full pt-[80px] pb-[80px] overflow-hidden" style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.15)', borderRight: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <div className="w-full px-[140px] -mb-[80px]">
                    {/* Dashboard Image */}
                    <div
                        className="relative w-full bg-white overflow-hidden"
                        style={{
                            borderRadius: '12px 12px 0 0',
                            border: '9.28px solid #1F1F1F',
                            borderBottom: 'none',
                            boxShadow: '0 -35.009px 153.503px 0 rgba(0, 0, 0, 0.10), 0 -102.335px 107.721px 0 rgba(255, 255, 255, 0.10), 0 220.829px 336.629px 0 rgba(0, 0, 0, 0.15), 0 99.642px 99.642px 0 rgba(0, 0, 0, 0.25)'
                        }}
                    >
                        <Image
                            src="/images/home/home-preview.png"
                            alt="Dashboard Preview"
                            width={1160}
                            height={725}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
