import { services } from "@/constants";
import { ServiceCard } from "@/modules";

const Service = () => {
  return (
    <section
      className="w-full h-auto flex items-center overflow-hidden"
    >
      <div className="w-fit items-center h-full py-12 px-8 flex justify-center rounded-2xl ">
        <div className=" flex-wrap w-fit gap-x-8 flex md:flex-row flex-col gap-y-8 duration-300">
          {services.map(({ title, img, alt, description }, i) => (
            <ServiceCard
              key={i}
              title={title}
              img={img}
              alt={alt}
              i={i}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
