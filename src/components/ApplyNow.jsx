import React from "react";

export default function ApplyNow() {
  return (
    <div>
      <section className="pt-10 pb-36 ">
        <div className="container">
          <div className="bg-neutral-300 shadow-xs rounded-[20px] px-8 py-12 sm:py-12 sm:px-12">
            <p className="font-bold text-secondary-500 text-3xl sm:text-4xl lg:text-5xl xl:text-title text-center mb-5">
              Join Us
            </p>

            <div className="flex justify-center items-center md:ml-24">
              <div className="">
                <button
                  className="bg-warning-500 text-base rounded-[26px] text-white px-20 py-3 border border-warning-500 hover:bg-white hover:text-warning-500 
                            hover:border hover:border-warning-500 transition-all mt-6"
                >
                  Apply now
                </button>
              </div>
              <div className="hidden md:block">
                <img src="/assets/images/arrow-round.png" alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
