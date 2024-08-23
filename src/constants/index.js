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
      title: "Incoming Web Developer Intern",
      company_name: "YourWebDomains",
      icon: shopify,
      iconBg: "#383E56",
      date: " July 2024 - Present",
      points: [
        ,
      ],
    },
    {
      title: "Incoming Data Analytics Extern",
      company_name: "Extern from Web3",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Aug 2024 - Present",
      points: [
        ,
      ],
    },
  ];
  
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
      name: "Mini-URL",
      description:
        "A URL shortening service that provides a unique, short, and easily recognizable link for users to share.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "JS",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/sbat11/mini-url",
    },
    {
      name: "Fantasy Football Chatbot",
      description:
        "An AI Chatbot to help you figure out the best drafts and trade strategy for your fantasy leagues.",
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
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/sbat11/ranchffb",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };