import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
export default function AboutUs() {
  return (
    <div className="container">
      <section className="pt-10 pb-4 xl:pb-14">
        <div className="">
          <Heading name={"About us"} className="mb-1" />
          <div className="mb-6 flex items-center justify-center ">
            <img
              className=" pos h-6"
              src={"/assets/images/curve.svg"}
              alt="img"
            ></img>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <div className="leading-7 text-neutral-700 text-base sm:text-lg">
            We are a business service provider that uses Al and ML technology to
            help your business run more efficiently. We believe that businesses
            should have access to the latest technologies in order to stay
            competitive, and our mission is to make sure that all businesses
            have access to the best Al and ML tools available. With our
            services, you'll be able to cut costs, increase efficiency, and make
            data-driven decisions that will help your business grow. We take the
            time to learn about your company and industry, then use our
            expertise in these cutting-edge technologies to provide you with
            solutions that will help you work smarter and grow faster. From data
            analysis and automation to customer relations and marketing, we have
            a solution for you. Let Al technology show you how artificial
            intelligence can improve your business.
          </div>
          <Link
            to={"/contact-us"}
            className="border border-success-700 text-success-700 bg-neutral-150 py-[12px] px-14 hover:text-success-750 hover:bg-neutral-150 rounded-full mt-12"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
