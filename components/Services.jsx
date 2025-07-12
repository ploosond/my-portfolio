import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import Intro from "./Intro";

const Services = () => {
  return (
    <div id="stack" className="w-full px-[12%] py-10 scroll-mt-20">
      <Intro
        heading="What I offer"
        subHeading="My Services"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt neque
        temporibus tenetur, eum ipsam a, similique repellat quisquam rerum eius
        magni dolore ab accusantium amet vero, repellendus nam voluptas."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 ">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="px-4 py-6 border border-solid border-black shadow-[-10px_10px_0px_#000]"
          >
            <Image src={icon} alt="icon" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more <Image src={assets.right_arrow} className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
