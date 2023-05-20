import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#fc7633]" />
                    <div className="w-1 sm:h-80 h-40 orange-red-gradient" />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className="text-[#fc7633]">Jay</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I am a Full Stack Developer,{" "}
                        <br className="sm:block hidden" />
                        Web Developer and Software Engineer
                    </p>
                </div>
                <div className="ml-12">
                    <img
                        className="w-60 h-60 object-cover orange-pink-gradient p-[2px] rounded-full shadow-card cursor-pointer"
                        src="/jay.png"
                        alt="Jay_Avatar"
                    />
                </div>
            </div>

            <ComputersCanvas />

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-amber-600 flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-amber-600 mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
