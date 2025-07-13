const Intro = ({ heading, title, subHeading, description }) => {
  return (
    <>
      <h4 className="text-center mb-2 text-2xl font-josefin tracking-tighter">
        {heading}
      </h4>
      <h2 className="text-center text-5xl font-josefin font-semibold tracking-tighter">
        {subHeading}
      </h2>
      <h2 className="text-center text-5xl font-outfit font-semibold ">
        {title}
      </h2>
      <p className="text-center text-xl max-w-2xl mx-auto mb-12 font-josefin">
        {description}
      </p>
    </>
  );
};

export default Intro;
