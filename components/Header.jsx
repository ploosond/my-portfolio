import { assets } from "@/assets/assets";
import { Download, MoveRightIcon } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 leading-8">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I'm Prajwol Devkota
        <Image src={assets.hand_icon} alt="hi" width={24} />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg-text-[66px] font-ovo">
        Full Stack Developer
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
        obcaecati blanditiis labore eaque, quisquam velit inventore
        necessitatibus animi distinctio pariatur!
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="bg-black text-white flex items-center justify-center gap-2 px-12 py-4 rounded-full cursor-pointer group"
        >
          Contact me
          <MoveRightIcon
            width={24}
            className="group-hover:translate-x-1 transition-transform duration-500"
          />
        </a>
        <a
          href="/resume.pdf"
          download
          className="bg-white text-black border flex items-center justify-center gap-2 px-12 py-4 rounded-full cursor-pointer group"
        >
          My resume
          <Download
            width={24}
            className="group-hover:translate-y-1 transition-transform duration-500"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
