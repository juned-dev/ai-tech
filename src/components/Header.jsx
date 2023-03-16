import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { pageLinks } from "../../constants/AppData";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [showDrover, setShowDrover] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white shadow-m py-2">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img className="h-12" src={"/assets/images/logo.png"}></img>
          </div>
          <div>
            <ul className=" flex space-x-6 text-neutral-600 text-lg font-medium">
              {pageLinks.map((element, index) => (
                <div key={index} className="hidden md:block">
                  <li className="h-full text-neutral-600 flex">
                    {element.name == "Services" || element.name == "Case Studies" ? (
                      <a
                        href={element.link}
                        className="inline-flex  hover:text-warning-500  items-center border-b-4 border-b-transparent"
                      >
                        {element.name}
                      </a>
                    ) : (
                      <NavLink
                        to={element.link}
                        className={({ isActive }) =>
                          isActive
                            ? "inline-flex items-center border-b-4 border-b-warning-500"
                            : "inline-flex hover:text-warning-500 items-center border-b-4 border-b-transparent"
                        }
                      >
                        {element.name}
                      </NavLink>
                    )}
                  </li>
                </div>
              ))}
            </ul>
            <button
              className="md:hidden"
              onClick={() => {
                setShowDrover(true);
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {showDrover && <MobileMenu setShowDrover={setShowDrover} />}
          </div>
        </div>
      </div>
    </header>
  );
}
