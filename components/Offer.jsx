import { Slider } from "@/modules";

const Offer = () => {
  return (
    <section 
    className="section flex w-full h-auto flex-col gap-y-20 overflow-x-hidden"
    id="offer"
    >
      <div className="flex w-full h-full mt-16">
        <Slider />
      </div>
    </section>
  );
};

export default Offer;
