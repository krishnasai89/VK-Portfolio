import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
// import { image } from "framer-motion/client";
import project1 from "../../images/Project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";
import project4 from "../../images/website-img-4.jpg";

const projects = [
  {
    name: "Zomato-ui-clone",
    year: "jan 2025",
    align: "right",
    // image: "../../public/images/website-img-1.jpg",
    image: project1,
    link: "https://zomato-clone-ui.vercel.app/",
  },
  {
    name: "Weather Application",
    year: "sep 2024",
    align: "left",
    // image: "../../public/images/website-img-2.webp",
    image: project2,
    link: "https://weather-app-main-theta.vercel.app/",
  },
  {
    name: "Nike",
    year: "Nov 2024",
    align: "right",
    // image: "../../public/images/website-img-3.jpg",
    image: project3,
    link: "https://nike-gray-beta.vercel.app/",
  },
  {
    name: "Login-system-ui-redux",
    year: "Dec2024",
    align: "left",
    image: project4,
    link: "https://login-system-dusky-phi.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
