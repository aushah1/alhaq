import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-16 px-28 min-h-[40rem] w-full bg-black text-white flex flex-col justify-center items-center gap-20">
        <div className="top flex justify-between items-center lg:gap-24 gap-10">
          <div className="text  w-1/2 flex flex-col justify-between items-start gap-5">
            <h3 className="text-4xl">
              Have a project idea. Get in touch and let's chat!
            </h3>
            <p className="text-[#c1c1c1]">
              Do your fancy saying hi to me or do you want to get started with
              your project and you need my help? Feel free to contact me.
            </p>
            <a className="font-bold" href="mailto:alhaqgowhar119@gmail.com">
              LET'S WORK TOGETHER &rarr;{" "}
            </a>
          </div>
          <div className="links w-1/2 flex flex-col justify-between items-center gap-5">
            <div className="box flex justify-between items-center gap-2">
              <div className="icon w-14">
                <img className="invert w-full" src="/dribble.png" alt="" />
              </div>
              <div className="text">
                <h4 className="text-2xl font-bold">Dribble</h4>
                <p className="text-[#c1c1c1]">alhaq.dribble.com</p>
              </div>
            </div>
            <div className="box flex justify-between items-center gap-2">
              <div className="icon w-14">
                <img className="invert w-full" src="/linkedin.png" alt="" />
              </div>
              <div className="text">
                <h4 className="text-2xl font-bold">LinkedIn</h4>
                <p className="text-[#c1c1c1]">alhaq.dribble.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="middle grid grid-cols-3 gap-10">
          <div className="box flex flex-col items-center justify-center">
            <div className="icon w-8">
              <img className="w-full" src="/mail.png" alt="" />
            </div>
            <p className="text-[#c1c1c1] text-sm">EMAIL ADDRESS</p>
            <a className="font-bold" href="">
              alhaqgowhar119@gmail.com
            </a>
          </div>
          <div className="box flex flex-col items-center justify-center">
            <div className="icon w-8">
              <img className="w-full" src="/location.png" alt="" />
            </div>
            <p className="text-[#c1c1c1] text-sm">Location</p>
            <a className="font-bold" href="">
              Kashmir.India
            </a>
          </div>
          <div className="box flex flex-col items-center justify-center">
            <div className="icon w-8">
              <img className="w-full" src="/phone.png" alt="" />
            </div>
            <p className="text-[#c1c1c1] text-sm">Phone Number</p>
            <a className="font-bold" href="">
              8899886142
            </a>
          </div>
        </div>
        <div className="bottom pt-10 text-[#c1c1c1] flex justify-between items-center gap-6 lg:gap-16 text-sm">
          <div className="name flex flex-col justify-center items-center  ">
            <h5 className="text-white">Alhaq The Designer</h5>
            <h6>Graphic Designer</h6>
          </div>
          <ul className="flex items-center justify-between gap-2 ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="flex gap-3 justify-center items-center ">
            &copy; Alhaq Gowhar
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
