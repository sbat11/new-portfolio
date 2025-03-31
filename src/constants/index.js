import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    bat,
    basketball
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "Bunchful Enterprises",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Feb 2024 - April 2024",
      points: [
        "Spearheaded  the development of responsive web applications leading to a 50% increase in user engagement ",
        "Collaborated with cross-functional teams to gather requirements and translate them into functional specifications, ensuring alignment with business objectives.",
        "Used HTML, CSS, JavaScript, WordPress and various frameworks including React.js to create dynamic and interactive user interfaces",
      ],
    },
    {
      title: "Tutor",
      company_name: "Varsity Tutors",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "September 2023 - Present",
      points: [
        "Developed personalized learning plans to address individual student strengths, weaknesses, and learning styles, resulting in measurable improvements in academic performance and confidence.",
        "Delivered dynamic lessons, incorporating a variety of teaching methods and resources to accommodate diverse learning preferences and abilities. ",
        "Tutored a wide-variety of subjects including ranging from elementary school level math all the way up to AP Computer Science, AP Calculus BC, Physics I and other college-level curriculum",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "YourWebDomains",
      icon: shopify,
      iconBg: "#383E56",
      date: " July 2024 - December 2024",
      points: [
        "Developed web apps with PHP, HTML, CSS, and JavaScript to improve user experience and functionality for clients.",
        "Integrated third-party sports APIs to provide real-time data updates and personalized user experiences resulting in a 20% increase in daily active users for sports websites and applications.",
        "Improved loading times by an average of 40%  and data security through the application of best practices for code optimization, caching, and vulnerability mitigation on websites.",
        ,
      ],
    }
  ]
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Chitter",
      description:
        "Full-featured website similar to X that supports profiles, tweeting, and social interactions such as following, liking, and retweeting.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/sbat11/twitter-clone1"
    },
    {
      name: "BattyBot",
      description:
        "A Discord Bot that streams high-quality audio, queues songs, and keeps your server vibing.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Discord API",
          color: "green-text-gradient",
        },
        {
          name: "AWS",
          color: "pink-text-gradient",
        },
      ],
      image: bat,
      source_code_link: "https://github.com/sbat11/Discord-bot",
    },
    {
      name: "NBA Winners",
      description:
        "A machine learning model that predicts future NBA games based on previous performances",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Numpy",
          color: "green-text-gradient",
        },
        {
          name: "Jupyter notebook",
          color: "pink-text-gradient",
        },
      ],
      image: basketball,
      source_code_link: "https://github.com/sbat11/NBA-Game-Model",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };