import React, { useEffect, useState } from "react";
import { JS, JS2, Marketing, UploadResumeInitValues } from "../../constants/AppData";
import SpinnerLoader from "./SpinnerLoader";
import UploadFile from "./UploadFile";

export default function OpenPositions() {
  const [showInput, setShowInput] = useState(UploadResumeInitValues);

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
                <div key={item.id}>
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
                    <div>
                      <p className="text-xl text-neutral-900 mb-1">{item.title}</p>
                      <p className="  text-sm text-neutral-500 max-w-3xl mb-4">{item.desc}</p>
                    </div>

                    <div className="w-full sm:max-w-[150px]">
                      <button
                        onClick={() => {
                          setShowInput({
                            ...showInput,
                            [item.id]: true,
                          });
                        }}
                        className="bg-secondary-200 px-6 py-4 text-sm sm:text-base md:text-lg text-primary-500 rounded hover:text-primary-500
                                 hover:bg-primary-150 transition-all w-full"
                      >
                        {/* {showInput} */}
                        Apply now
                      </button>
                    </div>
                  </div>
                  {showInput[item.id] && <UploadFile />}
                </div>
              ))}
            </div>

            <div className="">
              {JS2.map((item, index) => (
                <div key={item.id}>
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-5 pt-5">
                    <div>
                      <p className="  text-xl text-neutral-900 mb-1 ">{item.title}</p>
                      <p className="  text-sm text-neutral-500 max-w-3xl mb-4">{item.desc}</p>
                    </div>

                    <div className="w-full sm:max-w-[150px]">
                      <button
                        onClick={() => {
                          setShowInput({
                            ...showInput,
                            [item.id]: true,
                          });
                        }}
                        className="bg-secondary-200 px-6 py-4 text-sm sm:text-base md:text-lg text-primary-500 rounded hover:text-primary-500 
                                hover:bg-primary-150 transition-all w-full"
                      >
                        Apply now
                      </button>
                    </div>
                  </div>
                  {showInput[item.id] && <UploadFile />}
                </div>
              ))}
            </div>
            <div className="">
              {Marketing.map((item, index) => (
                <div key={item.id}>
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-5 pt-5">
                    <div>
                      <p className="  text-xl text-neutral-900 mb-1 ">{item.title}</p>
                      <p className="  text-sm text-neutral-500 max-w-3xl mb-4">{item.desc}</p>
                    </div>

                    <div className="w-full sm:max-w-[150px]">
                      <button
                        onClick={() => {
                          setShowInput({
                            ...showInput,
                            [item.id]: true,
                          });
                        }}
                        className="bg-secondary-200 px-6 py-4 text-sm sm:text-base md:text-lg text-primary-500 rounded hover:text-primary-500 
                                hover:bg-primary-150 transition-all w-full"
                      >
                        Apply now
                      </button>
                    </div>
                  </div>
                  {showInput[item.id] && <UploadFile />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
