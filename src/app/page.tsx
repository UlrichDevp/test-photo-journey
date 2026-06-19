'use client';
import Header from "@/components/Header";
// import Hero from "@/components/Hero";
import Footer from '../components/Footer';
import IntroCard from '../components/IntroCard';
import BehindLens from "@/components/BehindLens";
import FezSection from "@/components/FezSection"
import Marrakech from "@/components/MarrakechSection";
import InstaCard from "@/components/InstagramCards";
import ClosingSection from "@/components/ClosingSection";

export default function Home() {
  return (
    <div>
      <Header />
      <IntroCard />
      <BehindLens />
      <FezSection />
      <Marrakech />
      <InstaCard />
      <ClosingSection />
      <Footer />

    </div>
  )

}