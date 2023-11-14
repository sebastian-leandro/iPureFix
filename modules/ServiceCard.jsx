import Image from "next/image";

const ServiceCard = ({ title, img, alt, description, i}) => {
  return (
    <div className="w-[280px] h-[250px]">
      <div className="w-full h-full py-8 gap-y-12 flex flex-col bg-filter rounded-2xl ">
        <div className="w-full flex items-center">
          <Image
            src={img}
            alt={alt}
            className="m-auto"
            width={64}
            height={64}
          />
        </div>
        <div className="flex flex-col text-center items-center gap-y-4">
          <h3 className="titular text-center">{title}</h3>
          <p className="paragraph text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
