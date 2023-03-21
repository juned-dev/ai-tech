import React from "react";
import ApplyNow from "../components/ApplyNow";
import Benefits from "../components/Benefits";
import Office from "../components/Office";
import OpenPositions from "../components/OpenPositions";
import WhyUs from "../components/WhyUs";

export default function Careers() {
  return (
    <div>
      <section className="bg-career bg-cover h-100 py-20 sm:py-28 xl:py-40 lg:min-h-[550px] flex items-center justify-center">
        <div className="container">
          <div className="">
            <p className="font-bold text-3xl sm:text-4xl md:text-5xl xl:text-title text-center mb-7 text-neutral-900">
              Join our team
            </p>
            <div className="text-center">
              <a
                href="#open-positions"
                className="bg-white rounded-3xl px-14 py-3 text-sm sm:text-base xl:text-lg text-primary-500 mx-auto hover:text-primary-500 hover:bg-neutral-300 transition-all"
              >
                See open positions
              </a>
            </div>
          </div>
        </div>
      </section>
      <WhyUs />
      <Office />
      <Benefits />
      <OpenPositions />
      <ApplyNow />
    </div>
  );
}
