'use client';

import Image from "next/image";

export default function FezSection() {
    return (
        <section data-testid="fez-section" className="mt-[66px] md:mt-[100px] lg:mt-0 mx-[21px] md:mx-[82px] lg:mx-[77px] flex flex-col gap-[24px] md:gap-[25px] lg:gap-[28px]">
            <h1 className="font-title text-[30px] md:text-[40px] lg:text-[50px] leading-[100%] font-medium text-center lg:text-start">Fez: The City of Detail</h1>
            <div className="flex flex-col lg:flex-row lg:gap-0 gap-[73px] md:gap-[56px]">
                <div className=" text-[#595959] lg:flex-1 lg:pr-[100px]">
                    <p className="font-body font-normal text-[16px] lg:text-[18px] lg:leading-[27px] leading-[24px] tracking-normal">If Marrakech is a drumbeat, Fez is a whisper—an intricate, intelligent city built for slow looking. It has one of the world’s most complex medinas, where narrow alleys twist into tiny squares, workshops spill into streets, and carved doors appear like secret portals.</p>
                    <p className="font-body font-normal text-[16px] lg:text-[18px] lg:leading-[27px] leading-[24px] tracking-normal">What to photograph in Fez.  Medina geometry. Fez’s lanes are a </p>
                    <div className="md:flex gap-2 md:gap-4">
                        <div className="flex gap-2 ">
                            <span className="font-body text-[#595959] font-normal text-[16px] lg:text-[18px] lg:leading-[27px] leading-[24px] tracking-normal">dream for</span>
                        <a href="#" className="flex items-center gap-2 font-body font-medium italic text-[16px] leading-[24px] lg:leading-[27px] tracking-normal underline decoration-solid bg-gradient-to-r from-[#AD54F0] via-[#AD54F0] to-[#D24DBC] bg-clip-text text-transparent"> 
                            This is an external link
                            <Image
                                src="/lien.svg"
                                alt="lien"
                                width={20}
                                height={20}
                                className="w-[11.09px] h-[11.09px]"
                            />
                        </a>
                        </div>
                        <span className="font-body text-[#595959] font-normal text-[16px] lg:text-[18px] lg:leading-[27px] leading-[24px] tracking-normal">this composition.</span>
                    </div>
                        
                    
                    <p className="font-body font-normal text-[16px] lg:text-[18px] lg:leading-[27px] leading-[24px] tracking-normal">A simple trick: place your camera at chest height, keep your frame level, and let the city’s architecture do the work. Fez is naturally cinematic.Zellige (tilework) and artisan surfaces. Tiles here aren’t decoration—they’re language. Look for mosaic fountains, courtyard walls, and doorframes. Get close for texture shots and pull back for structure.</p>
                    <p className="font-body font-normal text-[16px] lg:text-[18px] lg:leading-[27px] leading-[24px] tracking-normal mt-[24px]"> <b>Tip:</b> the smell can be strong—many visitors use mint sprigs offered nearby. Workshop portraits in dramatic light. Craft workshops often have beautiful lighting: beams through small windows, dust floating in the air, warm tones bouncing off wood and metal. If you’re invited in (or given permission), shoot gently. Expose for highlights to keep the “light beam” mood. Capture hands, tools, and faces in partial shadow. Focus on gestures: measuring, cutting, threading, polishing.</p>
                </div>
                <div className="lg:flex-1 flex items-center justify-center gap-[7.6px] md:gap-[14px]">
                    <Image
                        src="/mountain11.png"
                        alt="mountain1"
                        width={0}
                        height={0}
                        className="w-[194.64px] md:w-[356px] h-[292.51px] md:h-[535px] rounded-[109px] md:rounded-[200px]"
                    />
                    <Image
                        src="/mountain2.png"
                        alt="mountain2"
                        width={0}
                        height={0}
                        className="w-[142.70px] md:w-[261px] h-[142.70px] md:h-[261px] rounded-[164.02px] md:rounded-[300px]"
                    />
                </div>
            </div>

        </section>
    )
}