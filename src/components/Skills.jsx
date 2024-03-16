import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactimage from "../assets/react.png";
import github from "../assets/github.png";
import java from "../assets/java.png";
import cplus from "../assets/cplusplus.jpg";
import mysql from "../assets/mysql.jpg";
import php from "../assets/PHP.jpg";

const Skills = ()=> {
  const techs = [
    // Your tech data
    {
        id:1,
        src:html,
        title:"HTML",
        style:'shadow-orange-500'
    },
    {
        id:2,
        src:css,
        title:"CSS",
        style:'shadow-blue-500'
    },
    {
        id:3,
        src:javascript,
        title:"JavaScript",
        style:'shadow-yellow-500'
    },
    {
        id:4,
        src:reactimage,
        title:"React",
        style:'shadow-blue-600'
    },
    {
        id:5,
        src:github,
        title:"GitHub",
        style:'shadow-orange-500'
    },
    {
        id:6,
        src:java,
        title:"Java",
        style:'shadow-orange-500'
    },
    {
        id:7,
        src:cplus,
        title:"c++",
        style:'shadow-orange-500'
    },
    {
        id:8,
        src:mysql,
        title:"MySQL",
        style:'shadow-orange-500'
    },
    {
        id:9,
        src:php,
        title:"PHP",
        style:'shadow-orange-500'
    },
  ];

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
            Tools Worked
          </p>
          <p className='py-6'>
            These are the technologies I've worked with
          </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className='w-20 mx-auto'/>
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
