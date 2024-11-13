import { aboutInfo } from "@/lib/data";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";

export const AboutUs = () => {
  return (
    <section>
      {/* section 1*/}
      <div className="container items-center pt-[100px] flex gap-[30px] max-[900px]:flex-col max-[500px]:pt-[50px]">
        <Image
          src={"/images/about.jpg"}
          alt="about image"
          height={1000}
          width={1000}
          className="flex-1 h-[400px] max-[500px]:h-[300px]"
          data-aos="fade-up-right"
        />

        <div data-aos="fade-up-left" data-aos-delay="100">
          <h2 data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
            Our Commitment to Quality
          </h2>
          <p
            className="py-[20px]"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
            ducimus omnis veniam nostrum aspernatur labore accusantium at
            eveniet. Hic accusantium est accusamus, iure molestiae assumenda
            molestias dolores cum placeat commodi.
          </p>

          <div className="flex mt-[10px] gap-[20px] flex-wrap">
            {aboutInfo.map((i, key) => {
              return (
                <div
                  key={key}
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-offset="0"
                >
                  <h3 className="font-bold text-[18px]">{i.amount}</h3>
                  <p>{i.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="container items-center pt-[100px] flex-row-reverse flex gap-[30px] max-[900px]:flex-col max-[500px]:pt-[50px]">
        <Image
          src={"/images/about2.jpg"}
          alt="about image"
          height={1000}
          width={1000}
          className="flex-1 h-[400px] max-[500px]:h-[300px]"
          data-aos="fade-up-left"
        />

        <div data-aos="fade-up-right">
          <h2 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">
            Your Partner in Building Excellence
          </h2>
          <p
            className="py-[20px]"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="0"
          >
            consectetur adipisicing elit. Id, ducimus omnis veniam nostrum
            aspernatur labore accusantium at eveniet. Hic accusantium est
            accusamus, iure molestiae assumenda molestias dolores cum placeat
            commodi.
          </p>

          <ul className="space-y-3">
            <li
              className="flex items-center gap-[10px]"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <span className="h-[40px] w-[40px] min-h-[40px] min-w-[40px] rounded-full bg-background_alt border-primary_color/5 border-2 flex items-center justify-center text-[18px] text-primary_color/90">
                <IoMdCheckmark />
              </span>
              Timely Delivery
            </li>

            {/*  */}
            <li
              className="flex items-center gap-[10px]"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-offset="0"
            >
              <span className="h-[40px] w-[40px] min-h-[40px] min-w-[40px] rounded-full bg-background_alt border-primary_color/5 border-2 flex items-center justify-center text-[18px] text-primary_color/90">
                <IoMdCheckmark />
              </span>
              Peace of mind
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
