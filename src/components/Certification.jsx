import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utills/motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { github } from "../assets";
import { Tilt } from "react-tilt";

const CertificateCard = ({
      index,
      image,
      name,
      description,
      tags,
      source_code_link,
    }) => {
      return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
          >
            <div className="relative w-full h-[250px]">
              <img
                src={image}
                alt="project_image"
                className="w-full h-full object-cover rounded-2xl"
              />
    
              <div className="absolute inset-0 flex justify-end m-3 card_img_hover">
                <div
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  onClick={() => window.open(source_code_link, "_black")}
                >
                  <img
                    src="https://logos-world.net/wp-content/uploads/2020/11/Google-Drive-Logo-700x394.png"
                    alt="source code"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
    
            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
          </Tilt>
        </motion.div>
      );
    };
    
const Certification = () => {
  return (
      <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Certificates</p>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The certificates listed below demonstrate my practical skills and industry-relevant experience through real-world applications. 
          Each certificate is accompanied by projects that showcase my ability to solve complex problems, adapt to different technologies, and build scalable solutions. 
          You'll find links to code repositories and live demos that reflect my commitment to continuous learning and hands-on development.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((project, index) => (
          <CertificateCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Certification, "")