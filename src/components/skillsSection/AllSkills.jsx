import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
// import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiMysql,
  SiMongodb,
  SiPython,
  SiDjango,
} from "react-icons/si";
// import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill, RiJavaFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  // {
  //   skill: "TypeScript",
  //   icon: SiTypescript,
  // },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  // {
  //   skill: "NextJS",
  //   icon: SiNextdotjs,
  // },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Python",
    icon: SiPython,
  },
  {
    skill: "Java",
    icon: RiJavaFill,
  },
  {
    skill: "MySQL",
    icon: SiMysql,
  },
  {
    skill: "Mongo DB",
    icon: SiMongodb,
  },
  {
    skill: "Django",
    icon: SiDjango,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
