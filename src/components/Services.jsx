import React from "react";

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="heading mt-20 w-4/5 mx-auto flex flex-col justify-center items-center gap-4 ">
        <h3 className="font-extrabold text-4xl">My Services</h3>
        <p className="lg:w-1/2 w-full">
          I help brands look their best and connect with people through clean,
          modern designs. From digital products to eye-catching graphics, I
          create visuals that are both beautiful and effective.
        </p>
      </div>
      <div className="steps p-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 gap-5">
        <div className="step  flex flex-col items-center justify-center gap-2 p-2 ">
          <div className="icon w-10">
            <img className="w-full" src="/product.png" alt="" />
          </div>
          <h3 className="font-semibold text-xl">Product Design</h3>
          <p className="text-sm text-[#76838b]">
            I design digital products that are modern, user-friendly, and
            visually appealing. My goal is to create designs that solve real
            problems and bring ideas to life.
          </p>
        </div>
        <div className="step  flex flex-col items-center justify-center gap-2 p-2 ">
          <div className="icon w-10">
            <img className="w-full" src="/user.png" alt="" />
          </div>
          <h3 className="font-semibold text-xl">User Experience (UX) Design</h3>

          <p className="text-sm text-[#76838b]">
            I focus on how people interact with products. I create user flows,
            wireframes, and prototypes to make sure every design is easy to use
            and feels intuitive.
          </p>
        </div>
        <div className="step  flex flex-col items-center justify-center gap-2 p-2 ">
          <div className="icon w-10">
            <img className="w-full" src="/graphic.png" alt="" />
          </div>
          <h3 className="font-semibold text-xl">Graphic Design</h3>
          <p className="text-sm text-[#76838b]">
            I create visual content for brands, like social media graphics,
            advertisements, and marketing materials, ensuring everything looks
            clean and professional.
          </p>
        </div>
        <div className="step  flex flex-col items-center justify-center gap-2 p-2 ">
          <div className="icon w-10">
            <img className="w-full" src="/ui2.png" alt="" />
          </div>
          <h3 className="font-semibold text-xl">UI Design</h3>
          <p className="text-sm text-[#76838b]">
            I craft clean, modern interfaces that look beautiful and help users
            achieve their goals with ease.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
