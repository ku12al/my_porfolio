import { motion } from 'framer-motion'
import React from 'react'
import { textVariant } from '../utills/motion'
import { styles } from '../style'
import { SectionWrapper } from '../hoc'

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        What I have done so far
      </p>
      <h2 className={styles.sectionHeadText}>
        Work Experience.
      </h2>
    </motion.div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")