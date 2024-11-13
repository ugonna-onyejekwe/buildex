import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="bg-homeBg w-full h-[700px] max-[900px]:h-screen max-[900px]:max-h-[700px] relative z-[1] before:absolute before:bg-black before:opacity-[0.4] before:z-[-1] before:size-full before:top-0 before:left-0">
      <div className="container  pt-[250px] ">
        <div className="max-w-[800px]">
          <h1
            className="text-[45px] font-extrabold text-white leading-tight max-[900px]:text-[40px]  max-[500px]:text-[30px] "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span
              className="text-[20px]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Your Home, Our Masterpiece.
              <br />
            </span>
            Let's Build Something Great Together
          </h1>
          <p
            className="text-gray-300 pt-[20px] text-[17px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
            alias repellendus aut cum, non, blanditiis quibusdam corrupti
            doloremque distinctio architecto voluptatum.
          </p>

          <Button
            className="mt-[30px]"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            Call +234 8101 3308 34
          </Button>
        </div>
      </div>
    </section>
  );
};
