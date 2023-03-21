import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import CaseStudies from "../components/CaseStudies";
import Hero from "../components/Hero";
import Services from "../components/Services";

export default function Home() {
  const router = useLocation();
  // useEffect(() => {
  //   const { hash } = router;
  //   if (hash == "#about-us") {
  //     location.reload();
  //   }
  // }, []);

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
