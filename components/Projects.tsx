import Image from "next/image";
import { AnimatePresence, Variants, easeInOut, motion } from "framer-motion"
import  heart  from "../public/assets/heart.svg";
import { useEffect, useState } from "react";
{/* fonts */}
import { dosis } from "../public/fonts/fonts";
{/* icons */}
import { IoIosConstruct } from "react-icons/io"

const Projects = () => {

    const [isProjectOpen1, setIsProjectOpen1] = useState(false);
    const [isProjectOpen2, setIsProjectOpen2] = useState(false);
    const [isProjectOpen3, setIsProjectOpen3] = useState(false);
    const [isProjectOpen4, setIsProjectOpen4] = useState(false);
    const [isProjectOpen5, setIsProjectOpen5] = useState(false);
    const [isProjectOpen6, setIsProjectOpen6] = useState(false);

    const [scale, setScale] = useState(1.2);
    const [tools, setTools] = useState(false);


    useEffect(()=> {

        // change scale of projects box according to screen width. 
        window.addEventListener('resize', ()=> {
            if(window.innerWidth <= 420){
                setScale(2.8)
            }
            else if(window.innerWidth <= 850 && window.innerHeight >= 1000){
                setScale(2.2)
            }
            else{
                setScale(1.2)
            }
        })

    },[])
    
    const pagesAnimation = {
        offScreen: {y:-1000},
        onScreen: {
            y:0,
            transition:{
                duration:1, 
                type:"spring", 
                bounce:0.8, 
                stiffness: 100
            }
        }
    }
    
    const projectAnimate: Variants  = {
        open: (position:any) => ({
            top:position[0], 
            left:position[1], 
            scale: scale,
            position:"relative",
            zIndex:1000,
            transition:{
                duration:2,
                type:"spring", 
                bounce:0.8, 
                stiffness: 100
            }
        }),
        close: {
            scale:1,
            transition:{
                duration:2,
                type:"spring", 
                bounce:1, 
                stiffness: 120
            }
        }
    }

    return (
        <div id="projects" className={`projPageResp h-full w-screen px-5 pt-5 flex flex-col justify-center items-center ${dosis.className} font-semibold overflow-hidden`}>
            
            <div className="projContainerResp w-[100%] grid grid-rows-rowSet3">

                {/* upper row */}
                <div className="projGroupResp grid grid-cols-2">
                   {/* project 1 */}
                    <motion.div className="projBoxResp relative m-auto w-[400px] h-[150px] z-[500] shadow-lg shadow-[#F7F7FF]" onClick={()=> setIsProjectOpen1(!isProjectOpen1)}
                    animate={isProjectOpen1 ? "open": "close"}
                    variants={projectAnimate}
                    custom={["50%","50%"]}>
                        
                        
                        <div className="w-[100%] h-[100%] relative">
                                <Image className={`border-[2px]  border-t-[#29243e] border-b-black border-l-[#29243e] border-r-[#29243e] ${isProjectOpen1 ? "rounded-t-xl": "rounded-xl"}`}  src="/project1.svg" alt="project Picture 1" 
                                fill
                                style={{objectFit: "cover"}}
                                sizes="(max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                                ></Image>
                        </div>
                        {isProjectOpen1 && (
                            <a href="https://assassin-my-neighbor.netlify.app/"
                            target="_blank">
                                <motion.p className="projTextResp projectTextBox"
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{duration:1}}> 
                                <span className="text-[#cc1f59] font-extrabold">Assassin My Neighbor:</span> a moment of dark humor that i enjoy making. i belive we all could find their service quite useful at least once, animation done by Css<br /><span className="toolstextResp bg-gradient-to-r from-blue-300 via-green-500 to-indigo-300 text-[12px] text-transparent bg-clip-text font-extrabold">React,Html,Css,Js</span>
                                </motion.p>
                            </a>
                        )}
                    </motion.div>
                    
                    {/* project 2 */}
                    <motion.div className="projBoxResp relative m-auto w-[400px] h-[150px] z-[500] shadow-lg shadow-[#F7F7FF]" onClick={()=> setIsProjectOpen2(!isProjectOpen2)}
                    animate={isProjectOpen2 ? "open": "close"}
                    variants={projectAnimate}
                    custom={["50%","-50%"]}>
                        
                        
                        <div className="w-[100%] h-[100%] relative">
                                <Image className={`border-[2px]  border-t-[#29243e] border-b-black border-l-[#29243e] border-r-[#29243e] ${isProjectOpen2 ? "rounded-t-xl": "rounded-xl"}`}  src="/project2.svg" alt="project Picture 2" 
                                fill
                                style={{objectFit: "cover"}}
                                sizes="(max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                                ></Image>
                        </div>
                        {isProjectOpen2 && (
                            <a href="https://yourdailyadvice.netlify.app" target="_blank">
                                <motion.p className="projTextResp projectTextBox"
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{duration:1}}> 
                                <span className="text-[#df7431] font-extrabold">Daily Advice:</span> i worked with Api and simple clean design to randomly popups daily advices also can be sent to your email <br /><span className="toolstextResp bg-gradient-to-r from-blue-300 via-green-500 to-indigo-300 text-[12px] text-transparent bg-clip-text font-extrabold">React,Html,Css,Js,Api,Axios,email-js</span>
                                </motion.p>
                            </a>
                        )}
                    </motion.div>
                    
                </div>

                {/* middel row */}
                <div className="projGroupResp grid grid-cols-3">
                    {/* project 3 */}
                    <motion.div className="projBoxResp proj3Resp relative m-auto w-[300px] h-[130px] rounded-t-xl shadow-lg shadow-[#F7F7FF]" onClick={()=> setIsProjectOpen3(!isProjectOpen3)}
                    animate={isProjectOpen3 ? "open": "close"}
                    variants={projectAnimate}
                    custom={["-20%","100%"]}>
                        
                        
                        <div className="w-[100%] h-[100%] relative">
                                <Image className={`border-[2px]  border-t-[#29243e] border-b-black border-l-[#29243e] border-r-[#29243e] ${isProjectOpen3 ? "rounded-t-xl": "rounded-xl"}`}  src="/project3.svg" alt="project Picture 3" 
                                fill
                                style={{objectFit: "cover"}}
                                sizes="(max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                                ></Image>
                        </div>
                        {isProjectOpen3 && (
                            <a href="https://dronlivery.netlify.app/"
                            target="_blank">
                                <motion.p className="projTextResp projectTextBox"
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{duration:1}}> 
                                <span className="text-[#ffe23d] font-extrabold">Dronlivery:</span> landing page for drone deliveries company, the day pizza will fly to your window <br /><span className="toolstextResp bg-gradient-to-r from-blue-300 via-green-500 to-indigo-300 text-[12px] text-transparent bg-clip-text font-extrabold">Html,Css</span>
                                </motion.p>
                            </a>
                        )}
                    </motion.div>

                    {/* animation images - folder with 2 pages */}
                    <motion.div className="folderBox relative flex justify-center items-start z-[10]"
                    initial={"offScreen"}
                    whileInView={"onScreen"}
                    transition={{staggerChildren:0.2}}>
                        <motion.div className="page2Resp relative h-[110px] w-[70px] mr-4" 
                        variants={pagesAnimation}>
                            <Image src="/page2.png" alt="page1" 
                            fill
                            sizes="(max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                            ></Image>
                        </motion.div >
                        <motion.div className="page1Resp absolute h-[100px] w-[100px] ml-6 mt-3" variants={pagesAnimation}>
                            <Image src="/page1.png" alt="page2" 
                            fill
                            sizes="(max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                            ></Image>
                        </motion.div>
                    </motion.div>

                    {/* project 4 */}
                    <motion.div className="projBoxResp proj4Resp relative m-auto w-[300px] h-[130px] rounded-t-xl shadow-lg shadow-[#F7F7FF]" onClick={()=> setIsProjectOpen4(!isProjectOpen4)}
                    animate={isProjectOpen4 ? "open": "close"}
                    variants={projectAnimate}
                    custom={["-20%","-100%"]}>
                        
                        
                        <div className="w-[100%] h-[100%] relative">
                                <Image className={`border-[2px]  border-t-[#29243e] border-b-black border-l-[#29243e] border-r-[#29243e] ${isProjectOpen4 ? "rounded-t-xl": "rounded-xl"}`}  src="/project4.svg" alt="project Picture 4" 
                                fill
                                style={{objectFit: "cover"}}
                                sizes="(max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                                ></Image>
                        </div>
                        {isProjectOpen4 && (
                            <a href="https://swimmingwithsharksschool.netlify.app/"
                            target="_blank">
                                <motion.p className="projTextResp projectTextBox"
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{duration:1}}> 
                                <span className="text-[#3da8ff] font-extrabold">Swimming With Sharks:</span> landing page for swimming scholl, why to swim with friends when you can swim with sharks? css animation with short interactive form <br /><span className="toolstextResp bg-gradient-to-r from-blue-300 via-green-500 to-indigo-300 text-[12px] text-transparent bg-clip-text font-extrabold">Html,Css,email-js</span>
                                </motion.p>
                            </a>
                        )}
                    </motion.div>
                </div>

                {/* lower row */}
                <div className="projGroupResp grid grid-cols-2">
                    {/* project 5 */}
                    <motion.div className="projBoxResp relative m-auto w-[400px] h-[150px] z-[500] shadow-lg shadow-[#F7F7FF]" onClick={()=> setIsProjectOpen5(!isProjectOpen5)}
                    animate={isProjectOpen5 ? "open": "close"}
                    variants={projectAnimate}
                    custom={["-130%","50%"]}>
                        
                        
                        <div className="w-[100%] h-[100%] relative">
                                <Image className={`border-[2px]  border-t-[#29243e] border-b-black border-l-[#29243e] border-r-[#29243e] ${isProjectOpen5 ? "rounded-t-xl": "rounded-xl"}`}  src="/project5.svg" alt="project Picture 5" 
                                fill
                                style={{objectFit: "cover"}}
                                sizes="(max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                                ></Image>
                        </div>
                        {isProjectOpen5 && (
                            <a href="https://coupons-world-frontend.onrender.com" target="_blank">
                                <motion.p className="projTextResp projectTextBox"
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{duration:1}}> 
                                <span className="text-[#bde1fe] font-extrabold">Course Project:</span> fullstack e-commers coupons website, working with DB, email-verification,user-auth, and more. hosted on AWS-RDS and render.  <br /><span className="toolstextResp bg-gradient-to-r from-blue-300 via-green-500 to-indigo-300 text-[12px] text-transparent bg-clip-text font-extrabold">React,Html,Css,Ts,Redux,email-js,java,spring,Multi-Threads,MySql and more</span>
                                </motion.p>
                            </a>
                        )}
                    </motion.div>
                    
                    {/* project 6 */}
                    <motion.div className="projBoxResp relative m-auto w-[400px] h-[150px] z-[500] shadow-lg shadow-[#F7F7FF]" onClick={()=> setIsProjectOpen6(!isProjectOpen6)}
                    animate={isProjectOpen6 ? "open": "close"}
                    variants={projectAnimate}
                    custom={["-130%","-50%"]}>
                        
                        
                        <div className="w-[100%] h-[100%] relative">
                                <Image className={`${isProjectOpen6 ? "rounded-t-xl": "rounded-xl"}`}  src="/projectPicture.png" alt="projectPicture" 
                                fill
                                sizes="(max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                                ></Image>
                        </div>
                        {isProjectOpen6 && (
                            <a href="#">
                                <motion.p className="projTextResp projectTextBox"
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{duration:1}}> 
                                In progress.... <IoIosConstruct className="inline" />
                                </motion.p>
                            </a>
                        )}
                    </motion.div>

                    
                </div>
            </div>

            {/* bottom text and image */}
            <div className={`heartContainerResp relative w-[300px] h-[50px] gap-14 flex mr-[70px] mt-4 ${dosis.className} font-extrabold`}>
                <p className="bottTextResp self-center">This website made with </p>
                <motion.div className="heartBoxResp absolute top-[7px] right-[97px]"
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:2.5}}>
                    <Image src={heart} alt="heart" className="heartResp" width="35" height="35"></Image>
                </motion.div>
                <button className="bottBtnResp h-[25px] w-[80px] flex items-center justify-center self-center bg-gradient-to-b from-red-900 to-red-400 text-transparent bg-clip-text z-[500]"
                onClick={() => setTools(!tools)} >
                    And With...
                </button>

                <AnimatePresence>
                { tools && 
                    <motion.div 
                    className="toolBoxsResp absolute w-[380px] h-[auto] py-2 flex justify-center items-center bottom-[-60px] bg-[#F3EFE0] border-[3px] border-[#29243e] rounded-xl z-[1000] cursor-pointer"
                    animate={{bottom: 0}}
                    transition={{duration: 1}}
                    exit={{bottom: -60}}
                    onClick={() => setTools(false)}>
                        <p className="bg-gradient-to-r from-blue-300 via-green-500 to-indigo-300 text-transparent bg-clip-text">React, Next.js, Ts, Tailwind, Framer-motion, Formik, Yup</p>
                    </motion.div>
                
                }
                </AnimatePresence>
            </div>
            
        </div>
    )
}

export default Projects;