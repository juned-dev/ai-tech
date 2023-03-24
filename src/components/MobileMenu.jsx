import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export default function MobileMenu({ setShowDrover, pageLinks, activeMenu }) {
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
            {pageLinks.map((element, index) => (
              <li className="p-4">
                <HashLink
                  to={element.link}
                  className={`${
                    activeMenu == element.name
                      ? "inline-flex items-center text-warning-500"
                      : "inline-flex hover:text-warning-500 items-center "
                  }`}
                >
                  {element.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* end-mobile-menu  */}
    </>
  );
}
