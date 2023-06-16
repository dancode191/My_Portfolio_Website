import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useState } from "react";
{/* icons */}
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";
{/* form tools */}
import { useFormik } from "formik";
import * as Yup from "yup";
{/* fonts */}
import { dosis } from "../public/fonts/fonts";

const Navbar = () => {

    const [menuActive, setMenuActive] = useState(false);
    const [contactMe, setContactMe] = useState(false);
    const [menuBtnColor, setMenuBtnColor] = useState("#cccdda");
    
    const logoText = "D a n i e l   -   W e b   D e v e l o p e r";
    const logoTextList = logoText.split(" ");

    const formik = useFormik({
        // initial form values:
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        // validate form:
        validationSchema: Yup.object({
            name: Yup.string().max(20, 'Name must be less than 10 char').required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            message: Yup.string().required('Message is required')
        }),
        //on submit:
        onSubmit: () => {
            console.log("not using this onSubmit.. instead i use 'action' on the form element");
        }
        
    });
        
    const handleMenu = () =>{
        setMenuActive(!menuActive);

        if(menuBtnColor == "#cccdda"){
            setMenuBtnColor("#000")
        }else{
            setMenuBtnColor("#cccdda")
        }
            
    }


    return (
        <div 
        className={`navbarContainerResp relative bg-[#6C6F7D] p-1 flex flex-row w-screen h-full ${dosis.className} font-semibold`}>

            {/* logo */}
            <div className={`navbarlogoResp flex items-center basis-1/2 my-auto text-[35px] ${dosis.className} font-semibold`}>

                    <p>
                        {logoTextList.map((char, index) => (
                            <motion.span key={index} className="ml-0.5 inline-block text-[#cccdda]"
                            whileHover={{color:"#29243ebf", opacity:0.6, scaleX:1.5, scaleY:0.8}}
                            transition={{
                                duration:0.7,
                                type: "spring",
                                bounce:0.7,
                            }}
                            >
                            {char}
                            </motion.span>
                        ))}
                    </p>
            </div>

            {/* NavBar */}
            <ul 
            className="navbarOpenMenuResp hidden md:flex justify-evenly items-center basis-1/2 text-[#fff]">
                <Link href="#about" onClick={() => setContactMe(false)} className="hover:text-[20px] hover:text-[#373737] duration-300"
                >About</Link>
                <Link href="#skills" onClick={() => setContactMe(false)} className="hover:text-[20px] hover:text-[#373737] duration-300"
                >Skills</Link>
                <Link href="#projects" onClick={() => setContactMe(false)} className="hover:text-[20px] hover:text-[#373737] duration-300"
                >Projects</Link>
                <Link href="#" onClick={() => setContactMe(!contactMe)} className="hover:text-[20px] hover:text-[#373737] duration-300"
                >Contact Me</Link>
                <a href="./Daniel-Resume-SW.pdf" download onClick={() => setContactMe(false)} className="hover:text-[#373737] duration-300">
                    <FaFileDownload className="w-[25px] h-[25px]"/>
                </a>
            </ul>

            {/* menuOpenBtn */}
            <div 
            className="navbarMenuResp md:hidden basis-3/4  self-center ">
                <AiOutlineMenu className={`float-right w-[30px] h-[30px] text-[${menuBtnColor}] mr-1 hover:w-[33px] hover:h-[33px]`} onClick={handleMenu}/>
            </div>

            {/* Menu */}
            <div 
            className={menuActive ? "navbarBase left-0 w-[30%] max-sm:w-[60%] z-[1000] " : 
            "navbarBase left-[-60%] w-[30%]"}>

            {/* menuCloseBtn */}
                <div className="flex flex-col items-center h-screen">
                    <AiOutlineClose className=" w-[35px] h-[35px] rounded-full p-1 mx-auto bg-[#f4f4f4ef] border-[3px] border-[#29243eee] hover:w-[37px] hover:h-[37px] hover:text-[#f4f4f4ef] hover:bg-[#29243eee]" onClick={handleMenu}
                />

            {/* menuLinks */}
                    <ul className="basis-3/4 mt-10 h-fit flex flex-col text-[#F3EFE0]  gap-10 font-bold">
                        <Link href="#about" onClick={() => setContactMe(false)} className="hover:text-[18px] duration-300"
                        >About</Link>
                        <Link href="#skills" onClick={() => setContactMe(false)} className="hover:text-[18px] duration-300"
                        >Skills</Link>
                        <Link href="#projects" onClick={() => setContactMe(false)} className="hover:text-[18px] duration-300"
                        >Projects</Link>
                        <button onClick={() => {
                            setContactMe(!contactMe)
                            setMenuActive(false)
                        }} className="hover:text-[18px] duration-300"
                        >Contact Me</button>
                    </ul>
                </div>
            </div>
            <AnimatePresence >
            { contactMe && (
                <motion.div className="contMeContainerResp h-[250px] w-[600px] absolute top-[100%] left-[50%] translate-x-[-50%] bg-[#29243ed3] border-black border-[3px] rounded-xl"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.8}}
                >
                    <div className="h-[100%] w-[100%] relative flex justify-center items-center">
                        <button className="absolute right-4 top-2 w-[35px] h-[35px] flex justify-center items-center border-[3px] border-[#29243eee] bg-[#f4f4f4ef]  rounded-full hover:w-[37px] hover:h-[37px] hover:text-[#f4f4f4ef] hover:bg-[#29243eee]"
                        onClick={() => setContactMe(false)}
                        >
                            <AiOutlineClose className="w-[25px] h-[25px]"/></button>
                        <form action="https://formspree.io/f/mlekopjo" method="POST" className="h-[100%] flex flex-col justify-center gap-3">
                            <div className="formInputsResp flex justify-center gap-10">
                                <div className="flex-1 flex flex-col gap-5">
                                    <div>
                                        <label htmlFor="name" className={`block ${formik.touched.name && formik.errors.name? "text-red-500" : "text-[#F3EFE0]"}`}>
                                            {formik.touched.name && formik.errors.name ? formik.errors.name: "Name:"}    
                                        </label>
                                        <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-[#ffffff8f] text-[#F3EFE0] focus:ring-2 focus:ring-black outline-none rounded-md p-1" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className={`block ${formik.touched.email && formik.errors.email? "text-red-500" : "text-[#F3EFE0]"}`}>
                                        {formik.touched.email && formik.errors.email ? formik.errors.email: "Email:"}
                                        </label>
                                        <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-[#ffffff8f] text-[#F3EFE0] focus:ring-2 focus:ring-black outline-none rounded-md p-1" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="message" className={`block ${formik.touched.message && formik.errors.message? "text-red-500" : "text-[#F3EFE0]"}`}>
                                    {formik.touched.message && formik.errors.message ? formik.errors.message: "Message Me:"}
                                    </label>
                                    <textarea name="message" value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} className="textAreaResp w-[250px] h-[150px] bg-[#ffffff8f] text-[#F3EFE0] focus:ring-2 focus:ring-black outline-none placeholder-white p-2 rounded-md resize-none" placeholder="Tell me what on your mind :)" />
                                </div>
                            </div>    
                            <button type="submit" className="block bg-[#ffffff8f] text-[#F3EFE0] px-5 py-1 rounded-md mx-auto focus:ring-2 focus:ring-black">Send</button>
                        </form>
                    </div>
                </motion.div>
            
            )}
            </AnimatePresence>
        </div>
    );
}

export default Navbar;