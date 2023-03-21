import React from "react";
import { services } from "../../constants/AppData";
import Heading from "./Heading";

export default function Services() {
  return (
    <div id="services" className="container scroll-mt-12 ">
      <section className="pt-10 pb-36 ">
        <Heading name={"Services"} />

        <div className="text-neutral-700 pt-2 grid grid-cols-12 gap-4">
          {services.map((element) => (
            <div key={element.heading} className={`${element.class} bg-secondary-100 rounded-[20px] p-7`}>
              <h3 className="text-xl lg:text-3xl font-bold mb-4">{element.heading}</h3>
              <div className="flex justify-between items-center mb-6">
                <p>{element.desc}</p>
                <div className="w-20 md:w-24 xl:w-40 flex-shrink-0 mb-4 sm:mb-0">
                  <img className="max-h-44" src={element.img} alt="img" />
                </div>
              </div>
              <a
                href={element.link}
                target="_blank"
                className="text-tertiary4-500 hover:text-warning-500 flex underline"
              >
                "Learn more"
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
