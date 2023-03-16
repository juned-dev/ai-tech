import React from "react";
import { NavLink } from "react-router-dom";
export default function MobileMenu({ setShowDrover }) {
  return (
    <>
      {/* start-mobile-menu   */}
      <div
        onClick={() => {
          setShowDrover(false);
        }}
        className="fixed inset-0 h-full w-full bg-black/50"
      ></div>
      <div className="bg-white font-medium text-neutral-600 fixed h-full w-full right-0 top-0 max-w-[250px]">
        <div>
          <button
            className="p-4"
            onClick={() => {
              setShowDrover(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul
            onClick={() => {
              setShowDrover(false);
            }}
            className="divide-y"
          >
            <li className="p-4">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "inline-flex items-center text-warning-500"
                    : "inline-flex hover:text-warning-500 items-center "
                }
              >
                Home
              </NavLink>
            </li>
            <li className="p-4">
              <a href="#services">Services</a>
            </li>
            <li className="p-4">
              <a href="#case-studies">Case Studies</a>
            </li>
            <li className="p-4">
              <NavLink
                to={"/contact-us"}
                className={({ isActive }) =>
                  isActive
                    ? "inline-flex items-center  text-warning-500"
                    : "inline-flex hover:text-warning-500 items-center "
                }
              >
                Contact us
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                to={"/careers"}
                className={({ isActive }) =>
                  isActive
                    ? "inline-flex items-center  text-warning-500"
                    : "inline-flex hover:text-warning-500 items-center "
                }
              >
                Careers
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* end-mobile-menu  */}
    </>
  );
}
