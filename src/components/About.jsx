import React from "react";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="part1 bg-[#cdcdcd] min-h-[34rem] flex flex-col gap-20 items-center justify-center">
        <div className="text flex flex-col text-3xl sm:text-5xl items-center justify-center">
          <h1>Hey, It's Alhaq Gowhar.</h1>
          <h1>Graphic Designer</h1>
          <h1>Based On Kashmir India</h1>
        </div>
        <div className="circle flex items-center justify-center bg-white h-32 w-32 flex-col p-2 rounded-full">
          <p>Scroll down</p>
          <div className="arrow">&darr;</div>
        </div>
      </div>
      <div className="part2 flex flex-col lg:flex-row items-start justify-between py-10 px-10 xl:px-40 gap-10  ">
        <div className="about flex flex-col justify-start items-start gap-5 lg:w-1/3 ">
          <h3 className="font-bold text-2xl">Biography</h3>
          <p className="text-lg text-[#505050]">
            My name is Alhaq Gowhar. I’m a graphic designer who loves creating
            clean, modern designs that help brands connect with people. I work
            mainly in Figma and enjoy turning ideas into visuals that are both
            beautiful and easy to use. I’m always excited to learn new things,
            explore fresh ideas, and collaborate on creative projects.
          </p>
          <h3 className="font-bold text-2xl">My Services</h3>
          <ul className="flex flex-col list-disc">
            <li>Graphic Design</li>
            <li>Product Design</li>
            <li>User Experience Design</li>
          </ul>
          <h3 className="font-bold text-2xl">My Location</h3>
          <p className="text-lg text-[#505050]">
            Anantnag, Jammu & Kashmir, India
          </p>
        </div>
        <div className="photo lg:w-1/3 lg:relative lg:-top-28  ">
          <img
            className="w-full rounded-t-full border border-white"
            src="/profile.png"
            alt=""
          />
        </div>
        <div className="counts xl:w-1/3 w-2/12 flex  justify-start items-center self-center gap-2 ">
          <div className="text">
            <h2 className="count font-bold text-4xl sm:text-8xl">20+</h2>
            <p className="text-[#707070]">Completed Projects</p>
          </div>
          <div className="icon w-6">
            <img className="w-full" src="/project.png" alt="" />
          </div>
        </div>
      </div>
      <div className="part3 links flex justify-center items-center gap-10   ">
        <div className="img h-14">
          <a target="_blank" href="https://www.linkedin.com/in/alhaq-gowhar/">
            <img className="h-full" src="/linkedin2.png" alt="" />{" "}
          </a>
        </div>
        <div className="img h-14">
          <a target="_blank" href="#">
            {" "}
            <img className="h-full" src="/dribble2.png" alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
