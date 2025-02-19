import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        <h1 className="text-2xl mb-3">👋 Hi, I am Krishna Sai !</h1>
        <div className="mb-3">
          I am a passionate Computer Software Engineering graduate with a focus
          on front-end development. With a strong foundation in HTML, CSS,
          JavaScript, and React.js, I thrive on creating visually appealing and
          user-friendly interfaces that enhance the digital experience.
        </div>
        <div className="mb-3">
          I am excited to leverage my skills to contribute to innovative
          projects and collaborate with like-minded professionals. My goal is to
          transform ideas into reality through code and to continuously grow as
          a developer.
        </div>
        <div>
          Currently, I am actively seeking a dynamic role where I can apply my
          technical skills and creativity to drive growth within an
          organization. If you’re looking for someone dedicated, enthusiastic,
          and ready to tackle new challenges, let connect!
        </div>
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
