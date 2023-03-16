import React from "react";

export default function OpenPositions() {
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
              <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
                <div>
                  <p className="text-xl text-neutral-900 mb-1">Javascript developer</p>
                  <p className="  text-sm text-neutral-500 max-w-3xl mb-4">
                    We are looking for javascript developer who can collaborate with cross-functional teams to design,
                    develop, and deploy high-quality software solutions that meet business needs.
                  </p>
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
              <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
                <div>
                  <p className="  text-xl text-neutral-900 mb-1 ">Lead Ux Developer -React JS</p>
                  <p className="  text-sm text-neutral-500 max-w-3xl mb-4">
                    We are seeking an experienced Lead UX Developer with expertise in React JS to join our team. The
                    ideal candidate will have a passion for creating intuitive and engaging user experiences and be
                    capable of leading and mentoring a team of developers.
                  </p>
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

            <div className="">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-5 pt-5">
                <div>
                  <p className="  text-xl text-neutral-900 mb-1 ">Javascript developer</p>
                  <p className="  text-sm text-neutral-500 max-w-3xl mb-4">
                    We are looking for javascript developer who can collaborate with cross-functional teams to design,
                    develop, and deploy high-quality software solutions that meet business needs.
                  </p>
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
              <div className="flex flex-col sm:flex-row justify-between items-center pb-5">
                <div>
                  <p className="  text-xl text-neutral-900 mb-1 ">Lead Ux Developer -React JS</p>
                  <p className="  text-sm text-neutral-500 max-w-3xl mb-4">
                    We are seeking an experienced Lead UX Developer with expertise in React JS to join our team. The
                    ideal candidate will have a passion for creating intuitive and engaging user experiences and be
                    capable of leading and mentoring a team of developers.
                  </p>
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

            <div className="">
              <div className="flex flex-col sm:flex-row justify-between items-center pb-5 pt-5">
                <div>
                  <p className="  text-xl text-neutral-900 mb-1 ">Technical Content Marketing Manager</p>
                  <p className="  text-sm text-neutral-500 max-w-3xl mb-4">
                    Our management team is in search of a technical content marketer to join our team and help
                    accelerate the growth as we continue to develop and expand our innovative technology in Al and ML
                    business services.
                  </p>
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
          </div>
        </div>
      </section>
    </div>
  );
}
