"use client";

interface CarouselDotsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

export default function CarouselDots({
  total,
  current,
  onSelect,
}: CarouselDotsProps) {
  return (
    <div
      className="
        mt-[48px]
        flex
        items-center
        justify-center
        gap-[14px]
      "
    >
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => onSelect(index)}
          className={`
            h-[15px]
            w-[15px]
            rounded-full
            transition-all
            duration-300
            ${
              current === index
                ? "bg-[#8F9CD3] scale-100"
                : "bg-[#8F9CD380] hover:bg-[#8F9CD3]"
            }
          `}
        />
      ))}
    </div>
  );
}