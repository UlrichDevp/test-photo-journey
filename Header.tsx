export default function Header() {
  return (
    <header
      className="
      sticky
      top-0
      z-50
      backdrop-blur-md
      bg-[#65467240]
      "
    >
      <div
        className="
        max-w-[1440px]
        mx-auto
        h-[95px]
        px-8
        flex
        items-center
        justify-between
        "
      >
        <button
          className="
          text-[16px]
          font-normal
          font-body
          "
        >
          ← Back To All Articles
        </button>

        <button
          className="
          h-[45px]
          px-5
          rounded-full
          bg-black
          text-white
          flex
          items-center
          gap-2
          font-button
          text-[15px]
          "
        >
          Share Article
        </button>
      </div>
    </header>
  );
}