import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "OS", href: "/" },
  { text: "MPMC", href: "/Micro" },
  { text: "SE", href: "/Software" },
  { text: "DBMS", href: "/Database" },
  { text: "Maths", href: "/Maths" },
  { text: "CN", href: "/Networks" },
  { text: "CD", href: "/Compiler" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(true);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <header>
      <nav className="nav flex items-center justify-center text-xl  ">
        <div className="">
          <div
            onClick={() => setNavActive(!navActive)}
            className="flex items-center justify-center"
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div
            className={`${
              navActive ? "active" : ""
            } flex items-center justify-center md:gap-10 space-x-6  flex-wrap`}
          >
            {MENU_LIST.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
