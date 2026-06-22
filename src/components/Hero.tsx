import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative lg:max-w-[1440px] flex flex-col md:flex mx-auto  md:pl-[40px] lg:pl-[75px] pl-[16px] ">
      <div className="bg-[#EEF3FE] lg:pt-45 md:pt-25 pt-65 pr-25 flex flex-col absolute gap-3 lg:gap-4 justify-center items-center top-[-290px] left-[74px] md:top-[-230.37px] md:left-[540px] lg:top-[-350px] lg:left-[900px] w-[270.06896725634346px] h-[522.4482984440185px] rounded-[243.86px] opacity-100 transform rotate-[-62.98deg] md:rotate-[-24.75deg] lg:rotate-[-18.21deg] md:h-[597.4422691920159px] md:w-[336.2973px] lg:w-[602.9721870899572px] lg:h-[1071.1981540865847px] md:rounded-[278.87px] lg:rounded-[500px]">
        <Image
          src="/image1.svg"
          alt="globe"
          width={0}
          height={0}
          className="lg:w-[324px] w-[150.02px] h-[150.02px] md:w-[180.71px] lg:h-[324px] md:h-[180.71px] rounded-[179.69px] md:rounded-[205.48px] lg:rounded-[368.42px]  shadow-[0px_4.42px_8.84px_0px_#0000001A,0px_15.47px_15.47px_0px_#00000017,0px_35.35px_20.99px_0px_#0000000D,0px_62.97px_25.41px_0px_#00000003,0px_98.32px_27.62px_0px_#00000000]"
        />
        <Image
          src="/image2.png"
          alt="ville"
          width={0}
          height={0}
          className="lg:w-[198.86px] w-[96.99px] h-[96.99px] md:w-[110.91px] lg:h-[198.86px] md:h-[110.91px] lg:rounded-[120.52px] md:rounded-[67.22px] rounded-[58.78px] shadow-[0px_4.42px_8.84px_0px_#0000001A,0px_15.47px_15.47px_0px_#00000017,0px_35.35px_20.99px_0px_#0000000D,0px_62.97px_25.41px_0px_#00000003,0px_98.32px_27.62px_0px_#00000000]"
        />
      </div>
      <div className="mt-[193px]  md:w-[72%] lg:w-6/10 md:mt-[32px] lg:mt-[81px] flex flex-col gap-[17px] pr-[16px]">
        <button className="text-center w-[155px] md:w-[189px] h-[40px] md:h-[47px] lg:h-[49px] rounded-[100px] font-title lg:text-[20px] text-[14px] md:text-[18px] text-white  bg-gradient-to-r from-[#8F9CD3] to-[#FFCAA4] shrink-0 text-white hover:opacity-90 active:scale-95 transition-all">Photo Journey</button>
        <h1 className="font-title mt-[12px]  font-normal text-[40px] md:text-[60px] lg:text-[70px]  leading-[40px] md:leading-[60px] lg:leading-[80px] tracking-normal [leading-trim:none]">Through the Lens: Moroccos Imperial Cities</h1>
        <p className="font-body md:w-89/100 text-[#595959] font-normal text-[14px] md:text-[16px] leading-[21px] lg:text-[18px] lg:leading-[27px] tracking-normal">Morocco doesn’t just look beautiful. It behaves beautifully in a camera. Light slips through cedar lattices like water. Colors sit confidently next to each other—cobalt against chalk-white, saffron against shadow, without ever feeling too loud. </p>
        <div className="flex mt-[8px] md:mt-[11px] lg:mt-[34px] gap-[11.55px] md:gap-[16px] font-body text-[#00000099] font-normal text-[15px] md:text-[20px] md:leading-[44.81px] leading-[32.11px] tracking-[0em] text-center [leading-trim:cap-height]">
          <div className="w-[125.607px]  md:w-[174px] h-[32.48466110229492px] md:h-[45px] rounded-[72.19px] bg-[#F2F2F2] flex gap-[5px] items-center justify-center">
            <Image
              src="/adventure.svg"
              alt="adventure"
              width={0}
              height={0}
              className="w-[19px] h-[19px] md:w-[25px] m-h-[25px]"
            />
            <span className="">Adventures</span>
          </div>
          <div className="w-[74.3537826538086px] md:w-[103px] h-[32.48466110229492px] md:h-[45px] rounded-[72.19px] bg-[#F2F2F2] flex gap-[5px] items-center justify-center">
            <Image
              src="/solo.svg"
              alt="solo"
              width={0}
              height={0}
              className="w-[19px] h-[19px] md:w-[25px] m-h-[25px]"
            />
            <span className="">Solo</span>
          </div>
          <div className="w-[89.51329040527344px] md:w-[124px] h-[32.48466110229492px] md:h-[45px] rounded-[58.38px] bg-[#AD54F0] flex gap-[5px] items-center justify-center">
            <Image
              src="/elephant.svg"
              alt="elephant"
              width={0}
              height={0}
              className="w-[19px] h-[19px] md:w-[25px] m-h-[25px]"
            />
            <span className="text-white">Africa</span>
          </div>
        </div>
        <div className="flex items-center gap-[16px] md:gap-[28px] py-[4.33px] md-py-[6px] font-body text-[#000000CC] font-normal text-[11.55px] md:text-[16px] leading-[1] tracking-[0em] text-center [leading-trim:none]">
          <div className="flex items-center gap-[9.38px] md:gap-[13px]">
            <Image
              src="/profile.svg"
              alt="profile"
              width={0}
              height={0}
              className="w-[27.431493759155273px] md:w-[38px] h-[27.431493759155273px] md:h-[38px]  "
            />
            <span className="">TransitStay</span>
          </div>
          <div className="w-[5.0531697273254395px] h-[5.0531697273254395px] md:w-[7px] md:h-[7px] rounded-[100px] bg-black"></div>
          <span className="">12 min read</span>
          <div className="w-[5.0531697273254395px] h-[5.0531697273254395px] rounded-[100px] bg-black"></div>
          <span className="">August 20, 2025</span>
        </div>
      </div>
    </section>
  );
} 