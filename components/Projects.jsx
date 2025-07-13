import Image from "next/image";
import Intro from "./Intro";
import { TbBrandGithub, TbBrowserShare } from "react-icons/tb";
import { workData } from "@/assets/assets";

const Projects = () => {
  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <Intro
        heading="My portfolio"
        subHeading="My latest projects"
        description="Here’s what I’ve been building lately—beautiful, responsive, and user-friendly digital experiences."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {workData.map((project, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="w-96 bg-white shadow-md rounded-xl overflow-hidden mt-6 text-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative w-full aspect-[16/10]">
                <Image src={project.bgImage} alt={project.title} fill />
              </div>
              <div className="p-6">
                <h5 className="text-xl font-semibold text-blue-gray-900 mb-2 tracking-tighter font-josefin">
                  {project.title}
                </h5>
                <p className="text-sm font-light line-clamp-2 font-josefin">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="relative p-2.5 bg-gray-900 text-white rounded-full shadow-md shadow-gray-900/10 overflow-hidden group transition-all duration-300 cursor-pointer">
                      <TbBrowserShare className="relative z-10" />
                      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    </button>
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="relative p-2.5 bg-gray-900 text-white rounded-full shadow-md shadow-gray-900/10 overflow-hidden group transition-all duration-300 cursor-pointer">
                      <TbBrandGithub className="relative z-10" />
                      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
