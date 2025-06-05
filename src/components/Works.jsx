import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Batty Bot",
    description:
      "A scalable music and moderation bot for 4000+ active users, using Python and FFmpeg to stream and queue high-quality music in real time across multiple servers. Integrated with Discord UI and slash commands, with rich embeds and thumbnail previews. Achieved 99.5% uptime with AWS EC2, handling 40+ daily user command requests with consistent reliability and low latency.",
    image: "https://cdn.creazilla.com/cliparts/6168/bat-clipart-xl.png",
    tags: ["Python", "FFmpeg", "AWS EC2", "Discord.js"],
    link: "#",
  },
  {
    title: "FFB Analyzer",
    description:
      "A full-stack fantasy football trade analyzer using React, Node.js, and Express, combining player stats, team needs, and league settings for personalized trade assessments. Features unique trade fairness algorithms and real-time data analysis. Established API connectivity between a Node.js backend and React frontend using Axios, enabling real-time trade analysis and reliable data retrieval.",
    image: "https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fmisc_logos%2F500%2Fffl.png",
    tags: ["React", "Node.js", "Express", "Axios"],
    link: "#",
  },
  {
    title: "NBA Winners",
    description:
      "A robust Python-based machine learning pipeline for predicting NBA game outcomes, improving model accuracy from 54% to 71% through feature selection and algorithm tuning. Utilized Pandas and NumPy for advanced feature engineering and automated data ingestion, reducing data overhead by 15% and enabling rapid, real-time predictions with minimal latency.",
    image: "https://nbcsports.brightspotcdn.com/dims4/default/45f2d3a/2147483647/strip/false/crop/2916x1640+0+0/resize/1486x836!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F44%2Fef%2F2dc745d9e60683818039ca029fdf%2Fap-101206125847-e1527112035702.jpg",
    tags: ["Scikit-learn", "Pandas", "NumPy"],
    link: "https://github.com/sbat11/NBA-Game-Model",
  },
];

const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="works" className="section-padding">
      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="gradient-text mb-12 text-center">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="card group relative overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-primary-500/10 text-primary-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;