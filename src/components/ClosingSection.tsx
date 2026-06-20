'use client';

import Image from "next/image";

export default function ClosingSection() {
    return (
        <section className="mt-[80px] md:mt-[134px] lg:mt-[197px] flex flex-col gap-[23px] md:gap-[30px] lg:gap-[28px] mx-[14px] md:mx-[41px] lg:mx-[315px]">
            <h1 className="md:mx-[53px] lg:mx-[23px] font-title text-[30px] md:text-[40px] lg:text-[50px] leading-[37px] lg:leading-[55px] font-medium text-center">Closing: Morocco as a Photographic Teacher</h1>
            <div className="mx-[29px] md:mx-[75px] lg:mx-0 text-[#595959] font-body font-normal text-[14px] md:text-[16px] leading-[21px] lg:text-[18px] lg:leading-[27px] tracking-normal">
                <p className="">1)Marrakech is bold: terracotta walls, palm shadows, buzzing souks, and the famous energy of Jemaa el-Fnaa. It’s the city where photography becomes choreography—your timing matters as much as your framing..  What to photograph in Marrakech. Jemaa el-Fnaa: the heartbeat. This square changes constantly. In daylight, it’s open and bright. At sunset, it turns cinematic: smoke from grills rises, lanterns glow, crowds thicken, and the sky shifts into purple-blue. Shoot wide to show scaleShoot tight to isolate gestures: hands serving tea, steam, faces lit by warm bulbs. Try motion blur to show movement (even a slight blur can add energy)</p>
                <p className="">If you can, find a rooftop café view. From above, the square becomes a living pattern—circles of crowds, lines of movement, pulses of light.</p>
            </div>
            <div className="mt-[31px] md:mt-[49px] lg:mt-[21px] mb-[31px] md:mb-[41px] lg:mb-[26px] w-[347px] md:w-[568px] mx-auto">
                <Image
                    src="/closing.png"
                    alt="closing"
                    width={0}
                    height={0}
                    className="w-[347px] md:w-[568px] h-[262.69366455078125px] md:h-[430px] rounded-[244.37px] md:rounded-[400px] shadow-[0px_4px_8px_0px_#0000001A,0px_14px_14px_0px_#00000017,0px_32px_19px_0px_#0000000D,0px_57px_23px_0px_#00000003,0px_89px_25px_0px_#00000000]"
                />
            </div>
            <div className=" ml-[3px] md:mx-0 lg:mx-[7px] mr-[6px] text-[#595959] font-body font-normal text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] lg:text-[18px] lg:leading-[27px] tracking-normal">
                <h2 className="font-bold">2)Souks: color with control</h2>
                <p className="">Markets are packed with texture: spices, slippers, textiles, lanterns. Your job is to bring order to the visual overload. Choose one “anchor” subject (like a stack of saffron or a wall of lanterns. Use hanging rugs as a backgroundWait for one person to step into the frame—<span className="text-white bg-gradient-to-r from-[#AD54F0] to-[#D24DBC] rounded-[6px]">human + texture = story.</span>  Riads: calm after the storm Riads are interior gardens with fountains, tiled walls, and symmetry. Perfect for clean, elegant photos.Stand centered for symmetry. Capture reflections in water. Shoot details: carved wood, brass handles, mosaic edges. Gardens and graphic lines (if you visit them)</p>
                <p className="mt-[24px]">Places like Jardin Majorelle (or other gardens) are a playground for composition. Focus on color-blocking: blue wall + green plants. Use negative space for minimalist images. Shoot leaves and shadows like abstract art Marrakech photo challenge. Make a 12-shot sequence called “From Noise to Silence.” Start in the busiest place you can find, and end in the quietest courtyard you can access. That sequence alone can become your article’s visual spine. </p>
            </div>
        </section>
    )
}