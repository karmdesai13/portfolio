"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
const projectsData = [
  {
    id: 1,
    title: "Stock Assistant ChatBot",
    description: "A program which helps with analyzing stocks.",
    image: "/StockChatBot/StockAssist.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/karmdesai13/Stock-Analysis-Chatbot.git",
    previewUrl: "/bookyatra",
  },
  {
    id: 2,
    title: "AI Course Scheduler",
    description: "A course scheduling program.",
    image: "/CourseScheduler/CourseSche.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/karmdesai13/AI-course-Scheduler.git",
    previewUrl: "/bookyatra",
  },
  {
    id: 3,
    title: "AI Resume Critiquer",
    description: "A program which helps with resume feedback.",
    image: "/AIResume/AIResume.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/karmdesai13/AI-Resume-Critique.git",
    previewUrl: "/bookyatra",
  },
  {
    id: 4,
    title: "Book Yatra - Capstone Project",
    description: "A Figma Design",
    image: "/Bookyatracap/Landing.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://www.figma.com/file/DdGskCae0fonibEMw5GWrP/BookYatra?type=design&node-id=0-1&mode=design&t=sPoFqo5FJAKDbemp-0",
    previewUrl: "/bookyatra",
  },
  
  {
    id: 8,
    title: "Gujju House-Mobile App",
    description: "A Figma Design",
    image: "/images/Gujju.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/karmdesai13/GujjuHouse.git",
    previewUrl: "/gujugang",
  },
  {
    id: 9,
    title: "Gamers Hut",
    description: "A Figma Project",
    image: "/images/G.png",
    tag: ["All", "Frontend"],
    gitUrl: "/",
    previewUrl: "/gamershut",
  },
  {
    id: 10,
    title: "Learn O City",
    description: "A C# Project",
    image: "/images/S.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/karmdesai13/LearnOCity.git",
    previewUrl: "/learnocity",
  },
  {
    id: 11,
    title: "Book Yatra",
    description: "A React Project",
    image: "/images/Flight.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/karmdesai13/bookyatra.git",
    previewUrl: "https://bookyatra.vercel.app/",
  },
  {
    id: 5,
    title: "Health System",
    description: "A Python Project",
    image: "/images/Health.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/karmdesai13/HealthSystem.git",
    previewUrl: "/HealthSystem",
  },
  {
    id: 6,
    title: "Flight Booking System",
    description: "A C# Project",
    image: "/images/G.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/karmdesai13/FlightBooking.git",
    previewUrl: "/flightbooking",
  },
  {
    id: 7,
    title: "Nike Landing Page",
    description: "A Figma Design",
    image: "/nike/nike1.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://www.figma.com/file/zq08XCjuho4GtGpn6VRct6/Untitled?type=design&node-id=13-10&mode=design&t=wPbXi3mvkbtC3Irx-0",
    previewUrl: "/nikelanding",
  },
  

  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
      
      
         {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))} 
      </ul>
    </section>
  );
};

export default ProjectsSection;