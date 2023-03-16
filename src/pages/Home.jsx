import React from "react";
import AboutUs from "../components/AboutUs";
import CaseStudies from "../components/CaseStudies";
import Hero from "../components/Hero";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="">
      {/* Hero section  */}
      <Hero />

      {/* About Us section  */}
      <AboutUs />

      {/* Services section*/}
      <Services />

      {/* Services section*/}
      <CaseStudies />
    </div>
  );
}
