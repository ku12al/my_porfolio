import React from "react";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utills/motion";
import { motion } from "framer-motion";
import { styles } from "../style";

const Programming_platform = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Programing Platform</p>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm passionate about solving real-world problems and sharpening my
          skills in Data Structures and Algorithms (DSA). With a strong
          foundation in logic and programming, I consistently challenge myself
          through coding platforms, contests, and daily practice to become a
          better problem solver and efficient developer. Here's where I actively
          push my limits and grow my coding abilities:
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Programming_platform, " ");
