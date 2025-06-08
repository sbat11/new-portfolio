import { motion } from "framer-motion";

const experiences = [
  {
    title: "Jr. Software Development Engineer Intern",
    company: "Amazon Web Services",
    location: "New York, NY",
    date: "June 2025 - Present",
    points: [
      "Incoming Jr. SDE at Amazon."
    ],
  },
  {
    title: "Site Reliability Engineer Intern",
    company: "Meta Open Source",
    location: "Kendall Park, NJ",
    date: "June 2025 - August 2025",
    points: [
      "Incoming fellow on the Site Reliability Engineering path to work with mentors and production services at Meta."
    ],
  },
  {
    title: "Machine Learning Research Assistant",
    company: "Rutgers University",
    location: "Piscataway, NJ",
    date: "May 2025 - August 2025",
    points: [
      "Evaluated jailbreak vulnerabilities and reduced successful attempts for GPT, Llama and Claude by 25% through testing 1000+ adversarial prompts using Python.",
      "Assessed model resilience and measured harmful outputs at 17% per robustness benchmarks by collaborating with PhD students on adversarial and low-resource evaluations.",
      "Evaluated multilingual performance across English, Spanish, and Hindi, identifying a 15% performance gap and 10% misclassification rate in low-resource tasks."
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Bunchful Enterprises",
    location: "New York, NY",
    date: "Feb 2024 - April 2024",
    points: [
      "Led development of 6 responsive web apps using Java and Javascript, boosting engagement by 15% via faster loads and clean UI.",
      "Collaborated with cross-functional teams to gather requirements and translate them into specifications, leading to more efficient project delivery and enhanced client satisfaction.",
      "Developed interactive dashboards, pages, and feature-rich interfaces using Vue.js, HTML, CSS, and Springboot, improving site navigation and boosting traffic by 19%."
    ],
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="gradient-text mb-12 text-center">Work Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card relative"
              >
                <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>

                <div className="ml-6">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-primary-400">@</span>
                    <span className="text-secondary-400">{exp.company}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{exp.date}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="text-gray-300 text-sm"
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
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
            <p className="text-gray-300 max-w-2xl mx-auto">
              I'm always looking for new opportunities to grow and learn.
              Let's connect and discuss how we can work together!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;