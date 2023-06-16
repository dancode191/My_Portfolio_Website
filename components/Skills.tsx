import Image from "next/image";
import { easeInOut, motion } from "framer-motion"
import  skills  from "../public/assets/skills.svg";
{/* fonts */}
import { dosis } from "../public/fonts/fonts";
{/* skills fornt-end icons */}
import { TiHtml5 } from 'react-icons/ti';
import { IoLogoCss3 } from 'react-icons/io';
import { TbBrandJavascript } from 'react-icons/tb';
import { TbBrandTypescript } from 'react-icons/tb';
import { FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
{/* skills back-end icons*/}
import { FaJava } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { SiPostman } from 'react-icons/si';
{/* frameWorks & Libraries icons*/}
import { FaReact } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiHibernate } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';
{/* Tools, Services & in process icons*/}
import { SiVisualstudiocode } from 'react-icons/si';
import { SiAndroidstudio } from 'react-icons/si';
import { TbBrandFigma } from 'react-icons/tb';
import { GoMarkGithub } from 'react-icons/go';



const Skills = () => {
// skills icons animations settings:
    const FrontEndIcons = {
        offScreen: {x:-1000, y:-1000},
        onScreen: {
            x:0,
            y:0,
            transition:{
                duration:0.5,
                type:"spring", 
                stiffness: 70,
                mass: 0.25,
            }
        }
    }
    const BackEndIcons = {
        offScreen: {x:1000, y:-1000},
        onScreen: {
            x:0,
            y:0,
            transition:{
                duration:0.5,
                type:"spring", 
                stiffness: 70,
                mass: 0.25, 
            }
        }
    }
    const FrameWorksLibrariesIcons = {
        offScreen: {x:-1000, y:1000},
        onScreen: {
            x:0,
            y:0,
            transition:{
                duration:0.5,
                type:"spring", 
                stiffness: 70,
                mass: 0.25, 
            }
        }
    }
    const ToolsServicesIcons = {
        offScreen: {x:1000, y:1000},
        onScreen: {
            x:0,
            y:0,
            transition:{
                duration:0.5,
                type:"spring", 
                stiffness: 70,
                mass: 0.25, 
            }
        }
    }

    return (
        <div id="skills" className={`skillsContainerResp p-0 h-full w-screen flex justify-center items-center overflow-hidden ${dosis.className} font-semibold`}>
            
            <div className="skillsBoxResp my-auto  w-[100%] grid grid-rows-rowSet2 gap-2">
                <div className="skillsInnerBoxResp grid grid-cols-2 gap-5 h-[180px] w-[90%] mx-auto" >
                    {/* skills fornt-end icons */}
                    <div className="iconsCateResp py-2 px-5 h-[90%] bg-[#29243ebf] border-[3px] border-black rounded-xl">

                        <p className={`iconsTitleResp  text-[18px] text-[#F3EFE0] ${dosis.className} font-extrabold mb-2 ml-3`}>Front-end:</p>

                        <motion.div className="iconsGroupResp flex gap-2"
                        initial={"offScreen"}
                        whileInView={"onScreen"}
                        transition={{staggerChildren:0.2, staggerDirection:-1}}>
                            <ul className="iconsSubGroupResp ml-3 flex flex-col gap-3 z-[1000]">
                                <motion.div className="flex items-center"
                                variants={FrontEndIcons}>
                                
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#e34f26_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><TiHtml5 className="iconeResp h-[35px] w-[35px] text-[#e34f26] group-hover:text-[#fff] duration-1000"
                                    /></li><span className="iconTextResp ml-1 text-[#F3EFE0]">HTML</span>
                                </motion.div>
                                <motion.div className="flex items-center"
                                variants={FrontEndIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#2962ff_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><IoLogoCss3 className="iconeResp h-[30px] w-[30px] text-[#2962ff] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">CSS</span>
                                </motion.div>
                            </ul> 
                            <ul className="iconsSubGroupResp ml-3 flex flex-col gap-3 z-[1000]">
                                <motion.div className="flex items-center" 
                                variants={FrontEndIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#f7df1e_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><TbBrandJavascript className="iconeResp h-[30px] w-[30px] text-[#f7df1e] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">JavaScript</span>
                                </motion.div>
                                <motion.div className="flex items-center"
                                variants={FrontEndIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#2B4162_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><TbBrandTypescript className="iconeResp h-[30px] w-[30px] text-[#2B4162] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">TypeScript</span>
                                </motion.div>
                            </ul>
                            <ul className="iconsSubGroupResp ml-3 flex flex-col gap-3 z-[1000]">
                                <motion.div className="flex items-center"
                                variants={FrontEndIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#5a23c8_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><FaBootstrap className="iconeResp h-[30px] w-[30px] text-[#5a23c8] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">Boot Strap</span>
                                </motion.div>
                                <motion.div className="flex items-center"
                                variants={FrontEndIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#38bdf8_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><SiTailwindcss className="iconeResp h-[30px] w-[30px] text-[#38bdf8] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">Tail Wind</span>
                                </motion.div>
                            </ul>
                        </motion.div>
                    </div>

                    {/* skills back-end icons*/}
                    <div className="iconsCateResp py-2 px-5 h-[90%] bg-[#29243ebf] border-[3px] border-black rounded-xl">
                        <p className={`iconsTitleResp text-[18px] text-[#F3EFE0] ${dosis.className} font-extrabold mb-2 ml-3`}>Back-end:</p>
                        
                        <motion.div className="iconsGroupResp flex gap-5"
                        initial={"offScreen"}
                        whileInView={"onScreen"}
                        transition={{staggerChildren:0.2, staggerDirection:1}}
                        >
                            <ul className="iconsSubGroupResp ml-3 flex flex-col gap-3 z-[1000]">
                                <motion.div className="flex items-center"
                                variants={BackEndIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#5382a1_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><FaJava className="iconeResp h-[35px] w-[35px] text-[#5382a1] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">Java</span>
                                </motion.div>
                                <motion.div className="flex items-center"
                                variants={BackEndIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#00758F_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><SiMysql className="iconeResp h-[35px] w-[35px] text-[#00758F] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">MySQL</span>
                                </motion.div>
                            </ul>
                            <ul className="iconsSubGroupResp ml-10 flex flex-col gap-3 z-[1000]">
                                <motion.div className="flex items-center"
                                variants={BackEndIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#7A9E7E_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><TbApi className="iconeResp h-[35px] w-[35px] text-[#7A9E7E] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">Working with APIs</span>
                                </motion.div>
                                <motion.div className="flex items-center"
                                variants={BackEndIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#EF5B25_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><SiPostman className="iconeResp h-[35px] w-[35px] text-[#EF5B25] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">Postman</span>
                                </motion.div>
                            </ul>
                        </motion.div>
                    </div>
                </div>

               {/* laptop */}
                <div className="relative flex justify-center items-center h-auto w-auto mx-auto ">

                    {/* outer circle */}
                    <motion.div className="LaptopRingResp absolute flex justify-center items-center h-[75px] w-[75px] border-4 border-solid border-[#373737] rounded-[50%] bg-none overflow-hidden mr-1 mb-0 z-[1000]"
                    initial={{rotateY:0}}
                    whileInView={{rotateY:-360}}
                    transition={{duration:2.5}} >
                    </motion.div>

                    {/* skills laptop image  */}
                    <motion.div className="LaptopImgResp absolute flex justify-center items-center z-[900] bg-[#29243ebf] h-[70px] w-[70px] rounded-[50%] mr-1 mb-0"
                    initial={{rotateY:0}}
                    whileInView={{rotateY:360}}
                    transition={{duration:1}} >

                        <Image src={skills} className="laptopResp" alt="skills image" 
                            width="52" height="52">
                        </Image>

                    </motion.div>
                    
                </div>

                
                <div className="skillsInnerBoxResp grid grid-cols-2 gap-5 w-[90%] mx-auto" >
                    {/* frameWorks & Libraries icons*/}
                    <div className="iconsCateResp py-2 px-5 h-[90%] bg-[#29243ebf] border-[3px] border-black rounded-xl">
                        <p className={`iconsTitleResp text-[18px] text-[#F3EFE0] ${dosis.className} font-extrabold mb-2 ml-3`}>FrameWorks And Libraries:</p>

                        <motion.div className="iconsGroupResp flex gap-2"
                        initial={"offScreen"}
                        whileInView={"onScreen"}
                        transition={{staggerChildren:0.2, staggerDirection:-1}}>
                            <ul className="iconsSubGroupResp ml-3 flex flex-col gap-3 z-[1000]">
                                <motion.div className="flex items-center"
                                variants={FrameWorksLibrariesIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#61DBFB_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><FaReact className="iconeResp h-[30px] w-[30px] text-[#61DBFB] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">React</span>
                                </motion.div>
                                <motion.div className="flex items-center"
                                variants={FrameWorksLibrariesIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#dd1b16_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><FaAngular className="iconeResp h-[35px] w-[35px] text-[#dd1b16] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">Angular</span>
                                </motion.div>
                            </ul>
                            <ul className="iconsSubGroupResp ml-3 flex flex-col gap-3 z-[1000]">
                                <motion.div className="flex items-center"
                                variants={FrameWorksLibrariesIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#6db33f_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><SiSpring className="iconeResp h-[30px] w-[30px] text-[#6db33f] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">Spring/ Boot</span>
                                </motion.div>
                                <motion.div className="flex items-center"
                                variants={FrameWorksLibrariesIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#000_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><SiNextdotjs className="iconeResp h-[30px] w-[30px] text-[#000] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">Next.js</span>
                                </motion.div>
                            </ul>
                            <ul className="iconsSubGroupResp ml-3 flex flex-col gap-3 z-[1000]">
                                <motion.div className="flex items-center"
                                variants={FrameWorksLibrariesIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#aca69f_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><SiHibernate className="iconeResp h-[30px] w-[30px] text-[#aca69f] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">Hibernate</span>
                                </motion.div>
                                <motion.div className="flex items-center"
                                variants={FrameWorksLibrariesIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#764abc_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><TbBrandRedux className="iconeResp h-[30px] w-[30px] text-[#764abc] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">Redux</span>
                                </motion.div>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Tools, Services & in process icons*/}
                    <div className="iconsCateResp py-2 px-5 h-[90%] bg-[#29243ebf] border-[3px] border-black rounded-xl">
                        <p className={`iconsTitleResp text-[18px] text-[#F3EFE0] ${dosis.className} font-extrabold mb-2 ml-3`}>Tools And Services:</p>

                        <motion.div className="iconsGroupResp flex gap-5"
                        initial={"offScreen"}
                        whileInView={"onScreen"}
                        transition={{staggerChildren:0.2, staggerDirection:1}}>
                            <ul className="iconsSubGroupResp ml-3 flex flex-col gap-3 z-[1000]">
                                <motion.div className="flex items-center"
                                variants={ToolsServicesIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#0078d7_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><SiVisualstudiocode className="iconeResp h-[30px] w-[30px] text-[#0078d7] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">Visual Studio</span>
                                </motion.div>
                                <motion.div className="flex items-center"
                                variants={ToolsServicesIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#3DDC84_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><SiAndroidstudio className="iconeResp h-[30px] w-[30px] text-[#3DDC84] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">Android Studio</span>
                                </motion.div>
                            </ul>
                            <ul className="iconsSubGroupResp ml-10 flex flex-col gap-3 z-[1000]">
                                <motion.div className="flex items-center"
                                variants={ToolsServicesIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#ff3b00_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><TbBrandFigma className="iconeResp h-[30px] w-[30px] text-[#ff3b00] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">Figma</span>
                                </motion.div>
                                <motion.div className="flex items-center"
                                variants={ToolsServicesIcons}>
                                    <li className="iconBoxResp frontEndSkillIcons group bg-[linear-gradient(#171515_50%,#fff_50%)] bg-[length:100%_200%] hover:bg-[center_bottom_100%]"><GoMarkGithub className="iconeResp h-[30px] w-[30px] text-[#171515] group-hover:text-[#fff] duration-1000"/></li>
                                    <span className="iconTextResp ml-1 text-[#F3EFE0]">GitHub</span>
                                </motion.div>
                            </ul>
                        </motion.div>


                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Skills;