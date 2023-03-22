import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { pageLinks } from "../../constants/AppData";
import MobileMenu from "./MobileMenu";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [showDrover, setShowDrover] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");
  const router = useLocation();

  useEffect(() => {
    const { hash, pathname } = router;
    if (hash) {
      if (hash == "#services") setActiveMenu("Services");
      else if (hash == "#case-studies") setActiveMenu("Case Studies");
      else if (hash == "#about-us") setActiveMenu("Home");
    } else {
      if (pathname == "/contact-us") setActiveMenu("Contact Us");
      else if (pathname == "/careers") setActiveMenu("Careers");
      else if (pathname == "/") {
        setActiveMenu("Home");
        window && window.scrollTo(0, 0);
      }
    }
  }, [router]);
  return (
    <header className="sticky top-0 z-30 bg-white shadow-m py-2">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="flex items-center">
            <img className="h-12" src={"/assets/images/logo.png"}></img>
          </Link>
          <div>
            <ul className=" flex space-x-6 text-neutral-600 text-lg font-medium">
              {pageLinks.map((element, index) => (
                <div key={index} className="hidden md:block">
                  <li className="h-full text-neutral-600 flex">
                    <HashLink
                      to={element.link}
                      className={`${
                        activeMenu == element.name
                          ? "inline-flex items-center border-b-4 border-b-warning-500"
                          : "inline-flex hover:text-warning-500 items-center border-b-4 border-b-transparent"
                      }`}
                    >
                      {element.name}
                    </HashLink>
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
