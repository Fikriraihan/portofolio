import React from "react";
import { motion } from "framer-motion";
import { PageInfo, Skills } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  description: string;
  image: string;
};

export default function Skillss({ directionLeft, description, image }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        className="object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 fliter group-hover:grayscale transition duration-500 ease-in-out"
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={image}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl sm:text-base font-bold text-black opacity-100">{description}</p>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="group relative flex cursor-pointer">
      <motion.img
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 fliter group-hover:grayscale transition duration-500 ease-in-out"
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl sm:text-base font-bold text-black opacity-100">ReactJS</p>
        </div>
      </div>
    </div> */
}
