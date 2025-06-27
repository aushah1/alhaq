import React from "react";

const Projects = () => {
  return (
    <>
      <div className="heading mt-10 w-4/5 mx-auto flex flex-col justify-start items-start gap-4">
        <h3 className="font-extrabold text-4xl">Projects</h3>
        <p className="w-1/2">
          I love bringing ideas to life through clean, modern designs. Here are
          some projects where I’ve helped brands stand out and connect with
          their audience
        </p>
      </div>
      <div className="projects grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto gap-10">
        <div className="img lg:h-96 lg:w-96 h-80 w-80">
          <img className="w-full" src="/project1.png" alt="" />
        </div>
        <div className="img lg:h-96 lg:w-96 h-80 w-80">
          <img className="w-full" src="/project2.png" alt="" />
        </div>
        <div className="img lg:h-96 lg:w-96 h-80 w-80">
          <img className="w-full" src="/project3.png" alt="" />
        </div>
        <div className="img lg:h-96 lg:w-96 h-80 w-80">
          <img className="w-full" src="/project4.png" alt="" />
        </div>
        <div className="img lg:h-96 lg:w-96 h-80 w-80">
          <img className="w-full" src="/project5.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Projects;
