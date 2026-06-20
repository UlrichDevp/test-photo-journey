import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto px-[75px] pt-16 lg:pt-24">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
        <div className="max-w-[600px]">
          <div className="inline-flex items-center rounded-full px-10 py-3 text-white font-title text-[18px] bg-gradient-to-r from-[#8F9CD3] to-[#FFCAA4]">
            Photo Journey
          </div>

          <h1 className="mt-6 font-title text-[70px] leading-[80px]">
            Through the Lens: Moroccos Imperial Cities
          </h1>

          <p className="mt-8 text-[18px] leading-[27px] text-black/80">
            Morocco doesn’t just look beautiful. It behaves beautifully in a camera. Light slips through cedar lattices like water. Colors sit confidently next to each other—cobalt against chalk-white, saffron against shadow, without ever feeling too loud.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex w-[125.61px] h-[32.48px] bg-red-500 rounded-[100px] px-[10px] gap-[3px] items-center">
              <Image
                src="/adventure.svg"
                alt="aventure"
                width={20}
                height={20}
                className="w-6.25 h-6.25"
              />
              <span className="text-black/60">Adventures</span>
            </div>
            <span className="text-black/60">Solo</span>
            <span className="className= px-6 py-2 rounded-full bg-[#AD54F0] text-white">
              Africa
            </span>
          </div>

          <div className="mt-8">
            <span className="text-black/80">TransitStay</span>
          </div>
        </div>

        {/* Images ici */}
        <Image
          src="/image1.png"
          alt="Monde"
          width={800}
          height={400}
          className="relative -mt-50 -mr-18"
        />
      </div>
    </section>
  );
}