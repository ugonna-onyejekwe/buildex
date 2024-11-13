import React from "react";
import { Button } from "./ui/button";
import Faq from "./Faq";
import { faqsInfo } from "@/lib/data";

const Faqs = () => {
  return (
    <div className="py-[100px] max-[900px]:py-[50px]">
      <div className="container flex gap-[50px] max-[900px]:flex-col">
        {/* sec1 */}
        <div>
          <h2 data-aos="fade-up" data-aos-delay="100">
            Interested in Handy services?
          </h2>

          <p className="py-[20px]" data-aos="fade-up" data-aos-delay="200">
            Can’t see your question answered? Drop us a message and we’ll answer
            it promptly.
          </p>

          <h5
            className="text-primary_color hover:text-text_color/80 cursor-pointer font-semibold"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            clientSupport@buildex.com
          </h5>

          <Button className="mt-[30px]" data-aos="fade-up" data-aos-delay="400">
            Book our Services
          </Button>
        </div>

        {/* sec2 */}
        <div className="flex-1 flex flex-col gap-4">
          {faqsInfo.map((i, key) => {
            return (
              <div
                key={key}
                className="bg-background_alt p-[20px] rounded-sm "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Faq {...i} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
