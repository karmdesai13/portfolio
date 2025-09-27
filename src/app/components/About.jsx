"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import TabButton from "./TabButton";


function AnimatedList({ items, idPrefix }) {
  const container = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.06, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.ul
      className="list-disc pl-5 space-y-2"
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      {items.map((t, i) => (
        <motion.li key={`${idPrefix}-${i}`} variants={item}>
          {t}
        </motion.li>
      ))}
    </motion.ul>
  );
}


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    items: [
      "Machine Learning",
      "Prompt Engineering",
      "Natural Language Processing (NLP)",
      "Graph Algorithms",
      "Artificial Intelligence",
      "Python",
      "C++",
      "Node.js",
      "JavaScript",
      "React",
    ],
  },
  {
    title: "Education",
    id: "education",
    items: [
      "Bachelor of Science in Computer Science, University of Lethbridge",
      "Diploma in Software Development, SAIT",
    ],
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const current = TAB_DATA.find((t) => t.id === tab) || TAB_DATA[0];

  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image src="/images/About.png" width={500} height={500} alt="about" />
        <div className="mt-4 md:mt-0 text-left flex-flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base md:text-lg ">
            My journey into tech was ignited by my passion for gaming. Gaming
            not only introduced me to the fascinating world of technology but
            also inspired me to understand and create engaging digital
            experiences. This sparked my interest in coding and led me to
            explore various programming languages and web development tools,
            fueling my desire to become a proficient software developer.
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
            
            <AnimatePresence mode="wait">
              <AnimatedList
                key={current.id}
                idPrefix={current.id}
                items={current.items}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
