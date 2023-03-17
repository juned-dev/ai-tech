import { DocumentSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import useFirebase from "../hooks/use-firebase";
import SpinnerLoader from "./SpinnerLoader";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { postEmail } = useFirebase();
  const [loader, setLoader] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    email && setDisabled(false);
  }, [email]);

  return (
    <footer className="bg-secondary-200 md:rounded-tl-[205px] md:rounded-br-[205px] py-12">
      <div className="container">
        <p className="font-bold text-neutral-700 text-xl text-center mb-4">Subscribe to our newsletter</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoader(true);
            postEmail(email)
              .then((data) => {})
              .catch((error) => {
                console.error("Error:", error);
              })
              .finally(() => {
                setLoader(false);
                setEmail("");
              });
          }}
          className="flex justify-center mb-8 max-w-[330px] mx-auto relative"
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
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
            className="pl-8 md:pl-20 pr-4 py-2 rounded-tl-[22px] rounded-bl-[22px] bg-neutral-250 text-neutral-600 outline-none border border-neutral-250 
                    focus:border-warning-500"
            placeholder="Input your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className={`text-xs text-white rounded-tr-[22px] rounded-br-[22px] px-3 py-2 border transition-all text-center h-[42px] w-[88px] flex-shrink-0  bg-warning-500 border-warning-500 hover:bg-white hover:text-warning-500 hover:border hover:border-warning-500  ${
              !disabled ? "cursor-pointer" : " opacity-70"
            }`}
            disabled={disabled}
          >
            {loader ? <SpinnerLoader /> : "Subscribe"}
          </button>
        </form>

        <div className="grid sm:grid-cols-3 sm:text-center gap-3 max-w-3xl mx-auto mb-11">
          <div className="md:text-center">
            <p className="text-xl font-bold text-neutral-700 mb-4">Services</p>
            <ul>
              <li className="mb-3">
                <a href="#" className="text-sm text-neutral-700 hover:opacity-60 transition-all">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-700 hover:opacity-60 transition-all">
                  Products
                </a>
              </li>
            </ul>
          </div>

          <div className="md:text-center">
            <p className="text-xl font-bold text-neutral-700 mb-4 ">Resources</p>
            <ul>
              <li className="mb-3">
                <a href="#" className="text-sm text-neutral-700 hover:opacity-60 transition-all">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="md:text-center">
            <p className="text-xl font-bold text-neutral-700 mb-4">Company</p>
            <ul>
              <li className="mb-3">
                <a href="#" className="text-sm text-neutral-700 hover:opacity-60 transition-all">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className=" text-sm text-neutral-700 hover:opacity-60 transition-all">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-sm text-neutral-900 text-center pt-7 border-t border-neutral-300">
          <p>
            AI Technologies, Inc <a href="">Privacy</a> <a href="">Terms</a> <a href="">Sitemap</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
