import React from "react";

const Projects = () => {
  return (
    <>
      <div className="heading my-10 w-11/12 lg:w-4/5 mx-auto flex flex-col justify-start items-start gap-4">
        <h3 className="font-extrabold text-4xl">Projects</h3>
        <p className="lg:w-1/2 w-full">
          I love bringing ideas to life through clean, modern designs. Here are
          some projects where I’ve helped brands stand out and connect with
          their audience
        </p>
      </div>
      <div className="projects grid grid-cols-1 min-[900px]:grid-cols-2 lg:grid-cols-3 min-[900px]:w-[85%] w-full mx-auto gap-10 place-items-center">
        <div className="img xl:h-[22rem] xl:w-[22rem] lg:h-72 lg:w-72  h-80 w-80">
          <img className="w-full" src="/project1.png" alt="" />
        </div>
        <div className="img xl:h-[22rem] xl:w-[22rem] lg:h-72 lg:w-72 h-80 w-80">
          <img className="w-full" src="/project2.png" alt="" />
        </div>
        <div className="img xl:h-[22rem] xl:w-[22rem] lg:h-72 lg:w-72 h-80 w-80">
          <img className="w-full" src="/project3.png" alt="" />
        </div>
        <div className="img xl:h-[22rem] xl:w-[22rem] lg:h-72 lg:w-72 h-80 w-80">
          <img className="w-full" src="/project4.png" alt="" />
        </div>
        <div className="img xl:h-[22rem] xl:w-[22rem] lg:h-72 lg:w-72 h-80 w-80">
          <img className="w-full" src="/project5.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Projects;
