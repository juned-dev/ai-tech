import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CaseStudiesCard from "./CaseStudiesCard";

export default function AppSwiper({ data, setActiveIndex }) {
  return (
    <div>
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
        {data.map((item, index) => (
          <SwiperSlide className="my-4 px-2 h-auto" key={index}>
            <CaseStudiesCard title={item.heading} image={item.img} desc={item.desc} link={item.link} />
          </SwiperSlide>
        ))}
        <div className="flex items-center space-x-4 justify-end">
          <LeftButton />
          <RightButton />
        </div>
      </Swiper>
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
        swiper.activeIndex == 4 ? "border-neutral-400" : "border-primary-600 cursor-pointer"
      }`}
      onClick={() => swiper.slideNext()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`w-6 h-6 ${swiper.activeIndex == 4 ? "text-neutral-400" : "text-primary-600"}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  );
};
