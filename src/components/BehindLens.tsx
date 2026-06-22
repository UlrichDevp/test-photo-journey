'use client';

import Image from "next/image";

export default function BehindLens() {
    return (
        <section data-testid="behind-lens" className="mb-[8px] mt-[93px] flex flex-col items-center gap-[39px] md:gap-[32px] lg:gap-[72px] mx-[20px] md:mx-[39px] lg:mx-[75px]">
            <h1 className="font-title text-[30px] md:text-[40px] lg:text-[50px] leading-[100%] font-medium text-center">Behind The Lens</h1>
            <div className="flex flex-col items-center ">
                <div className=" flex flex-col lg:flex-row gap-[38px] md:gap-[43px] lg:gap-[55px]">
                    <div className="lg:h-[258px] bg-gradient-to-r from-[#8F9CD3] to-[#FFCAA4] p-[0.17px] lg:p-[0.35px] rounded-[9.56px] md:rounded-[20px] ">
                        <div className="lg:h-full flex justify-between items-center px-[12px] md:px-[23px] lg:pr-[24px]  lg:pl-[16px] md:py-[22px] py-[19px] bg-white  rounded-[9.56px] md:rounded-[20px] shadow-[0_4.3px_9.56px_0_#E0E0E01A,0_17.69px_17.69px_0_#E0E0E017,0_39.21px_23.43px_0_#E0E0E00D,0_69.82px_28.21px_0_#E0E0E003,0_109.51px_30.6px_0_#E0E0E000]">
                            <div className="flex flex-col w-[215.6px] md:w-[454px] lg:w-[408px]">
                                <div className="flex items-center ">
                                    {/* image youtube */}
                                    <Image
                                        src="/youtube.svg"
                                        alt="youtube"
                                        width={0}
                                        height={0}
                                        className="w-[30px] h-[30px] md:w-[71px] md:h-[71px]"
                                    />
                                    <span className="font-body text-[9.38px] md:text-[22px] leading-[100%]">YouTube</span>
                                </div>
                                <h1 className="mt-[4px] md:mt-[6px]  font-title text-[12px] md:text-[22px] leading-[100%]">Essential Viewing: Capturing magic moments</h1>
                                <p className="mt-[8px] md:mt-[20px]  text-[10px] md:text-[15px] text-[#AFAFAF] font-body leading-[100%]">Experience the tranquil beauty of Santorini sunrise through this calming 20mins video. Perfect for planning your morning routine or simply finding inner peace.</p>
                            </div>
                            <div className=" w-[84px]md:w-[145px] lg:w-[129px]">
                                {/* image ville bleue */}
                                <Image
                                    src="/article2.png"  
                                    alt="ville"
                                    width={60}
                                    height={90}
                                    className="w-[84px] h-[130px] md:w-[145px]  md:h-[215px] rounded-[120.52px] shadow-[0_4.42px_8.84px_0_#0000001A,0_15.47px_15.47px_0_#00000017,0_35.35px_20.99px_0_#0000000D,0_62.97px_25.41px_0_#00000003,0_98.32px_27.62px_0_#00000000]" />
                            </div>
                        </div>
                    </div>

                    <div className=" flex flex-col text-[#595959] gap-[36px] md:gap-[40px] lg:w-[635px]">
                        <p className="font-body font-normal text-[14px] md:text-[16px] leading-[21px] lg:text-[18px] lg:leading-[27px] tracking-normal">Imperial cities are like living museums. Ancient walls and modern sneakers.Donkey carts beside scooters. Centuries-old craft tools next to QR-code payments. Don’t try to remove those contrasts. Use them to tell the truth of the place. The most powerful <a href="#" className="font-body font-medium italic text-[14px] md:text-[16px] leading-[27px] tracking-normal underline decoration-solid bg-gradient-to-r from-[#AD54F0] via-[#AD54F0] to-[#D24DBC] bg-clip-text text-transparent">This is an internal link</a> travel images show time stacked on time.</p>
                        <div className="">
                            <span className="font-body font-bold text-[14px] md:text-[16px] lg:text-[18px] lg:leading-[27px] leading-[21px] md:leading-[24px] tracking-normal">Respect comes before the shot</span>
                            <p className="font-body font-normal text-[14px] md:text-[16px] lg:text-[18px] lg:leading-[27px] leading-[21px] md:leading-[24px] tracking-normal">If you want portraits, ask politely. A smile, a greeting, and a short gesture are often enough. In Morocco, some people enjoy being photographed, others don’t—and that’s completely fair. If someone says no (or looks uncomfortable), step away. You’ll still find incredible photos everywhere, and the images you do capture will feel lighter because they were taken with respect.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )

}