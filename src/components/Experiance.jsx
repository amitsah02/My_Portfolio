import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import mongoDB from "../../public/mongodb.jpg";     
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import express from "../../public/express.png";

function Experiance() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: reactjs, name: "React.js" },
    { id: 5, logo: nodejs, name: "Node.js" },
    { id: 6, logo: express, name: "Express.js" },
    { id: 7, logo: mongoDB, name: "MongoDB" },
    // Optional
    { id: 8, logo: java, name: "Java" },
    // { id: 9, logo: mysql, name: "MySQL" },
  ];

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-3">Experience</h1>

        <p className="text-sm md:text-md text-gray-600">
          Hands-on experience in MERN stack development through internships and
          projects, with strong DSA fundamentals (Java) and deployment exposure.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-6">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-2 cursor-pointer hover:scale-110 duration-300 bg-white"
              key={id}
              title={name}
            >
              <img
                src={logo}
                className="w-[110px] h-[110px] rounded-full object-contain"
                alt={name}
              />
              <div className="mt-2 font-semibold">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
