import React, { useEffect, useRef, useState } from "react";

export default function Presentation() {
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
    <section
      id="presentation"
      ref={sectionRef}
      className={`mt-24 mb-24 flex flex-col items-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100 animate-fade-in-down" : "opacity-0"
      }`}
    >
      <h2 className="text-4xl font-bold mb-6">Présentation</h2>
      <div className="container flex mt-6">
        <div className="avatar">
          <div className="w-96 rounded">
            <img src="./images/113.jpg" alt="Developer's Avatar" />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-lg ml-6 max-w-prose">
            Bienvenue dans le portfolio d'un développeur passionné et expérimenté ! Je suis un développeur polyvalent avec une passion profonde pour la création d'applications innovantes et fonctionnelles. Mon expertise s'étend à plusieurs langages de programmation tels que Java, Python et C.
          </p>
          <br />
          <p className="text-lg ml-6 max-w-prose">
            Mon objectif est de concevoir des solutions logicielles robustes et élégantes, en mettant l'accent sur l'expérience utilisateur et la performance. Explorez mon portfolio pour découvrir mes projets précédents et voir comment j'ai contribué à créer des produits de haute qualité.
          </p>
        </div>
      </div>
    </section>
  );
}