import React from 'react';
import superstore from "../assets/portfolio/11.jpg";
import employee from "../assets/portfolio/Employee-Management-Software.png";
import vehicle from "../assets/portfolio/vehicle-management-software.png";
import voicecc from "../assets/portfolio/voice.jpg";
import smart from "../assets/portfolio/conversation system.jpg";
import resturant from "../assets/portfolio/resturant.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      href: "https://github.com/kirankumarsk/superstore.git",
      src: superstore,
    },
    {
      id: 2,
      href: "https://github.com/kirankumarsk/employee-management.git",
      src: employee,
    },
    {
      id: 3,
      href: "https://github.com/kirankumarsk/vehicle-management.git",
      src: vehicle,
    },
    {
      id: 4,
      href: "https://github.com/kirankumarsk/voice-controlled-robot.git",
      src: voicecc,
    },
    {
      id: 5,
      href: "https://github.com/kirankumarsk/Smart-reader-and-conversation-system-for-visually-impaired-and-non-vocal-people.git",
      src: smart,
    },
    {
      id: 6,
      href: "https://github.com/kirankumarsk/restaurant-management-system.git",
      src: resturant,
    },
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen min-h-screen">
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className="py-2">Check out some of my work right here.</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map(({ id, href, src }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
              </a>
              <div className='flex items-center justify-center'>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <button className='px-4 py-2 m-4 duration-200 hover:scale-105 text-2xl text-white font-'>Let's see the project</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
