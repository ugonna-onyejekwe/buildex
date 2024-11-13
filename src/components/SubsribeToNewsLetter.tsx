import React from "react";
import { Button } from "./ui/button";

const SubsribeToNewsLetter = () => {
  return (
    <div className="bg-background_alt">
      <div className="container flex justify-between py-[50px]">
        <div>
          <h3 className="text-text_color font-bold text-[20px]">
            Subscribe to our list for weekly discounts
          </h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="flex items-center bg-white h-fit rounded-md   flex-[0.5] overflow-hidden">
          <input
            type="text"
            className="flex-1 outline-none p-[15px] "
            placeholder="Enter Email"
          />
          <Button className="rounded-none">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default SubsribeToNewsLetter;
