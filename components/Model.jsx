import { Phone, Feature } from "@/modules";
import { features } from "@/constants";

const Model = () => {
  return (
    <section className="w-full h-auto overflow-hidden" id="about">
      <h2 className="title">Por que elegirnos</h2>
      <div className="w-full h-full px-8">
        <div className="w-full h-full py-6">
          <div className="w-full h-full flex lg:flex-row flex-col gap-y-6">
            <div className="w-full h-full items-center justify-center flex">
              <Phone />
            </div>
            <div className="flex w-full h-full items-center justify-center gap-y-10 flex-col">
              {features.map(({ title, alt, img, desc }, i) => (
                <Feature
                  key={i}
                  alt={alt}
                  img={img}
                  title={title}
                  desc={desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
