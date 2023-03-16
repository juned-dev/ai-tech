import React from "react";

export default function Office() {
  return (
    <div>
      <section className="pt-4 pb-4 md:pt-6 md:pb-10 ">
        <div className="container">
          <p className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-title text-neutral-700 text-center mb-7">
            Our office
          </p>
          <div className="grid sm:grid-cols-3 gap-2 mb-3">
            <div>
              <img
                src="/assets/images/office-img-1.png"
                alt=""
                className="h-full mx-auto w-full hover:opacity-50 transition-all"
              />
            </div>
            <div className="sm:col-span-2 gap-1">
              <img src="/assets/images/office-img-2.png" alt="" className="w-full hover:opacity-50 transition-all" />
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-2">
            <div className="sm:col-span-2 gap-1">
              <img src="/assets/images/office-img-3.png" alt="" className="h-full hover:opacity-50 transition-all" />
            </div>
            <div className="">
              <img
                src="/assets/images/office-img-4.png"
                alt=""
                className="h-full mx-auto w-full hover:opacity-50 transition-all"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
