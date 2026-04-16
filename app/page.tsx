import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <Pricing />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}
