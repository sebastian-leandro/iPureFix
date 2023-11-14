"use client";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { nav } from "@/constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [move, setMove] = useState(false);


useEffect(() => {
  const handleScroll = () => window.scrollY > 144 ? setMove(true) : setMove(false);
  handleScroll();
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [])

  return (
    <nav
      className={`${
        move ? "nav" : ""
      } flex justify-between items-center w-full h-[72px] px-8 py-2 fixed left-0 top-0 z-50 border-bottom-bg `}
    >
      <div className="w-full h-full items-center flex justify-start flex-grow">
        <Image
          src={"/logo/logo.png"}
          alt="Logo iPure"
          width={140}
          height={40}
          className="object-contain cursor-pointer"
          onClick={() => window.location.reload()}
        />
      </div>
      <ul
        className={`items-center hidden md:flex justify-center w-full   h-full gap-x-4 ${
          move ? "border-bottom-bg" : ""
        }`}
      >
        {nav.map(({ title, path }, i) => (
          <li key={i} className="link">
            <Link href={`#${path}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <div className="w-full hidden md:flex h-full items-center flex-grow justify-end">
        <Link href={""} className="btn-primary w-fit h-fit">
          Contactanos
        </Link>
      </div>

      <div className="md:hidden flex items-center justify-end w-full h-full">
        <div
          className="text-3xl text-white cursor-pointer"
          onClick={() => setToggle((prevToggle) => !prevToggle)}
        >
          {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`${
            toggle ? "flex" : "hidden"
          } flex-col gap-y-4 items-center justify-center absolute right-1 top-[72px] bg-filter`}
        >
          {nav.map(({ title, path }, i) => (
            <li key={i} className="link">
              <Link href={`#${path}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
