const Intro = ({ heading, subHeading, description }) => {
  return (
    <>
      <h4 className="text-center mb-2 text-lg font-ovo">{heading}</h4>
      <h2 className="text-center text-5xl font-ovo ">{subHeading}</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        {description}
      </p>
    </>
  );
};

export default Intro;
