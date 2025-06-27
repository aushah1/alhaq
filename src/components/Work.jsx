import React from "react";

const Work = () => {
  return (
    <>
      <div className="work-process flex flex-col items-center justify-center py-10">
        <div className="heading px-10 py-5 bg-black text-white w-1/2 flex flex-col items-center justify-center gap-6">
          <h2 className="text-5xl">MY Work Process</h2>
          <p>
            I start by understanding your goals, then craft wireframes and
            prototypes in Figma to shape the user journey. Next, I design clean,
            modern visuals that bring ideas to life. Finally, I deliver polished
            assets ready for launch — all with clear, friendly communication
            along the way.
          </p>
        </div>
        <div className="steps max-w-64s flex flex-col md:flex-row items-start justify-center gap-4">
          <div className="step max-w-64 flex flex-col items-center justify-center gap-2 p-2 pt-5">
            <div className="icon w-10">
              <img className="w-full" src="/research.png" alt="" />
            </div>
            <h3 className="font-semibold text-xl">Research & Understand</h3>
            <p className="text-sm">
              I start every project by getting to know your business, your
              users, and your goals. This helps me find the right direction and
              ensures the design truly solves the problem at hand.
            </p>
          </div>
          <div className="step max-w-64 flex flex-col items-center justify-center gap-2 p-2 pt-20">
            <div className="icon w-10">
              <img className="w-full" src="/ux.png" alt="" />
            </div>
            <h3 className="font-semibold text-xl">UX Design</h3>
            <p className="text-sm">
              I map out the user journey with wireframes, user flows, and
              prototypes in Figma. This helps visualize how people will move
              through your product and makes sure everything feels smooth and
              intuitive.
            </p>
          </div>
          <div className="step max-w-64 flex flex-col items-center justify-center gap-2 p-2 pt-36">
            <div className="icon w-10">
              <img className="w-full" src="/ui.png" alt="" />
            </div>
            <h3 className="font-semibold text-xl">UI Design</h3>
            <p className="text-sm">
              I focus on crafting clean, modern visuals that reflect your brand
              and create a great first impression. My designs are not just
              beautiful—they’re functional and user-friendly.
            </p>
          </div>
          <div className="step max-w-64 flex flex-col items-center justify-center gap-2 p-2 pt-52">
            <div className="icon w-10">
              <img className="w-full" src="/deliver.png" alt="" />
            </div>
            <h3 className="font-semibold text-xl">Delivery</h3>
            <p className="text-sm">
              I prepare and share all final design assets, ensuring they’re
              organized, developer-friendly, and ready for a smooth launch. I’m
              always here for any tweaks or support you need afterward.
            </p>
          </div>
        </div>
      </div>
      <div className="about flex justify-center items-center  h-[40rem] ">
        <div className="part1 w-1/3 bg-black h-full flex items-center justify-center relative ">
          <div className="lg:h-[32rem] h-[23rem]  lg:w-[32rem] w-[23rem] rounded-full bg-white absolute left-[48%] overflow-hidden flex flex-col gap-5 items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.3)] p-6">
            <h3 className="lg:text-3xl text-2xl font-semibold text-center">
              Do you need a designer.
              <br /> Request a quote!
            </h3>
            <p className="text-center">
              Do you have a project idea you’d like to bring to life? I’d love
              to help turn your vision into a clean, modern design. Let’s
              connect and make something great together!
            </p>
            <p>
              📧 Email me:
              <a className="text-blue-600" href="mailto:alhaqgowhar@gmail.com">
                alhaqgowhar@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="part2 w-1/4"></div>
        <div className="part3 w-2/5 lg:px-20 px-10 flex flex-col items-center justify-center gap-6 ">
          <div className="skills">
            <ul className="flex justify-start items-start gap-10 text-[#76838b]">
              <li>UI/UX Designer</li>
              <li>Product Designer</li>
              <li>Graphic Designer</li>
            </ul>
          </div>
          <h2 className="lg:text-5xl text-4xl">
            I’m a passionate designer with a keen eye for details.
          </h2>
          <p className="text-[#555657]">
            I believe that great design should be both beautiful and functional,
            helping brands connect with people and achieve real results.
          </p>
          <div className="button bg-black p-3 text-white font-bold">
            <button>LET'S WORK TOGETHER &rarr;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
