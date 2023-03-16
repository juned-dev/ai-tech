import React from "react";

export default function Benefits() {
  return (
    <div>
      <section className="pt-10 pb-10 ">
        <div className="container">
          <p className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-title text-neutral-700 text-center mb-7">
            Our benefits
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
            <div className="odd:bg-secondary-200 rounded-[20px] px-6 py-12 group">
              <img
                src="/assets/images/currency-dollar.png"
                alt=""
                className="mx-auto mb-9 group-hover:-translate-y-4 transition-all"
              />
              <p className="  text-2xl font-bold text-neutral-700 text-center">Competitive salary & equity</p>
            </div>
            <div className="even:bg-neutral-300 rounded-[20px] px-6 py-12 group">
              <img
                src="/assets/images/Heart.png"
                alt=""
                className="mx-auto mb-9 group-hover:-translate-y-4 transition-all"
              />
              <p className="  text-2xl font-bold text-neutral-700 text-center">Competitive salary & equity</p>
            </div>
            <div className="odd:bg-secondary-200 rounded-[20px] px-6 py-12 group">
              <img
                src="/assets/images/Leaf.png"
                alt=""
                className="mx-auto mb-9 group-hover:-translate-y-4 transition-all"
              />
              <p className="  text-2xl font-bold text-neutral-700 text-center">Competitive salary & equity</p>
            </div>
            <div className="even:bg-neutral-300 rounded-[20px] px-6 py-12 group">
              <img
                src="/assets/images/Lightning.png"
                alt=""
                className="mx-auto mb-9 group-hover:-translate-y-4 transition-all"
              />
              <p className="  text-2xl font-bold text-neutral-700 text-center">Competitive salary & equity</p>
            </div>
            <div className="odd:bg-secondary-200 rounded-[20px] px-6 py-12 group">
              <img
                src="/assets/images/House.png"
                alt=""
                className="mx-auto mb-9 group-hover:-translate-y-4 transition-all"
              />
              <p className="  text-2xl font-bold text-neutral-700 text-center">Competitive salary & equity</p>
            </div>
            <div className="even:bg-neutral-300 rounded-[20px] px-6 py-12 group">
              <img
                src="/assets/images/Laptop.png"
                alt=""
                className="mx-auto mb-9 group-hover:-translate-y-4 transition-all"
              />
              <p className="  text-2xl font-bold text-neutral-700 text-center">Competitive salary & equity</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
