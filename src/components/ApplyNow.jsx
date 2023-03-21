import React, { useState } from "react";
import UploadFile from "./UploadFile";

export default function ApplyNow() {
  const [showInput, setShowInput] = useState(false);
  const item = {
    title: "All resume",
  };
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
                  onClick={() => {
                    setShowInput(!showInput);
                  }}
                  className="bg-warning-500 text-base rounded-[26px] text-white px-20 py-3 border border-warning-500 hover:bg-white hover:text-warning-500 
                            hover:border hover:border-warning-500 transition-all mt-6 "
                >
                  Apply now
                </button>
              </div>
              <div className="hidden md:block">
                <img src="/assets/images/arrow-round.png" alt="" className="" />
              </div>
            </div>
            {showInput && <UploadFile item={item} setShowInput={setShowInput} />}
          </div>
        </div>
      </section>
    </div>
  );
}
