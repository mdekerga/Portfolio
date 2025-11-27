import React, { useEffect, useRef, useState } from "react";
import { projects } from "../data";

function showProjects(projectsToShow) {
  return projectsToShow.map((projet, index) => (
    <div key={index} className="p-4 card bg-base-100 w-100 shadow-xl">
      <figure>
        <img src={projet.image} alt={projet.title} className="w-100 h-80" />
      </figure>
      <div className="card-body">
        <h3 className="text-primary card-title">{projet.title}</h3>
        <div className="container flex flex-row flex-wrap">
          {projet.technologie.map((techno, idx) => (
            <div key={idx} className="text-primary badge badge-outline">
              {techno}
            </div>
          ))}
        </div>
        <p className="text-primary">{projet.description}</p>
        <div className="card-actions justify-end">
          <a href={projet.link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">CODE</button>
          </a>
        </div>
      </div>
    </div>
  ));
}

export default function Projets() {
  const [isVisible, setIsVisible] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const sectionRef = useRef(null);

  // Example filters, replace with your actual filter logic
  const universitaire = projects.filter((project) => project.universitaire);
  const personnel = projects.filter((project) => !project.universitaire);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current); // Stop observing after it becomes visible
        }
      },
      {
        threshold: 0.3, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projets"
      ref={sectionRef}
      className={`mt-24 mb-24 flex flex-col items-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100 animate-fade-in-down" : "opacity-0"
      }`}
    >
      <h2 className="text-primary text-4xl font-bold mb-6">Projets</h2>
      <div className="mb-6 flex flex-row">
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={() => setFilteredProjects(projects)}
        >
          TOUT
        </button>
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={() => setFilteredProjects(universitaire)}
        >
          UNIVERSITAIRE
        </button>
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={() => setFilteredProjects(personnel)}
        >
          PERSONNEL
        </button>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {showProjects(filteredProjects)}
      </div>
    </section>
  );
}
