import { assets } from "@/assets/assets";
import { Download, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Intro from "./Intro";

const Header = () => {
  return (
    <header className="w-full h-screen flex flex-col items-center justify-center gap-4 lg:overflow-hidden pt-32">
      <Image
        src={assets.profile_img}
        alt="profile image"
        className="w-40 sm:w-56 lg:w-64 rounded-full"
      />
      <Intro
        heading="HELLO, I AM"
        title="FULL STACK DEVELOPER"
        subHeading="PRAJWOL DEVKOTA"
        description="Full stack developer with experience building scalable, user-centered web applications. Skilled in both frontend and backend technologies, I focus on writing clean, efficient code and delivering reliable digital solutions that solve real-world problems"
      />
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="relative bg-black text-white flex items-center justify-center gap-2 px-12 py-4 rounded-full cursor-pointer group overflow-hidden transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-2">
            Contact me
            <MoveRightIcon
              width={24}
              className="group-hover:translate-x-1 transition-transform duration-500"
            />
          </span>
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </a>

        <a
          href="/resume.pdf"
          download
          className="relative bg-white text-black border flex items-center justify-center gap-2 px-12 py-4 rounded-full cursor-pointer group overflow-hidden transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-2">
            My resume
            <Download
              width={24}
              className="group-hover:translate-y-1 transition-transform duration-500"
            />
          </span>
          <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </a>
      </div>
    </header>
  );
};

export default Header;
