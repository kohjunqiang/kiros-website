export function SecuritySection() {
    return (
        <div className="w-full relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/home/home-security.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Content Container */}
            <div className="relative px-[60px]">
                <div className="border-l border-r border-white/15 h-[480px] flex items-end justify-center overflow-hidden">
                    <div className="w-full px-[40px] pb-[40px] pt-[120px] flex items-end justify-between">
                        {/* Title */}
                        <div className="flex flex-col justify-center">
                            <p className="text-[24px] font-semibold text-white text-center tracking-tight leading-[1.1]">
                                Security Specs
                            </p>
                        </div>

                        {/* Security Features */}
                        <div className="flex gap-[40px] items-center">
                            {/* Encryption */}
                            <div className="flex flex-col items-start justify-center">
                                <p className="text-[14px] font-medium text-[#fade79] leading-[20px]">
                                    Encryption
                                </p>
                                <p className="text-[16px] font-medium text-white leading-[24px]">
                                    AES-256 Bank-Grade encryption
                                </p>
                            </div>

                            {/* Access Control */}
                            <div className="flex flex-col items-start justify-center">
                                <p className="text-[14px] font-medium text-[#fade79] leading-[20px]">
                                    Access Control
                                </p>
                                <p className="text-[16px] font-medium text-white leading-[24px]">
                                    Two-Factor Authentication
                                </p>
                            </div>

                            {/* Monitoring */}
                            <div className="flex flex-col items-start justify-center">
                                <p className="text-[14px] font-medium text-[#fade79] leading-[20px]">
                                    Monitoring
                                </p>
                                <p className="text-[16px] font-medium text-white leading-[24px]">
                                    24/7 Threat Monitoring
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
