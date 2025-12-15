import React, { useEffect, useRef, useState } from "react";
import { projects } from "../data";

export default function Projets() {
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const sectionRef = useRef(null);

  const universitaire = projects.filter((project) => project.universitaire);
  const personnel = projects.filter((project) => !project.universitaire);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const closeDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projets"
      ref={sectionRef}
      className={`mt-24 mb-24 flex flex-col items-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100 animate-fade-in-down" : "opacity-0"
      }`}
    >
      <h2 className="text-primary text-4xl font-bold mb-6">Projets</h2>

      {/* Boutons de filtre */}
      <div className="mb-6 flex flex-row flex-wrap justify-center gap-2">
        <button
          className="btn btn-outline"
          onClick={() => setFilteredProjects(projects)}
        >
          TOUT
        </button>
        <button
          className="btn btn-outline"
          onClick={() => setFilteredProjects(universitaire)}
        >
          UNIVERSITAIRE
        </button>
        <button
          className="btn btn-outline"
          onClick={() => setFilteredProjects(personnel)}
        >
          PERSONNEL
        </button>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 px-4">
        {filteredProjects.map((projet, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(projet)}
            className="p-4 card bg-base-100 w-100 shadow-xl cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <figure>
              <img
                src={projet.image}
                alt={projet.title}
                className="w-full h-80 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-primary card-title">{projet.title}</h3>
              <div className="flex flex-row flex-wrap gap-2">
                {projet.technologie.map((techno, idx) => (
                  <div key={idx} className="badge badge-outline badge-primary">
                    {techno}
                  </div>
                ))}
              </div>
              <p className="text-primary line-clamp-3">{projet.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <dialog className="modal modal-open">
          <div className="modal-box w-11/12 max-w-5xl">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeDetails}
            >
              ✕
            </button>

            <h3 className="font-bold text-2xl mb-4 text-primary">
              {selectedProject.title}
            </h3>

            <div className="flex flex-col lg:flex-row gap-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-xl lg:w-1/2 object-cover max-h-[400px]"
              />

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologie.map((techno, idx) => (
                    <div key={idx} className="badge badge-primary">
                      {techno}
                    </div>
                  ))}
                </div>

                <p className="py-4 text-lg">{selectedProject.description}</p>
              </div>
            </div>

            <div className="modal-action">
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Voir le Code / Site
                </a>
              )}
              <button className="btn" onClick={closeDetails}>
                Fermer
              </button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={closeDetails}>close</button>
          </form>
        </dialog>
      )}
    </section>
  );
}
