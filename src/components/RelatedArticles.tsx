"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import ArticleCard from "./related-articles/ArticleCard";
import CarouselButtons from "./related-articles/CarouselButtons";
import CarouselDots from "./related-articles/CarouselDots";
import { articles } from "./related-articles/data";

export default function RelatedArticles() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
  if (!emblaApi) return;

  const updateSelectedIndex = () => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  updateSelectedIndex();

  emblaApi.on("select", updateSelectedIndex);

  return () => {
    emblaApi.off("select", updateSelectedIndex);
  };
}, [emblaApi]);

  return (
    <section
      className="
        mx-auto
        w-full
        max-w-[1440px]
        overflow-hidden
        px-4
        pt-[104px]
        md:pt-[113px]
        lg:pt-[131px]
        md:px-10
        lg:px-[72px]
      "
    >
      <h2
        className="
          mb-16
          text-center
          font-title
          text-[26.67px]
          md:text-[40px]
          lg:text-[48px]
        "
      >
        Related Articles
      </h2>

      <div className="group relative">
        <CarouselButtons
          onPrevious={scrollPrev}
          onNext={scrollNext}
        />

        <div
          ref={emblaRef}
          className="overflow-hidden"
        >
          <div className="flex gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="
                  flex-[0_0_100%]
                  md:flex-[0_0_calc(50%-16px)]
                  lg:flex-[0_0_calc(33.333%-22px)]
                "
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>

        <CarouselDots
          total={articles.length}
          current={selectedIndex}
          onSelect={scrollTo}
        />
      </div>
    </section>
  );
}