import React, { useState } from 'react';
import Imagehero from "../assets/112.jpeg";

const About = () => {
  const [selectedOption, setSelectedOption] = useState('skills');

  const content = {
    // ... (unchanged)
        skills: (
     <div>
       <div className='text-2xl font-bold inline border-b-4 border-gray-500'>
         <p>Skills</p>
       </div>
       <p>
         Languages: C, C++, Java, Python
       </p>
       <p>
         Tools Worked: Git & GitHub, Eclipse
       </p>
       <p>
         Practical Skills in Electronics: Arduino, Raspberry Pi, and other boards
       </p>
     </div>
   ),
   projects: (
     <div>
       <div className='text-2xl font-bold inline border-b-4 border-gray-500'>
         <p>Projects</p>
       </div>
       <p>
         Voice-controlled vehicle using Arduino. Arduino UNO, Java Programming.
       </p>
       <p>
         Superstore Management System: MySQL & PHP
       </p>
       <p>
         Library Management System: C++
       </p>
       <p>
         Smart Reader and Conversation System for Visually Impaired and Non-Vocal People: Arduino and Raspberry Pi.
       </p>
     </div>
   ),
   education: (
     <div>
       <div className='text-2xl font-bold inline border-b-4 border-gray-500'>
         <p>Education</p>
       </div>
       <p>
         2018-2022: BE(ECE) in AIT, Chikmagalur
       </p>
       <p>
         2016-2018: PUC in Alva's PU College, Moodbidri
       </p>
       <p>
         2015-2016: SSLC at MES SSRDHS, Chikmagalur
       </p>
     </div>
   ),
   works: (
     <div>
       <div className='text-2xl font-bold inline border-b-4 border-gray-500'>
         <p>Internship & cetificates</p>
       </div>
       <p>
         2021: Internship at Inventron Technologies
       </p>
       <p>
        AWS Cloud Start/ReStart Partitioner Certificate
      </p>
      <p>
        Python Programming from Skill India certificate
      </p>
      <p>
        Hackaboy from Hactober fest certificate
      </p>
     </div>
   ),
  };

  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b  from-gray-800 to-black text-white flex flex-col md:flex-row">
      {/* Image on the left */}
      <div className="w-1/2 md:w-1/2 h-1/2 md:h-full">
        <img src={Imagehero} alt="my" className=" py-2 rounded-2xl mx-auto h-full object-cover" />
      </div>

      {/* Right pane with content and buttons */}
      <div className='w-full md:w-1/2 mx-w-screen-lg p-4 flex flex-col justify-center'>
        <div>
          <p className='text-4xl font-bold'>About</p>
          <div>
            <h2>
              I am Kiran Kumar S K, completed my Bachelor of Engineering in Adichunchanagiri Institute of Technology, Chikmagalur. In the branch of Electronics and communication Engineering with an aggregate of 6.78 CGPA.
            </h2>
          </div>

          {/* New line after "About" */}
          <div className="my-4" />

          {/* Navigation buttons below h2 content */}
          <div className='flex mt-4 space-x-4'>
            {Object.keys(content).map((option) => (
              <button
                key={option}
                className={`text-white ${selectedOption === option ? 'underline' : ''}`}
                onClick={() => setSelectedOption(option)}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content based on selected option */}
        {content[selectedOption]}
      </div>
    </div>
  );
};

export default About;
