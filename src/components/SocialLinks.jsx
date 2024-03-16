import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from "react-icons/bs"; 
const SocialLinks = () => {
    const links=[
        {
            id:1,
            child:(
                <>
                Linkedin<FaLinkedin size={30}/> </>
            ),
            href:"https://www.linkedin.com/in/kiran-kumar-s-k-b57819196",
            style:"rounded-tr-md"
        },
        {
            id:2,
            child:(
                <>
                GitHub<FaGithub size={30}/> </>
            ),
            href:"https://github.com/kirankumarsk",
            style:"rounded-tr-md"
        },
        {
            id:3,
            child:(
                <>
                Mail<HiOutlineMail size={30}/> </>
            ),
            href:"mailto:kirankumarsk25820@gmail.com",
        style:"rounded-tr-md"
        },
        {
            id:4,
            child:(
                <>
                Resume 1<BsFillPersonLinesFill size={30}/> </>
            ),
            href:"../assets/Kiran_with_hosted_portfolio.pdf",
            style:"rounded-tr-md",
            download:true,
        },
        {
            id:5,
            child:(
                <>
                Resume 2<BsFillPersonLinesFill size={30}/> </>
            ),
            href:"../assets/Kiran_Kumar_S_K-BE-121.pdf",
            style:"rounded-tr-md",
            download:true,
        },
    ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-8 fixed">
        <ul>
            {links.map(({id,child,href,style,download })=>(
            <li key={id}className={"flex justify-between items-cent er w-40 h-14 px-3 bg-gray-500 ml-[-130px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"}>
            <a href={href}
            className="flex justify-between items-center w-full text-white"
            download={download}
            rel="noreferrer"
            target="_blank">{child}
            </a>
            </li>   
            ) )  }     
        </ul>
    </div>  
  );
};
export default SocialLinks;