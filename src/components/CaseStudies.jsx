import React, { useState } from "react";
import CaseStudiesCard from "./CaseStudiesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CaseStudiesData } from "../../constants/AppData";
import { useSwiper } from "swiper/react";

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
              href="#"
              className="text-sm sm:text-base text-success-800 underline hover:text-warning-500 transition-all"
            >
              View more
            </a>
          </div>

          <div className="col-span-12 lg:col-span-8 relative">
            <Swiper
              onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
              slidesPerView={1.5}
              spaceBetween={0}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 14,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper"
            >
              {CaseStudiesData.map((item, index) => (
                <SwiperSlide className="my-4 px-2 h-auto" key={index}>
                  <CaseStudiesCard title={item.heading} image={item.img} desc={item.desc} link={item} />
                </SwiperSlide>
              ))}
              <div className="flex items-center space-x-4 justify-end">
                <LeftButton />
                <RightButton />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

const LeftButton = () => {
  const swiper = useSwiper();
  return (
    <div
      className={`bg-white p-2 border  w-fit flex justify-center rounded-3xl ${
        swiper.activeIndex == 0 ? "border-neutral-400" : "border-primary-600 cursor-pointer"
      }`}
      onClick={() => swiper.slidePrev()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`w-6 h-6 ${swiper.activeIndex == 0 ? "text-neutral-400" : "text-primary-600"}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </div>
  );
};

const RightButton = () => {
  const swiper = useSwiper();
  return (
    <div
      className={`bg-white p-2 border  w-fit flex justify-center rounded-3xl ${
        swiper.activeIndex == 2 ? "border-neutral-400" : "border-primary-600 cursor-pointer"
      }`}
      onClick={() => swiper.slideNext()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`w-6 h-6 ${swiper.activeIndex == 2 ? "text-neutral-400" : "text-primary-600"}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  );
};
