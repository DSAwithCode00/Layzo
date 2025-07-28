import React from "react";
import Title from "./Title";
import { FolderClosed, Github, SquareArrowOutUpRight } from "lucide-react";
import { Element } from "react-scroll";
const projects = [
  {
    name: "Weather App",
    description:
      "A sleek weather forecast application that shows real-time weather based on user location or search input.",
    github: "https://github.com/username/weather-app",
    demo: "https://weather-app-demo.vercel.app",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
  },
  {
    name: "Password Generator",
    description:
      "A secure password generator that lets users choose length and character types to create strong passwords.",
    github: "https://github.com/username/password-generator",
    demo: "https://password-gen-demo.vercel.app",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "AI Chatbot",
    description:
      "An AI-powered chatbot interface using basic JavaScript to simulate conversational interactions.",
    github: "https://github.com/username/ai-chatbot",
    demo: "https://ai-chatbot-demo.vercel.app",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Bookmark Manager",
    description:
      "A drag-and-drop bookmark list app with localStorage and modern UI, built using React and Tailwind.",
    github: "https://github.com/username/bookmark-manager",
    demo: "https://bookmark-app-demo.vercel.app",
    technologies: ["React", "Tailwind CSS", "shadcn/ui"],
  },
  {
    name: "Chrome Homepage Dashboard",
    description:
      "A custom new tab Chrome extension with productivity widgets and voice search.",
    github: "https://github.com/username/chrome-dashboard",
    demo: "https://chrome-dashboard-demo.vercel.app",
    technologies: ["HTML", "CSS", "JavaScript", "Web Speech API"],
  },
];

const Projects = () => {
  return (
    <Element name="project">
      <Title text="Projects" emoji="💼" />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((item, index) => (
          <div key={index} className="flex flex-col justify-between p-4 rounded-2xl border border-gray-800 bg-bgGray900 shadow-md cursor-pointer hover:border-white hover:-translate-y-2 transition">
            <header className="text-whiteText flex items-center justify-between">
              <FolderClosed size={42} strokeWidth={1.6}/>
              <div className="flex items-center gap-4">
                <a href={item.github} title="GitHub">
                  <Github />
                </a>
                <a href={item.demo} title="Live Demo">
                  <SquareArrowOutUpRight />
                </a>
               </div>
            </header>
            <div className="my-4">
                <h4 className="text-xl font-medium text-whiteText mb-4">{item.name}</h4>
                <p className="text-lightGray text-md font-medium">{item.description}</p>

            </div>
            <ul className="flex items-center gap-4">
                {
                    item.technologies.map((item,index)=>(
                        <li className="font-fira text-sm font-medium text-darkGray" key={index}>{item}</li>
                    ))
                }
            </ul>
          </div>
        ))}
      </div>
     
    </Element>
  );
};

export default Projects;
