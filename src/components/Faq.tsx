"use client";

import { faqsInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type faqProps = {
  answer: string;
  question: string;
};

const Faq = ({ answer, question }: faqProps) => {
  const [isactive, setIsActive] = useState(false);
  return (
    <>
      <h3
        className="cursor-pointer flex justify-between gap-[20px] font-semibold py-[10px]"
        onClick={() => setIsActive(!isactive)}
      >
        {question}{" "}
        <span className="text-[17px]">
          {isactive ? <FaMinus /> : <FaPlus />}
        </span>
      </h3>

      <p className={cn(isactive ? "block" : "hidden")}>{answer}</p>
    </>
  );
};

export default Faq;
