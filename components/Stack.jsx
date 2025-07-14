import Intro from "./Intro";
import { techStack } from "@/assets/assets";

const Stack = () => {
  return (
    <div id="stack" className="w-full h-screen px-[12%] pt-10 scroll-mt-20">
      <Intro
        heading="My Stack"
        subHeading="Technologies & Tools I use"
        description="I work across the full stack—from designing clean user interfaces to building performant backend systems with the latest tech."
      />

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-4 px-4">
        {techStack.map((Icon, index) => (
          <div
            key={index}
            className="relative w-32 flex items-center justify-center rounded-xl backdrop-blur-xl bg-white/50 border border-white/70 shadow-md p-4 group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 "
          >
            <Icon className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
