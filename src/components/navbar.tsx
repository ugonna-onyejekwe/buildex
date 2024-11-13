import React from "react";
import Link from "next/link";
import { navLinks } from "./navlinks";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-bg_color shadow-md z-50">
      <div className="container  flex justify-between py-[25px] items-center">
        <h1 className="font-bold uppercase text-[15px] text-text_color">
          buildex
        </h1>

        <div className="flex gap-[30px] max-[900px]:hidden">
          {navLinks.map((i, key) => {
            return (
              <Link
                href={i.path}
                key={key}
                className="capitalize font-medium text-text_color_alt hover:text-text_color transition-all text-[15px]"
              >
                {i.name}
              </Link>
            );
          })}
        </div>

        <div className="min-[900px]:hidden">
          <span className="text-[20px] cursor-pointer">
            <HiOutlineMenuAlt3 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
