'use client';

import Image from "next/image";

export default function InstaCard() {
    return (
        <section data-testid="instagram-cards" className="mt-[71px] mx-[15px] md:mx-[42px] lg:mx-[159px] flex flex-col gap-[40px] md:flex-row items-center">
            <div className="flex justify-center">
                <Image
                    src="/instaimg1.svg"
                    alt="InstaImg"
                    width={0}
                    height={0}
                    className="w-[217.0267333984375px] lg:h-[579px] h-[352.9732666015625] lg:w-[356px] lg:rounded-[200px]"
                />
            </div>
            <div className="flex flex-col gap-[21px] lg:gap-[39px]">
                <div className=" bg-gradient-to-r from-[#8F9CD3] to-[#FFCAA4] p-[0.18px] rounded-[10.11px] md:rounded-[12.19px] lg:rounded-[20px]">
                    <div className="lg:h-full gap-[16px] md:gap-[47.13px] lg:gap-[78px] flex justify-between  items-center px-[12px] md:px-[18px] lg:px-[38px] lg:py-[37px] md:py-[22px] py-[13px] bg-white  rounded-[10.11px] md:rounded-[12.19px] lg:rounded-[20px] shadow-[0_4.3px_9.56px_0_#E0E0E01A,0_17.69px_17.69px_0_#E0E0E017,0_39.21px_23.43px_0_#E0E0E00D,0_69.82px_28.21px_0_#E0E0E003,0_109.51px_30.6px_0_#E0E0E000]">
                        <div className="flex flex-col w-[237px] md:w-[265px] lg:w-[434px]">
                            <div className="flex items-center gap-1">
                                {/* image youtube */}
                                <Image
                                    src="/instagram.svg"
                                    alt="instagram"
                                    width={0}
                                    height={0}
                                    className="w-[26.28337860107422px] md:w-[31.70053482055664] lg:w-[52px] h-[26.28337860107422px] md:h-[31.70053482055664px] lg:h-[52px]"
                                />
                                <span className="font-body text-[11.12px] md:text-[13.41px] lg:text-[22px] leading-[100%]">instagram</span>
                            </div>
                            <h1 className="mt-[6px] md:mt-[6px]  font-title text-[12px] md:text-[13.41px] lg:text-[22px] leading-[100%]">Sunrise Over Aegean: A peaceful meditation</h1>
                            <p className="mt-[8px] md:mt-[12px] w-9/10 md:w-95/100  text-[8px] md:text-[9.14px] lg:text-[15px] text-[#AFAFAF] font-body leading-[100%]">Experience the tranquil beauty of Santorini sunrise through this calming 20mins video. Perfect for planning your morning routine or simply finding inner peace.</p>
                        </div>
                        <div className=" w-[65px] md:w-[90.83422088623047] lg:w-[149px]">
                            {/* image ville bleue */}
                            <Image
                                src="/instaimg2.png"
                                alt="ville"
                                width={0}
                                height={0}
                                className="w-[65px] md:w-[90.83422088623047] lg:w-[149px] h-[94px] lg:h-[186px] md:h-[113.39037322998047] rounded-[120.52px] lg:rounded-[200px] shadow-[0_4.42px_8.84px_0_#0000001A,0_15.47px_15.47px_0_#00000017,0_35.35px_20.99px_0_#0000000D,0_62.97px_25.41px_0_#00000003,0_98.32px_27.62px_0_#00000000]" />
                        </div>
                    </div>
                </div>
                <div className=" bg-gradient-to-r from-[#8F9CD3] to-[#FFCAA4] p-[0.18px] rounded-[10.11px] md:rounded-[12.19px] lg:rounded-[20px]">
                    <div className="lg:h-full gap-[16px] md:gap-[47.13px] lg:gap-[78px] flex justify-between  items-center px-[12px] md:px-[18px] lg:px-[38px] lg:py-[37px] md:py-[22px] py-[13px] bg-white  rounded-[10.11px] md:rounded-[12.19px] lg:rounded-[20px] shadow-[0_4.3px_9.56px_0_#E0E0E01A,0_17.69px_17.69px_0_#E0E0E017,0_39.21px_23.43px_0_#E0E0E00D,0_69.82px_28.21px_0_#E0E0E003,0_109.51px_30.6px_0_#E0E0E000]">
                        <div className="flex flex-col w-[237px] md:w-[265px] lg:w-[434px]">
                            <div className="flex items-center gap-1">
                                {/* image youtube */}
                                <Image
                                    src="/instagram.svg"
                                    alt="instagram"
                                    width={0}
                                    height={0}
                                    className="w-[26.28337860107422px] md:w-[31.70053482055664] lg:w-[52px] h-[26.28337860107422px] md:h-[31.70053482055664px] lg:h-[52px]"
                                />
                                <span className="font-body text-[11.12px] md:text-[13.41px] lg:text-[22px] leading-[100%]">instagram</span>
                            </div>
                            <h1 className="mt-[6px] md:mt-[6px]  font-title text-[12px] md:text-[13.41px] lg:text-[22px] leading-[100%]">Sunrise Over Aegean: A peaceful meditation</h1>
                            <p className="mt-[8px] md:mt-[12px] w-9/10 md:w-95/100  text-[8px] md:text-[9.14px] lg:text-[15px] text-[#AFAFAF] font-body leading-[100%]">Experience the tranquil beauty of Santorini sunrise through this calming 20mins video. Perfect for planning your morning routine or simply finding inner peace.</p>
                        </div>
                        <div className=" w-[65px] md:w-[90.83422088623047] lg:w-[149px]">
                            {/* image ville bleue */}
                            <Image
                                src="/instaimg2.png"
                                alt="ville"
                                width={0}
                                height={0}
                                className="w-[65px] md:w-[90.83422088623047] lg:w-[149px] h-[94px] lg:h-[186px] md:h-[113.39037322998047] rounded-[120.52px] lg:rounded-[200px] shadow-[0_4.42px_8.84px_0_#0000001A,0_15.47px_15.47px_0_#00000017,0_35.35px_20.99px_0_#0000000D,0_62.97px_25.41px_0_#00000003,0_98.32px_27.62px_0_#00000000]" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}