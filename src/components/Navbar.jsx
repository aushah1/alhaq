import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Projects", link: "#projects" },
    { id: 4, name: "Services", link: "#services" },
    { id: 5, name: "Contact", link: "#contact" },
  ];

  return (
    <>
      <nav className="bg-[#cdcdcd]/80 backdrop-blur-sm z-50 h-16 px-4 lg:px-20 flex justify-between items-center gap-16 sticky top-0 ">
        {/* Left - Nav links (Desktop) */}
        <ul className="lg:flex hidden items-center justify-between gap-10 w-1/3">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={
                active === item.name ? "text-black" : "text-[#76838b]"
              }>
              <a
                href={item.link}
                onClick={() => setActive(item.name)}
                className="hover:text-black">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Center - Name */}
        <div className="name flex flex-col justify-center items-center w-1/3 text-xs sm:text-base">
          <h5>Alhaq The Designer</h5>
          <h6 className="text-[#505050]">Graphic Designer</h6>
        </div>

        {/* Right - Social Links (Desktop) */}
        <div className="links hidden lg:flex gap-3 justify-center items-center w-1/3">
          <div className="h-8 bg-white p-2 rounded-lg flex items-center justify-center">
            <a target="_blank" href="https://www.linkedin.com/in/alhaq-gowhar/">
              {" "}
              <img className="h-5" src="/linkedin.png" alt="linkedin" />
            </a>
          </div>
          <div className="h-8 bg-white p-2 rounded-lg flex items-center justify-center">
            <a target="_blank" href="#">
              {" "}
              <img className="h-5" src="/dribble.png" alt="dribble" />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden w-1/3 flex justify-end">
          <button
            className="flex flex-col gap-1"
            onClick={() => setIsOpen(!isOpen)}>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-[#cdcdcd] flex flex-col items-center gap-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={
                  active === item.name
                    ? "text-black text-lg"
                    : "text-[#76838b] text-lg"
                }>
                <a
                  href={item.link}
                  onClick={() => {
                    setActive(item.name);
                    setIsOpen(false);
                  }}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-3 mt-4">
            <div className="h-8 bg-white p-2 rounded-lg flex items-center justify-center">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/alhaq-gowhar/">
                {" "}
                <img className="h-5" src="/linkedin.png" alt="linkedin" />
              </a>
            </div>
            <div className="h-8 bg-white p-2 rounded-lg flex items-center justify-center">
              <a target="_blank" href="#">
                {" "}
                <img className="h-5" src="/dribble.png" alt="dribble" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
