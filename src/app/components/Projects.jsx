"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
const projectsData = [
  {
    id: 1,
    title: "Gujju House",
    description: "Project 1 description",
    image: "/images/Gujju.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/karmdesai13/GujjuHouse.git",
    previewUrl: "/gujugang",
  },
  {
    id: 2,
    title: "Gamers Hut",
    description: "Project 2 description",
    image: "/images/G.png",
    tag: ["All", "Frontend"],
    gitUrl: "/",
    previewUrl: "/gamershut",
  },
  {
    id: 3,
    title: "Learn O City",
    description: "Project 3 description",
    image: "/images/S.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/karmdesai13/LearnOCity.git",
    previewUrl: "/learnocity",
  },
  {
    id: 4,
    title: "Book Yatra",
    description: "Project 4 description",
    image: "/images/Flight.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/karmdesai13/bookyatra.git",
    previewUrl: "https://bookyatra.vercel.app/",
  },
  {
    id: 5,
    title: "Health System",
    description: "Python",
    image: "/images/Health.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/karmdesai13/HealthSystem.git",
    previewUrl: "/HealthSystem",
  },
  {
    id: 6,
    title: "Flight Booking System",
    description: "C#",
    image: "/images/G.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/karmdesai13/FlightBooking.git",
    previewUrl: "/flightbooking",
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