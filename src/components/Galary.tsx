import { GalaryImage } from "./galaryImage";

export const Galary = () => {
  const galaryImages = [
    {
      path: "/images/construction.jpg",
      placeholder: "Construction",
    },
    {
      path: "/images/renovation.jpg",
      placeholder: "Renovation",
    },
    {
      path: "/images/maintenance.jpg",
      placeholder: "Maintenance",
    },
    {
      path: "/images/design.jpg",
      placeholder: "Design",
    },
    {
      path: "/images/landscaping.jpg",
      placeholder: "Landscaping",
    },
    {
      path: "/images/remodelling.jpg",
      placeholder: "Remodeling",
    },
  ];
  return (
    <section className="pt-[100px] max-[900px]:pt-[50px]">
      <div className="container grid grid-cols-3  gap-[20px] max-[900px]:grid-cols-2">
        {galaryImages.map((i, key) => {
          return (
            <div
              key={key}
              className="h-[300px] max-[500px]:h-[170px] rounded-sm overflow-hidden"
            >
              <GalaryImage path={i.path} placeHolder={i.placeholder} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
