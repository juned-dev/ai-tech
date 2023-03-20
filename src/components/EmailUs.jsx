import React from "react";

export default function EmailUs() {
  return (
    <section className="pt-12 pb-12">
      <div className="container">
        <div className="text-center">
          <p className="text-2xl font-bold mb-9 text-neutral-700">Get in touch anytime</p>
          <p className="font-bold text-neutral-900 mb-2">Email us</p>

          <div className="max-w-[360px] mx-auto relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <input
              type="email"
              readOnly={true}
              onClick={() => (window.location = "mailto:yourmail@domain.com")}
              className="outline-none cursor-pointer focus:outline-none border-b border-b-neutral-900 pl-14 pr-10 py-2 w-full focus:border-warning-500 transition-all"
              value="contact@mlconsultancies.com"
              mailto="contact@mlconsultancies.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
