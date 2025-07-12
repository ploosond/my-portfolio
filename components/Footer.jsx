"use client";

import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaBluesky } from "react-icons/fa6";
import { toast } from "sonner";
const Footer = () => {
  return (
    <div className=" bg-black text-white py-6">
      <div className="flex flex-col items-center gap-4">
        <p className="text-xl md:text-2xl lg:text-3xl  tracking-tighter">
          Think I'd be a good fit for your team or the project? Let's connect
        </p>

        <button
          onClick={() => {
            navigator.clipboard.writeText("prajwol.devkota016@gmail.com");
            toast.success("Copied contact email!");
          }}
          className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group cursor-pointer"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white">
            prajwol.devkota016@gmail.com <span>📋</span>
          </span>
        </button>

        <div className="flex gap-2">
          <Image src="/nepal.png" width={24} height={24} alt="Nepal flag" />
          <Image src="/germany.png" width={24} height={24} alt="Germany flag" />
        </div>

        <div className="flex gap-4">
          <a href="https://linkedin.com">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://github.com">
            <SiGithub size={24} />
          </a>
          <a href="https://bluesky.com">
            <FaBluesky size={24} />
          </a>
        </div>
        <p>
          {`©${new Date().getFullYear()} Prajwol Devkota. All rights reserved.`}
        </p>
      </div>
    </div>
  );
};

export default Footer;
