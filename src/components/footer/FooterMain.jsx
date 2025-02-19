import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const FooterMain = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 100 * 60 * 60 * 24);
    return () => clearInterval(intervalId);
  }, []);
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    // {
    //   name: "Experience",
    //   section: "experience",
    // },
    {
      name: "Projects",
      section: "projects",
    },
  ];
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-lightGrey ">Krishna Sai Vellampalli</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © {year} KrishnaSai | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
