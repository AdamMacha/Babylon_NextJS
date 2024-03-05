import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { BiLogoTwitter } from "react-icons/bi";

const Navbar = () => {
  return (
<div className="w-full h-[85px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[0px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Logos.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] text-xl hidden md:block text-gray-300">
            Solana Babylon
          </span>
        </a>

        <div className="w-[600px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Chart
            </a>
            <a href="https://linktr.ee/Solana_Babylon" className="cursor-pointer">
              Linktree
            </a>
            <a href="https://discord.gg/9JrkwhYE" className="cursor-pointer">
              Discord
            </a>
            <a href="https://www.instagram.com/solana_babylon/" className="cursor-pointer">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> BUY $BBLN </span>
            </a>
          </div>
        </div>


        <div className="flex flex-row gap-5">
          <a
          href="https://www.instagram.com/solana_babylon/"
          >
          <Image
              src={Socials[0].src}
              alt={Socials[0].name}
              key={Socials[0].name}
              width={24}
              height={24}
            />
          </a>
          <a
          href="https://discord.gg/q5gdKzdY"
          >
          <Image
              src={Socials[1].src}
              alt={Socials[1].name}
              key={Socials[1].name}
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;