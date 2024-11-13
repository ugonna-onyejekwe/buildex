import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { navLinks } from "./navlinks";

const Navbar = () => {
  return (
    <div>
      <h1>buildex</h1>

      <div>
        {navLinks.map((i, key) => {
          return (
            <Link href={i.path} key={key}>
              {i.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
