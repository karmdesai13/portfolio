"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12 ">
            <motion.div  initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.2}} className="col-span-7 place-self-center text-center sm:text-left ">
                <h1 className="text-white mb-4 sm:text-5xl lg:text-8xl lg:leading-normal justify-self-start text-4xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                    Hello, I&apos;m{" "}
                </span>

                   <br></br>
            <TypeAnimation
              sequence={[
                "Karm",
                1000,
                "AI Engineer ",
                1000,
                
                "UI/UX Designer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
                </h1>
                
                <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">An aspiring Full-Stack Developer with a strong passion for technology and innovation. 
                    Currently pursuing my Bachelor of Science in Computer Science, Ive immersed myself in learning 
                    cutting-edge web technologies, 
                    focusing on Python,AI Intelligence, and building full stack apps.</p>
                <motion.div  initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.2}}>
                <a href="https://drive.google.com/file/d/1PyrREFyilvUViAiFWfaY3RlSr_MCukwx/view?usp=sharing" >
                    <button className="px-6 py-3 w-full  sm:w-fit rounded-full mr-4 mb-2 md:mb-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  text-white hover:bg-slate-200 ck">
                        Download Resume
                    </button>
                    </a>
                    <a href="https://drive.google.com/file/d/1s7y3EwzeX5RifepuHrANupxKTXMNw56s/view?usp=sharing">
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt3 ">
                       <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span> 
                    </button></a>
                </motion.div>
            </motion.div>
            <motion.div  initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.2}} className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]    relative ">
                <Image src="/images/Profile.jpeg" width={300} height={300} alt="hero" className="absolute transform rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Hero