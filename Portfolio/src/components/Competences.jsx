import { skills } from "../data.js"
import React, { useEffect, useRef, useState } from "react";

export default function Competences() {
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
          threshold: 0.5
          , // Trigger when 10% of the section is visible
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
    <section id="competences" 
    ref={sectionRef} 
    className={`py-8 flex flex-col items-center mt-24 mb-24 ${
      isVisible ? "opacity-100 animate-fade-in-down" : "opacity-0"
    }`} 
    >
      <h2 className="text-4xl font-bold  mb-6">Competences</h2>
      
      <div className="container mt-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([key, value]) => (
          <div className="p-4 shadow-lg rounded-lg"key={key}>
            <h3 className="text-2xl font-bold  mb-4">{key}</h3>
            <div className="flex flex-wrap gap-4">
              {value.map(skill => (
                <img className="w-12 h-12" key={skill} src={`./icons/${skill}.svg`} alt={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
