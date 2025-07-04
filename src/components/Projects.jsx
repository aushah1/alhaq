import React, { useState } from "react";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Digital Agency Website",
      description:
        "I designed a modern, minimal website for a digital agency, focusing on clean layouts, bold typography, and visuals that help build trust and showcase services effectively.",
      src: "/project1.png",
    },
    {
      id: 2,
      name: "Clohouse E-commerce Website",
      description:
        "I created a sleek and stylish e-commerce interface for a fashion brand, with intuitive navigation, engaging product displays, and a modern aesthetic that enhances the shopping experience.",
      src: "/project2.png",
    },
    {
      id: 3,
      name: "Sidcup Family Cricket Website",
      description:
        "I developed a dynamic and vibrant website for a cricket stadium and entertainment venue, using energetic imagery and bold layouts to capture the excitement of the sport and attract visitors.",
      src: "/project3.png",
    },
    {
      id: 4,
      name: "Anywhere Skincare Advertisement",
      description:
        "I crafted a fresh, elegant advertisement for a skincare brand, highlighting natural ingredients and modern design elements to connect with beauty-conscious audiences and promote the product effectively.",
      src: "/project4.png",
    },
  ];

  return (
    <>
      <div
        id="projects"
        className="my-16 w-11/12 lg:w-4/5 mx-auto flex flex-col gap-4">
        <h3 className="font-extrabold text-4xl text-gray-900">Projects</h3>
        <p className="lg:w-1/2 w-full text-gray-600">
          I love bringing ideas to life through clean, modern designs. Here are
          some projects where I’ve helped brands stand out and connect with
          their audience.
        </p>
      </div>

      <div className="w-[98%] md:w-[80%] mx-auto flex flex-col gap-16">
        {projects.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center justify-between gap-10`}>
            <div className="w-full md:w-1/2">
              <img
                className="rounded-lg w-full h-auto object-cover shadow-md cursor-pointer"
                src={item.src}
                alt={item.name}
                onClick={() => setSelectedImage(item.src)}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-3xl font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}>
          <div
            className="max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Full view"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
