import React, { useState } from "react";
import { CaseStudiesData } from "../../constants/AppData";
import AppSwiper from "./AppSwiper";

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="pt-10 pb-10 bg-neutral-100 scroll-mt-12" id="case-studies">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4">
            <p className="text- text-[32px] font-bold text-success-500 mb-4 sm:mb-8">Case Studies</p>
            <p className="text-sm sm:text-base md:text-lg text-neutral-700 mb-6">
              Discover Real-World Insight! Our case studies provide innovative perspective to help you achieve success.
            </p>
            <a
              href="https://services.mlconsultancies.com/case-studies/digital-transformation-for-automotive-industry"
              target="_blank"
              className="text-sm sm:text-base text-success-800 underline hover:text-warning-500 transition-all"
            >
              View more
            </a>
          </div>

          <div className="col-span-12 lg:col-span-8 relative">
            <AppSwiper data={CaseStudiesData} setActiveIndex={setActiveIndex} />
          </div>
        </div>
      </div>
    </div>
  );
}
