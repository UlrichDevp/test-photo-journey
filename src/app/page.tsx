'use client';
import Header from "@/components/Header";
// import Hero from "@/components/Hero";
import Footer from '../components/Footer';
import IntroCard from '../components/IntroCard';
import BehindLens from "@/components/BehindLens";

export default function Home(){
  return(
 <div>
    <Header/>
    <IntroCard/>
    <BehindLens/>
    <Footer/>
  </div>
  )
 
}