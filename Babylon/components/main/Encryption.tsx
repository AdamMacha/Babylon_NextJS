"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-col relative items-center justify-center min-h-fit w-full h-full">
       <div className="flex w-auto h-auto top-0 mb-2 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          
          <span className="bungee-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Our $BBLN token:
          </span>
        </motion.div>
      </div> 

      <div className="flex flex-col items-center justify-center w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/tokenomics.jpg"
            alt="Lock Main"
            width={1000}
            height={1000}
            className="-z-30"
          />
        </div>

        {/* <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div> */}
      </div>
      {/* <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div> */}

      {/* <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div> */}
    </div>
  );
};

export default Encryption;