import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom"; // 1. Importer createPortal
import { projects } from "../data";

function Carousel({
  images = [],
  className = "",
  imgClassName = "",
  altPrefix = "",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [images]);

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
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors"
          >
            ❮
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors"
          >
            ❯
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === index ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

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
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const closeDetails = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section
        id="projets"
        ref={sectionRef}
        className={`mt-24 mb-24 flex flex-col items-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100 animate-fade-in-down" : "opacity-0"
        }`}
      >
        <h2 className="font-title tracking-wide text-7xl font-bold mb-6">
          PROJETS
        </h2>

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
                  images={projet.images || (projet.image ? [projet.image] : [])}
                  altPrefix={projet.title}
                  className="rounded-xl overflow-hidden w-full"
                  imgClassName="w-full h-80 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="font-title text-4xl card-title">
                  {projet.title}
                </h3>
                <div className="flex flex-row flex-wrap gap-2">
                  {projet.technologie.map((techno, idx) => (
                    <div
                      key={idx}
                      className="badge badge-outline badge-primary"
                    >
                      {techno}
                    </div>
                  ))}
                </div>
                <p className="text-primary line-clamp-3">
                  {projet.description}
                </p>
                {projet.universitaire && projet.competences && (
                  <div className="mt-4 border-t border-gray-100 pt-3">
                    <p className="text-m font-bold text-gray-500 mb-2 uppercase tracking-wide">
                      Compétences BUT validées :
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {projet.competences.map((comp, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-s font-medium  rounded-md"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject &&
        createPortal(
          <dialog className="modal modal-open modal-bottom sm:modal-middle">
            <div className="modal-box w-11/12 max-w-5xl relative bg-base-100">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-50"
                onClick={closeDetails}
              >
                ✕
              </button>

              <h3 className="font-bold text-2xl mb-4 text-primary pr-8">
                {selectedProject.title}
              </h3>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2">
                  <Carousel
                    images={
                      selectedProject.images ||
                      (selectedProject.image ? [selectedProject.image] : [])
                    }
                    altPrefix={selectedProject.title}
                    className="w-full h-full"
                    imgClassName="rounded-xl w-full h-auto object-contain max-h-[60vh] bg-base-200"
                  />
                </div>

                <div className="flex flex-col gap-4 lg:w-1/2">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologie.map((techno, idx) => (
                      <div key={idx} className="badge badge-primary badge-lg">
                        {techno}
                      </div>
                    ))}
                  </div>

                  <p className="py-4 text-lg leading-relaxed max-h-[40vh] overflow-y-auto">
                    {selectedProject.description}
                  </p>

                  {selectedProject.universitaire &&
                    selectedProject.competences && (
                      <div className="mt-4 border-t border-gray-100 pt-3">
                        <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">
                          Compétences BUT validées :
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {selectedProject.competences.map((comp, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-s font-medium rounded-md "
                            >
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  <div className="modal-action mt-auto">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        CODE
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        DEMO
                      </a>
                    )}
                    <button className="btn" onClick={closeDetails}>
                      Fermer
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button onClick={closeDetails} type="button">
                close
              </button>
            </form>
          </dialog>,
          document.body,
        )}
    </>
  );
}
