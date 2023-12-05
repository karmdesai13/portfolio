"use client";
import Image from "next/image";
import { useState, useTransition } from 'react';
import TabButton from "./TabButton";


const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Html5</li>
          <li>CSS</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>LDRP,Gandhanigar</li>
          <li>Southern Alberta Institute of Technology,SAIT</li>
        </ul>
      ),
    },
   
  ];



  
const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending,startTransition ] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
          });
    }
    
  return (
    <section className="text-white ">

        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
            
            <Image src="/images/About.png" width={500} height={500} alt="about" />
            <div className="mt-4 md:mt-0 text-left flex-flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
                <p className="text-base md:text-lg "> 
                    My journey into tech was ignited by my passion for gaming. Gaming not only introduced me to the fascinating world of technology but also inspired me to understand and create engaging digital experiences. This sparked my interest in coding and led me to explore various programming languages and web development tools, fueling my desire to become a proficient software developer.
                </p>
                <div className="flex flex-row justify-start mt-8">
                <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            
                    

                </div>
                <div className="mt-8">
                    
                { (TAB_DATA.find((t) => t.id === tab) || {}).content }</div>
                    
            
            </div>
        </div>
    </section>
  )
}

export default About;