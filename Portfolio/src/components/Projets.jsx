import React, { useEffect, useRef, useState } from "react";
import { projects } from "../data";

export default function Projets() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      <h2 className="text-4xl font-bold mb-6">Projets</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {projects.map((projet, index) => (
          <div key={index} className="p-4 card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={projet.image} alt={projet.title} className="w-96 h-80" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{projet.title}</h3>
              <div className="container flex flex-row flex-wrap">
                {projet.technologie.map((techno, index) => (
                  <div key={index} className="badge badge-outline">
                    {techno}
                  </div>
                ))}
              </div>
              <p>{projet.description}</p>
              <div className="card-actions justify-end">
                <a
                  href={projet.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn">CODE</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
