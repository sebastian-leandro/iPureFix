"use client";
import Image from "next/image";
import { works } from "@/constants";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { LuCircleDot, LuCircle } from "react-icons/lu";

const Slider = () => {
  // Slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => setCurrentIndex(currentIndex === 0 ? works.length - 1 : currentIndex - 1);
  const nextSlide = () => setCurrentIndex(currentIndex === works.length - 1 ? 0 : currentIndex + 1);

  return (
    <div
      className={`max-w-[1200px] relative bg-card-v1 w-full max-h-[450px] h-full rounded-2xl p-[0.1rem] flex overflow-hidden duration-700 text-white`}
    >
      <div className="w-full h-full bg-tertiary rounded-2xl flex px-6">
      <button onClick={prevSlide} className="btn-arrow z-50 cursor-pointer duration-500">
        <HiChevronLeft />
      </button>
      <button onClick={nextSlide} className="btn-arrow z-50 duration-500">
        <HiChevronRight />
      </button>
      {works.map(({ src, alt, title, subTitle }, i) => (
        <div
          className={` flex-col md:flex-row w-full slider h-full p-6 flex items-center justify-between duration-700`}
          style={{ translate: `${-100 * currentIndex}%` }}
          key={i}
        >
          <div className="relative w-full h-[375px]">
            <Image
              src={src}
              alt={alt}
              className="object-cover rounded-3xl w-full h-full"
              fill
              loading="lazy"
            />
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <h3 className="title">{title}</h3>
            <p className="paragraph w-[90%] text-center ">{subTitle}</p>
          </div>
        </div>
      ))}
      <div className="absolute flex w-full gap-x-2 bottom-[0.5rem] left-0 right-0 items-center justify-center">
        {works.map((_, index) => (
          <button
            className="btn-icon"
            onClick={() => setCurrentIndex(index)}
            key={index}
          >
            {index === currentIndex ? <LuCircleDot /> : <LuCircle />}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Slider;
