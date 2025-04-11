import { motion } from "framer-motion";
import React, { useState } from "react";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10`}
      >
        <div className="mt-1 flex flex-row justify-center items-center mx-auto">
          <div className="flex flex-col justify-center items-center mt-5 mx-auto">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white `}>
              Hi, I'm <span className="text-[#915eff]">Kunal</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop full stack, user <br className="sm:block hidden" />{" "}
              interface and web application
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src={
              isHovered
                ? "src/assets/my_ppo_gi.png"
                : "src/assets/my_ppp.png"
            }
            alt="Kunal"
            className="w-[80%] transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </div>
      {/* <ComputersCanvas /> */}

      <div className="absolute bottom-3 xs:bottom-1 w-full flex justify-center items-center mt-0">
        <a href="#about">
          <div className="w-[30px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
