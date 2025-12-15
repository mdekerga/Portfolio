import { skills } from "../data.js";
import React, { useEffect, useRef, useState } from "react";

export default function CompetencesCloud() {
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
        threshold: 0.5, // Trigger when 10% of the section is visible
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
      id="Competences"
      ref={sectionRef}
      className={`py-8 flex flex-col items-center mt-24 mb-24 ${
        isVisible ? "opacity-100 animate-fade-in-down" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text">
          Compétences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-lg hover:border-white/20 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6  border-b border-white/10 pb-2 inline-block">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg border border-white/5 hover:bg-white/10 hover:scale-105 transition-all cursor-default"
                  >
                    <img
                      className="w-12 h-12"
                      src={`./icons/${skill}.svg`}
                      alt={skill}
                    />
                    <span className="text-lg">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
