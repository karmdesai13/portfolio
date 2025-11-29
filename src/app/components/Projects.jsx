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
    tag: ["All", "AI Projects"],
    gitUrl: "https://github.com/karmdesai13/Stock-Analysis-Chatbot.git",
    previewUrl: "/stockchatbot",
  },
  {
    id: 2,
    title: "AI Course Scheduler",
    description: "A course scheduling program.",
    image: "/CourseScheduler/CourseSche.png",
    tag: ["All", "AI Projects"],
    gitUrl: "https://github.com/karmdesai13/AI-course-Scheduler.git",
    previewUrl: "/aicourse",
  },
  {
    id: 3,
    title: "AI Resume Critiquer",
    description: "A program which helps with resume feedback.",
    image: "/AIResume/AIResume.png",
    tag: ["All", "AI Projects"],
    gitUrl: "https://github.com/karmdesai13/AI-Resume-Critique.git",
    previewUrl: "/airesume"
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
    id: 12,
    title: "C++-Text Based Game",
    description: "A game build with the core concepts of C++",
    image: "/C++Game/C++Game.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/karmdesai13/A-Text-Based-Adventure-Game.git",
    previewUrl: "/game",
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
  {
    id: 13,
    title: "Toronto Crime Visualization Dashboard",
    description: "A Data Analysis Project",
    image: "/images/TorontoCrime.png",
    tag: ["All", "Data Analysis"],
    gitUrl: "https://app.powerbi.com/view?r=eyJrIjoiODI5YjgxZDgtMTg5NC00NjNhLWJiZDktMjdlNTA2NGZmMzhhIiwidCI6IjhjZDM2MGMyLTA2OGItNGUzNi04ZGI1LTI3YjM1NzkyZjUzZiIsImMiOjZ9",
    previewUrl: "/torontoCrime",
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
    <section id="projects" className="px-4 sm:px-6 lg:px-8">
  <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mt-4 mb-6 sm:mb-10">
    My Projects
  </h2>

  
  <div className="text-white relative">
    <div
      className={`flex items-center gap-2 overflow-x-auto md:overflow-visible -mx-4 px-4 py-4 sm:py-6 md:mx-0 md:px-0 snap-x snap-mandatory no-scrollbar`}
    >
      {["All", "Frontend", "Backend", "AI Projects","Data Analysis"].map((name) => (
        <div key={name} className="snap-start flex-shrink-0">
          <ProjectTag
            onClick={handleTagChange}
            name={name}
            isSelected={tag === name}
          />
        </div>
      ))}
    </div>
  </div>

  
  <ul
    ref={ref}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 pb-8"
  >
    {filteredProjects.map((project, index) => (
      <motion.li
        key={project.id ?? index}
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: index * 0.15 }}
        className="min-w-0"
      >
        <ProjectCard
          title={project.title}
          description={project.description}
          imgUrl={project.image}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
        />
      </motion.li>
    ))}
  </ul>

  <style jsx>{`
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
</section>

  );
};

export default ProjectsSection;