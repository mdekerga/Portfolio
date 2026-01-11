import React, { useEffect, useRef, useState } from "react";
import { experiences } from "../data";

export default function Experiences() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      {
        threshold: 0.5,
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
      id="formation"
      ref={sectionRef}
      className={`mt-24 flex flex-col items-center ${
        isVisible ? "opacity-100 animate-fade-in-down" : "opacity-0"
      }`}
    >
      <h2 className="font-title tracking-wide text-7xl font-bold mb-6">
        EXPÉRIENCES
      </h2>

      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex-grow">
          {experiences.map((experience, index) => (
            <div className="mb-16 mt-16" key={index}>
              <div className="flex items-center">
                <img
                  className="w-32 h-32 mr-8"
                  src={experience.logo}
                  alt="Logo"
                />
                <div>
                  <h4 className="font-bold text-lg">
                    {experience.dateDebut} - {experience.dateFin}
                  </h4>
                  <h4 className="font-bold text-lg">{experience.emploi}</h4>
                  <h4 className="font-bold text-lg">{experience.entreprise}</h4>
                  <p className="text-lg ">{experience.lieu}</p>
                  <p className="text-lg">{experience.description}</p>
                  <ul className="list-disc">
                    {experience.taches.map((tache, id) => (
                      <li>{tache}</li>
                    ))}
                  </ul>
                  {experience.technologie.map((techno, id) => (
                    <div key={id} className="badge badge-outline badge-primary">
                      {techno}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
