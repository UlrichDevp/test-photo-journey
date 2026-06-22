"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function CarouselButtons({
  onPrevious,
  onNext,
}: CarouselButtonsProps) {
  return (
    <>
      {/* Previous */}
      <button
        type="button"
        aria-label="Previous article"
        onClick={onPrevious}
        className="
          absolute
          left-0
          top-1/4
          left-[12.89px]
          z-20
          flex
          h-[52px]
          w-[52px]
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white/90
          shadow-lg
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-105
          md:translate-x-[-18px]
          lg:opacity-0
          lg:group-hover:translate-x-[-12px]
          lg:group-hover:opacity-100
        "
      >
        <ChevronLeft
          size={24}
          strokeWidth={2}
          className="text-[#AFAFAF]"
        />
      </button>

      {/* Next */}
      <button
        type="button"
        aria-label="Next article"
        onClick={onNext}
        className="
          absolute
          right-0
          top-1/4
          right-[12.89px]
          z-20
          flex
          h-[52px]
          w-[52px]
          translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white/90
          shadow-lg
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-105
          md:translate-x-[18px]
          lg:opacity-0
          lg:group-hover:translate-x-[12px]
          lg:group-hover:opacity-100
        "
      >
        <ChevronRight
          size={24}
          strokeWidth={2}
          className="text-[#AFAFAF]"
        />
      </button>
    </>
  );
}