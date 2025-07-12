import { assets, workData } from "@/assets/assets";
import Intro from "./Intro";
import Image from "next/image";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <Intro
        heading="My portfolio"
        subHeading="My latest work"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt neque
        temporibus tenetur, eum ipsam a, similique repellat quisquam rerum eius
        magni dolore ab accusantium amet vero, repellendus nam voluptas."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 ">
        {workData.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container mx-auto w-max group">
        <button className="bg-white text-black border flex items-center justify-center gap-2 px-12 py-4 rounded-full cursor-pointer">
          <Link href="https://github.com/ploosond?tab=repositories">
            Show more
          </Link>
          <MoveRightIcon
            width={24}
            className="group-hover:translate-x-1 transition-transform duration-500"
          />
        </button>
      </div>
    </div>
  );
};

export default Work;
