import { skills, butSkills } from "../data.js";
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
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.5 }
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
      id="competences"
      ref={sectionRef}
      className={`py-8 flex flex-col items-center mt-24 mb-24 ${
        isVisible ? "opacity-100 animate-fade-in-down" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-title tracking-wide text-7xl font-bold mb-16 text-center bg-clip-text">
          COMPÉTENCES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-lg hover:border-white/20 transition-colors"
            >
              <h3 className="text-4xl font-title font-bold mb-6 border-b border-white/10 pb-2 inline-block">
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

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-lg transition-colors backdrop-blur-lg hover:border-white/20 relative overflow-visible">
            <h3 className="text-4xl font-title font-bold mb-6 pb-2 border-b border-white/10 inline-block">
              Compétences BUT
            </h3>

            <div className="flex flex-wrap gap-3">
              {butSkills.map((but) => (
                <div
                  key={but.name}
                  className="group relative flex items-center bg-black/40 gap-2 px-4 py-2 rounded-lg border border-white/10 hover:scale-105 transition-all cursor-help"
                >
                  <span className="text-lg">{but.nom}</span>

                  <div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 
                                bg-gray-900 text-white text-sm text-center rounded-xl shadow-xl border border-white/10
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none"
                  >
                    {but.description}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
