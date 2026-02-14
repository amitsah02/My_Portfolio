import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>

        <p>
          Hello, I’m <span className="font-semibold">Amit Kumar Sah</span> — a
          MERN Stack Developer with real industrial exposure and a strong
          problem-solving mindset. I build scalable, clean, and user-friendly web
          applications using <span className="font-semibold">MongoDB, Express, React, and Node.js</span>.
          I enjoy turning ideas into production-ready products with secure authentication,
          optimized APIs, and smooth UI experiences.
        </p>

        <br />

        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span className="block leading-relaxed">
          <span className="font-semibold">B.Tech (CSE)</span> — Rungta College of Engineering & Technology, Bhilai (2022–2026) |{" "}
          <span className="font-semibold">CGPA:</span> 7.5
          <br />
          <span className="font-semibold">XII (BSEB)</span> — R.K. Dwarika College, Patna (2020) |{" "}
          <span className="font-semibold">74.8%</span>
          <br />
        </span>

        <br />
        <br />

        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span className="block leading-relaxed">
          <span className="font-semibold">Frontend:</span> HTML, CSS, JavaScript, React.js, Bootstrap
          <br />
          <span className="font-semibold">Backend:</span> Node.js, Express.js, REST APIs, Authentication
          <br />
          <span className="font-semibold">Database & Tools:</span> MongoDB, MySQL, MongoDB Atlas, Git
          <br />
          <span className="font-semibold">Deployment:</span> Render, Cloudinary
          <br />
          <span className="font-semibold">Core Strength:</span> DSA (Java), OOP, clean-code practices
        </span>

        <br />
        <br />

        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span className="block leading-relaxed">
          <span className="font-semibold">Industrial Internship — Bhilai Steel Plant (SAIL)</span>{" "}
          (15 Sept 2025 – 11 Oct 2025)
          <br />
          Worked on Podman-based container automation and workflow optimization.
          <br />
          <br />
          <span className="font-semibold">Web Development Intern — Eduskills</span>{" "}
          (Apr 2025 – Jun 2025)
          <br />
          Gained hands-on experience building MERN stack applications.
          <br />
          <br />
          <span className="font-semibold">AWS Data Engineering Virtual Intern — Eduskills</span>{" "}
          (Jan 2025 – Mar 2025)
          <br />
          Built ETL pipelines using AWS S3, Glue, Lambda, and Athena.
          <br />
          <br />
          <span className="font-semibold">Generative AI Virtual Intern — Eduskills</span>{" "}
          (Oct 2024 – Dec 2024)
          <br />
          Applied GPT, Stable Diffusion, and prompt engineering to practical use cases.
        </span>

        <br />
        <br />

        

        <h1 className="text-green-600 font-semibold text-xl">
          Achievements
        </h1>
        <span className="block leading-relaxed">
          Solved <span className="font-semibold">700+</span> DSA problems across LeetCode, CodeChef, GFG, and HackerRank.
        </span>

        <br />
        <br />

        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to build reliable and scalable software that solves real-world problems.
          I focus on writing clean maintainable code, improving performance, and continuously
          learning modern technologies to deliver better products and user experiences.
        </p>
      </div>
    </div>
  );
}

export default About;
