import { cn } from "@/lib/utils";
import React from "react";
import { IoStar } from "react-icons/io5";

const Rating = () => {
  const openTimes = [
    {
      day: "Monday",
      time: "8am - 7pm",
    },
    {
      day: "tuesday",
      time: "8am - 7pm",
    },
    {
      day: "Wednesday",
      time: "8am - 7pm",
    },
    {
      day: "Thursday",
      time: "8am - 7pm",
    },
    {
      day: "Friday",
      time: "8am - 7pm",
    },
    {
      day: "Saturday",
      time: "Closed",
    },
    {
      day: "Sunday",
      time: "Closed",
    },
  ];

  return (
    <section className="bg-[#10395f] mt-[100px] max-[900px]:mt-[50px]">
      <div className="container py-[100px] flex gap-[80px] items-center max-[900px]:flex-col-reverse max-[900px]:items-start">
        <div
          className="w-full max-w-[300px] bg-white rounded-md p-[30px]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="font-bold text-[18px]">Open Times</h3>

          <div className="mt-[20px] flex flex-col gap-[15px]">
            {openTimes.map((i, key) => {
              const closed = i.time === "Closed";
              return (
                <div className="flex justify-between gap-[20px]">
                  <h5 className="capitalize text-text_color">{i.day}</h5>
                  <h5
                    className={cn(
                      closed ? "text-text_color_alt" : "text-text_color"
                    )}
                  >
                    {i.time}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div
            className="flex items-center gap-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {[...new Array(5)].map((_, key) => {
              return (
                <span key={key} className="text-[#f1c88a] text-[20px]">
                  <IoStar />
                </span>
              );
            })}
          </div>

          <h2
            className="mt-[20px] text-white"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            I needed an emergency repair and Handy sorted it in less than 3
            hours and service was great
          </h2>

          <p
            className="py-[25px] text-gray-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Curabitur molestie leo in sagittis tempus. Curabitur facilisis
            blandit sem. Vestibulum vulputate ornare diam.
          </p>

          <h3
            className="font-semibold text-white"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Ugonna Onyejekwe
          </h3>
          <p className="text-gray-300" data-aos="fade-up" data-aos-delay="600">
            Entrepreneur
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rating;
