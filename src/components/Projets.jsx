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

  // Simple, reusable image carousel used for project cards and in the modal
  function Carousel({
    images = [],
    className = "",
    imgClassName = "",
    altPrefix = "",
  }) {
    const [index, setIndex] = useState(0);
    useEffect(() => setIndex(0), [images]);

    const prev = (e) => {
      e.stopPropagation();
      setIndex((i) => (i - 1 + images.length) % images.length);
    };
    const next = (e) => {
      e.stopPropagation();
      setIndex((i) => (i + 1) % images.length);
    };

    if (!images || images.length === 0) return null;

    return (
      <div
        className={`relative ${className}`}
        role="region"
        aria-label={`${altPrefix} carousel`}
        tabIndex={0}
      >
        <img
          src={images[index]}
          alt={`${altPrefix} - ${index + 1}`}
          className={imgClassName}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
                className="stroke-current"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
                className="stroke-current"
              >
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIndex(i);
                  }}
                  aria-label={`Go to image ${i + 1}`}
                  className={`w-2 h-2 rounded-full ${
                    i === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

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
              <Carousel
                images={projet.images || [projet.image]}
                altPrefix={projet.title}
                className="rounded-xl overflow-hidden"
                imgClassName="w-full h-80 object-cover"
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
              <Carousel
                images={selectedProject.images || [selectedProject.image]}
                altPrefix={selectedProject.title}
                className="lg:w-1/2"
                imgClassName="rounded-xl lg:w-full object-cover max-h-[400px]"
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
