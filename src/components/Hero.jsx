import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="pb-4 xl:pb-14">
      <div className="h-[calc(100vh_-_64px)] md:h-auto md:min-h-[750px] shadow-l bg-home bg-cover bg-[50%_65%]  ">
        <div className="container flex items-center pt-20 justify-start flex-col">
          {/* <h1 className="text-2xl sm:text-4xl text-neutral-900 leading-10 font-bold ">AI TECHNOLOGIES INC</h1> */}
          <p className="text-sm text-center leading-4 sm:leading-10 sm:text-[42px] mt-3 sm:mt-6 text-neutral-600 font-bold max-w-[745px] mb-10">
            Unlock the power of Al and ML with our innovative business service solutions!
          </p>
          <Link
            to={"/contact-us"}
            className="bg-neutral-900 transition duration-300 hover:text-black text-sm md:text-lg py-4 sm:py-[18px] px-5 sm:px-10 hover:bg-warning-500 text-white rounded-full"
          >
            "Let's Talk"
          </Link>
        </div>
      </div>
    </section>
  );
}
