import Image from "next/image";

export function FeaturesSection() {
    return (
        <div className="w-full bg-[#f1f5f9] px-4 md:px-8 lg:px-[60px] border-b border-[#e2e8f0]">
            <div className="w-full py-[16px] flex justify-center">
                <div className="w-full max-w-[1320px]">
                    <div className="flex flex-wrap items-center justify-center gap-[40px]">
                        {/* AI Extraction */}
                        <div className="flex items-center gap-[4px]">
                            <div className="w-[20px] h-[20px] relative flex-shrink-0">
                                <Image
                                    src="/icons/icon-doc-plus.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="w-full h-full"
                                />
                            </div>
                            <p className="text-[16px] font-medium text-[#4b5563] leading-[1.5] whitespace-nowrap">
                                AI Extraction
                            </p>
                        </div>

                        {/* Optimise */}
                        <div className="flex items-center gap-[4px]">
                            <div className="w-[20px] h-[20px] relative flex-shrink-0">
                                <Image
                                    src="/icons/icon-lightning.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="w-full h-full"
                                />
                            </div>
                            <p className="text-[16px] font-medium text-[#4b5563] leading-[1.5] whitespace-nowrap">
                                Optimise
                            </p>
                        </div>

                        {/* Source Verification */}
                        <div className="flex items-center gap-[4px]">
                            <div className="w-[20px] h-[20px] relative flex-shrink-0">
                                <Image
                                    src="/icons/icon-binoculars.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="w-full h-full"
                                />
                            </div>
                            <p className="text-[16px] font-medium text-[#4b5563] leading-[1.5] whitespace-nowrap">
                                Source Verification
                            </p>
                        </div>

                        {/* Privacy & Compliance */}
                        <div className="flex items-center gap-[4px]">
                            <div className="w-[20px] h-[20px] relative flex-shrink-0">
                                <Image
                                    src="/icons/icon-eye-grey.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="w-full h-full"
                                />
                            </div>
                            <p className="text-[16px] font-medium text-[#4b5563] leading-[1.5] whitespace-nowrap">
                                Privacy & Compliance
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
