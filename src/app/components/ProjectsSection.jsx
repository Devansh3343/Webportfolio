"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag.jsx";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "BlindSight",
    description: "Smart glasses for the visually impaired that analyze surroundings using sensors and a camera, providing real-time audio feedback to enhance navigation and independence.",
    image: "/Projects/BlindSight.png",
    tag: ["All", "Software", "Hardware"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "TrashCam",
    description: "An AI-powered tool that scans and categorizes garbage, guiding users to dispose of waste sustainably and reduce landfill impact.",
    image: "/Projects/trashcam.png",
    tag: ["All", "Software"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Aspectus",
    description: "An educational platform that turns learning into a video game, dynamically creating campaigns based on course outlines to gamify education.",
    image: "/Projects/aspectus.png",
    tag: ["All", "Software"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "EcoFind",
    description: "A platform connecting 3D printing enthusiasts with local recycling facilities to dispose of materials like PLA, ABS, and TPU responsibly.",
    image:  "/Projects/EcoFind.png",
    tag: ["All", "Software"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Real-Time Home Security System",
    description: "A motion-sensing security system using an STM32 microcontroller and camera to notify users of detected activity in real-time.",
    image:  "/Projects/RealTimeHomeSecurity.png",
    tag: ["All", "Hardware"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "ESP32-Based Home Monitoring System",
    description: "An AI-driven home security solution using YOLO object detection to identify intruders and alert users instantly.",
    image: "/Projects/Esp32SecuritySystem.png",
    tag: ["All", "Hardware"],
    gitUrl: "/",
    previewUrl: "/",
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
      <h2 className="text-center text-4xl font-bold text-black mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-black flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software"
          isSelected={tag === "Software"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hardware"
          isSelected={tag === "Hardware"}
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