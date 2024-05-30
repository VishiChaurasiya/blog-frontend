"use client";

import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(true);

  return (
    <nav className="h-[72px]">
      <div className="py-2 shadow-md fixed w-full bg-white top-0 z-40 medium">
        <div className="flex justify-between lg:w-full mx-auto px-3 md:px-9 lg:px-14">
          <a
            href="/"
            className="flex items-center cursor-pointer text-[22px] font-bold"
          >
            <Image
              width="50"
              height="56"
              src="/blogify_logo.svg"
              alt="Blogify Logo"
              className="mr-3 h-[56px]"
            />
            Blogify
          </a>

          {/* Medium Screen */}
          <div className="flex gap-8">
            <p className="pt-1 cursor-pointer text-lg md:flex items-center hidden">
              About Us
            </p>

            <p className="pt-1 cursor-pointer text-lg md:flex items-center hidden">
              Portfolio
            </p>

            <p className="pt-1 cursor-pointer text-lg md:flex items-center hidden">
              Services
            </p>
          </div>
          <div className="md:flex gap-8 items-center hidden">
            <button className="w-[180px] h-[42px] flex justify-center items-center hover:bg-white hover:text-black hover:border border-black bg-black rounded-[8px] text-white text-lg font-medium transition-all duration-500">
              Try Now
            </button>
          </div>

          {/* Small Screen */}
          <div
            onClick={() => setNav(!nav)}
            className="block md:hidden mt-3 md:pr-5 pr-2"
          >
            {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={30} />}
          </div>
          <div
            className={
              !nav
                ? "fixed md:hidden bg-white z-10 left-0 top-[65px] h-full w-[100%]  ease-in-out duration-500"
                : "fixed left-[-100%]"
            }
          >
            <button className="flex flex-col items-center text-black text-center mx-auto ">
              <p className="pt-4 cursor-pointer">About Us</p>
              <p className="p-4 cursor-pointer">Portfolio</p>
              <p className="pb-4 cursor-pointer">Services</p>
              <div className="mx-auto w-[180px] h-[42px] flex justify-center items-center hdivver:bg-white hover:text-black hover:border border-black bg-black rounded-[8px] text-white text-lg font-medium transition-all duration-500">
                Try Now
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
