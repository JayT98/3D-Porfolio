import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full orange-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer">
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                    src={icon}
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                />

                <h3 className="text-white text-[20px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                I'm a skilled software developer with experience in TypeScript
                and JavaScript, and expertise in frameworks like React and
                Node.js. I'm a quick learner and collaborate closely with
                clients to create efficient, scalable, and user-friendly
                solutions that solve real-world problems. My passion for
                programming and problem-solving has led me to continuously
                explore new technologies and stay up-to-date with the latest
                industry trends. I am excited to collaborate and contribute my
                skills to any project or team that values creativity,
                innovation, and quality software development. Let's work
                together to bring your ideas to life!
            </motion.p>

            <div className="flex flex-wrap mt-5">
                <button
                    type="submit"
                    className="w-56 h-12 rounded-xl outline-none text-white font-bold shadow-md shadow-primary">
                    <a
                        href="/documents/Trung_Nguyen.pdf"
                        className="py-6 px-10 orange-pink-gradient mt-3 rounded-xl outline-none text-white font-bold shadow-md shadow-primary flex content-center align-middle"
                        target="_blank">
                        Download My CV
                    </a>
                </button>
            </div>
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
