import { howTocontactUsInfo } from "@/lib/data";
import { Button } from "./ui/button";

export const ContactUs = () => {
  return (
    <section
      className="bg-background_alt mt-[100px] py-[100px] max-[900px]:mt-[50px]"
      data-aos="fade-up"
    >
      <div className="container">
        <h2 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">
          Looking for service? See how easy it is with us
        </h2>

        <div className=" flex items-center max-[900px]:flex-col mt-[50px] max-[900px]:mt-[30px] gap-[30px]">
          <div className=" flex flex-col gap-[30px] flex-1">
            {howTocontactUsInfo.map((i, key) => {
              return (
                <div
                  key={key}
                  className="flex gap-[20px] 
                
                
                "
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-offset="0"
                >
                  <span className="h-[60px] w-[60px] min-h-[60px] min-w-[60px] rounded-full bg-background border-text_color border-2 flex items-center justify-center text-[17px] font-bold z-[1] relative before:absolute before:h-[10px]  before:w-[1.5px] before:bg-text_color before:bottom-[-11px] before:left-[28px]">
                    {key + 1}
                  </span>

                  <div>
                    <h3 className="font-bold text-text_color text-[16px]">
                      {i.heading}
                    </h3>
                    <p className="py-[10px]">{i.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="bg-background flex-[0.8] p-[30px] rounded-md shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="0"
          >
            <span className="text-primary_color">Conatct us</span>
            <h3 className="font-bold text-[20px]">
              Get a quote for an appointment
            </h3>

            <form action="#" className="space-y-2 my-[30px]">
              <input
                type="text"
                className="bg-background_alt w-full p-[15px] rounded-md outline-primary_color/30"
                placeholder="Enter name"
              />
              <input
                type="text"
                className="bg-background_alt w-full p-[15px] rounded-md outline-primary_color/30"
                placeholder="Enter email address"
              />
            </form>
            <Button>Request a Quote</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
