import React from "react";

export default function Heading({ name, className }) {
  return (
    <div
      className={` font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-title text-neutral-700 text-center mb-1 md:mb-7 ${className}`}
    >
      {name}
    </div>
  );
}
