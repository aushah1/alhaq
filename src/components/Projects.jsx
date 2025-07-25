import React, { useState } from "react";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Spice Clothing Website",
      description:
        "Designed a modern, minimal e-commerce site for a fashion brand, featuring clean layouts, bold typography, and engaging visuals to showcase products effectively.",
      src: "/project1.png",
    },
    {
      id: 2,
      name: "Sidcup Family Cricket Website",
      description:
        "I developed a dynamic and vibrant website for a cricket stadium and entertainment venue, using energetic imagery and bold layouts to capture the excitement of the sport and attract visitors.",
      src: "/project2.jpg",
    },
    {
      id: 3,
      name: "Youth Talks by Chris Beyon",
      description:
        "A fresh new podcast spotlighting the real voices of today’s youth. We’re diving into honest conversations about life, identity, ambition, mental health, and everything in between.",
      src: "/project3.png",
    },
    {
      id: 4,
      name: "Digital Agency Website",
      description:
        "I designed a modern, minimal website for a digital agency, focusing on clean layouts, bold typography, and visuals that help build trust and showcase services effectively.",
      src: "/project4.jpg",
    },
    {
      id: 5,
      name: "Anywhere Skincare Advertisement",
      description:
        "I crafted a fresh, elegant advertisement for a skincare brand, highlighting natural ingredients and modern design elements to connect with beauty-conscious audiences and promote the product effectively.",
      src: "/project5.png",
    },
  ];

  return (
    <>
      <div
        id="projects"
        className="my-16   w-11/12 lg:w-4/5 mx-auto flex flex-col gap-4">
        <h3 className="font-extrabold text-4xl text-gray-900">Projects</h3>
        <p className="lg:w-1/2 w-full text-gray-600">
          I love bringing ideas to life through clean, modern designs. Here are
          some projects where I’ve helped brands stand out and connect with
          their audience.
        </p>
      </div>

      <div className="w-[98%] md:w-[80%] mx-auto flex flex-col gap-16  ">
        {projects.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center justify-between gap-10 transition-all duration-700 ease-in-out transform hover:scale-[1.01]`}>
            <div className="w-full md:w-1/2 group relative overflow-hidden">
              <img
                className="rounded-lg w-full max-h-96 object-cover shadow-md cursor-pointer object-top
    transition-transform duration-500 ease-in-out group-hover:scale-105
    animate-fadeUp"
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
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-500 ease-in-out animate-fade-in"
          onClick={() => setSelectedImage(null)}>
          <div
            className="max-h-4xl h-full p-4"
            onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Full view"
              className="h-full w-auto rounded-lg transition-transform duration-500 ease-in-out animate-scale-in"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-all duration-300 ease-in-out">
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0.9);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease forwards;
        }
      `}</style>
    </>
  );
};

export default Projects;
