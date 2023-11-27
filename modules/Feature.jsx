import Image from "next/image";

const Feature = ({ alt, img, title, desc }) => {
  return (
    <div className="w-[275px] md:w-[450px] h-[300px] md:h-[100px] bg-filter px-4 py-2">
      <div className="w-full h-full flex sm:flex-row flex-col">
        <div className="h-full items-center justify-center flex">
          <Image src={img} alt={alt} width={48} height={48} />
        </div>
        <div className="flex flex-col h-full flex-grow gap-y-4 justify-center items-center">
          <h3 className="titular text-center">{title}</h3>
          <p className="paragraph text-center">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
