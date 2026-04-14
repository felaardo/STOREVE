import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import BusinessTypes from "@/components/BusinessTypes";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
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
      <BusinessTypes />
      <Features />
      <Testimonials />
      <Pricing />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}
