import React from "react";
import hotel from "../assets/wanderlust.png";
import apnavideo from "../assets/ApnaVideoCall.png";
import fintrack from "../assets/Fintrack.png";

function Projects() {
  const projects = [
    {
      id: 1,
      logo: hotel,
      name: " StaySphere – Hotel Booking Platform",
      desc:
        "Full-stack booking platform with authentication, maps, image uploads, and complete CRUD workflow.",
      stack: ["React", "Node", "Express", "MongoDB", "Cloudinary", "Map"],
      type: "MERN Full Stack",
      live: "https://wanderlust-booking-platform.onrender.com/",
      source: "https://github.com/amitsah02/wanderlust-booking-platform.",
      demo: "#",
    },
    {
      id: 2,
      logo: fintrack,
      name: "FinTrack – Trading & Portfolio Management Web Application ",
      desc:
        "Full-stack trading platform with user login, interactive dashboard, order management, holdings tracking, and portfolio data visualization.",
      stack: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
      type: "MERN Full Stack",
      live: "https://fintrack-financial-trading.onrender.com",
      source: "https://github.com/amitsah02/Fintrack",
      demo: "#",
    },
    {
      id: 3,
      logo: apnavideo,
      name: "Apna Video Call – Real-Time Video Communication Platform",
      desc:
        "Real-time video calling app with peer-to-peer audio and video streaming and on-demand meeting rooms.",
      stack: ["React", "Node.js", "Socket.io", "WebRTC"],
      type: "Real-Time Full Stack",
      live: "https://apna-video-call-xxi2.onrender.com",
      source: "https://github.com/amitsah02", // replace with the exact Apna Video Call repo link
      demo: "#",
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-sm md:text-md text-gray-600">
          Featured projects showcasing my development and deployments.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map(({ id, logo, name, desc, stack, live, source, demo, type }) => (
            <div
              key={id}
              className="border rounded-xl shadow-md p-4 hover:shadow-lg hover:scale-[1.02] duration-300 bg-white"
            >
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  className="w-14 h-14 rounded-lg border p-1 object-contain"
                  alt={name}
                />
                <div>
                  <h2 className="font-bold text-lg">{name}</h2>
                  <p className="text-xs text-gray-500">{type}</p>
                </div>
              </div>

              <p className="mt-3 text-sm text-gray-700">{desc}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {stack.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full border bg-gray-50"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
                >
                  Demo
                </a>
                <a
                  href={source}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
                >
                  Source
                </a>
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-900 hover:bg-black text-white font-semibold px-4 py-2 rounded"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;