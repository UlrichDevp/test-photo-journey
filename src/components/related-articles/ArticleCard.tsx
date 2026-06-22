import Image from "next/image";
import { Article } from "./types";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article
      className="
        flex
        w-[351.111px]
        flex-col
        gap-[31.111px]
      "
    >
      {/* Image */}
      <div
        className="
          relative
          h-[245.333px]
          w-[351.111px]
          overflow-hidden
          rounded-[355.556px]
        "
        style={{
          boxShadow: `
            0px 6.55px 13.1px rgba(0,0,0,0.10),
            0px 22.92px 22.92px rgba(0,0,0,0.09),
            0px 52.4px 31.11px rgba(0,0,0,0.05),
            0px 93.33px 37.66px rgba(0,0,0,0.01)
          `,
        }}
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority={false}
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-4">
        <p
          className="
            text-center
            font-body
            text-[16px]
            font-medium
            leading-[100%]
            text-[#AFAFAF]
          "
        >
          {article.category} · {article.readTime}
        </p>

        <h3
          className="
            w-[327px]
            text-center
            font-title
            text-[25px]
            font-normal
            leading-[100%]
            text-black
          "
        >
          {article.title}
        </h3>
      </div>
    </article>
  );
}