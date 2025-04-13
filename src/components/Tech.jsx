import React from "react";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utills/motion";



const Tech = () => {
  return (
    <><motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Tech Stacks</p>
          </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {/* <BallCanvas icon={technology.icon}/> */}
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
