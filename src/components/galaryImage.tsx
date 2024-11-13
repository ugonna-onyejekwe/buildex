import Image from "next/image";

export const GalaryImage = ({
  path,
  placeHolder,
}: {
  path: string;
  placeHolder: string;
}) => {
  return (
    <div className="size-full relative before:absolute before:bg-black before:opacity-[0.3] before:size-full  before:top-0 before:left-0 right-0 bottom-0 z-20">
      <Image
        src={path}
        alt="image"
        height={1000}
        width={1000}
        className="size-full relative  z-[-1]"
      />
      <h4 className="absolute left-[20px] bottom-[10px] bg-white capitalize text-[15px] text-text_color rounded-full py-[8px] px-[20px] max-[500px]:text-[13px]">
        {placeHolder}
      </h4>
    </div>
  );
};
