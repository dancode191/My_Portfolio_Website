import Image from "next/image";
import { motion, spring, Variants } from "framer-motion"
{/* fonts */}
import { dosis } from "../public/fonts/fonts";

const About = () => {

    const text = "My name is Daniel : ) i am a Full-Stack developer. my passion is web-development. i enjoy seeing my creations come to life with a strong emphasis on UX and clean interactive design. Everyday i expand and develope my skills to ensure diversity and profesional executions"

    const word = text.split(" ");


    const threeCardLines = {
        offScreen: {x:1000},
        onScreen: {
            x:0,
            transition:{
                duration:1, 
                type:"spring", 
                bounce:0.8, 
                stiffness: 100
            }
        }
    }

    const wordsContainer = {
        offScreen: {opacity: 0},
        onScreen: (i = 1) =>({
            opacity:1,
            transition:{
                staggerChildren: 0.12, delayChildren: 0.04 * i,
            },
        }),
    }

    const wordsAnimation = {
        offScreen: {
            opacity: 0, 
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            }
        },
        onScreen: {
            opacity: 1,
             y: 0,
             transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
             }
        }
    };

    return (
        <div id="about" className={`aboutContainerResp h-full w-screen relative p-10 flex justify-between gap-[100px] ${dosis.className} font-semibold items-center overflow-hidden`}>
            
           {/* profile picture */}
            <div className="profilePicResp w-[250px] h-[250px] relative">
                <Image src="/../public/assets/Daniel_profile_pic.png" alt="profile image" 
                fill 
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                priority/>
            </div>

            {/* 3 lines animation */}
            <motion.div className="LinesBoxResp w-[180px] h-[40px] mt-7 flex flex-col justify-between items-center z-[1]"
            initial={"offScreen"}
            whileInView={"onScreen"}
            transition={{staggerChildren:0.2}}>
                <motion.div className="cardLines threeLinesResp"
                variants={threeCardLines}
                ></motion.div>

                <motion.div className="cardLines threeLinesResp"
                variants={threeCardLines}
                ></motion.div>

                <motion.div className="cardLines threeLinesResp"
                variants={threeCardLines}
                ></motion.div>
            </motion.div>

            {/* about me text */}
            <motion.div className="aboutMeTextBoxResp w-[350px] relative rounded-xl z-[1000] p-3 flex flex-wrap shadow-2xl bg-[#ffffff80] overflow-y-auto"
            initial={"offScreen"}
            whileInView={"onScreen"}
            variants={wordsContainer}>

               {word.map((word, index) => (
                <motion.span className="aboutMeTextResp mr-1 h-[30px]" key={index} variants={wordsAnimation}>
                    {word}
                </motion.span>
               ))}

            </motion.div>
        </div>
    )
}

export default About;