import React from "react";

export default function CaseStudiesCard({ image, title, desc, link }) {
  return (
    <div className="bg-white shadow-m rounded-[20px] h-full">
      <div className="h-[200px]">
        <img src={image} alt="" className="w-full h-full object-cover rounded-tl-[20px] rounded-tr-[20px]" />
      </div>
      <div className="flex flex-col h-[calc(100%-200px)] justify-between px-4 pt-4 pb-8">
        <div>
          <h3 className="h-[84px] text-base sm:text-lg text-neutral-900 font-bold mb-2">{title}</h3>
          <p className="text-sm text-neutral-900 mb-5 sm:mb-6">{desc}</p>
        </div>

        <div>
          <a
            href={link}
            target="_blank"
            className="text-sm text-success-500 underline hover:text-warning-500 transition-all"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
