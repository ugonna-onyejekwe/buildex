import React from "react";
import SubsribeToNewsLetter from "./SubsribeToNewsLetter";
import { IoStar } from "react-icons/io5";
import { footerQuickLinks } from "@/lib/data";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <SubsribeToNewsLetter />

      <div className="bg-[#1e2245] py-[70px]">
        <div className="container flex justify-between gap-[100px] max-[900px]:flex-col max-[900px]:gap-[10px] ">
          {/* briefing */}
          <div className="flex-[1]">
            <h1 className="font-bold text-white text-[17px]">Buildex</h1>
            <p className=" pt-[10px] pb-[20px] text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae rerum mollitia quaerat, totam nulla{" "}
            </p>

            <section>
              <div className="flex items-center gap-2">
                {[...new Array(5)].map((_, key) => {
                  return (
                    <span key={key} className="text-[#f1c88a] text-[20px]">
                      <IoStar />
                    </span>
                  );
                })}
              </div>

              <h5 className="mt-[10px] text-white">Five star rated company</h5>
              <h6 className="text-gray-300 mt-[10px] hover:opacity-[0.7] cursor-pointer">
                See reviews
              </h6>
            </section>
          </div>

          {/* quick links */}
          <div className="flex-[1.5] grid gap-[20px] grid-cols-3 mt-[50px]">
            {footerQuickLinks.map((i, key) => {
              return (
                <Link
                  href={i.path}
                  key={key}
                  className="capitalize text-white "
                >
                  {i.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* copywrite */}
        <div className="container flex flex-col gap-4 mt-[60px] ">
          <h5 className="text-white text-[15px]">
            Copyright Buildex 2020, Built by{" "}
            <Link href={""} className="font-bold cursor-pointer underline01">
              Progrix
            </Link>
          </h5>

          <div className="flex gap-[20px] ">
            <h5 className="text-white text-[15px]">Privacy Policy</h5>

            <h5 className="text-white text-[15px]">Terms & Conditions</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
