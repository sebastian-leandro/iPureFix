import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Hero = () => {
  return (
    <header
      className="w-full h-screen flex py-24 relative overflow-hidden hero-bg"
      id="home"
    >
      <div className="w-full h-full pt-16 flex flex-col">
        <div className="text-center">
          <h1 className="title">Repara tu iPhone en tu puerta.</h1>
          <p className="paragraph">
            Reparamos la pantalla y bateria de tu iPhone sin que te muevas de tu
            casa.
          </p>
        </div>
        <div className="w-full h-full gap-y-8 flex-grow flex-col flex justify-end items-center">
          <Link href={"https://api.whatsapp.com/send?phone=5491160131139"} className="btn-primary h-fit w-fit">
            Programa tu reparación
          </Link>
          <Link
            href={"#offer"}
            className="text-5xl cursor-pointer text-white p-2 rounded-full hover:translate-y-1 hover:bg-[rgba(255,255,255,0.5)] duration-300"
          >
            <MdOutlineKeyboardDoubleArrowDown />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
