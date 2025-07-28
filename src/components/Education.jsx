import React from 'react'
import { Element } from 'react-scroll'
import Title from './Title'

const Education = () => {
    const educationData = [
        {
            title: "RGA (Rehbar Graduation Association), Mysore",
            course: "SSLC",
            duration: "2018 – 2020",
            result: "77%",
            description: "Focused on core academic subjects. Participated in academic seminars and performed consistently in class assessments."
          },
        {
          title: "SHAHEEN PU COLLEGE, Mysore",
          course: "Pre-University (PCMB)",
          duration: "2020 – 2022",
          result: "81%",
          description: "Completed Pre-University with a focus on science and mathematics. Built a strong foundation in logical reasoning and problem solving."
        },
        {
          title: "MIT Degree College, Mysore",
          course: "Bachelor of Computer Applications (BCA)",
          duration: "2022 – Present",
          result: "(Expected GPA: 9.2)",
          description: "Pursuing BCA with a concentration in full-stack development, data structures, and software engineering. Built several academic projects and took part in hackathons."
        }
      ];
      

  return (
    <Element name="education">
      <Title text="Education" emoji="🎓" />
      <div className="mt-8 space-y-8">
        {educationData.map((edu, index) => (
          <div key={index} className="p-6 rounded-2xl border border-gray-800 bg-bgGray900 shadow-md">
            <span className="text-mediumGray text-md font-medium uppercase">{edu.course} | {edu.duration}</span>
            <h5 className="text-2xl text-whiteText font-semibold mt-1">{edu.title}</h5>
            <p className="font-fira tracking-tighter text-grayText text-md mt-1">Percentage:{edu.result}</p>
            <p className="font-fira tracking-tighter font-medium text-lightGray text-md mt-2">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </Element>
  )
}

export default Education
