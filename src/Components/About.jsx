import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiFigma,
  SiAdobephotoshop,
  SiRedux,
  SiPostman,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

import { motion } from "framer-motion";

function About() {
  const iconClasses =
    "text-4xl text-gray-700 hover:text-blue-600 transition-colors duration-300";

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        className="flex flex-col md:flex-row gap-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Left - About Text */}
        <motion.div className="md:w-1/2 max-w-xl">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            About Me
          </h2>

          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Hi, I’m Amin — a passionate Front-end Developer based in Bangalore,
            India 📍. I build clean, responsive interfaces with React and the
            MERN stack, focusing on performance and seamless user experiences.
          </p>

          <p className="text-gray-600 text-base leading-relaxed mb-4">
            I’m driven by creating software that solves real-world problems and
            positively impacts people’s lives. Beyond development, I actively
            lead and participate in tech communities on campus, have won several
            inter-college hackathons, and regularly join tech events.
          </p>

          <p className="text-gray-600 text-base leading-relaxed">
            When I’m not coding, you’ll find me playing football, cheering for
            FC Barcelona, hanging out with friends, or exploring new hobbies. I
            also enjoy hiking, experimenting with recipes in the kitchen, and
            attending local art exhibitions.
          </p>
        </motion.div>

        {/* Right - Tech & Tools Icons */}
        <motion.div className="md:w-1/2 flex flex-col gap-10 justify-center">
          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-6">
              {[
                FaHtml5,
                FaCss3Alt,
                SiJavascript,
                FaReact,
                SiRedux,
                SiNodedotjs,
                SiExpress,
                SiMongodb,
              ].map((Icon, i) => (
                <Icon key={i} className={iconClasses} />
              ))}
            </div>
          </div>

          {/* Frontend Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Frontend Tools
            </h3>
            <div className="flex flex-wrap gap-6">
              {[FaGitAlt, FaGithub, SiPostman, SiVite].map((Icon, i) => (
                <Icon key={i} className={iconClasses} />
              ))}
            </div>
          </div>

          {/* UI & Design */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              UI & Design Tools
            </h3>
            <div className="flex flex-wrap gap-6">
              {[FaBootstrap, SiTailwindcss, SiFigma, SiAdobephotoshop].map(
                (Icon, i) => (
                  <Icon key={i} className={iconClasses} />
                )
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
