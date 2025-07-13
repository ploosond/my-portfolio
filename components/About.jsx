import Intro from "./Intro";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <Intro
        heading="Introduction"
        subHeading="About me"
        description="I’m passionate about creating intuitive and impactful digital experiences across web, mobile, and AI platforms. I enjoy tackling challenges through thoughtful design and continuous learning, building products that adapt and grow with users."
      />
      <div className="flex flex-col md:flex-row justify-center gap-20">
        {/* Education */}
        <section className="px-4 py-3">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="text-lg font-semibold">
                M.Sc. Information Engineering and Computer Science
              </h3>
              <p className="text-sm text-gray-500">
                Rhine-Waal University of Applied Sciences – Kamp-Lintfort,
                Germany
              </p>
              <p className="text-sm text-gray-500">03/2023 – Present</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">
                B.Sc. Computer Science and Information Technology
              </h3>
              <p className="text-sm text-gray-500">
                University of Social Sciences – Warsaw, Poland
              </p>
              <p className="text-sm text-gray-500">08/2016 – 07/2020</p>
            </li>
          </ul>
        </section>

        {/* Certifications */}
        <section className="px-4 py-3">
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="text-lg font-semibold">
                Deep Dive Into Modern Web Development
              </h3>
              <p className="text-sm text-gray-500">University of Helsinki</p>
              <p className="text-sm text-gray-500">03/2025</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">
                The Modern Python 3 Bootcamp
              </h3>
              <p className="text-sm text-gray-500">Udemy</p>
              <p className="text-sm text-gray-500">06/2020</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
