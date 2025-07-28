import React from 'react';
import Title from './Title';
import { Element } from "react-scroll";
const About = () => {
  return (
    <Element name="about-me" className="px-6 md:px-12 lg:px-24 py-10 text-lightGray">
      <Title text="About Me" emoji="👤" />

      <div className="mt-6 text-lg leading-relaxed text-grayText text-justify">
        <p>
          I'm a final year BCA student at <span className="text-whiteText font-medium">MIT (Mysore Institute of Technology)</span>, with a deep passion for web development and building visually appealing, user-centric digital experiences.
        </p>

        <p className="mt-4">
          I enjoy turning complex problems into clean, intuitive solutions. From developing interactive frontends to experimenting with new frameworks and tools, I’m always curious and eager to improve.
        </p>

        <p className="mt-4">
          Over the past few months, I’ve worked on several personal projects using technologies like <span className="text-whiteText">HTML</span>, <span className="text-whiteText">CSS</span>, <span className="text-whiteText">JavaScript</span>, <span className="text-whiteText">React</span>, and <span className="text-whiteText">Tailwind CSS</span>. I love the process of learning by building.
        </p>

        <p className="mt-4">
          Outside of coding, I’m interested in UI/UX trends, exploring productivity tools, and continuously evolving as a developer.
        </p>
      </div>
    </Element>
  );
};

export default About;
