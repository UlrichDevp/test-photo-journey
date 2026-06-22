"use client"; // Requis si vous utilisez des interactions (comme handleShare plus tard)

import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#65467240 ]">
      <div className="w-full lg:max-w-[1440px] h-[80px] md:h-[95px] px-[16px] md:px-[39px] lg:px-[75px] flex items-center justify-between">
        
        {/* Bouton Retour avec l'icône ArrowLeft */}
        <button className="text-[16px] font-body md:flex items-center gap-2 hidden">
          <ArrowLeft size={18} /> {/* Pas de 'px' ici, juste le nombre 16 */}
          Back To All Articles
        </button>
        <button className="text-[13px] font-body flex items-center gap-2 md:hidden">
          <ArrowLeft size={16} /> {/* Pas de 'px' ici, juste le nombre 16 */}
          Back
        </button>

        {/* Bouton Partager avec l'icône Share2 */}
        <button className="h-[40px] md:h-[45px] px-[10px] md:px-5 rounded-full bg-black text-white flex items-center gap-2 font-button text-[13px] md:text-[16px]">
          <Image 
          src = "/share.svg"
          alt= "share"
          width = {20}
          height = {20}
          />
          Share Article
        </button>

      </div>
    </header>
  );
}