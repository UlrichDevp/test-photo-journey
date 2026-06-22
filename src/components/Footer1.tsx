'use client';

import Image from "next/image";
import { useState, useRef, useEffect } from "react";


const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
];
const ChevronDown = ({ open }: { open: boolean }) => (
    <svg
        width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2"
        style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
    >
        <path d="M6 9l6 6 6-6" />
    </svg>
);

function Newsletter() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        if (email.trim()) {
            setSubscribed(true);
            setEmail("");
            setTimeout(() => setSubscribed(false), 3000);
        }
    };



    return (
        <div className="flex flex-col gap-[15px] md:gap-[20px]">
            <h2 className="font-title text-white text-[16px] md:text-[22px] leading-[100%] tracking-[0]">Subscribe To Our Newsletter</h2>
            <p className="md:hidden lg:inline font-body font-light text-[12px] md:text-[16px] leading-[100%] tracking-[0.02em] text-[#FFFFFFCC]">Get travel tips and exclusive offers delivered to your inbox.</p>
            <p className="hidden lg:hidden md:inline font-body font-light text-[12px] md:text-[16px] leading-[100%] tracking-[0.02em] text-[#FFFFFFCC]">Enter your email address to stay updated.</p>
            {/* Input & Bouton */}
            <div className="md:h-[45px] flex items-center py-[2px] rounded-[66.42px] md:rounded-[100px] opacity-100 border-[0.66px] md:border-[1px] border-[#FFFFFF80] pl-[16px] pr-[3px]">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                    placeholder="Enter Email"
                    className="bg-transparent flex-1 outline-none min-w-0 font-body text-[10px] md:text-[12px] leading-[100%] tracking-[0.02em] text-white placeholder-white/30" />
                <button
                    onClick={handleSubscribe}
                    className="px-[7px] md:px-[19px] py-[6px] md:py-[13px] rounded-[66.42px] md:rounded-[100px] font-button text-[10px] lg:text-[12px] leading-[100%] tracking-[0.02em] bg-gradient-to-r from-[#8F9CD3] to-[#FFCAA4] shrink-0 text-white hover:opacity-90 active:scale-95 transition-all">
                    {subscribed ? "Done ✓" : "Subscribe"}
                </button>
            </div>

            {/* Disclaimer */}
            <p className="md:hidden lg:inline font-body font-light text-[12px] md:text-[16px] leading-[100%] tracking-[0.02em] text-[#FFFFFFCC]">
                By subscribing, you agree to receive marketing emails from TransitStay. You can unsubscribe at any time. Read our{" "}
                <a href="#" className="underline text-[#FFFFFFCC] hover:text-white transition-colors duration-200 font-medium">
                    Privacy Policy
                </a>{" "}
                to learn how we handle your data.
            </p>
        </div>
    );
}
function LanguageSelector() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(languages[0]);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} className="relative text-[#FFFFFF99]">
            <button
                onClick={() => setOpen((o) => !o)}
                className="text-[12px] w-[120px] h-[40px] flex items-center justify-center gap-2 border border-[#FFFFFF80] rounded-[100px]  hover:border-white/45 transition-colors duration-200">
                <span className="text-[20px] rounded-[100px]">{selected.flag}</span>
                <span>{selected.label}</span>
                <ChevronDown open={open} />
            </button>

            {open && (
                <div
                    className="absolute bottom-full mb-2 left-0 min-w-full rounded-xl overflow-hidden z-50"
                    style={{ background: "rgba(30,32,48,0.97)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => { setSelected(lang); setOpen(false); }}
                            className="w-full text-[12px] flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors duration-150 text-left">
                            <span>{lang.flag}</span>
                            <span>{lang.label}</span>
                            {selected.code === lang.code && (
                                <svg className="ml-auto" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}


export default function Footer1() {
    return (
        <footer data-testid="footer" className="mt-[106.14px] pt-[63px] md:pt-[106px] lg:[146px] px-[22px]  md:px-[68px] w-full "
            style={{
                background:
                    "linear-gradient(310.6deg, #000000 28.25%, #8E97B4 87.82%), linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2))",
                backgroundBlendMode: "normal",
            }}

        >
            <div className="flex">
                <div className="flex flex-col  w-full">
                    <div className=" flex flex-col gap-[50px] lg:flex-row lg:gap-[98px]">
                        <div className="md:w-[281px] lg:w-7/10  font-body font-light text-[12px]  md:text-[14px] leading-[100%] tracking-[0.02em] text-[#FFFFFFCC] flex flex-col gap-[15px] lg:gap-[23px]">
                            <div className="w-[143px] ml-[8px] md:ml-[3px]">
                                <Image
                                    src="/Logo.svg"
                                    alt="logo"
                                    width={0}
                                    height={0}
                                    className="w-[143px] lg:w-[220px] h-[32px] lg:h-[47.73584747314453px] "
                                />
                            </div>
                            <p className="">Your trusted companion for personalized travel suggestions. You can also get the mobile application</p>
                            <div className="flex justify-between gap-[22px] lg:gap-[18px] mt-[7px] md:mt-[13px] ">
                                <a
                                    href="#"
                                    className="w-full font-title bg-[#FFFFFF33] flex items-center gap-[4px]  rounded-[10px] px-[12px] py-[13px] hover:border-white/50 transition-colors duration-200"

                                >
                                    <Image
                                        src="/apple.svg"
                                        alt="Apple"
                                        width={0}
                                        height={0}
                                        className="w-[22px] h-[26px] "
                                    />
                                    <div className="flex flex-col gap-2">
                                        <p className="text-[10px] leading-[100%] tracking-[0.02em]">Download On</p>
                                        <p className="text-[14px] leading-[100%] tracking-[0.02em]">App Store</p>
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    className="w-full font-title bg-[#FFFFFF33] flex items-center gap-[4px]  rounded-[10px] px-[12px] py-[13px] hover:border-white/50 transition-colors duration-200"

                                >
                                    <Image
                                        src="/playstore.svg"
                                        alt="Apple"
                                        width={0}
                                        height={0}
                                        className="w-[22px] h-[26px] "
                                    />
                                    <div className="flex flex-col gap-2">
                                        <p className="text-[10px] leading-[100%] tracking-[0.02em]">Get It On</p>
                                        <p className="text-[14px] leading-[100%] tracking-[0.02em]">Google Play</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* Quick Links + Contact & Legal*/}
                        <div className="md:hidden lg:flex flex lg:gap-[98px] w-full">
                            <div className="flex-1 flex flex-col gap-[28px] lg:gap-[20px]">
                                <h2 className="font-title text-white text-[16px] lg:text-[22px] leading-[100%] tracking-[0]">Quick Links</h2>
                                <ul className="font-body font-light text-[12px] lg:text-[16px] leading-[100%] tracking-[0.02em] text-[#FFFFFFCC] flex flex-col gap-[15px] lg:gap-[32px]">
                                    <li className=""><a href="#">My Moodboards</a></li>
                                    <li className=""><a href="#">Search Discovery</a></li>
                                    <li className=""><a href="#">Magazine</a></li>
                                    <li className=""><a href="#">About Us</a></li>
                                </ul>
                            </div>
                            <div className="flex-1 flex flex-col gap-[28px] lg:gap-[20px]">
                                <h2 className="font-title text-white text-[16px] lg:text-[22px] leading-[100%] tracking-[0]">Contact & Legal</h2>
                                <ul className="font-body font-light text-[12px] lg:text-[16px] leading-[100%] tracking-[0.02em] text-[#FFFFFFCC] flex flex-col gap-[15px] lg:gap-[32px]">
                                    <li className=""><a href="#">Contact Us</a></li>
                                    <li className=""><a href="#">Security</a></li>
                                    <li className=""><a href="#">Data Deletion</a></li>
                                    <li className=""><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* Newsletter */}
                        <div className="md:w-[365.55px] lg:w-[85%] md:mt-[84px] lg:mt-0">
                            <Newsletter />
                        </div>
                    </div>
                    <div className="mt-[31px] lg:mt-[86px] flex gap-[19.93px] lg:justify-end">
                        <a href="#">
                            <Image
                            src="/insta.svg"
                            alt="instagram"
                            width={0}
                            height={0}
                            className="w-[15.940030097961426px] md:w-[24px] md:h-[24px] lg:w-[26.375px] h-[15.940030097961426px] lg:h-[26.375px] "
                        />
                        </a>
                        <a href="#">
                            <Image
                            src="/facebook.svg"
                            alt="facebook"
                            width={0}
                            height={0}
                            className="w-[15.940030097961426px] md:w-[24px] md:h-[24px] lg:w-[26.375px] h-[15.940030097961426px] lg:h-[26.375px] "
                        />
                        </a>
                        <a href="#">
                            <Image
                            src="/linkdn.svg"
                            alt="linkdn"
                            width={0}
                            height={0}
                            className="w-[15.940030097961426px] md:w-[24px] md:h-[24px] lg:w-[26.375px] h-[15.940030097961426px] lg:h-[26.375px] "
                        />
                        </a>
                        <a href="#">
                            <Image
                            src="/tiktok.svg"
                            alt="tiktok"
                            width={0}
                            height={0}
                            className="w-[15.940030097961426px] md:w-[24px] md:h-[24px] lg:w-[26.375px] h-[15.940030097961426px] lg:h-[26.375px] "
                        />
                        </a>
                    </div>
                </div>
                {/* Quick Links + Contact & Legal for Tablet*/}
                <div className="hidden md:flex lg:hidden flex justify-end  w-full">
                    <div className="flex flex-col gap-[64px] ">
                        <div className=" flex flex-col gap-[19px] ">
                            <h2 className="font-title text-white text-[22px]  leading-[100%] tracking-[0]">Quick Links</h2>
                            <ul className="font-body font-light text-[16px]  leading-[100%] tracking-[0.02em] text-[#FFFFFFCC] flex flex-col gap-[32px]">
                                <li className=""><a href="#">Account</a></li>
                                <li className=""><a href="#">Search Discovery</a></li>
                                <li className=""><a href="#">Get Mobile App</a></li>
                                <li className=""><a href="#">FAQs</a></li>
                                <li className=""><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className=" flex flex-col gap-[19px] ">
                            <h2 className="font-title text-white text-[22px]  leading-[100%] tracking-[0]">More</h2>
                            <ul className="font-body font-light text-[16px]  leading-[100%] tracking-[0.02em] text-[#FFFFFFCC] flex flex-col gap-[32px]">
                                <li className=""><a href="#">Careers</a></li>
                                <li className=""><a href="#">Press</a></li>
                                <li className=""><a href="#">Affiliates</a></li>
                                <li className=""><a href="#">How we work</a></li>
                                <li className=""><a href="#">Security</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*divider */}
            <div className="border-t border-[#FFFFFF80] border-[1px] mt-[45.06px] md:mt-[99.5px] lg:mt-[107px]"></div>
            <div className="mt-[48px] pb-[74px] md:pb-[94px] lg:pb-[211px] flex flex-col items-center gap-[45px] md:gap-[30px] lg:flex-row lg:justify-between">
                <div className="flex flex-col items-center gap-[20px] md:flex-row md:justify-between font-body font-light text-[12px] lg:text-[16px] leading-[100%] tracking-[0.02em] text-[#FFFFFF99]">
                    <a className="">© 2025 TransitStay. All rights reserved.</a>
                    <a className="hidden md:inline lg:hidden">Terms & Conditions</a>
                    <a className="md:hidden lg:inline">Terms Of Service</a>
                    <a className="hidden md:inline lg:hidden">privacy policy</a>
                </div>
                <div className="">
                    <LanguageSelector />
                </div>
            </div>
        </footer>
    )
}