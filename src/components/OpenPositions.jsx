import React, { useState } from "react";
import { JS, Marketing } from "../../constants/AppData";
import UploadFile from "./uploadFile";

export default function OpenPositions() {
  const [showInput, setShowInput] = useState({});
  return (
    <div>
      <section className="pt-10 pb-10" id="open-positions">
        <div className="container">
          <div className="pb-3.5">
            <p className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-title text-neutral-700 text-center mb-7">
              Open positions
            </p>
            <p className="font-bold text-lg sm:text-xl md:text-2xl text-neutral-700 pb-4 border-b border-neutral-300">
              Positions
            </p>
          </div>

          <div className="divide-y-2">
            <div className="">
              {JS.map((item, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
                    <div>
                      <p className="text-xl text-neutral-900 mb-1">{item.title}</p>
                      <p className="  text-sm text-neutral-500 max-w-3xl mb-4">{item.desc}</p>
                    </div>

                    <div className="w-full sm:max-w-[150px]">
                      <button
                        onClick={() => {
                          setShowInput(true);
                        }}
                        className="bg-secondary-200 px-6 py-4 text-sm sm:text-base md:text-lg text-primary-500 rounded hover:text-primary-500
                                 hover:bg-primary-150 transition-all w-full"
                      >
                        Apply now
                      </button>
                    </div>
                  </div>
                  {showInput && <UploadFile />}
                </div>
              ))}
            </div>

            <div className="">
              {JS.map((item, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-5 pt-5">
                    <div>
                      <p className="  text-xl text-neutral-900 mb-1 ">{item.title}</p>
                      <p className="  text-sm text-neutral-500 max-w-3xl mb-4">{item.desc}</p>
                    </div>

                    <div className="w-full sm:max-w-[150px]">
                      <button
                        className="bg-secondary-200 px-6 py-4 text-sm sm:text-base md:text-lg text-primary-500 rounded hover:text-primary-500 
                                hover:bg-primary-150 transition-all w-full"
                      >
                        Apply now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              {Marketing.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row justify-between items-center mb-5 pt-5">
                  <div>
                    <p className="  text-xl text-neutral-900 mb-1 ">{item.title}</p>
                    <p className="  text-sm text-neutral-500 max-w-3xl mb-4">{item.desc}</p>
                  </div>

                  <div className="w-full sm:max-w-[150px]">
                    <button
                      className="bg-secondary-200 px-6 py-4 text-sm sm:text-base md:text-lg text-primary-500 rounded hover:text-primary-500 
                                hover:bg-primary-150 transition-all w-full"
                    >
                      Apply now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
