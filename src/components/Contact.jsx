import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utills/motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {};
  return (
    <div className="w-auto xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do want to say"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-full text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          <div className="flex justify-center items-center gap-4 mt-4">
            <a href="https://www.linkedin.com/in/kunal-kumar-2ab402263/" className="black-gradient rounded-full p-2">
            <img src="https://th.bing.com/th/id/R.d51da72e1f4675ba5aef9c956ed4c562?rik=FmeldpqK57Pqdw&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fofficial-linkedin-logo----17.png&ehk=D2%2b5urO8gseetYQhxdSGq2qyTRbSvoavbbmoGEuOepo%3d&risl=&pid=ImgRaw&r=0" alt="" className="w-8 h-8"/>
            </a>
            <a href="mailto:kunalsharma1272003@gmail.com" className="black-gradient rounded-full p-2">
              <img src="https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png" alt="" className="w-8 h-8 rounded-full"/>
            </a>
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
