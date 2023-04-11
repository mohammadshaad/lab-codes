import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "OS", href: "/" },
  { text: "SE", href: "/Software" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(true);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <header>
      <nav className="nav flex items-center justify-center text-xl">
       
        <div
          onClick={() => setNavActive(!navActive)}
          className="flex items-center justify-center"
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} flex items-center justify-center gap-10`}>
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
      </nav>
    </header>
  );
};

export default Navbar;
